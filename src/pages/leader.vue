<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/gaopeng.jpg" alt="">
      </div>
      <div class="container teacher-warp row">
        <gaopeng></gaopeng>
      </div>
      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../components/header'
  import footerbar from '../components/footerbar'
  import mainnavbar from '../components/mainnavbar'
  import user from '../components/user'
  import mbnavbar from '../components/mbnavbar'
  import gaopeng from '../components/weiyuan/gaopeng'

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
