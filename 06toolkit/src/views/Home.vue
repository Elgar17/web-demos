<template>
  <div class="home">
    <el-row>
      <el-col
        class="mian-content"
        :span="20"
        :offset="2"
        :xs="{ span: 24, offset: 0 }"
      >
        <!-- buttom -->
        <div class="btn-box">
          <el-button @click="tranQaz" class="font" type="primary">ҚАЗ ⚡ قازاق</el-button>
          <el-button @click="tranLat" type="primary">ҚАЗ ⚡ LAT</el-button>
        </div>
        <!-- main -->
        <el-row class="area-content">
          <el-col class="area1" :span="12" :xs="{ span: 24 }">
            <li
              @click="clear"
              v-show="inputVlue.length"
              class="el-icon-circle-close"
            ></li>
            <textarea
              placeholder="请输入西里尔文"
              autofocus
              v-model="inputVlue"
              name="translate"
              id=""
              cols="40"
              rows="14"
              contenteditable="true"
            >
            </textarea>
            <div class="footNav">
              {{ inputVlue.length }}/5000
              <li class="el-icon-edit"></li>
            </div>
          </el-col>

          <el-col class="area2" :span="12" :xs="{ span: 24 }">
            <textarea
              readonly
              v-model="output"
              placeholder="翻译"
              :class="['output', isRight ? 'align-right' : '']"
              cols="30"
              rows="14"
            >
            </textarea>
            <div class="footNav footNav2">
              <i @click="copy" class="el-icon-document-copy"> 复制</i>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import {wordTran,syTranQaz} from '@/util/util.js';
export default {
  name: "Home",
  components: {},
  data() {
    return {
      inputVlue: "",
      output: "",
      isRight: false,
    };
  },
  methods: {
    tranQaz() {
      this.output = wordTran(this.inputVlue);
      this.isRight = true;
    },
    tranLat() {
      this.output = syTranQaz(this.inputVlue, 1);
      this.isRight = false;
    },
    copy() {
      if (this.output.trim() != "") {
        this.copyToClipboard(this.output);
        this.$message({
          message: "复制成功",
          type: "success",
          center: true,
        });
      } else {
        this.$message({
          message: "没有内容哦！",
          type: "info",
          center: true,
        });
      }
    },
    clear() {
      this.inputVlue = "";
    },
    copyToClipboard: function (s) {
      if (window.clipboardData) {
        window.clipboardData.setData("text", s);
      } else {
        (function (s) {
          document.oncopy = function (e) {
            e.clipboardData.setData("text", s);
            e.preventDefault();
            document.oncopy = null;
          };
        })(s);
        document.execCommand("Copy");
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../assets/font/font.css";
.home {
  color: #1f2f3d;

  padding: 0 5px;
  .btn-box {
    text-align: left;
    padding: 10px 0;
  }
  .area-content {
    min-height: 200px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .area1 {
      position: relative;
      textarea {
        &:focus {
          border: 1px solid #0094ff;
        }
      }
    }
    // .area2 {
    // }
    .footNav {
      height: 40px;
      background-color: #fff;
      line-height: 40px;
      text-align: right;
      padding-right: 20px;
    }
  }
}
textarea {
  width: 100%;
  vertical-align: middle;
  resize: none;
  outline: none;
  word-wrap: break-word;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 18px;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #dbdfe6;
  font-family: qaz;
}
.el-icon-document-copy:hover {
  cursor: pointer;
}

.el-icon-circle-close {
  position: absolute;
  right: 7px;
  font-size: 16px;
  top: 15px;
  color: #0094ff;
  font-weight: bold;
}
.el-icon-circle-close:hover {
  cursor: pointer;
}
.align-right {
  text-align: right;
}
.font{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
