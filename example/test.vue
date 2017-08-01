<template>
  <div>{{ a }}</div>
</template>
<script>
  export default {
    data() {
      return {
        a: 'test.....'
      }
    },
    beforeMount() {
      console.log(1111);
    }
  }
</script>
<style lang="scss">

</style>
