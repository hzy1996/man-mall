<template>
    <div class="inputbox">
        <div class="in">
            <i>用户名：</i>
            <input type="text" class="myinput" v-model="user.name">
        </div>
        <div class="in">
            <i>手机：</i>
            <input type="text" class="myinput" v-model="user.mobile">
        </div>
        <div class="in">
            <i>密码：</i>
            <input type="password" class="myinput" v-model="user.password">
        </div>
        <div class="btmBox">
            <button class="btm" @click="updateUser">提交</button>
        </div>
    </div>
</template>
<script>
import md5 from 'js-md5'
export default {
    data(){
        return{
            user:{
                name:'',
                mobile:'',
                password:''
            }
        }
    },
    methods:{
        async updateUser(){
            let id = sessionStorage.id
            let password = md5(this.user.password)
            let res = await this.$ajax.post('http://localhost:4000/user/update',{
                id:id,
                name:this.user.name,
                mobile:this.user.mobile,
                password:password
            })
            console.log(res)
        },
        async post_user(){
            let res = await this.$ajax.post('http://localhost:4000/user/read')
            for(let i=0;i<res.data.data.length;i++){
                if(res.data.data[i]._id == sessionStorage.id){
                    this.user = res.data.data[i]
                    console.log(this.user)
                }
            }
        }
    },
    created(){
        this.post_user()
    }
}
</script>
<style scoped>
    
</style>
