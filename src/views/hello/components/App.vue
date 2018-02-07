<template>
  <div>
    <div v-focus="'app'" v-color.red.a1.bg=".5">
      hello app
    </div>
    <my-header />
    <router-view/>
  </div>
</template>
<script>
export default {
  components:{
    'Index':() => import('./Index')
  },
  mounted(){
    console.log(this.$ajax);
  }
}
</script>
