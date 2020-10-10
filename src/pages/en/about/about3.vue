<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img v-if="$route.path == '/enabout3'" src="../../../assets/gaopeng.jpg" alt="">
        <img v-else src="../../../assets/banner2.jpg" alt="">
      </div>
      <div class="container row">
        <div class="left-part">
          <ul class="tab" id="tab">
            <li>
              <router-link to="enabout">
                Introduction
              </router-link>
            </li>
            <li>
              <router-link to="enabout2">
                Development Plan
              </router-link>
            </li>
            <li>
              <router-link class="active" to="enabout3">
                Leadership
              </router-link>
            </li>
            <li>
              <router-link to="enabout4">
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right-part">

          <gaopeng></gaopeng>

        </div>


      </div>

      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../../../encomponents/header'
  import footerbar from '../../../encomponents/footerbar'
  import mainnavbar from '../../../encomponents/mainnavbar'
  import mbnavbar from '../../../encomponents/mbnavbar'
  import gaopeng from '../../../encomponents/weiyuan/gaopeng'

  export default {
      name: "about3",
      components:{
        zxHeader,footerbar,mainnavbar,mbnavbar,gaopeng
      },
      mounted() {
        // console.log(this.$route.path)
      }

  }
</script>

<style scoped>
  ul{margin: 0;}
  .container{
    padding-top: 50px;
  }
  .left-part{
    width: 250px;
    float: left;
  }
  .right-part{
    width: calc(100% - 250px);
    padding-left: 50px;
    margin-bottom: 50px;
    box-sizing: border-box;
    float: right;
  }
  .tab li a{
    padding: 15px 20px 15px 30px;
    text-align: left;
    font-size: 16px;
    display: block;
    background: #eee;
    font-family: "Microsoft YaHei";
    font-weight: bold;
  }
  .tab li a.active{
    color: #004a9d;
    font-weight: bold;
    border-right-width: 6px;
    border-right-style: solid;
  }
  .banner img{
    width: 100%;display: block;
  }

.container{text-align: left;}


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
  font-family: "Microsoft YaHei UI";
  font-size: 14px;
  display: block;
}
  @media (max-width: 769px) {
    .left-part{width: 120px;}
    .right-part{width: calc(100% - 120px);margin-bottom: 50px;}
  }
  @media (max-width: 768px) {
    .left-part{
      display: none;
    }
    .right-part{
      width: 100%;padding-left: 0;
    }
  }

</style>
