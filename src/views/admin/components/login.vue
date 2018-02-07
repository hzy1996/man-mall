<template>
    <div class="loginBox">
        <div class="login">
            <div class="from">
                <mu-auto-complete hintText="请输入帐号" label="帐号" name="user_name" v-model="user_name" />
                <mu-text-field type="password" hintText="请输入密码" label="密码" name="user_pw" v-model="user_pw" />
                <mu-raised-button label="管理员登录" class="demo-raised-button btn2" backgroundColor="#53cbfd" color="#f8f8f8" labelClass="fonsize:18px" @click="login" />
            </div>
        </div>
    </div>
</template>
<script>
    import md5 from 'js-md5'
    export default {
        data() {
            return {
                user_name: '',
                user_pw: ''
            }
        },
        methods: {
            async login() {
                let userpw = md5(this.user_pw)
                let res = await this.$ajax.post('http://localhost:4000/auth/login', {
                    username: this.user_name,
                    password: userpw
                })
                sessionStorage.token =res.data.data.token
                console.log(res.data.data.token)
                this.$router.push({path: "/admin"})
            }
        }
    }
</script>
<style scoped>
    .loginBox {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(left, #b9d6f3, #5f80a0);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .login {
        width: 800px;
        height: 500px;
        background: #f9f9f9;
        box-shadow: 0 1px 2px #ccc;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .from {
        width: 400px;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .mu-raised-button {
        width: 256px;
        margin-top: 20px;
    }
    .goRegister {
        width: 256px;
        text-align: right;
        margin-top: 10px;
        cursor: pointer;
    }
    .mu-text-field .focus-state {
        color: #53cbfd!important;
    }
</style>

