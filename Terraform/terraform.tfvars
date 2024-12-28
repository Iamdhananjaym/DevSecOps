aws_region          = "us-east-2"
vpc_cidr            = "15.0.0.0/16"
public_subnet_cidr  = "15.0.1.0/24"
private_subnet_cidr = "15.0.2.0/24"
availability_zone   = "us-east-2a"
ami_id              = "ami-036841078a4b68e14" # Replace with your desired AMI ID
instance_type       = "t2.micro"
s3_bucket           = "statefile-testing2" # Replace with your S3 bucket name
s3_key              = "terraform/state"