import axios from 'axios';

const jalbacApi = axios.create({
    baseURL: 'https://jalbacapi20230904233831.azurewebsites.net/api',
});

export default jalbacApi;
