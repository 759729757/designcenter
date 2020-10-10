<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/banner2.jpg" alt="">
      </div>
      <div class="container">
        <list></list>
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


</style>
