<template>
  <div class="mbnav mb-only">
    <div >
      <img class="menu" src="../assets/menu.png" alt="">
      <img class="close" src="../assets/close.png" alt="">
    </div>
    <div class=" mb-only">
      <ul class=" mbnavbar" id="mbnavbar">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          中心
          <div class="subNav">
            <dl>
              <dd>
                <router-link to="/about">中心简介</router-link>
              </dd>
              <dd>
                <router-link to="/about">使命愿景</router-link>
              </dd>
              <dd>
                <router-link to="/about">现任领导</router-link>
              </dd>
              <dd>
                <router-link to="/about">组织架构</router-link>
              </dd>
              <dd>
                <router-link to="/about">学术委员会</router-link>
              </dd>
            </dl>
          </div>
        </li>
        <li>
          新闻
          <div class="subNav">
            <dl>
              <dd>
                <router-link to="/news">通知</router-link>
              </dd>
              <dd>
                <router-link to="/news">讲座</router-link>
              </dd>
              <dd>
                <router-link to="/news">展览</router-link>
              </dd>
              <dd>
                <router-link to="/news">教学</router-link>
              </dd>
              <dd>
                <router-link to="/news">研究</router-link>
              </dd>
              <dd>
                <router-link to="/news">合作</router-link>
              </dd>
              <dd>
                <router-link to="/news">交流</router-link>
              </dd>
              <dd>
                <router-link to="/news">学生</router-link>
              </dd>
              <dd>
                <router-link to="/news">媒体</router-link>
              </dd>
            </dl>
          </div>
        </li>
        <li>
         教学
          <div class="subNav">
            <dl>
              <dd>
                <router-link to="/teacher">本科</router-link>
              </dd>
              <dd>
                <router-link to="/teacher">研究生</router-link>
              </dd>
            </dl>
          </div>
        </li>
        <li>
          <router-link to="/teacher">师资</router-link>
        </li>
        <li>
          研究
          <div class="subNav">
            <dl>
              <dd>
                <router-link to="/news">学术平台</router-link>
              </dd>
              <dd>
                <router-link to="/news">学术成果</router-link>
              </dd>
              <dd>
                <router-link to="/news">科研项目</router-link>
              </dd>
              <dd>
                <router-link to="/news">科研获奖</router-link>
              </dd>
              <dd>
                <router-link to="/news">学术期刊</router-link>
              </dd>
            </dl>
          </div>
        </li>
        <li>
          合作
          <div class="subNav">
            <dl>
              <dd>
                <router-link to="/news">国际</router-link>
              </dd>
              <dd>
                <router-link to="/news">国内</router-link>
              </dd>
              <dd>
                <router-link to="/news">校企</router-link>
              </dd>
            </dl>
          </div>
        </li>
        <li>
          <a>招聘</a>
        </li>
        <li>
          服务
          <div class="subNav">
            <dl>
              <dd>
                <router-link to="/server">教师</router-link>
              </dd>
              <dd>
                <router-link to="/server">学生</router-link>
              </dd>
            </dl>
          </div>
        </li>
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
  }
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
