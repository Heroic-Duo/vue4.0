<template>
    <div id="Liao">
        <div class="Liao alike_class3">
            <h2 class="Liao_name" v-text="sldata.name+'的功效与作用'"></h2>
            <p class="Liao_alias" v-text="sldata.alias"></p>
            <div class="Liao_logo">
                <div class="Liao_img">
                    <img :src="sldata.img?slimgUrl + (sldata.img):''" :alt="sldata.name +',成分，功效，作用'">
                </div>
                <p class="Liao_intro" v-text="sldata.intro"></p>
            </div>
            <div class="Liao_benefit heise">
                <h3>食疗功效 ↡</h3>
                <p v-text="sldata.benefit"></p>
            </div>
            <div class="Liao_nutrition heise">
                <h3>主要营养 ↡</h3>
                <p v-text="sldata.nutrition"></p>
            </div>
            <div class="Liao_suitable heise">
                <h3>适宜人群 ↡</h3>
                <p v-text="sldata.suitable"></p>
            </div>
            <div class="Liao_tabu heise">
                <h3>禁忌人群 ↡</h3>
                <p v-text="sldata.tabu"></p>
            </div>
            <div class="Liao_effect heise">
                <h3>功效和作用</h3>
                <p v-text="sldata.effect"></p>
            </div>
            <div class="Liao_select heise ">
                <h3 class="yellow">如何挑选？</h3>
                <p v-text="sldata.select"></p>
            </div>
            <div class="Liao_notice heise ">
                <h3 class="yellow">要注意什么？</h3>
                <p v-text="sldata.notice"></p>
            </div>
            <div class="Liao_save heise">
                <h3 class=" yellow">如何保存？</h3>
                <p v-text="sldata.save"></p>
            </div>

        </div>
    </div>
</template>
<script>

export default {
    name:"shiLiao",
    data () {
        return{
            sldata:''
        }
    },
    computed: {
        
    },
    mounted() {
        this.getdatashiLiao()
    },
    methods:{
        getdatashiLiao() {
      this.$axios
        .get("http://www.zwyst.com/api/index/nav/shiLiao", {
          params: {
            name: this.$route.query.name
          }
        })
        .then(res => {
           this.sldata = res.data.data
      if (this.sldata.pid === this.slCai) {
        this.slimgUrl = this.slimgCai
      }
      if (this.sldata.pid === this.slGuo) {
        this.slimgUrl = this.slimgGuo
      }
      if (this.sldata.pid === this.slNai) {
        this.slimgUrl = this.slimgNai
      }
      if (this.sldata.pid === this.slZa) {
        this.slimgUrl = this.slimgZa
      }
      if (this.sldata.pid === this.slLiao) {
        this.slimgUrl = this.slimgLiao
      }
      if (this.sldata.pid === this.slTa) {
        this.slimgUrl = this.slimgTa
      }
         
        })
        .catch(err => {
          console.log(err);
        });
    }
        
    },

}
</script>
<style>
    .Liao{
        /* width: 95%;
        overflow: hidden;
        padding: 1px 0;
        margin: 0 auto;
        background: rgba(16, 105, 52, 0.5803921568627451);
        border-radius: 15px; */
    }
    .Liao_name{
        text-align: center;
    }
    .Liao_alias{
        text-align: center;
    }
    .Liao_logo{
        width: 100%;
        border: 1px dashed #000;
        margin: 1px 0;
        padding: 20px  0;
        border-radius: 15px;
    }
    .Liao_img{
        width: 450px;
        margin: 20px auto
    }
    img{
        width: 100%;
    }
    .Liao_intro{
        width: 90%;
        margin: 0 auto;
        text-indent: 2em;
    }
    .heise{
        width: 100%;
        border: 1px dashed #000;
        margin: 10px 0;
        padding: 20px 0;
        border-radius: 15px;
    }
    .heise h3{
        text-indent: 1em;
        margin: 1px 0;
    }
    .heise p{
        width: 88%;
        text-indent: 2em;
        margin: 0 auto;
    }
    .yellow{
        color: rgba(175, 110, 12, 0.99);
    }
</style>
