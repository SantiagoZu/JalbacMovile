import axios from 'axios';

const jalbacApi = axios.create({
    baseURL: 'https://localhost:7068/api',
})

export default jalbacApi