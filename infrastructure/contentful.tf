# provider "contentful" {
#   organization_id = "2y5Ws8RPACf7kZkCaJnrk9"
#   cma_token       = var.CONTENTFUL_CMA_TOKEN
# }

# NOTE: contentful_webhook resource is disabled due to a nil-pointer crash
# in terraform-provider-contentful v5.11.0 during Read/Create.
# See: https://github.com/labd/terraform-provider-contentful/issues
# Webhooks are managed manually in Contentful until the provider is fixed.
#
# locals {
#   webhooks = {
#     preview = {
#       name     = "novotec-preview"
#       base_url = "https://novotec-git-main-olgoetz.vercel.app"
#     }
#     prod = {
#       name     = "novotec-prod"
#       base_url = "https://www.novotec-gruppe.de"
#     }
#   }
# }
#
# resource "contentful_webhook" "novotec" {
#   for_each = local.webhooks
#   space_id = var.CONTENTFUL_SPACE_ID
#
#   name = "${each.value.name}/api/revalidate-path"
#   url  = "${each.value.base_url}/api/revalidate-path"
#   topics = [
#     "Entry.publish",
#     "Entry.unpublish",
#   ]
# }
