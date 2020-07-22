<template>
  <div id="app">
    <Nav/>
    <transition 
      enter-active-class="animate__animated animate__fadeIn animate__faster" 
      leave-active-class="animate__animated animate__fadeOut animate__faster" 
      mode="out-in" 
    >
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
export default {
  components:{
    Nav
  }
}
</script>
<style>
  /* @import url('./assets/css/reset.css'); */
</style>
