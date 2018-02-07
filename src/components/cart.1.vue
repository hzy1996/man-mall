<template>
    <div class="box">
      <div class="cartBox">
        <div class="allCheckBox">
          <label class="label">
            <input type="checkbox" class="checkBox" @click="checkedAll">
            <h2> 全选/反选</h2>
          </label>
          <div class="buyBox">
            <i>总计:¥{{all}}</i>
              <Button type="ghost" class="cart1">购买</Button>
          </div>
        </div>
        <div class="cartLst">
          <div v-for="(v,i) in cartArr" class="arr">
            <input type="checkbox" class="checkBox" @click="checkbox(i)" :value="v.cartID" v-model="checked">
            <div class="lst">
              <div class="picBigBox">
                <div class="picBox">
                  <img :src="v.url[0]" height="60">
                </div>
              </div>
              <div class="txt">
                  <h2 class="title">{{v.shopName}}</h2>
                  <div class="txtbox">
                      <i class="type">{{v.type}}</i>
                      <i class="producer">{{v.producer}}</i>
                  </div>
              </div>
              <div class="numBox">
                <i class="num">数量：</i>
                <div class="bigBox">
                  <input type="text" class="input" v-model="v.num">
                  <div class="box">
                      <i class="add" @click="add(i)">+</i>
                      <i @click="jian(i)">-</i>
                  </div>
                </div>
              </div>
              <div class="priceBox">
                  <i class="price">单价：<span class="special">￥{{v.nowPrice}}</span></i>
                  <i class="total">小计：<span class="special">￥{{v.total}}</span></i>
              </div>
            </div>
                    
            <div class="delBox" @click="del(i)">
              <Tooltip content="删除该商品" placement="left" class="del">
                <Icon type="close-round" color="#ccc" size="16" class="delIcon"></Icon>
              </Tooltip>
            </div>  
          </div>     
        </div>
        <h2 v-show="show">购物车空空如也,去 <span class="goIndex" @click="$router.push({path:'/index'})">首页</span> 瞧瞧吧</h2>               
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      cartArr: [],
      checked: [],
      all: false,
      show:false,
      
    };
  },
  computed:{
    
  },
  methods: {
    add(_i){
      this.cartArr[_i].num++;
    },
    jian(_i){
      this.cartArr[_i].num--
      if(this.cartArr[_i].num <0){
        this.cartArr[_i].num = 0
      }
    },
    checkedAll() {
      this.all = !this.all;
      if (this.all == true) {
        console.log(this.cartArr.length);
        this.checked = [];
        for (let i = 0; i < this.cartArr.length; i++) {
          let arr = JSON.parse(localStorage.arr);
          console.log(arr);
          this.checked.push(this.cartArr[i].cartID);
          localStorage.arr = JSON.stringify(arr);
        }
      } else {
        this.checked = [];
        console.log(222222);
      }
    },
    checkbox(_i) {
      //   console.log(11111)
      // this.checked[_i] = !this.checked[_i]
    },
    del(_i) {
      console.log(this.cartArr);
      this.cartArr.splice(_i, 1);
      localStorage.arr = JSON.stringify(this.cartArr)
      if(this.cartArr.length == 0){
        this.show = true
      }
    }
  },
  mounted() {
    this.cartArr = JSON.parse(window.localStorage.arr);
    console.log(this.cartArr.num);
    // console.log(this.cartArr);
    for (let i = 0; i < this.cartArr.length; i++) {
      this.cartArr[i].cartID = i;
      this.checked[i] = this.cartArr[i].num;
      this.cartArr[i].total = this.cartArr[i].num * this.cartArr[i].nowPrice
      // console.log('this.num:'+this.num)
    }
    console.log(this.cartArr);
    if(this.cartArr.length == 0){
        this.show = true
      }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background: url(../../static/aaa.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cartBox {
  width: 1000px;
  min-height: 100vh;
  background: #f8f8f8;
}
.allCheckBox {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ivu-btn{
  height:22px;
  padding-top: 2px;
}
.checkBox {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}
.cartLst {
  /* padding: 20px; */
}
.arr {
  display: flex;
  border-bottom: 1px solid #ccc;
  flex-direction: row;
  align-items: center;
  padding: 10px 40px;
}
.label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.cartLabel {
  
  width: 90%;
}
.lst {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.picBigBox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
}
.txt {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
}
.txtbox {
  align-self: flex-start;
  width: 200px;
  height: 30px;
}
.producer,
.type {
  display: block;
  float: left;
  height: 20px;
  border-radius: 3px;
  background: #449ee9;
  line-height: 20px;
  min-width: 50px;
  text-align: center;
  padding: 0 10px;
  margin-top: 20px;
  width: 100px;
}
.title {
  /* margin-top: -10px; */
}
.producer {
  margin-left: 20px;
  background: #c38c2c;
}
.picBox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 60px;
  height: 60px;
  /* padding: 5px; */
  border: 1px solid #ccc;
  background: #369;
}
.numBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
}
 .bigBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:89px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
  background: #fff;
}
.input {
  width: 60px;
  height: 20px;
  line-height: 20px;
  vertical-align: top;
  border: none;
  background-color: white;
  user-select: text;
  cursor: auto;
  outline:none;
  padding-left: 10px;
}
.box{
  display: flex;
  flex-direction: column;
}
.box i {
  font-size: 8px;
  display: block;
  height: 10px;
  line-height: 10px;
  border-left: 1px solid #ccc;
  box-sizing: border-box;
  display: none;
  cursor: pointer;
  padding: 0px 10px;
  background: #fff;
  
}
.add {
  border-bottom: 1px solid #ccc;
}
.bigBox:hover .box i{
  display: block;
}
.numInput {
  margin-top: 20px;
}
.priceBox {
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  width: 100px;
}
.total {
  margin-top: 20px;
}
.special {
  color: #f90;
}
.del {
  margin-left: 80px;
  margin-right: 50px;
}
.delIcon {
  cursor: pointer;
}

</style>