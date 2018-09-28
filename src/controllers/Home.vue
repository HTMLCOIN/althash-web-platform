<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="light-blue darken-1" dark>
            <v-card-title primary class="headline"><b>Welcome!</b></v-card-title>
            <v-card-text>
	      <p>The <b>HTMLCOIN Foundation</b> is pleased to release this update to the HTMLCOIN Web Wallet, which extends it with DAPP capabilities. From now on, this place will be a hub for decentralized applications deployed on the <b>AltHash</b> blockchain.</p><p>The platform provides the possibility of interacting with Blockchain Smart Contracts through a web interface, therefore drastically expanding the development possibilities.</p><p>By using technologies such as node.js and vue.js, it is possible to deliver responsive, beautiful web interfaces. That essentially could position any blockchain projects on a whole another level.</p><p>This is first version of the platform, so obviously we are still tweaking features and fixing little issues. Your support and feedback is fundamental, so please don't hesitate in contacting us through all our social networks and/or <a href="mailto:feedback@althash.org" style="text-decoration: none">e-mail</a>. Please bear with us, as we are building a better place for our community and a fertile soil for our ideas to grow and take out the world.</p><p></p><p>We are here for you.</p><p><b>The HTMLCOIN Foundation</b></p><br><br><br><p><center><img src="images/logo_htmlcoin.png"></center></p>
	    </v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="light-blue darken-3" dark>
                <v-card-title class="subheading"><div><img src="images/myoffspring_logo_white.png" style="width:100%;height:auto;" ></div></v-card-title>
                <v-card-text>
		  <p>One of our first use cases on this platform, MyOffspring allows you to register your children on the <b>AltHash</b> blockchain, creating a digital, immutable and accessible birth certificate. That will open field for future extensions to a whole solution for safely tracking, monitoring and supporting people's data throughout their whole life cycle.</p><p>You can access it by clicking on its logo at the top menu bar, after importing or creating a wallet.</p>
		</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="light-blue darken-1" dark>
                <v-card-title class="subheading"><div @click="e.changeView('dapp-myoffspring')"><img src="images/tokenfarm_logo_white.png" style="width:100%;height:auto;"></div></v-card-title>
                <v-card-text>
		  <p>TokenFarm boosts the process of creating Tokens on <b>AltHash</b> with just a few clicks!</p><p>You can access it by clicking on its logo at the top menu bar, after importing or creating a wallet.</p>
		</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="light-blue darken-3" dark>
                <v-card-title class="subheading"><b>More to come...</b></v-card-title>
                <v-card-text>
		  <p>Many other applications are in our pipeline and will be gradually released on coming weeks. Stay tuned!</p>
		</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3 child-flex>
          <v-card color="light-blue darken-1" dark>
            <v-card-title class="title"><b>Featured:<br> Community DAPPs</b></v-card-title>
	    <v-card-text>
	      <p><b>The most exciting news for this release!</b></p><p>The HTMLCOIN Foundation will encourage and support community-created DAPPs by featuring them on the web platform. You can have your application working on this hub!</p><p>Candidates will be evaluated by our Tech Team, and the ones meeting standards will have their interfaces deployed on our DAPPs section.</p><p>The two first community DAPPs to be released will be <b>CrypticMAG</b> and <b>Biffy Platinum</b>. Congrats!</p>
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

<script>
import webWallet from 'libs/web-wallet'
import abi from 'ethjs-abi'
import server from 'libs/server'

import sha256 from 'js-sha256'

export default {
  data () {
    return {
      welcome_text: 'The HTMLCOIN Foundation is pleased to release this update to the HTMLCOIN Web Wallet, which extends it with DAPP capabilities. From now on, this place will be a hub for decentralized applications deployed on the AltHash blockchain.\nThe platform provides the possibility of interacting with Blockchain Smart Contracts through a web interface, therefore drastically expanding the development possibilities.\nBy using technologies such as node.js and vue.js, it is possible to deliver responsive, beautiful web interfaces. That essentially could position any blockchain projects on a whole another level.',
      myoffspring_text: 'One of our first use cases on this platform, MyOffspring allows you to register your children on the AltHash blockchain, creating a digital, immutable and accessible birth certificate. That will open field for future extensions to a whole solution for safely tracking, monitoring and supporting people\'s data throughout their whole life cycle.',
      tokenfarm_text: 'TokenFarm boosts the process of creating Tokens on AltHash with just a few clicks!',
      more_text: 'Many other applications are in our pipeline and will be gradually released on coming weeks. Stay tuned!',
      featured_text: 'The most exciting news for this release!\nThe HTMLCOIN Foundation will encourage and support community-created DAPPs by featuring them on the web platform. You can have your application working on this hub!\nCandidates will be evaluated by our Tech Team, and the ones meeting standards will have their interfaces deployed on our DAPPs section.\nThe two first community DAPPs to be released will be CrypticMAG and Biffy Platinum. Congrats!'
    }
  }
}
</script>
