<template>
  <div>
    <div class="nav-top">
      <button class="nav-btn" @click="messagePromptHandle">
        <van-icon class="icon1" name="envelop-o" />
      </button>
      <van-search class="search" placeholder="请输入搜索关键词" />
      <van-icon class="icon2" name="scan" />
    </div>
    <router-view/>
    <div class="nav-bar">
      <van-tabbar v-model="active" active-color="#A23400" @change="navChangeHandle">
        <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
        <!-- dot指 小圆点 -->
        <van-tabbar-item icon="hot-o" dot>热卖</van-tabbar-item>
        <!-- info指 在这里表示图标右上角提示信息 info="5" -->
        <van-tabbar-item icon="cart-o" :info="ShopCartCount">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>


<script>
import { Dialog } from 'vant';
export default {
  // created() {
  //   this.$eventBus.$on('navToZX',(link) => {// 这里如果用function(link)的话,全局的this指的是整个实例
  //                                           // 但是用 箭头函数的话, 就可以改变this的指向,指的是当前组件
  //     if(link == 'UserCenter') {
  //       this.active = 3;
  //     }
  //     if(link == 'Home') {
  //       this.active = 0;
  //     }
  //   })
  //   this.$eventBus.$on('addToShopCartEnd', () => {
  //     this.ShopCartCount = getShopCartCount();
  //   })
  // },
  data() {
    return {
      active: 0, // active表示我当前的那一项被选中
      ShopCartCount: 0,
    }
  },
  methods: {
    navChangeHandle() {
      // alert(this.active);
      switch(this.active) {
        case 0:
          this.$router.push({
            name: 'Home',
          });
        break;
        case 1:
          this.$router.push({
            name: 'List',
          });
        break;
        case 2:
          this.$router.push({
            name: 'ShopCart',
          });
        break;
        case 3:
          this.$router.push({
            name: 'UserCenter',
          });
        break;
      }
    },
    messagePromptHandle() {
     Dialog.alert({
      message: '没有需要处理的消息'
    }).then(() => {
      // on close
    });
    }
  }
}
</script>

<style>
.nav-top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10001;

}
.nav-top .search {
  width: 18rem;
}
.nav-top .icon1 {
  font-size: 1.8rem;
}
.nav-top .icon2{
   font-size: 1.8rem;
}
.nav-btn {
  background-color: #fff;
  border: none;
}
</style>
