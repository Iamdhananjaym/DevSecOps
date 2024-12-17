# Create VPC
resource "aws_vpc" "Testing12" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "Testing12-vpc"
  }
}

# Create Internet Gateway
resource "aws_internet_gateway" "Testing12" {
  vpc_id = aws_vpc.Testing12.id
  tags = {
    Name = "Testing12-igw"
  }
}

# Create Public Subnet
resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.Testing12.id
  cidr_block              = var.public_subnet_cidr
  map_public_ip_on_launch = true
  availability_zone       = var.availability_zone
  tags = {
    Name = "public-subnet"
  }
}

# Create Security Group
resource "aws_security_group" "web-sg" {
  vpc_id = aws_vpc.Testing12.id

  # Allow HTTP access
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow SSH access
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web-sg"
  }
}

# Create EC2 Instance with Docker Installed
resource "aws_instance" "webtesting" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  subnet_id              = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.web-sg.id]

  user_data = <<-EOF
              #!/bin/bash
              apt-get update
              apt-get install -y apt-transport-https ca-certificates curl software-properties-common gnupg lsb-release unzip

              # Install Docker
              curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
              add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
              apt-get update
              apt-get install -y docker-ce
              usermod -aG docker ubuntu
              systemctl enable docker
              systemctl start docker

              # Install Terraform
              wget -O - https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
              echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) Testing12" | sudo tee /etc/apt/sources.list.d/hashicorp.list
              apt-get update
              apt-get install -y terraform

              # Verify Installation
              terraform --version
              docker --version
              EOF

  tags = {
    Name = "MyTerraformInstance"
  }
}

# Create AMI from the EC2 Instance
resource "aws_ami_from_instance" "docker_ami" {
  name               = "docker-ami-${formatdate("YYYY-MM-DD-HH-mm-ss", timestamp())}"
  source_instance_id = aws_instance.webtesting.id

  depends_on = [aws_instance.webtesting] # Ensure this runs after the instance is fully created

  tags = {
    Name = "DockerAMI"
  }
}

# Null resource to destroy instance after AMI creation
/*
resource "null_resource" "terminate_instance" {
  triggers = {
    ami_created = aws_ami_from_instance.docker_ami.id
  }

  provisioner "local-exec" {
    command = "terraform destroy -target=aws_instance.webtesting -auto-approve"
  }
}
*/
