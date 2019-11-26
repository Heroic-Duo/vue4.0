<template>
  <div id="wenda">
    <div class="hua alike_class">
      <div>不吝赐教</div>
      <Row type="flex" justify="space-around" align="middle">
        <Col span="5">
          <Table border :columns="columns.xj" :data="data.xj" @on-row-click="one"></Table>
        </Col>
        <Col span="5">
          <Table border :columns="columns.zy" :data="data.zy" @on-row-click="one"></Table>
        </Col>
         <Col span="5">
            <Table border :columns="columns.sw" :data="data.sw" @on-row-click="one"></Table>
        </Col>
        <Col span="5">
            <Table border :columns="columns.qs" :data="data.qs" @on-row-click="one"></Table>
        </Col>
      
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name: "wenda",
  data() {
    return {
      //  imgSrc:"/api/apiUser/register/code",
      columns: {
        xj: [
          {
            title: "学家",
            key: "name",
            align: "center"
          }
        ],
        zy: [
          {
            title: "中养",
            key: "name",
            align: "center"
          }
        ],
        sw: [
          {
            title: "食物",
            key: "name",
            align: "center"
          }
        ],
        qs: [
          {
            title: "琴棋书画",
            key: "name",
            align: "center"
          }
        ]
      },
      data:{
        xj: [
        {
          name: "John Brown"
        }
      ],
      zy: [
        {
          name: "John Brown"
        }
      ],
      sw: [
        {
          name: "John Brown"
        }
      ],
      qs: [
        {
          name: "John Brown"
        }
      ]
      }
      
    };
  },
  computed: {},
  mounted() {
    this.getMenuHua();
  },
  methods: {
    one(item) {
      console.log(item, "oooooo");
    },
    refreshpic() {
      var sj = Math.ceil(Math.random() * 100000);
      this.imgSrc = "/api/apiUser/register/code?t=" + sj;
    },
    getMenuHua() {
      this.$axios
        // .get("http://localhost:10080/apiUser/login/code", {
        .post("/api/api/luntan/xueJia/index", {
          params: {
            types: "国画简介"
          }
        })
        .then(res => {
          // this.zy = res.dada.data
          this.data.xj = [];
          res.data.data.forEach(item => {
            this.data.xj.push({ name: item.title });
            // console.log(item.content,'11111111');
          });
        })
        .catch(err => {
          console.log(err);
        });
      this.$axios
        // .get("http://localhost:10080/apiUser/login/code", {
        .post("/api/api/luntan/zhongYang/index", {
          params: {
            types: "国画简介"
          }
        })
        .then(res => {
          // this.zy = res.dada.data
          this.data.zy = [];
          res.data.data.forEach(item => {
            this.data.zy.push({ name: item.title });
            // console.log(item.content,'11111111');
          });
        })
        .catch(err => {
          console.log(err);
        });
      this.$axios
        // .get("http://localhost:10080/apiUser/login/code", {
        .post("/api/api/luntan/shiWu/index", {
          params: {
            types: "国画简介"
          }
        })
        .then(res => {
          // this.zy = res.dada.data
          this.data.sw = [];
          res.data.data.forEach(item => {
            this.data.sw.push({ name: item.title });
            // console.log(item.content,'11111111');
          });
        })
        .catch(err => {
          console.log(err);
        });
      this.$axios
        // .get("http://localhost:10080/apiUser/login/code", {
        .post("/api/api/luntan/qqsh/index", {
          params: {
            types: "国画简介"
          }
        })
        .then(res => {
          // this.zy = res.dada.data
          this.data.qs = [];
          res.data.data.forEach(item => {
            this.data.qs.push({ name: item.title });
            // console.log(item.content,'11111111');
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {}
};
</script>

<style>
#hua {
  overflow: hidden;
}
.hua {
  text-align: center;
}

.hua_bt {
}
.hua_intro {
}
.hua_logo {
}
.hua_img {
}

.hua_name {
}
</style>
