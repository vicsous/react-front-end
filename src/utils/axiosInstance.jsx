import axios from 'axios';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { logout } from '../store/userSlice';
//import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_REACT_APP_API_URI;

const axiosInstance = axios.create({
<<<<<<< HEAD
    baseURL, // Your API base URL
});
=======
    baseURL,
    headers: { 
        Authorization: `Bearer ${accessToken || ''}`
    }
})
>>>>>>> 705769da05a5170986bc1b321c2471d41e82ecdf

axiosInstance.interceptors.request.use(async (req) => {
  const accessToken = localStorage.getItem('accessToken') || null;
  req.headers.authorization = `Bearer ${accessToken || ''}`

  if (accessToken) {
    const user = jwtDecode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
        req.headers.authorization = `Bearer ${accessToken}`;
        return req;
    }

<<<<<<< HEAD
    // If the token is expired, we need to refresh it
    try {
      	console.log('token expired!');
      	const response = await axios.post(baseURL + '/refresh', null, { withCredentials: true });
      	if (response.status === 204) {
			localStorage.removeItem('accessToken');
			window.location.href = '/login';
		} else {
        	localStorage.setItem('accessToken', response.data.accessToken);
        	req.headers.authorization = `Bearer ${response.data.accessToken}`;
      	}
    } catch (error) {
      console.error('Failed to refresh token', error);
      // Optionally, log the user out or redirect to the login page
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      // window.location.href = '/login'; // Redirect to login if needed
    }
  }

  return req;
});

export default axiosInstance;

=======
export default axiosInstance
>>>>>>> 705769da05a5170986bc1b321c2471d41e82ecdf
