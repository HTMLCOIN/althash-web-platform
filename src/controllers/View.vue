<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{ $t('view.title') }}</span>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn icon large slot="activator" @click="refreshWallet">
          <v-icon large color="blue accent-4">
	  refresh
	  </v-icon>
        </v-btn>
	<span>Refresh</span>
      </v-tooltip>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
      <v-layout v-for="(item, i) in infoLabel" :key="i">
        <v-flex xs3>
          <v-subheader>
            {{ $t('common.info.' + item.label) }}
          </v-subheader>
        </v-flex>
        <v-flex xs7>
          <v-text-field
            v-model="info[item.name]"
	    outline
            readonly
	    single-line
          ></v-text-field>
        </v-flex>
        <v-flex xs2>
          <v-btn small class="mt-3" color="cyan" v-clipboard:copy="info[item.name]" v-clipboard:success="onCopySucc" v-clipboard:error="onCopyError" v-if="item.copy">
            {{ $t('common.copy') }}
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout v-if="privKey !== null">
        <v-flex xs3>
          <v-subheader>
            {{ $t('common.info.priv_key') }}
          </v-subheader>
        </v-flex>
        <v-flex xs7>
          <v-text-field
            v-model="privKey"
            outline
	    readonly
	    single-line
            :type="showPriv ? 'text' : 'password'"
	    :append-icon="showPriv ? 'visibility_off' : 'visibility'"
	    @click:append="showPriv = !showPriv"
          ></v-text-field>
	</v-btn>
        </v-flex>
        <v-flex xs2>
          <v-btn small class="mt-3" color="cyan" v-show="showPriv" v-clipboard:copy="privKey" v-clipboard:success="onCopySucc" v-clipboard:error="onCopyError">
            {{ $t('common.copy') }}
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout v-if="wallet.info.hrc20.length > 0">
        <v-flex xs3>
          <v-subheader>
            HRC20 Tokens
          </v-subheader>
        </v-flex>
        <v-flex xs7>
          <v-card flat tile dark :color="'light-blue darken-'+(i%2+3)" style="border-bottom: 2px solid #000;padding: 15px 10px;" v-for="(token, i) in wallet.info.hrc20" :key="i">
            <v-layout>
              <v-flex xs5>{{ token.contract.name }}</v-flex>
              <v-flex xs7>{{ token.amount / Math.pow(10, token.contract.decimals) }} {{ token.contract.symbol }}</v-flex>
	      <v-flex xs12><span :class="caption">{{ token.contract.contract_address }}</span></v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import webWallet from 'libs/web-wallet'

export default {
  data() {
    return {
      infoLabel: [
        { label: 'address', name: 'address', copy: true },
        { label: 'balance', name: 'balance' },
        { label: 'unconfirmed_balance', name: 'unconfirmedBalance' },
      ],
      wallet: webWallet.getWallet(),
      showPriv: false
    }
  },
  props: ['view'],
  watch: {
    view: function() {
      this.wallet.setInfo()
    }
  },
  computed: {
    info: function() {
      return this.wallet.info
    },
    privKey: function() {
      return this.wallet.getPrivKey()
    }
  },
  methods: {
    onCopySucc: function() {
      this.$root.success('copy success')
    },
    onCopyError: function() {
      this.$root.error('copy fail')
    },
    async refreshWallet(){
      this.wallet.setInfo()
      this.wallet.setHrc20()
    }
  }
}
</script>
