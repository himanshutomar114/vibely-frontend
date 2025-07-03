
//axios - perform HTTP requests like GET , POST , PUT, DELETE 
import axios from "axios";

//for deployment of website we use the base_url beacuse it changes the backend url on server
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: BASE_URL, //backend server url
    withCredentials: true //send cookies with request

})