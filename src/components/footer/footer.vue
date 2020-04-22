<template>
  <div>
    <div class="footer">
      <div class="footerRight">
        <div class="footerLeft">
          <div class="nav">
            <router-link to="/about">
              <h3>关于我们</h3>
            </router-link>
            <router-link to="/zStuRecruit">
              <h3>课程中心</h3>
            </router-link>
            <router-link to="/glnews">
              <h3>新闻动态</h3>
            </router-link>
            <router-link to="/audition">
              <h3>预约试听</h3>
            </router-link>
            <router-link to="/about">
              <h3>常见问题</h3>
            </router-link>
          </div>
          <hr />
          <p>公司地址：北京市海淀区西三环北路72号世纪经贸大厦B座22层</p>
          <p>公众号：文都管联院</p>
        </div>
        <div class="nineRight">
          <img src="../../assets/image/part09_pic.png" style="width:320px" alt />
        </div>
      </div>
    </div>
    <p
      @click="openNewUrl"
      style="text-align:center;margin-top:8px"
    >陕ICP备16004086号-5 版权：世纪文都教育科技集团股份有限公司</p>
  </div>
</template>

<script>
export default {
  name: "pageFooter",
  methods: {
    openNewUrl() {
      window.open("http://www.beian.miit.gov.cn/")
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  background-color: white;

  height: 300px;
  width: 100%;

  .footerRight {
    width: 100%;
    height: 300px;
    z-index: 1;
    background-color: #505050;
    display: flex;
    justify-content: center;
    align-items: center;

    .footerLeft {
      width: 550px;
      padding-top: 0px;

      .nav {
        display: flex;
        width: 500px;

        h3 {
          font-size: 14px;
          font-weight: 500;
          margin-right: 20px;
        }
      }

      h3 {
        margin-top: 20px;
        font-size: 24px;
        color: #fff;
        text-align: center;
      }

      hr {
        font-size: 24px;
        color: #fff;
        text-align: center;
      }

      p {
        font-size: 14px;
        color: #fff;
        margin: 29px 0 2px 0;
      }

      .detailsBg {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 50px;
        background-color: #333;
        opacity: 0.1;
        top: 0;
        left: 50%;
        transition: all 0.45s;
      }
    }

    .nineRight {
      padding-top: 10px;
      float: left;
      margin-left: 117px;
    }
  }
}
</style>