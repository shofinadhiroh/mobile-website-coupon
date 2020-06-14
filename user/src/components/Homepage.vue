<template>
  <div class="home">
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
      absolute
      color="white"
      light
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#0041FF"></v-app-bar-nav-icon>

      <v-toolbar-title><v-img src="../assets/logo.png"></v-img></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="#0041FF">mdi-magnify</v-icon>
      </v-btn>
      
      <router-link to="/login">
        <v-btn
          color="#0041FF"
          dark
          v-bind="attrs"
          v-on="on"
          small
        > Sign In 
        </v-btn>
      </router-link>

      <template v-slot:extension>
        <v-tabs fixed-tabs color="#0041FF">
          <v-tab class="mt-2">DISCOVER</v-tab>
          <v-tab class="mt-2">Who we are?</v-tab>
          <v-tab-item>
            <v-container fluid>
              <div class="card d-flex flex-row mb-6">
                <div
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card class="mx-3 mb-4 card--content">
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
                        <router-link to="/redeemdetail" class="none"><v-img src="../assets/image4.png" class="logo"></v-img></router-link>

                    </v-card-actions>
                  </v-card>
                </div>
              </div>

              <v-text class="mx-3 subtitle textblue font-weight-bold">RECOMMENDED</v-text>
              <v-row dense class="mt-4">
                <v-col
                  v-for="card in cards"
                  :key="card.title"
                  :cols="card.flex"
                >
                  <v-card class="mx-3 mb-4">
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
                        <router-link to="/redeemdetail" class="none"><v-btn outlined color="#0041FF" class="px-5">REDEEM</v-btn></router-link>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="pa-5" color="#F1F3F4">
              <v-card-text class="pb-0 text-center text-h4" >WHAT IS</v-card-text>
                  <v-card-text class="font-weight-bold text-center text-h5" >BALLERSOUT?</v-card-text>
              <v-row>
                <v-col class="white mx-4">
                  <v-card-text class="pb-0 font-weight-bold" >¿Quiénes Somos?</v-card-text>
                  <v-card-text class="pb-0">Somos una comunidad que disfruta crear experiencias magníficas, únicas y valiosas, en compañía de nuestros seres queridos, facilitándoles a las personas a conectarse unos con los otros.</v-card-text>
                  <v-card-text class="pb-0 font-weight-bold" >Nuestra Misión</v-card-text>
                  <v-card-text class="pb-0">Nuestra misión es recuperar alegrías y experiencias, brindándoles múltiples beneficios y ahorros, y al mismo tiempo divertirse a un bajo costo. Buscamos cambiar el estereotipo implementado por la sociedad, que consiste que solo puedes divertirte gastando mucho dinero, y vamos a cambiar eso!</v-card-text>
                  <v-card-text class="pb-0 font-weight-bold" >Nuestra comunidad</v-card-text>
                  <v-card-text class="pb-0">Ballers , los miembros de nuestra comunidad, son personas alegres , cool , que disfrutan pasarla bien, así mismo crear y compartir experiencias únicas.</v-card-text>
                  <v-card-text class="pb-0">Los Ballers son una pieza fundamental para cumplir nuestro propósito de conectarnos uno con los otros por medio de experiencias .</v-card-text>
                  <v-card-text class="pb-0 font-weight-bold" >Beneficios</v-card-text>
                  <v-card-text class="pb-0">- Ahorra divirtiéndote</v-card-text>
                  <v-card-text class="pb-0">- Experiencias fácil de descubrir</v-card-text>
                  <v-card-text class="pb-0">- Infinitas experiencias inolvidables</v-card-text>
                  <v-card-text class="pb-0 font-weight-bold" >Ballers Out , diviértete ahorrando.</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item> 
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="#0041FF"
      class="py-4"
    >

    <router-link to="/" class="none my-4 pa-4"><v-app-bar-nav-icon><v-icon color="white" large>mdi-close</v-icon></v-app-bar-nav-icon></router-link>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item class="px-4 py-2">
            <v-list-item-title class="white--text title save">John,</v-list-item-title>
          </v-list-item>

          <v-list-item class="px-4 py-2 mb-6">
            <v-img src="../assets/save.png">
              <v-row align="center" class="pa-2 fill-height">
                <v-col>
                  <div class="caption text-center black--text">Your Total Savings</div>
                  <div class="title text-center orange--text font-weight-bold">$34</div>
                </v-col>
              </v-row>
            </v-img>
          </v-list-item>

          <router-link to="/mycoupon" class="none white--text subtitle">
            <v-list-item class="pl-4 py-2">
              <v-list-item-title class="white--text">My Coupon</v-list-item-title>
              <v-list-item-title class="white--text text-right"><v-icon color="white" medium>mdi-chevron-right</v-icon></v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/historycoupon" class="none white--text subtitle">
            <v-list-item class="pl-4 py-2">
              <v-list-item-title class="white--text">History of Coupon</v-list-item-title>
              <v-list-item-title class="white--text text-right"><v-icon color="white" medium>mdi-chevron-right</v-icon></v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/myaccount" class="none white--text subtitle">
            <v-list-item class="pl-4 py-2 mb-6">
              <v-list-item-title class="white--text">My Account</v-list-item-title>
              <v-list-item-title class="white--text text-right"><v-icon color="white" medium>mdi-chevron-right</v-icon></v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
        
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="pl-4 py-2">
            <v-list-item-title class="white--text subtitle">Contact</v-list-item-title>
          </v-list-item>

          <router-link to="/termsnadcondition" class="none white--text subtitle">
            <v-list-item class="pl-4 py-2">
              <v-list-item-title class="white--text">Terms and Condition</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/" class="none white--text subtitle">
            <v-list-item class="pl-4 py-2">
              <v-list-item-title class="white--text">Logout</v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      cards: [
        { title: 'BOGO Pizzas: Buy One Personal Pizza, Get One Free', partner: 'BurgerFi', src: 'https://images.immediate.co.uk/production/volatile/sites/2/2015/08/12812.jpg?quality=90&resize=960%2C408', flex: 12 },
        { title: 'Enjoy 50% off any Starbucks handcrafted beverage', partner: 'Starbucks', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGphPW4lO9VU3k0-tUmi75VMrNVnlmmJzwTRvTCuUWfbMvYxVA&usqp=CAU', flex: 12 },
        { title: 'BOGO Pizzas: Buy One Personal Pizza, Get One Free', partner: 'BurgerFi', src: 'https://images.immediate.co.uk/production/volatile/sites/2/2015/08/12812.jpg?quality=90&resize=960%2C408', flex: 12 },
      ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
  .none{
    text-decoration: none;
  }
  .home{
    background-color: #F1F3F4;
  }
  .textblue{
    color: #0041FF;
  }
  .drawer{
    background-color: #0041FF;
  }
  .save{
    width: 100px;
  }
  .card {
    display: flex;
    overflow-x: auto;
    }
  
  .card::-webkit-scrollbar {
  display: none;
}
  
  .card--content {
  max-width: 255px;
  margin: 5px;
  }
  .logo{
    max-width: 40px;
  }
</style>