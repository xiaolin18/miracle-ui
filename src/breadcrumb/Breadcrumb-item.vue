<template>
  <span class="s-breadcrumb-item">
    <span class="s-breadcrumb-item-inner" ref="link"><slot></slot></span>
    <span class="s-breadcrumb-separator">{{ separator }}</span>
  </span>
</template>
<script>
  export default {
    name: "s-breadcrumb-item",
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: ""
      }
    },
    mounted() {
      this.separator = this.$parent.separator;
      var self = this;
      if (this.to) {
        let link = this.$refs.link;
        link.addEventListener("click", _ => {
          let to = this.to;
          self.replace ? self.$router.replace(to) : self.$router.push(to);
        });
      }
    }
  }
</script>
<style>
  .s-breadcrumb-item {
    float: left;
  }
  .s-breadcrumb-item-inner {
    color: #48576a;
    transition: color .15s linear;
  }
  .s-breadcrumb-item-inner:hover {
    cursor: pointer;
    color: #20a0ff;
  }
  .s-breadcrumb-separator {
    margin: 0 8px;
    color: #bfcbd9;
  }
  .s-breadcrumb-item:last-child .s-breadcrumb-separator {
    display: none;
  }
</style>
