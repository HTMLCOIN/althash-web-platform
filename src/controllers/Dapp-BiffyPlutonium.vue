<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
        <v-card-title class="justify-center">
          <span class="headline"><img src="~assets/images/logo_BIFP_150.png"></span>
        </v-card-title>
      </v-flex>
    </v-container>
    <v-tabs
     centered
     icons-and-text
     color="transparent"
     slider-color="blue-grey"
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
        Buy
        <v-icon>add_shopping_cart</v-icon>
      </v-tab>
      <v-tab
       ripple      
      >
        Sell
        <v-icon>attach_money</v-icon>
      </v-tab>
      <v-tab
       ripple      
      >
        Play
        <v-icon>casino</v-icon>
      </v-tab>
      <v-tab-item>
      <template>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <br><br>
	           <v-card>
              <v-card-text>
		            <div align="center">
                  <div><img src="~assets/images/biffy_plutonium_splash.jpg" style="height: auto; width: 25%;"></div>
                  <br><br>
                  <span class="display-1">This is heavy, Doc!</span>
		              <br><br>
                  <span class="subheading">
                    Going straight to the point: Do not expect any commitment from us.
                    <br><br>
            		    Yeah, that's right. We're here just for the fun!
            		    <br><br>
            		    Please feel home and browse around. You may have great surprises in our lotteries!
                    <br><br><br><br>
            		    <small>
                      <b>Disclaimer</b>
                      <br>
                      HTMLCoin Foundation has reviewed and approved this application's code, having Althash Web Platform as a proud host, however the Foundation is not responsible for any funds transacted within this application scope.
                      <br>
                      By using this application you agree on this terms.
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
        <v-tabs
         centered
         color="transparent"
         slider-color="teal"
         v-model="buyactive"
        >
          <v-tab
           ripple
          >
            From bank
          </v-tab>
          <v-tab
           ripple      
          >
            From users
          </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-flex xs6 offset-xs3>
                <v-container fluid grid-list-md align-center text-xs-center>
                  <v-layout row wrap>
                    <v-flex xs12>
                      Current price per token: <b>1 HTML</b>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                       label="How much to spend"
                       v-model.trim="buyFromBankAmount"
                       outline
                       suffix="HTML"
                       background-color="blue-grey darken-3"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-spacer></v-spacer>
                      <v-btn class="success" @click="buyFromBank">Buy!</v-btn>
                      <v-spacer></v-spacer>              
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-flex xs6 offset-xs3>
                <v-container fluid grid-list-md align-center text-xs-center>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                       label="Who to buy from"
                       v-model.trim="buyFromUserAddress"
                       outline
                       background-color="blue-grey darken-3"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      Current price per token: <b>2 HTML</b>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                       label="How much to spend"
                       v-model.trim="buyFromUserAmount"
                       outline
                       suffix="HTML"
                       background-color="blue-grey darken-3"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-spacer></v-spacer>
                      <v-btn class="success" @click="buyFromUser">Buy!</v-btn>
                      <v-spacer></v-spacer>              
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-flex xs6 offset-xs3>
            <v-container fluid grid-list-md align-center text-xs-center>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                   label="Price per token"
                   v-model.trim="sellPricePerToken"
                   outline
                   suffix="HTML"
                   background-color="blue-grey darken-3"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                   label="Token quantity"
                   v-model.trim="sellTokenQty"
                   outline
                   background-color="blue-grey darken-3"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-spacer></v-spacer>
                  <v-btn class="success" @click="sell">Sell!</v-btn>
                  <v-spacer></v-spacer>              
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-tabs
         centered
         color="transparent"
         slider-color="teal"
         v-model="playactive"
        >
          <v-tab
           ripple
          >
            Lottery
          </v-tab>
          <v-tab
           ripple      
          >
            Up For Grabs
          </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-flex xs6 offset-xs3>
                <v-container fluid grid-list-md align-center text-xs-center>
                  <v-layout row wrap>
                    <v-flex xs6>
                      <v-text-field
                       label="Your bet"
                       v-model.trim="lotteryBet"
                       outline
                       suffix="BIFP"
                       background-color="teal darken-4"
                       hint="Below 100 BIFP: Token Lottery; Above 100 BIFP: HTMLCoin Lottery."
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                       label="Your lucky number"
                       v-model.trim="lotteryLuckyNumber"
                       outline
                       background-color="teal darken-4"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-spacer></v-spacer>
                      <v-btn class="success" @click="playLottery">I'm feeling lucky!</v-btn>
                      <v-spacer></v-spacer>              
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-flex xs6 offset-xs3>
                <v-container fluid grid-list-md align-center text-xs-center>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field
                       label="How much to play"
                       v-model.trim="upForGrabsBet"
                       outline
                       background-color="teal darken-4"
                       suffix="BIFP"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-spacer></v-spacer>
                      <v-btn class="success" @click="buyFromUser">The cookie is mine!</v-btn>
                      <v-spacer></v-spacer>              
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-card>
          </v-tab-item>
        </v-tabs>
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
              <v-btn color="error" @click="txError = false; txReceiptDialog = false">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-center text-xs-center v-if="this.txConfirmed">
            <v-flex xs12 v-if="this.lotteryWin">
              <span class="title green--text">
                <h1>WIN!</h1>
              </span>
              <p>
                You have just won {{ this.lotteryRewardAmount }} {{ this.lotteryType }}!
              </p>
              <p>
                Are you sure you haven't seen any almanac around?
              </p>
            </v-flex>
            <v-flex xs12 v-else>  
              <span class="title orange--text">
                <h1>Not this time, McFly...</h1>
              </span>
              <p>
                Your "lucky" number was {{ this.lotteryLuckyNumber }}, but the drawn number was {{ this.drawnNumber }}.
              </p>
              <p>
                Better luck next time!
              </p>
            </v-flex>
            <v-flex xs12>
              <v-btn color="error" @click="txConfirmed = false; txReceiptDialog = false">
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
import config from 'libs/config'
import axios from 'axios'
import base58 from 'bs58'
import sha256 from 'js-sha256'

const contractAddress = config.getNetwork() == "mainnet" ? "0" : "0a80f2e06289aea9b8140babd94ccf2fb01c55bc";

  const abiJson = JSON.parse(
    '[{"constant": false, "inputs": [{"name": "new_j", "type": "address"} ], "name": "change_j", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getCuts", "outputs": [{"name": "BiffCutSetting", "type": "uint256"}, {"name": "JCutSetting", "type": "uint256"}, {"name": "PCutSetting", "type": "uint256"}, {"name": "NCutSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "approve", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_n", "type": "address"} ], "name": "change_n", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryChances", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_buyTokensFrom", "outputs": [{"name": "numOfTokensPurchased", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transferFrom", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_whatsForSale", "outputs": [{"name": "numTokensBeingSold", "type": "uint256"}, {"name": "priceOfEachToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "lotteryID", "type": "string"} ], "name": "checkLotteryResults", "outputs": [{"name": "_player", "type": "address"}, {"name": "_lotteryType", "type": "uint8"}, {"name": "_playedAmount", "type": "uint256"}, {"name": "_luckyNumber", "type": "uint256"}, {"name": "_drawnNumber", "type": "uint256"}, {"name": "_win", "type": "bool"}, {"name": "_rewardAmount", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "who", "type": "uint256"}, {"name": "fakeAmount", "type": "uint256"} ], "name": "BIFP_testFeeAndCuts", "outputs": [{"name": "feeCollected", "type": "uint256"}, {"name": "biffGot", "type": "uint256"}, {"name": "jGot", "type": "uint256"}, {"name": "pGot", "type": "uint256"}, {"name": "nGot", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "player", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_upForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "standard", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "b", "type": "uint256"}, {"name": "j", "type": "uint256"}, {"name": "p", "type": "uint256"}, {"name": "n", "type": "uint256"} ], "name": "BIFP_setFeeCuts", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerIsOwnerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchTokenLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "tokensForSale", "outputs": [{"name": "numTokensForSale", "type": "uint256"}, {"name": "pricePerToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "confirmOwnershipTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_p", "type": "address"} ], "name": "change_p", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "potentialOwner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryChances", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "prizeName", "type": "string"} ], "name": "getPrizeBalance", "outputs": [{"name": "prizeBalance", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "BIFP_addToTokenPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "prizeName", "type": "string"}, {"name": "newAmount", "type": "uint256"} ], "name": "setPrizeBalance", "outputs": [{"name": "prizePrevBalance", "type": "uint256"}, {"name": "prizeNewBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_addToHtmlPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getFees", "outputs": [{"name": "feeOwnerSetting", "type": "uint256"}, {"name": "feeSellerSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "amount", "type": "uint256"} ], "name": "BIFP_loadUpForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchHtmlcoinLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "luckyNumber", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_playLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"} ], "name": "allowance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "quantity", "type": "uint256"}, {"name": "htmlPrice", "type": "uint256"} ], "name": "BIFP_setSell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "newOwner", "type": "address"} ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"} ], "name": "Transfer", "type": "event"} ]'
  );

export default {
  data () {
    return {
      wallet: webWallet.getWallet(),
      active: 0,
      buyactive: 0,
      playactive: 0,
      lotteryBet: '',
      lotteryLuckyNumber: '',
      lotteryID: '',
      lotteryWin: false,
      drawnNumber: '',
      lotteryRewardAmount: '',
      lotteryType: '',
      txReceiptDialog: false,
      awaitingTx: false,
      txError: false,
      txConfirmed: false,
      parsedAbi: null,
      method: null,
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
  methods: {
    async playLottery() {
      try {
        this.lotteryID = sha256(this.wallet.info.address + Date.now());

        const encodedData = this.encodeContractSendFunction(
          abiJson, 
          'BIFP_playLottery', 
          [
            this.lotteryBet,
            this.lotteryLuckyNumber,
            lotteryID
          ]
        );

        this.confirmSendDialog = true

        try {
          this.rawTx = await webWallet.getWallet().generateSendToContractTx(contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee)
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
                var checkResults = true;                
              }
            }

          })
          .catch(console.error)
        }, 30*1000)

        if(checkResults){
          this.lotteryWin = await this.checkLotteryResults();
          this.txConfirmed = true;
        }

      } catch (e) {
        alert(e.message || e)
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e)
        this.confirmSendDialog = false
      }
    },

    async checkLotteryResults(){
      try{
        var decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'checkLotteryResults', 
          [this.lotteryID]
        );                     

        if(decodedResult[5].toString() == 'true'){
          this.drawnNumber = decodedResult[4].toString();
          this.lotteryRewardAmount = decodedResult[6].toString();
          if(recodedResult[1].toString() == '1')
            this.lotteryType = 'BIFP';
          else
            this.lotteryType = 'HTML';

          return true;
        } else {
          return false;
        }

      } catch (e) {
          this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
          alert(e.message || e);
          this.execResultDialog = false;
      } 
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
  }
}
</script>
