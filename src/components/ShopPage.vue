<template>
  <div class="pageBox">
    <div class="back">
      <Icon type="ios-arrow-back" color="#f8f8f8" size="25" class="my" @click="goback">返回></Icon>
      <i class="goback" @click="goback">返回</i>
    </div>
    <div class="botmBox">
      <div class="leftBox">
        <div class="smallLogo">
        </div>
        <div class="lstBox">
          <i @click="$router.push({path:'/cosplay'})">cosplay</i>
          <i @click="$router.push({path:'/shouban'})">手办</i>
          <i @click="$router.push({path:'/manhua'})">漫画</i>
          <i @click="$router.push({path:'/qingxiaoshuo'})">轻小说</i>
          <i class="loginTxt" @click="$router.push({path:'/login'})">登录</i>
          <i @click="$router.push({path:'/register'})">注册</i>
        </div>
      </div>
      <div class="cneterBox">
        <div class="bicPic">
          <img :src="ppArr.imr_url" width="600">
        </div>
        <!-- <div class="smallBox">
          <i class="smallPic">
            <img v-for="(v,i) in ppArr.url" :src="v" width="75" @click="click(i,v)" :class='getClass(i)'>
          </i>
        </div> -->
      </div>
      <div class="rightBox">
        <h1 class="name">{{ppArr.name}}</h1>
        <i class="itemPrice">漫购商城售价: <span class="spanPrice">￥{{ppArr.nowPrice}}</span> </i>
        <div class="addCart">
          <i class="num">数量:</i>
          <InputNumber :max="99" :min="0" v-model="num" size="small"></InputNumber>
          <Button type="ghost" class="cart1" @click="addCart">加入购物车</Button>
          <!-- <Icon type="android-cart"></Icon> -->
          <Poptip placement="bottom-end" width="320" trigger="hover">
            <Button type="ghost" icon="android-cart" class="cart1">查看购物车</Button>
            <div class="api cartContent" slot="content">
              <div class="cartLst">
                <div class="cartMore">
                  <!-- <p>已选商品:0件&nbsp;&nbsp;总计: <span class="pirce"></span> 元</p> -->
                  <Button type="ghost" class="cart1" @click="emptyCart">清空购物车</Button>
                  <Button type="ghost" class="cart1" @click="$router.push({path:'/cart'})">查看更多</Button>
                </div>
                <li v-for="v in cartArr" class="cartLi" :style="style(v)" v-if="show">
                  <img :src="v.url[0]" width="50" height="60">
                  <div class="cartShopTxt">
                    <p class="cartShopName">{{v.Shorthand}} <span class="shopNum">x {{v.num}}</span></p>
                    <i class="cartShopPrice pirce">{{v.nowPrice}}</i>
                  </div>
                </li>
              </div>
            </div>
          </Poptip>
        </div>
        <div class="shopInformation">
          <div class="navTitle">
            <h2 class="navTitleTxt">商品属性</h2>
          </div>
          <div class="table">
            <h2 class="tableTitle">类型</h2>
            <h2 class="tableContent">{{ppArr.type}}</h2>
          </div>
          <div class="table">
            <h2 class="tableTitle">出场日期</h2>
            <h2 class="tableContent">{{ppArr.proDate}}</h2>
          </div>
          <div class="table">
            <h2 class="tableTitle">生产商</h2>
            <h2 class="tableContent">{{ppArr.producer}}</h2>
          </div>
          <div class="table">
            <h2 class="tableTitle">尺寸</h2>
            <h2 class="tableContent">{{ppArr.size}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ppArr: {},
        arr: [],
        num: 1,
        cartArr: [],
        n: false,
        url: '',
        i: 0,
        show: true
      }
    },
    methods: {
      async get_shop(){
        let res = await this.$ajax.post('http://localhost:4000/goods/public/read')
          for(let i=0;i<res.data.data.lenght;i++){
            if(res.data.data[i]._id == sessionStorage.id){
              this.ppArr = res.data.data[i]
            }
          }
      },
      click(_i, _v) {
        this.url = _v
        this.i = _i
      },
      getClass(_i) {
        if (_i == this.i) {
          return 'smallPicImgBox'
        } else {
          return 'smallPicImg'
        }
      },
      goback() {
        this.$router.history.go(-1)
      },
      addCart() {
        if (this.n == true) {
          // this.cartArr = JSON.parse(window.localStorage.arr)
          this.cartArr = []
          // this.show = false
          this.n = false
          // //console.log(this.cartArr)
          // for (let i = 0; i < this.cartArr.length; i++) {
          //         this.style(this.cartArr[i])
          // }
          // //console.log('!!!!!!!!!!!!!!!!!!!!!!')
          return
        }
        // this.show = true
        let arr = window.localStorage.arr
        let obj = JSON.parse(window.localStorage.arr)
        this.ppArr.num = this.num
        //console.log('num:' + this.ppArr.num)
        //console.log(obj.length)
        if (obj.length == 0) {
          obj.push(this.ppArr)
          window.localStorage.arr = JSON.stringify(obj)
          //console.log(1111)
        } else {
          let n = true
          // ////console.log(2222)
          for (let i = 0; i < obj.length; i++) {
            if (obj[i].id == this.ppArr.id) {
              obj[i].num += this.ppArr.num
              window.localStorage.arr = JSON.stringify(obj)
              n = false
              // ////console.log(3333)
            }
          }
          // ////console.log(44444)
          if (n == true) {
            obj.push(this.ppArr)
            window.localStorage.arr = JSON.stringify(obj)
          }
        }
        // ////console.log(6666)
        // ////console.log(window.localStorage.arr)
        this.cartArr = JSON.parse(window.localStorage.arr)
        // ////console.log('!!!!!!!!!!!!!!!!!!!!'+this.cartArr[1].url[0])
        console.log(window.localStorage.arr)
      },
      emptyCart() {
        this.n = true
        window.localStorage.arr = "[]"
        // ////console.log(window.localStorage.arr)
        this.addCart()
        this.n = false
      },
      style(_v) {
        ////console.log('?????:'+_v)
        if (!_v.url) {
          return {
            display: 'none'
          }
        }
      }
    },
    mounted() {
      // this.ppArr = JSON.parse(window.sessionStorage.shopPage)
      // this.cartArr = JSON.parse(window.localStorage.arr)
      // this.url = this.ppArr.url[0]
    },
    created(){

    }
  }
</script>
<style scoped>
  .pageBox {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: url(../../static/aaa.jpg)
  }
  .back {
    width: 1200px;
    height: 30px;
    background: #53cbfd;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  .goback {
    cursor: pointer;
    margin-left: 5px;
    color: #f8f8f8;
    font-size: 14px;
  }
  .botmBox {
    display: flex;
    flex-direction: row;
    width: 1200px;
    min-height: 100vh;
  }
  .leftBox {
    width: 200px;
    min-height: 100vh;
    background: #d8d6d3;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    /* border-left: 1px solid #eeeeee5e;
                                                                                                                            box-sizing: border-box; */
    box-shadow: -1px 1px 1px 1px #ccc;
  }
  .smallLogo {
    width: 100%;
    height: 60px;
    margin-bottom: 40px;
    background: url(../../static/smallLogo.png)no-repeat center center/contain;
  }
  .leftBox i {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-bottom: 1px solid #ceccc9ad;
  }
  .leftBox i:hover {
    background: url(../../static/menu_bg.jpg)no-repeat left center/cover;
  }
  .lstBox {
    flex: 1;
    color: 000;
  }
  .loginTxt {
    margin-top: 50px;
  }
  .cneterBox {
    width: 640px;
    height: 100%;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-top: 20px;
    /* margin-right: 30px; */
  }
  .bicPic {
    width: 600px;
    height: 830px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .smallBox {
    margin-top: 10px;
  }
  .smallPic {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
  .smallPicImg {
    border: 1px solid #ccc;
    margin-left: 5px;
    padding: 5px;
  }
  .smallPicImgBox {
    border: 1px solid #f00;
    margin-left: 5px;
    padding: 5px;
  }
  .like {
    width: 100%;
    height: 250px;
    background: #369;
    margin-top: 20px;
    padding: 0px 20px;
    align-self: flex-start;
    overflow: hidden;
  }
  .allBox {
    width: 1700px;
    height: 100%
  }
  .rightBox {
    width: 360px;
    min-height: 935px;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }
  .name {
    display: block;
    width: 100%;
    /* height: 50px; */
    background: #ceccc9;
    box-sizing: border-box;
    border-left: 2px solid #ffa200;
    line-height: 50px;
    text-align: center;
    margin-top: 0;
    font-size: 18px;
    color: #000;
  }
  .itemPrice {
    width: 100%;
    height: 50px;
    display: block;
    border-bottom: 1px solid #eee;
    line-height: 50px;
    text-align: center;
    margin-bottom: 10px;
    color: #000;
    font-size: 16px;
  }
  .spanPrice {
    color: #f90;
    font-size: 16px;
  }
  .addCart {
    padding: 30px 5px;
    border-bottom: 1px solid #eee;
  }
  .num {
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  .cartShopTxt {
    margin-left: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    /* align-items: center; */
  }
  .cartShopName {
    font-size: 14px;
    font-weight: 300;
  }
  .shopNum {
    color: #f00;
  }
  .cart1 {
    margin-left: 10px;
  }
  .api {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 500px;
    overflow: hidden;
  }
  .cartMore {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #f3f3f3;
    padding: 10px 0px;
  }
  .cartLi {
    display: flex;
    flex-direction: row;
    padding: 10px 10px;
    border-bottom: 1px solid #f3f3f3;
  }
  .pirce {
    color: #f90;
  }
  .cartShopPrice {
    margin-top: 20px;
  }
  .ivu-input-number,
  .ivu-input-number-small {
    width: 50px;
  }
  .ivu-input-number-input-wrap {
    width: 52px;
  }
  .ivu-input-number-input {
    width: 30px;
  }
  .ivu-btn,
  .ivu-btn-ghost {
    height: 22px;
    padding: 2px 5px;
  }
  .shopInformation {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }
  .navTitle {
    background: #d8d6d3;
  }
  .navTitle .navTitleTxt {
    font-size: 16px;
    display: block;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border-left: 2px solid #ffa200;
    padding-left: 10px;
    color: #000;
    font-weight: 500;
  }
  .table {
    background: #ceccc99e;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
  }
  .tableTitle {
    color: #000;
    font-weight: 500;
    font-size: 16px;
    display: block;
    width: 100px;
    flex: 1;
  }
  .tableContent {
    color: #000;
    font-weight: 500;
    font-size: 16px;
    background: #eee;
    flex: 2;
    padding-left: 10px;
  }
</style>
