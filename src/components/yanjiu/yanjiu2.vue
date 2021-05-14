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
        <h2 class="news-title">艺术与科技</h2>
        <p class="title-en">
          Art and Science
        </p>
        <p>
          艺术与科技：面向前沿问题的概念性研究
          <br><br>
          “艺术与科技”基于科技为艺术设计领域带来的全面拓展，对涉及新媒体交互设计、人工智能、用户体验、认知方式、社会文化研究等多个方面的前沿问题进行概念性探索与实践。
          <br><br>
          该领域的研究对接国际前沿学科，争创一流学术研究成果，以前沿问题为导向，以未来社会人类生活模式的技术性变革为基础，坚持可持续性创新探索，培养具有跨界思维、综合解决能力、未来视野和系统化思维模式的创新型艺术设计人才。


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
