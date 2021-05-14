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

              <router-link class="active" to="about">
                中心简介
              </router-link>
            </li>
            <li>
              <router-link to="about2">
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
          <div class="heading">
            <p>
              北京师范大学未来设计创新研究中心（以下简称未来设计中心FDC）是成立于2019年11月的研究型实体中心，并担任筹建北京师范大学未来设计学院的工作，学院有望在2021年上半年正式成立。未来设计中心FDC将工作根植于艺术与科技的交叉领域，通过在人文、艺术、设计、科技、社科等领域广泛的跨界合作，以及研究、教育、实践一体化，形成以学科互补、问题驱动、项目导向为特色的教学，设立未来设计，艺术与科技，设计与教育三个研究方向，培养具有精确专业素养、专业前沿视野、综合分析能力和科学人文理念的复合型创新型人才，开发基于实际应用环境的具有国际前沿水准的实验性设计产品，为设计行业的探索性发展提供先驱实践。 
              <br><br>
              <img src="../../assets/yuanbai.png" style="width: 100%;" alt="">
            </p>


          </div>
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
  padding: 0 0 25px 25px;
  text-align: left;
  text-transform: uppercase;
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
