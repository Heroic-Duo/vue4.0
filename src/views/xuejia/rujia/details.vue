<template>
    <div id="ruJiaD">
        <div class="ruJiaD alike_class3">
            <h2 class="ruJiaD_name alike_name3" v-text="rudata.name"></h2>
            <div class="ruJiaD_img alike_banner3">
                <img :src="rudata.img?imgUrl + (rudata.img):''" :alt="rudata.name+'养生，文化传承'">
            </div>
            <p class="ruJiaD_intro alike_intro3" v-text="rudata.intro"></p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ruJiaD',
  data () {
    return {
      imgUrl:'http://img.zwyst.com/images/xuejia/ruJia/shide/',
      myData:'',
      rudata:''
    }
  },
  components: {

  },
  computed: {
    
  },
  methods: {
     rujiadataGet() {
      
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/ruJia", {
          params: {
            name: this.$route.query.name
          }
        })
        .then(res => {
          this.rudata = res.data.data
         
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
      this.rujiadataGet()
  },
  watch: {
    
  }
}
</script>

<style>
  #ruJiaD{
    overflow: hidden;
  }
  .ruJiaD{
    
  }
  .ruJiaD_name{
    
  }
  .ruJiaD_img{
    
   
  }
  .ruJiaD_intro{
    
  }
</style>
