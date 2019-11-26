<template>
  <div id="headMenu">
    <Menu mode="horizontal" theme="light" active-name="0" menuitems class="head_nav">
      <Submenu :name="index" v-for="(value, index) in menu.list" :key="value.url">
        <template slot="title">
          <Icon :type="stats.one" v-text="value.menu"></Icon>
        </template>
        <MenuGroup :title="value.menu">
          <MenuItem :name="(+'0-'+one)" v-for="(item, one) in value.list" :key="item.menu">
            <router-link :to="('/' + (item.id))" v-text="item.menu"></router-link>
          </MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "headMenu",
  data() {
    return {
      navList: "",
      theme1: "light",
      menu: {
        list: [
          {
            menu: "学家养生",
            list: [
              {
                menu: "道家养生",
                id: "daoJia"
              },
              {
                menu: "儒家养生",
                id: "ruJia"
              }
            ]
          },
          {
            menu: "中养经典",
            list: [
              {
                menu: "古籍经典",
                id: "guji"
              },
            ]
          },
          {
            menu: "食谱食材",
            list: [
              {
                menu: "食疗养生",
                id: "shiliao"
              },
              {
                menu: "食谱养生",
                id: "shipu"
              },
               {
                menu: "茶道养生",
                id: "cahddo"
              },
              {
                menu: "营养师",
                id: "yingyangshi"
              }
            ]
          },
          {
            menu: "琴棋书画",
            list: [
              {
                menu: "琴",
                id: "qin"
              },
              {
                menu: "棋",
                id: "qi"
              },
              {
                menu: "书",
                id: "shu"
              },
              {
                menu: "画",
                id: "hua"
              }
            ]
          },
          {
            menu: "针灸痧罐",
            list: [
              {
                menu: "针刺",
                id: "zhenCi"
              },
              {
                menu: "艾灸",
                id: "aiJiu"
              },
              {
                menu: "刮痧",
                id: "guaSha"
              },
              {
                menu: "火罐",
                id: "huoGuan"
              }
            ]
          },
          {
            menu: "百态养生",
            list: [
              {
                menu: "运动养生",
                id: "yundong"
              },
              {
                menu: "心理养生",
                id: "xinli"
              }
            ]
          },
          {
            menu: "论坛问答",
            list: [
              {
                menu: "用户问答",
                id: "wenDa"
              },
              {
                menu: "论坛中心",
                id: "lunTan"
              }
            ]
          },
          {
            menu: "用户中心",
            list: [
              {
                menu: "注册",
                id: "register"
              },
              {
                menu: "登录",
                id: "login"
              },
              {
                menu: "找回",
                id: "forget"
              },
              {
                menu: "用户",
                id: "user"
              }
            ]
          }
        ]
      },
      stats: [
        {
          one: "ios-stats"
        },
        {
          one: "ios-people"
        }
      ]
    };
  },
  computed: {},
  methods: {
    nav() {
      // this.$axios
      //   .get("http://www.zwyst.com/api/index/nav/menu", {
      //     params: {
      //       name: "导航PC"
      //     }
      //   })
      //   .then(res => {
      //     this.menu = res.data.data
      //     if ( this.menu) {
      //        this.$LoadingBar.finish();
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  },
  mounted() {
    this.nav();
  }
};
</script>

<style lang="scss" scoped>
#headMenu {
  text-align: center;

  a {
    display: block;
    line-height: 36px;
    width: 100%;
  }
  .ivu-icon {
    font-weight: bold;
  }
  .ivu-menu-item-selected a {
    color: #fff;
  }
  .ivu-icon-ios-stats:before {
    content: "\F2C1";
  }
}
</style>
