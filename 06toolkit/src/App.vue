<template>
  <div id="app">
    <Nav />
    <Spase/>
    <router-view />
    <div class="footer">design by Elǵar <li class="el-icon-present"></li></div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Spase from "@/components/Spase.vue";


export default {
  name: "App",
  components: {
    Nav,
    Spase
  },
};
</script>

<style lang="less">
@import "./assets/font/font.css";
body{
  margin: 0;
}
#app {
  font-family: qaz,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4094ff;
}

.footer{
  padding: 10px 0;
  color:  #ccc;
}

</style>
