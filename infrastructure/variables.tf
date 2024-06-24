variable "URL_PROD" {
  type = string
}
variable "URL_NONPROD" {
  type = string
}


variable "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY" {
  type = string

}

variable "CONTENTFUL_SPACE_ID" {
  type = string
}

variable "CONTENTFUL_CMA_TOKEN" {
  type = string
}
variable "CONTENTFUL_ENVIRONMENT" {
  type = string
}

variable "CONTENTFUL_ACCESS_TOKEN" {
  type = string
}

variable "RESEND_API_KEY" {
  type = string
}

variable "RESEND_FROM_EMAIL" {
  type = string
}

variable "RESEND_TO_EMAIL_NONPROD" {
  type = string
}
variable "RESEND_TO_EMAIL_PROD" {
  type = string
}
variable "EDGE_STORE_ACCESS_KEY" {
  type = string
}
variable "EDGE_STORE_SECRET_KEY" {
  type = string
}


variable "ngrok_url" {
  type    = string
  default = "https://localhost"
}
