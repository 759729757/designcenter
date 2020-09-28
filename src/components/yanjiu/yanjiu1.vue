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
        <h2 class="news-title">未来生活方式</h2>
        <p class="title-en">
          Future Lifestyle
        </p>
        <p>
          未来生活方式：面向实用及新文化形态的设计 <br><br>
          这是一个面向市场、面向新型互联网文化、面向基于新技术变革而形成的未来文化环境和生活方式，进行的实用型产品的设计课程方向的研究。该领域研究体现人文关怀，对接具体产品和功能设计，链接广大文化设计生活应用。包括信息传播与可视化设计、空间与环境设计、时尚生活设计、东西方传统手工艺设计等领域。
          <br><br>“未来生活方式”研究希望培养学生具有分析与预判社会发展趋势的能力，掌握先进的设计理念、方法与工具，了解机构和市场运行模式及产品开发流程，成为未来生活方式的创造者和领军者。
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
