<template>
  <div>
    <chart style="width: 100%;height:500px;" :options="chartData"></chart>
  </div>
</template>
<script>
  export default {
    name: 'LineChart',
    data () {
      return {
      }
    },
    props: {
      chartData: Object
    }
  }
</script>
