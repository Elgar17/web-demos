<template>
  <div id="app">
    <!-- <h1>TodoLidt</h1> -->
    <MainHeader></MainHeader>
    <MainTodo />

    <div>
      <footer>Disign by ELGAR</footer>
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainTodo from "./components/MainTodo/MainTodo.vue";

import "./styles/style.css";

export default {
  name: "app",
  components: {
    MainHeader,
    MainTodo
  }
};
</script>

<style  scoped >
footer {
  width: 150px;
  margin: 10px auto;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 3px;
  text-shadow: 0 0 0 5px;
  background-color: rgb(255, 81, 156, .8);;
}
</style>