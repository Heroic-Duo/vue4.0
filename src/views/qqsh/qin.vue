<template>
    <div id="qin">
        <div class="qin alike_class">
            <h2 class="qin_title alike_title"  v-text="qin.name"></h2>
            <p class="qin_intro alike_intro" v-text="qin.intro"></p>
            <div class="qin_logo alike_banner">
                <div class="qin_img alike_banner_logo"  v-for="value in qin.list" :key="value.menu">
                    <router-link :to="'/qin/list?name=' + (value.menu?value.menu:'')">
                        <img :src="qin.img + (value.img)" :alt="value.menu+'养生，文化知识'">
                    </router-link>
                    <p class="qin_name alike_banner_name" v-text="value.menu"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'qin',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters ([
      'qin'
    ])
  },
  mounted() {
    this.getMenuQin()
  },
  methods: {
    ...mapActions ([
      'getMenuQin'
    ]),
   
  },
  watch: {
    
  }
}
</script>

<style>
    #qin{
        overflow: hidden;
    }
    .qin{
        
    }
    
    .qin_bt{
        
    }
    .qin_intro{
        
    }
    .qin_logo{
       
    }
    .qin_img{
        
    }
    .qin_name{
        
    }
</style>
