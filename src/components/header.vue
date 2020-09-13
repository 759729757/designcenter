<template>
  <div class="header">
     <div class="container ">
       <div class="logo">
         <a href="index.html">
           <img src="../assets/logo.png">
         </a>
       </div>
     </div>
  </div>
</template>

<script>
    export default {
        name: "zxheader"
    }
</script>

<style scoped>
.header{
  width: 100%;
  background-position: center;
  background-color: #004a9d;
  /*background-image: url("https://ai.bnu.edu.cn/images/gaiban/top_bg_01.png");*/
}
  .header .container{
    height: 110px;padding: 20px;box-sizing: border-box;
  }
  @media (max-width: 769px) {
    .logo{
      text-align: center;
    }
  }

@media (max-width: 414px) {
  .nav{
    display: none;
  }
  .header .container{
    height: 90px;
    padding: 4%;
  }
  .header .container img{
    width: 65%;
  }

}

</style>
