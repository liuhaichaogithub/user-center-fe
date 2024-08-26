import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import { ElNotification } from 'element-plus'
// 创建axios实例
const httpNoTokenService = axios.create({
    // API的base_url
    baseURL: '/proxy/api/',
    // 请求超时时间
    timeout: 5000
});

// 请求拦截器
httpNoTokenService.interceptors.request.use(
    config => {
        console.log('请求拦截器');
        //打印请求地址
        console.log(config.baseURL);
        // 在发送请求之前做些什么
        // 例如，统一添加请求头
        // config.headers['SOURCE'] = 'WEB'; // 这里的'your-token'替换为你的实际token
        config.headers['Content-Type'] = 'application/json'; // 设置请求的Content-Type
        config.headers['traceId'] = uuidv4(); // 设置请求的Content-Type
        return config;
    },
    error => {
        // 处理请求错误
        return Promise.reject(error);
    }
);

// 响应拦截器
httpNoTokenService.interceptors.response.use(
    response => {
        if (response.data.code !== 200) {
            ElNotification({
                title: 'Error',
                message: response.data.msg,
                type: 'error',
            })
            return Promise.reject(response.data.msg);
        }else{
            return response;
        }
    }, error => {
        ElNotification({
            title: 'Error',
            message: error.data.msg,
            type: 'error',
        })
        return Promise.reject(error);
    }
);

export default httpNoTokenService;