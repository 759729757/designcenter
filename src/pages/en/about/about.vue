<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../../assets/banner2.jpg" alt="">
      </div>
      <div class="container row">
        <div class="left-part">
          <ul class="tab" id="tab">
            <li>
              <router-link class="active" to="enabout">
                Introduction
              </router-link>
            </li>
            <li>
              <router-link to="enabout2">
                Development Plan
              </router-link>
            </li>
            <li>
              <router-link to="enabout3">
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
          <div class="heading">
            <p>
              Beijing Normal University Future Design Center (FDC) is a research-based center established in November 2019. Grounded at the cross-disciplinary research in art and technology, FDC fosters an integrated practice of research, education and practice through collaboration across humanities, art, design, technology, and social sciences. It provides problem-driven and project-oriented education within complementary disciplines. With three research directions - Future Lifestyle, Future Art and Technology, Future Design Education, FDC aims to equip talents with professional literacy, cutting-edge vision, analytical skills, and scientific and humanistic concepts, and develop experimental products for practical environment with international advanced standards.
              <br><br>
              <img src="../../../assets/yuanbai.png" style="width: 100%;" alt="">
            </p>


          </div>
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
  export default {
      name: "about",
      components:{
        zxHeader,footerbar,mainnavbar,mbnavbar
      },

    }
</script>

<style scoped>
  ul{margin: 0;}
.banner img{
  width: 100%;display: block;
}
.tab .tab-header{
  background: rgb(29, 76, 144);
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 20px;height: 80px;line-height: 80px;
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

.heading h3 {
  text-align: center;
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
  padding: 0 0 25px 25px;
  text-align: left;
  line-height: 25px;
  font-family: "Microsoft YaHei UI";
  font-size: 14px;
  display: block;
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
  .tab.fixed{
    position: fixed;
    width: 250px;
    top: 60px;
  }
  .container{
    padding-top: 50px;
  }
  @media (max-width: 769px) {
    .left-part{width: 120px;}
    .heading p{padding-left: 0;}
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
