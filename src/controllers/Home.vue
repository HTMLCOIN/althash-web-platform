<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="blue" dark>
            <v-card-title primary class="title">Welcome to the AltHash Web Platform!</v-card-title>
            <v-card-text>{{ welcome_text }}</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="teal darken-1" dark>
                <v-card-title class="subheading">MyOffspring</v-card-title>
                <v-card-text>{{ myoffspring_text }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="light-green darken-2" dark>
                <v-card-title class="subheading">TokenFarm</v-card-title>
                <v-card-text>{{ tokenfarm_text }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="green darken-3" dark>
                <v-card-title class="subheading">More to come</v-card-title>
                <v-card-text>{{ more_text }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3 child-flex>
          <v-card color="deep-purple darken-4" dark>
            <v-card-title class="subheading">Featured Community DAPPs</v-card-title>
            <v-card-text>{{ featured_text }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import webWallet from 'libs/web-wallet'
import abi from 'ethjs-abi'
import server from 'libs/server'

import sha256 from 'js-sha256'

export default {
  data () {
    return {
      welcome_text: 'The HTMLCOIN Foundation is pleased to release this update, which is extending the old web wallet with DAPP capabilities. From now on, this address will become a hub for decentralized applications deployed on AltHash blockchain.',
      myoffspring_text: 'One of our first use cases on this platform, MyOffspring allows you to register your children on the blockchain, creating a digital and immutable birth certificate.',
      tokenfarm_text: 'Our second use case powers the creation of Tokens on AltHash with just a few clicks!',
      more_text: 'Many other applications are in our pipeline and will be gradativelly released on coming weeks. Stay tuned!',
      featured_text: 'The HTMLCOIN Foundation will encourage and support community-created DAPPs by featuring them on the web platform for free. You can have your application working on our main hub!'
    }
  }
}
</script>
