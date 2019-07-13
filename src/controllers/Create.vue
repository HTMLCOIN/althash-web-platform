<template>
  <v-card>
    <v-card-title primary-title class="justify-center">
      <div>
        <div class="headline font-weight-medium blue--text">
          <v-icon large>account_balance_wallet</v-icon>
          {{ $t('create.title') }}
        </div>
        <center>
          <span class="subheading grey--text">Please click on the button below</span>
        </center>
      </div>
    </v-card-title>
    <v-card-text v-if="step === 2">
      <center>
        <span class="subheading red--text"><b>{{ $t('dump_as_key_file.warning') }}</b></span>
      </center>
      <br><br>
      <file-creator v-if="fileStr" color="info" :href="fileStr" @click="dumpDone"></file-creator>
      <password :open="passwordRequired" notEmpty="true" title="dump_as_key_file.password_title" @password="setPassword"></password>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="error" dark @click="createWallet" v-if="step === 1">
        <slot>
          <v-icon>fiber_new</v-icon>
        </slot>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import password from 'components/PasswordCreate'
import webWallet from 'libs/web-wallet'
import fileCreator from 'components/FileCreator'
import keyfile from 'libs/keyfile'

export default {
  data() {
    return {
      step: 1,
      passwordRequired: false,
      fileStr: false,
    }
  },
  props: ['view'],
  watch: {
    view: function() {
      this.step = 1
    }
  },
  components: {
    password,
    fileCreator,
  },
  methods: {
    setPassword(password) {
      const wallet = webWallet.restoreFromMnemonic(webWallet.generateMnemonic(), Date.now())
      this.fileStr = 'data:text/plain,'+keyfile.build(keyfile.encode(wallet.getPrivKey(), password))
      this.passwordRequired = false
    },
    createWallet() {
      this.step = 2
      this.passwordRequired = true
    },
    dumpDone() {
      setTimeout(() => {
        this.$emit('created')
      }, 1000)
    }
  }
}
</script>
