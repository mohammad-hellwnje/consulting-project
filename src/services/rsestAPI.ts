import axios, { AxiosError } from "axios";

const API_URL = 'http://localhost:5000/api';
interface resetParams
{
    email : string;
}

export const resetPass = async (userData :resetParams) => {
    try {
        const response = await axios.post(`${API_URL}/auth/forgot-password`, userData);
        return response.data;
    } catch (error : unknown) {
        if (error instanceof AxiosError) {
            throw error.response?.data || { message: "Signup failed" };
        }
        throw { message: "An unexpected error occurred" }; 
    }
};