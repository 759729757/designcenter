<template>
  <div>
    <mbnavbar></mbnavbar>
    <zx-header></zx-header>
    <mainnavbar></mainnavbar>
    <div class="banner">
      <img src="../assets/banner.jpg" alt="">
    </div>
    <div class="container ">
      <news1 v-if="news == '1'"></news1>
      <news2 v-if="news == '2'"></news2>
      <news3 v-if="news == '3'"></news3>
      <news4 v-if="news == '4'"></news4>
      <news5 v-if="news == '5'"></news5>
      <news6 v-if="news == '6'"></news6>
      <news7 v-if="news == '7'"></news7>

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
  import news2 from '../statics/news2'
  import news3 from '../statics/news3'
  import news4 from '../statics/news4'
  import news5 from '../statics/news5'
  import news6 from '../statics/news6'
  import news7 from '../statics/news7'

  export default {
    name: "about",
    components: {
      zxHeader, footerbar,
      news5,
      mainnavbar, list, mbnavbar, news1, news2,news3,news4,news6,news7
    },
    data() {
      return {}
    },
    computed: {
      news() {
        return (this.$route.query.news || 1)
      }
    },
  }
</script>

<style scoped>
  .container {
    width: 645px;
  }

  .banner img {
    width: 100%;
  }

  img {
    max-width: 100% !important;
  }

  .news-img {
    width: 300px;
  }

  .news-warp {
    margin-bottom: 50px;
    position: relative;
  }

  .news-warp:first-child {
    margin-top: 50px;
  }

  .more {
    position: absolute;
    right: 50px;
    bottom: 30px;
  }

  .news-warp h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }

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
