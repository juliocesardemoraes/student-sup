export interface TokenResponse extends Response {
  access_token: string
  token_type: string
  expires_in: number
  scope: string
}
