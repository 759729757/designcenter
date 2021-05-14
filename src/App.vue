<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body{
    margin: 0;padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  p{line-height: 26px;}
  a {
    color: rgb(46, 46, 46);
    text-decoration: none;
  }
  .container{
    width: 1100px;margin: auto;
  }
  ul{margin-left: 0;padding-left: 0;}
  li {
    list-style: none;
  }
  .mode1{
    overflow: hidden;
    margin: 36px auto 0;
  }
  .mode02 {
    overflow: hidden;
    margin: 36px auto 0;
  }
  .sm_con p {
    margin: 10px 0 0 0;
    text-align: right;
  }
  .sm_con a {
    color: #fbd99c;
  }
  .section-title{
    color: #004a9d;
  }
  .more{cursor: pointer;}
  .pull-right{
    float: right;
  }
  .content-warp{position: relative;}
  .container-sm{width: 800px;margin: auto;}
  .section-warp{padding: 30px 50px;box-sizing: border-box;}
  .row{
    overflow: hidden;zoom: 1;position: relative;
  }
  .row:after{
    content: " ";clear: both;
  }
  .col-4{
    width: 40%;  float: left;
  }
  .col-5{width: 50%;float: left;}
  .col-3{width: 30%;float: left;}
  .col-7{width: 70%;float: left;}
  .col-6{
    float: left;
    width: 60%;
  }
  .bg-gray{background: #eee;}
  .text-gray{color: #333;}
  .flex{display: flex;flex-direction: row;align-items: stretch;justify-content: space-around;}
  .flex-col{display: flex;flex-direction: column;justify-content: space-between;}
  .flex-center{align-items: center;justify-content: center;}
  .flex-start{justify-content: start;}
  .flex-end{justify-content: end;}

  .mb-only,.show-md,.show-sm{display: none;}
  .show-lg{display: block;}
  .text-small{
    font-size: small;
  }
  @media (max-width: 1024px) {
    .container{width: 96%;margin: 0 2%;}
  }
  @media (max-width: 769px) {
    .show-lg{display: none;}
    .container-sm,.container{width: 90%;margin: 0 5%;}
    .show-md{
      display: block;
    }
  }

  @media (max-width: 768px) {
    .container{
      width: 96%;
      margin: 0 2%;
    }
    .pc-only {
      display: none;
    }
    .mb-only,.show-sm{
      display: block;
    }
  }

</style>
