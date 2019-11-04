<template>
    <div id="daojia">
        <div class="daojia alike_class">
            <h2 class="daojia_bt alike_title" v-text="daojia.name"></h2>
            <p class="daojia_intro alike_intro" v-text="daojia.intro"></p>
            <div class="daojia_logo alike_banner">
                <div class="daojia_img alike_banner_logo"  v-for="value in daojia.list" :key="value.menu">
                    <router-link :to="'/daoJia/data?name=' + (value.menu?value.menu:'')">
                        <img :src="daojia.img + (value.img)" :alt="value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="daojia_name alike_banner_name" v-text="value.menu"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'daojia',
  data () {
    return {
        daojia:''
    }
  },
  computed: {
    
  },
  mounted() {
    this.daojiaGet()
  },
  methods: {
      daojiaGet() {
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/daoJia", {
          params: {
            name: "道家养生"
          }
        })
        .then(res => {
          this.daojia = res.data.data
         
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    
  }
}
</script>

<style>
    #daojia{
        overflow: hidden;
    }
    .daojia{
        
    }
    
    .daojia_bt{
        
    }
    .daojia_intro{
        
    }
    .daojia_logo{
        
    }
    .daojia_img{
        
    }
    .daojia_name{
        
    }
</style>
