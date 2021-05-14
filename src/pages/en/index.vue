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
                src="../../assets/banner.jpg" alt=""  />
          </a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="container">
      <div class="row">
        <div class="title-warp col-4 content-warp">
          <div class="title">
            <h2 class="session-title"><span class="lefrborder"></span><router-link to="/enabout">About FDC</router-link></h2>
          </div>
          <div class="dd-content">
            <p>
              Beijing Normal University Future Design Center (FDC) is a research-based center established in November 2019 and it carries out the preparation for the establishment of Future Design School (FDS) of Beijing Normal University estimated in early 2021. Grounded at the cross-disciplinary research in design, technology and education, FDC fosters an integrated practice of research, education and practice through collaboration across humanities, arts, design, technology, and social sciences, and provides problem-driven and project-oriented education within complementary disciplines. It covers three research directions:
              <strong>Future Design, Art and Technology, Design and Education.</strong>FDC aims to equip innovative talents with comprehensive analytical skills, cutting-edge vision, professional literacy and scientific and humanistic concepts. With the goal of providing pioneering and exploration practices for design industry, FDC also focuses on the design and development of experimental products applied in practical environment with international advanced standards.
            </p>
          </div>
          <router-link to="/enabout"><strong class="more">> More</strong></router-link>
        </div>
        <div class="col-6 title-warp content-warp ">
          <div class="title">
            <h2 class="session-title"><span class="lefrborder"></span>
              <router-link to="/enabout">Announcement</router-link></h2>
          </div>
          <div class="flex content-warp gonggao">
            <img class="about-img" src="../../assets/engonggao.jpg" alt="">
            <router-link to="/enseedfund">
            <div>
              <h2 class="news-title">Beijing Normal University “Future Design Seed Fund” <br> Shortlist Announced </h2>
<!--              <p class="title-en">-->
<!--                [招生] 北京师范大学2021年艺术专业硕士（非全日制）研究生招生章程-->
<!--               </p>-->
              <p class="title-en">
                16th, Mar, 2021
              </p>
            </div>
            <router-link to="/enseedfund"><strong class="more">> More</strong></router-link>
	  	</router-link>
          </div>
        </div>
      </div>
      <div class="mode1 row">
        <div class="news col-4">
          <div class="title">
            <a href="">
              <h2 class="session-title"><span class="lefrborder"></span>
              <router-link to="/ennews">News</router-link></h2></a>
          </div>
          <img class="news-banner" src="../../assets/news/en6-1.jpg" alt="">

        </div>
        <div class="tongzhi col-6">
          <div class="title show-md show-lg">
            <a href=""><h2 class="session-title"><span class="lefrborder"></span></h2></a>
          </div>
          <ul>
            <li class="title-warp news-list">
              <router-link to="/ennewsDetail?news=6">
                <h2 class="news-title">
                  FUTURE DESIGN EDUCATION LAB Was Jointly Established by Beijing Normal University Future Design Center and Lenovo
                </h2>
                <p class="title-en">
                  16th, Apri, 2021
                </p>
              </router-link>
            </li>
            <li class="title-warp news-list">
              <router-link to="/ennewsDetail?news=5">
                <h2 class="news-title">
                  Relocation Plan of 2021 Fine Arts (Art Design) Program of School of Arts and Communication, Beijing Normal University
                </h2>
                <p class="title-en">
                  15th, Mar, 2021
                </p>
              </router-link>
            </li>
<!--            <li class="title-warp news-list">-->
<!--              <router-link to="/ennewsDetail?news=4">-->
<!--                <h2 class="news-title">-->
<!--                  FDC Experts Engaged in Academic Activities in Zhuhai <br>-->
<!--                  Boosting the Development of Design Education in the Greater Bay Area-->
<!--                </h2>-->
<!--                <p class="title-en">-->
<!--                  1st, Apri, 2021-->
<!--                </p>-->
<!--              </router-link>-->
<!--            </li>-->
          </ul>
        </div>
      </div>
<!--      视频文件 -->
      <div class="row">
        <img class="videoPoster" src="../../assets/indexbanner_bottom.jpg" alt="">
      </div>
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
  import mbnavbar from '../../encomponents/mbnavbar'

  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "enindex",
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
    background-image: url("../../assets/aline.jpg");
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
