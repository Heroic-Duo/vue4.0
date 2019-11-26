<template>
  <div id="user">
    <div @click="one">11111111111</div>
    <div class="user">
      <Form ref="setdata" :model="setdata" :rules="ruleValidate" :label-width="80">
        <div class="userAvator">
          <img :src="`${imgUrl}/${data.avator}`" alt />
        </div>
        <Upload
          action="//localhost:10080/apiUser/user/upImg"
          :on-success="handleSuccess"
          :data="dataImg"
        >
          <Button icon="ios-cloud-upload-outline">更换头像</Button>
        </Upload>
        <FormItem label="用户昵称" prop="name">
          <Input v-model="setdata.name" :placeholder="this.data.nickname"></Input>
        </FormItem>

        <FormItem label="用户简介" prop="desc">
          <Input
            v-model="setdata.desc"
            type="textarea"
            :autosize="{minRows: 2,maxRows: 5}"
            :placeholder="this.data.nickname"
          ></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('setdata')">Submit</Button>
          <Button @click="handleReset('setdata')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "user",
  data() {
    return {
      setdata: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      dataImg: {
        id: "2",
        op: "1111"
      },
      imgUrl: "http://localhost:10080/uploads",
      ruleValidate: {
        name: [{ required: true, message: "用户昵称", trigger: "change" }],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "change"
          },
          {
            type: "email",
            message: "Incorrect email format",
            trigger: "change"
          }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change"
          }
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change"
          }
        ],
        desc: [
          { required: true, message: "请填写简介", trigger: "change" },
          { type: "string", min: 20, message: "最小字符20", trigger: "change" }
        ]
      }
    };
  },
  components: {
    // usindex,
    // security
  },
  computed: {
    ...mapGetters(["userdata", "data"])
  },
  mounted() {
    this.getUser();
  },
  methods: {
    ...mapActions(["getUsermaterial", "setUsermaterial", "getUser"]),
    one() {
      console.log(this, "pppppppppp");
    },
    handleSubmit() {
      this.$refs.setdata.validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset() {
      this.$refs.setdata.resetFields();
    },
    handleSuccess(res) {
      if (res.code=='200') {
        this.data.avator = res.basename;
        this.$Cookie.set('user',this.data)
        sessionStorage.setItem('user',this.data)
         this.$Message.success(res.message);
      }else{
         this.$Message.success(res.message);
      }

      // let one = res.path.split(`uploads\\`)[1];
      
      // console.log(res, "pppppppppppppppp");
      // file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      // file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    }
    // tabToggle: function(tabText) {
    //   this.currentView = tabText;
    // },
    // change: function(x) {
    //   for (var i = 0; i < this.active.length; i++) {
    //     this.active[i] = false;
    //     this.active[x] = true;
    //     this.currentView = this.tab[x].func;
    //   }
    //   //console.log(this.active);
    //   // console.log(x);
    //   this.$set(this.active, 2, 0);
    // },
    // userdataBtn() {}
  }
};
</script>

<style lang="scss" scoped>
#user {
  .user {
    width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  .userAvator {
    width: 100px;
    margin: 0 auto;
  }
  .userdata {
    float: right;
    width: 700px;
    border: 1px solid #dcdcdc;
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
  .userdata {
  }
  .userlist_name {
    cursor: pointer;
    text-align: center;
    margin: 10px 0;
  }
  .userlist_name.active {
    color: red;
  }
}
</style>
