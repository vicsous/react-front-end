import axios from "axios";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = import.meta.env.VITE_REACT_APP_API_URI;

const accessToken = localStorage.getItem('accessToken') || null;

const axiosInstance = axios.create({
    baseURL,
    headers: { 
        authorization: `Bearer ${accessToken || ''}`
    }
})

axiosInstance.interceptors.request.use(async req => {
    let decoded = null;
    try {
        decoded = await jwtDecode(accessToken);
    } catch(e){
        return req
    }
    const isExpired = dayjs.unix(decoded.exp).diff(dayjs()) < 1;
    if (isExpired) {
        const mutation = `#graphql
            mutation Refresh {
                refresh 
            }
        `;
        const response = await axios.post(baseURL, { query: mutation }, { withCredentials:  true });
        localStorage.setItem('accessToken', response.data.data.refresh);
        req.headers.authorization = `Bearer ${response.data.data.refresh}`
        return req
    } else {
        return req
    }
})

export default axiosInstance
