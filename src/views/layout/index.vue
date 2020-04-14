<template>
  <div>
    <el-container>
      <el-header>
        <!-- <el-row type="flex" justify="space-between" class="topRow">
          <el-col :span="6" :xs="12" class="topLeft">
            <div class="logoTitle">精准预测，轻松备考</div>
          </el-col>
          <el-col :span="6" :xs="12" class="topRight">
            <div>咨询热线：18092678900</div>
          </el-col>
        </el-row>-->
        <el-row type="flex" justify="center" class="navRow">
          <el-col :span="5" :xs="16" :sm="17" :md="5" :lg="5" class="navLogo">
            <div>
              <span>W</span>ENDU
            </div>
          </el-col>
          <el-col :span="15" :xs="3" :sm="2" :md="15" :lg="15" class="navList">
            <el-menu
              mode="horizontal"
              menu-trigger="click"
              :router="true"
              :default-active="activeIndex"
              text-color="#000"
              active-text-color="#ff8f8f"
              class="hidden-xs-only hidden-sm-only"
            >
              <el-menu-item index="/home">首页</el-menu-item>
              <el-submenu index="/course">
                <template slot="title">课程中心</template>
                <el-menu-item index="/zStuRecruit">在职生招生简章</el-menu-item>
                <el-menu-item index="/xStuRecruit">在校生招生简章</el-menu-item>
                <el-menu-item index="2-3">在校生直播课程</el-menu-item>
                <el-menu-item index="2-3">在职生提面课程</el-menu-item>
                <el-menu-item index="2-3">在职生笔试课程</el-menu-item>
                <el-menu-item index="2-3">在校生集训课程</el-menu-item>
              </el-submenu>
              <el-menu-item index="/teacherList">师资力量</el-menu-item>
              <el-menu-item index="/teachService">教学服务</el-menu-item>
              <el-menu-item index="/glnews">管联资讯</el-menu-item>
              <el-submenu index="/audition">
                <template slot="title">试听课程</template>
                <el-menu-item index="/plan">规划课试听</el-menu-item>
                <el-menu-item index="/logic">逻辑试听</el-menu-item>
                <el-menu-item index="/write">写作试听</el-menu-item>
                <el-menu-item index="/math">数学试听</el-menu-item>
                <el-menu-item index="/english">英语试听</el-menu-item>
                <el-menu-item index="/oneOnone">一对一答疑试听</el-menu-item>
              </el-submenu>
              <el-menu-item index="/about">关于我们</el-menu-item>
            </el-menu>
            <el-button
              plain
              round
              icon="el-icon-s-fold"
              class="hidden-md-only hidden-md-and-up menuBtn"
              @click="drawer = true"
            ></el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!-- leave-active-class="animated zoomOutDown" -->
        <transition mode="out-in" enter-active-class="animated zoomInDown">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
    <el-drawer :visible.sync="drawer" direction="rtl" size="300px" :modal="true">
      <el-menu
        mode="vertical"
        menu-trigger="click"
        :router="true"
        :default-active="activeIndex"
        text-color="#000"
        active-text-color="#ff8f8f"
      >
        <el-menu-item index="/home">首页</el-menu-item>
        <el-submenu index="/course">
          <template slot="title">课程中心</template>
          <el-menu-item index="/zStuRecruit">在职生招生简章</el-menu-item>
          <el-menu-item index="/xStuRecruit">在校生招生简章</el-menu-item>
          <el-menu-item index="2-3">在校生直播课程</el-menu-item>
          <el-menu-item index="2-3">在职生提面课程</el-menu-item>
          <el-menu-item index="2-3">在职生笔试课程</el-menu-item>
          <el-menu-item index="2-3">在校生集训课程</el-menu-item>
        </el-submenu>
        <el-menu-item index="/teacherList">师资力量</el-menu-item>
        <el-menu-item index="/teachService">教学服务</el-menu-item>
        <el-menu-item index="/glnews">管联资讯</el-menu-item>
        <el-submenu index="/audition">
          <template slot="title">试听课程</template>
          <el-menu-item index="/plan">规划课试听</el-menu-item>
          <el-menu-item index="/logic">逻辑试听</el-menu-item>
          <el-menu-item index="/write">写作试听</el-menu-item>
          <el-menu-item index="/math">数学试听</el-menu-item>
          <el-menu-item index="/english">英语试听</el-menu-item>
          <el-menu-item index="/oneOnone">一对一答疑试听</el-menu-item>
        </el-submenu>
        <el-menu-item index="/about">关于我们</el-menu-item>
      </el-menu>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/home",
      drawer: false
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
  height: 70px !important;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .topRow {
    background-color: #ff8f8f;
    height: 30px;
    align-items: center;
    color: white;
    font-weight: lighter;
    .topLeft {
      text-align: center;
    }
    .top-right {
      text-align: center;
    }
  }
  .navRow {
    align-items: center;
    height: 70px;
    .navLogo {
      font-size: 22px;
      span {
        font-weight: 600;
        color: #ff8f8f;
      }
    }
    .navList {
      ul {
        border-bottom: 0 !important;
      }
      .el-menu {
        display: flex;
        justify-content: start;
      }
    }
  }
}
.el-main {
  overflow: auto;
  padding: 0;
  height: 100vh;
}
.menuBtn {
  font-size: 20px;
}
</style>