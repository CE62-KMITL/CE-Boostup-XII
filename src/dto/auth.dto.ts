export type LoginDto = {
    username: string
    password: string
}

export type RegisterDto = {
    token: string
    password: string
}

export type ResetPasswordDto = {
    token: string
    password: string
}

export type RequestPasswordResetDto = {
    email: string
    siteUrl: string
}