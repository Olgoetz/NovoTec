terraform {
  backend "s3" {
    bucket = "vercel-tf-states-044552942866"
    key    = "novotec-gruppe"
    region = "eu-central-1"
  }
}
