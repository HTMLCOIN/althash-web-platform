<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md6>
          <v-card color="light-blue darken-1" dark>
            <v-card-title primary class="headline"><b>What we have been up to</b></v-card-title>
            <v-card-text>
	            <p>
                Since the release of the Althash Web Platform (AWP), the development team has been engaged in many activities behind the scenes. The <span class="cursor" @click="openDapp('dapp_altproof')"><b>AltProof</b></span> DApp is a good example of where our efforts are being concentrated now (please take the time to check it out!).
              </p>
              <p>
                With our goal of being a software company, we have been much more dedicated to building products on top of our infrastructure than marketing our initiatives. That has been seen with criticism by some people in the community, which we totally understand. In order to be able to inform our communities better, we have been working on our new website, which is in its final steps of content writing. With that, we expect to have, once for all, a place that concentrates all the info that anyone needs to know about the Althash and HTMLCoin. Meanwhile, our social networks are the best place for that.
              </p>
              <p>
                In parallel, the development work never stops. Our Tech Team will keep working to deploy applications on top of the <b>AWP</b>, along with the DApps developed by community members, just like the succesfull <span class="cursor" @click="openDapp('dapp_crypticmag')"><b>CrypticMAG</b></span>, the recently rebranded <b>Biffy Plutonium</b>, which is just around the corner, and the recently initiated <b>Photizo</b>.
              </p>
              <p>
                If you are a development enthusiast and have your idea for a DApp project, please count on us. We will give you all support you need to deploy your decentralized solution on the <b>AWP</b>.
              </p>
              <p>We are here for you.</p>
              <p></p>
              <p>
              <b>The HTMLCOIN Foundation</b>
              <br>
              <a href="https://htmlcoin.com" target="_blank" style="text-decoration:none">https://htmlcoin.com</a>
              <br>
              <a href="mailto:feedback@althash.org" style="text-decoration:none">feedback@althash.org</a>
              </p>
              <br>
              <br>
              <br>
              <br>
              <p><center><img src="~assets/images/logo_htmlcoin.png"></center></p>
	            </v-card-text>
            </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card color="blue lighten-1" dark>
                <v-card-title class="subheading"><div class="cursor" @click="openDapp('dapp_altproof')"><img src="~assets/images/logo_altproof_horizontal.png" style="width:100%;height:auto;" ></div></v-card-title>
                <v-card-text>
                  <p><b>New Addition!</b></p>
                  <p>The <b>AltProof</b> is our new decentralized application where you can register documents or text, as a way to prove the version of their contents. Just like a notary, but with a decentralized approach, without any middlemen, and, the best, <b>for free</b> (You just pay the network fees)!</p>
		            </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="light-blue darken-3" dark>
                <v-card-title class="subheading"><div class="cursor" @click="openDapp('dapp_myoffspring')"><img src="~assets/images/myoffspring_logo_white.png" style="width:100%;height:auto;" ></div></v-card-title>
                <v-card-text>
                  <p><b>MyOffspring</b> allows you to register your children on the AltHash blockchain, creating a digital, immutable and accessible birth certificate.</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="light-blue darken-1" dark>
                <v-card-title class="subheading"><div class="cursor" @click="openDapp('create_token')"><img src="~assets/images/tokenfarm_logo_white.png" style="width:100%;height:auto;"></div></v-card-title>
                <v-card-text>
                  <p>TokenFarm boosts the process of creating Tokens on <b>AltHash</b> with just a few clicks!</p>
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
              <p><center><img src="~assets/images/logo_crypticMAG_transparent_white.png" @click="openDapp('dapp-crypticmag')" class="cursor" style="max-width: 150px; width:65%; height:auto; border:0"></center></p>
              <p>We're very excited to announce the deployment of our first Community-developed DAPP!</p>
              <p><b>CrypticMAG</b> is a Token and a Decentralized Application that will allow its magazine readers to redeem prizes through a web interface here in the AltHash Web Platform.</p>
              <p>To access it, remember to log in by adding a wallet (top-right corner menu) and clicking on CrypticMAG's icon.</p>
              <p>Good luck on your redeeming!</p>
            </v-card-text>
	          <v-container fluid grid-list-xl text-xs-center>
              <v-layout row wrap>
                <v-flex xs8 offset-xs2>
                  <v-card color="transparent" flat>
                    <div>
                      <a href="http://biffytoken.site" target="_blank">
                        <img src="~assets/images/logo_Biffy_white.png" style="max-width: 100px; width:65%; height:auto; border:0" />
                      </a>
                      <br>
                      <b>Soon: Biffy Plutonium</b>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
	          </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>    
  </v-card>
</template>

<style>
.cursor:hover {
  cursor: pointer;
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
    }
  }
};
</script>
