<template>
  <div class="about">
    <el-row class="block">
      <el-col
        class="area1"
        :span="16"
        :offset="4"
        :xs="{ span: 24, offset: 0 }"
      >
        <h3>使用说明：</h3>
        <div>
          <P
            >这是一款哈萨克文字转换工具，目前支持转换以下文字：</P
          >
          <P>1、✅ 西里尔文 🔃 旧体文 </P>
          <P>2、✅ 西里尔文 🔃 拉丁文 </P>
          <!-- <P>3、❌ 旧体文 🔃 西里尔文 </P>
          <P>4、❌ 旧体文 🔃 拉丁文 </P>
          <P>5、❌ 拉丁文 🔃 西里尔文 </P>
          <P>6、❌ 拉丁文 🔃 旧体 </P> -->
          <div>其他功能正在完善中，以后会加入更多工具，进行期待  <li class="el-icon-present">!!</div>
          <!-- <P>如果你有好的建议</P> -->
        </div>
        <h3>更新日志：</h3>
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2020/11/11" placement="top">
              <el-card>
                <p>添加字母表 2020/11/11</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/11/01" placement="top">
              <el-card>
                <div>上线!!! 2020/11/01</div>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
        <h3>建议：</h3>
        <p>如果你有好的建议联系：elgara@163.com</p>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.block {
  text-align: left;
  padding: 0 5px;
  h3 {
    color: #1f2f3d;
  }
  p {
    margin: 0;

    color: #5e6d82;
  }
}
</style>
