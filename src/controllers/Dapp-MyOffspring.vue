<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
        <v-card-title class="justify-center">
          <span class="headline"><img src="images/myoffspring_logo.png"></span>
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
      <v-tab-item>
      <template>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <br><br>
	    <v-card>
              <v-card-text>
		<div align="center">
                  <div><img src="images/myoffspring_splash2.jpg" style="width: 50%;height: auto;"></div>
                  <br><br>
                  <span class="display-1">Welcome to MyOffspring!</span>
		  <br><br>
                  <span class="subheading">
		  This application allows you to register your children and create a Birth Certificate for them in the <b>AltHash</b> blockchain.
                  <br><br>
                  To create a new record, just click on "New" menu item, and fill in the details about the birth of your heir.
                  <br><br>
                  <b>Take note of the hash code generated, as it will be the unique identifier for the birth registration.</b>
                  <br><br>
                  Once the transaction is confirmed, the registration is complete and you can verify it through the menu item "Check".
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
                <v-form>
                  <v-text-field
                   label="Full Name"
                   v-model.trim="fullName"
                   required
                   box
                  ></v-text-field>
                  <v-text-field
                   label="Mother's Full Name"
                   v-model.trim="motherFullName"
		   box
                  ></v-text-field>
                  <v-text-field
                   label="Father's Full Name"
                   v-model.trim="fatherFullName"
                   box
                  ></v-text-field>
                  <v-text-field
                   label="Date of Birth (dd/mm/yyyy)"
                   v-model.trim="dateOfBirth"
                   required
		   box
                  ></v-text-field>
                  <v-text-field
                   label="Time of Birth (hh24:mm) | 1:30 -> 01:30"
                   v-model.trim="timeOfBirth"
		   box
                  ></v-text-field>
                  <v-text-field
                   label="Place of Birth (City, State, Country)"
                   v-model.trim="placeOfBirth"
		   box
                  ></v-text-field>
                  <br><br>
                  <v-layout>
                    <v-flex xs4>
                      <v-text-field
                       label="Gas Price (1e-8 HTML/gas)"
                       v-model.trim="gasPrice"
                       required
		       box
		       background-color="indigo lighten-3"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                       label="Gas Limit"
                       v-model.trim="gasLimit"
                       required
		       box
                       background-color="indigo lighten-3"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                       label="Fee"
                       v-model.trim="fee"
                       required
                       box
		       background-color="indigo lighten-3"
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
			<v-flex xs12>
			  <b>Please store the ID below in a safe place, as it is the unique ID for this Birth registration.</b>
			</v-flex>
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
                   label="Hash ID"
                   prepend-inner-icon="search"
                   solo-inverted
		   v-model.trim="searchHashID"
		   append-icon="send"
		   @click:append="callTo"		   
		  ></v-text-field> 
                </v-form>
              </v-card-text>
	      <v-dialog v-model="execResultDialog" persistent max-width="50%">
                <v-card>
                  <v-card-title>
                    <span class="headline">
                      {{ $t('call_contract.result') + ': ' + this.resultStatus }}
                    </span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="Full Name" v-model="resultFullName" readonly></v-text-field>
                          <v-text-field label="Mother's Full Name" v-model="resultMotherFullName" readonly></v-text-field>
                          <v-text-field label="Father's Full Name" v-model="resultFatherFullName" readonly></v-text-field>
                          <v-text-field label="Date of Birth" v-model="resultDateOfBirth" readonly></v-text-field>
                          <v-text-field label="Time of Birth" v-model="resultTimeOfBirth" readonly></v-text-field>
                          <v-text-field label="Place of Birth" v-model="resultPlaceOfBirth" readonly></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click.native="execResultDialog = false">OK</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
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
      contractAddress: '0b0c37fa6d64078dac7cfa4ccc43529a615602a1',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      fullName: '',
      motherFullName: '',
      fatherFullName: '',
      dateOfBirth: '',
      timeOfBirth: '',
      placeOfBirth: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      execResultDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false,
      hashID: '',
      searchHashID: '',
      resultStatus: '',
      resultFullName: 'loading...',
      resultMotherFullName: 'loading...',
      resultFatherFullName: 'loading...',
      resultDateOfBirth: 'loading...',
      resultTimeOfBirth: 'loading...',
      resultPlaceOfBirth: 'loading...'
    }
  },
  computed: {
    notValid: function() {
      //@todo valid the address
      const nameCheck = /^(?!\s*$).+/.test(this.fullName)
      const dateOfBirthCheck = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/.test(this.dateOfBirth) && parseInt(this.dateOfBirth.split("/").reverse().join("")) <= parseInt(this.todayFormattedDate())
      const timeOfBirthCheck = this.timeOfBirth == '' || /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(this.timeOfBirth)
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
	
	var newDateOfBirth = this.dateOfBirth.split("/").reverse().join("")

	var newTimeOfBirth = this.timeOfBirth.replace(/:/g,"")

	this.hashID = sha256(this.fullName+this.motherFullName+this.fatherFullName+newDateOfBirth+newTimeOfBirth+this.placeOfBirth+Date.now())

        const encodedData = abi.encodeMethod(abiJson[1], [this.hashID, this.fullName, this.motherFullName, this.fatherFullName, newDateOfBirth, newTimeOfBirth, this.placeOfBirth]).substr(2)
        
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

	this.fullName = ''
        this.motherFullName = ''
        this.fatherFullName = ''
        this.dateOfBirth = ''
        this.timeOfBirth = ''
        this.placeOfBirth = ''

      } catch (e) {
        alert(e.message || e)
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e)
        this.confirmSendDialog = false
      }
    },


    async callTo() {
      if(this.searchHashID != ''){

        try {

	  const abiJson = [{"constant": true, "inputs": [{"name": "hash", "type": "string"} ], "name": "getHeir", "outputs": [{"name": "result", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "hash", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "name": "newHeir", "outputs": [{"name": "result", "type": "string"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "hash", "type": "string"} ], "name": "heirEvent", "type": "event"} ]

          const encodedData = abi.encodeMethod(abiJson[0], [this.searchHashID]).substr(2)

          this.execResultDialog = true
        
            try {
	      var encodedResult = await webWallet.getWallet().callContract(this.contractAddress, encodedData)
          
	      encodedResult = '0x' + encodedResult

	      var decodedResult = abi.decodeMethod(abiJson[0], encodedResult)
	  
	      var rawDoB = decodedResult[4].toString()
	      var formattedDateOfBirth = ''
	      if(rawDoB != '0'){
	        formattedDateOfBirth = rawDoB.substring(6)+"/"+rawDoB.substring(4,6)+"/"+rawDoB.substring(0,4)
              }

	      var rawToB = decodedResult[5].toString()
	      var formattedTimeOfBirth = ''
	      if(rawToB != '0'){
	        if(rawToB.length == 3) {
	          rawToB = '0' + rawToB
	        }
	        formattedTimeOfBirth = rawToB.substring(0,2)+":"+rawToB.substring(2)
              }

	      this.resultStatus = decodedResult[0]
	      this.resultFullName = decodedResult[1]
	      this.resultMotherFullName = decodedResult[2]
	      this.resultFatherFullName = decodedResult[3]
	      this.resultDateOfBirth = formattedDateOfBirth
	      this.resultTimeOfBirth = formattedTimeOfBirth
	      this.resultPlaceOfBirth = decodedResult[6]

            } catch (e) {
              this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e)
              alert(e.message || e)
              this.execResultDialog = false
            }
          } catch (e) {
            this.$root.error('Params error')
            this.$root.log.error('call_contract_encode_abi_error', e.stack || e.toString() || e)
            return false
          }
       }
    },

    todayFormattedDate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!

      var yyyy = today.getFullYear();
      if(dd<10){
        dd='0'+dd;
      } 
      if(mm<10){
        mm='0'+mm;
      } 
      
      var formattedDate = yyyy+mm+dd;
      
      return formattedDate;
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
