<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner3.jpg" alt="">
      </div>
<!--      内容-->
      <div style="margin: 50px 0;">
        <tanping v-if="person=='tanping'"></tanping>
        <gaopeng v-if="person=='gaopeng'"></gaopeng>
        <wangmin v-if="person=='wangmin'"></wangmin>
        <xuping v-if="person=='xuping'"></xuping>
        <tony v-if="person=='tony'"></tony>
        <liqi v-if="person=='liqi'"></liqi>
        <miri v-if="person=='miri'"></miri>
        <yejingtian v-if="person=='yejingtian'"></yejingtian>
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

  import tanping from '../components/tanping'
  import gaopeng from '../components/gaopeng'
  import wangmin from '../components/wangmin'
  import xuping from '../components/xuping'
  import tony from '../components/tony'
  import liqi from '../components/liqi'
  import miri from '../components/miri'
  import yejingtian from '../components/yejingtian'


  export default {
      name: "about",
      components:{
        zxHeader,footerbar,mainnavbar,list,mbnavbar,
        yejingtian,miri,liqi,tony,xuping,wangmin,gaopeng,tanping
      },
      computed:{
        person(){
          return this.$route.query.person
        }
      },
      created() {
        console.log(this.person)

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
