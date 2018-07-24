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
      <div class="outer">
        <div class="wrapper-change">content</div>
      </div>
    </section>
    <section class="sect-body two">
      <h2>条纹背景</h2>
      <p>使用 linear-gradient 属性实现</p>
      <div class="stripe one"></div>
      <p>尝试修改 linear-gradient 属性，当linear-gradient属性</p>
      <div class="stripe two"></div>
      <p>因为条纹是由 background-image 属性生成的，因此当然也可以使用 background-size 属性来改变它的大小</p>
      <div class="stripe three"></div>
      <p>如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小，则该色标的位置值会被设置为它前面所有色标位置值的最大值。</p>
      <div class="stripe four"></div>
      <p>垂直条纹</p>
      <div class="stripe five"></div>
      <p>斜条纹</p>
      <div class="stripe six"></div>
    </section>
    <section class="sect-body three">
      <h2>平行四边形和梯形</h2>
      <h3>2 个dom</h3>
      <div class="mgl10 content">
        <span>content</span>
      </div>
      <h3>1 个dom</h3>
      <div class="mgl10 content-change"></div>
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
  .wrapper-change,
  .outer {
    margin: 10px 10px;
  }
  h2 {
    color: red;
  }
  h2,
  h3,
  p {
    padding: 10px 0;
  }
  p {
    padding-left: 20px;
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
.two {
  .stripe {
    width: 400px;
    height: 200px;
    margin: 0 10px;
  }
  .one {
    background: linear-gradient(rgb(255, 187, 51), rgb(85, 136, 187));
  }
  .two {
    background: linear-gradient(rgb(255, 187, 51) 50%, rgb(85, 136, 187) 50%);
  }
  .three {
    background: linear-gradient(rgb(255, 187, 51) 50%, rgb(85, 136, 187) 50%);
    background-size: 100% 40px;
  }
  .four {
    background: linear-gradient(rgb(255, 187, 51) 33.3%, rgb(85, 136, 187) 0, rgb(85, 136, 187) 66.6%, rgb(170, 255, 0) 66.6%);
  }
  .five {
    background: linear-gradient(to right, rgb(255, 187, 51) 60%, rgb(85, 136, 187) 0);
  }
  .six {
    background: linear-gradient(60deg, rgb(255, 187, 51), rgb(255, 187, 51) 25%, rgb(85, 136, 187) 0, rgb(85, 136, 187) 50%, rgb(255, 187, 51) 0, rgb(255, 187, 51) 75%, rgb(85, 136, 187) 0, rgb(85, 136, 187) 100%);
    background-size: 18px 31px;
    background: repeating-linear-gradient(60deg, rgb(255, 187, 51), rgb(255, 187, 51) 15px, rgb(85, 136, 187) 0, rgb(85, 136, 187) 30px);
  }
}
.three {
  .mgl10 {
    margin-left: 30px;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 80px;
    background: rgb(85, 136, 187);
    color: #fff;
    font-size: 26px;
    transform: skewX(-30deg);
    span {
      transform: skewX(30deg);
    }
  }
  .content-change {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 60px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    &::after {
      content: 'content';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: skewX(-30deg);
      background: rgb(85, 136, 187);
      z-index: inherit;
    }
  }
}
</style>
