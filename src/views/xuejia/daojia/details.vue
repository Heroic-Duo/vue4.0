<template>
    <div id="daoD">
        <div class="daoD alike_class3">
            <h2 class="daoD_name alike_name3" v-text="daodata.name"></h2>
            <div class="daoD_img alike_banner3">
                <img :src="daodata.img?imgUrl + (daodata.img):''" :alt="daodata.name+'养生，文化传承'">
            </div>
            <p class="daoD_intro alike_intro3" v-text="daodata.intro"></p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'daoD',
  data () {
    return {
      imgUrl:'http://img.zwyst.com/images/xuejia/daoJia/wuwei/',
      myData:'',
      daodata:''
    }
  },
  components: {

  },
  computed: {

  },
  methods: {
     daojiadataGet() {
       console.log(this.$route,'ppppppppp')
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/daoJia", {
          params: {
            name: this.$route.query.name
          }
        })
        .then(res => {
          this.daodata = res.data.data
          console.log( this.daodata )
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  },
  mounted () {
    this.daojiadataGet()
  },
  watch: {
    
  }
}
</script>

<style>
  #daoD{
    overflow: hidden;
  }
  .daoD{
    
  }
  .daoD_name{
    
  }
  .daoD_img{
    
   
  }
  .daoD_intro{
    
  }
</style>
