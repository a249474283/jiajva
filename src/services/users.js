// 封装一个 网络请求的方法 包括所有的get post
import axios from '../utils/request';
// 验证登录
export function login(userName, password) {
  return axios.post('/api/v1/auth/login', {
    userName,
    password,
  });
}

// 注册
export function reg(user) {
  return axios.post('/api/v1/auth/reg', user);
}

// 加入购物车
export function addToShopCart(product, quantity) {
  let myCarts = getShopCart();  // 获取购物车信息
  // 查询当前商品在购物车数组中的索引 findIndex-->当前商品在购物车中的索引
  const index = myCarts.findIndex(cart => cart.product == product);
  // 判断购物车中是否存在指定的商品
  if (index > -1) { // 大于-1,表示商品已经在购物车中存在
    // myCarts是一个数组,myCarts[index].quantity-->原始购物车商品数量, 再原始数量 + 我指定的数量
    myCarts[index].quantity = myCarts[index].quantity + quantity; // quantity --> 数据购物车中商品的数量
  } else { // 不大于-1,表示不存在
    myCarts.push({ // 如果不存在的话 把商品 和 我指定的数量加进去
      product,
      quantity,
    })  
  }
  // 把已添加到购物车的商品 存储到数据库(现在没有数据库只能存到本地用localStorage)中
  localStorage.setItem('my-shopcart', JSON.stringify(myCarts));
}

/**
 * 从购物车中删除商品
 * @param {*} product 
 */
// 删除购物车中商品
export function delFromProduct(product) {
  let myCarts = getShopCart(); // 先获取购物车信息
  // 再查询当前商品在购物车数组中的索引 findIndex-->当前商品在购物车中的索引
  const index = myCarts.findIndex(cart => cart.product == product);
  // 判断商品是否存在
  if (index > -1) {
    // 存在的话,找到这个商品的索引,再从这个指定的索引位置 删除这个商品; 第二个参数 表示每次删除数量为1
    myCarts.splice(index,1); 
  }
  // 把删除后的商品存到购物车 存储到数据库(现在没有数据库只能存到本地用localStorage)中
  localStorage.setItem('my-shopcart', JSON.stringify(myCarts));
}

// 获取购物车信息
export function getShopCart() {
  // 判断 现在购物车中是否存在商品
  if(localStorage.getItem('my-shopcart')) { // 如果存在 获取购物车信息
    return JSON.parse(localStorage.getItem('my-shopcart'));
  } else {  // 如果不存在 
    return []; // 返回出来一个空数组
  }
  
}

/**
 * 获取购物车商品数量
 */
export function getShopCartCount() {
  const myCarts = getShopCart();  // 获取购物车中的商品
  let result = 0;   // 初始为0 --> 最初显示购物车中的商品数量为0,
  // 因为之前存储了每个商品的数量, 所以遍历购物车中的商品(item), item.quantity-->获取每个商品的数量
  //  把遍历到的每件商品的数量, 都添加到result 总数上
  myCarts.forEach(item => result += item.quantity); 
  return result; // 返回出  总的商品数量
}