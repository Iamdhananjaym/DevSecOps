variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  #default     = "us-east-2"
}

variable "vpc_cidr" {
  description = "The CIDR block for the VPC"
  type        = string
  #default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "The CIDR block for the public subnet"
  type        = string
  #default     = "10.0.1.0/24"
}

variable "private_subnet_cidr" {
  description = "The CIDR block for the private subnet"
  type        = string
  #default     = "10.0.2.0/24"
}

variable "availability_zone" {
  description = "The availability zone to deploy resources in"
  type        = string
  #default     = "us-east-2a"
}

variable "ami_id" {
  description = "The AMI ID for the EC2 instance"
  type        = string
}

variable "instance_type" {
  description = "The instance type for the EC2 instance"
  type        = string
  #default     = "t2.micro"
}

variable "s3_bucket" {
  description = "The name of the S3 bucket for storing the Terraform state"
  type        = string
}

variable "s3_key" {
  description = "The key for the state file in the S3 bucket"
  type        = string
}
