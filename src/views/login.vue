<template>
  <div class="login-contain">
    <el-row class="login-content">
      <el-col
        :span="12"
        class="login-left"
      >
        <img
          class="login-left-img"
          src="@/assets/img/login_form_left.png"
        >
      </el-col>
      <el-col :span="12">
        <el-form
          ref="loginBox"
          class="login-right"
          :model="loginBox.data"
          :rules="loginBox.rules"
        >
          <div>
            <img
              v-if="!noNos"
              class="login-logo"
              src="@/assets/img/login_form_logo.svg"
            />
          </div>
          <div class="login-info">{{ systemTitle }}</div>
          <el-form-item
            :class="[
          loginBox.error.loginStr ? 'error' : '',
          loginBox.focus.loginStr ? 'focus' : ''
        ]"
            prop="loginStr"
          >
            <el-input
              class="login-input"
              v-model="loginBox.data.loginStr"
              placeholder="账号"
              :validate-event="false"
              :clearable="true"
              @focus="inputFocus('loginStr')"
              @blur="inputBlur('loginStr')"
              @keyup.enter.native="login"
            ></el-input>
            <div>
              <hr class="input-focus-line" />
              <hr class="input-error-line" />
            </div>
          </el-form-item>
          <el-form-item
            :class="[
          loginBox.error.passWord ? 'error' : '',
          loginBox.focus.passWord ? 'focus' : ''
        ]"
            prop="passWord"
          >
            <el-input
              class="login-input"
              v-model="loginBox.data.passWord"
              placeholder="密码"
              :validate-event="false"
              :show-password="true"
              :clearable="true"
              @focus="inputFocus('passWord')"
              @blur="inputBlur('passWord')"
              @keyup.enter.native="login"
            ></el-input>
            <div>
              <hr class="input-focus-line" />
              <hr class="input-error-line" />
            </div>
          </el-form-item>
          <img
            class="login-submit"
            src="@/assets/img/login_btn.png"
            @click="login"
          />
        </el-form>
      </el-col>
    </el-row>
    <copyright v-if="!noNos"></copyright>
    <authorize
      :show="authorizeShow"
      @close="authorizeShow=false"
    ></authorize>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      loginBox: {
        data: {
            loginStr: '',
          passWord: '',
            loginType: 1,
            "verifiCode": ""
        },
        rules: {
          loginStr: [
            { required: true, message: '请输入账号！' }
          ],
          passWord: [
            { required: true, message: '请输入密码！' }
          ]
        },
        focus: {
          loginStr: false,
          passWord: false
        },
        error: {
          loginStr: false,
          passWord: false
        }
      },
      redirect: '',
      authorizeShow: false
    }
  },
  computed: {
    ...mapGetters(["userName", 'systemTitle', 'noNos'])
  },
  created() {
    this.redirect = this.$route.query.redirect;
  },
  methods: {
    login() {
      this.loginBox.error.loginStr = false;
      this.loginBox.error.passWord = false;
      this.$refs.loginBox.validate((valid, field) => {
        if (valid) {
          this.$store.dispatch('user/login', { data: this.loginBox.data, option: { noTip: true } }).then(res => {
            this.$tool.setToken(res);
            this.$router.push({
              path: this.redirect || '/index'
            });
          }).catch((res) => {
              console.log(res,'res')
            if (res.code == 402) {
              this.authorizeShow = true;
            } else {
              this.$tool.msg({
                type: 'error',
                message: res.message
              });
              this.loginBox.error.loginStr = true;
              this.loginBox.error.passWord = true;
            }
          });
        } else {
          let firstField;
          for (var key in field) {
            if (!firstField) {
              firstField = field[key];
            }
            this.loginBox.error[key] = true;
          }
          this.$tool.msg({
            type: 'error',
            message: firstField[0].message
          });
          return false;
        }
      });
    },
    inputFocus(key) {
      this.loginBox.error[key] = false;
      this.loginBox.focus[key] = true;
    },
    inputBlur(key) {
      this.loginBox.focus[key] = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.login-contain {
  height: 100%;
  background-image: url(../assets/img/login_bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55%;
    transform: translate(-50%, -50%);
    box-shadow: 6px 6px 48px rgba(0, 98, 255, 0.4);
    border-radius: 8px;
    overflow: hidden;
    .login-left {
      font-size: 0;
    }
    .login-left-img {
      width: 100%;
      max-height: 86vh;
    }
  }
  .login-right {
    position: absolute;
    width: 50%;
    height: 100%;
    padding: 5.3% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    background: white;
    .login-logo {
      display: block;
      width: 53%;
      height: auto;
      margin: 0 auto;
    }
    .login-info {
      margin-top: 24px;
      margin-bottom: 14%;
      text-align: center;
      font-size: 24px;
      color: $theme-color;
      font-weight: bold;
    }
    .login-input {
      position: relative;
      margin-top: 20px;
      font-size: 19px;
    }
    .login-submit {
      margin-top: 25px;
      width: 100%;
      cursor: pointer;
    }

    .input-focus-line,
    .input-error-line {
      margin: 0;
      height: 2px;
      border: none;
      background-color: #3b86ff;
      position: absolute;
      left: 0;
      right: 0;
      margin-top: -1px;
      transform: scaleX(0);
      transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .input-error-line {
      background-color: #ffca5a;
    }
    .focus .input-focus-line,
    .error .input-error-line {
      transform: scaleX(1);
    }
  }
}
</style>
<style lang="scss">
.login-contain {
  .login-input {
    margin-top: 20px;
    .el-input__inner {
      height: 40px;
      line-height: 40px;
      border: none;
      border-bottom: 1px solid rgba(165, 164, 191, 1) !important;
      border-radius: 0;
      color: #555;
    }
    input::-webkit-input-placeholder {
      color: rgba(165, 164, 191, 1);
    }
  }
  .copyright {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
  }
}
</style>