provider "aws" {
  region = "us-east-2"
}

terraform {
  backend "s3" {
    bucket = "statefile-testing2"
    key    = "terraform/state"
    region = "us-east-2"
  }
}
