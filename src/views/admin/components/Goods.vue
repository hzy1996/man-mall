<template>
    <div class="conBox">
        <div class="topBox">
            <button @click="$router.push({path:'/admin/addgoods'})">添加商品</button>
            <div class="searchBox">
                <input type="text" class="sear" placeholder="搜索商品" v-model="shop" @keyup.13="search">
                <input type="submit" class="btm" value="搜索" @click="search">
            </div>
        </div>
        <div class="lstBox">
            <li class="lstNav">
                <i class="id">ID</i>
                <i class="name">商品名</i>
                <i>商品分类</i>
                <i>单价</i>
                <i class="go">操作</i>
            </li>
            <i v-if="show" class="i">无相关商品</i>
            <li class="lst" v-for="(v,i) in shopLst" :key="v._id">
                <i class="id">{{v._id}}</i>
                <i class="name show">
                                        <img :src="v.img_url" height="40">
                                        {{v.name}}
                                        </i>
                <i>{{v.category.name}}</i>
                <i>{{v.price}}</i>
                <i class="go">
                            <button @click="updateGoods(v)">修改</button>
                            <button class="button1" @click="del_goods(v)">删除</button>
                        </i>
            </li>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                shopLst: [],
                shop: '',
                show: false
            }
        },
        methods: {
            async post_goods() {
                let res = await this.$ajax.post('http://localhost:4000/goods/public/read')
                console.log(res)
                this.shopLst = res.data.data
                console.log(this.shopLst[0].category.name)
            },
            async del_goods(id) {
                console.log(id)
                if (window.confirm('你确定要删除该商品吗？')) {
                    let res = await this.$ajax.post('http://localhost:4000/goods/delete', {
                        id: id
                    })
                    this.$router.push({
                        path: '/admin/goods'
                    })
                }
            },
            async search() {
                let res = await this.$ajax.post('http://localhost:4000/goods/public/read/by_name', {
                    name: this.shop
                })
                console.log(res)
                if (res.data.data.length ==0){
                    console.log(11111111)
                    this.show = true
                }
                    this.shopLst = res.data.data
            },
            updateGoods(v) {
                sessionStorage.id = v._id
                console.log(sessionStorage.id)
                this.$store.state.updateGoods = v
                this.$router.push({
                    path: '/admin/updategoods'
                })
            }
        },
        created() {
            if (this.shop == '') {
                this.post_goods()
            }
        }
    }
</script>
<style scoped>
    .conBox {
        width: 100%;
        height: 100%;
    }
    .topBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    button {
        color: #f8f8f8;
        cursor: pointer;
    }
    .topBox button {
        width: 80px;
        height: 30px;
        border: none;
        background: #09C878;
        color: #f8f8f8;
    }
    .button1 {
        background: #f90!important;
        margin-left: 10px;
        color: #f8f8f8;
    }
    .searchBox {
        width: 100%;
        height: 50px;
        /* border-bottom: 1px solid #ccc; */
        /* background: #369; */
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    .sear {
        width: 400px;
        outline: none;
        height: 30px;
        padding-left: 10px;
    }
    .btm {
        width: 70px;
        height: 30px;
        background: #3BADF3;
        color: #f8f8f8;
        /* outline: none; */
        border: none;
        cursor: pointer;
    }
    .i{
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }
    .lstNav {
        background: #f5f7f9;
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row;
    }
    .lstNav i,
    .lst i {
        width: 10%;
        text-align: center;
    }
    .lst {
        min-height: 55px;
        line-height: 55px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #f9f9f9;
    }
    .id {
        word-wrap: break-word
    }
    .lst:hover {
        background: #f9f9f9;
        box-shadow: 0px 1px 1px #ccc;
    }
    .lst i {
        flex-grow: 1;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
    }
    .lst button {
        width: 40px;
        height: 20px;
        font-size: 12px;
        line-height: 20px;
        background: #39f;
        border: none;
        outline: none;
    }
    .name {
        width: 40%!important;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .show{
        justify-content: flex-start!important;
    }
    .go,
    .id {
        width: 20%!important;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>


