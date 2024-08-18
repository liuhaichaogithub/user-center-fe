import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from "./js/axiosService.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app =createApp(App)
app.provide("$axios", axios);
app.use(ElementPlus)
app.mount('#app')
app.config.globalProperties.$axios = axios; //配置axios的全局引用