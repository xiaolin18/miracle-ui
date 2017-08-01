<template>
  <article class="article">
    <h1>Breadcrumb 面包屑</h1>
    <h3>基础用法</h3>
    <div class="example">
      <div class="example-demo">
        <s-breadcrumb separator="/">
          <s-breadcrumb-item :to="{ path: '/' }">首页</s-breadcrumb-item>
          <s-breadcrumb-item :to="{ path: '/'}">组件</s-breadcrumb-item>
          <s-breadcrumb-item :to="{ path: '/breadcrumb'}">面包屑</s-breadcrumb-item>
        </s-breadcrumb>
      </div>
      <div class="example-code" v-hljs>
        <pre><code>
    &lt;s-breadcrumb separator="/"&gt;
      &lt;s-breadcrumb-item :to="{ path: '/' }"&gt;首页&lt;/s-breadcrumb-item&gt;
      &lt;s-breadcrumb-item :to="{ path: '/'}"&gt;组件&lt;/s-breadcrumb-item&gt;
      &lt;s-breadcrumb-item :to="{ path: '/breadcrumb'}"&gt;面包屑&lt;/s-breadcrumb-item&gt;
    &lt;/s-breadcrumb&gt;
        </code></pre>
      </div>
    </div>
  </article>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    beforeMount() {
      console.log(1111);
    }
  }
</script>
<style lang="scss">
  .article {
    position: relative;
    &:after {
      content: "";
      clear: both;
      display: block;
    }
    h1, h3 {
      margin: 12px 0;
      font-weight: 400;
    }
  }
  .example {
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 24px;
  }
  .example-demo {
    padding: 24px;
  }
  .example-code {
    border-top: 1px solid #eee;
    background: #f9fafc;
    overflow: hidden;
  }
</style>
