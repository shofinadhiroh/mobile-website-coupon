<template>
  <div class="creategender">
    <v-container fluid class="py-6 px-6">
      <v-row>
          <v-col cols="12" sm="12" class="py-0 mb-6">
          <router-link to="/createpassword" class="none mb-4"><v-app-bar-nav-icon><v-icon dark left large>mdi-arrow-left</v-icon></v-app-bar-nav-icon></router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" class="py-0 mb-7">
          <v-text class="text-center brown--text text-h5">What is your gender?</v-text>
        </v-col>
      </v-row>
      <v-btn block color="#FFFFFF" light class="py-6 mb-6 text-left">Male</v-btn>
      <v-btn block color="#FFFFFF" light class="py-6 mb-6">Female</v-btn>
      <router-link to="/createbirthday"><v-btn block color="#0041FF" dark class="py-6 mb-6">Continue</v-btn></router-link>
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
  .creategender{
    background-color: #F1F3F4;
  }
</style>