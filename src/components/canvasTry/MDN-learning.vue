<template>
  <div ref="codeChoose">
    <section class="wrapper base">
      <h2>基本用法
      </h2>
      <el-row class="show-area">
        <el-col :span="12">
          <div>
            <pre class="code-area">
              <code v-html="code1" class="language-markup">
              </code>
              <code v-html="code2" class="language-css">
              </code>
            </pre>
          </div>
        </el-col>
        <el-col :span="12">
          <span class="right-arrow">&rarr;</span>
          <canvas id="first">
            it will show when this does not support canvas
          </canvas>
        </el-col>
      </el-row>
      <article class="ps-area">
        <h3>注意事项</h3>
        <ol class="ps-content">
          <li>
            canvas下的文字为
            <strong>替换内容</strong>。在浏览器不支持canvas的情况下则显示替换内容
          </li>
          <li>
            &lt;/canvas&gt;标签不可省
          </li>
          <li>
            canvas不定义宽高则默认宽度为300px 和 高度为150px
          </li>
        </ol>
      </article>
    </section>
  </div>
</template>
<script>
const Prism = window.Prism
const Codes = require('./code.json').mdncode
export default {
  name: 'basecanvas',
  data() {
    return {}
  },
  computed: {
    code1() {
      return Prism.highlight(Codes.code1, Prism.languages.markup)
    },
    code2() {
      return Prism.highlight(Codes.code2, Prism.languages.css)
    }
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll(false)
    })
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  margin: 10px 0;
  text-align: left;
  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .code-background {
    background: #282c34;
  }
}
.base {
  canvas {
    display: inline-block;
    margin-left: 50px;
    border: 1px solid black;
  }
}
.show-area {
  display: flex;
  align-items: center;
  .code-area {
    .code-title {
      float: left;
      font-style: italic;
    }
  }
  .right-arrow {
    display: inline-block;
    font-size: 40px;
    margin: auto 20px;
    position: relative;
    bottom: 60px;
  }
}
.ps-area {
  margin: 10px 0 0 0;
  .ps-content {
    margin: 10px 0 0 15px;
  }
}
</style>
