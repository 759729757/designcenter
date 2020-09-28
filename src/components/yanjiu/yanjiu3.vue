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
        <h2 class="news-title">未来设计教育</h2>
        <p class="title-en">
          Future Design Education
        </p>
        <p>
          未来设计教育：面向设计专业的教育系统开发
          <br><br> “未来设计教育”是在教育学领域所作的创新研究，是为了培养未来设计所需的新型人才、探讨设计教育的未来发展方向，而准备的系统化、逻辑化，具有教学评估体系的教育研究。该领域研究希望能真正了解世界艺术教育发展的趋势，世界主要设计教育体系的设计思路和逻辑、发展模式、课标体系、监察体系及体系建立的依据，最终发展出适合中国本土国情、适应未来信息化社会的新型教育体系及人才培养模式。
          <br><br>该领域研究涉及教学方式、课程框架、教材编写、认知学科教育等，另利用北京师范大学心理学、文学、教育学等学科优势，突出师范类院校特色，开创设计跨学科教育的新方向，探讨设计教育的未来发展方向。
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
