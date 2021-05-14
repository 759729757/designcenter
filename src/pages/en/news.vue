<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/banner.jpg" alt="">
      </div>
      <div class="container ">
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../../assets/news/en6-1.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title" style="margin-bottom: 0;">
                FUTURE DESIGN EDUCATION LAB Was Jointly Established by Beijing Normal University Future Design Center and Lenovo
              </h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               16st, Apri, 2021
              </span>
              <router-link to="ennewsDetail?news=6"><span class="more">> MORE</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../../assets/news/en8-6.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title" style="margin-bottom: 0;">
                Relocation Plan of 2021 Fine Arts (Art Design) Program of School of Arts and Communication, Beijing Normal University
              </h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               1st, Apri, 2021
              </span>
              <router-link to="ennewsDetail?news=5"><span class="more">> MORE</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../../assets/news/en4-1.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title" style="margin-bottom: 0;">
                FDC Experts Engaged in Academic Activities in Zhuhai
              </h3>
              <h4 style="margin-top: 5px;">Boosting the Development of Design Education in the Greater Bay Area</h4>
            </div>
            <div class="text-gray">
              <span class="title-en">
               15th, Mar, 2021
              </span>
              <router-link to="ennewsDetail?news=4"><span class="more">> MORE</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../../assets/news/new3-1.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">
                Outstanding Scholars gathered in FDC Young Scholars Sub-forum for design and education achievement exchange
              </h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               23th, Feb, 2021
              </span>
              <router-link to="ennewsDetail?news=3"><span class="more">> MORE</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../../assets/news/en1.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">
                FDC Joins Hands with Beijing & Zhuhai International Design Week to build a foothold in the Greater Bay Area
              </h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               17th, Jun, 2021
              </span>
              <router-link to="ennewsDetail?news=1"><span class="more">> MORE</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../../assets/news/6.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">
                Press Conference of Future Design Center Successfully Held in Beijing with Future Design Seed Fund and MFA Program Recruitment Launched
              </h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               15th, October, 2020
              </span>
              <router-link to="ennewsDetail?news=2"><span class="more">> MORE</span></router-link>
            </div>
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
.news-img{width: 300px;}
.news-warp{margin-bottom: 50px;position: relative;}
.news-warp:first-child{margin-top: 50px;}
.more{
  position: absolute;right: 50px;bottom: 30px;
}
.news-warp h3{margin-top: 0;margin-bottom: 10px;}

@media (max-width: 1100px) {

}
  @media (max-width: 768px) {
    .news-warp{flex-direction: column;justify-content: center;align-items: center;}
    .news-img{width: 100%;}
  }


</style>
