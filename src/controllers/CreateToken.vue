<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
    <v-card-title class="justify-center">
      <span class="headline"><img src="http://104.236.228.131/htmlcoin-web-wallet/dist/images/tokenfarm_logo21.png"></span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          :label="this.$t('create_token.name')"
          v-model.trim="name"
          required
	  outline
        ></v-text-field>
        <v-text-field
          :label="$t('create_token.symbol')"
          v-model.trim="symbol"
          required
          outline
        ></v-text-field>
        <v-text-field
          :label="$t('create_token.decimal')"
          v-model.trim="decimal"
          required
          outline
        ></v-text-field>
        <v-text-field
          :label="$t('create_token.total_supply')"
          v-model.trim="totalSupply"
          required
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
            {{ $t('create_token.confirm') }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
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
    <v-dialog v-model="introDialog" persistent max-width="50%">
      <v-card>
        <v-card-title>
          <span class="headline">
            Welcome to TokenFarm!
          </span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <p :class="body-2">Here you will be able to generate your own HRC20 Token in Althash Blockchain.</p>
                <p :class="body-2">Please fill the details about your Token and confirm the creation.</p>
                <p :class="body-2">After the Transaction is confirmed, you will be able to find your token on the "View Wallet Info" option in "Wallet Functions" menu. You might need to refresh the browser and re-import your wallet before seeing your Tokens.</p>
            </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click="closeIntro">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
      </v-flex>
    </v-container>
  </v-card>
</template>

<script>
import webWallet from 'libs/web-wallet'
import server from 'libs/server'
export default {
  data () {
    return {
      name: '',
      symbol: '',
      decimal: '8',
      totalSupply: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      introDialog: true,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    }
  },
  computed: {
    notValid: function() {
      //@todo valid the address
      const nameCheck = /^(?!\s*$).+/.test(this.name)
      const symbolCheck = /^\b[a-zA-Z0-9_]+\b$/.test(this.symbol)
      const decimalCheck = /^(0|[1-9][0-9]*)$/.test(this.decimal) && this.decimal < 256
      const totalSupplyCheck = !isNaN(this.totalSupply)
      const gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0
      const gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0
      const feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001
      return !(nameCheck && symbolCheck && decimalCheck && totalSupplyCheck && gasPriceCheck && gasLimitCheck && feeCheck)
    }
  },
  methods: {
    async send() {
      this.confirmSendDialog = true
      const wallet = webWallet.getWallet()
      try {
        this.rawTx = await wallet.generateCreateTokenTx(this.name, this.symbol, this.decimal, this.totalSupply, this.gasLimit, this.gasPrice, this.fee)
        this.canSend = true
      } catch (e) {
        alert(e.message || e)
        this.$root.log.error('create_contract_token_error', e.stack || e.toString() || e)
        this.confirmSendDialog = false
        return false
      }
    },
    async confirmSend() {
      const wallet = webWallet.getWallet()
      this.sending = true
      try {
        const txId = await wallet.sendRawTx(this.rawTx)
        this.confirmSendDialog = false
        this.sending = false
	const txViewUrl = server.currentNode().getTxExplorerUrl(txId)
        this.$root.success(`Successful sent! You can view it at <a href="${txViewUrl}" target="_blank">${txViewUrl}</a>`, true, 0)
        this.$emit('send')
      } catch (e) {
        alert(e.message || e)
        this.$root.log.error('create_contract_post_raw_tx_error', e.response || e.stack || e.toString() || e)
        this.confirmSendDialog = false
      }
    },
    async closeIntro(){
      this.introDialog = false
    }
  }
}
</script>
