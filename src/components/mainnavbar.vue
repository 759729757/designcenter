<template>
  <div class="nav pc-only" id="nav">
    <div class="container ">
      <ul class="pull-right navbar">
        <li>
          <router-link :class="$route.path==='/' ? 'active' : ''" to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about">中心介绍</router-link>
 
        </li>
        <li>
          <router-link :class="$route.path==='/leader' ? 'active' : ''" to="/leader">现任领导</router-link>
        </li>
        <li>
          <router-link :class="$route.path==='/weiyuan' ? 'active' : ''"  to="/weiyuan">学术委员会</router-link>
        </li>
        <li>
          <router-link :class="$route.path==='/yanjiu' ? 'active' : ''" to="/yanjiu">研究方向</router-link>
     
        </li>
        <li>
          <router-link to="/news">新闻动态</router-link>
          
        </li>
        <li>
          <router-link to="/news">招生信息</router-link>
      
        </li>
<!--        <li>-->
<!--          <router-link to="/news">合作</router-link>-->
<!--          <div class="subNav">-->
<!--            <dl>-->
<!--              <dd>-->
<!--                <router-link to="/news">国际</router-link>-->
<!--              </dd>-->
<!--              <dd>-->
<!--                <router-link to="/news">国内</router-link>-->
<!--              </dd>-->
<!--              <dd>-->
<!--                <router-link to="/news">校企</router-link>-->
<!--              </dd>-->
<!--            </dl>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <router-link to="server"><a>招聘</a></router-link>-->
<!--        </li>-->
<!--        <li>-->
<!--          <router-link to="server"><a>服务</a></router-link>-->
<!--          <div class="subNav">-->
<!--            <dl>-->
<!--              <dd>-->
<!--                <router-link to="/server">教师</router-link>-->
<!--              </dd>-->
<!--              <dd>-->
<!--                <router-link to="/server">学生</router-link>-->
<!--              </dd>-->
<!--            </dl>-->
<!--          </div>-->
<!--        </li>-->
      </ul>
    </div>

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
        if (top > 440) {
          document.getElementById('tab') && document.getElementById('tab').classList.add('fixed')
        } else {
          document.getElementById('tab') && document.getElementById('tab').classList.remove('fixed')
        }

      },
    },
    watch:{
      $route:{
        handler(val,oldval){
          console.log(val);
        },
        deep:true
      }
    },
    mounted() {
      console.log(this.$route)
      this.$nextTick(() => {
        this.handleScoll();
        addEventListener('scroll', this.handleScoll);
      });
    },
    destroyed() {
      removeEventListener('scroll', this.handleScoll);
    }
  }
</script>

<style scoped>
  .nav {
    background: #1f60a9;
    width: 100%;
    height: 45px;
    line-height: 45px;
    z-index: 888;
    /*box-shadow:0px 3px 3px 0px #999;*/
    /*position: relative;*/
  }
  .navbar .active{border-top: 2px white solid;}

  .nav ul {
    margin: 0px auto;
    height: 45px;
    max-width: 1030px;
  }

  .nav ul li {
    padding: 0px 30px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    float: left;
    position: relative;
  }

  .nav ul li a {
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    display: block;
    cursor: pointer;
  }

  .fixed.nav {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
  }

  .subNav {
    transition: all .35s;
    transform-origin: bottom;
    transform: scaleY(0) translateY(100%);
    position: absolute;
    white-space: nowrap;
    bottom: 0;
    left: 0;
    z-index: 99;
  }

  .subNav dd {
    margin: 0 20px;
  }

  .navbar li:hover .subNav {
    transform: scaleY(1) translateY(100%);
    background: #fff;
    min-width: 100%;
  }

  .navbar li:hover {
    background: #fff;
  }

  .navbar li:hover a {
    color: #00499E;
  }

  .navbar li:hover .subNav a {
    color: #00499E;
  }
  .nav ul li:last-child{
    margin-right: -30px;
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
