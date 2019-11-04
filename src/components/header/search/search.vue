<template>
  <div id="search">
    <Row>
      <Col span="5">
          <router-link to="/" class="logo" tag="div">
            <img src="@/assets/images/logo.png" class="sive" />
          </router-link>
      </Col>
      <Col span="18">
        <div class="sousou">
          <Row>
            <Col span="18">
              <Select
                v-model="model"
                filterable
                remote
                ref="search"
                @on-change="tiao"
             
              >
                <Option
                  v-for="(value) in setSearchData"
                  :value="value.value"
                  :label="value.label"
                  :key="value.label"
                ></Option>
              </Select>
            </Col>
            <Col span="4">
              <Button type="primary" icon="ios-search">搜索</Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>

export default {
  name: "search",
  data() {
    return {
      model: "",
      setSearchData:''
    };
  },
  computed: {
  },
  mounted() {},
  methods: {
    tiao() {
      console.log(this);

      // this.$router.push({path: '/search', query: {name:this.setSearchData[0].label}})
    }
  }
};
</script>

<style lang="scss" scoped>
#search {
  width: 100%;
  height: 100px;
  z-index: 5;
  .sousou {
    // width: 375px;
    line-height: 100px;
    // margin-left: 70px;
    .ivu-btn{
       padding: 0 8px 0 4px
    }
  }
  .code-row-bg {
    height: 100px;
    .sive {
      width: 100%;
    }
  }
  .logo{
    width: 50px;
    margin: 20px auto;
  }
}
</style>
