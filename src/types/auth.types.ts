export interface loginRequest {
    email: string;
    password: string;
}
export interface signupRequest {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
}
export interface signupResponse {
    success: boolean;
    message: string;
    token: string;
}
export interface loginResponse {
    success: boolean;
    token: string;
}