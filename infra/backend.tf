terraform {
  backend "s3" {
    bucket = "terraform-state-amp"
    key    = "amp-01-infra-route53.tfstate"
    region = "us-east-1"
  }
}