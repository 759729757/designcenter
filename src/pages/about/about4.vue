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
              <router-link to="about2">
                发展规划
              </router-link>
            </li>
            <li>
              <router-link to="about2">
                现任领导
              </router-link>
            </li>
            <li>
              <router-link class="active" to="about4">
                联系我们
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right-part">
          <div class="heading">
            <strong> 北京师范大学未来设计创新研究中心 </strong>
              <br><br>地址：广东省珠海市香洲区唐家湾金凤路18号
              <br><br>邮政编码：519087
              <br><br>电话：86-756-3683973
              <br><br>邮箱：fdc@bnu.edu.cn


			 <br><br><strong>Future Design Center,Beijing Normal University </strong>
		  <br><br>Add: 18# of Jinfeng Road, Zhuhai City, Guangdong Province, 519087, P. R. China
	      <br><br>Tel: 86-756-3683973
		  <br><br>E-mail: fdc@bnu.edu.cn
		  <br><br>
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
  import {BaiduMap, BmGeolocation, BmScale,BmInfoWindow } from "vue-baidu-map";

  export default {
      name: "about2",
      components:{
        zxHeader,footerbar,mainnavbar,mbnavbar,
        BaiduMap,
        BmGeolocation,
        BmScale,
        BmInfoWindow
      },
    data(){
        return{
          map:{
            center: {lng: 113.545681,lat:22.357938},//'元白楼',113.545681,22.357938
            zoom: 18,
            width:'1000px',
            height:'710px'
          },
          infoWindow: {
            lng: 0,
            lat: 0,
            show: false,
            center: {lng: 113.545681,lat:22.357938},//'元白楼',113.545681,22.357938
            info:{
              air: 0,
              area: 12313,
              areaEnergy: 0.64,
              code: "440300A055",
              energy: 7922.66,
              lat: "22.357938",
              lng: "113.545681",
              name: "市人民检察院",
              water: 0
            },
          },

        }
    },
    methods:{
      // 地图初始化回调
      map_handler({ BMap, map }) {
        this.BMap = BMap
        this.map = map

        // this.map.addEventListener('click', (e) => {
        //   const point = new this.BMap.Point(e.point.lng, e.point.lat)
        //   const marker = new this.BMap.Marker(point) // 设置点击位置
        //   map.clearOverlays() // 清空地图上其他红色位置标识
        //   map.addOverlay(marker)  // 添加指定点
        // })
      },

    },
    mounted() {

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
.heading p {
  margin: 0;
  padding: 0px 25px 25px;
  text-align: left;
  color: rgb(102, 102, 102);
  line-height: 25px;
  font-family: "Microsoft YaHei UI";
  font-size: 14px;
  display: block;
}
.baidu-map{
  width: 100%;height: 320px;margin: 50px 0;
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
