<template>
  <div class="historyofcoupon">
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
    class="elevation-1"
      absolute
      color="white"
      light
      hide-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <router-link to="/" class="none"><v-app-bar-nav-icon><v-icon dark left>mdi-arrow-left</v-icon></v-app-bar-nav-icon></router-link>

      <v-toolbar-title>History of Coupon</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-container fluid class="py-12">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card class="mx-2 mb-4">
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            </v-img>

            <v-card-text class="py-0">
            <v-row
              align="left">
              <v-col cols="sm-12" class="pb-0 mb-3">
                  <p v-text="card.title" class="font-weight-black mb-1 subtitle"></p>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-text v-text="card.partner" class="py-0 pb-3"></v-card-text>
            <v-card-actions class="px-4 pb-4">
                <v-btn depressed small color="#FFF8E5" class="orange--text">SAVE 8$</v-btn>
                <v-spacer></v-spacer>
                <router-link to="/redeemeddetail" class="none"><v-btn depressed color="#E5ECFF" class="indigo--text px-5">REDEEMED</v-btn></router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'BOGO Pizzas: Buy One Personal Pizza, Get One Free', partner: 'BurgerFi', src: 'https://images.immediate.co.uk/production/volatile/sites/2/2015/08/12812.jpg?quality=90&resize=960%2C408', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', partner: 'Starbucks', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGphPW4lO9VU3k0-tUmi75VMrNVnlmmJzwTRvTCuUWfbMvYxVA&usqp=CAU', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza, Get One Free', partner: 'BurgerFi', src: 'https://images.immediate.co.uk/production/volatile/sites/2/2015/08/12812.jpg?quality=90&resize=960%2C408', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', partner: 'Starbucks', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGphPW4lO9VU3k0-tUmi75VMrNVnlmmJzwTRvTCuUWfbMvYxVA&usqp=CAU', flex: 12 },
      ],
    }),
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .historyofcoupon{
    background-color: #F1F3F4;
  }
</style>