<template>
    <div>
      <mbnavbar></mbnavbar>
      <zx-header></zx-header>
      <mainnavbar></mainnavbar>
      <div class="banner">
        <img src="../../assets/banner4.jpg" alt="">
      </div>
      <div class="container-sm">
        <h2 class="news-title">Design and Education</h2>

        <p>
          <strong>A study of teaching and development in future design education
          </strong><br><br>
          “Design and Education” is the innovative research in art and design education, aiming at nurturing new talents required for future design and exploring future development of design education. The research in this field aims to grasp the development trend of global art education, to study the design ideas and logic, the development model, the curriculum system, the monitoring system and foundations of the world's major design education systems, and finally to develop a new education system and talent cultivation model adapted to China’s national conditions and future information society. It involves teaching methods, curriculum frameworks, textbook development, cognitive discipline education, etc. In addition, it adopts the advantages of Beijing Normal University in psychology, literature and education, highlights the characteristics of teacher-training institutions, creates a new direction of design interdisciplinary education, and explores the future development of design education.
           </p>

      </div>
      <footerbar></footerbar>
    </div>
</template>

<script>
  import zxHeader from '../header'
  import footerbar from '../footerbar'
  import mainnavbar from '../mainnavbar'
  import list from '../list'
  import mbnavbar from '../mbnavbar'
    export default {
      name: "yanjiu1",
      components:{
        zxHeader,footerbar,mainnavbar,list,mbnavbar
      }
    }
</script>

<style scoped>
  .banner img{
    width: 100%;
  }
  .container-sm{margin-bottom: 50px;margin-top: 50px;}
  table{text-align: center;border-collapse: collapse;width: 100%;margin: 20px 0;}
  td{padding: 10px;border: #000 solid 1px;}
</style>
