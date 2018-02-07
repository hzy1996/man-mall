<template>
    <div class="box">
        <div class="header">
            <div class="logoBox">
                <div class="logo"></div>
            </div>
            <div class="res"></div>
        </div>
        <div class="footer" :style="style">
            <div class="left">
                <div class="navBox">
                    <li>用户中心</li>
                    <router-link to="/admin/member">会员列表</router-link>
                    <router-link to="/admin/adm">管理员</router-link>
                    <li>商品管理</li>
                    <router-link to="/admin/goods">商品列表</router-link>
                    <router-link to="/admin/goodsclass">商品分类</router-link>
                    <router-link to="/admin/comment">商品评论</router-link>
                </div>
            </div>
            <div class="right" :style="sty">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            style(){
                let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                console.log(h)
                return {height:(h-50)+'px'}
            },
            sty(){
                let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                return {width:(w-150)+'px'}
            }
        },
        beforeCreate() {
            if (!sessionStorage.token) {
                this.$router.push({
                    path: "/admin_login"
                })
            }
        },
    }
</script>
<style scoped>
    .box {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .header {
        width: 100%;
        height: 50px;
        
    }
    .footer{
        width: 100%;
        /* height: 700px; */
        display: flex;
        flex-direction: row;
    }
    .left {
        width: 150px;
        height: 100%;
        background: #f8f8f8;
        display: flex;
        flex-direction: column;
        background: #464c5b;
        box-shadow: 1px 0 1px #ccc;
    }
    .logoBox {
        width: 100%;
        height: 50px;
        background: #464c5b;

    }
    .logo{
        width: 300px;
        height: 100%;
        background: url(../../../../static/admin_logo.png) no-repeat left center/300px 78px;
    }
    .navBox {
        width: 100%;
        /* margin-top: 10px; */
        display: flex;
        flex-direction: column;
    }
    .navBox li {
        height: 40px;
        /* border-bottom: 1px solid #ccc; */
        line-height: 40px;
        padding-left: 10px;
        background: #464c5b;
        color: #f8f8f8;
    }
    .navBox a {
        height: 40px;
        /* border-bottom: 1px solid #ccc; */
        line-height: 40px;
        padding-left: 30px;
        color: #f8f8f8;
        background: #464c5b
    }
    .navBox a:hover{
        background: #313540;
    }
    .router-link-active{
        background: #313540!important;
        color: #f8f8f8!important;
    }
    .right {
        width: 80%;
        height: 100%;
        /* background: #f5f7f9; */
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* align-items: center; */
        overflow: scroll;
        padding: 0px 10px;
    }
</style>

