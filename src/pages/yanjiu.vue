<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner4.jpg" alt="">
      </div>
      <div class="container ">
        <!-- 研究方向 -->
        <div class="row flex major-warp flex-center bg-gray" id="yanjiu1">
          <div class="col-5 flex flex-center content-warp flex-start">
            <img class="headImg" src="../assets/major.jpg" alt="">
            <div class="title-warp show-lg">
              <h2 class="news-title">未来生活方式</h2>
              <p class="title-en">
                Future Lifestyle
              </p>
            </div>
          </div>
          <div class="col-5 flex content-warp text-warp flex-center">
            <div class="title-warp show-md">
              <h2 class="news-title">未来生活方式</h2>
              <p class="title-en">
                Future Lifestyle
              </p>
            </div>
            <p>
              面向实用及新文化形态的设计<br> <br>

这是一个面向市场、面向新型互联网文化、面向基于新技术变革而形成的未来文化环境和生活方式，进行的实用型产品的设计课程方向的研究。该领域研究体现人文关怀，对接具体产品和功能设计，链接广大文化设计生活应用。包括信息传播与可视化设计、空间与环境设计、时尚生活设计、东西方传统手工艺设计等领域。<br> <br>

“未来生活方式”研究希望培养学生具有分析与预判社会发展趋势的能力，掌握先进的设计理念、方法与工具，了解机构和市场运行模式及产品开发流程，成为未来生活方式的创造者和领军者。
            </p>
           <router-link to="yanjiu1">
             <strong class="more">> 详情</strong>
           </router-link>
          </div>
        </div>

        <div class="row flex major-warp flex-center bg-gray" id="yanjiu2">
          <div class="col-5 flex content-warp text-warp flex-center">
            <div class="title-warp show-md">
              <h2 class="news-title">艺术与科技</h2>
              <p class="title-en">
                Art and Technology
              </p>
            </div>
            <p>
             面向前沿概念性的研究<br> <br>
“艺术与科技”针对科技在艺术设计领域的应用，涉及AI人工智能设计应用、新媒体交互设计、认知学科等领域，专注于对未来潜在可能性的概念性设计，如展览展示中的机器学习、感知方式对于使用的影响等。<br> <br>

该领域研究对接国际前沿学科，争创一流学术研究成果，以发展前沿问题为导向，以未来社会人类生活模式的科技性为根本，坚持可持续创新，培养具有跨界思维、综合解决能力、未来视野、系统化和策略化思维模式的创新型艺术设计人才。
            </p>
            <router-link to="yanjiu2">
              <strong class="more">> 详情</strong>
            </router-link>          </div>
          <div class="col-5 flex flex-center content-warp flex-start">
            <div class="title-warp show-lg">
              <h2 class="news-title">艺术与科技</h2>
              <p class="title-en">
                Art and Technology
              </p>
            </div>
            <img class="headImg" src="../assets/major3.jpg" alt="">
          </div>
        </div>

        <div class="row flex major-warp flex-center bg-gray" id="yanjiu3">
          <div class="col-5 flex flex-center content-warp flex-start">
            <img class="headImg" src="../assets/major2.jpg" alt="">
            <div class="title-warp show-lg">
              <h2 class="news-title">未来设计教育</h2>
              <p class="title-en">
                Future Design Education
              </p>
            </div>
          </div>
          <div class="col-5 flex content-warp text-warp flex-center">
            <div class="title-warp show-md">
              <h2 class="news-title">未来设计教育</h2>
              <p class="title-en">
                Future Design Education
              </p>
            </div>
            <p>面向设计专业的教育系统开发<br> <br>
“未来设计教育”是在教育学领域所作的创新研究，是为了培养未来设计所需的新型人才、探讨设计教育的未来发展方向，而准备的系统化、逻辑化，具有教学评估体系的教育研究。该领域研究希望能真正了解世界艺术教育发展的趋势，世界主要设计教育体系的设计思路和逻辑、发展模式、课标体系、监察体系及体系建立的依据，最终发展出适合中国本土国情、适应未来信息化社会的新型教育体系及人才培养模式。
<br> <br>
该领域研究涉及教学方式、课程框架、教材编写、认知学科教育等，另利用北京师范大学心理学、文学、教育学等学科优势，突出师范类院校特色，开创设计跨学科教育的新方向，探讨设计教育的未来发展方向。
            </p>
            <router-link to="yanjiu3">
              <strong class="more">> 详情</strong>
            </router-link>
          </div>
        </div>

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
  export default {
        name: "about",
      components:{
        zxHeader,footerbar,mainnavbar,list,mbnavbar
      }
    }
</script>

<style scoped>
.banner img{
  width: 100%;
}
/*未来设计研究方向*/
.headImg{width: 140px;height: 140px;border-radius: 140px;}
.headImg+.title-warp,.title-warp+.headImg{margin-left: 50px;}
.major-warp{padding: 25px 0;margin-bottom: 15px;margin-top: 0;}
.major-warp:first-child{margin-top: 50px;}
.major-warp:last-child{margin-bottom: 50px;}
.major-warp .content-warp{padding: 0 50px 30px 50px;box-sizing: border-box;}
.major-warp .content-warp .more{right: 50px;font-weight: lighter;}
.row{
  margin: 50px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}
.content-warp .more {
  position: absolute;
  right: 5px;
  bottom: 5px;
  font-size: 14px;
  cursor: pointer;
}
@media (max-width: 769px) {
  .major-warp{padding: 20px 20px;}
  .title-warp+.headImg{margin-left: 0;}
  .row.major-warp>.col-5{width: 140px;padding: 0;margin: 0 20px;}
  .row.major-warp>.col-5.text-warp{width: 100%;
    flex-direction: column;align-items: start;}
  /*.major-warp:nth-child(2) .headImg{margin-right: 50px;}*/
}
  @media (max-width: 414px) {

  }


</style>
