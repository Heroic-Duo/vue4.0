<template>
    <div id="ruJiaL">
        <div class="ruJiaL alike_class2">
            <h2 class="ruJiaL_title alike_title2" v-text="rulist.name"></h2>
            <p class="ruJiaL_intro alike_intro2" v-text="rulist.intro"></p>
            <div class="ruJiaL_logo alike_banner2">
                <div class="ruJiaL_img alike_banner_logo2"  v-for="value in rulist.list" :key="value.menu">
                    <router-link :to="'/ruJia/data?name=' + (value.menu?value.menu:'')">
                        <img :src="rulist.img + (value.img)" :alt="value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="ruJiaL_name alike_banner_name2" v-text="value.menu"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ruJiaL',
  data () {
    return {
       myData:'',
       rulist:''
    }
  },
  computed: {
   
  },
  mounted() {
    this.getListRujia()
  },
  methods: {
    getListRujia(){
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/ruJia", {
          params: {
            name: this.$route.query.name
          }
        })
        .then(res => {
          this.rulist = res.data.data
         
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
    #ruJiaL{
        overflow: hidden;
    }
    .ruJiaL{
        
    }
    
    .ruJiaL_bt{
        
    }
    .ruJiaL_intro{
        
    }
    .ruJiaL_logo{
        
    }
    .ruJiaL_img{
        
    }
    .ruJiaL_name{
        
    }
</style>
