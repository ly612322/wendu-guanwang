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
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="管综专业课" key="2">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="英语二" key="3">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="提前面试" key="4">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
              </a-row>
            </a-tab-pane>
            <a-tab-pane tab="复试" key="5">
              <a-row :gutter="[16,16]">
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
                  </a-card>
                </a-col>
                <a-col :span="8">
                  <a-card hoverable style="width: 300px">
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      slot="cover"
                    />
                    <template class="ant-card-actions" slot="actions">
                      <a-icon type="setting" key="setting" />
                      <a-icon type="edit" key="edit" />
                      <a-icon type="ellipsis" key="ellipsis" />
                    </template>
                    <a-card-meta title="Card title" description="This is the description">
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-card-meta>
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
          <a-row type="flex" justify="center" :gutter="20">
            <a-col :span="6">
              <a-form-model-item>
                <a-select v-model="form.region" placeholder="请选择试听科目">
                  <a-select-option value="shanghai">Zone one</a-select-option>
                  <a-select-option value="beijing">Zone two</a-select-option>
                </a-select>
              </a-form-model-item>
            </a-col>
            <a-col :span="6">
              <a-form-model-item>
                <a-select v-model="form.region" placeholder="请选择报考专业">
                  <a-select-option value="shanghai">Zone one</a-select-option>
                  <a-select-option value="beijing">Zone two</a-select-option>
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
                ></a-input>
              </a-form-model-item>
            </a-col>
            <a-col :span="6">
              <a-form-model-item>
                <a-input
                  type="text"
                  v-model="form.telephone"
                  placeholder="请选择输入手机号"
                  prefix-icon="el-icon-mobile"
                ></a-input>
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
        region: '',
        course: '',
        telephone:''
   
      },
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