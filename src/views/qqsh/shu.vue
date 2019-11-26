<template>
    <div id="shu">
        <div class="shu alike_class">
            <h2 class="shu_bt alike_title">书法简介</h2>
            <p class="shu_intro alike_intro" v-text="shu.intro"></p>
            <div class="shu_logo alike_banner">
                <div class="shu_img alike_banner_logo"  v-for="value in shu.list" :key="value.menu">
                    <router-link :to="'/shu/data?name=' + (value.menu?value.menu:'')">
                        <img :src="shu.img + (value.img)" :alt="value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="shu_name alike_banner_name" v-text="value.menu"></p>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'shu',
  data () {
    return {
       myData:'',
    }
  },
  computed: {
    ...mapGetters ([
      'shu'
    ])
  },
  mounted() {
    this.getMenuShu()
  },
  methods: {
    ...mapActions ([
      'getMenuShu'
    ]),
    
  },
  watch: {
    
  }
}
</script>

<style>
    #shu{
        overflow: hidden;
    }
    .shu{
        
    }
    
    .shu_bt{
        
    }
    .shu_intro{
        
    }
    .shu_logo{
        
       
    }
    .shu_img{
        
    }
    .shu_name{
        
    }
</style>
