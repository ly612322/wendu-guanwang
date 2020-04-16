<template>
  <div class="service">
    <div class="serviceTopMes">
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
        <h2>课前服务</h2>
        <a-row :gutter="[16,16]">
          <a-col :span="4">
            <img src="../../assets/image/service/part1_1.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_2.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_3.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_4.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_5.png" alt />
          </a-col>
        </a-row>
        <a-row :gutter="[16,16]">
          <a-col :span="4">
            <img src="../../assets/image/service/part1_10.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_9.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_8.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_7.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part1_6.png" alt />
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
            <div>
              <img
                style="width: 270px; height: 200px"
                src="../../assets/image/service/part3_1.png"
              />
              <div class="picName">直播OR面试，退费保障</div>
              <div class="picTitle">在职生笔试课程</div>
            </div>
          </a-col>
          <a-col :span="6">
            <div>
              <img
                style="width: 270px; height: 200px"
                src="../../assets/image/service/part3_2.png"
              />
              <div class="picName">直播OR面试，退费保障</div>
              <div class="picTitle">在职生提面课程</div>
            </div>
          </a-col>
          <a-col :span="6">
            <img style="width: 270px; height: 200px" src="../../assets/image/service/part3_3.png" />
            <div class="picName">直播OR面试，退费保障</div>
            <div class="picTitle">在校生直播课程</div>
          </a-col>
          <a-col :span="6">
            <img style="width: 270px; height: 200px" src="../../assets/image/service/part3_4.png" />
            <div class="picName">直播OR面试，退费保障</div>
            <div class="picTitle">管联集训营课程</div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="partFour">
      <div class="partFourContent">
        <h2>课后服务</h2>
        <a-row :gutter="[10,12]" style="width:100%">
          <a-col :span="4">
            <img src="../../assets/image/service/part4_1.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part4_2.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part4_3.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part4_4.png" alt />
          </a-col>
          <a-col :span="4">
            <img src="../../assets/image/service/part4_5.png" alt />
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="partFive">
      <div class="partFiveContent">
        <h2>教辅材料</h2>
        <a-row :gutter="[16,16]">
          <a-col :span="8">
            <img src="../../assets/image/service/part5_1.png" alt />
          </a-col>
          <a-col :span="8">
            <img src="../../assets/image/service/part5_2.png" alt />
          </a-col>
          <a-col :span="8">
            <img src="../../assets/image/service/part5_3.png" alt />
          </a-col>
        </a-row>
        <a-row :gutter="[16,16]">
          <a-col :span="8">
            <img src="../../assets/image/service/part5_4.png" alt />
          </a-col>
          <a-col :span="8">
            <img src="../../assets/image/service/part5_5.png" alt />
          </a-col>
          <a-col :span="8">
            <img src="../../assets/image/service/part5_6.png" alt />
          </a-col>
        </a-row>
      </div>
    </div>
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
@import url(../../assets/less/service.less);
</style>