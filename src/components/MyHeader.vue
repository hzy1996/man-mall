<template>
  <div class="allBox">
    <div class="box logoBox">
      <div class="logo"></div>
      <div class="right">
        <input type="text" placeholder="搜索商品" class="search">
        <button class="searchBtn">搜索</button>
        <div class="rightBox">
          <Icon type="android-call" color="#f8f8f8"></Icon>
          <i>18877571464</i>
          <Poptip placement="bottom" trigger="hover">
            <Icon type="android-person" color="#f8f8f8" class="my"></Icon>
            <i class="my">我的</i>
            <div class="api" slot="content">
              <i class="login" @click="$router.push({path:'login'})">登录</i>
              <i class="register" @click="$router.push({path:'register'})">注册</i>
            </div>
          </Poptip>
          <!-- <Poptip placement="bottom" trigger="hover">
            <Icon type="android-cart" color="#f8f8f8" class="my"></Icon>
            <i class="cartTxt">购物车</i>
            <div class="api" slot="content">
              <p>已选商品:0件</p>
              <p>总计:元</p>
            </div>
          </Poptip> -->
        </div>
      </div>
    </div>
    <div class="box navBox">
      <ul class="nav">
        <li>
          <router-link to="/index">首页</router-link>
        </li>
        <li>
          <router-link to="/shouban">手办</router-link>
        </li>
        <li>
          <router-link to="/cosplay">服饰鞋帽</router-link>
        </li>
        <li>
          <router-link to="/manhua">图书音像</router-link>
        </li>
        <li>
          <!-- <router-link to="qingxiaoshuo">轻小说</router-link> -->
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
       
      }
    }
  };
</script>

<style scoped>
  .allBox {
    width: 100%;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: #f8f8f8; */
  }
  
  .box {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    
  }
  .logoBox {
    margin-top: 10px;
  }
  .logo {
    width: 200px;
    height: 50px;
    background: url(../../static/logo2.png) no-repeat center center /contain;
  }
  .right {
    height: 50px;
    /* background: #53cbfd; */
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .search {
    width: 400px;
    height: 30px;
    border: 2px solid #53cbfd;
    outline: none;
    font: 14px/30px "microsoft yahei";
    padding-left: 10px;
  }
  .searchBtn {
    background: #53cbfd;
    width: 80px;
    height: 30px;
    color: white;
    border: none;
    outline: none;
    font: 14px/30px "microsoft yahei";
    cursor: pointer;
  }
  .rightBox {
    margin-left: 20px;
  }
  .ivu-icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    margin-left: 10px;
  }
  .ivu-icon-android-call {
    background: #cc4f52;
  }
  .ivu-icon-android-person {
    background: #ccc;
  }
  .ivu-icon-android-cart {
    background: #2775be;
  }
  .api {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .api i {
    display: block;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .api i:hover {
    color: #cc4f52;
  }
  .my {
    cursor: pointer;
  }
  .cartTxt {
    margin-right: 10px;
    cursor: pointer;
  }
  .navBox {
    display: flex;
    width: 100%;
    height: 50px;
    flex-direction: row;
    background: #53cbfd;
    justify-content: center;
    align-items: center;
  }
  .nav {
    list-style: none;
    width: 1000px;
  }
  .nav li {
    float: left;
    display: flex;
    height: 50px;
    align-items: center;
  }
  .nav li a {
    padding-left: 0;
    padding-right: 40px;
    height: 50px;
    color: #f8f8f8;
    font-size: 16px;
    line-height: 50px;
  }
  .nav li a:hover {
    color: #c62828;
  }
</style>
