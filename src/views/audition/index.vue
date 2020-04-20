<template>
  <div class="audition">
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
        <h2>免费试听课程</h2>
        <div class="card-container">
          <a-tabs type="card">
            <a-tab-pane tab="规划课" key="1">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card title="2021届管理类联考院校规划试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考院校规划试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考院校规划试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="管综专业课" key="2">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card title="2021届管理类联考管综逻辑试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考管综逻辑试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考管综逻辑试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="英语二" key="3">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card title="2021届管理类联考英语二试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考英语二试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考英语二试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="提前面试" key="4">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card title="2021届管理类联考管综提面试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考管综提面试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考管综提面试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="1V1课程" key="5">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card title="2021届管理类联考提面1V1试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考提面1V1试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card title="2021届管理类联考提面1V1试听课" style="width: 300px">
                    <template class="ant-card-actions" slot="actions">
                      <span>立即预约</span>
                    </template>
                    <a-card-meta title="张晓旭" description style="height:84px">
                      <a-avatar slot="avatar" :src="header" />
                    </a-card-meta>
                    <h3 style="float:right;margin:0;padding:0">已报423人</h3>
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
                <a-button class="freeBtn">立即预约</a-button>
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
      header: require("../../assets/image/audition/teacher.png")
    }
  },
  methods: {
    callback(key) {
      console.log(key)
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