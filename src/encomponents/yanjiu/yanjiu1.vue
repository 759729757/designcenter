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
        <h2 class="news-title">Future Design</h2>
        <p>
          <strong>Comprehensive Design for Future Production, Lifestyle and Ideology</strong>
          <br> <br>
          In the context of the new Internet culture, intelligent society and digital economy, "Future Design" promotes forward-looking and practical design teaching and research based on the exploration of future cultural forms, production and lifestyle formed with new technological innovations. The research in this field focuses on humanism and technology ethics and bridges design aesthetics and intelligent manufacturing, covering cultural life and production practice. The teaching includes courses in industrial design, information communication and visualization design, fashion and jewelry design, architecture and environmental design, fashion life design, and East-West traditional handicraft design. Research on “Future Design” equips students with the ability to analyze and predict social development trends, to grasp advanced design concepts, methods and tools, and to understand institution and market operation as well as product development process, and ultimately enables students to become creators and leaders of future social ideology.

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
