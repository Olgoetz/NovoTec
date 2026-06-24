
resource "vercel_project" "novotec" {
  name      = "novotec"
  framework = "nextjs"
  resource_config = {
    function_default_region = "fra1"
  }
  # git_repository = {
  #   type              = "github"
  #   repo              = "Olgoetz/NovoTec"
  #   production_branch = "main"
  # }
  vercel_authentication = {
    deployment_type = "none"
  }

}

resource "vercel_project_domain" "prod" {
  project_id           = vercel_project.novotec.id
  domain               = "novotec-gruppe.de"
  redirect             = vercel_project_domain.prod2.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "prod2" {
  project_id = vercel_project.novotec.id
  domain     = "www.novotec-gruppe.de"
}

locals {
  env_variables_all = {

    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = var.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    GOOGLE_ANALYTICS_TAG            = var.GOOGLE_ANALYTICS_TAG
    CONTENTFUL_SPACE_ID             = var.CONTENTFUL_SPACE_ID
    CONTENTFUL_ENVIRONMENT          = var.CONTENTFUL_ENVIRONMENT
    CONTENTFUL_ACCESS_TOKEN         = var.CONTENTFUL_ACCESS_TOKEN
    RESEND_API_KEY                  = var.RESEND_API_KEY
    RESEND_FROM_EMAIL               = var.RESEND_FROM_EMAIL
    EDGE_STORE_ACCESS_KEY           = var.EDGE_STORE_ACCESS_KEY
    EDGE_STORE_SECRET_KEY           = var.EDGE_STORE_SECRET_KEY
  }
  env_variables_nonprod = {
    RESEND_TO_EMAIL_PROJEKTANFRAGE = var.RESEND_TO_EMAIL_NONPROD_PROJEKTANFRAGE
    RESEND_TO_EMAIL_ZUSAMMENARBEIT = var.RESEND_TO_EMAIL_NONPROD_ZUSAMMENARBEIT
    URL_NONPROD                    = var.URL_NONPROD
  }
  env_variables_prod = {
    RESEND_TO_EMAIL_PROJEKTANFRAGE = var.RESEND_TO_EMAIL_PROD_PROJEKTANFRAGE
    RESEND_TO_EMAIL_ZUSAMMENARBEIT = var.RESEND_TO_EMAIL_PROD_ZUSAMMENARBEIT
    URL_PROD                       = var.URL_PROD
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
