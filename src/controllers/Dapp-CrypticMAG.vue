<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
        <v-card-title class="justify-center">
          <span class="headline"><img src="~assets/images/logo_crypticMAG_transparent.png"></span>
        </v-card-title>
      </v-flex>
    </v-container>
    <v-tabs
     centered
     icons-and-text
     color="transparent"
     slider-color="deep-orange"
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
        Redeem
        <v-icon>check_circle</v-icon>
      </v-tab>
      <v-tab-item>
      <template>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <br><br>
	           <v-card>
              <v-card-text>
		            <div align="center">
                  <div><img src="~assets/images/crypticmag_splash.jpg" style="height: auto; width: 75%;"></div>
                  <br><br>
                  <span class="display-1">Welcome to CypticMAG!</span>
		              <br><br>
                  <span class="subheading">
                    This application allows the redeeming of rewards found inside your Cryptic Magazine.
                    <br><br>
            		    To redeem your prize view the "redeem" tab, then enter the code found inside your magazine along with your destination wallet.
            		    <br><br>
            		    After you have entered in the code, review that the info is correct then press confirm.
            		    <br><br>
            		    We look forward to rewarding you again in the next edition.
            		    <br><br>
            		    Stay Tuned & Good Luck!
            		  </span>
            		  <br><br>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </template>
      </v-tab-item>
      <v-tab-item
      >
        <v-card flat>
          <v-container fluid grid-list-md>
            <v-flex xs6 offset-xs3>
              <v-card-text>
                <v-text-field
                 label="Reward Code"
                 v-model.trim="rewardCode"
                 required
                 outline
                 background-color="orange"
                ></v-text-field>
                <v-text-field
                 label="Destination Wallet Address"
                 v-model.trim="destinationWalletAddress"
	               outline
                 background-color="orange"
                ></v-text-field>
                <br><br>
                <v-layout>
                  <v-flex xs4>
                    <v-text-field
                     label="Gas Price (1e-8 HTML/gas)"
                     v-model.trim="gasPrice"
                     required
          		       outline
          		       background-color="deep-orange"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                     label="Gas Limit"
                     v-model.trim="gasLimit"
                     required
	                   outline
                     background-color="deep-orange"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs4>
                    <v-text-field
                     label="Fee"
                     v-model.trim="fee"
                     required
                     outline
	                   background-color="deep-orange"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="success" @click="send" :disabled="notValid">{{ $t('common.confirm') }}</v-btn>
                <v-spacer></v-spacer>
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
                        <v-flex xs12>
                          <v-textarea label="Raw Tx" v-model="rawTx" disabled></v-textarea>
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
    </v-tabs>
    <v-dialog v-model="txReceiptDialog" persistent width="600px">
      <v-card color="white">
        <v-container fluid grid-list-md>
          <v-layout row wrap align-center text-xs-center v-if="this.awaitingTx">
            <v-flex xs12>
              <span class="title blue--text">
                Transaction broadcasted to the <b>Althash Blockchain</b>!
              </span>
            </v-flex>
            <v-flex xs12>
              Awaiting confirmation from the network...
            </v-flex>
            <v-flex xs12>
              <v-progress-linear :indeterminate="true" color="orange"></v-progress-linear>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-center text-xs-center v-if="this.txError">
            <v-flex xs12>
              <span class="red--text">
                <p>
                  <h1>Unsuccessful</h1>
                </p>
                <p> 
                  This reward code has either been claimed or is invalid.
                </p>
              </span>
            </v-flex>
            <v-flex xs12>
              <v-btn color="error" @click="txError = false; txReceiptDialog = false">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-center text-xs-center v-if="this.txConfirmed">
            <v-flex xs12>
              <span class="title blue--text">
                <h1>Successful!</h1>
              </span>
            </v-flex>
            <v-flex xs12>
              The reward was successfully redeemed. Congrats!
            </v-flex>
            <v-flex xs12>
              <v-btn color="warning" @click="txConfirmed = false; txReceiptDialog = false">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import webWallet from 'libs/web-wallet'
import abi from 'ethjs-abi'
import server from 'libs/server'
import axios from 'axios'
import base58 from 'bs58'

export default {
  data () {
    return {
      txReceiptDialog: false,
      awaitingTx: false,
      txError: false,
      txConfirmed: false,
      contractAddress: '8ef863bce3568898f293596b4638d00876bada86',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      rewardCode: '',
      destinationWalletAddress: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      execResultDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    }
  },
  computed: {
    notValid: function() {
      //@todo valid the address
      const rewardCodeCheck = this.rewardCode != ''
      const destinationWalletAddressCheck = this.destinationWalletAddress != '' && /^[H|h][a-zA-Z0-9]{33}$/.test(this.destinationWalletAddress)
      const gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0
      const gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0
      const feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001
      return !(rewardCodeCheck && destinationWalletAddressCheck && gasPriceCheck && gasLimitCheck && feeCheck)
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

	const abiJson = [{"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "approve", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transferFrom", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "rewardCode", "type": "string"} ], "name": "checkReward", "outputs": [{"name": "rewardType", "type": "uint256"}, {"name": "rewardAmount", "type": "uint256"}, {"name": "valid", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "rewardCode", "type": "string"}, {"name": "rewardAmount", "type": "uint256"}, {"name": "rewardType", "type": "uint256"} ], "name": "addRewards", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "rewardCode", "type": "string"}, {"name": "destinationWallet", "type": "address"} ], "name": "myReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "contractBalance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"} ], "name": "allowance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"} ], "name": "Transfer", "type": "event"} ]
	
  const hexAddress = '0x' + base58.decode(this.destinationWalletAddress).toString('hex').substr(2, 40)
  const encodedData = abi.encodeMethod(abiJson[8], [this.rewardCode, hexAddress]).substr(2)
        
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
        const txViewUrl = server.currentNode().getTxExplorerUrl(txId)
        this.$root.success(`Successful sent! You can follow the transaction on <a href="${txViewUrl}" target="_blank">${txViewUrl}</a>`, true, 0)
        this.$emit('send')

        this.txReceiptDialog = true;
        this.awaitingTx = true;

        const interval = setInterval(() => {

          axios.get('https://explorer.htmlcoin.com/api/tx/' + txId)
          .then(result=>{
            console.log('Checking Tx...')

            if(result.data.confirmations > 0) {
              clearInterval(interval);
              this.awaitingTx = false;

              if(result.data.receipt[0].excepted != 'None') {
                this.txError = true;
              } else {
                this.txConfirmed = true;
              }
            }

          })
          .catch(console.error)
        }, 30*1000)

        this.rewardCode = ''
        this.destinationWalletAddress = ''

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
