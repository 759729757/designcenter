<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/gaopeng.jpg" alt="">
      </div>
      <div class="container teacher-warp row">
        <gaopeng></gaopeng>
      </div>
      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../../encomponents/header'
  import footerbar from '../../encomponents/footerbar'
  import mainnavbar from '../../encomponents/mainnavbar'
  import user from '../../encomponents/user'
  import mbnavbar from '../../encomponents/mbnavbar'
  import gaopeng from '../../encomponents/weiyuan/gaopeng'

    export default {
        name: "about",
      components:{
        zxHeader,footerbar,mainnavbar,user,mbnavbar,gaopeng
      }
    }
</script>

<style scoped>
.banner img{
  width: 100%;
}
.teacher-warp{
  margin-bottom: 80px;
}

</style>
