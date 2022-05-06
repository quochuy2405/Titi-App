import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const getAllProduct = async () => {
    const response = await axiosClient.get('/Product/get');
    if (response.data?.success)
        return response.data.products
    return [];
}