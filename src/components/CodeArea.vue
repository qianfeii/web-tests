<template>
  <div>
    <pre>
      <code v-for="(lan,index) in lang.split(',')" :key="index+lan" v-html="getCode(lan,index)" :class="'language-'+langs[lan]">
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
      required: true
    },
    content: {
      type: String,
      required: true
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
      let _c = 'code' + this.content.split(',')[index]
      let code = Codes[_c]
      return Prism.highlight(code, Prism.languages[Langs[lang]])
    }
  }
}
</script>
