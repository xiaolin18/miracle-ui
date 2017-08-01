<template>
  <div class="s-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "s-breadcrumb",
    props: {
      separator: {
        type: String,
        default: "/"
      }
    }
  }
</script>
<style>
  .s-breadcrumb {
    font-size: 14px;
    line-height: 1;
  }
  .s-breadcrumb:after {
    content: '';
    clear: both;
    display: block;
  }
</style>
