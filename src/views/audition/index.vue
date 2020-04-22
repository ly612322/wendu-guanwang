<template>
  <div class="home">
    <div class="auditionTopMes">
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
                    placeholder="请输入手机号"
                  ></a-input>
                </a-form-model-item>
              </div>
              <a-form-model-item style="margin-bottom: 20px;text-align: center">
                <button class="hvr-rectangle-out" @click="openUrl" style="padding:0;width:99%">立即预约</button>
              </a-form-model-item>
            </a-form-model>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div class="partOne">
      <div class="partOneContent">
        <h2>免费试听课程</h2>
        <div class="card-container">
          <a-tabs type="card">
            <a-tab-pane :tab="index" :key="index" v-for="(item,index) in freeCourse">
              <a-row :gutter="[16,16]">
                <a-col :span="8" v-for="(text,number) in item" :key="number">
                  <a-card :title="text.title" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span @click="openUrl" style="color:#b20d15">立即预约</span>
                    </template>
                    <a-card-meta :title="text.name" description style="height:84px">
                      <a-avatar slot="avatar" :src="text.pic" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报{{text.count}}人</h3>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
    <div class="partNine">
      <div class="partNineContent">
        <h2>预约试听，享受高端一对一服务</h2>
        <a-form-model :model="form">
          <a-row type="flex" justify="center" :gutter="40">
            <a-col :span="6">
              <a-form-model-item>
                <a-select v-model="form.region" placeholder="请选择试听科目">
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
          <a-row type="flex" justify="center" :gutter="40">
            <a-col :span="6">
              <a-form-model-item>
                <a-input type="text" v-model="form.name" placeholder="请输入姓名"></a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="6">
              <a-form-model-item>
                <a-input type="text" v-model="form.telephone" placeholder="请输入手机号"></a-input>
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
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      form: {
        name: "",
        region: undefined,
        course: undefined,
        telephone: ""
      },
      freeCourse: {
        规划课: [
          {
            title: "2021届管理类联考院校规划试听课",
            pic: require("../../assets/image/audition/teacher.png"),
            name: "张晓旭",
            count: "277"
          },
          {
            title: "2021届管理类联考复习规划试听课",
            pic: require("../../assets/image/part04_pic_liyang.png"),
            name: "李阳",
            count: "423"
          },
          {
            title: "2021届管理类联考专业就业规划指导",
            pic: require("../../assets/image/part04_pic_liyang.png"),
            name: "李阳",
            count: "455"
          }
        ],
        专业课: [
          {
            title: "2021届管理类联考逻辑试听课",
            pic: require("../../assets/image/audition/teacher.png"),
            name: "张晓旭",
            count: "314"
          },
          {
            title: "2021届管理类联考写作试听课",
            pic: require("../../assets/image/teacherList/part3_duoliang.png"),
            name: "尹多良",
            count: "288"
          },
          {
            title: "2021届管理类联考数学试听课",
            pic: require("../../assets/image/part04_pic_wudi.png"),
            name: "武迪",
            count: "341"
          }
        ],
        英语二: [
          {
            title: "2021届管理类联考英语二——单词语法",
            pic: require("../../assets/image/part04_pic_krishu.png"),
            name: "Kris Hu",
            count: "255"
          },
          {
            title: "2021届管理类联考英语二——阅读完形",
            pic: require("../../assets/image/teacherList/part3_zixuan.png"),
            name: "张紫宣",
            count: "384"
          },
          {
            title: "2021届管理类联考英语二——翻译作文",
            pic: require("../../assets/image/teacherList/part3_zhangliao.png"),
            name: "张辽",
            count: "297"
          }
        ],
        提前面试: [
          {
            title: "2021届管理类联考提前面试—背景评估",
            pic: require("../../assets/image/part04_pic_liyang.png"),
            name: "李阳",
            count: "135"
          },
          {
            title: "2021届管理类联考提前面试—综合面试",
            pic: require("../../assets/image/part04_pic_liyang.png"),
            name: "李阳",
            count: "235"
          },
          {
            title: "2021届管理类联考复试调剂试听课",
            pic: require("../../assets/image/audition/teacher.png"),
            name: "张晓旭",
            count: "221"
          }
        ],
        "1对1课程": [
          {
            title: "2021届管理类联考提前面试1V1试听课",
            pic: require("../../assets/image/part04_pic_liyang.png"),
            name: "李阳",
            count: "263"
          },
          {
            title: "2021届管理类联考1V1答疑试听课",
            pic: require("../../assets/image/audition/teacher.png"),
            name: "张晓旭",
            count: "125"
          },
          {
            title: "2021届管理类联考1V1整体规划课",
            pic: require("../../assets/image/audition/teacher.png"),
            name: "张晓旭",
            count: "284"
          }
        ]
      }
    }
  },
  methods: {
    callback(key) {
      console.log(key)
    },
    openUrl() {
      window.open(
        "http://pdt.zoosnet.net/LR/Chatpre.aspx?id=PDT30733869&lng=cn"
      )
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/audition.less);
</style>
<style>
.card-container {
  background: white;
  overflow: hidden;
  padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>