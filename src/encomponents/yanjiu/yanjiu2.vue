<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/banner4.jpg" alt="">
      </div>
<!--      <h2 class="section-title">学习经历</h2>-->
      <div class="container-sm">
        <h2 class="news-title">Art and Technology</h2>

        <p>
          research for frontier conceptualization<br> <br>
          Art and Technology” concentrates on the application of technology in art and design, including AI design, new media interaction design, and perception in design, with the focus of conceptual design of potential future possibilities, such as machine learning in exhibitions and displays and the impact of perception on the design.
          <br> <br>
          This research direction closely links to international frontier disciplines, strives for first-class academic research results, aiming to tackle frontier issues with the scientific and technological aspects on human’s life patterns in the future society. It insists on sustainable innovation, and cultivates innovative art and design students with cross-border thinking, problem-solving ability, future vision, and systematic and strategic thinking patterns.
        </p>

      </div>
      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../header'
  import footerbar from '../footerbar'
  import mainnavbar from '../mainnavbar'
  import list from '../list'
  import mbnavbar from '../mbnavbar'
    export default {
      name: "yanjiu1",
      components:{
        zxHeader,footerbar,mainnavbar,list,mbnavbar
      }
    }
</script>

<style scoped>
  .banner img{
    width: 100%;
  }
  .container-sm{margin-bottom: 50px;margin-top: 50px;}
  table{text-align: center;border-collapse: collapse;width: 100%;margin: 20px 0;}
  td{padding: 10px;border: #000 solid 1px;}
</style>
