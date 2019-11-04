<template>
  <div id="layout" class="layout">
      <Row :gutter="16">
        <Col span="6"><Search class="search"></Search> </Col>
        <Col span="18"><HeadMenu class="headMenu"></HeadMenu></Col>
         <portrait id="portrait"></portrait>
    </Row>
  </div>
</template>

<script>
import HeadMenu from "./headMenu";

import portrait from "./user/portrait";

import Search from "./search/search";
// import unary from './www/unary'

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Search,
    HeadMenu,
    portrait
  },
  beforeCompile() {},
  computed: {},
  methods: {},
  mounted() {
    // if (this._isMobile()) {
    //   // alert("手机端");
    //   window.location.href = 'http://m.zwyst.com/'
    // } else {
    //   // alert("pc端");
    //   // this.$router.replace('/index');
    // }
  }
};
</script>

<style lang="scss">
 #layout{
     
  }
</style>
