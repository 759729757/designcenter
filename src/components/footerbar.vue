<template>
  <div class="footer">
    <div class="row container">
<!--      <div>-->
<!--        <img src="../assets/logo.png" alt="">-->
<!--      </div>-->
      <div class="col-5">
        <h4>北京师范大学未来设计创新研究中心</h4>
        <p>Future Design Center, Beijing Normal University</p>
      </div>
      <div class="col-5">
        <h4>
          广东省珠海市唐家湾金凤路18号
        </h4>
        <p>
          18# of Jinfeng Road, Zhuhai City, Guangdong Province， P. R. China
        </p>
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

  @media (max-width: 769px) {
    .footer .container{
      flex-direction: column;
      align-items: center;
    }
    .footer .container>div{
      margin: 10px 0;
    }
  }


</style>
