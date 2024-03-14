import re
log = '/v1/marketplaces/2f56556a803e4a3588068ed87245d5a4/sellers?collapse=true&limit=100&name=CPF+06118401977&not_status=deleted&offset=0&sort=name'

# Define the regex pattern to match CPFs (case-insensitive)
cpf_pattern = re.compile(r'\bCPF\+(\d{11})\b', re.IGNORECASE)

# Define the function to mask the CPFs
def mask_cpf(match):
    cpf = match.group(1)
    masked_cpf = '*' * len(cpf)
    return masked_cpf


# Use re.sub() to replace the CPFs with masked values
masked_log = cpf_pattern.sub(mask_cpf, log)
print(masked_log)