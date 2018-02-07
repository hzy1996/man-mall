<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
window.sessionStorage.n = 0
window.localStorage.arr = '[{}]'
// console.log(window.localStorage.arr)
// console.log(JSON.parse(window.localStorage.arr))
export default {
  name: 'app'
}
</script>

<style>

</style>
