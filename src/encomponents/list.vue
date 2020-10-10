<template>
    <div>
      <div class="articleTitle borderBot">
        <h2>{{name||'下载专区'}}</h2>
      </div>

      <ul class="list01">
        <li>
          <router-link to="detail">人工智能学院科研仪器设备用款申请审核单（总价20万元以下）</router-link><span class="rightDate">2019-10-23</span></li>
        <li>
          <router-link to="detail">北京师范大学科研仪器设备用款申请审核单（总价20万元及以上）</router-link><span class="rightDate">2017-04-14</span></li>
        <li>
          <router-link to="detail">信息学院科研仪器设备采购实施细则</router-link><span class="rightDate">2017-04-14</span></li>
        <li>
          <router-link to="detail">北京师范大学科研仪器设备采购实施细则</router-link><span class="rightDate">2017-04-14</span></li>
        <li>
          <router-link to="detail">北京师范大学比价采购报告</router-link><span class="rightDate">2019-10-23</span></li>
        <li>
          <router-link to="detail">在职研究生调剂申请表下载</router-link><span class="rightDate">2015-04-15</span></li>
        <li>
          <router-link to="detail">本科生重修免听选课申请表</router-link><span class="rightDate">2015-04-15</span></li>
        <li>
          <router-link to="detail">本科生跨年级、跨专业选课申请表</router-link><span class="rightDate">2015-04-15</span></li>
        <li><router-link to="detail">北京师范大学课程调整申报表</router-link><span class="rightDate">2015-04-15</span></li>

      </ul>
    </div>
</template>

<script>
    export default {
      name: "list",
      props:['name'],
      data(){
        return{

        }
      },

    }
</script>

<style scoped>
  .borderBot {
    border-bottom-color: rgb(0, 91, 172);
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  .articleTitle h2 {
    padding: 20px 15px;
    width: 98%;
    overflow: hidden;
    font-size: 20px;
    font-weight: normal;
    family: Arial;
    margin: 0;
  }
  .borderBot h2 {
    height: 25px;
    color: rgb(1, 72, 136);
    line-height: 25px;
  }
  .list01 {
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    margin-top: 10px;
    padding: 0;
    margin-bottom: 50px;
  }
  .list01 li {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .list01 li::before {
    border-radius: 50%;
    left: 0px;
    top: 50%;
    width: 4px;
    height: 4px;
    margin-top: -2px;
    display: block;
    position: absolute;
    content: "";
    background-color: rgb(0, 55, 112);
  }
  .list01 li a {
    padding: 10px 0px 10px 20px;
    width: 83%;
    color: rgb(40, 40, 40);
    line-height: 25px;
    font-family: "Microsoft YaHei UI";
    font-size: 14px;
    float: left;
    display: block;
  }
  .rightDate {
    width: 100px;
    text-align: right;
    padding-top: 10px;
    float: right;
  }



</style>
