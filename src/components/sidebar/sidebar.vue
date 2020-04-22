<template>
  <div>
    <div class="content">
      <div class="item1" @click="openUrl">
        <a-icon type="customer-service" class="icon" theme="filled" />
        <span>在线咨询</span>
      </div>
      <div class="item2">
        <a-popover placement="left" class="itemContent">
          <template slot="content">
            <p style="font-size: 18px;margin-bottom:0">杨老师:18792687802</p>
          </template>
          <!-- <template slot="title">
            <span>Title</span>
          </template>-->
          <a-icon type="phone" class="icon" theme="filled" />
          <span>电话咨询</span>
        </a-popover>
      </div>
      <div class="item3">
        <a-popover placement="left" class="itemContent">
          <template slot="content">
            <img src="../../assets/image/rightMa.jpg" alt style="width:150px;height:150px" />
          </template>
          <!-- <template slot="title">
            <span>Title</span>
          </template>-->
          <a-icon type="wechat" class="icon" />
          <span>微信咨询</span>
        </a-popover>
      </div>
      <div class="item4">
        <a-icon type="up" class="icon" @click="backTop" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "siderbar",
  methods: {
    backTop() {
      document.getElementsByClassName(
        "home"
      )[0].scrollTop = document.documentElement.scrollTop = 0
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
.content {
  z-index: 99999;
  position: fixed;
  right: 0;
  top: 38%;
  width: 70px;
  height: 270px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  .item1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 20px;

    .icon {
      font-size: 32px;
      color: red;
      margin-bottom: 3px;
    }
  }
  .item2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    .itemContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon {
        font-size: 32px;
        color: rgb(238, 196, 12);
        margin-bottom: 3px;
      }
    }
  }
  .item3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    .itemContent {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 32px;
        color: rgb(0, 173, 29);
        margin-bottom: 3px;
      }
    }
  }
  .item4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    .icon {
      font-size: 40px;
      color: rgb(71, 71, 71);
      font-weight: 550;
    }
  }
}
</style>