<template>
  <v-card
    class="mx-auto px-0 overflow-hidden"
    max-width="480"
  >
  
    <v-list>
        <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item>
              <v-list-item-action>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>I'm a list item</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      
    }),
  }
</script>