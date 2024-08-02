import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authService";
import { loginRequest, loginResponse } from "../types/auth.types";

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
