
resource "vercel_project" "novotec" {
  name                       = "novotec"
  framework                  = "nextjs"
  serverless_function_region = "fra1"
  git_repository = {
    type = "github"
    repo = github_repository.novotec.full_name
  }
}
