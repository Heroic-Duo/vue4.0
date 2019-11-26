<template>
  <div id="app">
    <div id="nav">
       <Layout class="layout"></Layout>
    </div>
    <router-view />
    <Foter id="footer"></Foter>
    
    <!-- <BackTop class="backTop"></BackTop> -->
    <BackTop :height="100" :bottom="100">
        <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>
<script>
import Layout from './components/header/layout'
import Foter from './components/foter/foter'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    Layout,
    Foter
  },
}
</script>
<style lang="scss">
#app {
 
}

#nav {
  margin: 105px 0 0 0;

 
}
#footer{
  margin: 90px 0 0 0;
}
</style>
