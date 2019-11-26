<template>
    <div id="shuD ">
        <div class="shuD alike_class3">
            <h2 class="shuD_name alike_name3" v-text="shudata.name"></h2>
            <div class="shuD_img alike_banner3">
                 <img :src="shudata.img?imgUrl + (shudata.img):''" :alt="shudata.name+'养生，文化传承'">
            </div>
            <p class="shuD_intro alike_intro3" v-text="shudata.intro"></p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'shuD',
  data () {
    return {
      imgUrl:'http://img.zwyst.com/images/qqsh/shufa/',
      myData:''
    }
  },
  components: {
    
  },
  computed: {
     ...mapGetters ([
      'shudata'
    ])   
  },
  methods: {
    ...mapActions ([
      'getdataShu'
    ]),
    //   shuDData() {
    //   let name=this.$route.query.name
    //   this.$http.get("http://www.zwyst.com/api/shu?name="+name, {}).then(
    //     res => {
    //       if (res.data.status == true) {
    //         this.myData = res.data.data;
    //       } else {
    //         return false;
    //       }
    //     },
    //     function(res) {}
    //   );
    // }
  },
  mounted () {
      this.getdataShu(this.$route)
  },
  watch: {
    
  }
}
</script>

<style>
  #shuD{
    overflow: hidden;
  }
  .shuD{
    
  }
  .shuD_name{
    
  }
  .shuD_img{
    
   
  }
  .shuD_intro{
    
  }
</style>
