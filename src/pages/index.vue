<template>
  <div>
    <mbnavbar></mbnavbar>
    <zx-header></zx-header>
    <mainnavbar></mainnavbar>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div>
          <a href="">
              <img class="banner"
                src="../assets/banner.jpg" alt=""  />
          </a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="container">
      <div class="row">
        <div class="title-warp col-4 content-warp">
          <div class="title">
            <h2 class="session-title"><span class="lefrborder"></span><router-link to="/about">中心概况</router-link></h2>
          </div>
          <div class="dd-content">
            <p>
              北京师范大学未来设计创新研究中心（以下简称未来设计中心FDC）是成立于2019年11月的研究型实体中心，并担任筹建北京师范大学未来设计学院的工作，学院有望在2021年上半年正式成立。未来设计中心FDC将工作根植于艺术与科技的交叉领域，通过在人文、艺术、设计、科技、社科等领域广泛的跨界合作，以及研究、教育、实践一体化，形成以学科互补、问题驱动、项目导向为特色的教学，设立未来设计，艺术与科技，设计与教育三个研究方向，培养具有精确专业素养、专业前沿视野、综合分析能力和科学人文理念的复合型创新型人才，开发基于实际应用环境的具有国际前沿水准的实验性设计产品，为设计行业的探索性发展提供先驱实践。 
            </p>
          </div>
          <router-link to="/about"><strong class="more">> 详情</strong></router-link>
        </div>
        <div class="col-6 title-warp content-warp ">
          <div class="title">
            <h2 class="session-title"><span class="lefrborder"></span><router-link to="/notice">公告通知</router-link></h2>
          </div>
          <div class="flex content-warp gonggao">
            <img class="about-img" src="../assets/news/gonggao3.jpg" alt="">
            <a target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzkyMDEyNzU5Mw==&mid=2247485478&idx=1&sn=19b1de54ee1e064248b5f68bcf74c3f3&chksm=c196d920f6e15036085b63271e22ddea9d5cf358396f88ad40aff36eda51befda428062b30a5&token=1067240805&lang=zh_CN#rd">
            <div>
              <h2 class="news-title">北京师范大学“未来设计种子基金” <br>最终入围名单公布
              </h2>
<!--              <p class="title-en">-->
<!--                Shortlist announcement of preliminary evaluation of Beijing Normal University "Future Design Seed Fund"-->
<!--               </p>-->
              <p class="title-en">
                <br>
                16th, Apri, 2021
              </p>
            </div>
            <a target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzkyMDEyNzU5Mw==&mid=2247485478&idx=1&sn=19b1de54ee1e064248b5f68bcf74c3f3&chksm=c196d920f6e15036085b63271e22ddea9d5cf358396f88ad40aff36eda51befda428062b30a5&token=1067240805&lang=zh_CN#rd"><strong class="more">> 详情</strong></a>
	  	</a>
          </div>
        </div>
      </div>
      <div class="mode1 row">
        <div class="news col-4">
          <div class="title">
            <a href="">
              <h2 class="session-title"><span class="lefrborder"></span>
              <router-link to="/news">新闻动态</router-link></h2></a>
          </div>
          <img class="news-banner" src="../assets/news/news8.png" alt="">

        </div>
        <div class="tongzhi col-6">
          <div class="title show-md show-lg">
            <a href=""><h2 class="session-title"><span class="lefrborder"></span></h2></a>
          </div>
          <ul>
            <li class="title-warp news-list">
              <a target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzkyMDEyNzU5Mw==&mid=2247485439&idx=1&sn=736e17ecb4b6bcb233b3a1b2840f072a&chksm=c196d6f9f6e15fefc436e9782760186f6704687e2fd36ecd5ed4c7e5f912dfbcc7af17545861&token=986176304&lang=zh_CN#rd">
                <h2 class="news-title">深化校企合作｜北师大未来设计中心FDC与联想共同成立“未来设计教育实验室”</h2>
                <p class="title-en">
                  1st, Apri, 2021
                </p>
              </a>
            </li>
            <li class="title-warp news-list">
              <router-link to="/newsDetail?news=7">
                <h2 class="news-title">北师大未来设计中心FDC承办2020迪拜世博会中华文化馆茶空间设计项目</h2>
                <p class="title-en">
                  23th, Mar, 2021
                </p>
              </router-link>
            </li>
            <li class="title-warp news-list">
              <router-link to="/newsDetail?news=5">
                <h2 class="news-title">海内外优秀青年学者云聚FDC分论坛，共议设计、教育新成果</h2>
                <p class="title-en">
                  4th, Jan, 2021
                </p>
              </router-link>
            </li>
<!--            <li class="title-warp news-list">-->
<!--              <router-link to="/newsDetail?news=4">-->
<!--                <h2 class="news-title">FDC专家在珠开展系列学术活动，促湾区设计教育发展</h2>-->
<!--                <p class="title-en">-->
<!--                  4th, December, 2020-->
<!--                </p>-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="title-warp news-list">-->
<!--              <router-link to="/newsDetail?news=3">-->
<!--                <h2 class="news-title"> 未来设计中心FDC携手北京、珠海国际设计周立足湾区，创意...</h2>-->
<!--                <p class="title-en">-->
<!--                  4th, December, 2020-->
<!--                </p>-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="title-warp news-list">-->
<!--              <router-link to="/newsDetail?news=2">-->
<!--                <h2 class="news-title">中心在京举行新闻发布会 发布“未来设计种子基金”和硕士招生...</h2>-->
<!--                <p class="title-en">-->
<!--                  15th, October, 2020-->
<!--                </p>-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="title-warp news-list">-->
<!--              <router-link to="/newsDetail?news=1">-->
<!--                <h2 class="news-title">未来设计中心FDC主任高鹏浅谈艺术教育</h2>-->
<!--                <p class="title-en">-->
<!--                  9th, September, 2020-->
<!--                </p>-->
<!--              </router-link>-->
<!--            </li>-->
          </ul>
        </div>
      </div>
<!--      视频文件 -->
      <div class="row">
        <img class="videoPoster" src="../assets/indexbanner_bottom.jpg" alt="">
      </div>
<!-- 研究方向 -->
      <div class="row flex major-warp flex-center bg-gray">
        <div class="col-5 flex flex-center content-warp flex-start">
          <img class="headImg" src="../assets/major.jpg" alt="">
          <div class="title-warp show-lg">
            <h2 class="news-title">未来设计</h2>
            <p class="title-en">
              Future Design
            </p>
          </div>
        </div>
        <div class="col-5 flex content-warp text-warp flex-center">
          <div class="title-warp show-md show-sm">
            <h2 class="news-title">未来设计</h2>
            <p class="title-en">
              Future Design
            </p>
          </div>
            <p>
              “未来设计”在新型互联网文化、智能化社会及数字经济的背景下，基于对技术变革主导的未来文化形态和生产生活方式的探索，推动具有前瞻性与实践性的设计教学与研究。
            </p>
          <router-link to="yanjiu1"><strong class="more">> 详情</strong></router-link>

        </div>
      </div>

      <div class="row flex major-warp flex-center bg-gray">
        <div class="col-5 flex content-warp text-warp flex-center">
          <div class="title-warp show-md show-sm">
            <img class="headImg show-sm" src="../assets/major3.jpg" alt="">
            <h2 class="news-title">艺术与科技</h2>
            <p class="title-en">
              Art and Technology
            </p>
          </div>
          <p>
            “艺术与科技”基于科技为艺术设计领域带来的全面拓展，对涉及新媒体交互设计、人工智能、用户体验、认知方式、社会文化研究等多个方面的前沿问题进行概念性探索与实践。
          </p>
          <router-link to="yanjiu2"><strong class="more">> 详情</strong></router-link>
        </div>
        <div class="col-5 flex flex-center content-warp flex-start">
          <div class="title-warp show-lg">
            <h2 class="news-title">艺术与科技</h2>
            <p class="title-en">
              Art and Technology
            </p>
          </div>
          <img class="headImg show-md show-lg" src="../assets/major3.jpg" alt="">
        </div>
      </div>

      <div class="row flex major-warp flex-center bg-gray">
        <div class="col-5 flex flex-center content-warp flex-start">
          <img class="headImg" src="../assets/major2.jpg" alt="">
          <div class="title-warp show-lg">
            <h2 class="news-title">设计与教育</h2>
            <p class="title-en">
              Design and Education
            </p>
          </div>
        </div>
        <div class="col-5 flex content-warp text-warp flex-center">
          <div class="title-warp show-md show-sm">
            <h2 class="news-title">设计与教育</h2>
            <p class="title-en">
              Design and Education
            </p>
          </div>
          <p>
            “设计与教育”是在教育学领域所作的创新研究，旨在培养未来设计所需的新型人才、探讨设计教育的未来发展方向。该领域研究希望能真正了解世界艺术教育发展的趋势，世界主要设计教育体系的设计思路和逻辑、发展模式、课标体系、监察体系及体系建立的依据，最终发展出适合中国本土国情、适应未来信息化社会的新型教育体系及人才培养模式。
          </p>
          <router-link to="yanjiu3"> <strong class="more">> 详情</strong></router-link>
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
  import mbnavbar from '../components/mbnavbar'

  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "index",
    components: {mbnavbar,zxHeader,mainnavbar,Swiper,SwiperSlide,directive,footerbar },
    data() {
      return {
        carouselArr:[
          'https://ai.bnu.edu.cn/images/gaiban/logo_01.png',
          'https://ai.bnu.edu.cn/images/gaiban/logo_01.png'
        ],
        swiperOptions: {
        //   loop:true,
        //   initialSlide:0,
        //   slidesPerView :'auto',
        //   // slidesPerView :document.documentElement.clientWidth < 768 ? 1 : 3,
        //   spaceBetween : 20,
        //   // pagination: {//分页器
        //   //   el: '.swiper-pagination'
        //   // },
        //   navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //   },
        //   updateOnWindowResize: true,
        //   observer:true,//修改swiper自己或子元素时，自动初始化swiper
        //   observeParents:true//修改swiper的父元素时，自动初始化swiper
        //   // Some Swiper option/callback...
        },


      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style scoped>
  .banner{
    width: 100%;
  }
  .news {
    float: left;
  }
  .news .title,.tongzhi .title,.title-warp .title{
    height: 30px;
    line-height: 30px;
    /*border-bottom: 1px solid #003770;*/
  }
  h2{margin: 0;}
  .news h2,.tongzhi h2,.title-warp .session-title,.news h2 a,.tongzhi h2 a,.title-warp h2 a{
    width: auto;
    float: left;
    font-size: 20px;
    color: #004a9d;
  }
  .lefrborder {
    /*border-left: 6px solid #00B1ED;*/
    margin-right: 10px;
    padding: 4px 0;
  }
  .news_con {
    overflow: hidden;
    margin: 30px 0 0 0;
  }

  .news_con .dd {
    float: left;
    width: 100%;box-sizing: border-box;

  }
  .dd-content,.news_con .dd{
    /*padding: 0 5% 0 21px;*/
    /*border-left: 1px solid #00B1ED;*/
    margin: 0 0 30px 0;
    font-size: 14px;line-height: 24px;
  }
  .news_con .dd:nth-child(3){
    clear: left;
  }

  .news_con a {
    font-size: 14px;
    line-height: 22px;
    display: block;
    width: 92%;
  }
  .news_con p {
    font-family: Cambria;
    font-size: 14px;
    color: #646464;
    padding: 8px 0 0 0;
    font-style: oblique;
  }
  .tongzhi {
    padding-left: 40px;box-sizing: border-box;
  }
  .tongzhi ul {
    margin: 20px 0 0 0;padding: 0;
  }
  .tongzhi ul li {
    min-height: 70px;
    margin: 0 0 11px 0;
    overflow: hidden;
  }
  .tongzhi ul li .date {
    width: 68px;
    height: 69px;
    background: #003770;
    display: inline-block;
    float: left;
    margin: 0 22px 0 0;
  }
  .tongzhi ul li .day {
    height: 34px;
    line-height: 36px;
    font-weight: bold;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    color: #ffffff;
    width: 35px;
    display: block;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    padding-top: 4px;
    text-align: center;
  }
  .tongzhi ul li .month {
    height: 30px;
    line-height: 15px;
    font-weight: bold;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
    color: #ffffff;
    width: 35px;
    display: block;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 0;
    margin-left: auto;
    padding-bottom: 4px;
    text-align: center;
  }
  .tongzhi ul li a {
    display: inline-block;
    float: left;
    font-size: 14px;
    line-height: 25px;
    margin: 10px 0 0 0;
  }
  .sm {
    background: #cccccc;
    position: relative;
  }
  .sm_con {
    font-size: 14px;
    color: #ffffff;
    padding: 56px 35px;
    background: #205f9f;
    position: absolute;
    z-index: 999;
    width: 490px;
    height: 120px;
    top: 42px;
    right: 90px;
    line-height: 30px;
  }
  .lfh2 {
    margin: -40px 0px 10px;
    text-align: center;
    color: rgb(255, 255, 255);
    line-height: 50px;
    font-family: "Microsoft YaHei UI";
    font-size: 20px;
    border-bottom-color: rgb(204, 204, 204);
    border-bottom-width: 1px;
    border-bottom-style: solid;
    display: block;
  }
  .row{
    margin: 50px 0;display: flex;
    align-items: stretch;
  }
  .col-4+.col-6,.col-6+.col-4{
    padding-left: 40px;box-sizing: border-box;
  }
  .about-img{width: 160px;margin-right: 30px;}
  .news-banner{width: 100%;margin-top: 20px;display: block;}
  .gonggao{margin-top: 20px;justify-content: left;}
  .item{
    overflow: hidden;zoom: 1;
  }
  .item-3{
    display: flex;padding: 30px 0;box-sizing: border-box;
    justify-content: space-between;align-items: stretch;
  }
.item-3 .item{
  width: 32.5%;background: #eee;
}
  .item img{
    width: 100%;display: block;
  }
  .item h3{
    text-align: center;letter-spacing: 4px;
    margin: 0;padding: 10px 0;background: #0d3769;color: white;
  }
  .item p{
    letter-spacing: 2px;
    margin: 0;padding: 15px;font-size: 14px;line-height: 20px;
    padding-top: 20px;
  }
  .item-zs:first-child{margin-top: 30px;}
  .item-zs{
    padding: 20px 40px;
    color: #fff;
    background: #0d3769;
    font-size: 14px;
    margin-top: 10px;
  }
  .item-zs p{margin: 5px 0;}
  .download{
    padding-top: 30px;
  }
  .download a{
    padding-left: 30px;
    background-image: url("../assets/aline.jpg");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 20px;
    font-size: 14px;
    display: block;
    margin-top: 13px;
  }
  .download a:first-child{
    margin-top: 0;
  }
  .download a span{float: right;color: #888;}
  .content-warp .more{position: absolute;right: 5px;bottom: 5px;font-size: 14px;cursor: pointer;}
  .title-warp .news-title{color: black;font-size: 20px;}
  .news-list{padding:7px 20px;background: #eee;padding-bottom: 0;}
  .news-list .news-title{margin-top: 0;margin-bottom: 5px;}
  .title-en{font-size: 18px;font-family: '微软雅黑';font-weight: lighter;}
  .videoPoster{width: 100%;}


  /*未来设计研究方向*/
  .headImg{width: 140px;height: 140px;border-radius: 140px;flex-shrink: 0;}
  .headImg+.title-warp,.title-warp+.headImg{margin-left: 50px;}
  .major-warp{padding: 25px 0;margin-bottom: 15px;margin-top: 0;}
  .major-warp:last-child{margin-bottom: 50px;}
  .major-warp .content-warp{padding: 0 50px;box-sizing: border-box;}
  .major-warp .content-warp .more{right: 50px;font-weight: lighter;}

  @media (max-width: 769px) {
    .row{display: block;}
    .row.major-warp{display: flex;}
    .col-4,.col-6{
      width: 100%;padding-left: 0!important;
    }
    .major-warp{padding: 20px 20px;}
    .title-warp+.headImg{margin-left: 0;}
    .row.major-warp>.col-5{width: 140px;padding: 0;margin: 0 20px;}
    .row.major-warp>.col-5.text-warp{width: 100%;
      flex-direction: column;align-items: start;}
    .major-warp:nth-child(2) .headImg{margin-right: 50px;}

  }
  @media (max-width: 768px) {
    .gonggao{flex-direction: column;justify-items: center;align-items: center;}
    .gonggao .about-img{margin-bottom: 20px;}
    .tongzhi ul li{height: auto;}
  /*  研究方向*/
    .row.major-warp{flex-direction: column;justify-content: center;align-items: center;}
    .row.major-warp .headImg.show-sm{display: inline-block;margin-bottom: 15px;}
    .row.major-warp>.col-5.text-warp{margin:20px 0 0;padding-bottom: 20px;justify-content: center;align-items: center;}
    .major-warp .content-warp .more{right: 0;}
    .row.major-warp .title-warp{text-align: center;}

  }

</style>
