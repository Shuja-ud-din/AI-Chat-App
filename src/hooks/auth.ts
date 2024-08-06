import { useMutation } from "@tanstack/react-query";
import { login, signup } from "../services/authService";
import { loginRequest, loginResponse, signupRequest, signupResponse } from "../types/auth.types";

export const useLogin = () => {
    return useMutation({
        mutationFn: (payload: loginRequest) => login(payload),
        onSuccess: (data: loginResponse) => {
            console.log("Login successful", data);
        },
        onError: (error: any) => {
            console.error("Login error", error);
        },
    });
};
export const useRegister = () => {
    return useMutation({
        mutationFn: (payload: signupRequest) => signup(payload),
        onSuccess: (data: signupResponse) => {
            console.log("Register successful", data);
        },
        onError: (error: any) => {
            console.error("Register error", error);
        },
    });
};
