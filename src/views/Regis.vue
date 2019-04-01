<template>
  <div class="regis">
    <img class="logo" src="../../public/images/logo.png"/>

      <router-link :to="{name:'Home'}" class="regis1">【首页】</router-link>
        <van-cell-group class="regis2">
          <div class="ts"></div>
          <van-field
            v-model="userName"
            label="用户名"
            placeholder="请输入用户名"
            @change="userIn"
            @focus="userFo"
            required
          />
          <div :class="{ts:'true',jg:usertjg,cg:usertcg}">{{usert}}</div>
         <van-field
            v-model="passWord"
            label="密码"
            placeholder="请输入密码"
            type="password"
            @input="wordIn"
            @focus="wordFo"
            required
          />
          <div :class="{ts:'true',jg:wordtjg,cg:wordtcg}">{{wordt}}</div>
         <van-field
            v-model="passWords"
            type="password"
            label="确认密码"
            placeholder="请再次输入密码"
            @input="wordsIn"
            @focus="wordsFo"
            required
          />
          <div :class="{ts:'true',jg:wordstjg,cg:wordstcg}">{{wordst}}</div>
          <van-button size="large" @click="reg" type="info">注册</van-button>
          <p class="yzc">已有账号？<router-link :to="{name:'Login'}" >登录</router-link></p>
        </van-cell-group>
  </div>
</template>
<script>
  const axios = require('axios');
  export default {
    data(){
      return {
        userName:"",
        passWord:"",
        passWords:"",
        usert:" ",
        wordt:" ",
        wordst:" ",
        usertjg:0,
        usertcg:0,
        wordtjg:0,
        wordtcg:0,
        wordstjg:0,
        wordstcg:0,
        Name:0,
        Word:0,
        Words:0,
      }
    },
    methods:{
      //注册按钮
      reg:function(){
        if(!this.userName){
          this.usert = "请输入用户名"
        }
        if(!this.passWord){
          this.wordt = "请输入密码";
        }
        if(!this.passWords){
          this.wordst = "请再次输入密码";
        }
        if(this.Name&&this.Word&&this.Words){

            axios({
              method:"post",
              url:'https://api.cat-shop.penkuoer.com/api/v1/auth/reg',
              data:{
                userName:this.userName,
                password:this.passWord,
              }
            })
            .then(function(data){
              console.log(data.data.code)
              if(data.data.code=="success"){
                confirm("用户注册成功")
                this.$router.push({
                  name:"Login"
                  })
              }else{
                alert("用户名已存在")
              }
            }.bind(this))
            .catch(function(err){
              console.log(err);
            })
          }
      },
      //用户名验证
      userFo:function(){
        this.usert = "请输入4~10位的字母，数字，_";
      },
      userIn:function(){
        var username = this.userName;
        if(username.length<4||username.length>10){
          this.usertjg = 1;
          this.usertcg = 0;
          this.usert = "用户名应在4~10位之间";
        }else{
          //调用接口检查用户名是否重复
          this.Name++;
        }
      },
      wordFo:function(){
        this.wordt = "请输入6~20位的字母和数字的组合"
      },

      //密码验证
      wordIn:function(){
        var password = this.passWord;
        let rega=/\D/;
        if(password.length<6||password.length>20){
          this.wordtjg = 1;
          this.wordtcg = 0;
          this.wordt = "密码应在6~20位之间"
        }else if(!rega.test(password)){
          this.wordtjg = 1;
          this.wordtcg = 0;
          this.wordt = "密码不能为纯数字"
        }else{
          this.wordtcg = 1;
          this.wordtjg = 0;
          this.wordt = "密码可用";
          this.Word++;
        }
      },
      wordsFo:function(){
        this.wordst = "请再次输入密码"
      },
      wordsIn:function(){
        if(this.passWords==this.passWord){
          this.wordstcg = 1;
          this.wordst="密码一致";
          this.Words++;
        }else{
          this.wordstcg = 0;
          this.wordstjg = 1;
          this.wordst="两次输入的密码不一致";
        }
      },

    }
  }

</script>
<style scoped>
body {
  background: url(/images/login-bgc.gif) no-repeat;
}
.regis1 {
  margin-left: 9rem;
}
.yzc{
  width: 200px;
  font-size: 12px;
  float:right;
}
.van-cell__title {
  margin-left: 1.2rem;
}
.ts{
  height:24px;
  color: #cecece;
  font-size: 12px;
  line-height: 24px;
}
.jg{
  color:#f00;
}
.cg{
  color:#0f0;
}
.regis {
  margin-top: 110px;
}
h1 {
  text-align: center;
}
.regis2 {
  margin-top: 3rem;
  margin-left: 2.6rem;
  width: 20rem;
  opacity: 0.7;
  color: #fff;
  border-radius: 10px;
}
.logo{
  width: 155px;
  height: 72px;
  display: block;
  margin: 0 auto;
}
</style>
