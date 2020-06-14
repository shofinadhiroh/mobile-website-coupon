<template>
  <v-card
    class="mx-auto px-3"
    max-width="480"
  >
    <v-container fluid>
      <v-row dense class="mb-5">
        <router-link to="/partnerdetail">
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="mb-4">
            <v-card-text class="py-3">
              <v-row
                align="left">
                <v-col cols="3" class="pr-0 pl-4">
                    <v-img :src="card.src"></v-img>
                </v-col>
                <v-col cols="auto" justify="end">
                    <div v-text="card.title" class="subtitle-1 font-weight-bold"></div>
                    <div v-text="card.amount" class="grey--text subtitle-1"></div>
                </v-col>
              </v-row>
              </v-card-text>
          </v-card>
          </v-col>
        </router-link>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
        { title: 'BurgerFi', amount: '3 Coupon', src: 'https://i2.wp.com/stuntandgimmicks.com/wp-content/uploads/2018/10/BurgerFi-logo-e1539545984473.png?fit=235%2C216&ssl=1', flex: 12 },
        { title: 'Uncle Maddios Pizza', amount: '16 Coupon', src: 'https://static1.squarespace.com/static/52cf5852e4b0c1274ad7d85c/t/55e1a552e4b0088b5f195ac2/1589561992167/', flex: 12 },
      ],
    }),
  }
</script>