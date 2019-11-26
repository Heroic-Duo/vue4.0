<template>
    <div id="qi">
        <div class="qi alike_class">
            <h2 class="qi_bt alike_title">棋类简介</h2>
            <p class="qi_intro alike_intro" v-text="qi.intro"></p>
            <div class="qi_logo alike_banner">
                <div class="qi_img  alike_banner_logo"  v-for="value in qi.list" :key="value.menu">
                    <router-link :to="'/qi/data?name=' + (value.menu?value.menu:'')">
                        <img :src="qi.img + (value.img)" :alt="value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="qi_name alike_banner_name" v-text="value.menu"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'qi',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters ([
      'qi'
    ])
  },
  mounted() {
    this.getMenuQi()
  },
  methods: {
    ...mapActions ([
      'getMenuQi'
    ]),
  },
  watch: {
    
  }
}
</script>
<style>
        #qi{
        overflow: hidden;
    }
    .qi{
        
    }
    
    .qi_bt{
       
    }
    .qi_intro{
        
    }
    .qi_logo{
       
    }
    .qi_img{
       
    }
    
    .qi_name{
        
    }
</style>

