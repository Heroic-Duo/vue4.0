<template>
    <div id="hua">
        <div class="hua alike_class">
            <h2 class="hua_bt alike_title">国画简介</h2>
            <p class="hua_intro alike_intro" v-text="hua.intro"></p>
            <div class="hua_logo alike_banner">
                <div class="hua_img alike_banner_logo"  v-for="value in hua.list" :key="value.menu">
                    <router-link :to="'/hua/data?name=' + (value.menu?value.menu:'')">
                        <img :src="hua.img + (value.img)" :alt="value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="hua_name alike_banner_name" v-text="value.menu"></p>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>

export default {
    name:'hua',
  data () {
    return {
      hua:''
    }
  },
  computed: {
   
  },
  mounted() {
    this.getMenuHua()
  },
  methods: {
    getMenuHua() {
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/hua", {
          params: {
            name: "国画简介"
          }
        })
        .then(res => {
          this.hua = res.data.data
         
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
    #hua{
        overflow: hidden;
    }
    .hua{
       
    }
    
    .hua_bt{
       
    }
    .hua_intro{
        
    }
    .hua_logo{
        
    }
    .hua_img{
        
    }
    
    .hua_name{
        
    }
</style>
