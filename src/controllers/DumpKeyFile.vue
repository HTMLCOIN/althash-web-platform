<template>
  <v-card>
    <v-card-title>
      <div class="headline font-weight-medium blue--text">
        <v-icon large>cloud_download</v-icon>
          {{ $t('dump_as_key_file.title') }}
      </div>
    </v-card-title>
    <v-card-text>
      <center>
        <span class="subheading red--text"><b>{{ $t('dump_as_key_file.warning') }}</b></span>
      </center>
      <br><br>
      <file-creator v-if="fileStr" color="info" :href="fileStr"></file-creator>
      <password :open="passwordRequired" notEmpty="true" title="dump_as_key_file.password_title" @password="inputed"></password>
    </v-card-text>
  </v-card>
</template>

<script>
import password from 'components/PasswordCreate'
import fileCreator from 'components/FileCreator'
import keyfile from 'libs/keyfile'
import webWallet from 'libs/web-wallet'

export default {
  data() {
    return {
      passwordRequired: true,
      wallet: webWallet.getWallet(),
      fileStr: false,
    }
  },
  components: {
    password,
    fileCreator,
  },
  methods: {
    inputed(password) {
      this.passwordRequired = false
      this.fileStr = 'data:text/plain,'+keyfile.build(keyfile.encode(this.wallet.getPrivKey(), password))
    }
  }
}
</script>
