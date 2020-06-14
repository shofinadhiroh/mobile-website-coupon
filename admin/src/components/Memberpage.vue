<template>
  <v-card
    class="mx-auto px-3"
    max-width="480"
  >
    <v-container fluid>
      <v-row dense class="mb-5">
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
        <router-link to="/memberdetail">
            <v-card class="mb-4">
                <v-card-text class="py-0">
                <v-row
                align="left">
                <v-col cols="sm-8" class="pb-0">
                    <p v-text="card.username" class="font-weight-black mb-1"></p>
                </v-col>
                <v-col cols="auto" class="px-4 pb-0">
                    <p v-text="card.status" justify="end" class="green--text d-inline-flex mr-1 mb-1"></p>
                    <p v-text="card.exp" justify="end" class="font-weight-bold d-inline-flex mb-1"></p>
                </v-col>
                </v-row>
                </v-card-text>
                <v-card-text v-text="card.desc" class="py-0 pb-3"></v-card-text>
            </v-card>
        </router-link>
          
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { username: 'john', status: 'Active', desc: '4 Coupon Redeemed', exp: 'until 01/22', flex: 12 },
        { username: 'tessa11', status: 'Active', desc: '8 Coupon Redeemed', exp: 'until 06/20', flex: 12 },
        { username: 'tommy', status: 'Active', desc: '33 Coupon Redeemed', exp: 'until 07/23', flex: 12 },
        { username: 'john', status: 'Active', desc: '4 Coupon Redeemed', exp: 'until 01/22', flex: 12 },
        { username: 'tessa11', status: 'Active', desc: '8 Coupon Redeemed', exp: 'until 06/20', flex: 12 },
        { username: 'tommy', status: 'Active', desc: '33 Coupon Redeemed', exp: 'until 07/23', flex: 12 },
        { username: 'john', status: 'Active', desc: '4 Coupon Redeemed', exp: 'until 01/22', flex: 12 },
        { username: 'tessa11', status: 'Active', desc: '8 Coupon Redeemed', exp: 'until 06/20', flex: 12 },
        { username: 'tommy', status: 'Active', desc: '33 Coupon Redeemed', exp: 'until 07/23', flex: 12 },
        { username: 'john', status: 'Active', desc: '4 Coupon Redeemed', exp: 'until 01/22', flex: 12 },
        { username: 'tessa11', status: 'Active', desc: '8 Coupon Redeemed', exp: 'until 06/20', flex: 12 },
        { username: 'tommy', status: 'Active', desc: '33 Coupon Redeemed', exp: 'until 07/23', flex: 12 },
      ],
    }),
  }
</script>