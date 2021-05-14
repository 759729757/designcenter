<template>
  <div>
    <div class="mbnav mb-only">
      <div >
        <img class="menu" src="../assets/menu.png" alt="">
        <img class="close" src="../assets/close.png" alt="">
      </div>
      <div class=" mb-only">
        <ul class=" mbnavbar" id="mbnavbar">
          <li>
            <router-link to="/en">Home</router-link>
          </li>
          <li>
            About FDC
            <div class="subNav">
              <dl>
                <dd>
                  <router-link to="/enabout">Introduction</router-link>
                </dd>
                <dd>
                  <router-link to="/enabout2">Development Plan</router-link>
                </dd>
                <dd>
                  <router-link to="/enabout3">Leadership</router-link>
                </dd>
                <dd>
                  <router-link to="/enabout4">Contact Us</router-link>
                </dd>
              </dl>
            </div>
          </li>
          <li>
            <router-link to="/enweiyuan">Academic Committee</router-link>
          </li>
          <li>
            Research Direction
            <div class="subNav">
              <dl>
                <dd>
                  <router-link to="/enyanjiu1">Future Design</router-link>
                </dd>
                <dd>
                  <router-link to="/enyanjiu2">Art and Technology</router-link>
                </dd>
                <dd>
                  <router-link to="/enyanjiu3">Design and Education</router-link>
                </dd>
              </dl>
            </div>
          </li>
          <li>
            <router-link to="/enteachers">Faculty</router-link>
          </li>
          <li>
            <router-link to="/ennews">News</router-link>
          </li>
          <li>
            <router-link to="/enzhaopin">Job Recruitment</router-link>
          </li>
          <li>
            <router-link to="/enzhaosheng">Admission</router-link>
          </li>
          <li >
            <router-link to="/enseedfund">Seed Fund</router-link>
          </li>
        </ul>
      </div>

    </div>
    <div class="nav-cover"></div>
  </div>

</template>

<script>
  export default {
    name: "mainnavbar",
    methods: {
      handleScoll() {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top > 110) {
          document.getElementById('nav') && document.getElementById('nav').classList.add('fixed')
        } else {
          document.getElementById('nav') && document.getElementById('nav').classList.remove('fixed')
        }
        //固定 tab
        // if (top > 440) {
        //   document.getElementById('tab') && document.getElementById('tab').classList.add('fixed')
        // } else {
        //   document.getElementById('tab') && document.getElementById('tab').classList.remove('fixed')
        // }

      },
    },
    mounted() {
      this.$nextTick(() => {
        this.handleScoll();
        addEventListener('scroll', this.handleScoll);
      });

      $('.menu').click(function () {
        $('.mbnav').addClass('active');
        $('.close').show('fast');
      })
      $('.close').click(function () {
        $('.close').hide('fast');
        $('.mbnav').removeClass('active');
      })
    },
    destroyed() {
      removeEventListener('scroll', this.handleScoll);
    }
  }
</script>

<style scoped>
  .mbnav {
    background: #00499E;
    width: 100%;
    height: 45px;
    line-height: 45px;
    z-index: 888;
    position: fixed;
    left: 0;
    top: 0;
  }
  /*占位符，撑起高度*/
  /*.nav-cover{height: 45px;}*/
  .mbnav .mbnavbar{
    transition: all .5s;
    transform-origin: top;
    transform: scaleY(0);
    height: 0;
  }
  .mbnav.active .mbnavbar{
    transform: scaleY(1);
    height: auto;
  }
  .mbnav ul {
    margin: 0px auto;
    max-width: 1030px;
    padding: 60px 0;
    background: #0e2f76;
    position: relative;
    z-index: 10;
  }

  .mbnav ul li {
    color: white;
    margin: 0 5%;
    padding: 0px 32px;
    text-align: left;
    line-height: 45px;
    position: relative;
    border-bottom: 1px solid rgba(255,255,2555,.23);
  }

  .mbnav ul li a {
    color: rgb(255, 255, 255);
    font-size: 16px;
    display: block;
    cursor: pointer;
  }


  .subNav {
    transition: all .35s;
    transform-origin: top;
    white-space: nowrap;
    transform: scaleY(0);
    height: 0;
    overflow: hidden;
    bottom: 0;
    left: 0;
  }

  .subNav dd {
    margin: 0 20px;
  }
  .mbnavbar li:hover .subNav {
    transform: scaleY(1);
    height: auto;
  }
  .menu{
    position: absolute;z-index: 99;
    left: 15px;top:15px;
    width: 25px;
  }
  .close{
    position: absolute;z-index: 99;
    right: 14px;top: 10px;
    width: 25px;
    display: none;
  }

  @media (max-width: 769px) {
    .nav ul {
      float: left;
    }
    .nav ul li {
      padding: 0 20px;
    }
  }



</style>
