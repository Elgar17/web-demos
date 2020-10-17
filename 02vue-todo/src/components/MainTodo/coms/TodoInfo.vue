<template>
  <div class="info">
    <span>还有{{total}}个待办事项! 加油💪</span>
    <div class="button">
      <a
        :class="[state == item? 'actived' : '']"
        v-for="(item,index) in states"
        :key="index"
        @click="toggleState(item)"
      >{{item | toCH}}</a>
    </div>
    <button @click="clear()" class="clear">清除</button>
  </div>
</template>

<script>
export default {
  name: "TodoInfo",
  props: {
    total: Number
  },
  data() {
    return {
      states: ["all", "active", "completed"],
      state: "all"
    };
  },
  methods: {
    toggleState(state) {
      this.state = state;
      this.$emit("toggleState", state);
    },
    clear() {
      this.$emit("clear");
    }
  },
  filters: {
    toCH: function(val) {
      switch (val) {
        case "all":
          return val = "全部";
          break;
        case "active":
          return val = "剩余待办";
          break;
        case "completed":
          return val = "已完成";
          break;
      }
    }
  }
};
</script>

<style scoped >
.info {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  padding: 10px 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #ef2096;
}
.info .button {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
.info .button a {
  padding: 2px 5px;
  border: 1px solid #ef2096;
  border-radius: 5px;
  cursor: pointer;
}
.actived {
  background-color: #ef2096;
  color: #fff;
}
.info button {
  background-color: #ef2096;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 10px;
}
</style>