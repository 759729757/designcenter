<template>
  <div class="header">
     <div class="container ">
       <div class="logo">
         <a href="index.html">
           <img src="../assets/logo.svg" width="250">
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
}
  .header .container{
    height: 137px;padding: 20px;box-sizing: border-box;
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
    padding: 15px 0;
  }
  .header .container img{
    width: 150px;position: relative;z-index: 999;
  }

}

</style>
