<template>
  <div>
    <a-layout>
      <a-layout-header>
        <a-row type="flex" justify="center" class="navRow">
          <a-col :span="5" :xs="16" :sm="17" :md="5" :lg="5" :xl="5" class="navLogo">
            <div>
              <img src="../../assets/image/logo.png" alt />
            </div>
          </a-col>
          <a-col :span="15" :lg="15" :xl="13" :offset="1" class="navList">
            <a-menu mode="horizontal" class="hidden-xs-only hidden-sm-only">
              <a-menu-item key="/home">
                <router-link to="/home">首页</router-link>
              </a-menu-item>
              <a-sub-menu key="/course">
                <template slot="title">课程中心</template>
                <a-menu-item key="/zStuRecruit">
                  <router-link to="/zStuRecruit">在职生招生简章</router-link>
                </a-menu-item>
                <a-menu-item key="/xStuRecruit">
                  <router-link to="/xStuRecruit">在校生招生简章</router-link>
                </a-menu-item>
                <a-menu-item key="2-3">
                  <router-link to="/">在校生直播课程</router-link>
                </a-menu-item>
                <a-menu-item key="2-4">
                  <router-link to="/">在职生提面课程</router-link>
                </a-menu-item>
                <a-menu-item key="2-5">
                  <router-link to="/">在职生笔试课程</router-link>
                </a-menu-item>
                <a-menu-item key="2-6">
                  <router-link to="/">在校生集训课程</router-link>
                </a-menu-item>
              </a-sub-menu>
              <a-menu-item key="/teacherList">
                <router-link to="/teacherList">师资力量</router-link>
              </a-menu-item>
              <a-menu-item key="/teachService">
                <router-link to="/teachService">教学服务</router-link>
              </a-menu-item>
              <a-menu-item key="/glnews">
                <router-link to="/glnews">管联资讯</router-link>
              </a-menu-item>
              <a-menu-item key="/audition">
                <router-link to="/audition">试听课程</router-link>
              </a-menu-item>
            
              <a-menu-item key="/about">
                <router-link to="/about">关于我们</router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content>
        <!-- leave-active-class="animated zoomOutDown" -->
        <transition mode="out-in" enter-active-class="animated zoomInDown">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.ant-layout-header {
  padding: 0;
  height: 80px !important;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
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
    height: 80px;
    .navLogo {
      font-size: 22px;
      img {
        float: right;
      }
      span {
        font-weight: 600;
        color: #ff8f8f;
      }
    }
    .navList {
      ul {
        border-bottom: 0 !important;
      }
    }
  }
}
.a-layout-content {
  height: 95vh;
  overflow: auto;
}
// .ant-menu-item-active{
//   color: #b20d15 !important;
//   border-bottom: #b20d15 !important
// }
</style>