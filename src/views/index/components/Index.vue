<template>
  <div class="all">
    <my-header />
    <carousel/>
    <IndexContent/>
    <my-footer />
    <mu-back-top :height="100" :bottom="100" :right="50" :duration="1000">
      <mu-raised-button label="返回顶部" class="demo-raised-button" primary/>
    </mu-back-top>
  </div>
</template>
<script>
  import IndexContent from './content.vue'
  import carousel from './carousel.vue'
  export default {
    components: {
      IndexContent,
      carousel
    }
  }
</script>
<style scoped>
  .all {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main {
    flex: 1;
    width: 100%;
  }
</style>
