import axios from 'axios';

// import { useRecoilValue } from 'recoil';
// import { tokenState } from '@/store/base';

const service = axios.create({
    baseURL: '',
    timeout: 12000,
    headers: {}
});

service.interceptors.request.use(
    config => {
        // const token = useRecoilValue(tokenState);
        // if (config.headers && token) config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    error => {
        /* eslint-disable-next-line */
        console.error(`Axios request error: ${error}`);
        return Promise.resolve(false);
    }
);

service.interceptors.response.use(
    response => {
        const res = response.data;
        return res;
    },
    error => {
        /* eslint-disable-next-line */
        console.error(`Axios response error: ${error}`);

        return Promise.resolve(false);
    }
);

export default service;
