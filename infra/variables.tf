variable "vpc_name" {
  type = string
}

variable "vpc_cidr" {
  type = string
}

variable "subnet_azs" {
  type = list(string)
}

variable "public_subnets" {
  type = list(string)
}