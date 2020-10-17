<template>
  <div class="main_todo">
    <input
      autofocus
      type="text"
      @keyup.enter="addTodo"
      v-model="message"
      name
      id
      placeholder="创建代办事项"
    />
    <button class="button" @click="addTodo">创建</button>
    <Todoitem v-for="(item,index) in filterdata" :key="index" :todo="item" @del="handleDelete"></Todoitem>
    <TodoInfo :total="total" @toggleState="handletogglestate" @clear="clear" />
  </div>
</template>

<script>
import Todoitem from "./coms/TodoItem.vue";
import TodoInfo from "./coms/TodoInfo.vue";

var id = 0;
export default {
  name: "MainTodo",
  watch: {
    todoData: {
      deep: true,
      handler() {
        this.total = this.todoData.filter(
          item => item.compelted === false
        ).length;
      }
    }
  },
  components: {
    Todoitem,
    TodoInfo
  },
  data() {
    return {
      todoData: [],
      message: "",
      total: 0,
      filter: "all"
    };
  },
  methods: {
    // 添加todo 
    addTodo() {
      if (this.message === "") return;
      this.todoData.unshift({
        id: id++,
        content: this.message,
        compelted: false
      });
      this.message = "";
    },
    handleDelete(id) {
      this.todoData.splice(
        this.todoData.findIndex(item => item.id === id),
        1
      );
    },
    handletogglestate(state) {
      this.filter = state;
    },
    clear() {
      this.todoData = [];
    }
  },
  computed: {
    filterdata() {
      switch (this.filter) {
        case "all":
          return this.todoData;
          break;
        case "active":
          return this.todoData.filter(item => item.compelted == false);
          break;
        case "completed":
          return this.todoData.filter(item => item.compelted == true);
          break;
      }
    }
  }
};
</script>

<style  scoped>
.main_todo {
  width: 600px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 0 5px #666;
  border-radius: 10px;
}
.main_todo input {
  width: 82%;
  font-size: 24px;
  padding: 16px 16px 16px 36px;
  box-sizing: border-box;
  font-weight: inherit;
  font-family: inherit;
  color: inherit;
  border: none;
  outline: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.main_todo .button {
  -webkit-border-radius: 6;
  -moz-border-radius: 6;
  border-radius: 6px;
  text-shadow: 0px -1px 0px #f9a1d2;
  -webkit-box-shadow: 0px 1px 0px 0px #f0f7fa;
  -moz-box-shadow: 0px 1px 0px 0px #f0f7fa;
  box-shadow: 0px 1px 0px 0px #f0f7fa;
  font-family: Arial;
  color: #ffffff;
  font-size: 16px;
  background: #f25da3;
  padding: 8px 30px 8px 30px;
  border: solid #ef2096 1px;
  text-decoration: none;
  font-weight: bold;
}

.main_todo .button:hover {
  color: #ffffff;
  background: #ef2096;
  text-decoration: none;
}
</style>