<template>
  <div class="header">
     <div class="container ">
       <div class="logo">
         <router-link to="/">
           <img src="../assets/logo.svg" width="250">
         </router-link>
       </div>
       <router-link class="version" to="/en">
         English
       </router-link>
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
    height: 137px;padding: 20px;box-sizing: border-box;position: relative;
  }
  .version{
    color: #eee;z-index: 999;
    position: absolute;right: 0;top: 10px;
  }
  @media (max-width: 769px) {
    .logo{
      text-align: center;
    }
    .version{
      font-size: 12px;
    }
  }

@media (max-width: 768px) {
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
