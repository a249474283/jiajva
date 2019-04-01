<template>
  <div class="ShopCart">
     <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
const axios = require('axios');
export default {
  mounted:function(){
    this.getData();
  },
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: ['1', '2', '3','4','5'],
      goods: [{
        id: '1',
        title: '沙发真皮头层牛皮 现代简约大小户型客厅中厚皮沙发组合整装家具',
        desc: '优梵艺术旗舰店',
        price: 238800,
        num: 1,
        thumb: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2584977762/O1CN01qqL4m727D2luyc52H_!!2584977762.jpg_230x230.jpg_.webp'
      }, {
        id: '2',
        title: '格杰仕真皮床1.8米双人床婚床现代简约床主卧榻榻米欧式皮床家具',
        desc: '格杰仕旗舰店',
        price: 690000,
        num: 1,
        thumb: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/872353151/TB1dgtOlFkoBKNjSZFkXXb4tFXa_!!0-item_pic.jpg_230x230.jpg_.webp'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 268000,
        num: 1,
        thumb: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/12913813/TB222H4bbPpK1RjSZFFXXa5PpXa_!!0-saturn_solar.jpg_230x230.jpg_.webp'
      },
      {
        id: '4',
        title: '真皮沙发头层牛皮 现代简约客厅大小户型中厚皮沙发组合整装家具',
        desc: '779502825lin',
        price: 269000,
        num: 1,
        thumb: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2103150710/O1CN01HsYdD51H7DhivH52a_!!0-item_pic.jpg_230x230.jpg_.webp'
      },
      {
        id: '5',
        title: '沙发真皮头层牛皮 现代简约大小户型客厅中厚皮沙发组合整装家具',
        desc: 'javv168',
        price: 298000,
        num: 1,
        thumb: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1796488067/O1CN01xTrith29SjZapma7A_!!1796488067.jpg_230x230.jpg_.webp'
      }
      ],
      token:""
    }
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast('点击结算');
      this.$router.push({
        name:'UserCenter'
      })
    },
    getData(){
      if(!sessionStorage.getItem("token")){
        alert("请先登录");
        this.$router.push({
          name:'Login'
        })
      }else{
        this.token=sessionStorage.getItem("token");
        axios({
          method:"get",
          url:"https://api.cat-shop.penkuoer.com/api/v1/shop_carts",
          headers:{
          "authorization":"bearer "+ this.token
          }
        })
        .then(function(data){
          console.log(data.data);
        })
      }
      
    }
  }
};
</script>

<style lang="less">
.card-goods {
  width:100%;
  height:664px;
  overflow:auto;
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 27px 10px 0 15px;
      box-sizing: border-box;
      margin-top:20px;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>