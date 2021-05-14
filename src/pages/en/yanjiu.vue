<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/banner4.jpg" alt="">
      </div>
      <div class="container ">
        <!-- 研究方向 -->
        <div class="row flex major-warp flex-center bg-gray">
          <div class="col-5 flex flex-center content-warp flex-start">
            <img class="headImg" src="../../assets/major.jpg" alt="">
            <div class="title-warp show-lg">
              <h2 class="news-title"> Future Design</h2>
              <!--            <p class="title-en">-->
              <!--              未来生活方式-->
              <!--            </p>-->
            </div>
          </div>
          <div class="col-5 flex content-warp text-warp flex-center">
            <div class="title-warp show-md show-sm">
              <h2 class="news-title">Future Design</h2>
              <!--            <p class="title-en">-->
              <!--              未来生活方式-->
              <!--            </p>-->
            </div>
            <p>Comprehensive Design for Future Production, Lifestyle and Ideology
            </p>
            <router-link to="enyanjiu1"><strong class="more">> More</strong></router-link>

          </div>
        </div>

        <div class="row flex major-warp flex-center bg-gray">
          <div class="col-5 flex content-warp text-warp flex-center">
            <div class="title-warp show-md show-sm">
              <img class="headImg show-sm" src="../../assets/major3.jpg" alt="">
              <h2 class="news-title">Art and Technology</h2>
              <!--            <p class="title-en">-->
              <!--              艺术与科技-->
              <!--            </p>-->
            </div>
            <p>Conceptual research for cutting-edge issues
            </p>
            <router-link to="enyanjiu2"><strong class="more">> More</strong></router-link>
          </div>
          <div class="col-5 flex flex-center content-warp flex-start">
            <div class="title-warp show-lg">
              <h2 class="news-title">Art and Technology</h2>
            </div>
            <img class="headImg show-md show-lg" src="../../assets/major3.jpg" alt="">
          </div>
        </div>

        <div class="row flex major-warp flex-center bg-gray">
          <div class="col-5 flex flex-center content-warp flex-start">
            <img class="headImg" src="../../assets/major2.jpg" alt="">
            <div class="title-warp show-lg">
              <h2 class="news-title">Design and Education</h2>
            </div>
          </div>
          <div class="col-5 flex content-warp text-warp flex-center">
            <div class="title-warp show-md show-sm">
              <h2 class="news-title">Design and Education</h2>
            </div>
            <p>A study of teaching and development in future design education
            </p>
            <router-link to="enyanjiu3"> <strong class="more">> More</strong></router-link>
          </div>
        </div>

      </div>

      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../../encomponents/header'
  import footerbar from '../../encomponents/footerbar'
  import mainnavbar from '../../encomponents/mainnavbar'
  import list from '../../encomponents/list'
  import mbnavbar from '../../encomponents/mbnavbar'
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
  @media (max-width: 768px) {

  }


</style>
