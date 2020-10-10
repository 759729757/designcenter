<template>
    <div>
<!--      <div class="articleTitle borderBot">-->
<!--        <h2>{{name||'下载专区'}}</h2>-->
<!--      </div>-->

      <aside class="con_list01">
        <div class="title01 noBg">
          <h2>正高级</h2>
        </div>
        <ul class="list_con01">
          <li><span><a href="zgj/54760.html">郭小娟</a></span></li>
          <li><span><a href="zgj/98697.html">黄华</a></span></li>
          <li><span><a href="zgj/552.html">骆祖莹</a></span></li>
          <li><span><a href="zgj/553.html">宋继华</a></span></li>
          <li><span><a href="zgj/554.html">孙　波</a></span></li>
          <li><span><a href="zgj/97254.html">王川</a></span></li>
          <li><span><a href="zgj/54761.html">王醒策</a></span></li>
          <li><span><a href="zgj/78182.html">王胜灵</a></span></li>
          <li><span><a href="zgj/555.html">邬　霞</a></span></li>
          <li><span><a href="zgj/556.html">武仲科</a></span></li>
          <li><span><a href="zgj/15972.html">姚　力</a></span></li>
          <li><span><a href="zgj/558.html">余先川</a></span></li>
          <li><span><a href="zgj/559.html">曾文艺</a></span></li>
          <li><span><a href="zgj/560.html">张家才</a></span></li>
          <li><span><a href="zgj/16911.html">张立保</a></span></li>
          <li><span><a href="zgj/561.html">张钟军</a></span></li>
          <li><span><a href="zgj/563.html">周明全</a></span></li>
          <li><span><a href="zgj/4078.html">赵小杰</a></span></li>
          <li><span><a href="zgj/562.html">赵小杰</a></span></li>
          <li><span><a href="zgj/564.html">朱小明</a></span></li>
        </ul>
      </aside>

      <aside class="con_list01">
        <div class="title01 noBg">
          <h2>正高级</h2>
        </div>
        <ul class="list_con01">
          <li><span><a href="zgj/548.html">别荣芳</a></span></li>
          <li><span><a href="zgj/549.html">党德鹏</a></span></li>
          <li><span><a href="zgj/4077.html">段福庆</a></span></li>
          <li><span><a href="zgj/550.html">冯　速</a></span></li>
          <li><span><a href="zgj/54760.html">郭小娟</a></span></li>
          <li><span><a href="zgj/98697.html">黄华</a></span></li>
          <li><span><a href="zgj/552.html">骆祖莹</a></span></li>
          <li><span><a href="zgj/15972.html">姚　力</a></span></li>
          <li><span><a href="zgj/558.html">余先川</a></span></li>
          <li><span><a href="zgj/559.html">曾文艺</a></span></li>
          <li><span><a href="zgj/560.html">张家才</a></span></li>
          <li><span><a href="zgj/16911.html">张立保</a></span></li>
          <li><span><a href="zgj/561.html">张钟军</a></span></li>
          <li><span><a href="zgj/563.html">周明全</a></span></li>
          <li><span><a href="zgj/4078.html">赵小杰</a></span></li>
          <li><span><a href="zgj/562.html">张钟军</a></span></li>
          <li><span><a href="zgj/564.html">朱小明</a></span></li>
        </ul>
      </aside>

      <aside class="con_list01">
        <div class="title01 noBg">
          <h2>中级</h2>
        </div>
        <ul class="list_con01">
          <li><span><a href="zgj/548.html">别荣芳</a></span></li>
          <li><span><a href="zgj/549.html">党德鹏</a></span></li>
          <li><span><a href="zgj/4077.html">段福庆</a></span></li>
          <li><span><a href="zgj/550.html">冯　速</a></span></li>
          <li><span><a href="zgj/54760.html">郭小娟</a></span></li>
          <li><span><a href="zgj/98697.html">黄华</a></span></li>
          <li><span><a href="zgj/552.html">骆祖莹</a></span></li>
          <li><span><a href="zgj/4078.html">赵小杰</a></span></li>
          <li><span><a href="zgj/562.html">张钟军</a></span></li>
          <li><span><a href="zgj/564.html">朱小明</a></span></li>
        </ul>
      </aside>

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
  .title01 h2 {
    width: 97px;
    height: 36px;
    color: rgb(68, 68, 68);
    line-height: 36px;
    padding-left: 43px;
    font-size: 19px;
    font-weight: normal;
  }
  .con_list01 .title01 h2 {
    padding: 0px 10px 0px 0px;
    width: 180px;
    color: rgb(0, 91, 172);
    font-size: 18px;
    background-image: none;
  }
  .list_con01 {
    padding: 8px 0px;
    width: 100%;
    overflow: hidden;
    border-bottom-color: rgb(204, 204, 204);
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  .list_con01 li {
    width: 20%;
    font-size: 13px;
    float: left;
  }
  .list_con01 li span {
    padding: 10px 7px 10px 20px;
    display: block;
    position: relative;
  }
  .list_con01 li span::before {
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


</style>
