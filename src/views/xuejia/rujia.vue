<template>
    <div id="ruJia">
        <div class="ruJia alike_class">
            <h2 class="ruJia_title alike_title" v-text="rujia.name"></h2>
            <p class="ruJia_intro alike_intro" v-text="rujia.intro"></p>
            <div class="ruJia_logo alike_banner">
                <div class="ruJia_img alike_banner_logo"  v-for="value in rujia.list" :key="value.menu">
                    <router-link :to="'/ruJia/list?name=' + (value.menu?value.menu:'')">
                        <img :src="rujia.img + (value.img)" :alt="value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="ruJia_name alike_banner_name" v-text="value.menu"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ruJia',
  data () {
    return {
      rujia:''
    }
  },
  computed: {
   
  },
  mounted() {
    this.rujiaGet()
  },
  methods: {
    rujiaGet() {
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/ruJia", {
          params: {
            name: "儒家养生"
          }
        })
        .then(res => {
          this.rujia = res.data.data
        
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
    #ruJia{
        overflow: hidden;
    }
    .ruJia{
        
    }
    
    .ruJia_title{
        
    }
    .ruJia_intro{
        
    }
    .ruJia_logo{
        
    }
    .ruJia_img{
        
    }

    .ruJia_name{
        
    }
</style>
