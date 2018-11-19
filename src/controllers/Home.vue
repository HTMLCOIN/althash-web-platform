<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="light-blue darken-1" dark>
            <v-card-title primary class="headline"><b>Hello World!</b></v-card-title>
            <v-card-text>
	      <p>The <b>HTMLCOIN Foundation</b> is pleased to release the latest update to the <b>AltHash Web Platform</b>, which extends its DAPP capabilities and marks a change in the next evolution of the growth of HTMLCOIN. From now on, this platform will be a hub for decentralized applications deployed on the AltHash blockchain.</p>
              <p>The updated platform provides users with the ability to interact with blockchain smart contracts through a web interface, therefore, drastically expanding development possibilities.</p>
              <p>By using technologies such as node.js and vue.js it is possible to deliver responsive, beautiful web interfaces, signifying a development that could potentially catapult blockchain projects to entirely different levels.</p>
              <p>This is the first version of the platform, so some tweaking of features and fixing of little issues are to be expected. Your support and feedback is fundamental, so please do not hesitate to contact us through our social networks and/or <a href="mailto:feedback@althash.org" style="text-decoration:none">e-mail</a>. We thank you for your support and patience as we continually strive to build a better place for our community and to create fertile soil for our ideas to take root and grow out into the world.</p>
              <p>We are here for you.</p>
              <p></p>
              <p>
              <b>The HTMLCOIN Foundation</b>
              <br>
              <a href="https://htmlcoin.com" target="_blank" style="text-decoration:none">https://htmlcoin.com</a>
              </p>
              <br>
              <br>
              <br>
              <br>
              <p><center><img src="images/logo_htmlcoin.png"></center></p>
	    </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="light-blue darken-3" dark>
                <v-card-title class="subheading"><div class="cursor" @click="openDapp('dapp_myoffspring')"><img src="images/myoffspring_logo_white.png" style="width:100%;height:auto;" ></div></v-card-title>
                <v-card-text>
                  <p>One of our first use cases on the platform, <b>MyOffspring</b>, allows you to register your children on the AltHash blockchain, creating a digital, immutable and accessible birth certificate. This will open the field for future extensions, providing a secure solution for safely tracking, monitoring, and supporting people's data throughout their entire life cycle.</p>
		</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="light-blue darken-1" dark>
                <v-card-title class="subheading"><div class="cursor" @click="openDapp('create_token')"><img src="images/tokenfarm_logo_white.png" style="width:100%;height:auto;"></div></v-card-title>
                <v-card-text>
		  <p>TokenFarm boosts the process of creating Tokens on <b>AltHash</b> with just a few clicks!</p>
		</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="light-blue darken-3" dark>
                <v-card-title class="subheading"><b>More to come...</b></v-card-title>
                <v-card-text>
		  <p>Many other applications are in our pipeline and will be gradually released in the coming weeks. Stay tuned!</p>
		</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3 child-flex>
          <v-card color="light-blue darken-1" dark>
            <v-card-title class="title"><b>Community DAPPs</b></v-card-title>
	    <v-card-text>
              <p><b>It's time!</b></p>
              <p><center><img src="images/logo_crypticMAG_transparent_white.png" @click="openDapp('dapp-crypticmag')" class="cursor" style="max-width: 150px; width:65%; height:auto; border:0"></center></p>
              <p>We're very excited to announce the deployment of our first Community-developed DAPP!</p>
              <p><b>CrypticMAG</b> is a Token and a Decentralized Application that will allow its magazine readers to redeem prizes through a web interface here in the AltHash Web Platform.</p>
	      <p>To access it, remember to log in by adding a wallet (top-right corner menu) and clicking on CrypticMAG's icon.</p>
	      <p>Good luck on your redeeming!</p>
	    </v-card-text>
	    <v-container
          fluid
          grid-list-xl text-xs-center
        >
          <v-layout row wrap>
            <v-flex xs8 offset-xs2>
              <v-card color="transparent" flat>
	        <div>
	          <a href="http://biffytoken.site" target="_blank">
                    <img
                      src="images/logo_Biffy_white.png"
                      style="max-width: 100px; width:65%; height:auto; border:0"
                    ></img>
                  </a>
	          <br>
	          <b>Soon: Biffy Platinum</b>
	        </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    </v-container>
  </v-card>
</template>

<style>
  .cursor:hover{
    cursor: pointer;
  }
</style>

<script>
export default {
  props: ['current'],
  data () {
    return {
	
    }
  },
  methods: {
    openDapp(name){
      this.$emit('openDapp', name)
    }
  }
}
</script>
