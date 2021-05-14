<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner.jpg" alt="">
      </div>
      <div class="container flex">
        <div class="news-warp ">
          <a target="_blank" href="https://mp.weixin.qq.com/s?__biz=MzkyMDEyNzU5Mw==&mid=2247485478&idx=1&sn=19b1de54ee1e064248b5f68bcf74c3f3&chksm=c196d920f6e15036085b63271e22ddea9d5cf358396f88ad40aff36eda51befda428062b30a5&token=1067240805&lang=zh_CN#rd">
            <img class="news-img" src="../assets/news/gonggao3.jpg" alt="">
          </a>
        </div>
        <div class="news-warp ">
          <router-link to="/noticeDetail?notice=2">
            <img class="news-img" src="../assets/gongao0323.jpg" alt="">
          </router-link>
        </div>
        <div class="news-warp ">
          <router-link to="noticeDetail?notice=1">
            <img class="news-img" src="../assets/gongao0304.jpg" alt="">
          </router-link>
        </div>
        <div class="news-warp ">
          <router-link to="/seedfund">
            <img class="news-img" src="../assets/gonggao.jpg" alt="">
          </router-link>
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
.container{
  padding: 50px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.news-img{width: 300px;}
.news-warp{margin-bottom: 50px;position: relative;width: 33.33%;text-align: center;transition: all .3s;}
.news-warp img:hover{
  box-shadow: 0 0 5px 5px #ccc;
}
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
