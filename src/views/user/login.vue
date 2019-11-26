<template>
  <div id="login">
    登录
    <div class="denglu">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem prop="yzm" label="验证码">
          <div class="yzmImg">
            <img @click="refreshpic()" :src="imgSrc" class="form-group-yz-img" />
          </div>
          <Input v-model="formValidate.yzm" placeholder="验证码"></Input>
        </FormItem>
        <FormItem label="E-mail" prop="mail">
          <Input v-model="formValidate.mail" placeholder="邮箱"></Input>
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input v-model="formValidate.password" placeholder="密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="loginSet('formValidate')">Submit</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      //图片验证码
      imgSrc: "/api/apiUser/login/code",
      formValidate: {
        mail: "",
        password: "",
        yzm: ""
      },
      ruleValidate: {
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

        yzm: [
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
    console.log(this.$Cookie, "ooooooo");
  },
  methods: {
    refreshpic() {
      var sj = Math.ceil(Math.random() * 100000);
      this.imgSrc = "/api/apiUser/login/code?t=" + sj;
    },
    loginSet() {
      this.$refs.formValidate.validate(valid => {
        if (valid) {
          this.$axios
            .post("/api/apiUser/login/index", {
              headers: {
                "Content-Type": "application/json"
              },

              email: this.formValidate.mail,
              code: this.formValidate.yzm,
              password: this.formValidate.password
            })
            .then(res => {
              if (res.data.status == "200") {
                this.$Message.success(res.data.message);
                this.$Cookie.set("token", res.data.token, {
                  expires: 0.1,
                  path: "/"
                });
                sessionStorage.setItem("user", res.data.data);
                this.$Cookie.set("user", res.data.data, {
                  expires: 0.1,
                  path: "/"
                });
                this.$refs.formValidate.resetFields();
                let redirect = this.$route.query.redirect;
                this.$router.push(redirect);
              } else {
                this.$Message.success(res.data.message);
              }
              //  console.log(res, "sssss");
            })
            .catch(err => {
              console.log(err);
              this.$Message.success(err.data.message);
            });
        } else {
          this.$Message.error("填写信息!");
        }
      });
    },
    handleReset() {
      this.$refs.formValidate.resetFields();
    }
  }
};
</script>
<style scoped>
.login {
  width: 500px;
  margin: 20px auto;
}
.denglu {
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
 