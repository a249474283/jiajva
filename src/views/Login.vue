<template>
  <div class="login">
    <h1>登录</h1>
    <router-link :to="{name:'Home'}" class="login1">【首页】</router-link>
    <router-link :to="{name:'Reg'}">【注册】</router-link>
    <van-cell-group class="login2">
      <van-field
        v-model="userName"
        label="用户名"
        placeholder="请输入用户名"
        required
      />
      <van-field
        v-model="passWord"
        label="密码"
        type="password"
        placeholder="请输入密码"
        required
      />
      <van-button class="lg" size="large" @click="login" type="info">登录</van-button>
    </van-cell-group>
  </div>
</template>

<script>
  const axios = require('axios');
  import { loginIn } from "../utils/auth"
  export default {
    data(){
       return{
        userName:"",
        passWord:"",
       }
    },
    methods:{
      //登录按钮
      login:function(){
        if(!this.userName){
          alert("请输入用户名！");
        }else{
          console.log(this.userName);
          axios({
            method:"post",
            url:'https://api.cat-shop.penkuoer.com/api/v1/auth/login',
            data:{
              userName:this.userName,
              password:this.passWord
            }
          })
          .then(function(data){
            console.log(data);
            if(data.data.code=="success"){
              alert("登录成功");
              loginIn("userName",this.userName);
              loginIn("token",data.data.token);
              this.$router.push({
                name:"Home"
              })
            }else if(data.data.message == "user not found"){
              alert("该用户尚未注册");
            }else{
              alert("用户密码错误");
            }
          }.bind(this))
          .catch(function(err){
            console.log(err);
          })
        }
        
      },
      gitData(){

      }
    }
  }
</script>
<style scoped>
/* body {
  background: url(/images/login-bgc.gif) no-repeat;
} */
body{height:736px;
  background: url(/images/login-bgc.gif);
 
}
.login {
 
  margin-top: 130px;
}
.login1 {
  margin-left: 9rem;
}
.login2 {
  margin-top: 3rem;
  margin-left: 2.6rem;
  width: 20rem;
  opacity: 0.7;
  color: #fff;
  border-radius: 20px;
}
.lg {
  margin-top: 1.5rem;
}
h1{text-align: center;}
</style>
