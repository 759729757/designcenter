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
              <h3 class="news-title">北京师范大学“未来设计种子基金”初评入围名单公布</h3>
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
