
# Configure the GitHub Provider
provider "github" {}

resource "github_repository" "novotec" {
  name                        = "NovoTec"
  description                 = "Codebase for NovoTec website"
  allow_merge_commit          = false
  allow_rebase_merge          = false
  visibility                  = "public"
  squash_merge_commit_message = "BLANK"
  squash_merge_commit_title   = "PR_TITLE"


}
