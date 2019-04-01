// services 文件夹里面的文件  是我在服务器端获取数据信息的文件 -->这里面我创建了一个products文件
import axios from '../utils/request' // axios发送请求数据, axios中有一个方法 get, 用来获取数据
// import { get } from 'axios'
/**
 * 获取商品列表
 * @param {*} params 
 * per  每一页显示的数量
 * page 当前显示的页数
 * name
 */
// 获取商品信息
export const getProducts = (params) => {  // 参数params:表示查询的数据信息,在api文档中params数据有三个属性 name, per, page
  return axios.get('/api/v1/products', { params })  // return 返回的东西应该是一个ajax请求 url:请求接受数据的地址  
}


/**
 * 获取商品详情
 * @param {*} id 商品id
 */
// 获取商品详情
export const getProductsDetail = (id) => { // 这个时候接受一个 商品的id 通过id获取到每个商品的信息
  return axios.get(`/api/v1/products/${id}`); // return 返回的东西应该是一个ajax请求
}