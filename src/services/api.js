import axios from "axios";

export const key = "1bc37621f11305190b21cfa7f540b670de619991";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;
