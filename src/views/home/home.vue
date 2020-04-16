<template>
  <div class="home">
    <a-row>
      <a-carousel :interval="5000" autoplay arrow class="carouselTop">
        <div
          slot="prevArrow"
          class="custom-slick-arrow"
          style="left: 10px;zIndex: 999;"
        >
          <a-icon type="left-circle" />
        </div>
        <div
          slot="nextArrow"
          class="custom-slick-arrow"
          style="right: 10px;zIndex: 999"
        >
          <a-icon type="right-circle" />
        </div>
        <div class="bannerItem1"></div>
        <div class="bannerItem2"></div>
      </a-carousel>
    </a-row>
    <transition mode="out-in" enter-active-class="animated zoomInDown">
      <a-row type="flex" justify="center" style="flex-wrap: wrap;" class="partOne">
        <a-col :span="5" class="partOneItem" :xs="12">
          <div style="text-align:center">
            <img style="width: 50px; height: 50px" src="../../assets/image/part1_icon1.png" />
            <div>
              <h3>大数据预测考点</h3>
            </div>
          </div>
        </a-col>
        <a-divider type="vertical" class="a-divider" />
        <a-col :span="5" class="partOneItem" :xs="12">
          <div style="text-align:center">
            <img style="width: 50px; height: 50px" src="../../assets/image/part1_icon2.png" />
            <div>
              <h3>管联名师授课</h3>
            </div>
          </div>
        </a-col>
        <a-divider type="vertical" class="a-divider" />

        <a-col :span="5" class="partOneItem" :xs="12">
          <div style="text-align:center">
            <img style="width: 50px; height: 50px" src="../../assets/image/part1_icon3.png" />
            <div>
              <h3>3V1全程服务</h3>
            </div>
          </div>
        </a-col>
        <a-divider type="vertical" class="a-divider" />
        <a-col :span="5" class="partOneItem" :xs="12">
          <div style="text-align:center">
            <img style="width: 50px; height: 50px" src="../../assets/image/part1_icon4.png" />
            <div>
              <h3>协议版型不过退费</h3>
            </div>
          </div>
        </a-col>
      </a-row>
    </transition>
    <div class="partTwoContent">
      <div class="partTwo">
        <a-row>
          <a-col>
            <h2>文都管理类联考直播好课预告</h2>
          </a-col>
        </a-row>
        <div class="twoContent">
          <a-row type="flex" justify="center" :gutter="20" style="width:100%">
            <a-col :span="6" class="courseImg hidden-xs-only">
              <img style="width: 400px; height: 150px" src="../../assets/image/part2_pic.png" />
              <div class="title">MBA直播协议班课时名称</div>
              <div class="time">
                <a-statistic-countdown
                  :value="deadline"
                  format="D 天 H 时 m 分 s 秒"
                  class="countDown"
                />
              </div>
            </a-col>
            <a-col :span="8" :xs="22" class="courseList">
              <div class="timeshow">
                <a-timeline>
                  <a-timeline-item>
                    <h3>今天（3月30日 星期一）</h3>
                    <p>
                      Technical testing 2
                      <a class="timeBtn">点击查看</a>
                    </p>
                    <p>
                      Technical testing 3 2015-09-01
                      <a class="timeBtn">点击查看</a>
                    </p>
                  </a-timeline-item>
                  <a-timeline-item color="gray">
                    <h3>明天（3月31日 星期一）</h3>
                    <p>
                      Technical testing 2
                      <a class="timeBtn">点击查看</a>
                    </p>
                    <p>
                      Technical testing 3 2015-09-01
                      <a class="timeBtn">点击查看</a>
                    </p>
                  </a-timeline-item>
                  <a-timeline-item color="gray">
                    <h3>后天（3月31日 星期一）</h3>
                    <p>
                      Technical testing 2
                      <a class="timeBtn">点击查看</a>
                    </p>
                    <p>
                      Technical testing 3 2015-09-01
                      <a class="timeBtn">点击查看</a>
                    </p>
                  </a-timeline-item>
                </a-timeline>
              </div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <div class="partThree">
      <div class="threeContent">
        <h2>文都管联研究院当季热销课程</h2>
        <h3>直播课程、面授课程、集训课程、1对1课程，管联名师，总有一款适合你</h3>
        <a-row type="flex" justify="center">
          <a-col :span="6">
            <div>
              <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg01.png" />
              <div class="picName">直播OR面试，退费保障</div>
              <div class="picTitle">在职生笔试课程</div>
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg02.png" />
              <div class="picName">直播OR面试，退费保障</div>
              <div class="picTitle">在职生提面课程</div>
            </div>
          </a-col>
          <a-col :span="6">
            <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg03.png" />
            <div class="picName">直播OR面试，退费保障</div>
            <div class="picTitle">在校生直播课程</div>
          </a-col>
          <a-col :span="6">
            <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg04.png" />
            <div class="picName">直播OR面试，退费保障</div>
            <div class="picTitle">管联集训营课程</div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="partFourContent">
      <div class="partFour">
        <h2>清北复交毕业全职讲师</h2>
        <h3>专业的管联团队，包括英语二、初等数学、逻辑和写作专职教师教研讲师。</h3>
        <div class="banner">
          <a-carousel :interval="3000" height="250px" autoplay arrow>
            <div class="bannerItem">
              <div class="sliderTeacher">
                <img src="../../assets/image/part04_pic_zhangxiaoxv.png" alt />
                <div class="teacherText">
                  <p>
                    <span style="margin-right: 69px;">张晓旭</span>
                    <span>文都管联研究院逻辑院院长 逻辑写作课亲授讲师</span>
                  </p>
                  <p
                    class="teacherIntrduce"
                  >具有12年管理类联考授课经验。总结归纳20余年逻辑写作真题,熟悉真题命题规则，善于预测当年真题考点。在教学上富有激情,具有感染力,语言亲切、幽默,深受广大学生欢迎。</p>
                </div>
              </div>
            </div>
            <div class="bannerItem">
              <div class="sliderTeacher">
                <img src="../../assets/image/part04_pic_krishu.png" alt />
                <div class="teacherText">
                  <p>
                    <span style="margin-right: 69px;">Kris.Hu</span>
                    <span>文都管联研究院英语院院长 英语课程亲授讲师</span>
                  </p>
                  <p
                    class="teacherIntrduce"
                  >对英语二提分有着独特的方法,可以让学生少背单词，快速高效的提分。上课时关注在职考生的基础，讲课通俗易懂，保证活跃的课堂氛围，课堂中学生所学即能满足考试要求，无需投入更多时间。</p>
                </div>
              </div>
            </div>
            <div class="bannerItem">
              <div class="sliderTeacher">
                <img src="../../assets/image/part04_pic_wangdong.png" alt />
                <div class="teacherText">
                  <p>
                    <span style="margin-right: 69px;">王东</span>
                    <span>文都管联研究院独家特邀面试指导讲师</span>
                  </p>
                  <p
                    class="teacherIntrduce"
                  >现任央企中国西电集团有限公司中央研究院商务技术经理，具备丰富的面试实战经验。曾作为管理团队成员负责过多项国家级智能制造和工业互联网专项，并编制相关领域行业标准。负责了百亿级西电智慧工业园区智慧、共享方案的规划。2018年曾访学于美国德克萨斯州立大学。</p>
                </div>
              </div>
            </div>
            <div class="bannerItem">
              <div class="sliderTeacher">
                <img src="../../assets/image/part04_pic_wudi.png" alt />
                <div class="teacherText">
                  <p>
                    <span style="margin-right: 69px;">武迪</span>
                    <span>文都管联研究院数学院院长 数学课程亲授讲师</span>
                  </p>
                  <p
                    class="teacherIntrduce"
                  >知识储备雄厚，熟悉管理类联考数学真题出题特点，在数学考试中为学生指明方向节省时间。授课思路清晰，重点突出，针对不同基础学员因材施教，进行针对性辅导，确保任何基础的学生都能够听懂学会。</p>
                </div>
              </div>
            </div>
            <div class="bannerItem">
              <div class="sliderTeacher">
                <img src="../../assets/image/part04_pic_suishaolong.png" alt />
                <div class="teacherText">
                  <p>
                    <span style="margin-right: 69px;">隋少龙</span>
                    <span>文都管联研究院独家特邀面试指导讲师</span>
                  </p>
                  <p class="teacherIntrduce">
                    任拓疆者Builder【X】CEO。曾就职于苹果公司（Apple,Inc.）及特斯拉电动车(Tesla
                    Motors,Inc.)，2017年被福布斯评为30位30岁以下杰出创业者。曾撰写的《北美机械工程师求职宝典》，面试者浏览量达百万，帮助几千位中国留学生成功留美就业。
                  </p>
                </div>
              </div>
            </div>
            <div class="bannerItem">
              <div class="sliderTeacher">
                <img src="../../assets/image/part04_pic_liyang.png" alt />
                <div class="teacherText">
                  <p>
                    <span style="margin-right: 69px;">李阳</span>
                    <span>文都管联研究院院长</span>
                  </p>
                  <p
                    class="teacherIntrduce"
                  >文都管联研究院院长，亲自负责MBA面试授课。曾任美国人工智能roboterra.inc公司华南区总经理，具备丰富的面试实战经验，多次参与大型商务谈判和创业面试路演活动“西安市人民检察院建筑智能化商务合同”“广东省青少年宫协会福彩育苗计划”“北京大学光华管理学院创业孵化营。</p>
                </div>
              </div>
            </div>
            <div class="bannerItem">
              <div class="sliderTeacher">
                <img src="../../assets/image/part04_pic_zhangyao.png" alt />
                <div class="teacherText">
                  <p>
                    <span style="margin-right: 69px;">张尧</span>
                    <span>文都管联研究院独家特邀讲师</span>
                  </p>
                  <p class="teacherIntrduce">
                    美国国务院“Best 10 Global Citizen Service Award
                    ”获得者、NAFSA及GIC等顶级教育研究与评估协会演讲嘉宾、教育评估与创新智库Hechinger Institute 特邀专栏作者。曾就职于麦肯锡咨询、索罗斯基金会。
                  </p>
                </div>
              </div>
            </div>
          </a-carousel>
        </div>
      </div>
    </div>
    <div class="partFive">
      <div class="partFiveContent1">
        <h2>教学服务及优势</h2>
        <h3>为学院提供主讲老师、学管老师、助教老师3V1一体化服务，文都管联研究院361°服务，助你高分成硕士</h3>
      </div>
      <div class="partFiveContent2">
        <div class="partFiveTwo">
          <div class="activeImg"></div>
          <swiper :options="swiperOption" v-if="imgList.length" class="swiper">
            <swiper-slide v-for="(item,index) in imgList" :key="index">
              <svg
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                :width="item.width"
                :height="item.height"
              >
                <path v-for="(path,index) in item.path" fill="white" :d="path.d" :key="index" />
              </svg>
              <h3>{{item.title}}</h3>
              <span>{{item.text}}</span>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="partSix">
      <div class="partSixContent">
        <h2>选择文都管联研究院，你只需安心学习</h2>
        <h3>为学员提供主讲老师、学管老师、助教老师3V1一体化服务，文都管联研究院361°服务，助你高分成硕</h3>
        <div class="interduce">
          <div class="interduceItem">
            <h2>23年</h2>
            <span>学课教学经验</span>
          </div>
          <a-divider type="vertical" class="a-divider" />
          <div class="interduceItem">
            <h2>4%</h2>
            <span>专职教师录取率</span>
          </div>
          <a-divider type="vertical" class="a-divider" />
          <div class="interduceItem">
            <h2>100%</h2>
            <span>无障碍退费保证</span>
          </div>
          <a-divider type="vertical" class="a-divider" />
          <div class="interduceItem">
            <h2>200,000+</h2>
            <span>累计服务学员</span>
          </div>
        </div>
      </div>
    </div>
    <div class="partSeven">
      <div class="partSevenContent">
        <h2>文都管联权威资料下载，关注您关注的问题资讯</h2>
        <h3>为学员提供权威的考研资料及相关资讯服务，让学员学习无忧</h3>
        <!-- emmm bullshit  -->
        <div class="bullshit">
          <div class="bullshitCard">
            <img src="../../assets/image/part2_pic_card1.png" alt />
            <div class="bullshit__info">
              <p>关于MBA基本问题</p>
              <ul class="contentList">
                <li>
                  <span class="redDisc"></span>
                  <a>MBA报考条件是？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>报考MBA的好处有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>不同年龄段读MBA的优势和劣势有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>MBA 全日制和非全日制的区别？</a>
                </li>
              </ul>
              <a class="knowMore">了解更多+</a>
            </div>
          </div>
          <div class="bullshitCard">
            <img src="../../assets/image/part2_pic_card2.png" alt />
            <div class="bullshit__info">
              <p>关于MBA基本问题</p>
              <ul class="contentList">
                <li>
                  <span class="redDisc"></span>
                  <a>MBA报考条件是？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>报考MBA的好处有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>不同年龄段读MBA的优势和劣势有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>MBA 全日制和非全日制的区别？</a>
                </li>
              </ul>
              <a class="knowMore">了解更多+</a>
            </div>
          </div>
          <div class="bullshitCard">
            <img src="../../assets/image/part2_pic_card3.png" alt />
            <div class="bullshit__info">
              <p>关于MBA基本问题</p>
              <ul class="contentList">
                <li>
                  <span class="redDisc"></span>
                  <a>MBA报考条件是？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>报考MBA的好处有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>不同年龄段读MBA的优势和劣势有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>MBA 全日制和非全日制的区别？</a>
                </li>
              </ul>
              <a class="knowMore">了解更多+</a>
            </div>
          </div>
          <div class="bullshitCard">
            <img src="../../assets/image/part2_pic_card4.png" alt />
            <div class="bullshit__info">
              <p>关于MBA基本问题</p>
              <ul class="contentList">
                <li>
                  <span class="redDisc"></span>
                  <a>MBA报考条件是？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>报考MBA的好处有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>不同年龄段读MBA的优势和劣势有哪些？</a>
                </li>
                <li>
                  <span class="redDisc"></span>
                  <a>MBA 全日制和非全日制的区别？</a>
                </li>
              </ul>
              <a class="knowMore">了解更多+</a>
            </div>
          </div>
        </div>
        <div class="material">
          <div class="materialCard">
            <img src="../../assets/image/part06_bg003_normat.png" alt />
            <div class="cardText">
              <p>2021年MBA备考白皮书</p>
              <div>
                <div class="pdfText">
                  <span>89007人领取</span>
                  <a>在线领取</a>
                </div>
              </div>
            </div>
          </div>
          <div class="materialCard">
            <img src="../../assets/image/part06_bg02_normat.png" alt />
            <div class="cardText">
              <p>2021年MBA备考白皮书</p>
              <div>
                <div class="pdfText">
                  <span>89007人领取</span>
                  <a>在线领取</a>
                </div>
              </div>
            </div>
          </div>
          <div class="materialCard">
            <img src="../../assets/image/part06_bg05_normat.png" alt />
            <div class="cardText">
              <p>2021年MBA备考白皮书</p>
              <div>
                <div class="pdfText">
                  <span>89007人领取</span>
                  <a>在线领取</a>
                </div>
              </div>
            </div>
          </div>
          <div class="materialCard">
            <img src="../../assets/image/part06_bg09_normat.png" alt />
            <div class="cardText">
              <p>2021年MBA备考白皮书</p>
              <div>
                <div class="pdfText">
                  <span>89007人领取</span>
                  <a>在线领取</a>
                </div>
              </div>
            </div>
          </div>
          <div class="materialCard">
            <img src="../../assets/image/part06_bg06_normat.png" alt />
            <div class="cardText">
              <p>2021年MBA备考白皮书</p>
              <div>
                <div class="pdfText">
                  <span>89007人领取</span>
                  <a>在线领取</a>
                </div>
              </div>
            </div>
          </div>
          <div class="materialCard">
            <img src="../../assets/image/part06_bg008_normat.png" alt />
            <div class="cardText">
              <p>2021年MBA备考白皮书</p>
              <div>
                <div class="pdfText">
                  <span>89007人领取</span>
                  <a>在线领取</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="freeBtn">免费获取更多资料</button>
      </div>
    </div>
    <div class="partEight">
      <div class="partEightContent">
        <h2>我们的承诺</h2>
        <div class="interduce">
          <div class="interduceItem">
            <h2>退费承诺</h2>
            <span>付费后，每位学员都会与文都签订一份协议，我们向报考协议班的学员承诺未通过相关要求有退费的保障</span>
          </div>
          <a-divider type="vertical" class="a-divider" />
          <div class="interduceItem">
            <h2>师资承诺</h2>
            <span>文都管联研究院承诺“管联名校师资”，保证优质教学服务</span>
          </div>
          <a-divider type="vertical" class="a-divider" />
          <div class="interduceItem">
            <h2>服务承诺</h2>
            <span>报考文都管联院课程的学员，我们通过三位一体（讲师、助教、学管向学员保证服务水平）</span>
          </div>
        </div>
      </div>
    </div>
    <div class="partNine">
      <div class="partNineContent">
        <h2>预约试听，享受高端一对一服务</h2>
        <a-form-model :model="form">
          <a-row type="flex" justify="center" :gutter="20">
            <a-col :span="6">
              <a-form-model-item>
                <a-select v-model="form.course" placeholder="请选择试听科目">
                  <a-select-option value="shanghai">Zone one</a-select-option>
                  <a-select-option value="beijing">Zone two</a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :span="6">
              <a-form-model-item>
                <a-select v-model="form.region" placeholder="请选择报考专业">
                  <a-select-option value="shanghai">Zone one</a-select-option>
                  <a-select-option value="beijing">Zone two</a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center" :gutter="20">
            <a-col :span="6">
              <a-form-model-item>
                <a-input
                  type="text"
                  v-model="form.name"
                  placeholder="请选择输入姓名"
                  prefix-icon="el-icon-user"
                ></a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="6">
              <a-form-model-item>
                <a-input
                  type="text"
                  v-model="form.telephone"
                  placeholder="请选择输入手机号"
                  prefix-icon="el-icon-mobile"
                ></a-input>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :span="3">
              <a-form-model-item>
                <a-button class="freeBtn">立即预约</a-button>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
      </div>
    </div>
    <div class="partTen">
      <div class="imgLeft">
        <img src="../../assets/image/part10_left.png" />
      </div>
      <div class="tenRight">
        <div class="nineLeft">
          <h3>公开课免费学，先体验，再报名</h3>
          <hr />
          <p>全套课程，涵盖英语、数学、逻辑、写作以及提前面试。还有随堂作业，巩固课程知识点，即可体验。</p>
          <button>了解详情</button>
        </div>
        <div class="nineRight">
          <img src="../../assets/image/part09_pic.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
components: {
  swiper, swiperSlide
}

export default {
  data() {
    return {
      bannerH: "600px",
      imgList: [
        {
          title: "多种授课方式自由选择",
          text:
            "直播、录播、面授、集训多种授课方式，自由选择，不同授课方式不同体验",
          width: "59px",
          height: "59px",
          path: [
            {
              d:
                "M510.207 286.36c61.62 0 111.574-49.953 111.574-111.574 0-61.62-49.953-111.573-111.574-111.573-61.62 0-111.573 49.953-111.573 111.573 0 61.62 49.954 111.574 111.573 111.574z m0-167.219c30.683 0 55.646 24.963 55.646 55.646s-24.962 55.647-55.646 55.647c-30.683 0-55.645-24.963-55.645-55.647s24.962-55.646 55.645-55.646z m-335.51 463.422c-61.62 0-111.573 49.953-111.573 111.574 0 61.62 49.953 111.574 111.573 111.574s111.574-49.954 111.574-111.574-49.953-111.574-111.574-111.574z m0 167.219c-30.682 0-55.646-24.962-55.646-55.646 0-30.683 24.963-55.646 55.646-55.646s55.646 24.962 55.646 55.646-24.963 55.646-55.646 55.646zM845.95 582.563c-61.62 0-111.573 49.953-111.573 111.574 0 61.62 49.953 111.574 111.573 111.574s111.574-49.954 111.574-111.574-49.953-111.574-111.574-111.574z m0 167.219c-30.683 0-55.646-24.962-55.646-55.646 0-30.683 24.963-55.646 55.646-55.646s55.647 24.962 55.647 55.646-24.964 55.646-55.647 55.646zM509.425 879.616c-79.714 0-157.406-27.896-218.755-78.526l-35.611 43.12c71.358 58.904 161.694 91.333 254.365 91.333 93.463 0 184.4-32.934 256.044-92.726l-35.829-42.928c-61.62 51.408-139.819 79.727-220.214 79.727z m343.95-343.95h55.928c0-154.827-90.705-297.158-231.098-362.603l-23.622 50.685c120.758 56.31 198.793 178.734 198.793 311.917zM364.268 223.747l-23.622-50.685C200.265 238.508 109.56 380.84 109.56 535.665h55.928c0-133.183 78.034-255.621 198.779-311.917z"
            }
          ]
        },
        {
          title: "学测结合更高效",
          text: "结合授课内容随堂考,课后练,检测学习效果,实时调整学习计划",
          width: "55px",
          height: "43px",
          path: [
            {
              d:
                "M59.733333 904.533333c-17.066667 0-29.866667-4.266667-42.666666-17.066666-12.8-12.8-17.066667-25.6-17.066667-42.666667V59.733333C0 25.6 25.6 0 59.733333 0h1032.533334c17.066667 0 29.866667 4.266667 42.666666 17.066667 12.8 12.8 17.066667 25.6 17.066667 42.666666v785.066667c0 17.066667-4.266667 29.866667-17.066667 42.666667-12.8 12.8-25.6 17.066667-42.666666 17.066666H59.733333z m0-59.733333h1032.533334V59.733333H59.733333v785.066667z m657.066667-221.866667l170.666667-170.666666-170.666667-170.666667 42.666667-42.666667 213.333333 213.333334-213.333333 213.333333-42.666667-42.666667z m-537.6-170.666666l213.333333-213.333334 42.666667 42.666667-170.666667 170.666667 170.666667 170.666666-42.666667 42.666667-213.333333-213.333333z m366.933333 149.333333v-298.666667h59.733334v302.933334h-59.733334z m0 0M273.066667 964.266667h605.866666c21.333333 0 29.866667 8.533333 29.866667 29.866666 0 21.333333-8.533333 29.866667-29.866667 29.866667H273.066667c-21.333333 0-29.866667-8.533333-29.866667-29.866667 0-21.333333 8.533333-29.866667 29.866667-29.866666z m0 0"
            }
          ]
        },
        {
          title: "专属学习答疑交流群",
          text: "课堂讲师随堂答疑,课后助教24小时答疑,阶段专题直播答疑",
          width: "55px",
          height: "43px",
          path: [
            {
              d:
                "M40.96 860.16H24.576C8.192 851.968 0 835.584 0 819.2V122.88C0 57.344 57.344 0 122.88 0h737.28c65.536 0 122.88 57.344 122.88 122.88v409.6c0 65.536-57.344 122.88-122.88 122.88H262.144L65.536 851.968s-16.384 8.192-24.576 8.192z m81.92-778.24c-24.576 0-40.96 16.384-40.96 40.96v598.016l131.072-131.072c8.192-8.192 24.576-16.384 32.768-16.384h614.4c24.576 0 40.96-16.384 40.96-40.96v-409.6c0-24.576-16.384-40.96-40.96-40.96H122.88z"
            },
            {
              d:
                "M1105.92 1024c-8.192 0-24.576-8.192-32.768-16.384L909.312 819.2H401.408c-73.728-8.192-122.88-57.344-114.688-122.88v-40.96h81.92v40.96c0 24.576 16.384 40.96 32.768 40.96h524.288c8.192 0 24.576 8.192 32.768 16.384l106.496 122.88V286.72c0-24.576-16.384-40.96-32.768-40.96H942.08v-81.92h90.112c65.536 8.192 114.688 65.536 114.688 122.88v696.32c0 16.384-8.192 32.768-24.576 40.96h-16.384z"
            },
            {
              d:
                "M614.4 450.56H204.8c-24.576 0-40.96-16.384-40.96-40.96s16.384-40.96 40.96-40.96h409.6c24.576 0 40.96 16.384 40.96 40.96s-16.384 40.96-40.96 40.96zM450.56 286.72H204.8c-24.576 0-40.96-16.384-40.96-40.96s16.384-40.96 40.96-40.96h245.76c24.576 0 40.96 16.384 40.96 40.96s-16.384 40.96-40.96 40.96z"
            }
          ]
        },
        {
          title: "授课内容随时看反复看",
          text: "直播课程将以录播形式保存,学员随时查漏补缺",
          width: "60px",
          height: "47px",
          path: [
            {
              d:
                "M917.68306 266.192037h-207.837627l236.615145-223.825136c9.592506-9.592506 9.592506-25.580016 0-35.172522-9.592506-9.592506-25.580016-9.592506-35.172522 0L639.50039 266.192037h-243.010148L121.505074 7.194379C111.912568-2.398126 95.925059-2.398126 86.332553 7.194379c-9.592506 9.592506-9.592506 25.580016 0 35.172522l236.615144 223.825136H105.517564C47.962529 266.192037 0 310.957065 0 368.5121v556.36534C0 979.234973 47.962529 1024 105.517564 1024h815.362998c57.555035 0 105.517564-44.765027 105.517564-99.12256V368.5121a108.715066 108.715066 0 0 0-108.715066-102.320063z m54.357533 658.685403c0 28.777518-22.382514 51.160031-54.357533 51.160031H105.517564c-28.777518 0-54.357533-22.382514-54.357533-51.160031V368.5121c0-28.777518 22.382514-51.160031 54.357533-51.160031h815.362998c28.777518 0 54.357533 22.382514 54.357533 51.160031v556.36534z m0 0"
            },
            {
              d:
                "M703.450429 627.509758l-313.355191-172.665105c-6.395004-3.197502-19.185012-3.197502-25.580016 0-6.395004 3.197502-12.790008 12.790008-12.790007 22.382513v345.330211c0 9.592506 6.395004 15.98751 12.790007 22.382514 3.197502 3.197502 9.592506 3.197502 12.790008 3.197502 3.197502 0 9.592506 0 12.790008-3.197502L703.450429 672.274785c6.395004-3.197502 12.790008-12.790008 12.790008-22.382513 0-9.592506-6.395004-19.185012-12.790008-22.382514z m-300.565183 150.282592v-262.19516l233.417642 131.09758-233.417642 131.09758z m0 0"
            }
          ]
        },
        {
          title: "3V1服务模式克服学习惰性",
          text: "学管课前督学,讲师课中传授知识,助教课后答疑并批改作业",
          width: "57px",
          height: "57px",
          path: [
            {
              d:
                "M622.55 564.39a202.44 202.44 0 0 0 89-167.59c0-111.65-90.83-202.48-202.48-202.48S306.58 285.15 306.58 396.8a202.45 202.45 0 0 0 89 167.59 289 289 0 0 0-174.94 265.29h58c0-127 103.36-230.4 230.4-230.4s230.41 103.35 230.41 230.4h58a289 289 0 0 0-174.9-265.29z m-258-167.59c0-79.66 64.8-144.47 144.46-144.47s144.51 64.81 144.51 144.47-64.81 144.47-144.47 144.47-144.46-64.81-144.46-144.47z"
            },
            {
              d:
                "M294.13 542.12A108.26 108.26 0 0 1 186 434c0-51.15 36.3-95.7 86.31-105.93l-11.63-56.83a166.1 166.1 0 0 0-68.17 294.12C114.19 603.24 60.05 683.51 60.05 776.19h58c0-97.08 79-176.06 176.07-176.06zM825.6 565.35a166.12 166.12 0 0 0-68.17-294.12l-11.63 56.83c50 10.23 86.31 54.78 86.31 105.93A108.26 108.26 0 0 1 724 542.12v58c97.08 0 176.06 79 176.06 176.06h58c-0.01-92.67-54.14-172.94-132.46-210.83z"
            }
          ]
        },
        {
          title: "上课灵活安全又方便",
          text: "面授就近入学、直播电脑、iPad、手机可在线 学习，灵活且便捷",
          width: "45px",
          height: "45px",
          path: [
            {
              d:
                "M985.225159 761.422207h-121.414801a365.707233 365.707233 0 0 0-211.378781-279.400326 266.234865 266.234865 0 0 0 109.71217-219.42434A258.189306 258.189306 0 0 0 512 0.019748a235.515458 235.515458 0 0 0-177.733715 77.529934 261.846379 261.846379 0 0 0-73.141447 186.510688 269.160523 269.160523 0 0 0 109.71217 219.42434 372.289963 372.289963 0 0 0-213.573024 292.565786 16.091118 16.091118 0 0 0 0 7.314145v9.508388a37.302138 37.302138 0 0 0 35.839309 38.033552 38.033552 38.033552 0 0 0 35.839309-38.033552A292.565786 292.565786 0 0 1 496.640296 526.638163a146.282893 146.282893 0 0 0 31.450822 0 265.503451 265.503451 0 0 1 179.196544 81.187006 292.565786 292.565786 0 0 1 83.381249 152.865623H493.714638a40.95921 40.95921 0 0 0 0 81.187006h491.510521a40.95921 40.95921 0 0 0 0-81.187006zM512 452.765302a185.779274 185.779274 0 0 1-179.196544-188.704932 185.779274 185.779274 0 0 1 52.661841-133.117432 171.882399 171.882399 0 0 1 252.337991 0 185.779274 185.779274 0 0 1 52.661842 133.117432A184.316445 184.316445 0 0 1 512 452.765302zM985.225159 1024H38.774841a40.95921 40.95921 0 0 1 0-81.187006h946.450318a40.95921 40.95921 0 0 1 0 81.187006z m0 0"
            }
          ]
        }
      ],
      swiperOption: {
        direction: "horizontal", // 滑动的方向(水平方向)
        loop: true, // 是否循环
        autoplay: {
          delay: 400000, // 自动播放的时长
          disableOnInteraction: true
        },
        speed: 1500,
        slidesPerView: 5, // 设置可视区一共显示几张图片,设置auto,设置auto为自适应;
        centeredSlides: true, // 设置为true时,带有active-slide类名的图片会居中
        spaceBetween: 2 //  每张图片之间的间隔
      },
      form: {
        name: "",
        region: '',
        course: '',
        telephone:''
   
      },
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
    }
  },
  methods: {},

  mounted() {
    // 监听窗口变化，使得轮播图高度自适应图片高度
    // window.addEventListener("resize", () => {
    //   let docEl = document.documentElement
    //   let autoWidth = docEl.clientWidth / 2.8 + "px"
    //   this.bannerH = autoWidth
    // })
    // window.addEventListener("load", () => {
    //   let docEl = document.documentElement
    //   let autoWidth = docEl.clientWidth / 2.8 + "px"
    //   if (window.innerWidth < 600) {
    //     this.bannerH = autoWidth
    //   } else {
    //     this.bannerH = "600px"
    //   }
    // })
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/home.less);
</style>