<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img v-if="person=='gaopeng'" src="../../assets/tgaopeng.jpg" alt="">
        <img v-else-if="person=='tanping'" src="../../assets/ttanping.jpg" alt="">
        <img v-else-if="person=='wangmin'" src="../../assets/twangmin.jpg" alt="">
        <img v-else-if="person=='xuping'" src="../../assets/txuping.jpg" alt="">
        <img v-else-if="person=='tony'" src="../../assets/tbulang.jpg" alt="">
        <img v-else-if="person=='liqi'" src="../../assets/tliqi.jpg" alt="">
        <img v-else-if="person=='yejingtian'" src="../../assets/tjingtian.jpg" alt="">
        <img v-else-if="person=='miri'" src="../../assets/tmiri.jpg" alt="">
        <img v-else src="../../assets/banner3.jpg" alt="">
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
  import zxHeader from '../../encomponents/header'
  import footerbar from '../../encomponents/footerbar'
  import mainnavbar from '../../encomponents/mainnavbar'
  import list from '../../encomponents/list'
  import mbnavbar from '../../encomponents/mbnavbar'

  import tanping from '../../encomponents/teachers/tanping'
  import gaopeng from '../../encomponents/teachers/gaopeng'
  import wangmin from '../../encomponents/teachers/wangmin'
  import xuping from '../../encomponents/teachers/xuping'
  import tony from '../../encomponents/teachers/tony'
  import liqi from '../../encomponents/teachers/liqi'
  import miri from '../../encomponents/teachers/miri'
  import yejingtian from '../../encomponents/teachers/yejingtian'


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
        window.scrollTo(0,0);

      }
  }
</script>

<style scoped>
.banner img{
  width: 100%;
}
p{line-height: 26px;}
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
