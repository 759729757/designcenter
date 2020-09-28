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
          艺术与科技：面向前沿概念性的研究 <br><br>
          “艺术与科技”针对科技在艺术设计领域的应用，涉及AI人工智能设计应用、新媒体交互设计、认知学科等领域，专注于对未来潜在可能性的概念性设计，如展览展示中的机器学习、感知方式对于使用的影响等。
          <br><br> 该领域研究对接国际前沿学科，争创一流学术研究成果，以发展前沿问题为导向，以未来社会人类生活模式的科技性为根本，坚持可持续创新，培养具有跨界思维、综合解决能力、未来视野、系统化和策略化思维模式的创新型艺术设计人才。

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
