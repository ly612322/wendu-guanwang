<template>
  <div class="home">
    <a-row>
      <!-- <a-carousel :interval="5000" autoplay arrow class="carouselTop">

        <div class="bannerItem1"></div>
        <div class="bannerItem2"></div>
      </a-carousel>-->
      <swiper :options="swiperOptionTop">
        <swiper-slide>
          <div class="bannerItem1"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="bannerItem2"></div>
        </swiper-slide>
        <!-- 分页器 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- 左右箭头 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </a-row>
    <a-row type="flex" justify="center" style="flex-wrap: wrap;" class="partOne">
      <a-col :span="5" class="partOneItem" :xs="12">
        <div style="text-align:center;">
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
    <div class="partTwo">
      <div class="partTwoContent">
        <h2>文都管理类联考直播精品课程预告</h2>
        <a-row type="flex" justify="center" :gutter="20" style="width:100%" class="content">
          <a-col :span="6" class="courseImg">
            <img style="width: 400px; height: 240px" src="../../assets/image/part2_pic.png" />
            <!-- <div class="title">MBA直播协议班课时名称</div> -->
            <!-- <div class="time">
              <a-statistic-countdown :value="deadline" format="D 天 H 时 m 分 s 秒" class="countDown" />
            </div>-->
            <div class="time hvr-rectangle-out" style="margin-top:45px">
              <h3 style="color: white;margin-top: 0px;" @click="openUrl">点击了解详情</h3>
            </div>
          </a-col>
          <a-col :span="8" :xs="22" class="courseList">
            <div class="timeshow">
              <a-timeline style="height:365px">
                <a-timeline-item color="red">
                  <h3 @click="openUrl">手把手带你搞定在职考研</h3>
                  <p @click="openUrl">
                    在职院校匹配法
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                  <p @click="openUrl">
                    在职考研笔试秒杀法
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                  <p @click="openUrl">
                    在职考研必考英语心记法
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                  <p @click="openUrl">
                    在职考研必考面试模板法
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                  <p @click="openUrl">
                    优秀从现在开始
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                </a-timeline-item>
                <a-timeline-item color="red">
                  <h3 @click="openUrl">近期管综直播课</h3>
                  <p @click="openUrl">
                    逻辑预科
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                  <p @click="openUrl">
                    写作预科
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                  <p @click="openUrl">
                    数学预科
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                </a-timeline-item>
                <a-timeline-item color="red">
                  <h3 @click="openUrl">近期英语二</h3>
                  <p>
                    词汇唤醒
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                  <p @click="openUrl">
                    语法唤醒
                    <a class="timeBtn" @click="openUrl">预约试听</a>
                  </p>
                </a-timeline-item>
              </a-timeline>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="partThree">
      <div class="threeContent">
        <h2>文都管联研究院当季热销课程</h2>
        <h3>直播课程、面授课程、集训课程、1对1课程，管联名师，总有一款适合你</h3>
        <a-row type="flex" justify="center">
          <a-col :span="6">
            <div @click="openUrl">
              <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg01.png" />
              <div class="picName">直播OR面试，退费保障</div>
              <div class="picTitle">在职生笔试课程</div>
            </div>
          </a-col>
          <a-col :span="6">
            <div @click="openUrl">
              <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg02.png" />
              <div class="picName">班课+1v1材料修改+3v1模拟面试+小组面试</div>
              <div class="picTitle">在职生提面课程</div>
            </div>
          </a-col>
          <a-col :span="6" @click="openUrl">
            <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg03.png" />
            <div class="picName">钻石班+火箭班+协议班</div>
            <div class="picTitle">在校生直播课程</div>
          </a-col>
          <a-col :span="6" @click="openUrl">
            <img style="width: 270px; height: 200px" src="../../assets/image/part3_bg04.png" />
            <div class="picName">全年集训+半年集训营+暑期集训营</div>
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
          <swiper :options="swiperOptionMid">
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <swiper-slide>
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
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination-mid" slot="pagination"></div>
            <!-- 左右箭头 -->
            <div class="swiper-button-prev" slot="button-prev" style="left:68px !important"></div>
            <div class="swiper-button-next" slot="button-next" style="right:68px !important"></div>
          </swiper>
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
              <a-icon :type="item.icon" style="font-size:50px;margin:50px 50px 20px 50px" />
              <h3>{{item.title}}</h3>
              <span style="texi-align:left">{{item.text}}</span>
            </swiper-slide>
            <!--             
            <div class="swiper-button-prev" slot="button-prev" style="left:0px !important;"></div>
            <div class="swiper-button-next" slot="button-next" style="right:0px !important;"></div>-->
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
              <a class="knowMore" @click="openUrl">了解更多+</a>
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
              <a class="knowMore" @click="openUrl">了解更多+</a>
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
              <a class="knowMore" @click="openUrl">了解更多+</a>
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
              <a class="knowMore" @click="openUrl">了解更多+</a>
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
                  <a @click="openUrl">在线领取</a>
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
                  <a @click="openUrl">在线领取</a>
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
                  <a @click="openUrl">在线领取</a>
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
                  <a @click="openUrl">在线领取</a>
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
                  <a @click="openUrl">在线领取</a>
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
                  <a @click="openUrl">在线领取</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="freeBtn hvr-rectangle-out" @click="openUrl">免费获取更多资料</button>
      </div>
    </div>
    <div class="partEight">
      <div class="partEightContent">
        <h2>我们的承诺</h2>
        <div class="interduce">
          <div class="interduceItem">
            <h2>
              <strong style="color:#b20d15;font-weight:500">退费</strong>
              <strong style="color:black;font-weight:500">承诺</strong>
            </h2>
            <span>付费后，每位学员都会与文都签订一份协议，我们向报考协议班的学员承诺未通过相关要求有退费的保障</span>
          </div>
          <a-divider type="vertical" class="a-divider" />
          <div class="interduceItem">
            <h2>
              <strong style="color:#b20d15;font-weight:500">师资</strong>
              <strong style="color:black;font-weight:500">承诺</strong>
            </h2>
            <span>文都管联研究院承诺“管联名校师资”，保证优质教学服务</span>
          </div>
          <a-divider type="vertical" class="a-divider" />
          <div class="interduceItem">
            <h2>
              <strong style="color:#b20d15;font-weight:500">服务</strong>
              <strong style="color:black;font-weight:500">承诺</strong>
            </h2>
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
                  <a-select-option value="规划课">规划课</a-select-option>
                  <a-select-option value="逻辑课">逻辑课</a-select-option>
                  <a-select-option value="写作课">写作课</a-select-option>
                  <a-select-option value="数学课">数学课</a-select-option>
                  <a-select-option value="英语课">英语课</a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :span="6">
              <a-form-model-item>
                <a-select v-model="form.region" placeholder="请选择试听专业">
                  <a-select-option value="MBA">MBA</a-select-option>
                  <a-select-option value="MPA">MPA</a-select-option>
                  <a-select-option value="MBM">MBM</a-select-option>
                  <a-select-option value="MTA">MTA</a-select-option>
                  <a-select-option value="MPAcc">MPAcc</a-select-option>
                  <a-select-option value="Mlis">Mlis</a-select-option>
                  <a-select-option value="MAud">MAud</a-select-option>
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
                >
                  <!-- <a-icon slot="prefix" type="user" /> -->
                </a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="6">
              <a-form-model-item>
                <a-input
                  type="text"
                  v-model="form.telephone"
                  placeholder="请选择输入手机号"
                  prefix-icon="el-icon-mobile"
                >
                  <!-- <a-icon slot="prefix" type="mobile" /> -->
                </a-input>
              </a-form-model-item>
            </a-col>
          </a-row>
          <a-row type="flex" justify="center">
            <a-col :span="3">
              <a-form-model-item>
                <button class="freeBtn hvr-rectangle-out" @click="openUrl" style="padding:0">立即预约</button>
              </a-form-model-item>
            </a-col>
          </a-row>
        </a-form-model>
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
      bannerH: "600px",
      imgList: [
        {
          title: "多种授课方式自由选择",
          text:
            "直播、录播、面授、集训多种授课方式，自由选择，不同授课方式不同体验",
          icon: "file-sync"
        },
        {
          title: "学测结合更高效",
          text: "结合授课内容随堂考,课后练,检测学习效果,实时调整学习计划",
          icon: "control"
        },
        {
          title: "专属学习答疑交流群",
          text: "课堂讲师随堂答疑,课后助教24小时答疑,阶段专题直播答疑",
          icon: "message"
        },
        {
          title: "授课内容随时看反复看",
          text: "直播课程将以录播形式保存,学员随时查漏补缺",
          icon: "history"
        },
        {
          title: "3V1服务模式克服学习惰性",
          text: "学管课前督学,讲师课中传授知识,助教课后答疑并批改作业",
          icon: "cluster"
        },
        {
          title: "上课灵活安全又方便",
          text: "面授就近入学、直播电脑、iPad、手机可在线 学习，灵活且便捷",
          icon: "setting"
        }
      ],
      swiperOption: {
        direction: "horizontal", // 滑动的方向(水平方向)
        //显示分页
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true, // 是否循环
        autoplay: {
          delay: 2000, // 自动播放的时长
          disableOnInteraction: false
        },
        speed: 1500,
        slidesPerView: 5, // 设置可视区一共显示几张图片,设置auto,设置auto为自适应;
        centeredSlides: true, // 设置为true时,带有active-slide类名的图片会居中
        spaceBetween: 2 //  每张图片之间的间隔
      },
      form: {
        name: "",
        region: undefined,
        course: undefined,
        telephone: ""
      },
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      swiperOptionTop: {
        //显示分页
        pagination: {
          el: ".swiper-pagination"
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 3000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      },
      swiperOptionMid: {
        //显示分页
        pagination: {
          el: ".swiper-pagination-mid"
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 3000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      }
    }
  },
  methods: {
    openUrl() {
      window.open(
        "http://pdt.zoosnet.net/LR/Chatpre.aspx?id=PDT30733869&lng=cn"
      )
    }
  },

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
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>