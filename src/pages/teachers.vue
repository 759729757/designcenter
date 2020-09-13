<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner2.jpg" alt="">
      </div>
      <div class="container teacher-warp row">
        <user :name="'师资力量'"></user>
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

    export default {
        name: "about",
      components:{
        zxHeader,footerbar,mainnavbar,user,mbnavbar
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
.tab .tab-header{
  background: rgb(29, 76, 144);
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 20px;height: 80px;line-height: 80px;
}
.tab li a{
  padding: 15px 20px 15px 10px;
  text-align: center;
  font-size: 16px;
  display: block;background: rgb(249, 249, 249);
  border: 1px solid rgb(204, 204, 204);
  border-top: none;
}
.tab li a.active{
  color: rgb(0, 55, 112);
  font-weight: bold;
  border-bottom-color: rgb(29, 76, 144);
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.heading {
  margin: 20px 0px;
}
.heading h3 {
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
  padding-bottom: 25px;
  font-family: "Microsoft YaHei UI";
  font-size: 24px;
  margin-bottom: 10px;
  vertical-align: middle;
  border-bottom-color: rgb(239, 239, 238);
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.heading p {
  margin: 0;
  padding: 0px 25px 25px;
  text-align: left;
  color: rgb(102, 102, 102);
  text-transform: uppercase;
  line-height: 25px;
  text-indent: 2em;
  font-family: "Microsoft YaHei UI";
  font-size: 14px;
  display: block;
}
.col-3+.col-7{
  padding-left: 40px;box-sizing: border-box;
}

</style>
