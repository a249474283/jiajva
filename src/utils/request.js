import axios from 'axios'; // 发出的网络请求 通过axios这个插件
import { serverUrl } from './config'

const instance = axios.create ({
  baseURL: serverUrl,
  timeout: 5000,
})

export default instance;
