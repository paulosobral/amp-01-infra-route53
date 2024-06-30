# Infra Route53

[![[Feature] Terraform Validate Feature Branch Pipeline](https://github.com/paulosobral/amp-01-infra-route53/actions/workflows/01-feature.yml/badge.svg)](https://github.com/paulosobral/amp-01-infra-route53/actions/workflows/01-feature.yml)

[![[Main] Terraform Apply or Destroy Branch Main](https://github.com/paulosobral/amp-01-infra-route53/actions/workflows/02-main.yml/badge.svg)](https://github.com/paulosobral/amp-01-infra-route53/actions/workflows/02-main.yml)

## AMP

## Documentation

### Requirements

| Name | Version |
|------|---------|
| <a name="requirement_aws"></a> [aws](#requirement\_aws) | 5.53.0 |

### Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | 5.53.0 |

### Modules

No modules.

### Resources

| Name | Type |
|------|------|
| [aws_route53_record.mx_zoho_verification](https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/route53_record) | resource |
| [aws_route53_record.txt_zoho](https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/route53_record) | resource |
| [aws_route53_record.txt_zoho_dkim](https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/route53_record) | resource |
| [aws_route53_zone.amp_zone](https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/route53_zone) | resource |

### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_amp_domain_name_value"></a> [amp\_domain\_name\_value](#input\_amp\_domain\_name\_value) | n/a | `string` | n/a | yes |
| <a name="input_mx_zoho_verification_values"></a> [mx\_zoho\_verification\_values](#input\_mx\_zoho\_verification\_values) | n/a | `list(string)` | n/a | yes |
| <a name="input_txt_zoho_dkim_name"></a> [txt\_zoho\_dkim\_name](#input\_txt\_zoho\_dkim\_name) | n/a | `string` | n/a | yes |
| <a name="input_txt_zoho_dkim_value"></a> [txt\_zoho\_dkim\_value](#input\_txt\_zoho\_dkim\_value) | n/a | `string` | n/a | yes |
| <a name="input_txt_zoho_spf_value"></a> [txt\_zoho\_spf\_value](#input\_txt\_zoho\_spf\_value) | n/a | `string` | n/a | yes |
| <a name="input_txt_zoho_verification_value"></a> [txt\_zoho\_verification\_value](#input\_txt\_zoho\_verification\_value) | n/a | `string` | n/a | yes |

### Outputs

No outputs.

Terraform repository to manage the AWS Route 53 service.

### Useful links:

1. [Pipeline documentation.](https://github.com/paulosobral/amp-02-infra-reusable/blob/main/README.md);
2. [Enabling route53 to manage Registro.br domain](https://medium.com/@sergioafonsojr/como-configurar-um-dom%C3%ADnio-com-br-no-registro-br-e-route-53-c971d97af63c);
3. [How to Set Up @Zoho Mail on an AWS Route 53 Domain](https://www.youtube.com/watch?v=Y2bfzH4iBvg);