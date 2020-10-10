<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner.jpg" alt="">
      </div>
      <div class="container ">
        <news1></news1>

      </div>

      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../components/header'
  import footerbar from '../components/footerbar'
  import mainnavbar from '../components/mainnavbar'
  import list from '../components/list'
  import mbnavbar from '../components/mbnavbar'
  import news1 from '../statics/news1'
  export default {
        name: "about",
      components:{
        zxHeader,footerbar,mainnavbar,list,mbnavbar,news1
      }
    }
</script>

<style scoped>
  .container{width: 645px;}
.banner img{
  width: 100%;
}
img{max-width: 100%!important;}
.news-img{width: 300px;}
.news-warp{margin-bottom: 50px;position: relative;}
.news-warp:first-child{margin-top: 50px;}
.more{
  position: absolute;right: 50px;bottom: 30px;
}
.news-warp h3{margin-top: 0;margin-bottom: 10px;}

@media (max-width: 1100px) {
  .container-sm, .container {
    margin: 0 auto;
  }
}

  @media (max-width: 768px) {
    .container {
      width: 96%;
      margin: 0 2%;
    }
  }

</style>
