<template>
  <article class="article">
    <h1>Button 按钮</h1>

    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-button>默认按钮</s-button>
        <s-button type="primary">主要按钮</s-button>
        <s-button type="text">文字按钮</s-button>
        <s-button :plain="true">镂空按钮</s-button>
      </div>
      <div class="example-code" v-hljs>
        <pre><code>
    &lt;s-button&gt;默认按钮&lt;/s-button&gt;
    &lt;s-button type="primary"&gt;主要按钮&lt;/s-button&gt;
    &lt;s-button type="text"&gt;文字按钮&lt;/s-button&gt;
        </code></pre>
      </div>
    </div>

    <h3>禁用状态</h3>
    <div class="example">
      <div class="example-demo">
        <s-button :plain="true" :disabled="true">镂空按钮</s-button>
        <s-button type="primary" :disabled="true">主要按钮</s-button>
        <s-button type="text" :disabled="true">文字按钮</s-button>
      </div>
      <div class="example-code" v-hljs>
        <pre><code>
    &lt;s-button :plain="true" :disabled="true"&gt;镂空按钮&lt;/s-button&gt;
    &lt;s-button type="primary" :disabled="true"&gt;主要按钮&lt;/s-button&gt;
    &lt;s-button type="text" :disabled="true"&gt;文字按钮&lt;/s-button&gt;
        </code></pre>
      </div>
    </div>

    <h3>有颜色倾向</h3>
    <div class="example">
      <div class="example-demo">
        <div class="block">
          <div class="label">默认显示颜色</div>
          <s-button type="success">成功按钮</s-button>
          <s-button type="warning">警告按钮</s-button>
          <s-button type="danger">危险按钮</s-button>
          <s-button type="info">信息按钮</s-button>
        </div>
        <div class="block">
          <div class="label">hover 显示颜色</div>
          <s-button :plain="true" type="success">成功按钮</s-button>
          <s-button :plain="true" type="warning">警告按钮</s-button>
          <s-button :plain="true" type="danger">危险按钮</s-button>
          <s-button :plain="true" type="info">信息按钮</s-button>
        </div>
      </div>
      <div class="example-code" v-hljs>
        <pre><code>
    &lt;div class="block"&gt;
      &lt;div class="label"&gt;默认显示颜色&lt;/div&gt;
      &lt;s-button type="success"&gt;成功按钮&lt;/s-button&gt;
      &lt;s-button type="warning"&gt;警告按钮&lt;/s-button&gt;
      &lt;s-button type="danger"&gt;危险按钮&lt;/s-button&gt;
      &lt;s-button type="info"&gt;信息按钮&lt;/s-button&gt;
    &lt;/div&gt;
    &lt;div class="block"&gt;
      &lt;div class="label"&gt;hover 显示颜色&lt;/div&gt;
      &lt;s-button :plain="true" type="success"&gt;成功按钮&lt;/s-button&gt;
      &lt;s-button :plain="true" type="warning"&gt;警告按钮&lt;/s-button&gt;
      &lt;s-button :plain="true" type="danger"&gt;危险按钮&lt;/s-button&gt;
      &lt;s-button :plain="true" type="info"&gt;信息按钮&lt;/s-button&gt;
    &lt;/div>
        </code></pre>
      </div>
    </div>

    h3

  </article>
</template>
<script>
  export default {
  }
</script>
<style lang="scss">
  .block {
    display: block;
    border-bottom: 1px solid #eee;
    padding: 24px 0;
    .label {
      float: left;
      width: 200px;
      line-height: 34px;
    }
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
</style>
