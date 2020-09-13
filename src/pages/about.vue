<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../assets/banner2.jpg" alt="">
      </div>
      <div class="container row">
<!--        <div class="col-3">-->
<!--          <ul class="tab" id="tab">-->
<!--            <li class="tab-header">-->
<!--              中心简介-->
<!--            </li>-->
<!--            <li>-->
<!--              <a class="active" href="">院长致辞</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="">学院简介</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="">组织机构</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="">学术机构</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="">师资队伍</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
        <div class="">
          <div class="heading">
            <h3>中心简介</h3>

            <p>
              北京师范大学未来设计创新研究中心（以下简称未来设计中心FDC）是成立于2019年11月的研究型实体中心。未来设计中心FDC将工作根植于艺术与科技的交叉领域，通过在人文、艺术、设计、科技、社科等领域广泛的跨界合作，以及研究、教育、实践一体化，形成以学科互补、问题驱动、项目导向为特色的教学，面向基于技术革命的未来生活方式变革和未来设计教育，培养具有精确专业素养、专业前沿视野、综合分析能力和科学人文理念的复合型创新型人才，开发基于实际应用环境的具有国际前沿水准的实验性设计产品，为设计行业的探索性发展提供先驱实践。
            </p>

          </div>
        </div>
      </div>


      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../components/header'
  import footerbar from '../components/footerbar'
  import mainnavbar from '../components/mainnavbar'
  import mbnavbar from '../components/mbnavbar'
  export default {
      name: "about",
      components:{
        zxHeader,footerbar,mainnavbar,mbnavbar
      },

    }
</script>

<style scoped>
.banner img{
  width: 100%;
}
.col-7{
  float: right;
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
.col-3{
  padding-right: 40px;box-sizing: border-box;
}
  .tab.fixed{
    position: fixed;
    width: 290px;
    top: 60px;
  }
@media (max-width: 1100px) {
  .tab.fixed{
    width: calc(27% - 40px);
  }
}
@media (max-width: 414px) {
  .col-3{
    display: none;
  }
  .col-7{
    width: 100%;
  }
}

</style>
