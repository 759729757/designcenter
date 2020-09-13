<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner3.jpg" alt="">
      </div>
      <div class="container ">

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/tanping.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">谭平</h2> <span>教授</span></div>
              <p>Prof.Tan Ping</p>
            </div>

          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              主任委员，艺术学科带头人 <br>
              研究领域：艺术与设计教育研究
            </p>
            <router-link to="weiyuanDetail?person=tanping"><span class="more">> 详情</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/gaopeng2.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">高鹏</h2> <span>研究员</span></div>
              <p>Mr. Gao Peng</p>
            </div>

          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              秘书长，中心主任 <br>
              研究领域：艺术设计
            </p>
            <router-link to="weiyuanDetail?person=gaopeng"><span class="more">> 详情</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/wangmin.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">王敏</h2> <span>教授</span></div>
              <p>Prof. Wang Min</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              委员，设计学科带头人 <br>
              研究领域：视觉传达设计
            </p>
            <router-link to="weiyuanDetail?person=wangmin"><span class="more">> 详情</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/xuping.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">许平</h2> <span>教授</span></div>
              <p>Prof.Xu Ping</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              委员，设计理论带头人 <br>
              研究领域：设计理论
            </p>
            <router-link to="weiyuanDetail?person=xuping"><span class="more">> 详情</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/bulang.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">托尼·布朗</h2> <span>教授</span></div>
              <p>Prof. Tony Brown</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              委员，国际合作带头人 <br>
              研究领域：艺术与设计教育研究
            </p>
            <router-link to="weiyuanDetail?person=tony"><span class="more">> 详情</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/liqi.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">李琦</h2> <span>教授</span></div>
              <p>Prof. Li Qi</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              委员，科技艺术方向带头人 <br>
              研究领域：数字地球、智慧城市系统与认知计算、<br>大气污染与人体健康
            </p>
            <router-link to="weiyuanDetail?person=liqi"><span class="more">> 详情</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/miri.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">米利亚姆·米洛拉</h2> <span>教授</span></div>
              <p>Prof. Miriam Mirolla</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              委员，未来理论、艺术心理方向带头人 <br>
              研究领域：艺术史论、当代艺术、交互理论和 <br>应用技术
            </p>
            <router-link to="weiyuanDetail?person=miri"><span class="more">> 详情</span></router-link>
          </div>
        </div>

        <div class="news-warp row flex bg-gray section-warp">
          <div class="flex col-5 flex-start">
            <img class="head-img" src="../assets/yejingtian.jpg" alt="">
            <div class="flex-col flex-center">
              <div><h2 class="name">叶锦添</h2> <span>特聘教授</span></div>
              <p>Prof. Ye JinTian</p>
            </div>
          </div>
          <div class=" col-5 flex section-warp flex-col">
            <p>
              委员 <br>
              电影艺术指导、服装设计师、视觉艺术家， <br>“新东方主义”美学概念推行者
            </p>
            <router-link to="weiyuanDetail?person=yejingtian"><span class="more">> 详情</span></router-link>
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
  @media (max-width: 414px) {

  }


</style>
