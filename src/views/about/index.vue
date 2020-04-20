<template>
  <div class="about">
    <div class="aboutTopMes"></div>
    <div class="partOne">
      <div class="partOneContent">
        <h2>文都管联研究院介绍</h2>
        <div class="partTenItem">
          <div class="imgLeft">
            <img src="../../assets/image/about/part2_1.png" />
          </div>
          <div class="tenRight">
            <div class="nineLeft">
              <p>世纪文都教育科技集团股份有限公司拥有丰厚的教育资源,总部位于北京,在全国12省市设有20多家直营机构,在加拿大等国家设有海外直营机构。在全国有600多家加盟机构,5000多个教学点,直营机构员工2000多人。累计录制各类教学视频课程100多万课时,策划、编辑、发行图书3000多万册,培训学员1000多万人次。</p>
              <p>管联研究院是文都教育集团旗下的专业化研究院。通过大数据赋能教学，构建知识图谱，挖掘历年真题，分析站内外数据，找出出题规律并对考点进行预测。按照教育心理学和学生的认知规律，萃取文都22年的教学教研经验，编写出获得专家认可的精品课程，通过优秀讲师辅导与学管师精心服务，累计帮助2万多名学生有效的提高考试分数，顺利进入目标院校。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partTwo">
      <div class="partTwoContent">
        <h2>学员评价</h2>
        <a-row :gutter="[0,16]" type="flex" justify="center">
          <a-col :span="8">
            <a-card hoverable>
              <img src="../../assets/image/about/part1_1.png" slot="cover" />
              <a-card-meta title="李成杰">
                <template slot="description">
                  <div style="margin:5px 0">2019年考取北大光华MBA</div>
                  <div
                    style="text-align:left"
                  >初入北大上课，每一个看似普通的教师，几乎都是某一领域的"大牛"，这些教师不仅有着很高的学术水平也有极高的教学水平。教师会下功夫挑选教材和教学方法并和学生讲清楚这么选择的好处。教师备课根本不是随便糊弄，他们会浏览很多相关书籍，并在课堂上指出其他一些学者会犯的错误。而每堂课几乎都是满满的干货，教师中英文无缝衔接，并用提问的方式确认每个同学都弄懂了教学内容。感谢文都，感谢那个义无反顾努力到忘我的2018年，从职场到学校让我遇到更好的自己。</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card hoverable>
              <img src="../../assets/image/about/part1_3.png" slot="cover" />
              <a-card-meta title="高婷">
                <template slot="description">
                  <div style="margin:5px 0">2019年考取交大MPA</div>
                  <div style="text-align:left">
                    怀着一颗真诚的心去面试。你报考某个学校，一定是因为你喜欢那所学校，而不是简单地走个过场。因为你所准备好考官可能会问到的几百个问题的答案，是你面试过程的骨骼，而你对目标院校的理解、热爱、忠诚是面试过程的肌肉，二者的有机结合会使得你从容自若，流光溢彩，博得掌声。
                    自己要放开，不要患得患失。在做了充分的准备后，就应该忘记成败，放开胸襟，向考官袒露心声、描绘理想、阐述可行性，流露真情，展现本真——面试时，请只记得这句话，把其他都忘掉
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="8">
            <a-card hoverable>
              <img src="../../assets/image/about/part1_4.png" slot="cover" />
              <a-card-meta title="王佳宁">
                <template slot="description">
                  <div style="margin:5px 0">2019年考取清华MEM</div>
                  <div style="text-align:left">
                    如果有人告诉你，人北清MBA随便准备准备就能上，全国MBA联考，随便复习个1周2周的就能过，甚至考200多分请路边捡块石头、然后轻轻的打到他的头上。因为这不适用于正常人。
                    考研是一场生命的洗礼，尤其对于已经工作10年以上的人，非常值得珍惜。要像珍爱自己的眼睛一样，珍爱自己、珍爱自己的学校。考上只是一个开始，每一个人都应该自问：这一生我应该如何度过？我想，我们这一生都将在回答提面申请材料中的第一个问题：你要成为怎样一个人？
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
    <pagefooter></pagefooter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/about.less);
</style>
