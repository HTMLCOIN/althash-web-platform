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
                      Photizo is an app focused on spreading bible knowledge amongst the wide crypto community.
                      <br><br>
                      While answering general questions in our quiz, you will be able to gather Photizo Tokens (PHO) that will allow you to contribute to important charity projects around the globe. PHO tokens will be accepted by companies and converted into donations.
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
          <v-flex xs6 offset-xs3>
            <v-layout row wrap>
              <v-flex xs12 v-if="this.currentStep == -1">
                  <p class="title">
                    Questions are randomically picked, in sets of 5, from our Smart Contract in the Althash Blockchain.
                    <br>
                    <br>
                    After answering the 5 questions, your answers will be processed and the tokens distributed/charged.
                  </p>
                  <br>
                  <v-card color="blue-grey darken-2" class="white--text subheader" raised>
                    <v-card-text>
                      <p>
                        Correct answer: <b>{{ this.correctAnswerPrize }} PHO</b>
                      </p>
                      <p>
                        Correct answer using a hint: <b>{{ this.correctAnswerHintPrize }} PHO</b>
                      </p>
                      <p>
                        Wrong answer: <b>-{{ this.wrongAnswerFee }} PHO</b>
                      </p>
                    </v-card-text>
                  </v-card>
                  <br>
                  <p>
                    <v-btn class="info" @click="prepareQuestions">Prepare Questions</v-btn>
                  </p>
              </v-flex>
              <v-flex xs12 v-else-if="this.currentStep >= 0 && this.currentStep <= 4">
                <v-layout row wrap>
                  <v-flex xs12>
                    <span class="title">
                      {{ this.question }}
                    </span>
                  </v-flex>
                  <v-flex xs12>
                    <v-radio-group v-model="currentAnswer">
                      <v-radio value=1 :label="this.option1"></v-radio>
                      <v-radio value=2 :label="this.option2"></v-radio>
                      <v-radio value=3 :label="this.option3"></v-radio>
                      <v-radio value=4 :label="this.option4"></v-radio>
                    </v-radio-group>
                  </v-flex>
                  <v-flex xs12>
                    <span class="caption gray--text">
                      Question ID: {{ this.questionId }}
                    </span>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn class="indigo--text" flat @click="getHint()">Get Hint</v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn class="success" @click="confirmAnswer()" :disabled="this.currentAnswer == ''">
                      Confirm Answer
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 v-else-if="this.currentStep == 5">
                <v-layout row wrap>
                  <v-flex xs12>
                    <span class="title">
                      All questions for this turn have been answered.
                    </span>
                  </v-flex>
                  <v-flex xs12>
                    <span class="subheading">
                      Please click on the button below to process your answers and get the results.
                    </span>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn class="info" @click="processAnswers()">Process Answers</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 v-else-if="this.currentStep == 6">
                <v-layout row wrap>
                  <v-flex xs12>
                    <span class="title">
                      <b>Results</b>
                    </span>
                  </v-flex>
                  <v-flex xs12>
                    <v-layout row wrap>
                      <v-flex xs3>
                        <v-card color="blue darken-4">
                          <span class="white--text">
                            <b>Question #</b>
                          </span>
                        </v-card>
                      </v-flex>
                      <v-flex xs3>
                        <v-card color="blue darken-4">
                          <span class="white--text">
                            <b>Correct?</b>
                          </span>
                        </v-card>
                      </v-flex>
                      <v-flex xs3>
                        <v-card color="blue darken-4">
                          <span class="white--text">
                            <b>Hint used?</b>
                          </span>
                        </v-card>
                      </v-flex>
                      <v-flex xs3>
                        <v-card color="blue darken-4">
                          <span class="white--text">
                            <b>PHO Tokens</b>
                          </span>
                        </v-card>
                      </v-flex>
                      <!-- Question 1 -->
                      <v-flex xs3>
                        <b>1</b>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[0]">
                        <span class="blue--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userHints[0]">
                        <span class="red--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="blue--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[0] && !this.userHints[0]">
                        <span class="blue--text">
                          <b>2</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="this.userResults[0] && this.userHints[0]">
                        <span class="blue--text">
                          <b>1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="!this.userResults[0] && !this.userHints[0]">
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <!-- Question 2 -->
                      <v-flex xs3>
                        <b>2</b>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[1]">
                        <span class="blue--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userHints[1]">
                        <span class="red--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="blue--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[1] && !this.userHints[1]">
                        <span class="blue--text">
                          <b>2</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="this.userResults[1] && this.userHints[1]">
                        <span class="blue--text">
                          <b>1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="!this.userResults[1] && !this.userHints[1]">
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <!-- Question 3 -->
                      <v-flex xs3>
                        <b>3</b>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[2]">
                        <span class="blue--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userHints[2]">
                        <span class="red--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="blue--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[2] && !this.userHints[2]">
                        <span class="blue--text">
                          <b>2</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="this.userResults[2] && this.userHints[2]">
                        <span class="blue--text">
                          <b>1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="!this.userResults[2] && !this.userHints[2]">
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <!-- Question 4 -->
                      <v-flex xs3>
                        <b>4</b>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[3]">
                        <span class="blue--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userHints[3]">
                        <span class="red--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="blue--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[3] && !this.userHints[3]">
                        <span class="blue--text">
                          <b>2</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="this.userResults[3] && this.userHints[3]">
                        <span class="blue--text">
                          <b>1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="!this.userResults[3] && !this.userHints[3]">
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <!-- Question 5 -->
                      <v-flex xs3>
                        <b>5</b>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[4]">
                        <span class="blue--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userHints[4]">
                        <span class="red--text">
                          <b>Yes</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="blue--text">
                          <b>No</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-if="this.userResults[4] && !this.userHints[4]">
                        <span class="blue--text">
                          <b>2</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="this.userResults[4] && this.userHints[4]">
                        <span class="blue--text">
                          <b>1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else-if="!this.userResults[4] && !this.userHints[4]">
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <v-flex xs3 v-else>
                        <span class="red--text">
                          <b>-1</b>
                        </span>
                      </v-flex>
                      <v-flex xs12>
                        <v-card color="blue-grey darken-4" height="1px">
                        </v-card>
                      </v-flex>
                      <v-flex xs3>
                      </v-flex>
                      <v-flex xs3>
                      </v-flex>
                      <v-flex xs3>
                        <span class="title">
                          Total:
                        </span>
                      </v-flex>
                      <v-flex xs3>
                        <span class="title">
                          <b>{{ this.totalEarnedTokens }}</b>
                        </span>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn class="info" @click="restart()">Start another round</v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-container>
      </v-tab-item>
    </v-tabs>
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
              <v-btn color="error" @click="txReceiptDialog = false; txError = false">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="hintDialog"
      hide-overlay
      width="300"
    >
      <v-card color="blue-grey lighten-4">
        <v-container fluid grid-list-md>
          <v-layout row wrap align-center text-xs-center>
            <v-flex xs12>
              <span class="title font-weight-black">
                Hint
              </span>
            </v-flex>
            <v-flex xs12>
              <b>{{ this.hint }}</b>
            </v-flex>
            <v-flex xs12>
              <v-btn flat class="grey--text" @click="hintDialog = false">Close</v-btn>
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
          <v-btn class="blue--text darken-1" flat @click="confirmSend" v-show="canSend && !sending && rawTx != 'loading...'">{{ $t('common.confirm') }}</v-btn>
          <v-btn class="red--text darken-1" flat @click="confirmSendDialog = false; canSend = false" :v-show="!sending">{{ $t('common.cancel') }}</v-btn>
          <v-progress-circular indeterminate :size="20" v-show="sending" color="primary"></v-progress-circular>
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

const tokenContractAddress = config.getNetwork() == "mainnet" ? "4520d32ad7c6d863323a597d118cfdd6e28c3f29" : "63738a07daf0514f2d242947117a8d748f85340b";

const contractAddress = config.getNetwork() == "mainnet" ? "f5bd6aace695cfaa43a7575b5b139675ab368cde" : "723200bb39c42798e43183b0548ecd71afe61b4e"; 

const abiJson = JSON.parse(
  '[{"constant": true, "inputs": [{"name": "answeredQuestionsIds", "type": "bytes10[5]"}, {"name": "answeredQuestionsAnswers", "type": "uint8[5]"} ], "name": "getResults", "outputs": [{"name": "results", "type": "bool[5]"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "correctAnswerHintPrize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "prepareQuestions", "outputs": [{"name": "_preparedQuestionsId", "type": "bytes10[5]"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_questionId", "type": "bytes10"} ], "name": "getHint", "outputs": [{"name": "hint", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "answeredQuestionsIds", "type": "bytes10[5]"}, {"name": "answeredQuestionsAnswers", "type": "uint8[5]"}, {"name": "answeredQuestionsHints", "type": "bool[5]"} ], "name": "processAnswers", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "correctAnswerPrize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "_userAddress", "type": "address"}, {"name": "_questionIndex", "type": "uint256"} ], "name": "getUserQuestion", "outputs": [{"name": "questionId", "type": "bytes10"}, {"name": "question", "type": "string"}, {"name": "option1", "type": "string"}, {"name": "option2", "type": "string"}, {"name": "option3", "type": "string"}, {"name": "option4", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "wrongAnswerFee", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"} ]'
);

export default {
  data () {
    return {
      txReceiptDialog: false,
      confirmSendDialog: false,
      userTokenBalance: 0,
      loading: false,
      wallet: webWallet.getWallet(),
      correctAnswerPrize: 0,
      correctAnswerHintPrize: 0,
      wrongAnswerFee: 0,
      minimumTokenAmount: 0,
      currentStep: -1,
      questionId: '',
      question: '',
      currentAnswer: 0,
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      hint: '',
      userHints: [false,false,false,false,false],
      userAnswers: [0,0,0,0,0],
      userQuestionIds: ['0x','0x','0x','0x','0x'],
      hintDialog: false,
      userResults: [],
      totalEarnedTokens: 0,
      txError: false,
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      rawTx: 'loading...',
      canSend: false,
      sending: false
    }
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

          this.rawTx = 'loading...';
          this.confirmSendDialog = true;

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
        alert('You do not have enough PHO to cover wrong questions. You need at least ' + this.minimumTokenAmount + ' PHO.' );
      }
    },

    async processAnswers() {
      if(parseInt(this.userTokenBalance) >= parseInt(this.minimumTokenAmount)) {
        try {
          const encodedData = this.encodeContractSendFunction(
            abiJson, 
            'processAnswers', 
            [
              this.userQuestionIds,
              this.userAnswers,
              this.userHints
            ]
          );

          this.rawTx = 'loading...';
          this.confirmSendDialog = true;

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
        alert('You do not have enough PHO to cover wrong questions. You need at least ' + this.minimumTokenAmount + ' PHO.' );
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
                switch(this.currentStep) {
                  case -1 :
                    this.getUserQuestion(0);
                    break;
                  case 5 :
                    this.getResults();
                    break;
                } 
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
          
        const userHexAddress = '0x' + base58.decode(this.wallet.info['address']).toString('hex').substr(2, 40);

        // Correct answer prize
        var decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getUserQuestion', 
          [userHexAddress, questionIndex]
        );

        if(decodedResult[1].toString() != '') {

          this.questionId = decodedResult[0].toString();
          this.question = decodedResult[1].toString();
          this.option1 = decodedResult[2].toString();
          this.option2 = decodedResult[3].toString();
          this.option3 = decodedResult[4].toString();
          this.option4 = decodedResult[5].toString();

          this.userQuestionIds[this.currentStep] = this.questionId;
        } else {

          alert('Error when fetching question. Please start over.');
          this.currentStep = -1;
        }

      } catch (e) {
          this.loading = false;
          this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
          alert(e.message || e);
      }

      this.loading = false;
    },

    async getHint(){
      this.loading = true;

      try{

        // Correct answer prize
        var decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getHint', 
          [this.questionId]
        );

        this.userHints[this.currentStep] = true;
        this.hint = decodedResult[0].toString();
        this.hintDialog = true;

      } catch (e) {
          this.loading = false;
          this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
          alert(e.message || e);
      }

      this.loading = false;
    },

    async confirmAnswer(){
      this.loading = true;

      try{

        this.userAnswers[this.currentStep] = this.currentAnswer;
        this.currentAnswer = 0;
        this.currentStep++;
        
        if(this.currentStep <= 4) {
          // Get next question
          this.getUserQuestion(this.currentStep);
        }

      } catch (e) {
          this.loading = false;
          this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
          alert(e.message || e);
      }

      this.loading = false;
    },

    async getResults(){
      this.loading = true;

      try{

        // Correct answer prize
        var decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getResults', 
          [
            this.userQuestionIds,
            this.userAnswers
          ]
        );

        this.userResults = decodedResult[0];

        for(var i = 0; i <= 4; i++) {
          if(this.userResults[i]){
            if(this.userHints[i]){
              this.totalEarnedTokens += 1;
            } else {
              this.totalEarnedTokens += 2;
            }
          } else {
            this.totalEarnedTokens -= 1;
          }
        }

      } catch (e) {
          this.loading = false;
          this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
          alert(e.message || e);
      }

      this.loading = false;
    },

    restart(){
      this.currentStep = -1;
      this.questionId = '';
      this.question = '';
      this.currentAnswer = 0;
      this.option1 = '';
      this.option2 = '';
      this.option3 = '';
      this.option4 = '';
      this.hint = '';
      this.userHints = [false,false,false,false,false];
      this.userAnswers = [0,0,0,0,0];
      this.userQuestionIds = ['0x','0x','0x','0x','0x'];
      this.userResults = [];
      this.totalEarnedTokens = 0;
      this.rawTx = 'loading...';
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
