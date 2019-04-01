<template>
  <div class="Detali">
    <div class="header">
      <van-swipe :autoplay="3000">
        <van-swipe-item >
          <img class="images" :src="'https://api.cat-shop.penkuoer.com/'+shopData.coverImg"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="section">
        <div class="jieshao">
          <p>{{shopData.descriptions}}<span>{{shopData.price}}</span><span>元</span></p>
          <van-rate v-model="value" icon="like" void-icon="like-o" class="v-rate"></van-rate>
        </div>
      <van-cell title="运费：免运费" value="剩余：19"/>
      <van-cell value="进入店铺" icon="shop-o" is-link>
          <template slot="title">
            <span class="custom-text">有赞的店</span>
            <van-tag type="danger">官方</van-tag>
          </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link title-class="xianxia"/>
        
    </div>
     <div class="footer">
       <div class="footer-r">
        <button @click="shopcartHandle">加入购物车</button>
        <button>立即购买</button>
      </div>
    </div>
    <!-- <van-button class="btn2" type="danger">立即购买</van-button>
     <van-button class="btn1" type="warning">加入购物车</van-button>  -->
  </div>
</template>
<script>
//const axios=require('axios');
import axios from "axios"
export default {
  data() {
    return {
      images: [ 
        'https://f12.baidu.com/it/u=2648954178,707991817&fm=72',
        'https://f12.baidu.com/it/u=1958490809,1691334580&fm=72',
        'http://img3.imgtn.bdimg.com/it/u=2778839002,200939099&fm=200&gp=0.jpg',
        'http://img2.imgtn.bdimg.com/it/u=64702178,3014949498&fm=26&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=531552697,2945058719&fm=26&gp=0.jpg'
      ],
      value: 3,
      active: 0,
      shopData:"",
      token:"",
    }
  },
  mounted:function(){
    this.getData();
  },
  methods:{
    getData(){
    axios.get('https://api.cat-shop.penkuoer.com/api/v1/products/'+this.$route.params.id)
      .then(function(data){
        this.shopData = data.data;
        console.log(this.shopData);
      }.bind(this))
    },
   shopcartHandle(){
     if(!sessionStorage.getItem("token")){
       alert("请先登录");
        this.$router.push({
          name:'Login'
        })
     }else{
        this.token=sessionStorage.getItem("token");
      //   axios({
      //     method:"get",
      //     url:'https://api.cat-shop.penkuoer.com/api/v1/shop_carts',
      //     data:{

      //     }
      // })
      axios.post('https://api.cat-shop.penkuoer.com/api/v1/shop_carts',{
        product:this.$route.params.id
      },{
        headers:{
          "authorization":"bearer "+ this.token
        }
      })
      .then(function(data){
        console.log(data);
        this.$router.push({
          name:'ShopCart'
        })
      }.bind(this))
     }
    
     
   }
  }
}
</script>
<style>
.Detali{display: flex;flex-direction: column;height:34.375rem;}
.header{
  height:12.75rem;flex-shrink: 0;
}
.section{
  flex:1;
}

.jieshao{position:relative;height:3.5rem;}
.jieshao p span{color:red;}
.jieshao p:nth-of-type(1){
   font-size:1rem;
   text-align:left;
   float:left;margin:0
   
}
.images{
  width:100%;height:12.5rem;
}
.v-rate{
  position:absolute;
  top:2.5rem;
  right:0.625rem;
}
.van-cell__title{
  margin-left: 0.2rem;
}
.xianxia{
  margin-left:0.45rem;
}
.chakan{margin-left:0rem;}

.footer{
  flex-shrink: 0;
  width:100%;
  height:4.375rem;
  margin-top: 3.5rem;
}
.footer-r button{
  border:none;
  width:50%;
  height:4.375rem;
  color:#fff;
  font-size:1.25rem;
}
.footer-r  button:nth-of-type(1){
  background:orange;

}
.footer-r  button:nth-of-type(2){
  background:red;
} 
.Detali {
  margin-top: 55px;
}
</style>

