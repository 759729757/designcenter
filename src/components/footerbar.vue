<template>
  <div class="footer">
    <div class="row container flex">
<!--      <div>-->
<!--        <img src="../assets/logo.png" alt="">-->
<!--      </div>-->
      <div class="">
        <h4>北京师范大学未来设计创新研究中心</h4>
        <p>广东省珠海市香洲区唐家湾金凤路18号</p>
        <p>邮编：519087</p>
        <p>电话：0756-3683973</p>
        <p>邮箱：fdc@bnu.edu.cn</p>
      </div>
      <div class="" style="margin-left: 50px;">
        <h4>
          Future Design Center,Beijing Normal University
        </h4>
        <p>
          Add: 18# of Jinfeng Road, Zhuhai City, Guangdong Province, <br> 519087, P. R. China
        </p>
        <p>Tel: 86-756-3683973</p>
        <p>E-mail: fdc@bnu.edu.cn</p>
      </div>
      <div class="qrcode-warp">
        <span style="text-align: center;">
        <img style="width: 100px;vertical-align: text-top;margin-bottom: 10px;" src="../assets/gongzhong.jpg" alt="">
               <br> 微信公众号
         </span>
        <span style="text-align: center;margin-left: 25px;">
        <img style="width: 100px;vertical-align: text-top;margin-bottom: 10px;" src="../assets/weibo.png" alt="">
          <br> 官方微博
          </span>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "footerbar"
    }
</script>

<style scoped>
  .footer{
    background: #004a9d;
    color: white;
    font-family: 微软雅黑;
    padding: 40px 0;
  }
  .footer .container{

  }
  .footer .container p{
    font-size: 14px;
    margin: 10px 0;color: #fff;
  }
  h4{margin-bottom: 10px;}
  .qrcode-warp{margin: 25px;display: flex;margin-left: auto;margin-right: 0;float: right;}
  @media (max-width: 769px) {
    .footer .container{
      flex-direction: column;
      align-items: center;
    }
    .footer .container>div{
      margin: 10px 0;
    }
  }
  @media (max-width: 768px) {
    .qrcode-warp{
      float: none;margin: 0;
    }
  }


</style>
         
