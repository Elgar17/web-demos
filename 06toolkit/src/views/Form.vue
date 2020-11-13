<template>
  <div class="form-box">

    <el-row class="area-content">
      <el-col
        class="area1"
        :span="16"
        :offset="4"
        :xs="{ span: 24, offset: 0 }"
      >
        <el-table :data="tableData"  border stripe style="width: 100%">
          <el-table-column prop="index" label="序号"> </el-table-column>
          <el-table-column prop="xi" label="西里尔文"> </el-table-column>
          <el-table-column prop="ar" label="阿拉伯文"> </el-table-column>
          <el-table-column prop="la" label="拉丁文"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      tableData: [
        {
          index: 1,
          xi: "А а",
          ar: "ا",
          la: "A a",
        },
        {
          index: 2,
          xi: "Ә ә",
          ar: "ءا",
          la: "Á á",
        },
        {
          index: 3,
          xi: "Б б",
          ar: "ب",
          la: "B b",
        },
        {
          index: 4,
          xi: "В в",
          ar: "ۆ",
          la: "V v",
        },
        {
          index: 5,
          xi: "Г г",
          ar: "گ",
          la: "G g",
        },
        {
          index: 6,
          xi: "Ғ ғ",
          ar: "ع",
          la: "Ǵ ǵ",
        },
        {
          index: 7,
          xi: "Д д",
          ar: "د",
          la: "D d",
        },
        {
          index: 8,
          xi: "Е е",
          ar: "ە",
          la: "E e",
        },
        {
          index: 9,
          xi: "Ж ж",
          ar: "ج",
          la: "J j",
        },
        {
          index: 10,
          xi: "З з",
          ar: "ز",
          la: "Z z",
        },
        {
          index: 11,
          xi: "И и",
          ar: "ي",
          la: "I i",
        },
        {
          index: 12,
          xi: "Й й",
          ar: "ي",
          la: "I i",
        },
        {
          index: 13,
          xi: "К к",
          ar: "ك",
          la: "K k",
        },
        {
          index: 14,
          xi: "Қ қ",
          ar: "ق",
          la: "Q q",
        },
        {
          index: 15,
          xi: "Л л",
          ar: "ل",
          la: "L l",
        },
        {
          index: 16,
          xi: "М м",
          ar: "م",
          la: "M m",
        },
        {
          index: 17,
          xi: "Н н",
          ar: "ن",
          la: "N n",
        },
        {
          index: 18,
          xi: "Ң ң",
          ar: "ڭ",
          la: "Ń ń",
        },
        {
          index: 19,
          xi: "О о",
          ar: "و",
          la: "O o",
        },
        {
          index: 20,
          xi: "Ө ө",
          ar: "ءو",
          la: "Ó ó",
        },
        {
          index: 21,
          xi: "П п",
          ar: "پ",
          la: "P p",
        },
        {
          index: 22,
          xi: "Р р",
          ar: "ر",
          la: "R r",
        },
        {
          index: 23,
          xi: "С с",
          ar: "س",
          la: "S s",
        },
        {
          index: 24,
          xi: "Т т",
          ar: "ت",
          la: "T t",
        },
        {
          index: 25,
          xi: "У у",
          ar: "ۋ",
          la: "Ý ý",
        },
        {
          index: 26,
          xi: "Ұ ұ",
          ar: "ۇ",
          la: "U u",
        },
        {
          index: 27,
          xi: "Ү ү",
          ar: "ءۇ",
          la: "Ú ú",
        },
        {
          index: 28,
          xi: "Ф ф",
          ar: "ف",
          la: "F f",
        },
        {
          index: 29,
          xi: "Х х",
          ar: "ح",
          la: "H h",
        },
        {
          index: 30,
          xi: "Һ һ",
          ar: "ھ",
          la: "H h",
        },
        {
          index: 31,
          xi: "Ц ц",
          ar: "چ",
          la: "Ch ch",
        },
        {
          index: 32,
          xi: "Ш ш",
          ar: "ش",
          la: "Sh sh",
        },
        {
          index: 33,
          xi: "Щ щ",
          ar: "شش",
          la: "shsh",
        },
        {
          index: 34,
          xi: "Ъ ъ",
          ar: "",
          la: "",
        },
        {
          index: 35,
          xi: "Ы ы",
          ar: "ى",
          la: "Y y",
        },
        {
          index: 36,
          xi: "І і",
          ar: "ءى",
          la: "I ı",
        },
        {
          index: 37,
          xi: "ь",
          ar: "",
          la: "",
        },
        {
          index: 38,
          xi: "Э э",
          ar: "يە",
          la: "ie",
        },{
          index: 39,
          xi: "Ю ю",
          ar: "يۋ",
          la: "iý",
        },{
          index: 40,
          xi: "Я я",
          ar: "يا",
          la: "ia",
        },{
          index: 41,
          xi: "Ё ё",
          ar: "يو",
          la: "io",
        },
        {
          index: 42,
          xi: "Ч ч",
          ar: "تس",
          la: "ts",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.form-box {
  padding-top: 10px;
}
</style>