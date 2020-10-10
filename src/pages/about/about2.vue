<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/banner2.jpg" alt="">
      </div>
      <div class="container row">
        <div class="left-part">
          <ul class="tab" id="tab">
            <li>
              <router-link to="about">
                中心简介
              </router-link>
            </li>
            <li>
              <router-link class="active" to="about2">
                发展规划
              </router-link>
            </li>
            <li>
              <router-link to="about3">
                现任领导
              </router-link>
            </li>
            <li>
              <router-link to="about4">
                联系我们
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right-part">
          <p style="margin-top: 0;">
            <strong>组织架构</strong><br>
            <img width="800" src="../../assets/guihua/01.jpg" alt="">
            <br><br>
            <strong>办学定位</strong><br>
            <img width="800" src="../../assets/guihua/02.jpg" alt="">
            <br><br>
            <strong>学科建设</strong><br>
            <img width="800" src="../../assets/guihua/03.jpg" alt="">
            <img width="800" src="../../assets/guihua/04.jpg" alt="">
            <br><br>
            <strong>专业建设</strong><br>
            <img width="800" src="../../assets/guihua/05.jpg" alt="">
            <br><br>
            <strong>教学特色</strong><br>
            <img width="800" src="../../assets/guihua/06.jpg" alt="">

          </p>

        </div>


      </div>


      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../../components/header'
  import footerbar from '../../components/footerbar'
  import mainnavbar from '../../components/mainnavbar'
  import mbnavbar from '../../components/mbnavbar'

  export default {
      name: "about2",
      components:{
        zxHeader,footerbar,mainnavbar,mbnavbar,
      },

    }
</script>

<style scoped>
  ul{margin: 0;}
  strong{margin-bottom: 20px;display: inline-block;}
  img{width: 100%;display: block;}
  .container{
    padding-top: 50px;text-align: left;
    margin-bottom: 35px;
  }
  .left-part{
    width: 250px;
    float: left;
  }
  .right-part{
    width: calc(100% - 250px);
    padding-left: 50px;
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
