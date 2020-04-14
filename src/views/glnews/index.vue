<template>
  <div>
    <el-row type="flex" justify="center">
      <div class="topMes">
        <el-col class="leftMes" :span="16">
          <h2>管联资讯管联资讯管联资讯</h2>
          <h3>讲师、助教、学管老师全程护航，深度互动，全力做好学员每时每刻学习辅导</h3>
        </el-col>
        <el-col :span="8">
          <el-card class="login-form-layout">
            <el-form autocomplete="on" :model="loginForm" ref="loginForm" label-position="left">
              <div class="title">
                <h2 class="login-title">立刻预约助教免费1V1答疑</h2>
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
      </div>
    </el-row>
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
  height: 340px;
  background: url("../../assets/image/login_center_bg.png") no-repeat center
    center;
  background-color: #ff8f8fcb;
  display: flex;
  align-items: center;
  .leftMes {
    color: white;
    margin-left: 60px;
    h2 {
      font-size: 30px;
    }
  }
  .login-form-layout {
    width: 80%;
    h2 {
      text-align: center;
    }
  }
}
</style>