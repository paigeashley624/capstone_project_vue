<template>
  <div class="login">
    <!-- Register Section Begin -->
    <div class="register-login-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <ul>
              <li class="text-danger" v-for="error in errors" v-bind:key="error">
                {{ error }}
              </li>
            </ul>
            <div class="login-form">
              <h2>Login</h2>
              <form action="#">
                <div class="group-input">
                  <label for="username">Email Address *</label>
                  <input type="email" v-model="email" />
                </div>
                <div class="group-input">
                  <label for="pass">Password *</label>
                  <input type="password" v-model="password" />
                </div>
                <!-- <div class="group-input gi-check">
                  <div class="gi-more">
                    <label for="save-pass">
                      Save Password
                      <input type="checkbox" id="save-pass" />
                      <span class="checkmark"></span>
                    </label>
                    <a href="#" class="forget-pass">Forget your Password</a>
                  </div>
                </div> -->
                <button type="submit" class="site-btn login-btn" v-on:click="submit()">Sign In</button>
              </form>
              <div class="switch-login">
                <a href="./register.html" class="or-login">Or Create An Account</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Register Form Section End -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
