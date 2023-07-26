
resource "vercel_project" "novotec" {
  name      = "novotec"
  framework = "nextjs"

  git_repository = {
    type = "github"
    repo = github_repository.novotec.full_name
  }
}
