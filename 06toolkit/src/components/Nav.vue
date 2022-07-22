<template>
  <div id="navbar">
    <el-row>
      <el-col
        class="head-con"
        :span="20"
        :offset="2"
        :xs="{ span: 24, offset: 0 }"
      >
        <h1>文字转换工具</h1>
        <div class="head-content">
          <router-link to="/">转换</router-link>
          <router-link to="/form">字母表</router-link>
          <router-link to="/about">关于</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#navbar{
    overflow: hidden;
}
h1 {
  display: block;
  float: left;
  margin: 0;
  font-size: 1.5em;
  line-height: 50px;
  padding-left: 5px;
}
.head-con {
  z-index: 10;
  position: fixed;
  background-color: #fff;
  border-bottom: 1px solid #dbdfe6;
  a {
    display: block;
    float: left;
    text-decoration: none;
    padding: 0 5px;
    color: #80c5fd;
  }
  a:hover{
      color: #1989fa;
  }
}
.head-content {
  float: right;
  background-color: #fff;
  height: 50px;
  line-height: 50px;
}

.router-link-exact-active {
  border-bottom: 2px solid #4094ff;
  color: #4094ff !important;
}
</style>