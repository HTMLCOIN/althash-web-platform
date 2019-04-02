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
        Play
        <v-icon>casino</v-icon>
      </v-tab>
      <v-tab
       ripple
      >
        Sell
        <v-icon>attach_money</v-icon>
      </v-tab>
      <!--v-tab
       ripple      
      >
        Buy
        <v-icon>add_shopping_cart</v-icon>
      </v-tab>
      <v-tab
       ripple
      >
        Adm
        <v-icon>info</v-icon>
      </v-tab-->
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
        <v-container fluid grid-list-lg align-center text-xs-center>
          <v-flex xs8 offset-xs2>
            <v-layout row wrap>
              <v-flex xs6 text-xs-right>
                <v-btn
                  fab
                  color="success"
                  @click="playLottery = true; playUpForGrabs = false"
                  :disabled="playLottery"
                >
                  <v-icon dark>monetization_on</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs6 text-xs-left>
                <v-btn
                  fab
                  color="warning"
                  @click="playLottery = false; playUpForGrabs = true"
                  :disabled="playUpForGrabs"
                >
                  <v-icon dark>directions_run</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs12 v-if="playLottery">
                <v-layout row wrap>
                  <v-flex xs12>
                    <div class="py-3 display-2 font-weight-light">LOTTERY</div>
                  </v-flex>
                  <v-flex xs6>
                    <v-card color="blue-grey" class="py-3 white--text" height="100%">
                      <v-layout row wrap>
                        <v-flex xs12>
                          <img src="~/assets/images/BIFP_menu_btn.png" style="width: 75%; max-width: 85px; height: auto; max-height: 85px;">
                        </v-flex>
                        <v-flex xs12>
                          <span class="title font-weight-black">BIFP Lottery</span>
                        </v-flex>
                        <v-flex xs12>
                          <span v-if="this.tokenLotteryStatus == 'On'">
                            Status: <span class="subheading font-weight-bold green--text">On</span>
                          </span>
                          <span v-else>
                            Status: <span class="subheading font-weight-bold red--text">Off</span>
                          </span>
                        </v-flex>
                        <v-flex xs12>
                          Max Prize: <span class="subheading font-weight-bold">{{ (Math.round(this.tokenLotteryPrize * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}) }} BIFP*</span>
                        </v-flex>
                        <v-flex xs12>
                          Bets between <b>1 and {{ this.tokenLotteryFeeThreshold }} BIFP</b>
                        </v-flex>
                        <v-flex xs12>
                          Lucky number between <b>0 and {{ this.tokenLotteryPot }}</b>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                  <v-flex xs6>
                    <v-card color="blue darken-1" class="py-3 white--text" height="100%">
                      <v-layout row wrap>
                        <v-flex xs12 align-center>
                          <img src="~/assets/images/logo_htmlcoin.png" style="width: 75%; max-width: 64px; height: auto; max-height: 85px;">
                        </v-flex>
                        <v-flex xs12>
                          <span class="title font-weight-black">HTMLCoin Lottery</span>
                        </v-flex>
                        <v-flex xs12 v-if="this.htmlcoinLotteryStatus == 'On'">
                          Status: <span class="subheading font-weight-bold green--text">On</span>
                        </v-flex>
                        <v-flex xs12 v-else>
                          Status: <span class="subheading font-weight-bold red--text">Off</span>
                        </v-flex>
                        <v-flex xs12>
                          Max Prize: <span class="subheading font-weight-bold">{{ (Math.round(this.htmlcoinLotteryPrize * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}) }} HTML*</span>
                        </v-flex>
                        <v-flex xs12>
                          Bets between <b>{{ this.tokenLotteryFeeThreshold + 1 }} and {{ this.htmlcoinLotteryFeeThreshold }} BIFP</b>
                        </v-flex>
                        <v-flex xs12>
                          Lucky number between <b>0 and {{ this.htmlcoinLotteryPot }}</b>
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 text-xs-center>
                    <span class="title">The more BIFP you bet, the higher is your prize!</span>
                  </v-flex>
                  <v-flex xs8 offset-xs2>
                    <v-container fluid grid-list-md align-center text-xs-center>
                      <v-layout row wrap>
                        <v-flex xs6>
                          <v-text-field
                           label="Your bet"
                           v-model.trim="lotteryBet"
                           outline
                           suffix="BIFP"
                           background-color="teal darken-4"
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
                          <v-btn class="success" @click="runLottery" :disabled="lotteryNotValid">I'm feeling lucky!</v-btn>
                          <v-spacer></v-spacer>              
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                  <v-flex xs12>
                    <v-spacer></v-spacer>
                    <span class="caption">* Prize pots are subject to constant fluctuation as several players run for the same prize, simultaneously and asynchronously. Such changes may not be reflected on this page.</span>
                    <v-spacer></v-spacer>              
                  </v-flex>
                </v-layout>
              </v-flex>
              <v-flex xs12 v-if="playUpForGrabs">
                <v-card flat>
                  <v-flex xs12>
                    <span class="display-2 font-weight-light">UP FOR GRABS</span>
                  </v-flex>
                  <v-flex xs8 offset-xs2>
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
                          <v-btn class="success" @click="runUpForGrabs" :disabled="ufgNotValid">The cookie is mine!</v-btn>
                          <v-spacer></v-spacer>              
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-container>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-flex xs6 offset-xs3>
            <v-container fluid grid-list-md align-center text-xs-center>
              <v-layout row wrap>
                <v-flex xs6>
                  <v-text-field
                   label="Token quantity"
                   v-model.trim="sellTokenQty"
                   outline
                   suffix="BIFP"
                   background-color="blue-grey darken-3"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                   label="Price per token"
                   v-model.trim="sellPricePerToken"
                   outline
                   suffix="HTML"
                   background-color="blue-grey darken-3"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-spacer></v-spacer>
                  <v-btn class="success" @click="setSell" :disabled="sellNotValid">Put for Sale!</v-btn>
                  <v-spacer></v-spacer>              
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-card>
      </v-tab-item>
      <!--v-tab-item>
        <v-container fluid grid-list-lg align-center text-xs-center>
          <v-flex xs8 offset-xs2>
            <v-layout row wrap>
              <v-flex xs6 text-xs-right>
                <v-btn
                  fab
                  color="info"
                  @click="buyBank = true; buyUsers = false"
                  :disabled="buyBank"
                >
                  <v-icon dark>account_balance</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs6 text-xs-left>
                <v-btn
                  fab
                  color="error"
                  @click="buyBank = false; buyUsers = true"
                  :disabled="buyUsers"
                >
                  <v-icon dark>assessment</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs12 v-if="buyBank">
                <v-card flat>
                  <v-flex xs12>
                    <span class="title font-weight-bold">FROM BANK</span>
                  </v-flex>
                  <v-flex xs8 offset-xs2>
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
              </v-flex>
              <v-flex xs12 v-if="buyUsers">
                <v-card flat>
                   <v-flex xs12>
                    <span class="title font-weight-bold">FROM MARKET</span>
                  </v-flex>
                  <v-flex xs8 offset-xs2>
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
              </v-flex>
            </v-layout>
          </v-flex>
        </v-container>
      </v-tab-item-->
      <!--v-tab-item>
        <v-container fluid grid-list-lg align-center text-xs-center>
          <v-flex xs8 offset-xs2>
            <v-layout row wrap>
              <v-flex xs8 offset-xs2>
                <v-container fluid grid-list-md align-center text-xs-center>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-btn class="success" @click="confirmOwnershipTransfer">confirmOwnershipTransfer</v-btn>    
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-container>
      </v-tab-item-->
    </v-tabs>
    <v-dialog v-model="confirmSendLotteryDialog" persistent max-width="50%">
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
          <v-btn class="blue--text darken-1" flat @click="confirmSendLottery" v-show="canSend && !sending">{{ $t('common.confirm') }}</v-btn>
          <v-btn class="red--text darken-1" flat @click.native="confirmSendLotteryDialog = false" :v-show="!sending">{{ $t('common.cancel') }}</v-btn>
          <v-progress-circular indeterminate :size="50" v-show="sending" class="primary--text"></v-progress-circular>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="txLotteryReceiptDialog" persistent width="600px">
      <v-card color="blue-grey lighten-5">
        <v-container fluid grid-list-md>
          <v-layout row wrap align-center text-xs-center v-if="this.awaitingLotteryTx">
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
              <v-btn color="error" @click="closeDialog">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-center text-xs-center v-if="this.txLotteryConfirmed">
            <v-flex xs12 v-if="this.lotteryWin">
              <span v-if="this.lotteryType != 'UFG'">  
                <img src="~/assets/images/biffy_win.png">
                <br><br>
                <p class="display-1 font-weight-bold">
                  You have just won {{ this.lotteryRewardAmount }} {{ this.lotteryType }}!
                </p>
                <p>
                  Are you sure you haven't seen any almanac around?
                </p>
              </span>
              <span v-else>
                <img src="~/assets/images/biffy_ufg_win.jpg">
                <br><br>
                <p class="title">
                  Well, well... We have here the fastest draw in the west.
                </p>
                <p class="display-1 font-weight-bold">
                  You have just won {{ this.lotteryRewardAmount }} BIFP!
                </p>
                <p>
                  Now get outta here, or I'll hunt you down and shoot you like a duck!
                </p>
              </span>
            </v-flex>
            <v-flex xs12 v-else>
              <span v-if="this.lotteryType != 'UFG'">
                <img src="~/assets/images/biffy_manure.jpg">
                <br><br>  
                <p class="display-1 font-weight-bold orange--text">
                  Not this time, McFly...
                </p>
                <p>
                  Your "lucky" number was <b>{{ this.lotteryLuckyNumber }}</b>, but the drawn number was <b>{{ this.drawnNumber }}</b>.
                </p>
                <p>
                  So why don't you make like a tree... and get outta here?!
                </p>
              </span>
              <span v-else>
                <img src="~/assets/images/biffy_ufg_manure.jpg">
                <br><br>  
                <p class="display-1 font-weight-bold orange--text">
                  Not this time, Mr. Eastwood...
                </p>
                <p>
                  Some other punk has been quicker than you.
                  <br>
                  Next time try seven o'clock. I do my killin' before breakfast!
                </p>
              </span>
            </v-flex>
            <v-flex xs12>
              <v-btn flat class="grey--text" @click="closeDialog">
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
    <!--v-dialog v-model="confirmSendBuyDialog" persistent max-width="50%">
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
          <v-btn class="blue--text darken-1" flat @click="confirmSendBuy" v-show="canSend && !sending">{{ $t('common.confirm') }}</v-btn>
          <v-btn class="red--text darken-1" flat @click.native="confirmSendBuyDialog = false" :v-show="!sending">{{ $t('common.cancel') }}</v-btn>
          <v-progress-circular indeterminate :size="50" v-show="sending" class="primary--text"></v-progress-circular>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="txBuyReceiptDialog" persistent width="600px">
      <v-card color="blue-grey lighten-5">
        <v-container fluid grid-list-md>
          <v-layout row wrap align-center text-xs-center v-if="this.awaitingBuyTx">
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
              <v-btn color="error" @click="txError = false; txBuyReceiptDialog = false">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-center text-xs-center v-if="this.txBuyConfirmed">
            <v-flex xs12>
              <p class="title font-weight-bold">
                Purchase successful!
              </p>
            </v-flex>
            <v-flex xs12>
              <v-btn flat class="grey--text" @click="txBuyConfirmed = false; txBuyReceiptDialog = false">
                Close
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog-->
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

const contractAddress = config.getNetwork() == "mainnet" ? "6de5afa19ca3e23987abccbe1a8498740c0fedd0" : "9aedd68bb2635995097627331b49c473136343cb"; 

const abiJson = JSON.parse(
  '[{"constant": false, "inputs": [{"name": "new_j", "type": "address"} ], "name": "change_j", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getCuts", "outputs": [{"name": "BiffCutSetting", "type": "uint256"}, {"name": "JCutSetting", "type": "uint256"}, {"name": "PCutSetting", "type": "uint256"}, {"name": "NCutSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "approve", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"} ], "name": "feeTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_n", "type": "address"} ], "name": "change_n", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_buyTokensFrom", "outputs": [{"name": "numOfTokensPurchased", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transferFrom", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_whatsForSale", "outputs": [{"name": "numTokensBeingSold", "type": "uint256"}, {"name": "priceOfEachToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "get_j", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "lotteryID", "type": "string"} ], "name": "checkLotteryResults", "outputs": [{"name": "_player", "type": "address"}, {"name": "_lotteryType", "type": "uint8"}, {"name": "_playedAmount", "type": "uint256"}, {"name": "_luckyNumber", "type": "uint256"}, {"name": "_drawnNumber", "type": "uint256"}, {"name": "_win", "type": "bool"}, {"name": "_rewardAmount", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryPot", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "who", "type": "uint256"}, {"name": "fakeAmount", "type": "uint256"} ], "name": "BIFP_testFeeAndCuts", "outputs": [{"name": "feeCollected", "type": "uint256"}, {"name": "biffGot", "type": "uint256"}, {"name": "jGot", "type": "uint256"}, {"name": "pGot", "type": "uint256"}, {"name": "nGot", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "player", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "feeBalances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_upForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "standard", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "b", "type": "uint256"}, {"name": "j", "type": "uint256"}, {"name": "p", "type": "uint256"}, {"name": "n", "type": "uint256"} ], "name": "BIFP_setFeeCuts", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "feeWithdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerIsOwnerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchTokenLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "tokensForSale", "outputs": [{"name": "numTokensForSale", "type": "uint256"}, {"name": "pricePerToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "confirmOwnershipTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_p", "type": "address"} ], "name": "change_p", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "potentialOwner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "prizeName", "type": "string"} ], "name": "getPrizeBalance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "BIFP_addToTokenPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "prizeName", "type": "string"}, {"name": "newAmount", "type": "uint256"} ], "name": "setPrizeBalance", "outputs": [{"name": "prizePrevBalance", "type": "uint256"}, {"name": "prizeNewBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryPot", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_addToHtmlPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getFees", "outputs": [{"name": "feeOwnerSetting", "type": "uint256"}, {"name": "feeSellerSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "amount", "type": "uint256"} ], "name": "BIFP_loadUpForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchHtmlcoinLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "get_n", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "luckyNumber", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_playLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"} ], "name": "allowance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "quantity", "type": "uint256"}, {"name": "htmlPrice", "type": "uint256"} ], "name": "BIFP_setSell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "get_p", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "newOwner", "type": "address"} ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"} ], "name": "Transfer", "type": "event"} ]');
export default {
  data () {
    return {
      userTokenBalance: '0',
      loading: false,
      wallet: webWallet.getWallet(),
      active: 0,
      buyBank: true,
      buyUsers: false,
      playLottery: true,
      playUpForGrabs: false,
      checkLotteryResults: false,
      checkBuyResults: false,
      lotteryBet: '',
      lotteryLuckyNumber: '',
      lotteryID: '',
      lotteryWin: false,
      drawnNumber: '',
      lotteryRewardAmount: '',
      lotteryType: '',
      tokenLotteryStatus: '',
      htmlcoinLotteryStatus: '',
      tokenLotteryPrize: '',
      htmlcoinLotteryPrize: '',
      tokenLotteryFeeThreshold: 0,
      htmlcoinLotteryFeeThreshold: 0,
      tokenLotteryPot: 0,
      htmlcoinLotteryPot: 0,
      upForGrabsBet: '',
      buyFromBankAmount: '',
      txLotteryReceiptDialog: false,
      txBuyReceiptDialog: false,
      awaitingLotteryTx: false,
      awaitingBuyTx: false,
      txError: false,
      txLotteryConfirmed: false,
      txBuyConfirmed: false,
      sellPricePerToken: '',
      sellTokenQty: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendLotteryDialog: false,
      confirmSendBuyDialog: false,
      confirmSendDialog: false,
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
  watch: {
    checkLotteryResults: async function(val) {
      if(val){
        try{
          var decodedResult = await this.callContractFunction(
            contractAddress, 
            abiJson, 
            'checkLotteryResults', 
            [this.lotteryID]
          );                     

          this.drawnNumber = decodedResult[4].toString();

          if(decodedResult[5].toString() == 'true'){
            this.lotteryRewardAmount = parseInt(decodedResult[6]) / 100000000;
            switch(decodedResult[1].toString()){
              case '1':
                this.lotteryType = 'BIFP';
                break;
              case '2':
                this.lotteryType = 'HTML';
                break;
              case '3':
                this.lotteryType = 'UFG';
                break;
            }

            this.lotteryWin = true;
          } else {
            this.lotteryWin = false;
          }

          this.checkLotteryResults = false;
          this.txLotteryConfirmed = true;

        } catch (e) {
            this.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
            alert(e.message || e);
        }
      }
    }
  },
  methods: {
    closeDialog() {
      this.txLotteryConfirmed = false; 
      this.txLotteryReceiptDialog = false;
      this.txError = false;
      this.getData();
    },

    async runLottery() {
      if(parseInt(this.userTokenBalance) >= parseInt(this.lotteryBet)) {
        if(parseInt(this.lotteryLuckyNumber) >= 0 && parseInt(this.lotteryBet) > 0) {
          if(
              (
                parseInt(this.lotteryBet) <= this.tokenLotteryFeeThreshold
                && 
                parseInt(this.lotteryLuckyNumber) <= this.tokenLotteryPot
              ) 
              ||
              (
                parseInt(this.lotteryBet) > this.tokenLotteryFeeThreshold
                &&
                parseInt(this.lotteryBet) <= this.htmlcoinLotteryFeeThreshold
                && 
                parseInt(this.lotteryLuckyNumber) <= this.htmlcoinLotteryPot
              )
            )
          {
            try {

              this.lotteryID = sha256(this.wallet.info.address + Date.now());

              const playedAmount = this.lotteryBet * 100000000;

              const encodedData = this.encodeContractSendFunction(
                abiJson, 
                'BIFP_playLottery', 
                [
                  playedAmount,
                  this.lotteryLuckyNumber,
                  this.lotteryID
                ]
              );

              this.confirmSendLotteryDialog = true;

              try {
                this.rawTx = await webWallet.getWallet().generateSendToContractTx(contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee);
              } catch (e) {
                this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
                alert(e.message || e);
                this.confirmSendLotteryDialog = false;
                return false;
              }
                this.canSend = true;
            } catch (e) {
              this.$root.error('Params error');
              this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
              this.confirmSendLotteryDialog = false;
              return false;
            }
          } else {
            const htmlcoinLowerFeeThreshold = this.tokenLotteryFeeThreshold + 1;

            alert('Wrong bet or lucky number!\n\nBIFP Lottery:\n  * Bets between 1 and ' + this.tokenLotteryFeeThreshold + ' BIFP\n  * Lucky numbers between 0 and ' + this.tokenLotteryPot + '\n\nHTMLCoin Lottery:\n  * Bets between ' +  htmlcoinLowerFeeThreshold + ' and ' + this.htmlcoinLotteryFeeThreshold + ' BIFP\n  * Lucky numbers between 0 and ' + this.htmlcoinLotteryPot);
          }
        } else {
          alert('Your bet must be higher than 0 and your lucky number must equal or higher than 0!');
        }
      } else {
        alert('You do not have enough BIFP to play! Go get some!');
      }
    },

    async runUpForGrabs() {
      if(parseInt(this.userTokenBalance) >= parseInt(this.upForGrabsBet)) {
        if(parseInt(this.upForGrabsBet) >= 0) {
      
          try {

            this.lotteryID = sha256(this.wallet.info.address + Date.now());

            const playedAmount = this.upForGrabsBet * 100000000;

            const encodedData = this.encodeContractSendFunction(
              abiJson, 
              'BIFP_upForGrabs', 
              [
                playedAmount,
                this.lotteryID
              ]
            );

            this.confirmSendLotteryDialog = true

            try {
              this.rawTx = await webWallet.getWallet().generateSendToContractTx(
                contractAddress, 
                encodedData, 
                this.gasLimit, 
                this.gasPrice, 
                this.fee
              );
            } catch (e) {
              this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
              alert(e.message || e);
              this.confirmSendLotteryDialog = false;
              return false;
            }
              this.canSend = true;
          } catch (e) {
            this.$root.error('Params error');
            this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
            this.confirmSendLotteryDialog = false;
            return false;
          }
       
        } else {
          alert('The amount played must be higher than 0 BIFP!');
        }
      } else {
        alert('You do not have enough BIFP to play! Go get some!');
      }
    },

    async confirmSendLottery() {
      
      this.sending = true;
      try {
        const txId = await webWallet.getWallet().sendRawTx(this.rawTx);
        this.confirmSendLotteryDialog = false;
        this.sending = false;
        const txViewUrl = server.currentNode().getTxExplorerUrl(txId);
        this.$root.success(`Successful sent! You can follow the transaction on <a href="${txViewUrl}" target="_blank">${txViewUrl}</a>`, true, 0);
        this.$emit('send');

        this.txLotteryReceiptDialog = true;
        this.awaitingLotteryTx = true;

        var apiURL = config.getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';

        const interval = setInterval(() => {

          axios.get(apiURL + txId)
          .then(result=>{
            console.log('Checking Tx...')

            if(result.data.confirmations > 0) {
              clearInterval(interval);
              this.awaitingLotteryTx = false;

              if(result.data.receipt[0].excepted != 'None') {
                this.txError = true;
              } else {
                this.checkLotteryResults = true;            
              }
            }

          })
          .catch(console.error)
        }, 15*1000)

      } catch (e) {
        alert(e.message || e);
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e);
        this.confirmSendLotteryDialog = false;
      }
    },

    async setSell() {
      if(parseInt(this.userTokenBalance) >= parseInt(this.sellTokenQty)) {
        if(parseInt(this.sellTokenQty) >= 0) {
      
          try {
            // Bringing the numbers to the precision used by the Smart Contract
            const sellQtyPrecision = parseInt(this.sellTokenQty) * 100000000;
            const sellPricePrecision = parseInt(this.sellPricePerToken) * 100000000;

            const encodedData = this.encodeContractSendFunction(
              abiJson, 
              'BIFP_setSell', 
              [
                sellQtyPrecision,
                sellPricePrecision
              ]
            );

            this.confirmSendDialog = true;

            try {
              this.rawTx = await webWallet.getWallet().generateSendToContractTx(
                contractAddress, 
                encodedData, 
                this.gasLimit, 
                this.gasPrice, 
                this.fee
              );
            } catch (e) {
              this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
              alert(e.message || e);
              this.confirmSendDialog = false;
              return false;
            }
              this.canSend = true;
          } catch (e) {
            this.$root.error('Params error');
            this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
            this.confirmSendDialog = false;
            return false;
          }
       
        } else {
          alert('The quantity must be higher than 0 BIFP!');
        }
      } else {
        alert('You do not have enough BIFP to sell! Go get some!');
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

      } catch (e) {
        alert(e.message || e)
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e)
        this.confirmSendDialog = false
      }
    },

    async getData(){
      this.loading = true;

      try{
        var decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'tokenLotteryOn', 
          []
        );

        decodedResult[0].toString() == 'true' ? this.tokenLotteryStatus = 'On' : this.tokenLotteryStatus = 'Off';

        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'htmlcoinLotteryOn', 
          []
        );

        decodedResult[0].toString() == 'true' ? this.htmlcoinLotteryStatus = 'On' : this.htmlcoinLotteryStatus = 'Off';

        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getPrizeBalance', 
          ['tokenLottery']
        );

        this.tokenLotteryPrize = parseInt(decodedResult[0]) / 100000000;

        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getPrizeBalance', 
          ['htmlcoinLottery']
        );

        this.htmlcoinLotteryPrize = parseInt(decodedResult[0]) / 100000000;

        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getTokenLotteryFeeThreshold', 
          []
        );

        this.tokenLotteryFeeThreshold = parseInt(decodedResult[0]) / 100000000;

        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getHtmlcoinLotteryFeeThreshold', 
          []
        );

        this.htmlcoinLotteryFeeThreshold = parseInt(decodedResult[0]) / 100000000;

        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getTokenLotteryPot', 
          []
        );

        this.tokenLotteryPot = parseInt(decodedResult[0]);

        decodedResult = await this.callContractFunction(
          contractAddress, 
          abiJson, 
          'getHtmlcoinLotteryPot', 
          []
        );

        this.htmlcoinLotteryPot = parseInt(decodedResult[0]);

        for(var i = 0; i < this.wallet.info.hrc20.length; i++) {
          if(this.wallet.info.hrc20[i].contract.contract_address == contractAddress) {
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

    /*
    async buyFromBank() {

      if(parseInt(this.buyFromBankAmount) >= 0) {
      
        try {

          const buyAmount = this.buyFromBankAmount * 100000000;

          const encodedData = this.encodeContractSendFunction(
            abiJson, 
            'BIFP_buyTokens', 
            []
          );

          this.confirmSendBuyDialog = true;

          try {
            this.rawTx = await webWallet.getWallet().generateSendToContractTx(contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee);
          } catch (e) {
            this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
            alert(e.message || e);
            this.confirmSendBuyDialog = false;
            return false;
          }
            this.canSend = true;
        } catch (e) {
          this.$root.error('Params error');
          this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
          this.confirmSendBuyDialog = false;
          return false;
        }
       
      } else {
        alert('The buying amount must be higher than 0 HTML!');
      }
    },

    async confirmSendBuy() {
      
      this.sending = true;
      try {
        const txId = await webWallet.getWallet().sendRawTx(this.rawTx);
        this.confirmSendBuyDialog = false;
        this.sending = false;
        const txViewUrl = server.currentNode().getTxExplorerUrl(txId);
        this.$root.success(`Successful sent! You can follow the transaction on <a href="${txViewUrl}" target="_blank">${txViewUrl}</a>`, true, 0);

        this.txBuyReceiptDialog = true;
        this.awaitingBuyTx = true;

        var apiURL = config.getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';

        const interval = setInterval(() => {

          axios.get(apiURL + txId)
          .then(result=>{
            console.log('Checking Tx...')

            if(result.data.confirmations > 0) {
              clearInterval(interval);
              this.awaitingBuyTx = false;

              if(result.data.receipt[0].excepted != 'None') {
                this.txError = true;
              } else {
                this.txBuyConfirmed = true;
              }
            }

          })
          .catch(console.error)
        }, 15*1000)

      } catch (e) {
        alert(e.message || e);
        this.$root.log.error('send_to_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e);
        this.confirmSendBuyDialog = false;
      }
    },

    async confirmOwnershipTransfer() {
      
      try {

        const encodedData = this.encodeContractSendFunction(
          abiJson, 
          'confirmOwnershipTransfer',
          []
        );

        this.confirmSendDialog = true;

        try {
          this.rawTx = await webWallet.getWallet().generateSendToContractTx(contractAddress, encodedData, this.gasLimit, this.gasPrice, this.fee);
        } catch (e) {
          this.$root.log.error('send_to_generate_tx_error', e.stack || e.toString() || e);
          alert(e.message || e);
          this.confirmSendDialog = false;
          return false;
        }
          this.canSend = true;
      } catch (e) {
        this.$root.error('Params error');
        this.$root.log.error('send_to_contract_encode_abi_error', e.stack || e.toString() || e);
        this.confirmSendDialog = false;
        return false;
      }
    },
    */

  },

  mounted() {
    this.getData();
  }
}
</script>