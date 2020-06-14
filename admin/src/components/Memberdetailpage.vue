<template>
  <v-card
    class="mx-auto px-3"
    max-width="480"
  >
    <v-container fluid>
        <v-card class="mb-4">
           <v-card-text class="py-3">
            <v-row
              align="left">
              <v-col cols="6">
                  <div class="font-weight-bold">Account Info</div>
              </v-col>
              <v-col cols="6" justify="end">
                  <div class="orange--text text-right">EDIT</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Email</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">johndoe@gmail.com</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Username</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">johndoe</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Password</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">******</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Gender</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">Male</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Birthday</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">28/11/1999</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Status</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="green--text body-2">Active</div>
              </v-col>
            </v-row>
            <v-row
              align="left">
              <v-col cols="4">
                  <div class="grey--text body-2">Exp. Date</div>
              </v-col>
              <v-col cols="8" justify="end">
                  <div class="font-weight-bold body-2">01/22</div>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-text class="py-0 pb-3"></v-card-text>
        </v-card>
        <v-row dense class="mb-5">
            <v-row>
              <v-col cols="6">
                  <p class="body-2 font-weight-bold">Coupon History</p>
              </v-col>
              <v-col cols="6" justify="end">
                  <p class="text-right body-2">6 Coupon Redeemed</p>
              </v-col>
            </v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card class="mb-4">
           <v-card-text class="py-3">
            <v-row
              align="left">
              <v-col cols="12">
                  <div v-text="card.title" class="font-weight-bold"></div>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-text v-text="card.date" class="py-0 pb-3"></v-card-text>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', date: 'Wednesday, Mar 4, at 7:33PM', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', date: 'Tuesday, Mar 3, at 9:02PM', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', date: 'Wednesday, Mar 4, at 7:33PM', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', date: 'Tuesday, Mar 3, at 9:02PM', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', date: 'Wednesday, Mar 4, at 7:33PM', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', date: 'Tuesday, Mar 3, at 9:02PM', flex: 12 },
      ],
    }),
  }
</script>