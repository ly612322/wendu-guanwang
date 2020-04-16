<template>
  <div class="news">
    <div class="newsTopMes"></div>
    <div class="partOne">
      <div class="partOneContent">
        <a-list itemLayout="horizontal" :dataSource="listData" size="large" :pagination="pagination">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta :description="item.description">
              <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
              <a-avatar
              style="width:290px;height:158px;border-radius:0"
                slot="avatar"
                :src="item.avatar"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
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
      listData: [
        {
          title: `ant design vue part`,
          avatar: require("../../assets/image/service/part3_1.png"),
          description:
            "Ant Design, a design language for background applications, is refined by Ant UED Team."
        },
        {
          title: `ant design vue part`,
          avatar: require("../../assets/image/service/part3_2.png"),
          description:
            "Ant Design, a design language for background applications, is refined by Ant UED Team."
        },
        {
          title: `ant design vue part`,
          avatar: require("../../assets/image/service/part3_3.png"),
          description:
            "Ant Design, a design language for background applications, is refined by Ant UED Team."
        },
        {
          title: `ant design vue part`,
          avatar: require("../../assets/image/service/part3_4.png"),
          description:
            "Ant Design, a design language for background applications, is refined by Ant UED Team."
        },
        {
          title: `ant design vue part`,
          avatar: require("../../assets/image/service/part3_4.png"),
          description:
            "Ant Design, a design language for background applications, is refined by Ant UED Team."
        },
        {
          title: `ant design vue part`,
          avatar: require("../../assets/image/service/part3_4.png"),
          description:
            "Ant Design, a design language for background applications, is refined by Ant UED Team."
        },
      ],
      pagination: {
        onChange: page => {
          console.log(page)
        },
        pageSize: 4
      },
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../assets/less/news.less);
</style>