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
        <h2 class="news-title">Future Lifestyle</h2>

        <p>
          practical design for new cultural forms<br> <br>
          This research direction is about practical product design oriented to the market, to the new Internet culture, and to the future cultural environment and lifestyles formed with new technological innovations. The research in this field embodies humanistic concern, connects with specific product and functional design, and links with the application of cultural design life, including information communication and visualization design, space and environment design, fashion and lifestyle design, and East-West traditional handicraft design.
          <br> <br>
          Research on “Future Lifestyle” aims to equip students with the ability to analyze and predict social development trends, grasp advanced design concepts, methods and tools, understand institution and market operation as well as product development process, and ultimately enables students to become creators and leaders of future lifestyles.
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
