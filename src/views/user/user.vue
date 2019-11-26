<template>
  <div id="user">
    <div class="user">
        <div class="usertitle">

        </div>
        <div class="userlist">
            <!-- <li><a href="javascript:;" rel="external nofollow"  @click='tabToggle(tabText1);'>个人资料</a></li>
            <li><a href="javascript:;" rel="external nofollow"  @click='tabToggle(tabText2);'>安全中心</a></li> -->
            <p class="userlist_name" :class="{active:active[key]}"   v-for="(item, key) in tab" @click="change(key)" v-text="item.name"></p>
        </div>
        <div class="userdata" :is='currentView' :child-com="userdata">
        </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import security from './../../components/user/security'
import usindex from './../../components/user/usindex'
import { mapGetters, mapActions } from "vuex";
export default {
  name: "user",
  data() {
    return {
        active: [true, false],//统一管理状态;
        tabText1:'usindex',
        tabText2:'security',
        currentView:'usindex',
        tab: [{
                "name": "个人资料",　　　　//tab-span
                "func": "usindex"           //仅仅用来存放组件;
            }, {
                "name": "安全中心",
                "func": "security"
            }]
    };
  },
  components: {
    usindex,
    security
  },
  computed: {
    ...mapGetters(["userdata"]),
    
  },
  mounted() {
    this.getUser();
  },
  methods: {
    ...mapActions(["getUser"]),
    tabToggle:function(tabText){
      this.currentView=tabText
    },
    change:function(x){          
        for(var i=0;i<this.active.length;i++){
            this.active[i]=false;
            this.active[x]=true;
            this.currentView=this.tab[x].func;
        }
        //console.log(this.active);
        // console.log(x);
        this.$set(this.active, 2, 0);
    },
    userdataBtn(){
      
    }
  }
};
</script>

<style lang="less" scoped>
#user {
  .user{
    width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  .userlist{
    float: left;
    width: 200px;
    
  }
  .userdata{
    float: right;
    width: 700px;
    border: 1px solid #DCDCDC
  }
  .userTab {
    width: 500px;
    margin: 0 auto;
  }
  .userTab a {
    display: inline-block;
    width: 150px;
    line-height: 50px;
  }
  .navright180 {
  }
  .router-link-active {
    color: #000;
  }
  .userdata{

  };
  .userlist_name{
      cursor: pointer;
      text-align: center;
      margin: 10px 0;
  }
  .userlist_name.active{
      color: red
      
  }
    
}
</style>
