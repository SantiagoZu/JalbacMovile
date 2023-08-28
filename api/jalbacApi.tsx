import axios from 'axios';

const jalbacApi = axios.create({
    baseURL: 'https://6bd9-2800-e2-1e80-6f2-a6c4-b6e5-aabf-38.ngrok-free.app/api',
});

export default jalbacApi;
