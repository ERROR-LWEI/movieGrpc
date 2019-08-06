import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios';

Axios.interceptors.response.use((res: AxiosRequestConfig): Promise<any> => {
    return Promise.resolve(res);
}, error => {
    const { response = {}, message } = error;
    const { status = 500 } = response;
    return Promise.resolve({
        type: 'ERROR',
        code: status,
        message: error.message
    })
})

export default function fetch<T>(param): AxiosPromise<T> {
    return Axios(param);
}