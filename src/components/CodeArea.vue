<template>
  <div>
    <pre>
      <code v-for="(lan,index) in lang" :key="index+lan" v-html="formatCode(lan,index)" :class="'language-'+langs[lan]">
      </code>
    </pre>
  </div>
</template>
<script>
const Prism = window.Prism
const Codes = require('./code.json').mdncode
const Langs = ['markup', 'js', 'css']
export default {
  name: 'codearea',
  data() {
    return {
      langs: Langs
    }
  },
  props: {
    lang: {
      type: String,
      required: true,
      validator: val => {
        return val.split(',')
      }
    },
    content: {
      type: String,
      required: true,
      validator: val => {
        return val.split(',')
      }
    }
  },
  created() {},
  mounted() {
    console.log('1')
    this.$nextTick(() => {
      Prism.highlightAll(false)
    })
  },
  methods: {
    getLang() {},
    getCode(lang, index) {
      console.log(this.lang + '--' + this.content, '--', typeof this.lang)
      console.log(lang, '---', index)
      let _c = 'code' + this.content[index]
      let code = Codes[_c]
      console.log(_c, '- -', code)
      return Prism.highlight(code, Prism.languages[lang])
    }
  }
}
</script>
