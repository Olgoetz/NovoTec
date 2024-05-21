
resource "vercel_project" "novotec" {
  name                       = "novotec"
  framework                  = "nextjs"
  serverless_function_region = "fra1"
  git_repository = {
    type              = "github"
    repo              = github_repository.novotec.full_name
    production_branch = "prod"

  }
  vercel_authentication = {
    deployment_type = "none"
  }

}

resource "vercel_project_domain" "prod" {
  project_id           = vercel_project.novotec.id
  domain               = "novotec-gruppe.de"
  redirect             = vercel_project_domain.prod2.domain
  redirect_status_code = 301
}

resource "vercel_project_domain" "prod2" {
  project_id = vercel_project.novotec.id
  domain     = "www.novotec-gruppe.de"
}

locals {
  env_variables_all = {

    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = var.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    CONTENTFUL_SPACE_ID             = var.CONTENTFUL_SPACE_ID
    CONTENTFUL_ACCESS_TOKEN         = var.CONTENTFUL_ACCESS_TOKEN
    RESEND_API_KEY                  = var.RESEND_API_KEY
    RESEND_FROM_EMAIL               = var.RESEND_FROM_EMAIL
    EDGE_STORE_ACCESS_KEY           = var.EDGE_STORE_ACCESS_KEY
    EDGE_STORE_SECRET_KEY           = var.EDGE_STORE_SECRET_KEY
  }
  env_variables_nonprod = {
    RESEND_TO_EMAIL = var.RESEND_TO_EMAIL_NONPROD
    URL_NONPROD     = var.URL_NONPROD
  }
  env_variables_prod = {
    RESEND_TO_EMAIL = var.RESEND_TO_EMAIL_PROD
    URL_PROD        = var.URL_PROD
  }
}

resource "vercel_project_environment_variable" "novotec_all" {
  count      = length(local.env_variables_all)
  project_id = vercel_project.novotec.id
  key        = keys(local.env_variables_all)[count.index]
  value      = values(local.env_variables_all)[count.index]
  target = [
    "production",
    "preview",
  "development", ]
}
resource "vercel_project_environment_variable" "novotec_nonprod" {
  count      = length(local.env_variables_nonprod)
  project_id = vercel_project.novotec.id
  key        = keys(local.env_variables_nonprod)[count.index]
  value      = values(local.env_variables_nonprod)[count.index]
  target     = ["preview", "development"]
}
resource "vercel_project_environment_variable" "novotec_prod" {
  count      = length(local.env_variables_prod)
  project_id = vercel_project.novotec.id
  key        = keys(local.env_variables_prod)[count.index]
  value      = values(local.env_variables_prod)[count.index]
  target     = ["production"]
}
