<template>
  <v-flex fill-height xs12 sm6 offset-sm3>
      <v-card
        class="mx-auto px-3"
        max-width="480"
        height="100%"
    >
        <v-container fluid>
        <v-row dense class="mb-5">
            <v-col cols="12" sm="12">
            <v-text-field
                label="Title"
                single-line
                outlined
            ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
            <v-textarea
            label="Content"
            single-line
            rows="4"
            row-height="30"
            outlined
            ></v-textarea>
        </v-col>
        </v-row>
        <router-link to="/"><v-btn block color="#0041FF" dark class="spacing-playground py-6 mb-5">Send</v-btn></router-link>
        </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Everyday Value Offer', time: '12 May, 1:30AM', desc: 'Craving a pizza? Up to 40% off on all pizza. Order Now!', flex: 12 },
        { title: 'Afternoon Upgrade', time: '11 May, 1:00 AM', desc: 'Choices on choices on choices! 50% off any handcrafted espresso beverage, size grande or larger.', flex: 12 },
        { title: 'FREE BREAKFAST!', time: '20 June, 2:15 PM', desc: 'Already got your coupons? Download coupons now and save up to 50%.', flex: 12 },
        { title: 'Everyday Value Offer', time: '12 May, 1:30AM', desc: 'Craving a pizza? Up to 40% off on all pizza. Order Now!', flex: 12 },
        { title: 'Afternoon Upgrade', time: '11 May, 1:00 AM', desc: 'Choices on choices on choices! 50% off any handcrafted espresso beverage, size grande or larger.', flex: 12 },
        { title: 'FREE BREAKFAST!', time: '20 June, 2:15 PM', desc: 'Already got your coupons? Download coupons now and save up to 50%.', flex: 12 },
        { title: 'Everyday Value Offer', time: '12 May, 1:30AM', desc: 'Craving a pizza? Up to 40% off on all pizza. Order Now!', flex: 12 },
        { title: 'Afternoon Upgrade', time: '11 May, 1:00 AM', desc: 'Choices on choices on choices! 50% off any handcrafted espresso beverage, size grande or larger.', flex: 12 },
        { title: 'FREE BREAKFAST!', time: '20 June, 2:15 PM', desc: 'Already got your coupons? Download coupons now and save up to 50%.', flex: 12 },
      ],
    }),
  }
</script>