provider "aws" {
  region                   = "eu-central-1"
  shared_credentials_files = ["~/.aws/credentials"]
  default_tags {
    tags = {
      Terraform = true
      Client    = "Novotec"
    }
  }
}

data "aws_caller_identity" "current" {}

module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "novotec-gruppe-${data.aws_caller_identity.current.account_id}"
  # acl    = "public-read"

  #   control_object_ownership = true
  #   object_ownership         = "ObjectWriter"

  block_public_acls       = false
  block_public_policy     = false
  restrict_public_buckets = false
  ignore_public_acls      = false
  versioning = {
    enabled = true
  }

  cors_rule = [
    {
      allowed_methods = ["GET"]
      allowed_origins = ["http://localhost:3000", "https://*.vercel.app", "https://*.novotec-gruppe.de", "https://novotec-gruppe.de"]
      allowed_headers = ["*"]
      expose_headers  = ["ETag"]
      max_age_seconds = 3000
    }
  ]
}
