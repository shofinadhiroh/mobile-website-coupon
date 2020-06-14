<template>
  <v-card
    class="mx-auto px-3"
    max-width="480"
  >
    <v-container fluid>
      <v-row dense class="mb-5">
        <router-link to="/coupondetail">
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="mb-4">
            <v-card-text class="py-3">
              <v-row
                align="left">
                <v-col cols="8">
                    <div v-text="card.title" class="font-weight-bold"></div>
                </v-col>
                <v-col cols="4" justify="end">
                    <div v-text="card.status" class="green--text text-right"></div>
                </v-col>
              </v-row>
              </v-card-text>
              <v-card-text v-text="card.desc" class="py-0 pb-3"></v-card-text>
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
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', status: 'Active', desc: 'Reedemed 20x', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza Get One Free', status: 'Active', desc: 'Reedemed 16x', flex: 12 },
      ],
    }),
  }
</script>