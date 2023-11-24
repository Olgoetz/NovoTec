terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.4"
    }
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }
  }
}

