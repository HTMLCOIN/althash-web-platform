<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap align-center text-xs-center>
      <v-flex xs10 offset-xs1>
        <v-layout row wrap align-center text-xs-center fill-height>
          <v-flex xs12>
            <span class="subheading grey--text">
              The hub for decentralized applications deployed on Althash Blockchain, using <a href="https://htmlcoin.com" target="_blank" style="text-decoration: none">Htmlcoin</a> as <a href="https://blockgeeks.com/guides/ethereum-gas-step-by-step-guide/" target="_blank" style="text-decoration: none">gas</a>.
            </span>
          </v-flex>
          <v-flex xs3>
            <v-toolbar color="indigo" dark height="30px">
              <v-spacer></v-spacer>
              <span class="font-weight-light text-no-wrap">
                ALTHASH SUITE
              </span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
              <img src="~assets/images/logo_althash_health.png" class="cursor dappImg" @click="openURL('https://health.althash.org')">
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-toolbar color="light-blue darken-1" dark height="30px">
              <v-spacer></v-spacer>
              <span class="font-weight-light text-no-wrap">
                ALTHASH DAPP
              </span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
              <img src="~assets/images/myoffspring_logo.png" class="cursor dappImg" @click="openDapp('dapp_myoffspring')"> 
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-toolbar color="light-blue darken-1" dark height="30px">
              <v-spacer></v-spacer>
              <span class="font-weight-light text-no-wrap">
                ALTHASH DAPP
              </span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
              <img src="~assets/images/tokenfarm_logo21.png" class="cursor dappImg" @click="openDapp('create_token')"> 
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-toolbar color="light-blue darken-1" dark height="30px">
              <v-spacer></v-spacer>
              <span class="font-weight-light text-no-wrap">
                ALTHASH DAPP
              </span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
              <img src="~assets/images/logo_altproof.png" class="cursor dappImg" @click="openDapp('dapp_altproof')">
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-toolbar color="cyan darken-1" dark height="30px">
              <v-spacer></v-spacer>
              <span class="font-weight-light text-no-wrap">
                COMMUNITY DAPP
              </span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
              <img src="~assets/images/logo_crypticMAG_transparent.png" class="cursor dappImg" @click="openDapp('dapp_crypticmag')">
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-toolbar color="cyan darken-1" dark height="30px">
              <v-spacer></v-spacer>
              <span class="font-weight-light text-no-wrap">
                COMMUNITY DAPP
              </span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
              <img src="~assets/images/logo_biffy_plutonium.png" class="cursor dappImg" @click="openDapp('dapp_biffyplutonium')">
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-toolbar color="cyan darken-1" dark height="30px">
              <v-spacer></v-spacer>
              <span class="font-weight-light text-no-wrap">
                COMMUNITY DAPP
              </span>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
              <img src="~assets/images/logo_photizo.png" class="cursor dappImg" @click="openDapp('dapp_photizo')">
            </v-card>
          </v-flex>
          <v-flex xs3>
          </v-flex>
          <v-flex xs12>
            <span class="body-2 grey--text">
              If you want to publish your project on this space, please reach us through the e-mail <b>feedback@althash.org</b>.
            </span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.cursor:hover {
  cursor: pointer;
}
.dappImg {
  height:auto;
  width:100%;
}
</style>

<script>
export default {
  props: ["current"],
  data() {
    return {};
  },
  methods: {
    openDapp(name) {
      this.$emit("openDapp", name);
    },
    openURL(url) {
      this.$emit("openURL", url);
    }
  }
};
</script>
