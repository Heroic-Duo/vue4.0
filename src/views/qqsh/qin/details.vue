<template>
    <div id="qinD">
        <div class="qinD alike_class3">
            <h2 class="qinD_name alike_name3" v-text="qindata.name"></h2>
            <div class="qinD_img alike_banner3">
                 <img :src="qindata.img?imgUrl + (qindata.img):''" :alt="qindata.smriti+qindata.name+'养生，文化传承'">
            </div>
            <p class="qinD_intro alike_intro3" v-text="qindata.intro"></p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'qinD',
  data () {
    return {
      imgUrl:'http://img.zwyst.com/images/qqsh/wuyin/guqin/fenlei/',
      myData:''
    }
  },
  components: {
    
  },
  computed: {
    ...mapGetters ([
      'qindata'
    ])
  },
  methods: {
    ...mapActions ([
      'getdataQin'
    ]),
  },
  mounted () {
      this.getdataQin(this.$route)
  },
  watch: {
    
  }
}
</script>

<style>
  #qinD{
    overflow: hidden;
  }
  .qinD{
    
  }
  .qinD_name{
    
  }
  .qinD_img{
    
  }
  .qinD_intro{
    
  }
</style>
