resource "aws_route53_zone" "amp_zone" {
  name = var.amp_domain_name_value
}

# MX Zoho Email Settings
resource "aws_route53_record" "mx_zoho_verification" {
  zone_id = aws_route53_zone.amp_zone.zone_id
  name    = ""
  type    = "MX"
  ttl     = 60
  records = var.mx_zoho_verification_values
}

# TXT Sender Policy Framework (SPF) Email Settings
resource "aws_route53_record" "txt_zoho" {
  zone_id = aws_route53_zone.amp_zone.zone_id
  name    = ""
  type    = "TXT"
  ttl     = 60
  records = [var.txt_zoho_verification_value, var.txt_zoho_spf_value]
}

# TXT DomainKeys Identified Mail (DKIM) Email Settings
resource "aws_route53_record" "txt_zoho_dkim" {
  zone_id = aws_route53_zone.amp_zone.zone_id
  name    = var.txt_zoho_dkim_name
  type    = "TXT"
  ttl     = 60
  records = [var.txt_zoho_dkim_value]
}