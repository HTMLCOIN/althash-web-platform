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
		  <p>TokenFarm boosts the process of creating Tokens on <b>AltHash</b> with just a few clicks!</p><p>You can access it by clicking on its logo at the top menu bar, after importing or creating a wallet.</p>
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
            <v-card-title class="title"><b>Featured:<br> Community DAPPs</b></v-card-title>
	    <v-card-text>
              <p><b>The most exciting news associated with this release!</b></p>
              <p>The HTMLCOIN Foundation will encourage and support community-created DAPPs by featuring them on the web platform. You can have your application working on this hub!</p>
              <p>Candidates will be evaluated by our Tech Team, and the ones meeting standards will have their interfaces deployed on our DAPPs section.</p>
              <p>The two first community DAPPs to be released will be <b>CrypticMAG</b> and <b>Biffy Platinum</b>. Congrats!</p>
	    </v-card-text>
	    <v-container
          fluid
          grid-list-xl text-xs-center
        >
          <v-layout row wrap>
            <v-flex xs8 offset-xs2>
              <v-card color="transparent" flat>
                <v-layout row align-center>
                  <v-flex xs6>
		    <div>
                      <a href="https://crypticmag.com" target="_blank">
		        <img
                          src="images/logo_Cryptic_MAG_white.png"
                          style="width:100%;height:auto;border:0"
                        >
		      </a>
		    </div>
                  </v-flex>
                  <v-flex xs6>
		    <div>
		      <a href="http://biffytoken.site" target="_blank">
                        <img
                          src="images/logo_Biffy_white.png"
                          style="width:100%;height:auto;border:0"
                        ></img>
                      </a>
		    </div>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
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
