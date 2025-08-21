import axios, { AxiosError } from "axios";

const API_URL = 'http://127.0.0.1:5173/api/';
interface UserData
{
    fullName : string;
    email : string;
    password : string;
    confirmPassword : string;
    phoneNumber : string;
}
export const signup = async (userData :UserData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error : unknown) {
        if (error instanceof AxiosError) {
            throw error.response?.data || { message: "Signup failed" };
        }
        throw { message: "An unexpected error occurred" }; 
    }
};