resource "aws_route53_zone" "amp" {
  name = var.amp_domain_name_value
}

# TXT Zoho Verification
resource "aws_route53_record" "txt_zoho_verification" {
  zone_id = aws_route53_zone.amp.zone_id
  name    = ""
  type    = "TXT"
  ttl     = 300
  records = [var.txt_zoho_verification_value]
}

# MX Zoho Email Settings
resource "aws_route53_record" "mx_zoho_verification" {
  zone_id = aws_route53_zone.amp.zone_id
  name    = "@"
  type    = "MX"
  ttl     = 60
  records = var.mx_zoho_verification_values
}

# TXT Sender Policy Framework (SPF) Email Settings
resource "aws_route53_record" "txt_zoho_spf" {
  zone_id = aws_route53_zone.amp.zone_id
  name    = "@"
  type    = "TXT"
  ttl     = 300
  records = ["\"v=spf1 include:zohomail.com ~all\""]
}

# TXT DomainKeys Identified Mail (DKIM) Email Settings
resource "aws_route53_record" "txt_zoho_dkim" {
  zone_id = aws_route53_zone.amp.zone_id
  name    = "@"
  type    = "TXT"
  ttl     = 300
  records = ["\"v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDFqAzDsdqq1MiDh5fnGtiOzbiP5r/4AFo4Ki/zyEkNB/VH7misUPxUUELRJNLLV7wfwys6zzN6rGc88vz+Ophm1htPs6KT+pvjQe4DMbl0EwB1M6NhtH7mTUZN/w3HARLYEbjR46sXZSHiNrmyRPQGJFyPVOVBOzBIKy/KA9iCwIDAQAB\""]
}