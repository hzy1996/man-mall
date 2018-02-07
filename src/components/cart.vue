<template>
   <div class="box">
     <div class="cartBox">
       <div class="allChecked">
         <label class="label">
           <input type="checkbox" @click="checkedAll"  class="checkBox">
           <h2>全选</h2>
         </label>
         <i>总计<span class="allPrice"> ¥{{allPrice}}</span></i>
       </div>
       <div class="cartLstBox">
         <div class="label cartLst" v-for="(v,i) in cartArr">
           <input type="checkbox" :value="v.cartID" v-model="checked" class="checked">
           <img :src="v.url[0]" alt="" height="60" class="img">
           <div class="txt">
             <h2 class="title">{{v.shopName}}</h2>
             <div class="proBox">
               <i>{{v.type}}</i>
               <i class="producer">{{v.producer}}</i>
             </div>
           </div>
           <div class="numBox">
             <i class="numTxt">数量:</i>
             <div class="bigBox">
                  <input type="text" class="input" v-model="v.num">
                  <div class="addBox">
                      <i class="add" @click="add(i)">+</i>
                      <i @click="jian(i)">-</i>
                  </div>
                </div>
           </div>
           <div class="priceBox">
             <i class="price">单价: <span class="special">¥{{v.nowPrice}}</span> </i>
             <div class="delBox" @click="del(i)">
              <Tooltip content="删除该商品" placement="right" class="del">
                <Icon type="close-round" color="#ccc" size="16" class="delIcon"></Icon>
              </Tooltip>
             </div> 
           </div>
         </div>
         <h2 v-show="show">购物车空空如也,去 <span class="goIndex" @click="$router.push({path:'/index'})">首页</span> 瞧瞧吧</h2>    
       </div>
     </div>           
   </div>
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
    allPrice(){
      let total =0
      for( let n=0;n<this.cartArr.length;n++){
        for(let i=0;i<this.checked.length;i++){
          if(n == this.checked[i]){
            this.cartArr[n].total = Number(this.cartArr[n].num * this.cartArr[n].nowPrice)
            console.log(this.cartArr[n].total)
            total += this.cartArr[n].total
          }
          // total += Number(this.cartArr[this.checked[i]].num * this.cartArr[this.checked[i]].nowPrice)
        }
      }
      return total.toFixed(2)
      // return{}
    }
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
    for (let i = 0; i < this.cartArr.length; i++) {
      this.cartArr[i].cartID = i;
      // this.checked[i] = this.cartArr[i].num;
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
  .box{
    width: 100%;
    min-height: 100vh;
    background: url(../../static/aaa.jpg);
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .cartBox{
    width: 1000px;
    min-height: 100vh;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .allChecked{
    width: 100%;
    height: 40px;
    background: #f9f9f9;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;

  }
  .label{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
.checkBox {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}
.allPrice{
  color:#f90;
}
.cartLstBox{
  width: 100%;
  padding: 10px 20px;
}
.cartLst{
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 20px 0px;
}
.checked{

}
.img{
  margin-left: 30px;
}
.txt{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  margin: 0 30px;
}
.proBox{
  margin-top: 20px;
}
.proBox i{
  display: block;
  float: left;
  padding: 0 20px;
  border-radius: 3px;
  background: #449ee9;
}
.producer{
  background: #c38c2c!important;
  margin-left: 20px;
}
.numBox{
  margin-left: 30px;
}
.bigBox{
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 3px;
  margin-top: 15px;
  width: 80px;
}
.input{
  border: none;
  outline: none;
  width: 50px;
  height: 20px;
  background: none;
  color:#666;
  font-size: 12px;
  padding: 0 10px;
}
.addBox{
  display: flex;
  flex-direction: column;
}
.addBox i{
  display: block;
  height: 10px;
  line-height: 10px;
  padding: 0 10px;
  text-align: center;
  display: none;
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  cursor: pointer;
}
.add{
  border-bottom: 1px solid #ccc;
}
.bigBox:hover .addBox i{
  display: block;
}
.priceBox{
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.delBox{
  margin-top: 15px;
}
.special{
  color:#f90;
}
</style>