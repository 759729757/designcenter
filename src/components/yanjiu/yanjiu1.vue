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
        <h2 class="news-title">未来设计</h2>
        <p class="title-en">
          Future Design
        </p>
        <p>
          未来设计：面向未来生产生活方式及未来社会形态的综合性设计
          <br><br>
          “未来设计”在新型互联网文化、智能化社会及数字经济的背景下，基于对技术变革主导的未来文化形态和生产生活方式的探索，推动具有前瞻性与实践性的设计教学与研究。
          <br><br>
          该领域的研究注重人文精神和技术伦理，衔接设计美学与智能制造，涵盖文化生活与生产实践。教学内容包括工业设计、信息传播与可视化设计、服装与首饰设计、建筑与环境设计、时尚生活设计、东西方传统手工艺等方面课程。
          <br><br>
          “未来设计”研究培养学生具有分析与预判社会发展趋势的能力，掌握先进的设计理念、方法与工具，了解机构和市场运行模式及产品开发流程，成为未来社会形态的创造者和领军人。
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
