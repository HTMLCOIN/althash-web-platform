<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
        <v-card-title class="justify-center">
          <span class="headline"><img src="http://104.236.228.131/htmlcoin-web-wallet/dist/images/myoffspring_logo.png"></span>
        </v-card-title>
      </v-flex>
    </v-container>
    <v-tabs
     centered
     icons-and-text
     color="transparent"
     slider-color="teal"
     v-model="active"
    >
      <v-tab
       ripple
      >
        Info
        <v-icon>info</v-icon>
      </v-tab>
      <v-tab
       ripple      
      >
        New
        <v-icon>child_care</v-icon>
      </v-tab>
      <v-tab
       ripple      
      >
        Check
        <v-icon>search</v-icon>
      </v-tab>
      <v-tab-item
      >
        <v-card flat>
          <v-card-text>
	    <v-container fluid grid-list-md>
              <v-flex xs6 offset-xs3>
                <center>
	          <span class="display-1">Welcome to MyOffspring!</span>
	          <br><br>
                  This application allows you to register your children and create a Birth Certificate for them in the <b>AltHash</b> blockchain.
                  <br><br>
                  To create a new record, just click on "New" menu item, and fill in the details about the birth of your heir. 
		  <br><br>
		  <b>Take note of the hash code generated, as it will be the unique identifier for the birth registration.</b>
                  <br><br>
                  Once the transaction is confirmed, the registration is complete and you can verify it through the menu item "Check".
                </center>
	      </v-flex>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
      >
        <v-card flat>
          <v-container fluid grid-list-md>
            <v-flex xs6 offset-xs3>
              <v-card-text>
                <v-form>
                  <v-text-field
                   label="Full Name"
                   v-model.trim="fullName"
                   required
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Mother's Full Name"
                   v-model.trim="motherFullName"
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Father's Full Name"
                   v-model.trim="fatherFullName"
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Date of Birth (YYYYMMDD // 01 of May 2018 => 20180501)"
                   v-model.trim="dateOfBirth"
                   required
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Time of Birth (HH24mmss // 19:30:00 => 193000)"
                   v-model.trim="timeOfBirth"
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Place of Birth (City, State, Country)"
                   v-model.trim="placeOfBirth"
                   outline
                  ></v-text-field>
                  <br><br>
                  <v-layout>
                    <v-flex xs4>
                      <v-text-field
                       label="Gas Price (1e-8 HTML/gas)"
                       v-model.trim="gasPrice"
                       required
                       outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                       label="Gas Limit"
                       v-model.trim="gasLimit"
                       required
                       outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                       label="Fee"
                       v-model.trim="fee"
                       required
                       outline
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="success" dark @click="send" :disabled="notValid">{{ $t('common.confirm') }}</v-btn>
              </v-card-actions>
              <v-dialog v-model="confirmSendDialog" persistent max-width="50%">
                <v-card>
                  <v-card-title>
                    <span class="headline">
                      {{ $t('send_to_contract.confirm') }}
                    </span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
			<v-flex xs10>
			  <v-text-field label="Hash ID" v-model="hashID" disabled></v-text-field>
			</v-flex>
			<v-flex xs2>
                          <v-btn small class="mt-3" color="cyan" v-clipboard:copy="hashID" v-clipboard:success="onCopySucc" v-clipboard:error="onCopyError">
                            {{ $t('common.copy') }}
                          </v-btn>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Raw Tx" v-model="rawTx" multi-line disabled></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click="confirmSend" v-show="canSend && !sending">{{ $t('common.confirm') }}</v-btn>
                    <v-btn class="red--text darken-1" flat @click.native="confirmSendDialog = false" :v-show="!sending">{{ $t('common.cancel') }}</v-btn>
                    <v-progress-circular indeterminate :size="50" v-show="sending" class="primary--text"></v-progress-circular>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab-item
      >
        <v-card flat>
          <v-container fluid grid-list-md>
            <v-flex xs6 offset-xs3>
              <v-card-text>
                <v-form>
		  <v-text-field
		   class="mx-3"
                   flat
                   label="Heir Hash Code"
                   prepend-inner-icon="search"
                   solo-inverted
		  ></v-text-field> 
                  <v-text-field
                   label="Full Name"
                   v-model.trim="fullName"
                   required
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Mother's Full Name"
                   v-model.trim="motherFullName"
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Father's Full Name"
                   v-model.trim="fatherFullName"
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Date of Birth (YYYYMMDD // 01 of May 2018 => 20180501)"
                   v-model.trim="dateOfBirth"
                   required
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Time of Birth (HH24mmss // 19:30:00 => 193000)"
                   v-model.trim="timeOfBirth"
                   outline
                  ></v-text-field>
                  <v-text-field
                   label="Place of Birth (City, State, Country)"
                   v-model.trim="placeOfBirth"
                   outline
                  ></v-text-field>
                  <br><br>
                  <v-layout>
                    <v-flex xs4>
                      <v-text-field
                       label="Gas Price (1e-8 HTML/gas)"
                       v-model.trim="gasPrice"
                       required
                       outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                       label="Gas Limit"
                       v-model.trim="gasLimit"
                       required
                       outline
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                       label="Fee"
                       v-model.trim="fee"
                       required
                       outline
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="success" dark @click="send" :disabled="notValid">{{ $t('common.confirm') }}</v-btn>
              </v-card-actions>
            </v-flex>
          </v-container>
        </v-card>

      </v-tab-item>
    </v-tabs>
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
      contractAddress: 'a6b65568a80c022071195fee0b30fe848e219683',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      fullName: '',
      dateOfBirth: '',
      timeOfBirth: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false,
      hashID: ''
    }
  },
  computed: {
    notValid: function() {
      //@todo valid the address
      const nameCheck = /^(?!\s*$).+/.test(this.fullName)
      const dateOfBirthCheck = /^\b[0-9]{8}\b$/.test(this.dateOfBirth)
      const timeOfBirthCheck = this.timeOfBirth == '' || /^\b([0-9]{6})\b$/.test(this.timeOfBirth)
      const gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0
      const gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0
      const feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001
      return !(nameCheck && dateOfBirthCheck && timeOfBirthCheck && gasPriceCheck && gasLimitCheck && feeCheck)
    }
  },
  watch: {
    method: function() {
      this.inputParams = []
    }
  },
  methods: {
    async send() {
      try {

	const abiJson = [{"constant": true, "inputs": [{"name": "hash", "type": "string"} ], "name": "getHeir", "outputs": [{"name": "result", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "hash", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "name": "newHeir", "outputs": [{"name": "result", "type": "string"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "hash", "type": "string"} ], "name": "heirEvent", "type": "event"} ]

	this.hashID = sha256(this.fullName+this.motherFullName+this.fatherFullName+this.dateOfBirth+this.timeOfBirth+this.placeOfBirth+Date.now())

        const encodedData = abi.encodeMethod(abiJson[1], [this.hashID, this.fullName, this.motherFullName, this.fatherFullName, this.dateOfBirth, this.timeOfBirth, this.placeOfBirth]).substr(2)
        this.confirmSendDialog = true
        try {
          this.rawTx = await webWallet.getWallet().generateSendToContractTx(this.contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee)
        } catch (e) {
          this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e)
          alert(e.message || e)
          this.confirmSendDialog = false
          return false
        }
        this.canSend = true
      } catch (e) {
        this.$root.error('Params error')
        this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e)
        this.confirmSendDialog = false
        return false
      }
    },

    async confirmSend() {
      this.sending = true
      try {
        const txId = await webWallet.getWallet().sendRawTx(this.rawTx)
        this.confirmSendDialog = false
        this.sending = false
        this.$root.success('Successful send. You can view at ' + server.currentNode().getTxExplorerUrl(txId))
        this.$emit('send')
      } catch (e) {
        alert(e.message || e)
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e)
        this.confirmSendDialog = false
      }
    },

    onCopySucc: function() {
      this.$root.success('copy success')
    },
    onCopyError: function() {
      this.$root.error('copy fail')
    }
  }
}
</script>
