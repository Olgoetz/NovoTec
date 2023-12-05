terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
    github = {
      source  = "integrations/github"
      version = "~> 5.0"
    }

    contentful = {
      source  = "labd/contentful"
      version = "~> 0.4"
    }
  }
}

