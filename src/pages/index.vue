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
              北京师范大学未来设计创新研究中心（以下简称未来设计中心FDC）是成立于2019年11月的研究型实体中心。未来设计中心FDC将工作根植于艺术与科技的交叉领域，通过在人文、艺术、设计、科技、社科等领域广泛的跨界合作，以及研究、教育、实践一体化，形成以学科互补、问题驱动、项目导向为特色的教学，面向基于技术革命的未来生活方式变革和未来设计教育，培养具有精确专业素养、专业前沿视野、综合分析能力和科学人文理念的复合型创新型人才，开发基于实际应用环境的具有国际前沿水准的实验性设计产品，为设计行业的探索性发展提供先驱实践。
            </p>
          </div>
          <strong class="more">> 详情</strong>
        </div>
        <div class="col-6 title-warp content-warp ">
          <div class="title">
            <h2 class="session-title"><span class="lefrborder"></span><router-link to="/about">公告通知</router-link></h2>
          </div>
          <div class="flex content-warp gonggao">
            <img class="about-img" src="../assets/gonggao.jpg" alt="">
            <router-link to="/zhaosheng">
            <div>
              <h2 class="news-title">[招生] 北京师范大学2021年艺术专业硕士（非全日制）研究生招生章程</a></h2>
              <p class="title-en">
                Beijing Normal University MFA (Part-time) Program
               </p>
              <p class="title-en">
                24th, September, 2020
              </p>
            </div>
            <strong class="more"><a href="/zhaosheng">> 详情</a></strong>
		</router-link>
          </div>
        </div>
      </div>
      <div class="mode1 row">
        <div class="news col-4">
          <div class="title">
            <a href=""><h2 class="session-title"><span class="lefrborder"></span>
              <router-link to="/news">新闻动态</router-link></h2></a>
          </div>
          <img class="news-banner" src="../assets/newsbanner.jpg" alt="">

        </div>
        <div class="tongzhi col-6">
          <div class="title show-md">
            <a href=""><h2 class="session-title"><span class="lefrborder"></span></h2></a>
          </div>
          <ul>
            <li class="title-warp news-list">
              <router-link to="/newsDetail">
                <h2 class="news-title">未来设计中心FDC主任高鹏浅谈艺术教育</h2>
                <p class="title-en">
                  9th, September, 2020
                </p>
              </router-link>
            </li>
<!--            <li class="title-warp news-list">-->
<!--              <router-link to="/newsDetail">-->
<!--                <h2 class="news-title">未来设计中心FDC主任高鹏谈艺术教育梦</h2>-->
<!--                <p class="title-en">-->
<!--                  9th, September, 2020-->
<!--                </p>-->
<!--              </router-link>-->
<!--            </li>-->
<!--            <li class="title-warp news-list">-->
<!--              <router-link to="/newsDetail">-->
<!--                <h2 class="news-title">未来设计中心FDC主任高鹏谈艺术教育梦</h2>-->
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
            <h2 class="news-title">未来生活方式</h2>
            <p class="title-en">
              Future Lifestyle
            </p>
          </div>
        </div>
        <div class="col-5 flex content-warp text-warp flex-center">
          <div class="title-warp show-md show-sm">
            <h2 class="news-title">未来生活方式</h2>
            <p class="title-en">
              Future Lifestyle
            </p>
          </div>
            <p>这是一个面向市场、面向新型互联网文化、面向基于新技术变革而形成的未来文化环境和生活方式，进行的实用型产品的设计课程方向的研究。该领域研究体现人文关怀，对接具体产品和功能设计，链接广大文化设计生活应用。</p>
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
“艺术与科技”针对科技在艺术设计领域的应用，涉及AI人工智能设计应用、新媒体交互设计、认知学科等领域，专注于对未来潜在可能性的概念性设计，如展览展示中的机器学习、感知方式对于使用的影响等。          </p>
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
            <h2 class="news-title">未来设计教育</h2>
            <p class="title-en">
              Future Design Education
            </p>
          </div>
        </div>
        <div class="col-5 flex content-warp text-warp flex-center">
          <div class="title-warp show-md show-sm">
            <h2 class="news-title">未来设计教育</h2>
            <p class="title-en">
              Future Design Education
            </p>
          </div>
          <p>
“未来设计教育”是在教育学领域所作的创新研究，是为了培养未来设计所需的新型人才、探讨设计教育的未来发展方向，而准备的系统化、逻辑化，具有教学评估体系的教育研究。 </p>
          <router-link to="yanjiu3"> <strong class="more">> 详情</strong></router-link>
        </div>
      </div>

<!--      <div class="row ">-->
<!--        <div class="col-6 title-warp">-->
<!--          <div class="title ">-->
<!--            <a href=""><h2 class="session-title"><span class="lefrborder"></span>研究方向</h2></a>-->
<!--          </div>-->
<!--          <div class="item-3 major-warp">-->
<!--            <div class="item info">-->
<!--              <img src="../assets/major.jpg" alt="">-->
<!--              <h3>未来生活生产方式</h3>-->
<!--              <p>-->
<!--                面向基于新技术变革而形成的未来文化环境和生活方式的服装、家具、首饰、室内环境、交互设备等具体产品设计。-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="item info">-->
<!--              <img src="../assets/major2.jpg" alt="">-->
<!--              <h3>未来艺术与科技</h3>-->
<!--              <p>-->
<!--                在科技和设计交叉领域的前沿概念性研究。 如在AI人工智能设计应用、新媒体交互设计等领域的实验性、概念性研究。-->
<!--              </p>-->
<!--            </div>-->
<!--            <div class="item info">-->
<!--              <img src="../assets/major3.jpg" alt="">-->
<!--              <h3>未来艺术与设计基础教育</h3>-->
<!--              <p>-->
<!--                透彻了解国际教育体系、环境和发展趋势， 研发出适合中国本土国情的、面向未来文化和技术环境的设计教学的课程框架和教材。-->
<!--              </p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-4 title-warp">-->
<!--          <div class="title ">-->
<!--            <a href=""><h2 class="session-title"><span class="lefrborder"></span>招生就业</h2></a>-->
<!--          </div>-->
<!--          <div class="">-->
<!--            <div class="item-zs">-->
<!--              <p>北京师范大学未来设计创新研究中心</p>-->
<!--              <p>未来设计创新中心</p>-->
<!--              <span>2020.06.11</span>-->
<!--            </div>-->
<!--            <div class="item-zs">-->
<!--              <p>北京师范大学未来设计创新研究中心</p>-->
<!--              <p>未来设计创新中心</p>-->
<!--              <span>2020.06.11</span>-->
<!--            </div>-->
<!--            <div class="item-zs">-->
<!--              <p>北京师范大学未来设计创新研究中心</p>-->
<!--              <p>未来设计创新中心</p>-->
<!--              <span>2020.06.11</span>-->
<!--            </div>-->
<!--            <div class="item-zs">-->
<!--              <p>北京师范大学未来设计创新研究中心</p>-->
<!--              <p>未来设计创新中心</p>-->
<!--              <span>2020.06.11</span>-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="row">-->
<!--        <div class="col-6 title-warp">-->
<!--          <div class="title ">-->
<!--            <a href=""><h2 class="session-title"><span class="lefrborder"></span>合作交流</h2></a>-->
<!--          </div>-->
<!--          <div class="item-3">-->
<!--            <div class="item">-->
<!--              <img src="../assets/hezuo1.jpg" alt="">-->
<!--            </div>-->
<!--            <div class="item">-->
<!--              <img src="../assets/hezuo2.jpg" alt="">-->
<!--            </div>-->
<!--            <div class="item">-->
<!--              <img src="../assets/hezuo3.jpg" alt="">-->
<!--            </div>-->
<!--          </div>-->

<!--        </div>-->
<!--        <div class="col-4 title-warp">-->
<!--          <div class="title ">-->
<!--            <a href=""><h2 class="session-title"><span class="lefrborder"></span>下载中心</h2></a>-->
<!--          </div>-->
<!--          <div class="download">-->
<!--            <a href="">-->
<!--              北京师范大学未来设计研究中心资料-->
<!--              <span>2020.06.11</span>-->
<!--            </a>-->
<!--            <a href="">-->
<!--              北京师范大学未来设计研究中心资料-->
<!--              <span>2020.06.11</span>-->
<!--            </a>-->
<!--            <a href="">-->
<!--              北京师范大学未来设计研究中心资料-->
<!--              <span>2020.06.11</span>-->
<!--            </a>-->
<!--            <a href="">-->
<!--              北京师范大学未来设计研究中心资料-->
<!--              <span>2020.06.11</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
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
    height: 70px;
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
  .gonggao{margin-top: 20px;}
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
  .news-list{padding:10px 20px;background: #eee;}
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
  @media (max-width: 414px) {
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
