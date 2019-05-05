<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
        <v-card-title class="justify-center">
          <span class="headline"><img src="~assets/images/myoffspring_logo.png"></span>
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
      <v-tab ripple>
        Info
        <v-icon>info</v-icon>
      </v-tab>
      <v-tab ripple>
        New
        <v-icon>child_care</v-icon>
      </v-tab>
      <v-tab ripple>
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
                    <div>
                      <img src="~assets/images/myoffspring_splash2.jpg" style="width: 50%;height: auto;">
                    </div>
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
                      <br><br>
                      MyOffspring was developed based on suggestions given by our Communities Manager, <b>Heitor Guimarães</b>, supported by the Community member <b>Karol Pyla</b>, who wanted to register his son, <b>Julek</b>, on AltHash blockchain. The HTMLCOIN Foundation is glad to have the support of such smart and dedicated people. Thank you!
                    </span>
                    <br><br>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
      </v-tab-item>
      <v-tab-item>
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
                  background-color="teal"
                  maxlength="200"
                  ></v-text-field>
                  <v-text-field
                  label="Mother's Full Name"
                  v-model.trim="motherFullName"
                  outline
                  background-color="teal"
                  maxlength="200"
                  ></v-text-field>
                  <v-text-field
                  label="Father's Full Name"
                  v-model.trim="fatherFullName"
                  outline
                  background-color="teal"
                  maxlength="200"
                  ></v-text-field>
                  <v-layout>
                    <v-flex xs6>
                      <v-menu
                      ref="dateOfBirth_menu"
                      :close-on-content-click="false"
                      v-model="dateOfBirth_menu"
                      :nudge-right="40"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                      >
                        <v-text-field
                        slot="activator"
                        v-model="dateOfBirth"
                        label="Date of Birth"
                        prepend-icon="event"
                        readonly
                        outline
                        background-color="teal"
                        ></v-text-field>
                        <v-date-picker
                        ref="picker"
                        v-model="dateOfBirth"
                        :max="new Date().toISOString().substr(0, 10)"
                        min="1900-01-01"
                        @change="dateOfBirth_save"
                        ></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs6>
                      <v-menu
                      ref="timeOfBirth_menu"
                      :close-on-content-click="false"
                      v-model="timePicker"
                      :nudge-right="40"
                      :return-value.sync="timeOfBirth"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="290px"
                      min-width="290px"
                      >
                        <v-text-field
                        slot="activator"
                        v-model="timeOfBirth"
                        label="Time of Birth"
                        prepend-icon="access_time"
                        readonly
                        outline
                        background-color="teal"
                          ></v-text-field>
                        <v-time-picker
                        v-if="timePicker"
                        v-model="timeOfBirth"
                        full-width
                        format="24hr"
                        @change="timeOfBirth_save"
                        ></v-time-picker>
                      </v-menu>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                  label="Place of Birth (Facility, City, State/Province, Country)"
                  v-model.trim="placeOfBirth"
                  outline
                  background-color="teal"
                  maxlength="200"
                  ></v-text-field>
                  <br><br>
                  <v-layout>
                    <v-flex xs4>
                      <v-text-field
                      label="Gas Price (1e-8 HTML/gas)"
                      v-model.trim="gasPrice"
                      required
                      outline
                      background-color="indigo"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                      label="Gas Limit"
                      v-model.trim="gasLimit"
                      required
                      outline
                      background-color="indigo"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                      label="Fee"
                      v-model.trim="fee"
                      required
                      outline
                      background-color="indigo"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-form>
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
                          <v-textarea label="Raw Tx" v-model="rawTx" disabled></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="blue--text darken-1" flat @click="confirmSend" v-show="canSend && !sending">{{ $t('common.confirm') }}</v-btn>
                    <v-btn class="red--text darken-1" flat @click.native="confirmSendDialog = false" :v-show="!sending">{{ $t('common.cancel') }}</v-btn>
                    <v-progress-circular indeterminate :size="20" v-show="sending" class="primary--text"></v-progress-circular>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-flex xs8 offset-xs2>
            <v-container fluid grid-list-md align-center text-xs-center>
              <v-layout row wrap>
                <v-flex xs10>
                  <v-text-field
                  class="mx-3"
                  label="Hash ID"
                  v-model.trim="searchHashID"
                  append-icon="search"
                  @click:append="openCertificate"
                  outline
                  background-color="teal"
                  ></v-text-field>
                </v-flex>
                <v-flex xs2>
                  <img src="~assets/images/scan_qrcode.png" class="cursor" @click="scanQrcode">
                </v-flex>
                <v-flex xs12>
                  <p class="error">{{ error }}</p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <v-dialog v-model="execResultDialog" width="600px">
      <span id="certificate">
        <v-card class="modal-detail">
          <v-card-text>
            <v-container align-center grid-list-md>
              <v-layout row wrap>
                <v-flex xs6 text-md-center>
                  <img src="~assets/images/myoffspring_logo.png" class="logo1">
                </v-flex>
                <v-flex xs6 text-md-center>
                  <img src="~assets/images/logo_althash.png" class="logo2">
                </v-flex>
                <v-flex xs12 text-md-center>
                  <span class="font-weight-medium my-2 headline font-bold" id="title">
                    Digital Birth Certificate
                  </span>
                </v-flex>
                <v-flex xs12>
                  <p></p>
                  <p>
                    <b>Full Name:</b> {{ resultFullName }}
                  </p>
                  <p>
                    <b>Mother's Full Name:</b> {{ resultMotherFullName }}
                  </p>
                  <p>
                    <b>Father's Full Name:</b> {{ resultFatherFullName }}
                  </p>
                  <p>
                    <b>Date of Birth:</b> {{ resultDateOfBirth }}
                  </p>
                  <p>
                    <b>Time of Birth:</b> {{ resultTimeOfBirth }}
                  </p>
                  <p>
                    <b>Place of Birth:</b> {{ resultPlaceOfBirth }}
                  </p>
                  <p class="text-xs-center">
                    <span class="caption" id="certificate_id">Hash ID: {{ searchHashID }}</span>
                    <img :src="qr" class="qr" id="qr"/>
                    <br>
                    <v-btn icon @click="print" id="btn">
                      <v-icon>print</v-icon>
                    </v-btn>
                  </p>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </span>
    </v-dialog>
    <v-dialog v-model="qrScan" max-width="50%">
      <v-container>
        <v-layout>
          <v-flex xs12 align-center text-xs-center>
            <qrcode-stream :track="false" @decode="onDecode" @init="onInit" :camera="camera" v-if="qrComponent" />
          </v-flex>
        </v-layout>    
      </v-container>
    </v-dialog>
    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="teal"
        dark
      >
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<style scoped>
  .modal-detail {
    background-image: url("~assets/images/myoffspring_border.png");
  }

  .logo1 {
    width: auto; 
    height: 40px;
  }

  .logo2 {
    width: auto; 
    height: 40px;
  }

  .cursor:hover {
    cursor: pointer;
  }

  .error {
    font-weight: bold;
    color: red;
  }

  .qr {
    width: 75px; 
    height: auto;
  }
</style>

<script>
  import webWallet from 'libs/web-wallet'
  import abi from 'ethjs-abi'
  import server from 'libs/server'
  import sha256 from 'js-sha256'
  import qrcode from 'qrcode'
  import printd from 'printd'
  import { QrcodeStream, QrcodeCapture } from 'vue-qrcode-reader'

  export default {
    data () {
      return {
        loading: false,
        contractAddress: '0b0c37fa6d64078dac7cfa4ccc43529a615602a1',
        abi: '',
        parsedAbi: null,
        method: null,
        inputParams: [],
        fullName: '',
        motherFullName: '',
        fatherFullName: '',
        dateOfBirth_menu: false,
        dateOfBirth: '',
        timeOfBirth_menu: false,
        timeOfBirth: null,
        timePicker: false,
        placeOfBirth: '',
        gasPrice: '40',
        gasLimit: '2500000',
        fee: '0.01',
        error: null,
        qrScan: false,
        camera: false,
        qrComponent: false,
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
        resultPlaceOfBirth: 'loading...',
        qr: ''
      }
    },
    components:{
      QrcodeStream,
      QrcodeCapture
    },
    computed: {
      notValid: function() {
        //@todo valid the address
        const nameCheck = /^(?!\s*$).+/.test(this.fullName)
        const dateOfBirthCheck = /^(?:(?:31(-)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(-)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(-)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/.test(this.dateOfBirth.split("-").reverse().join("-")) && parseInt(this.dateOfBirth.replace(/-/g,"")) <= parseInt(this.todayFormattedDate())
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
      },
      dateOfBirth_menu (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
      qrScan(val){
        if(!val)
          this.camera = false
      }
    },
    methods: {
      print(){
        const cssText = `
          #title {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: x-large;
            text-align: center;                      
            display: block;
            padding: 20px;
            margin-top: 120px;
          }

          p {
            font-family: Arial, Helvetica, sans-serif;
            margin-left: 50px;
          }

          #certificate_id {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            display: block;
            padding: 20px;
          }

          #qr {
            margin-left: auto;
            margin-right: auto;
            padding: 10px;
            width: 100px; 
            height: auto;
            display: block;
          }

          #btn {
            display: none;
          }

          .logo1 {
            float: left;
            padding: 10px;
            height: 20px;
            width: auto;
            margin-left: 25px;
          }

          .logo2 {
            float: right;
            padding: 10px;
            height: 20px;
            width: auto;
            margin-right: 25px;
          }
        `

        const d = new printd();

        const printCallback = ({ launchPrint }) => launchPrint();

        d.print( document.getElementById('certificate'), cssText, printCallback );
      },
      scanQrcode(){
        this.searchHashID = '';
        this.qrComponent = true;
        this.camera = true;
        this.qrScan = true;
      },

      onDecode(certificateID) {
        this.searchHashID = certificateID
        this.camera = false;
        this.qrScan = false;
        this.openCertificate();
      },
      async onInit (promise) {
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            this.error = "ERROR: you need to grant camera access permisson"
          } else if (error.name === 'NotFoundError') {
            this.error = "ERROR: no camera on this device"
          } else if (error.name === 'NotSupportedError') {
            this.error = "ERROR: secure context required (HTTPS, localhost)"
          } else if (error.name === 'NotReadableError') {
            this.error = "ERROR: is the camera already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.error = "ERROR: installed cameras are not suitable"
          } else if (error.name === 'StreamApiNotSupportedError') {
            this.error = "ERROR: Stream API is not supported in this browser"
          }
        }
      },
      async send() {
        try {
          const abiJson = [{"constant": true, "inputs": [{"name": "hash", "type": "string"} ], "name": "getHeir", "outputs": [{"name": "result", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "hash", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "name": "newHeir", "outputs": [{"name": "result", "type": "string"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "hash", "type": "string"} ], "name": "heirEvent", "type": "event"} ]
          var newDateOfBirth = this.dateOfBirth.replace(/-/g,"")
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
          this.timeOfBirth = null
          this.placeOfBirth = ''
        } catch (e) {
          alert(e.message || e)
          this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e)
          this.confirmSendDialog = false
        }
      },
      async openCertificate() {
        if(this.searchHashID != ''){
          this.loading = true;
          try {
            const abiJson = [{"constant": true, "inputs": [{"name": "hash", "type": "string"} ], "name": "getHeir", "outputs": [{"name": "result", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "hash", "type": "string"}, {"name": "heirFullName", "type": "string"}, {"name": "motherFullName", "type": "string"}, {"name": "fatherFullName", "type": "string"}, {"name": "dateOfBirth", "type": "uint256"}, {"name": "timeOfBirth", "type": "uint256"}, {"name": "placeOfBirth", "type": "string"} ], "name": "newHeir", "outputs": [{"name": "result", "type": "string"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": false, "name": "hash", "type": "string"} ], "name": "heirEvent", "type": "event"} ]
            const encodedData = abi.encodeMethod(abiJson[0], [this.searchHashID]).substr(2)
            try {
              var encodedResult = await webWallet.getWallet().callContract(this.contractAddress, encodedData)
              encodedResult = '0x' + encodedResult
              var decodedResult = abi.decodeMethod(abiJson[0], encodedResult)
              var rawDoB = decodedResult[4].toString()
              var formattedDateOfBirth = ''
              if(rawDoB != '0'){
                formattedDateOfBirth = rawDoB.substring(0,4)+"-"+rawDoB.substring(4,6)+"-"+rawDoB.substring(6)
              }
              var rawToB = decodedResult[5].toString()
              var formattedTimeOfBirth = ''
              if(rawToB != '0'){
                switch(rawToB.length) {
                  case 3:
                    rawToB = '0' + rawToB
                    break;
                  case 2:
                    rawToB = '00' + rawToB
                    break;
                  case 1:
                    rawToB = '000' + rawToB
                    break;
                }
                formattedTimeOfBirth = rawToB.substring(0,2)+":"+rawToB.substring(2)
              }
              else{
                formattedTimeOfBirth = '00:00'
              }
              this.resultStatus = decodedResult[0]
              this.loading = false;
              if(this.resultStatus == 'Heir record found.'){
                this.execResultDialog = true
                this.resultFullName = decodedResult[1]
                this.resultMotherFullName = decodedResult[2]
                this.resultFatherFullName = decodedResult[3]
                this.resultDateOfBirth = formattedDateOfBirth
                this.resultTimeOfBirth = formattedTimeOfBirth
                this.resultPlaceOfBirth = decodedResult[6]
                this.drawQrCode()
              }
              else{
                alert('Record not found!')
              }
            } catch (e) {
              this.loading = false;
              this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e)
              alert(e.message || e)
              this.execResultDialog = false
            }
          } catch (e) {
            this.loading = false;
            this.$root.error('Params error')
            this.$root.log.error('call_contract_encode_abi_error', e.stack || e.toString() || e)
            return false
          }
        }
      },
      dateOfBirth_save (date) {
        this.$refs.dateOfBirth_menu.save(this.dateOfBirth)
      },
      timeOfBirth_save () {
        this.$refs.timeOfBirth_menu.save(this.timeOfBirth)
      },
      todayFormattedDate() {
        var today = new Date();
        var dd = today.getDate().toString();
        var mm = (today.getMonth()+1).toString(); //January is 0!
        var yyyy = today.getFullYear().toString();
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
      },
      drawQrCode() {
        qrcode.toDataURL(`${this.searchHashID}`, (err, url) => {
          this.qr = url
        })
      }
    }
  }
</script>