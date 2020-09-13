<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner.jpg" alt="">
      </div>
      <div class="container ">
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/newsBanner.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">未来设计创新研究中心学术委员会首次会议召开</h3>
              The Fist FDC Academic Board Meeting Held
            </div>
            <div class="text-gray">
              <span class="title-en">
                8th, September, 2020
              </span>
              <span class="more">> 详情</span>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/newsBanner.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">未来设计创新研究中心学术委员会首次会议召开</h3>
              The Fist FDC Academic Board Meeting Held
            </div>
            <div class="text-gray">
              <span class="title-en">
                8th, September, 2020
              </span>
              <span class="more">> 详情</span>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/newsBanner.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">未来设计创新研究中心学术委员会首次会议召开</h3>
              The Fist FDC Academic Board Meeting Held
            </div>
            <div class="text-gray">
              <span class="title-en">
                8th, September, 2020
              </span>
              <span class="more">> 详情</span>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/newsBanner.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">未来设计创新研究中心学术委员会首次会议召开</h3>
              The Fist FDC Academic Board Meeting Held
            </div>
            <div class="text-gray">
              <span class="title-en">
                8th, September, 2020
              </span>
              <span class="more">> 详情</span>
            </div>
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
.news-img{width: 300px;}
.news-warp{margin-bottom: 50px;position: relative;}
.news-warp:first-child{margin-top: 50px;}
.more{
  position: absolute;right: 50px;bottom: 30px;
}
.news-warp h3{margin-top: 0;margin-bottom: 10px;}

@media (max-width: 1100px) {

}
  @media (max-width: 414px) {

  }


</style>
