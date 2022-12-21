import Axios from 'axios'
import { getCookie } from 'xsrf-cookie';

const xsrfToken  = getCookie();
 
const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-XSRF-TOKEN': xsrfToken 
    },
    withCredentials: true,
})

export default axios
