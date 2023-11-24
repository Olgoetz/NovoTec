
# Configure the GitHub Provider
provider "github" {}

resource "github_repository" "novotec" {
  name        = "NovoTec"
  description = "Codebase for NovoTec website"

  visibility = "public"


}
