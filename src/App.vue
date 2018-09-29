<template>
  <v-app light>
    <v-toolbar :class="headerClass" app fixed height="82px" clipped-left>
      <span class="title">
        <span class="text"><img src="images/logo_althash_webplatform.png" alt="Althash Webplatform Logo"></span>
      </span>
      <v-spacer></v-spacer>

      <v-menu bottom open-on-hover offset-y
              :nudge-width="100"
              v-for="dapp in dapps.items"
              :key="dapp.title"
              v-show="!notShow['dapps']"
      >
        <v-btn icon large dark slot="activator" @click="changeView(dapp.name)">
          <img :src="dapp.btn" style="height:35px;width:auto;">
        </v-btn>
      </v-menu>

      <v-spacer></v-spacer>
      <v-tooltip bottom v-show="!isCurrent['home']">
        <v-btn icon dark slot="activator" @click="changeView('home')">
          <v-icon>home</v-icon>
        </v-btn>
        <span>Home</span>
      </v-tooltip>
      <v-menu bottom open-on-hover offset-y
              :nudge-width="100"
              v-for="item in items"
              :key="item.title"
              v-show="!notShow[item.name]"
      >
        <v-btn icon dark slot="activator">
          <v-icon>{{ item.action }}</v-icon>
        </v-btn>
        <v-list subheader>
	  <v-subheader>{{ item.title }}</v-subheader>
          <v-list-tile
            v-for="subItem in item.items"
            v-show="!notShow[subItem.name]"
            :key="subItem.title"
            @click="changeView(subItem.name)"
           >
             <v-list-tile-content>
               <v-list-tile-title class="body-2">{{ subItem.title }}</v-list-tile-title>
             </v-list-tile-content>
             <v-list-tile-action>
               <v-icon>{{ subItem.action }}</v-icon>
             </v-list-tile-action>
           </v-list-tile>
        </v-list>
      </v-menu>
      <v-tooltip bottom v-show="showLogoff">
        <v-btn icon dark slot="activator" @click="logoff">
          <v-icon>power_settings_new</v-icon>
        </v-btn>
        <span>Log off</span>
      </v-tooltip>      
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height justify-center>
          <v-layout row wrap>
            <v-flex xs10 offset-xs1>
              <home v-show="isCurrent['home']" @openDapp="openDapp"></home>
              <create-wallet :view="isCurrent['create']" @created="setWallet" v-show="isCurrent['create']"></create-wallet>
              <create-mnemonic :view="isCurrent['create_from_mnemonic']" @created="setWallet" v-show="isCurrent['create_from_mnemonic']"></create-mnemonic>
              <restore-wallet @restored="setWallet" v-show="isCurrent['restore_from_mnemonic']"></restore-wallet>
              <restore-wif @restored="setWallet" v-show="isCurrent['restore_from_wif']"></restore-wif>
              <restore-mobile @restored="setWallet" v-show="isCurrent['restore_from_mobile']"></restore-mobile>
              <restore-key-file @restored="setWallet" v-show="isCurrent['restore_from_key_file']"></restore-key-file>
              <restore-ledger @restored="setWallet"  v-if="isCurrent['restore_from_ledger']"></restore-ledger>
              <view-wallet :view="isCurrent['view']" v-if="isCurrent['view']"></view-wallet>
              <view-tx :view="isCurrent['transactions']" v-if="isCurrent['transactions']"></view-tx>
              <safe-send @send="setWallet" v-if="isCurrent['safe_send']"></safe-send>
              <send @send="setWallet" v-if="isCurrent['send']"></send>
              <request-payment v-if="isCurrent['request_payment']"></request-payment>
              <dump-key-file v-if="isCurrent['dump_as_key_file']"></dump-key-file>
              <create-contract v-if="isCurrent['create_contract']"></create-contract>
              <send-to-contract v-if="isCurrent['send_to_contract']"></send-to-contract>
              <call-contract v-if="isCurrent['call_contract']"></call-contract>
              <create-token v-if="isCurrent['create_token']"></create-token>
              <dapp-myoffspring v-if="isCurrent['dapp_myoffspring']"></dapp-myoffspring>
              <config v-if="isCurrent['settings']"></config>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <notify></notify>
    <warning></warning>
  </v-app>
</template>

<script>
import Vue from 'vue'
import createLog from 'localstorage-logger'
//Components
import Notify from 'components/Notify'
import Warning from 'components/Warning'
import Home from 'controllers/Home'
import CreateWallet from 'controllers/Create'
import CreateMnemonic from 'controllers/CreateMnemonic'
import RestoreWallet from 'controllers/Restore'
import RestoreWif from 'controllers/RestoreWif'
import RestoreMobile from 'controllers/RestoreMobile'
import RestoreKeyFile from 'controllers/RestoreKeyFile'
import RestoreLedger from 'controllers/RestoreLedger'
import ViewWallet from 'controllers/View'
import ViewTx from 'controllers/ViewTx'
import SafeSend from 'controllers/SafeSend'
import Send from 'controllers/Send'
import RequestPayment from 'controllers/RequestPayment'
import DumpKeyFile from 'controllers/DumpKeyFile'
import CreateToken from 'controllers/CreateToken'
import DappMyoffspring from 'controllers/Dapp-MyOffspring'
import CreateContract from 'controllers/CreateContract'
import SendToContract from 'controllers/SendToContract.vue'
import CallContract from 'controllers/CallContract.vue'
import Config from 'controllers/Config'
import config from 'libs/config'
import webWallet from 'libs/web-wallet'
import i18n from 'libs/i18n'
const log = createLog({
  maxLogSizeInBytes: 500 * 1024 // 500KB
})

export default {
  name: 'app',
  i18n,
  data() {
   return {
      wallet: false,
      current: 'home',
      network: config.getNetwork(),
      mode: config.getMode(),
      log: log,
      notifyList: {},
      items: [
        {
          action: 'open_in_browser',
          title: 'Add Wallet',
          name: 'new_wallet',
	  active: true,
          items: [
            { 
              title: 'Generate New Wallet',
              name: 'create',
              action: 'add'
            },
            {
              title: 'Restore from Key File',
              name: 'restore_from_key_file',
              action: 'cloud_upload'
            },
            {
              title: 'Create from Mnemonic',
              name: 'create_from_mnemonic',
              action: 'assignment'
            },
            {
              title: 'Restore from Mnemonic',
              name: 'restore_from_mnemonic',
              action: 'sms'
            },
            {
              title: 'Restore from WIF',
              name: 'restore_from_wif',
              action: 'create'
            },
            {
              title: 'Restore from Mobile',
              name: 'restore_from_mobile',
              action: 'phonelink_lock'
            },
            {
              title: 'Restore from Ledger',
              name: 'restore_from_ledger',
              action: 'flip_to_front'
            }
          ]
        },
        {
          action: 'account_balance_wallet',
          title: 'Wallet Functions',
          name: 'wallet',
          active: false,
          items: [
            {
              title: 'View Wallet Info',
              name: 'view',
              action: 'info'
            },            
            {
              title: 'View Wallet Txs',
              name: 'transactions',
              action: 'list'
            },
            {
              title: 'Send',
              name: 'send',
              action: 'redo'
            },
            {
              title: 'Safe Send',
              name: 'safe_send',
              action: 'security'
            },
            {
              title: 'Request Payment',
              name: 'request_payment',
              action: 'undo'
            },
            {
              title: 'Dump as Key File',
              name: 'dump_as_key_file',
              action: 'cloud_download'
            }
          ]
        },
        {
          action: 'code',
          title: 'Smart Contracts',
          name: 'contract',
          active: false,
          items: [
            {
              title: 'Send to Contract',
              name: 'send_to_contract',
              action: 'play_circle_outline'
            },
            {
              title: 'Call Contract',
              name: 'call_contract',
              action: 'pageview'
            },
            {
              title: 'Create Contract',
              name: 'create_contract',
              action: 'build'
            }
          ]
        },
        {
          action: 'settings',
          title: 'Settings',
          name: 'top_settings',
          active: false,
          items: [
            {
              title: 'General',
              name: 'settings',
              action: 'list'
            }
          ]
        }
      ],
      dapps: {   
	  action: 'apps',
          title: 'DApps',
          name: 'dapps',
          active: false,
          items: [
            {
              title: 'myOffspring',
              name: 'dapp_myoffspring',
              image: 'images/myoffspring_logo_menu.png',
	      btn: 'images/myoffspring_menu_btn.png'
            },
            {
              title: 'TokenFarm',
              name: 'create_token',
              image: 'images/tokenfarm_logo_menu.png',
              btn: 'images/tokenfarm_menu_btn.png'
            }
          ] 
      }
    }
  },
  computed: {
    isCurrent() {
      return { [this.current]: true }
    },
    notShow() {
      return {
        restore_from_ledger: this.network !== 'mainnet',
        view: this.mode === 'offline' || !this.wallet,
        transactions: this.mode === 'offline' || !this.wallet,
        wallet: this.mode === 'offline' && !this.wallet,
        safe_send: this.mode === 'offline' && !this.wallet,
        send: this.mode === 'offline' || !this.wallet,
        request_payment: !this.wallet,
        dump_as_key_file: !this.wallet || !this.wallet.getHasPrivKey(),
        create_token: this.mode === 'offline' || !this.wallet,
        contract: this.mode === 'offline' || !this.wallet,
        create_contract: this.mode === 'offline' || !this.wallet,
        send_to_contract: this.mode === 'offline' || !this.wallet,
        call_contract: this.mode === 'offline' || !this.wallet,
	dapp_myoffspring: this.mode === 'offline' || !this.wallet,
        dapps: this.mode === 'offline' || !this.wallet,
      }
    },
    headerClass() {
      return this.mode === 'normal' ? 'indigo darken-3' : 'orange'
    },
    showLogoff(){
      return !(this.mode === 'offline' || !this.wallet)
    },
  },
  components: {
    Notify,
    Warning,
    Home,
    CreateWallet,
    CreateMnemonic,
    RestoreWallet,
    RestoreWif,
    RestoreMobile,
    RestoreKeyFile,
    RestoreLedger,
    ViewWallet,
    ViewTx,
    SafeSend,
    Send,
    RequestPayment,
    DumpKeyFile,
    CreateToken,
    DappMyoffspring,
    CreateContract,
    SendToContract,
    CallContract,
    Config,
  },
  methods: {
    setWallet() {
      this.wallet = webWallet.getWallet()
      this.wallet.init()
      if (this.wallet) {
        if (this.mode === 'offline') {
          this.current = 'request_payment'
        }
        else {
          this.current = 'view'
        }
      }
    },
    logoff(){
      this.wallet = null
      this.current = 'home'
    },
    changeView(name) {
      this.current = name
    },
    openDapp(name) {
      if(this.mode === 'offline' || !this.wallet){
        alert('You need to either import or create a new Wallet before using Dapps! Please go to the \"Add Wallet\" menu at the top of the page.')
      }else{
        this.changeView(name);
      }
    },
    error(msg, isHtml = false, ttl = 10) {
      this.addNotify(msg, 'error', isHtml, ttl)
    },
    success(msg, isHtml = false, ttl = 10) {
      this.addNotify(msg, 'success', isHtml, ttl)
    },
    addNotify(msg, type, isHtml = false, ttl = 10) {
      const notifyId = [msg, type].join('_')
      const notify = {
        msg: msg.split(' ').reduce((msg, current) => {
          let tmsg = this.$t('common.notify.' + current)
          tmsg = (tmsg === 'common.notify.' + current) ? ' ' + current : tmsg
          return msg + tmsg
        }, ''),
        type,
        show: true,
        isHtml,
      }
      if (this.notifyList[notifyId] && this.notifyList[notifyId].timer) {
        clearTimeout(this.notifyList[notifyId].timer)
      }
      Vue.set(this.notifyList, notifyId, notify)
      if (ttl > 0) {
        this.notifyList[notifyId].timer = setTimeout(() => {
          Vue.delete(this.notifyList, notifyId)
        }, ttl * 1000)
      }
    }
  }
}
</script>
