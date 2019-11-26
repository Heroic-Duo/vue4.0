<template>
    <div id="qinL">
        <div class="qinL alike_class2">
            <h2 class="qinL_bt alike_title2" v-text="qinlist.name+'分类'"></h2>
            <p class="qinL_intro alike_intro2" v-text="qinlist.intro"></p>
            <div class="qinL_logo alike_banner2">
                <div class="qinL_img alike_banner_logo2"  v-for="value in qinlist.list" :key="value.menu">
                    <router-link :to="'/qin/data?name=' + (value.menu?value.menu:'')">
                        <img :src="value.img?qinlist.img + (value.img):''" :alt="qinlist.name+value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="qinL_name alike_banner_name2" v-text="value.menu"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'qinL',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters ([
      'qinlist'
    ])
  },
  mounted() {
    this.getlistQin(this.$route)
  },
  methods: {
    ...mapActions ([
      'getlistQin'
    ]),
    // qinLData() {
    //   let name=this.$route.query.name
    //   this.$http.get("http://www.zwyst.com/api/qin?name="+name, {}).then(
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
  watch: {
    
  }
}
</script>

<style>
    #qinL{
        overflow: hidden;
    }
    .qinL{
       
    }
    
    .qinL_bt{
        
    }
    .qinL_intro{
        
    }
    .qinL_logo{
        
    }
    .qinL_img{
        
    }
    .qinL_name{
        
    }
</style>
