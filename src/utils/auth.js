
export function loginIn(key, value) { 
  sessionStorage.setItem(key, value);
}

/**
 * 是否登录(isLogined) 通过存储的token内容判断用户名是否已经登录
 *   通过sessionStorage.getItem(获取sessionStorage的信息) 做为判断条件, 如果存在返回true, 反之返回false
 */
export function isLogined() { 
  if(sessionStorage.getItem('token')) {
    return true;
  } else {
    return false;
  }
}

/**
 * 清除本地存储
 */
export function logOut() {
  sessionStorage.removeItem('token');
}


// export function isLogined(){
//     if(sessionStorage.setItem('userName')){
//         return true
//     }else{
//         return false
//     }
// }
