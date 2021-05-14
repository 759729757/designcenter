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
          <img class="news-img" src="../assets/news/news8.png" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">深化校企合作｜北师大未来设计中心FDC与联想共同成立“未来设计教育实验室”</h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               1st, Apri, 2021
              </span>
              <a target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzkyMDEyNzU5Mw==&mid=2247485439&idx=1&sn=736e17ecb4b6bcb233b3a1b2840f072a&chksm=c196d6f9f6e15fefc436e9782760186f6704687e2fd36ecd5ed4c7e5f912dfbcc7af17545861&token=986176304&lang=zh_CN#rd">
                <span class="more">> 详情</span>
              </a>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/news/news7-7.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">北师大未来设计中心FDC承办2020迪拜世博会中华文化馆茶空间设计项目</h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               23th, Mar, 2021
              </span>
              <router-link to="newsDetail?news=7"><span class="more">> 详情</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/news/51.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">海内外优秀青年学者云聚FDC分论坛，共议设计、教育新成果</h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               4th, Jan, 2021
              </span>
              <router-link to="newsDetail?news=5"><span class="more">> 详情</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/news/21.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">FDC专家在珠开展系列学术活动，促湾区设计教育发展</h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               4th, December, 2020
              </span>
              <router-link to="newsDetail?news=4"><span class="more">> 详情</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/news/11.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title"> 未来设计中心FDC携手北京、珠海国际设计周立足湾区，创意启动！</h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               4th, December, 2020
              </span>
              <router-link to="newsDetail?news=3"><span class="more">> 详情</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/news/6.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">中心在京举行新闻发布会 发布“未来设计种子基金”和硕士招生信息</h3>
            </div>
            <div class="text-gray">
              <span class="title-en">
               15th, October, 2020
              </span>
              <router-link to="newsDetail?news=2"><span class="more">> 详情</span></router-link>
            </div>
          </div>
        </div>
        <div class="news-warp flex flex-start bg-gray">
          <img class="news-img" src="../assets/newsbanner.jpg" alt="">
          <div class="flex section-warp flex-col">
            <div>
              <h3 class="news-title">未来设计中心FDC主任高鹏谈艺术教育梦</h3>
<!--              The Fist FDC Academic Board Meeting Held-->
            </div>
            <div class="text-gray">
              <span class="title-en">
                9th, September, 2020
              </span>
             <router-link to="newsDetail?news=1"><span class="more">> 详情</span></router-link>
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
  @media (max-width: 768px) {
    .news-warp{flex-direction: column;justify-content: center;align-items: center;}
    .news-img{width: 100%;}
  }


</style>
