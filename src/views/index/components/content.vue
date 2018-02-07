<template>
  <div class="main">
    <transition name="ff">
      <img :src="$store.state.hotShop[$store.state.i].url" width="380" height="524" class="img" :style="style" v-if="$store.state.show">
    </transition>
    <div class="content">
      <div class="newShopNav">
        <div class="txt">
          <i class="shopNavTxt">新品主推</i>
          <a href="##" class="more">查看更多</a>
        </div>
      </div>
      <div class="shopLst">
        <div class="shopBox" v-for="(v,i) in newShop" @click="change(v)">
          <img :src="v.img_url" width="190" height="262" :title="v.name">
          <p class="title" :title="v.name">{{v.name}}</p>
          <div class="price">
            <!-- <i class="oldPrice">原价:&nbsp;&nbsp;{{v.oldPrice}}</i>现价: -->
            <i class="nowPrice">{{v.price}}</i>
          </div>
        </div>
      </div>
      <div class="hotShopNav">
        <div class="txt">
          <i class="shopNavTxt">手办</i>
          <a href="##" class="more">查看更多</a>
        </div>
      </div>
      <div class="shopLst">
        <div class="shopBox" v-for="(v,i) in shouban" @click="change(v)">
          <img :src="v.img_url" width="190" height="262" :title="v.name" @mousemove="move(i)" @mousedown="down" title="点击图片查看详细信息">
          <p class="title" :title="v.name">{{v.name}}</p>
          <div class="price">
            <!-- <i class="oldPrice">原价:&nbsp;&nbsp;{{v.oldPrice}}</i>现价: -->
            <i class="nowPrice">{{v.price}}</i>
          </div>
        </div>
      </div>
      <div class="discountShopNav">
        <div class="txt">
          <i class="shopNavTxt">衣服</i>
          <a href="##" class="more">查看更多</a>
        </div>
      </div>
      <div class="shopLst">
        <div class="shopBox" v-for="(v,i) in yifu" @click="change(v)">
          <img :src="v.img_url" width="190" height="262" :title="v.name">
          <p class="title" :title="v.name">{{v.name}}</p>
          <div class="price">
            <!-- <i class="oldPrice">原价:&nbsp;&nbsp;{{v.oldPrice}}</i> 现价: -->
            <i class="nowPrice">{{v.price}}</i>
          </div>
        </div>
      </div>
      <div class="discountShopNav">
        <div class="txt">
          <i class="shopNavTxt">图书</i>
          <a href="##" class="more">查看更多</a>
        </div>
      </div>
      <div class="shopLst">
        <div class="shopBox" v-for="(v,i) in tushu" @click="change(v)">
          <img :src="v.img_url" width="190" height="262" :title="v.name">
          <p class="title" :title="v.name">{{v.name}}</p>
          <div class="price">
            <i class="nowPrice">{{v.price}}</i>
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
        newShop: [],
        shouban: [],
        yifu: [],
        tushu: []
      }
    },
    created() {
      this.get_shop()
    },
    methods: {
      async get_shop() {
        let res = await this.$ajax.post('http://localhost:4000/goods/public/read')
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].tag[0] == '新品主推') {
            console.log(res.data.data[i])
            this.newShop.push(res.data.data[i])
            console.log(this.newShop)
          }
          if (res.data.data[i].category.name == '手办') {
            console.log(res.data.data[i])
            this.shouban.push(res.data.data[i])
          }
          if (res.data.data[i].category.name == '衣服') {
            console.log(res.data.data[i])
            this.yifu.push(res.data.data[i])
          }
          if (res.data.data[i].category.name == '图书') {
            console.log(res.data.data[i])
            this.tushu.push(res.data.data[i])
          }
        }
      },
      change(_v) {
        window.sessionStorage.id = _v.id
        this.$router.push({
          path: "/shopPage"
        })
      },
      down(_e) {
        this.$store.state.show = !this.$store.state.show
        // console.log('v:'+_v)
        this.$store.state.x = _e.clientX - _e.offsetX
        this.$store.state.y = _e.clientY - _e.offsetY
        console.log(this.$store.state.hotShop[this.$store.state.i].url)
        // console.log(this.$store.state.x)
      },
      move(_i) {
        // console.log('i:'+_i)
        this.$store.state.i = _i
      }
    },
    computed: {
      style() {
        return {
          left: this.$store.state.x + "px",
          top: this.$store.state.y + 'px'
        }
      }
    }
  }
</script>
<style scoped>
  .main {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .tips {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: rgba(215, 215, 215, 0.7); */
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tipsAll {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(215, 215, 215, 0.7);
  }
  .img {
    position: fixed;
  }
  .ff-enter-active,
  .ff-leave-active {
    transition: all .8s ease;
  }
  .ff-enter,
  .ff-leave-to {
    transform: scale(0.5);
    opacity: 0;
  }
  .ff-enter-to,
  .ff-leave {
    transform: scale(1);
    opacity: 1;
    left: 50%;
    top: 50%;
  }
  .aa-enter-active,
  .aa-leave-active {
    transition: all 3s ease;
  }
  .aa-enter,
  .aa-leave-to {
    opacity: 0;
  }
  .aa-enter-to,
  .aa-leave {
    opacity: 1;
  }
  .img-fate-enter-active,
  .img-fate-leave-active {
    transition: all .5s ease;
  }
  .img-fate-enter,
  .img-fate-leave-to {
    width: 190px;
    height: 262px;
  }
  .img-fate-enter-to,
  .img-fate-leave {
    width: 380px;
    height: 524px;
  }
  .content {
    width: 1000px;
    /* height: 500px; */
    /* background: #f8f8f8; */
  }
  .newShopNav,
  .hotShopNav,
  .discountShopNav {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    background: url(../../../../static/xian.png)repeat-x center center/contain;
    margin-top: 30px;
  }
  .txt {
    width: 100px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }
  .shopNavTxt {
    font-size: 18px;
    font-weight: 800;
  }
  .shopLst {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
    margin-top: 20px;
    max-height: 732px;
    overflow: hidden;
  }
  .shopBox {
    box-sizing: border-box;
    background-color: white;
    flex: 0 0 23.5%;
    /* height: 300px; */
    /* border: 1px solid red; */
    background: #e5e7e880;
    margin-bottom: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 22px;
    padding-bottom: 22px;
    border-radius: 3px;
    cursor: pointer;
  }
  .shopBox img {}
  .title {
    height: 30px;
    line-height: 30px;
    width: 190px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .oldPrice {
    text-decoration: line-through;
    color: #666;
    margin-right: 10px;
    ;
  }
  .nowPrice {
    margin-left: 5px;
    height: 20px;
    line-height: 20px;
    border-radius: 5px;
    background: #ff8a83;
    padding: 0 10px;
    color: #f8f8f8;
    /* margin-right: 22.5px; */
  }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 190px;
    /* margin-right: 22.5px; */
    margin-top: 10px;
    color: #666;
  }
  .shopLst .shopBox:nth-child(4n) {
    margin-right: 0;
  }
</style>
