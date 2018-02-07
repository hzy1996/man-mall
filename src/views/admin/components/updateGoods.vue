<template>
    <div class="box">
        <div class="add">
            <div class="name">
                <i>商品名：</i>
                <input type="text" class="myinput" v-model="newgoods.name">
            </div>
            <div class="name">
                <i>商品类名：</i>
                <div class="myselect">
                    <div class="input">
                        <input type="text" class="my-input" @click="show=!show" v-model="newgoods.category._id">
                        <Icon type="chevron-down" size="16" class="i"></Icon>
                    </div>
                    <div class="btm" v-if="show">
                        <i v-for="v in category" @click="get_val(v._id)">{{v.name}}</i>
                    </div>
                </div>
            </div>
            <div class="name">
                <i>标签：</i>
                <div class="myselect">
                    <div class="input">
                        <input type="text" class="my-input" @click="show1=!show1" v-model="newgoods.tag">
                        <Icon type="chevron-down" size="16" class="i"></Icon>
                    </div>
                    <div class="btm btm2" v-if="show1">
                        <i v-for="v in tag" @click="get_val1(v)">{{v.val}}</i>
                    </div>
                </div>
            </div>
            <div class="name">
                <i>图片路径：</i>
                <input type="text" class="myinput" v-model="newgoods.img_url">
            </div>
            <div class="name">
                <i>价格/元：</i>
                <input type="text" class="myinput" v-model="newgoods.price">
            </div>
            <div class="name">
                <i>商品描述：</i>
                <textarea class="text" rows="8" cols="40" v-model="newgoods.description"></textarea>
            </div>
            <div class="sub">
                <button>取消</button>
                <button @click="updateGoods">提交</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                show1: false,
                newgoods: {},
                category_id: [],
                category: [],
                categoryVal: '请选择',
                tag: [{
                    val: '新品主推'
                }],
            }
        },
        methods: {
            async get_category(){
                let res = await this.$ajax.get('http://localhost:4000/category/public/read')
                console.log(res)
                this.category = res.data.data
            },
            async post_goods() {
                let res = await this.$ajax.post('http://localhost:4000/goods/public/read')
                let id = sessionStorage.id
                console.log(sessionStorage.id)
                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i]._id == id) {
                        this.newgoods = res.data.data[i]
                        console.log(this.newgoods)
                    }
                }
            },
            async updateGoods() {
                console.log(sessionStorage.id)
                let name = this.newgoods.name
                let category = this.newgoods.category._id
                let res = await this.$ajax.post('http://localhost:4000/goods/update', { 
                    id:sessionStorage.id,
                    name:this.newgoods.name,
                    category:this.newgoods.category._id,
                    tag:[this.newgoods.tag[0]],
                    img_url:this.newgoods.img_url,
                    price:this.newgoods.price,
                    description:this.newgoods.description
                })
                console.log(res)
            },
            get_val(id) {
                this.newgoods.category._id = id
                this.show = !this.show
            },
            get_val1(v) {
                this.newgoods.tag = v.val
                this.show1 = !this.show1
            }
        },
        created() {
            this.post_goods()
            this.get_category()
        }
    }
</script>
<style scoped>
    .text {
        width: 300px;
        overflow-x: visible;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
    }
    .myselect {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 32px;
        /* width: 300px; */
        border-radius: 5px;
        border: 1px solid #e5e5e5;
    }
    .my-input {
        color: transparent;
        text-shadow: 0 0 0 #000;
        width: 280px!important;
        height: 30px;
        border: none;
        outline: none;
        padding-left: 10px;
    }
    .ivu-icon {
        width: 20px!important;
    }
    .input {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .btm {
        display: flex;
        flex-direction: column;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
        position: absolute;
        top: 34px;
        left: 0;
        background: #f8f8f8;
        z-index: 2;
    }
    .btm2 {
        z-index: 1;
    }
    .btm i {
        width: 300px!important;
        height: 30px;
        line-height: 30px;
        padding-left: 10px
    }
    .btm i:hover {
        background: #ccc;
    }
    .select {
        display: flex;
        flex-direction: column;
    }
    .btom {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        margin-top: 2px;
    }
    .btom i:hover {
        background: #ccc;
    }
    .myselect {
        /* outline: none; */
        height: 32px;
        width: 300px;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        /* appearance:none; */
        filter: none !important;
    }
    .box {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .add {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .name {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .name i {
        width: 100px;
        text-align: left;
    }
</style>
