<template>
  <div id="app">
    <el-container>
      <el-header height="80px" style="background:rgba(153, 50, 204,.6)">
        <h2>web实践
        </h2>
        <small>
          welcome to this web test,i am aubrey
        </small>
        <div class="icon-area">
          <svg class="icon icon-self" aria-hidden="80px">
            <use xlink:href="#icon-github"></use>
          </svg>
          <svg class="icon icon-self special" aria-hidden="true">
            <use xlink:href="#icon-twitter"></use>
          </svg>
          <svg class="icon icon-self" aria-hidden="true">
            <use xlink:href="#icon-Facebook"></use>
          </svg>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <section class="tree">
            <el-tree :data="treeData" @node-click="handleNodeClick"></el-tree>
          </section>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      treeData: this.$router.options.routes
    }
  },
  created() {
    console.log('rooter - - - ', this.$router.options.routes)
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
      this.$router.push({ path: data.path })
    }
  }
}
</script>

<style lang="postcss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background: rgba(153, 50, 204, 0.5);
  border-bottom: 1px solid #e1e1e1;
}
.el-aside {
  position: absolute;
  top: 80px;
  bottom: 0px;
}
.el-main {
  background: #fff;
  position: absolute;
  top: 80px;
  bottom: 0px;
  left: 200px;
  right: 0px;
}
.el-tree,
.el-tree :hover,
.el-tree *,
.el-tree *:hover {
  box-shadow: inset -1px 0 #e1e1e1;
}
h2 {
  margin: 10px 0 0 0;
  font-size: 26px;
}
small {
  display: block;
  margin: 0 auto;
}
.icon-area {
  margin: 0 100px 0 0;
  float: right;
  .icon-self {
    font-size: 20px;
    margin: 0 3px;
  }
  .special {
    margin-bottom: -1.5px;
    font-size: 24px;
  }
}
.tree {
  height: 100%;
  background: rgba(212, 212, 212, 0.5);
  box-shadow: inset -1px 0 #e1e1e1;
}
</style>
