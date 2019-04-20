<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
        <v-card-title class="justify-center">
          <span class="headline"><img src="~assets/images/logo_Photizo_150.png"></span>
        </v-card-title>
      </v-flex>
    </v-container>
    <v-tabs
     centered
     icons-and-text
     color="transparent"
     slider-color="blue darken-4"
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
        Quiz
        <v-icon>library_books</v-icon>
      </v-tab>
      <v-tab-item>
        <template>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <br><br>
               <v-card>
                <v-card-text>
                  <div align="center">
                    <span class="display-1">Welcome to the Light Project.</span>
                    <br><br>
                    <span class="subheading">
                      Photizo is an app focused in spreading bible knowledge amongst the wide crypto community.
                      <br><br>
                      While answering general questions in our quiz, you will be able to gather Photizo Tokens (PHO) that will allow you to contribute to important charity projects around the globe. PHO tokens will be accepted by companies and converted into the donations.
                      <br><br>
                      Thank you for being part of our great project of bringing a higher meaning to the crypto space.
                      <br><br><br><br>
                      <small>
                        <b>Disclaimer</b>
                        <br>
                        HTMLCoin Foundation has reviewed and approved this application's code, having Althash Web Platform as a proud host, however the Foundation is not responsible for any funds transacted within this application scope.
                        <br>
                        By using this application you agree on these terms.
                      </small>
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
        <v-container fluid grid-list-lg align-center text-xs-center>
          <v-flex xs8 offset-xs2>
            <v-layout row wrap>
              <v-flex xs12>
                <div class="py-3 display-2 font-weight-light">QUIZ</div>
              </v-flex>
              <v-flex xs12 text-xs-center v-if="this.currentStep == 0">
                <span class="title">
                  <p>
                    Questions are randomically picked, in sets of 5, from our Smart Contrat in the Althash Blockchain.
                    <br>
                    After answering the 5 questions, your answers will be processed and the tokens distributed/charged.
                  </p>
                  <p>
                    Correct answer: <b>{{ this.correctAnswerPrize }} PHO</b>
                  </p>
                  <p>
                    Correct answer using a hint: <b>{{ this.correctAnswerHintPrize }} PHO</b>
                  </p>
                  <p>
                    Wrong anser: <b>-{{ this.wrongAnswerFee }} PHO</b>
                  </p>
                  <p>
                    <v-btn class="info" @click="prepareQuestions">Prepare Questions</v-btn>
                  </p>
                </span>
              </v-flex>
              <v-flex xs12 text-xs-center v-if="this.currentStep == 1">
                <v-layout row wrap>
                  <v-flex xs12>
                    <span class="title">
                      {{ this.question }}
                    </span>
                  </v-flex>
                  <v-flex xs12>
                    <v-radio-group v-model="answer">
                      <v-radio value=1>
                        <template v-slot:label>
                          {{ this.option1 }}
                        </template>
                      </v-radio>
                      <v-radio value=2>
                        <template v-slot:label>
                          {{ this.option2 }}
                        </template>
                      </v-radio>
                      <v-radio value=3>
                        <template v-slot:label>
                          {{ this.option3 }}
                        </template>
                      </v-radio>
                      <v-radio value=4>
                        <template v-slot:label>
                          {{ this.option4 }}
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn class="success">Confirm</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-container>
      </v-tab-item>
    </v-tabs>
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
    <v-dialog v-model="txReceiptDialog" persistent width="600px">
      <v-card color="blue-grey lighten-5">
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
              <v-progress-linear :indeterminate="true" color="blue"></v-progress-linear>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-center text-xs-center v-if="this.txError">
            <v-flex xs12>
              <span class="red--text">
                <p>
                  <h1>Unsuccessful</h1>
                </p>
                <p> 
                  There was an error while running your transaction.
                </p>
              </span>
            </v-flex>
            <v-flex xs12>
              <v-btn color="error" @click="this.txReceiptDialog = false">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="blue"
        dark
      >
        <v-card-text>
          <b>Loading info...</b>
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
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
  </v-card>
</template>

<script>
import webWallet from 'libs/web-wallet'
import abi from 'ethjs-abi'
import server from 'libs/server'
import config from 'libs/config'
import axios from 'axios'
import base58 from 'bs58'
import sha256 from 'js-sha256'

const tokenContractAddress = config.getNetwork() == "mainnet" ? "0" : "63738a07daf0514f2d242947117a8d748f85340b";

const contractAddress = config.getNetwork() == "mainnet" ? "0" : "f77a5d932b5c70a52852d7338f1ff1a5b56ea87b"; 

const abiJson = JSON.parse(
  '[{"constant": true, "inputs": [{"name": "answeredQuestionsIds", "type": "bytes10[5]"}, {"name": "answeredQuestionsAnswers", "type": "uint8[5]"} ], "name": "getResults", "outputs": [{"name": "results", "type": "bool[5]"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "correctAnswerHintPrize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "prepareQuestions", "outputs": [{"name": "_preparedQuestionsId", "type": "bytes10[5]"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_questionId", "type": "bytes10"} ], "name": "getHint", "outputs": [{"name": "hint", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "answeredQuestionsIds", "type": "bytes10[5]"}, {"name": "answeredQuestionsAnswers", "type": "uint8[5]"}, {"name": "answeredQuestionsHints", "type": "bool[5]"} ], "name": "processAnswers", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "correctAnswerPrize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "questionIndex", "type": "uint256"} ], "name": "getUserQuestion", "outputs": [{"name": "questionId", "type": "bytes10"}, {"name": "question", "type": "string"}, {"name": "option1", "type": "string"}, {"name": "option2", "type": "string"}, {"name": "option3", "type": "string"}, {"name": "option4", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "wrongAnswerFee", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"} ]'
);

export default {
  data () {
    return {
      userTokenBalance: 0,
      loading: false,
      wallet: webWallet.getWallet(),
      correctAnswerPrize: 0,
      correctAnswerHintPrize: 0,
      wrongAnswerFee: 0,
      minimumTokenAmount: 0,
      currentStep: 0,
      questionId: '',
      question: '',
      answer: 0,
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      rawTx: 'loading...',
      canSend: false,
      sending: false
    }
  },
  computed: {
    lotteryNotValid: function() {
      return !(/^[0-9]+$/.test(this.lotteryBet) && /^[0-9]+$/.test(this.lotteryLuckyNumber));
    },
    ufgNotValid: function() {
      return !(/^[0-9]+$/.test(this.upForGrabsBet));
    },
    sellNotValid: function() {
      return !(/^[0-9]+$/.test(this.sellPricePerToken) && /^[0-9]+$/.test(this.sellTokenQty));
    },
  },
  methods: {
    async prepareQuestions() {
      if(parseInt(this.userTokenBalance) >= parseInt(this.minimumTokenAmount)) {
        try {
          const encodedData = this.encodeContractSendFunction(
            abiJson, 
            'prepareQuestions', 
            []
          );

          this.confirmSendDialog = true;
          this.currentStep = 1;
          this.getUserQuestion(0);

          try {
            this.rawTx = await webWallet.getWallet().generateSendToContractTx(contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee);
          } catch (e) {
            this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
            alert(e.message || e);
            this.confirmSendDialog = false;
            this.currentStep = 0;
            return false;
          }
            this.canSend = true;
        } catch (e) {
          this.$root.error('Params error');
          this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
          this.confirmSendDialog = false;
          this.currentStep = 0;
          return false;
        }
      } else {
        alert('You do not have enough PHO to cover for any wrong question. You need at least ' + this.minimumTokenAmount + ' PHO.' );
      }
    },

    async confirmSend() {      
      this.sending = true;
      try {
        const txId = await webWallet.getWallet().sendRawTx(this.rawTx);
        this.confirmSendDialog = false;
        this.sending = false;
        const txViewUrl = server.currentNode().getTxExplorerUrl(txId);
        this.$root.success(`Successful sent! You can follow the transaction on <a href="${txViewUrl}" target="_blank">${txViewUrl}</a>`, true, 0);

        this.txReceiptDialog = true;
        this.awaitingTx = true;

        var apiURL = config.getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';

        const interval = setInterval(() => {

          axios.get(apiURL + txId)
          .then(result=>{
            console.log('Checking Tx...')

            if(result.data.confirmations > 0) {
              clearInterval(interval);
              this.awaitingTx = false;

              if(result.data.receipt[0].excepted != 'None') {
                this.txError = true;
                this.currentStep = 0;
              } else {
                this.txReceiptDialog = false;
                this.currentStep++;
              }
            }

          })
          .catch(console.error)
        }, 15*1000)

      } catch (e) {
        alert(e.message || e);
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e);
        this.confirmSendDialog = false;
      }
    },

    async getData(){
      this.loading = true;

      try{
        // Correct answer prize
        var decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'correctAnswerPrize', 
          []
        );

        this.correctAnswerPrize = parseInt(decodedResult[0]) / 100000000;

        // Correct answer with hint prize
        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'correctAnswerHintPrize', 
          []
        );

        this.correctAnswerHintPrize = parseInt(decodedResult[0]) / 100000000;

        // Wrong answer fee
        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'wrongAnswerFee', 
          []
        );

        this.wrongAnswerFee = parseInt(decodedResult[0]) / 100000000;
        this.minimumTokenAmount = this.wrongAnswerFee * 5;

        // User token balance
        for(var i = 0; i < this.wallet.info.hrc20.length; i++) {
          if(this.wallet.info.hrc20[i].contract.contract_address == tokenContractAddress) {
            this.userTokenBalance = parseInt(this.wallet.info.hrc20[i].amount) / 100000000;
          }
        }

      } catch (e) {
          this.loading = false;
          this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
          alert(e.message || e);
      }

      this.loading = false;
    },

    async getUserQuestion(questionIndex){
      this.loading = true;

      try{
        // Correct answer prize
        var decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getUserQuestion', 
          [questionIndex]
        );

        this.questionId = decodedResult[0].toString();
        this.question = decodedResult[1].toString();
        this.option1 = decodedResult[2].toString();
        this.option2 = decodedResult[3].toString();
        this.option3 = decodedResult[4].toString();
        this.option4 = decodedResult[5].toString();

      } catch (e) {
          this.loading = false;
          this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
          alert(e.message || e);
      }

      this.loading = false;
    },

    findIndexByName(abiJson, name){
      return abiJson.findIndex(function(item){
        return item.name === name
      });
    },

    async callContractFunction(contractAddress, abiJson, functionName, params){
      const encodedData = abi.encodeMethod(
        abiJson[
          this.findIndexByName(
            abiJson,
            functionName
          )
        ], 
        params
      ).substr(2);
      var encodedResult = await webWallet.getWallet().callContract(contractAddress, encodedData);          
      encodedResult = '0x' + encodedResult;

      return abi.decodeMethod(abiJson[this.findIndexByName(abiJson,functionName)], encodedResult);
    },

    encodeContractSendFunction(abiJson, functionName, params){
      return abi.encodeMethod(
        abiJson[this.findIndexByName(abiJson, functionName)], 
        params
      ).substr(2);
    },

    onCopySucc: function() {
      this.$root.success('copy success')
    },
    onCopyError: function() {
      this.$root.error('copy fail')
    }

  },

  mounted() {
    this.getData();
  }
}
</script>