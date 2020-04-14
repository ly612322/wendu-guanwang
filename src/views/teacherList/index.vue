<template>
  <div>
    <div class="topMes">
      <el-row type="flex" justify="center" style="flex-wrap: wrap" class="eRow" :gutter="20">
        <el-col class="leftMes" :xs="24" :sm="10" :md="12" :xl="16" :lg="15">
          <h2>专业辅导老师均来自北大、清华、交大MBA及MPAcc</h2>
          <h3>豪华名师团队、专业学术教研、丰富提面和复试经验尽在文都管联研究院</h3>
        </el-col>
        <el-col :xs="24" :sm="12" :md="10" :xl="8" :lg="7" class="eCol">
          <el-card class="login-form-layout">
            <el-form autocomplete="on" :model="loginForm" ref="loginForm" label-position="left">
              <div class="title">
                <h2 class="login-title">立刻约见名师做1V1规划</h2>
              </div>
              <div key="account" class="accountLogin">
                <el-form-item prop="username">
                  <el-input
                    name="username"
                    type="text"
                    prefix-icon="el-icon-user-solid"
                    v-model="loginForm.username"
                    autocomplete="on"
                    placeholder="请输入用户名"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    name="password"
                    show-password
                    prefix-icon="el-icon-key"
                    v-model="loginForm.password"
                    autocomplete="on"
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
              </div>
              <el-form-item style="margin-bottom: 20px;text-align: center">
                <el-button style="width: 99%" type="primary">立刻报名</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="partTwo">
      <h2>文都管联研究院首席专家顾问</h2>
      <el-row type="flex" justify="center" class="twoContent">
        <el-col :span="5" class="twoItem">
          <el-card :body-style="{ padding: '0px' }" class="itemCard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>课程详情</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" class="twoItem">
          <el-card :body-style="{ padding: '0px' }" class="itemCard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>课程详情</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" class="twoItem">
          <el-card :body-style="{ padding: '0px' }" class="itemCard">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>课程详情</span>
              <div class="bottom clearfix">
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
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

<style lang="less">
.topMes {
  width: 100%;
  background: url("../../assets/image/login_center_bg.png") no-repeat center
    center;
  background-color: #ff8f8fcb;
  display: flex;
  justify-content: center;
  .eRow {
    width: 100%;
    align-items: center;
    .leftMes {
      color: white;
      margin-left: 37px;
      margin-bottom: 0px;
      h2 {
        font-size: 30px;
      }
    }
    .eCol {
      display: flex;
      justify-content: center;
      .login-form-layout {
        width: 88%;
        margin: 30px 0 30px 0;
        h2 {
          text-align: center;
        }
      }
    }
  }
}
.partTwo {
  text-align: center;
  h2 {
    padding: 25px 0;
  }
  .twoContent {
    display: flex;
    justify-content: center;
    .twoItem {
      text-align: center;
      .itemCard {
        width: 80%;
      }
    }
  }
}
</style>