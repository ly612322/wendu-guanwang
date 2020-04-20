<template>
  <div class="teacher">
    <div class="TeachertopMes">
      <a-row type="flex" justify="end" style="flex-wrap: wrap" class="eRow" :gutter="20">
        <a-col class="eCol">
          <a-card class="login-form-layout">
            <a-form-model
              autocomplete="on"
              :model="loginForm"
              ref="loginForm"
              label-position="left"
            >
              <div class="title">
                <h2 class="login-title">立刻约见名师做1V1规划</h2>
              </div>
              <div key="account" class="accountLogin">
                <a-form-model-item prop="username">
                  <a-input
                    name="username"
                    type="text"
                    prefix-icon="el-icon-user-solid"
                    v-model="loginForm.username"
                    autocomplete="on"
                    placeholder="请输入用户名"
                  ></a-input>
                </a-form-model-item>
                <a-form-model-item prop="password">
                  <a-input
                    name="password"
                    show-password
                    prefix-icon="el-icon-key"
                    v-model="loginForm.password"
                    autocomplete="on"
                    placeholder="请输入密码"
                  ></a-input>
                </a-form-model-item>
              </div>
              <a-form-model-item style="margin-bottom: 20px;text-align: center">
                <a-button style="width: 99%" type="primary">立刻报名</a-button>
              </a-form-model-item>
            </a-form-model>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="partOne">
      <div class="partOneContent">
        <a-row type="flex" justify="center">
          <a-col :span="7">
            <div class="partOneItem">
              <img src="../../assets/image/teacherList/part1_icon1.png" alt />
              <h3>名校讲师</h3>
              <span>主讲教师均毕业于北大、交大等名校MBA或MPAcc专业</span>
            </div>
          </a-col>
          <a-col :span="7">
            <div class="partOneItem">
              <img src="../../assets/image/teacherList/part1_icon2.png" alt />
              <h3>高学历助教</h3>
              <span>助教老师即为相关学课研究生学历</span>
            </div>
          </a-col>
          <a-col :span="7">
            <div class="partOneItem">
              <img src="../../assets/image/teacherList/part1_icon3.png" alt />
              <h3>一对一专属规划师</h3>
              <span>每个学生会有专属学管老师为学生进行专属规划</span>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="partTwo">
      <div class="partTwoContent">
        <h2>严格的师资筛选标准</h2>
        <h3>4%录取率，筛选出试合管理类联考的优秀师资</h3>
        <div class="partTwoBtn">
          <button
            @click="changeColor=!changeColor"
            :style="{'background-color':changeColor ? '#b20d15':'white','color':changeColor?'white':'black'}"
          >录用前</button>
          <button
            @click="changeColor=!changeColor"
            :style="{'background-color':changeColor ? 'white':'#b20d15','color':changeColor?'black':'white'}"
          >录用后</button>
        </div>
        <transition mode="out-in">
          <div class="partTwoItem1" v-if="changeColor">
            <img class="imgCircle" src="../../assets/image/teacherList/part2_1.png" alt />
            <img class="imgRight" src="../../assets/image/teacherList/part2_right.png" alt />
            <img class="imgCircle" src="../../assets/image/teacherList/part2_2.png" alt />
            <img class="imgRight" src="../../assets/image/teacherList/part2_right.png" alt />
            <img class="imgCircle" src="../../assets/image/teacherList/part2_3.png" alt />
            <img class="imgRight" src="../../assets/image/teacherList/part2_right.png" alt />
            <img class="imgCircle" src="../../assets/image/teacherList/part2_4.png" alt />
            <img class="imgRight" src="../../assets/image/teacherList/part2_right.png" alt />
            <img class="imgCircle" src="../../assets/image/teacherList/part2_5.png" alt />
          </div>
          <div class="partTwoItem2" v-else>
            <img class="imgCircle" src="../../assets/image/teacherList/part2_1_1.png" alt />
            <img class="imgRight" src="../../assets/image/teacherList/part2_right.png" alt />
            <img class="imgCircle" src="../../assets/image/teacherList/part2_2_2.png" alt />
            <img class="imgRight" src="../../assets/image/teacherList/part2_right.png" alt />
            <img class="imgCircle" src="../../assets/image/teacherList/part2_3_3.png" alt />
            <img class="imgRight" src="../../assets/image/teacherList/part2_right.png" alt />
            <img class="imgCircle" src="../../assets/image/teacherList/part2_4_4.png" alt />
          </div>
        </transition>
      </div>
    </div>
    <div class="partThree">
      <div class="partThreeContent">
        <h2>文都管联研究院首席专家顾问</h2>
        <h3>4%录取率，筛选出试合管理类联考的优秀师资</h3>
        <div class="partThreeItem">
          <a-card hoverable>
            <img src="../../assets/image/part04_pic_zhangyao.png" slot="cover" />
            <a-card-meta title="张尧">
              <template slot="description">
                <span>文都管联院独家特邀讲师</span>
                美国国务院“Best 10 Global Citizen Service Award
                ”获得者、NAFSA及GIC等顶级教育研究与评估协会演讲嘉宾、教育评估与创新智库Hechinger Institute 特邀专栏作者。曾就职于麦肯锡咨询、索罗斯基金会。
              </template>
            </a-card-meta>
          </a-card>
          <a-card hoverable>
            <img
              src="../../assets/image/part04_pic_suishaolong.png"
              slot="cover"
              style="margin-top:33px"
            />
            <a-card-meta title="隋少龙">
              <template slot="description">
                <span>文都管联院独家特邀面试指导老师</span>
                任拓疆者Builder【X】CEO。曾就职于苹果公司（Apple,Inc.）及特斯拉电动车(TeslaMotors,Inc.)，2017年被福布斯评为30位30岁以下杰出创业者。曾撰写的《北美机械工程师求职宝典》，面试者浏览量达百万，帮助几千位中国留学生成功留美就业。
              </template>
            </a-card-meta>
          </a-card>
          <a-card hoverable>
            <img
              src="../../assets/image/part04_pic_wangdong.png"
              slot="cover"
              style="margin-top:48px"
            />
            <a-card-meta title="王东">
              <template slot="description">
                <span>文都管联院独家特邀面试指导老师</span>
                现任央企中国西电集团有限公司中央研究院商务技术经理，具备丰富的面试实战经验。曾作为管理团队成员负责过多项国家级智能制造和工业互联网专项，并编制相关领域行业标准。负责了百亿级西电智慧工业园区智慧、共享方案的规划。2018年曾访学于美国德克萨斯州立大学。
              </template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
    <div class="partFourContent">
      <div class="partFour">
        <h2>管联专职教师专家团队</h2>
        <h3>直播课程、面授课程、集训课程、1对1课程，管联名师，总有一款适合你</h3>
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
              <img :src="item.src" />
              <h3>{{item.title}}</h3>
              <span>{{item.text}}</span>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="partTen">
      <div class="partTenContent">
        <h2>专业助教团队</h2>
        <div class="partTenItem">
          <div class="imgLeft">
            <img src="../../assets/image/teacherList/part_end.png" />
          </div>
          <div class="tenRight">
            <div class="nineLeft">
              <p>每个科目配备专业助教老师，为学员提供24小时1对1答疑服务，为学定期安排评测，批改作业，巩固学习内容，强化学习效果，调整课程进度</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pagefooter></pagefooter>
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
      changeColor: true,
      loginForm: {
        username: "",
        password: ""
      },
      imgList: [
        {
          src: require("../../assets/image/teacherList/part3_simeng.png"),
          title: "数学名师 黄思梦",
          text:
            "文都管联研究院数学特级讲师，管综数学高分获得者。具有多年管综数学讲授经验，长期从事管理类联考数学课程的教研和教学工作，知识框架完整，准确把握管综数学部分重点、难点。擅长各种生疏题型逻辑思路的转换和熟练题型的秒杀技巧，具有大批网络课程粉丝。"
        },
        {
          src: require("../../assets/image/teacherList/part3_hongmin.png"),

          title: "逻辑写作名师 宏敏",
          text:
            "文都管联研究院优逻辑与写作特级讲师，致力于管理类联考逻辑及写作授课，教学方法与时俱进，通俗易懂，上课风格严肃又不失风趣，同时将自身的高分考研经历与方法融汇在日常教学中，深入浅出，对联考试题和考察方向有精准把握，擅长迅速提升学员的应试能力，受到广大学员的喜爱。"
        },
        {
          src: require("../../assets/image/teacherList/part3_yiping.png"),

          title: "逻辑写作名师 党艺萍",
          text:
            "文都管联研究院优逻辑与写作特级讲师，致力于管理类联考逻辑及写作授课，教学方法与时俱进，通俗易懂，上课风格严肃又不失风趣，同时将自身的高分考研经历与方法融汇在日常教学中，深入浅出，对联考试题和考察方向有精准把握，擅长迅速提升学员的应试能力，受到广大学员的喜爱。"
        },
        {
          src: require("../../assets/image/teacherList/part3_zixuan.png"),

          title: "英语名师 张紫宣",
          text:
            "文都英语青年教师，翻译硕士。深谙考研英语试题规律和应试技巧，拥有丰富的考研复习指导经验，着重夯实考生英语基础，同时注重对考生答疑思路技巧的训练。亲和力较强，讲解细致，深受学生喜爱。"
        },
        {
          src: require("../../assets/image/teacherList/part3_zhangliao.png"),

          title: "英语名师 张辽",
          text:
            "文都管联研究院英语特级讲师，英语专业八级，雅思高分获得者。教学经验丰富，对管理类联考英语考试有深入的研究，教学逻辑清晰，重点突出，易懂易记，对考研英语的知识结构和体系有着全新解读，熟知考试重点难点，语言亲切幽默，富有感染力，所讲课程深受学生喜爱。"
        },
        {
          src: require("../../assets/image/teacherList/part3_duoliang.png"),

          title: "逻辑写作名师 尹多良",
          text:
            "文都优秀青年讲师，管理类联考260高分获得者。对管理类联考有着深入的研究，讲课重点突出，思路清晰，让同学们易学易会。同时将自身高分备考经历与教学相结合，让同学们在上课的过程中快速提分，深受广大学员喜爱。"
        }
      ],
      swiperOption: {
        direction: "horizontal", // 滑动的方向(水平方向)
        loop: true, // 是否循环
        autoplay: {
          delay: 4000, // 自动播放的时长
          disableOnInteraction: true
        },
        speed: 1500,
        slidesPerView: 5, // 设置可视区一共显示几张图片,设置auto,设置auto为自适应;
        centeredSlides: true, // 设置为true时,带有active-slide类名的图片会居中
        spaceBetween: 2 //  每张图片之间的间隔
      }
    }
  }
}
</script>

<style lang="less">
@import url(../../assets/less/teacherList.less);
</style>