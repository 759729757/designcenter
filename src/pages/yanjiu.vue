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
        <div class="row flex major-warp flex-center bg-gray">
          <div class="col-5 flex flex-center content-warp flex-start">
            <img class="headImg" src="../assets/major.jpg" alt="">
            <div class="title-warp">
              <h2 class="news-title">未来生活生产方式</h2>
              <p class="title-en">
                Future Life & Production Style
              </p>
            </div>
          </div>
          <div class="col-5 flex content-warp flex-center">
            <p>
              面向基于新技术变革而形成的未来文化环境和生活方式的服装、家具、首饰、室内环境、交互设备等具体产品设计。
            </p>
            <strong class="more">> 详情</strong>
          </div>
        </div>

        <div class="row flex major-warp flex-center bg-gray">
          <div class="col-5 flex content-warp flex-center">
            <p>
              在科技和设计交叉领域的前沿概念性研究。如 AI 人工智能设计应用、新媒体交互设计等领域的实验性、概念性研究。
            </p>
            <strong class="more">> 详情</strong>
          </div>
          <div class="col-5 flex flex-center content-warp flex-start">
            <div class="title-warp ">
              <h2 class="news-title">未来艺术与设计基础教育</h2>
              <p class="title-en">
                Future basic education in art & design
              </p>
            </div>
            <img class="headImg" src="../assets/major3.jpg" alt="">
          </div>
        </div>

        <div class="row flex major-warp flex-center bg-gray">
          <div class="col-5 flex flex-center content-warp flex-start">
            <img class="headImg" src="../assets/major2.jpg" alt="">
            <div class="title-warp">
              <h2 class="news-title">未来艺术与科技</h2>
              <p class="title-en">
                Future Art & Science
              </p>
            </div>
          </div>
          <div class="col-5 flex content-warp flex-center">
            <p>
              透彻了解国际教育体系、环境和发展趋势， 研发出适合中国本土国情的、面向未来文化和技术环境的设计教学的课程框架和教材。
            </p>
            <strong class="more">> 详情</strong>
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
.major-warp .content-warp{padding: 0 50px;box-sizing: border-box;}
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
@media (max-width: 1100px) {

}
  @media (max-width: 414px) {

  }


</style>
