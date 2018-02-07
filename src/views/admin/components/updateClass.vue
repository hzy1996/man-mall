<template>
    <div class="inputbox">
        <div class="in">
            <i>分类名</i>
            <input type="text" class="myinput" v-model="category.name">
        </div>
        <div class="in">
            <i>图片地址</i>
            <input type="text" class="myinput" v-model="category.img_url">
        </div>
        <div class="btmBox">
            <button class="btm" @click="$router.history.go(-1)">返回</button>
            <button class="btm" @click="updateCategory">提交</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            category:[]
        }
    },
    methods:{
        async get_category(){
            console.log(sessionStorage.id)
            let res = await this.$ajax.get('http://localhost:4000/category/public/read')
            for(let i=0;i<res.data.data.length;i++){
                if(res.data.data[i]._id==sessionStorage.id){
                    this.category = res.data.data[i]
                    console.log(this.category)
                }
            }
        },
        async updateCategory(){
            let res = await this.$ajax.post('http://localhost:4000/category/update',{
                ...this.category,
                id:sessionStorage.id
            })
        }
    },
    created(){
        this.get_category()
    }
}
</script>


