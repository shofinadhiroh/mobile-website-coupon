<template>
  <div class="redeemdetail">
      <v-img :aspect-ratio="16/9" src="https://alextimes.com/wp-content/uploads/2017/10/Summer-BBQ-Burger-LR-696x465.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <div class="subtitle text-center black--text px-6">BurgerFi</div>
            <div class="subtitle text-center black--text font-weight-bold px-6">BOGO Pizzas: Buy One Personal Pizza, Get One Free</div>
          </v-col>
        </v-row>
      </v-img>
    <v-container fluid class="px-6">
      <v-row justify="center" class="my-4">
          <v-btn depressed small color="#FFF8E5" class="orange--text text-center">SAVE 8$</v-btn>
      </v-row>
      <v-row justify="center" class="my-4">
          <div class="subtitle text-center black--text mx-4">Show this ballersout Reward to your serve to redeem</div>
      </v-row>
      <router-link to="" class="none"><v-btn block color="#E7E7E7" light class="py-6 mb-4">Tell Friends</v-btn></router-link>
      <div class="subtitle black--text font-weight-bold">BurgerFi</div>
      <div class="subtitle black--text">12101 University Blvd #207, Orlando, FL</div>
      <div class="subtitle black--text mb-4">(407) 281-6655</div>
      <v-img class="maps mb-4" src="https://www.google.com/maps/d/thumbnail?mid=16b1fkm_KRhH0Uo9IzNpYDrlZyIY"></v-img>
      <div class="redeemed">
          <p class="font-weight-bold mb-0 caption text-center">Reward Redeemed</p>
          <p class="mb-0 caption text-center">Wednesday, Mar 4, at 7:33 PM</p>
      </div>
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
  .lightbox {
    box-shadow: 0 0 20px inset rgba(255, 255, 255, 0.3);
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 31.25%, #FFFFFF 100%);
  }
  .maps{
      max-height: 150px;
  }
  .redeemed{
      background-color: #E5ECFF;
      width: 100%;
      padding: 12px;
      border-radius: 4px;
  }
</style>