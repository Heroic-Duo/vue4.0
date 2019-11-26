<template>
    <div id="huaD">
        <div class="huaD alike_class3">
            <h2 class="huaD_name alike_name3" v-text="huadata.name"></h2>
            <div class="huaD_img alike_banner3">
                 <img :src="huadata.img?imgUrl + (huadata.img):''" :alt="huadata.name+'养生，文化传承'">
            </div>
            <p class="huaD_intro alike_intro3" v-text="huadata.intro"></p>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'huaD',
  data () {
    return {
      imgUrl:'http://img.zwyst.com/images/qqsh/guohua/',
      myData:''
    }
  },
  components: {
    
  },
  computed: {
    ...mapGetters ([
      'huadata'
    ])
  },
  methods: {
    ...mapActions ([
      'getdataHua'
    ]),
  },
  mounted () {
      this.getdataHua(this.$route)
  },
  watch: {
    
  }
}
</script>

<style>
  #huaD{
    overflow: hidden;
  }
  .huaD{
    
  }
  .huaD_name{
    
  }
  .huaD_img{
    
  }
  .huaD_intro{
    
  }
</style>
