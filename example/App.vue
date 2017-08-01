<template>
  <div class="container">
    <nav>
      <ul class="menu-left">
        <router-link to="/breadcrumb" tag="li">Breadcrumb</router-link>
        <router-link to="/button" tag="li">Button</router-link>
        <router-link to="/linechart" tag="li">linechart</router-link>
      </ul>
    </nav>
    <div>
      <!-- <line-chart></line-chart> -->
    </div>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  import LineChart from "./linechart";

  export default {
    components: {
      LineChart
    },
    data() {
      return {
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #eee;
    color: #657180;
  }
  ul, li {
    list-style: none;
  }
  .container {
    background: #fff;
    width: 90%;
    margin: 30px auto 20px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  .container:after {
    content: '';
    clear: both;
    display: block;
  }
  nav {
    display: block;
    width: 16.66666667%;
    float: left;
    padding: 16px 0;
  }
  ul.menu-left {
    position: relative;
  }
  ul.menu-left:after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  ul.menu-left li {
    padding: 14px 24px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-right: 2px solid transparent;
    z-index: 1;
    position: relative;
  }
  ul.menu-left li.router-link-active {
    color: #39f;
    border-right: 2px solid #39f;
    z-index: 2;
  }
  .main {
    display: block;
    width: 83.333333%;
    float: left;
    padding: 20px 25px;
    position: relative;
  }
  .main:before {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    z-index: 1;
  }
</style>
