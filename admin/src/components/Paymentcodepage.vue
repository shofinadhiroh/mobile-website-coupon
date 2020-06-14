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
          <v-card class="mb-4">
           <v-card-text class="py-0">
            <v-row
              align="left">
              <v-col cols="sm-8" class="pb-0">
                  <p v-text="card.code" class="font-weight-black mb-1"></p>
              </v-col>
              <v-col cols="auto" class="px-4 pb-0">
                  <p v-text="card.status" justify="end" class="green--text d-inline-flex mr-1 mb-1"></p>
                  <p v-text="card.exp" justify="end" class="font-weight-bold d-inline-flex mb-1"></p>
              </v-col>
            </v-row>
            </v-card-text>
            <v-card-text v-text="card.desc" class="py-0 pb-3"></v-card-text>
            <v-card-actions class="px-4 pb-4">
              <v-spacer></v-spacer>

              <v-btn depressed small color="#FFF8E5" class="orange--text">EDIT</v-btn>
              <v-btn depressed small color="#FEF4F4" class="red--text">DELETE</v-btn>

            </v-card-actions>
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
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        { code: 'BALLERSOUT4521', status: 'Valid', desc: '987654', exp: 'until 01/22', flex: 12 },
        { code: 'TGIF77', status: 'Valid', desc: '876543', exp: 'until 04/20', flex: 12 },
        
      ],
    }),
  }
</script>