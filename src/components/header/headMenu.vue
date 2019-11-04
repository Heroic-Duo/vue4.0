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
      menu:'',
      stats:[
        {
          one:'ios-stats'
        },
         {
          one:'ios-people'
        }
      ]
    };
  },
  computed: {},
  methods: {
    nav() {
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/menu", {
          params: {
            name: "导航PC"
          }
        })
        .then(res => {
          this.menu = res.data.data
         
          if ( this.menu) {
             this.$LoadingBar.finish();
          }
        })
        .catch(err => {
          console.log(err);
        });
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
  .ivu-menu-item-selected a {
    color: #fff;
  }
    .ivu-icon-ios-stats:before {
      content: "\F2C1";
  }
}
</style>
