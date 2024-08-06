import { api } from "../api/api"
import { loginRequest, loginResponse, signupRequest, signupResponse } from "../types/auth.types"

export const login = async (payload: loginRequest): Promise<loginResponse> => {
    const { data } = await api.post('/auth/login', payload)
    return data
}
export const signup = async (payload: signupRequest): Promise<signupResponse> => {
    const { data } = await api.post('/auth/register', payload)
    return data
}