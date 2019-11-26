<template>
  <div id="register">
    注册
    <div class="zhuce">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem prop="yzm" label="验证码">
          <div class="yzmImg">
            <img @click="refreshpic()" :src="imgSrc" class="form-group-yz-img" />
          </div>
          <Input v-model="formValidate.yzm" placeholder="验证码"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
          <Input v-model="formValidate.mail" placeholder="邮箱"></Input>
          <p class="sendyym" @click="sendyzm">点击发送</p>
        </FormItem>
        <FormItem label="邮箱验证" prop="yyyzm">
          <Input v-model="formValidate.yyyzm" placeholder="邮箱验证码"></Input>
        </FormItem>
        <FormItem label="Name" prop="name">
          <Input v-model="formValidate.name" placeholder="用户名"></Input>
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input v-model="formValidate.password" placeholder="密码"></Input>
        </FormItem>
        <FormItem prop="repeatpass" label="确认密码">
          <Input v-model="formValidate.repeatpass" placeholder="确认密码"></Input>
        </FormItem>
        <!-- <FormItem label="City" prop="city">
          <Select v-model="formValidate.city" placeholder="Select your city">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>-->
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      //图片验证码
      imgSrc: "/api/apiUser/register/code",
      formValidate: {
        name: "",
        mail: "",
        password: "",
        yzm: "",
        repeatpass: "",
        yyyzm: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空.", trigger: "blur" },
          { type: "string", min: 6, message: "密码最小6位", trigger: "blur" }
        ],
        repeatpass: [
          { required: true, message: "密码不能为空.", trigger: "blur" },
          { type: "string", min: 6, message: "密码最小6位", trigger: "blur" }
        ],
        yzm: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        yyyzm: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    // this.refreshpic()
  },
  methods: {
    refreshpic() {
      var sj = Math.ceil(Math.random() * 100000);
      this.imgSrc = "/api/apiUser/register/code?t=" + sj;
    },
    handleSubmit() {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/apiUser/register/index", {
              headers: {
                "Content-Type": "application/json"
              },

              email: this.formValidate.mail,
              code: this.formValidate.yzm,
              password: this.formValidate.password,
              repeatpass: this.formValidate.repeatpass,
              emailCode: this.formValidate.yyyzm,
              nickname: this.formValidate.name
            })
            .then(res => {
              if (res.data.status == '200') {
               this.$Message.success(res.data.message);
               this.$refs.formValidate.resetFields();
               }else{
                 this.$Message.success(res.data.message);
              }
              //  console.log(res, "sssss");
            })
            .catch(err => {
              console.log(err);
              this.$Message.error("注册失败!");
            });
        } else {
          this.$Message.error("填写信息!");
        }
      });
    },
    handleReset() {
      this.$refs.formValidate.resetFields();
    },
    sendyzm() {
      if (this.formValidate.mail == "") {
        this.$Message.error("填写邮箱");
      }else if(this.formValidate.yym == "" ){
         this.$Message.error("填写验证码");
      }else{
        this.$axios
          .post("/api/apiUser/register/email", {
            // params: {
            //     name: "国画简介"
            // }
            headers: {
              "Content-Type": "application/json"
            },

            email: this.formValidate.mail,
            code: this.formValidate.yzm
          })
          .then(res => {
              if (res.data.status == '200') {
               this.$Message.success(res.data.message);
            }
          })
          .catch(err => {
            if (err) {
              this.$Message.error("发送失败!");
            }
          });
      }
     
    }
  }
};
</script>
<style scoped>
.register {
  width: 500px;
  margin: 20px auto;
}
.zhuce {
  width: 500px;
  margin: 0 auto;
}
.sendyym,
.yzmImg {
  position: absolute;
  top: 1px;
  right: 10px;
  z-index: 22;
  cursor: pointer;
}
.yzmImg {
  top: -10px;
}
</style>