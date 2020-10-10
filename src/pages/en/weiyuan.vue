<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/banner3.jpg" alt="">
      </div>
      <div class="container ">

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../../assets/tanping.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">TAN Ping</h2></div>
              <p>Professor</p>
            </div>

          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              Chair of the FDC Academic Committee (Leading Professional in Fine Arts)
            </p>
            <router-link to="enweiyuanDetail?person=tanping"><span class="more">> More</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../../assets/gaopeng2.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">GAO Peng </h2> </div>
              <p>Researcher</p>
            </div>

          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              FDC Director, Secretary-general of the FDC Academic Committee
            </p>
            <router-link to="enweiyuanDetail?person=gaopeng"><span class="more">> More</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../../assets/wangmin.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">WANG Min</h2> </div>
              <p>Professor</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              Member of the FDC Academic Committee (Leading Professional in Design)
            </p>
            <router-link to="enweiyuanDetail?person=wangmin"><span class="more">> More</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../../assets/xuping.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">XU Ping</h2></div>
              <p> Professor</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              Member of the FDC Academic Committee (Leading Professional in Design)
            </p>
            <router-link to="enweiyuanDetail?person=xuping"><span class="more">> More</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../../assets/bulang.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">Tony Brown</h2> </div>
              <p>Professor</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              Member of the FDC Academic Committee (Leading Professional of International Cooperation)
            </p>
            <router-link to="enweiyuanDetail?person=tony"><span class="more">> More</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../../assets/liqi.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">LI Qi </h2>  </div>
              <p>Professor</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              Member of the FDC Academic Committee (Leading Professional in Art and Technology)
            </p>
            <router-link to="enweiyuanDetail?person=liqi"><span class="more">> More</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../../assets/miri.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">Miriam Mirolla</h2> </div>
              <p>Professor</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              Member of the FDC Academic Committee (Leading Professional in Futurism and Art Psychology)
            </p>
            <router-link to="enweiyuanDetail?person=miri"><span class="more">> More</span></router-link>
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
.head-img{width: 150px;height: 150px;border-radius: 150px;margin-right: 50px;}
.news-warp{margin-bottom: 15px;position: relative;}
.news-warp:first-child{margin-top: 50px;}
.news-warp:last-child{margin-bottom: 50px;}
.flex-col{align-items: start;justify-content: center;}
.more{
  position: absolute;right: 50px;bottom: 30px;
}
.name{display: inline-block;margin-bottom: 0;}

@media (max-width: 1100px) {

}
  @media (max-width: 768px) {
    .head-img{margin: 0;}
    .flex{flex-direction: column;align-items: center;justify-content: center;}
    .col-5{width: 100%;}
    .section-warp .section-warp{padding-top: 0;}
  }


</style>
