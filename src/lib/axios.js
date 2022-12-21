import Axios from 'axios'

const axios = Axios.create({
    baseURL: "https://smart-rabbit-dev.eu-1.sharedwithexpose.com",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
