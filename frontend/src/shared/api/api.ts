import axios from 'axios';
import { addAuthToken } from './interceptors/addAuthToken';
import { refreshAccessToken } from './interceptors/refreshAccessToken';

export const $api = axios.create({
    baseURL: __API__ + '/api/v1/',
});

$api.interceptors.request.use((config) => addAuthToken(config));

$api.interceptors.response.use(
    (config) => config,
    (error) => refreshAccessToken(error, 'token/refresh/')
        .then((originalRequest) => $api(originalRequest)),
);
