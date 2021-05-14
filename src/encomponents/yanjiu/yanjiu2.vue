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
          <strong>Conceptual research for cutting-edge issues</strong><br><br>
          “Art and Technology” concentrates on the application of technology in art and design and conducts conceptual exploration and practice of frontier issues involving new media interaction design, AI design, user experience, cognitive modalities and social and cultural research. The research in this field closely links to international frontier disciplines, strives for first-class academic research results, aiming to tackle frontier issues with the scientific and technological aspects on human’s life patterns in future society. Adhering to sustainable innovation and exploration, it nurtures innovative art and design talents with cross-border thinking, problem-solving ability, future vision, and systematic and strategic thinking.
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
