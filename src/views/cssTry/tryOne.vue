<template>
  <div class="comp-body">
    <section class="sect-body one">
      <h2>边框内圆角</h2>
      <p>目标：只有内侧有圆角，而边框或者描边的四个角还是保持直角的形状，</p>
      <h3>2个dom实现</h3>
      <div class="wrapper">
        <div class="content">content</div>
      </div>
      <h3>1个dom实现</h3>
      <div class="wrapper-change">content</div>
    </section>
    <section>
      <h2>条纹背景</h2>
    </section>
  </div>
</template>
<style lang="postcss" scoped>
.comp-body {
  text-align: left;
}
.sect-body {
  h2,
  h3,
  p,
  .wrapper,
  .wrapper-change {
    margin: 10px 10px;
  }
}
.one {
  .wrapper {
    width: 200px;
    height: 80px;
    padding: 10px;
    background: rgb(255, 187, 51);
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background: rgb(85, 136, 187);
      color: #fff;
      font-size: 14px;
      border-radius: 20px;
    }
  }
  .wrapper-change {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 80px;
    margin: 10px;
    background: rgb(85, 136, 187);
    color: #fff;
    font-size: 14px;
    border-radius: 20px;
    box-shadow: 0 0 0 10px rgb(255, 187, 51);
    outline: 10px solid rgb(255, 187, 51);
  }
}
</style>
