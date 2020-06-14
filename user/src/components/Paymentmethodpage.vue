<template>
  <div class="paymentmethod">
    <v-container fluid class="py-6 px-6">
      <v-row>
        <v-col cols="12" sm="12" class="py-0 my-7">
          <v-text class="text-center brown--text text-h5">Select payment method</v-text>
        </v-col>
      </v-row>
      <router-link to="/paymentcode" class="none"><v-btn block color="#FFFFFF" light class="py-6 mb-6 text-left">Payment Code</v-btn></router-link>
      <router-link to="/creditcard" class="none"><v-btn block color="#FFFFFF" light class="py-6 mb-6">Credit Card</v-btn></router-link>
      <router-link to="/creditcard"><v-btn block color="#0041FF" dark class="py-6 mb-6">Continue</v-btn></router-link>
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
  .paymentmethod{
    background-color: #F1F3F4;
  }
</style>