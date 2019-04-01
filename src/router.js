import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Login from './views/Login.vue'
import Reg from './views/Regis.vue'
import Orders from './views/Orders.vue'
import ShopCart from './views/ShopCart.vue'
import UserCenter from './views/UserCenter.vue'
import { isLogined } from './utils/auth'
import { Card } from 'vant';

Vue.use(Card);
Vue.use(Router);
const router =  new Router({
  routes: [{
    path: '/', // 路由跳转 当我路由什么都不输入的话, 访问的是home页 首页
    name: 'Home',
    component: Home
   },
   {
    path: '/list',
    name: 'List',
    component: List,
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
   {  path: '/login',
     name: 'Login',
     component: Login,
   }, {
     path: '/reg',
    name: 'Reg',
     component: Reg,
   },
  {  path: '/shop_cart',
    name: 'ShopCart',
    component: ShopCart,
    meta: { // meta属性 --> 元标签(元属性)
      needLogin: true,  // 需要登录  在meta标签里设置的一个属性, 属性表示 需要登录
    },
  }, {
    path: '/user_center',
    name: 'UserCenter',
    component: UserCenter,
    meta: { // meta属性 --> 元标签(元属性)
      needLogin: true,  // 需要登录  在meta标签里设置的一个属性, 属性表示 需要登录
    },
  }, {
    path: '/orders',
    name: 'Orders',
    component: Orders,
    meta: { // meta属性 --> 元标签(元属性)
      needLogin: true,  // 需要登录  在meta标签里设置的一个属性, 属性表示 需要登录
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach(function(to, from, next) {

  if(to.meta.needLogin) { // 在每一个路由的钩子函数中,判断当前的页面(跳转地址)是否需要登录 当我跳转到的页面里面的meta标签,里面有一个needLogin属性的话, 执行一个事情
    if(isLogined()) { // 判断 是否已经登录的时候,判断条件是导出模块中的isLogined()封装好的方法-->做为判断条件 
                      //   如果已经点击了"登录按钮",本地就已经有了sessionStorage数据,反之 则没有存储
      next(); // 已经登陆过的时候, 继续向下执行
    } else {  // 如果没有登录过,  跳转到登录页 进行登录
      next({  // next方法中的这个路由对象,可以传递name(组件名)或者path都可以,然后当做参数去执行跳转
        name: 'Login',
      });
    }
  } else { // meta标签里没有needLogin这个属性的话, 执行一个事情
    next();
  }
})
export default router;