<template>
    <div class="conBox">
        <div class="topBox">
            <!-- <button @click="$router.push({path:'/admin/adduser'})">添加会员</button> -->
            <div class="titleBox">
                <div class="title">管理员</div>
                <button class="btm">添加管理员</button>
            </div>
        </div>
        <div class="lstBox">
            <li class="lstNav">
                <i>id</i>
                <i>用户名</i>
                <i>手机号</i>
                <i>创建时间</i>
                <i>更改时间</i>
                <i>用户类型</i>
                <i>操作</i>
            </li>
            <li class="lst" v-for="v in shopLst">
                <i>{{v._id}}</i>
                <i>{{v.name}} </i>
                <i>{{v.mobile}}</i>
                <i>{{v.created_at}}</i>
                <i>{{v.updated_at}}</i>
                <i>{{v.role[0].name}}</i>
                <i>
                            <button @click="updateUser(v)">修改</button>
                            <button class="button1">删除</button>
                                        </i>
            </li>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                shopLst: []
            }
        },
        methods: {
            async post_user() {
                let res = await this.$ajax.post('http://localhost:4000/user/read', {
                    skip: 0,
                    limit: 10
                })
                console.log(res)

                for (let i = 0; i < res.data.data.length; i++) {
                    if (res.data.data[i].role[0].name == '超级管理员') {
                        let date1 = new Date(res.data.data[i].created_at)
                        let date2 = new Date(res.data.data[i].updated_at)
                        let Y1, M1, D1, h1, m1, s1, Y2, M2, D2, h2, m2, s2
                        Y1 = date1.getFullYear() + '-';
                        Y2 = date2.getFullYear() + '-';
                        M1 = (date1.getMonth() + 1 < 10 ? '0' + (date1.getMonth() + 1) : date1.getMonth() + 1) + '-'
                        M2 = (date2.getMonth() + 1 < 10 ? '0' + (date2.getMonth() + 1) : date2.getMonth() + 1) + '-'
                        D1 = date1.getDate() + ' '
                        D2 = date2.getDate() + ' '
                        h1 = date1.getHours() + ':'
                        h2 = date2.getHours() + ':'
                        m1 = date1.getMinutes() + ':'
                        m2 = date2.getMinutes() + ':'
                        s1 = (date1.getSeconds() < 10 ? '0' + date1.getSeconds() : date1.getSeconds())
                        s2 = (date2.getSeconds() < 10 ? '0' + date2.getSeconds() : date2.getSeconds())
                        res.data.data[i].created_at = Y1 + M1 + D1 + h1 + m1 + s1
                        res.data.data[i].updated_at = Y2 + M2 + D2 + h2 + m2 + s2
                        this.shopLst.push(res.data.data[i])
                    }
                }
            },
            updateUser(v){
                if(window.sessionStorage){
                    sessionStorage.id = v._id
                    this.$router.push({path:'/admin/updateuser'})
                }
            }
        },
        created() {
            this.post_user()
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
    .titleBox {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #39f;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        box-sizing: border-box;
    }
    .title{
        background: #39f;
        height: 32px;
        width: 100px;
        line-height: 32px;
        text-align: center;
        align-self: flex-end;
        
    }
    .lstNav {
        background: #f5f7f9;
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .lstNav i,
    .lst i {
        text-align: center;
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 14.2%;
        align-self: center;
        justify-content: center;
        word-wrap: break-word;
    }
    .lst {
        min-height: 55px;
        line-height: 55px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #f9f9f9;
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
        width: 15%!important;
    }
    .go {
        width: 10%!important;
    }
</style>


