import { api } from "../api/api"
import { loginRequest, loginResponse } from "../types/auth.types"

export const login = async (payload: loginRequest): Promise<loginResponse> => {
    const { data } = await api.post('/auth/login', payload)
    return data
}