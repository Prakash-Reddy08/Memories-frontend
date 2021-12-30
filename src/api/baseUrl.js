import axios from 'axios';

const baseUrl = axios.create({
    baseURL: `${process.env.REACT_APP_API_ENDPOINT || `http://localhost:5000/api`}`
})

export default baseUrl;