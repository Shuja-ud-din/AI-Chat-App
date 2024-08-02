export interface loginRequest {
    email: string;
    password: string;
}
export interface loginResponse {
    success: boolean;
    message: string;
}