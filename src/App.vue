<template>
  <div id="app">
    <leftBar></leftBar>
    <topBar></topBar>
    <bottomBar></bottomBar>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import leftBar from './components/layout/leftNavBar.vue';
import topBar from './components/layout/topNavBar.vue';
import bottomBar from './components/layout/bottomNavBar.vue'
export default {
  name: "app",
  components: {
    leftBar,
    topBar,
    bottomBar
  }
};
</script>

<style>
@import "./assets/styles/base.css";
</style>
