<template>
  <div class="home">
    <van-notice-bar mode="closeable">
      我站提供卧室, 餐厅, 书房, 客厅家具, 沙发, 床, 衣柜, 儿童家具, 以及现代简约, 美式田园, 中式, 欧式等多种风格家居家具.
    </van-notice-bar>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(img, index) in images" :key="index">
        <img class="swipe-img" :src="img"/>
      </van-swipe-item>
    </van-swipe>
    <div class="home-classify">
      <van-row class="classify" type="flex" justify="space-around" v-model="classify">
        <van-col span="6">
          <router-link :to="{ name: 'Home' }">
            <img :src="classify[0]"/>
            <van-tag class="classify-txt" color="#ddb788">中式</van-tag>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link :to="{ name: 'Home' }">
            <img :src="classify[1]"/>
            <van-tag class="classify-txt" color="#ddb788">新古典</van-tag>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link :to="{ name: 'Home' }">
            <img :src="classify[2]"/>
            <van-tag class="classify-txt" color="#ddb788">北欧</van-tag>
          </router-link>
        </van-col>
      </van-row>
      <van-row class="classify" type="flex" justify="space-around" v-model="classify">
        <van-col span="6">
          <router-link :to="{ name: 'Home' }">
            <img :src="classify[3]"/>
            <van-tag class="classify-txt" color="#ddb788">简美</van-tag>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link :to="{ name: 'Home' }">
            <img :src="classify[4]"/>
            <van-tag class="classify-txt" color="#ddb788">美式</van-tag>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link :to="{ name: 'Home' }">
            <img :src="classify[5]"/>
            <van-tag class="classify-txt" color="#ddb788">地中海</van-tag>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <div class="product-show">
      <img src="http://img002.mllres.com/images/201812/1543789460909294006.jpg" />
      <div class="show-txt">
        <span>匠心之作 轻奢雅致</span>
        <p>进口落叶松实木床</p>
      </div>
    </div>
    <div class="product-show">
      <img src="http://img002.mllres.com/images/201903/1552257343642390037.jpg" />
      <div class="show-txt">
        <span>耀世之作▪霸气有型</span>
        <p>欧美典雅品质书香</p>
      </div>
    </div>
    <div class="product-show">
      <img src="http://img002.mllres.com/images/201812/1543788747126149529.jpg" />
      <div class="show-txt">
        <span>香榭丽舍 自在如风</span>
        <p>新古典实木手工雕刻</p>
      </div>
    </div>
    <div class="new-product">
      <h4>新品首发</h4>
      <van-row type="flex" justify="space-around" v-model="newProduct">
        <van-col class="new-product1" span="6">
          <img :src="newProduct[0]"/>
          <div>追"新"无止境</div>
        </van-col>
        <van-col class="new-product1" span="6">
          <img :src="newProduct[1]"/>
          <div>调节牛皮沙发</div>
        </van-col>
        <van-col class="new-product1" span="6">
          <img :src="newProduct[2]"/>
          <div>纳帕皮双人大床</div>
        </van-col>
      </van-row>
    </div>
    <div class="list">
      <h4>家具展示</h4>
      <!-- <van-card
        v-for="product in products"
        :num="product.quantity"
        :price="product.price"
        :desc="product.descriptions"
        :title="product.name"
        :thumb="serverUrl + product.coverImg"
        :key="product._id"
        :thumb-link="`#/detail`"
      > -->
      <!-- thumb-link代表点击之后跳转到详情页 -->
        <!-- <div slot="footer">
          <van-button size="mini" @click="addToCartHandle(product._id)"></van-button>
        </div>
      </van-card> -->
      <!-- <van-button size="large" @click="loadMore">加载更多</van-button> -->
      <ul>
        <li v-for="product in products" :key="product._id">
          <img :src="serverUrl + product['coverImg']" alt="">
          <div class="list-left">
            <span>{{product.name}}</span>
            <p>￥{{product.price}}</p>
            <router-link :to="{ name: 'Detail' }" class="list-link"><u>详 情</u></router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { products, getProducts } from '../services/products'
import { serverUrl } from '../utils/config'
import { addToShopCart } from '../services/users'
import { Row, Col } from 'vant';
export default {
  name: 'home',
  data() {
    return {
      images: [
        'http://img002.mllres.com/images/201903/1552933037877817210.jpg',
        'http://img001.mllres.com/images/201903/1552599979630308177.jpg',
        'http://img003.mllres.com/images/201808/1533778323996774457.jpg',
        'http://image.meilele.com/images/201808/1533086677259387623.jpg',
        'http://image.meilele.com/images/201810/1540863360860771683.jpg',
      ],
      classify: [
        'http://img002.mllres.com/images/201812/1543789234784496523.jpg',
        'http://img004.mllres.com/images/201812/1543789244137804480.jpg',
        'http://img001.mllres.com/images/201812/1543789256597175720.jpg',
        'http://img004.mllres.com/images/201812/1543789269348812284.jpg',
        'http://img003.mllres.com/images/201812/1543789281365025691.jpg',
        'http://image.meilele.com/images/201812/1543789318750392857.jpg',
      ],
      newProduct: [
        'http://img004.mllres.com/images/201903/1552239969091608852.jpg',
        'http://img001.mllres.com/images/201812/1546040699095950810.jpg',
        'http://img004.mllres.com/images/201903/1552848476318746007.jpg',
      ],
      products: [],
      page: 1,
      pageCount: 1,
      serverUrl,
    }
  },
  created() {
    this.loadData();  // 调用loadData()方法  来获取数据
  },
  methods: {
    addToCartHandle(id) { // 调用加入购物车的逻辑(封装好的方法, 再users文件中)
    //  alert(id);
      addToShopCart(id, 1) // 调用方法,获取商品id 第二个参数-->每次加入数量为1
      this.$eventBus.$emit('addToShopCartEnd');
    },
    loadMore() {
      this.page += 1,
      this.loadData(); // 调用loadData()方法  来获取数据
    },
    loadData() { // 为了避免 重复ajax请求获取服务器端数据, 就把请求的方法 封装了一个函数
      //get(`${serverUrl}/api/v1/products?page=${this.page}`) // 拼接字符串的方法 获取接口的地址 这个运行在端口:3000下,接口地址是/api/v1/products
      getProducts({ page: this.page })
      .then(res => { // promise的写法
        // console.log(res);
        // 拼接服务器端的数据 使用数组的concat方法实现
        this.products = this.products.concat(res.data.products); // concat 合并
        this.pageCount = res.data.pages;
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  components: {
  }
}
</script>

<style>
.home {
  margin-top: 54px;
}
.swipe-img {
  width: 100%;
  height: 12rem;
}
.classify{
  margin-top: 1rem;
}
.home-classify img {
  width: 7rem;
  height: 7rem;
  border-radius: 10%;
}
.classify-txt {
  margin-left: 32%;
  font-size: 14px;
  text-align: center;
}
.new-product {
  margin-top: 2rem;
}
.product-show {
  margin-top: 1.5rem;
  position: relative;
}
.product-show img {
  width: 100%;
  height: 10rem;
}
.show-txt {
  width: 10rem;
  position: absolute;
  background-color: #ccc;
  opacity:0.6;
  top: 4rem;
  left: 8rem;
  text-align: center;
  padding-top: 1rem;
}
.show-txt span {
  font-weight: 600;
}
.show-txt p {
  margin-top: 0.5rem;
  padding-top:  0.5rem;
  font-size: 14px;
  font-weight: 500;
  border-top: 1px solid #000;
}
.new-product h4 {
  font-weight: 600;
  margin-left: 0.5rem;
  color: #D26900;
}
.new-product img {
  width: 100%;
  height: 6rem;
}
.new-product1 {
  position: relative;
}
.new-product1 div {
  position: absolute;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid #ffffff;
  top: 4.2rem;
  left: 0.9rem;
  font-size: 12px;
  color: #fff
}
.list {
  padding-bottom: 60px;
}
.list h4 {
  font-weight: 600;
  margin-left: 0.5rem;
  color: #D26900;
}
.list li {
  display: flex;
  margin-top: 1rem;
}
.list li img {
  width: 7rem;
  height: 7rem;
  margin-left: 0.8rem;
}
.list-left {
  background-color: #F0F0F0;
  width: 17.5rem;
  height:7rem;
}
.list-left span {
  font-size: 16px;
  font-weight: 600;
  margin-left: 0.8rem;
  margin-top: 2rem;
  color: #303030;
}
.list-left p {
  font-size: 14px;
  font-weight: 600;
  margin-left: 0.9rem;
  color: #e62318;
}
.list-left .list-link {
  font-size: 12px;
  margin-left: 14.5rem;
  color: #787878;
}
.btn-cart {
  color: orangered;
  font-size: 1.2rem;
}
</style>
