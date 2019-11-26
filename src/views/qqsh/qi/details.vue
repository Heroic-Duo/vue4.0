<template>
    <div id="qiD">
        <div class="qiD alike_class3">
            <h2 class="qiD_name alike_name3" v-text="qidata.name"></h2>
            <div class="qiD_img alike_banner3">
                 <img :src="qidata.img?imgUrl + (qidata.img):''" :alt="qidata.name+'养生，文化传承'">
            </div>
            <p class="qiD_intro alike_intro3" v-text="qidata.intro"></p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'qiD',
  data () {
    return {
      imgUrl:'http://img.zwyst.com/images/qqsh/qilei/',
      myData:''
    }
  },
  components: {
      
  },
  computed: {
    ...mapGetters ([
      'qidata'
    ])
  },
  methods: {
    ...mapActions ([
      'getdatauQi'
    ]),
  },
  mounted () {
      this.getdatauQi(this.$route)
  },
  watch: {
    
  }
}
</script>

<style>
  #qiD{
    overflow: hidden;
  }
  .qiD{
    
  }
  .qiD_name{
    
  }
  .qiD_img{
    
  }
  .qiD_intro{
    
  }
</style>
