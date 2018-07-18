<template>
  <div class="hello">
    <span>模板内集成模拟api 已配跨域</span>
    <span>json文件api模拟：api/status:</span>
    <div ref="renderStatus"></div>
    <span>mockjs生成api模拟（随机）：api/mock:</span>
    <a @click="refreshMock" class="refresh">刷新</a>
    <div ref="renderMock"></div>
  </div>
</template>

<script>
import renderjson from '../utils/renderjson'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'showJson',
  data() {
    return {
      msg: 'Welcome to this vue template'
    }
  },
  computed: {
    ...mapState({
      statusJson: state => state.statusJson,
      mockJson: state => state.mockJson
    })
  },
  mounted() {
    let self = this
    const status = self.$refs.renderStatus
    const mock = self.$refs.renderMock
    self.getStatus().then(() => {
      const statusR = renderjson(self.statusJson)
      status.appendChild(statusR)
    })
    self.getMock().then(() => {
      const mockR = renderjson(self.mockJson)
      mock.appendChild(mockR)
    })
  },
  methods: {
    ...mapActions(['getStatus', 'getMock']),
    refreshMock() {
      let self = this
      let parent = self.$refs.renderMock
      let dom = document.getElementsByTagName('pre')
      console.log(parent, dom)
      parent.removeChild(dom[1])
      self.getMock().then(() => {
        const mockR = renderjson(self.mockJson)
        parent.appendChild(mockR)
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.hello {
  width: 90%;
  position: absolute;
  top: 80px;
  bottom: 0;
  margin-left: 5%;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.refresh {
  cursor: pointer;
}
</style>
