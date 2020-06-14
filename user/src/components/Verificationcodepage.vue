<template>
  <div class="verificationcode">
    <v-container fluid class="py-6 px-6">
      <v-row>
          <v-col cols="12" sm="12" class="py-0 mb-6">
          <router-link to="/createpassword" class="none mb-4"><v-app-bar-nav-icon><v-icon dark left large>mdi-close</v-icon></v-app-bar-nav-icon></router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0 mb-7">
          <v-text class="text-center brown--text text-h5">Enter verification code</v-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0">
          <p class="black--text">We've sent a verification code to the email</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0">
          <p class="black--text font-weight-bold">johndoe89@gmail.com</p>
        </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" sm="12" class="py-0">
          <v-text-field
            label="Solo"
            placeholder="Code"
            solo
            class="elevation-0"
          ></v-text-field>
        </v-col>
      </v-row>
      <router-link to="/paymentmethod"><v-btn block color="#0041FF" dark class="py-6 mb-6">Submit</v-btn></router-link>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>

<style>
  .none{
    text-decoration: none;
  }
  .verificationcode{
    background-color: #F1F3F4;
  }
</style>