provider "contentful" {
  organization_id = "2y5Ws8RPACf7kZkCaJnrk9"
  cma_token       = var.CONTENTFUL_CMA_TOKEN
}

locals {
  webhooks = {
    ngrok = {
      name     = "ngrok"
      base_url = var.ngrok_url
    }
    web = {
      name     = "novotec-web"
      base_url = "https://novotec-koeln.de"
    }
  }


}

resource "contentful_webhook" "novotec" {
  for_each = local.webhooks
  space_id = var.CONTENTFUL_SPACE_ID

  name = "${each.value.name}/api/revalidate-path"
  url  = "${each.value.base_url}/api/revalidate-path"
  topics = [
    "Entry.publish",
    "Entry.unpublish",
  ]

}
