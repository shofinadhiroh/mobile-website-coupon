<template>
  <div class="login">
    <v-container fluid class="py-6 px-6">
      <v-row>
          <v-col cols="12" sm="12" class="py-0 mb-6">
          <router-link to="/" class="none mb-4"><v-app-bar-nav-icon><v-icon dark left large>mdi-close</v-icon></v-app-bar-nav-icon></router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0 mb-7 text-center">
          <v-text class="text-center brown--text text-h4">Sign in first!</v-text>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="Email address or username"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="Password"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <router-link to="/"><v-btn block color="#0041FF" dark class="py-6 mb-6">Sign In</v-btn></router-link>
      <v-row>
        <v-col cols="12" sm="12" class="py-0 mb-6">
          <router-link to="/forgotpassword" class="none"><p class="text-center brown--text">Forgot password?</p></router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0 mb-6">
          <p class="text-center grey--text body-2">or</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0">
          <p class="text-center black--text">Don't have an account?</p>
        </v-col>
      </v-row>
      <router-link to="/createaccount" class="none"><v-btn block outlined color="#0041FF" dark class="py-6 mb-4">Create Account</v-btn></router-link>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .login{
    background-color: #F1F3F4;
  }
</style>