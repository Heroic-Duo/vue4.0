<template>
  <div id="app">
    <div id="nav">
       <Layout class="layout"></Layout>
    </div>
    <router-view />
    <Foter id="footer"></Foter>
    
    <BackTop class="backTop"></BackTop>
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
</style>
