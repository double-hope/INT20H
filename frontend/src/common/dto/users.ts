export interface UserSignInDTO {
    email: string;
    password: string;
}

export interface UserSignUpDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface RefreshTokenDTO {
    refreshToken: string;
}