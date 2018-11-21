<template>
  <v-card>
    <v-container fluid grid-list-md>
      <v-flex xs6 offset-xs3>
        <v-card-title class="justify-center">
          <span class="headline"><img src="~assets/images/logo_altproof.png"></span>
        </v-card-title>
      </v-flex>
    </v-container>
    <v-tabs
     centered
     icons-and-text
     color="transparent"
     slider-color="teal"     
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
                  <h3 class="headline">Hash type:</h3> 
                  <v-radio-group v-model="hash" row @change="reprocessHash">
                    <v-radio label="MD5" :value="'md5'" :key="'md5'"></v-radio>
                    <v-radio label="SHA1" :value="'sha1'" :key="'sha1'"></v-radio>
                    <v-radio label="SHA-256" :value="'sha256'" :key="'sha256'"></v-radio>
                  </v-radio-group>
                  <h3 class="headline">Upload:</h3>    
                  <br>  
                  <div class="text-xs-center file">                    
                      <input type="file" @change="uploadFile" ref="file">
                      <div>                      
                        <v-btn flat icon color="blue" @click="$refs.file.click()">
                          <v-icon x-large>cloud_upload</v-icon>
                        </v-btn>                        
                      </div>
                      <span>{{loadStatus}}%</span>
                      <span @click="removeFile" class="remove-file" v-show="isFile"><v-icon color="red accent-4">delete_forever</v-icon></span>
                  </div>   
                  <br>
                  <div class="text-xs-center">or</div>                                 
                  <br>
                  <v-textarea label="Text" v-model="text" :disabled="isTextareaEnabled" @keyup="textHash" box></v-textarea>
                  <v-text-field
                    label="File name:"   
                    v-model="fileName"
                    v-if="isShowOutput"                                     
                    disabled
                    box
                  ></v-text-field>        
                  <v-text-field
                    label="File size:"
                    v-model="fileSize"
                    v-if="isShowOutput"
                    disabled
                    box
                  ></v-text-field>                                                          
                  <v-text-field
                    label="Hash:"
                    v-model="hashID"
                    disabled
                    box
                  ></v-text-field>  
                  <br><br>
                  <v-layout>
                    <v-flex xs4>
                      <v-text-field
                      label="Gas Price (1e-8 HTML/gas)"
                      v-model.trim="gasPrice"
                      required
                      box
                      background-color="indigo lighten-3"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                      label="Gas Limit"
                      v-model.trim="gasLimit"
                      required
                      box
                      background-color="indigo lighten-3"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs4>
                      <v-text-field
                      label="Fee"
                      v-model.trim="fee"
                      required
                      box
                      background-color="indigo lighten-3"
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
                          <v-text-field label="Raw Tx" v-model="rawTx" disabled></v-text-field>
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
            </v-flex>
          </v-container>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-container fluid grid-list-md>
            <v-flex xs6 offset-xs3>
              <v-card-text>
                <v-form>
                  <v-text-field
                  class="mx-3"
                  flat
                  label="Hash ID"
                  prepend-inner-icon="search"
                  solo-inverted
                  v-model.trim="searchHashID"
                  append-icon="send"
                  @click:append="callTo"   
                  ></v-text-field> 
                </v-form>
              </v-card-text>
              <v-dialog v-model="execResultDialog" width="600px">
                <v-card>
                  <v-card-text>
                    <v-container align-center grid-list-md text-md-center>
                      <v-layout row wrap>
                        <v-flex xs6>
                          <img src="~assets/images/logo_altproof.png" style="width: auto; height: 40px;">
                        </v-flex>
                        <v-flex xs6>
                          <img src="~assets/images/logo_althash.png" style="width: auto; height: 40px;">
                        </v-flex>
                        <v-flex xs12>
                          <span class="font-weight-medium my-2 headline font-bold">
                            Digital Certificate
                          </span>
                        </v-flex>
                        <v-flex xs12>                          
                          <div class="text-xs-center">
                            <p class="caption">Hash ID: {{ searchHashID }}</p> 
                            <img :src="qr" style="width: 75px; height: auto;"/>
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-container>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<style lang="scss">
.headline {
  img {
    max-height: 150px;
  }
}

.file {
  border: dashed 3px #90caf9;
  position: relative;
  padding: 5px 0;

  input[type="file"] {
    display: none;
  }

  .loading {
    background-color: #42a5f5;
    left: 0px;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.3;
  }

  .remove-file {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
}
</style>

<script>
import webWallet from "libs/web-wallet";
import abi from "ethjs-abi";
import server from "libs/server";
import sha256 from "js-sha256";
import qrcode from "qrcode";
import md5 from "js-md5";
import sha1 from "js-sha1";

const abiJson = JSON.parse(
  '[{"constant":true,"inputs":[{"name":"hash","type":"string"}],"name":"getDocument","outputs":[{"name":"stored","type":"bool"},{"name":"blockNumber","type":"uint256"},{"name":"blockTimestamp","type":"uint256"},{"name":"sender","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"}],"name":"newDocument","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNumber","type":"uint256"},{"indexed":false,"name":"hash","type":"string"}],"name":"DocumentEvent","type":"event"}]'
);

export default {
  data() {
    return {
      contractAddress: "73ff16a4066702fb58ac775427b5aae905b2ab1e",
      abi: "",
      parsedAbi: null,
      method: null,
      inputParams: [],
      fullName: "",
      motherFullName: "",
      fatherFullName: "",
      dateOfBirth_menu: false,
      dateOfBirth: "",
      timeOfBirth_menu: false,
      timeOfBirth: null,
      timePicker: false,
      placeOfBirth: "",
      gasPrice: "40",
      gasLimit: "2500000",
      fee: "0.01",
      confirmSendDialog: false,
      execResultDialog: false,
      rawTx: "loading...",
      canSend: false,
      sending: false,
      hashID: "",
      searchHashID: "",
      resultStatus: "",
      resultFullName: "loading...",
      resultMotherFullName: "loading...",
      resultFatherFullName: "loading...",
      resultDateOfBirth: "loading...",
      resultTimeOfBirth: "loading...",
      resultPlaceOfBirth: "loading...",
      qr: "",
      file: null,
      fileName: "",
      fileSize: "",
      hash: "sha256",
      text: "",
      isTextareaEnabled: false,
      isShowOutput: false,
      loadStatus: 0
    };
  },
  computed: {
    notValid: function() {
      //@todo valid the address
      const gasPriceCheck =
        /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      const gasLimitCheck =
        /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      const feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;

      const hashID = this.hashID !== "";

      return !(gasPriceCheck && gasLimitCheck && feeCheck && hashID);
    },
    isFile() {
      return this.file !== null;
    }
  },
  watch: {
    method: function() {
      this.inputParams = [];
    },
    isTextareaEnabled() {
      return this.isTextareaEnabled;
    },
    hashID() {
      if (this.text === "" && this.file === null) this.hashID = "";
    }
  },
  methods: {
    async send() {
      try {
        const encodedData = abi
          .encodeMethod(abiJson[1], [this.hashID])
          .substr(2);

        this.confirmSendDialog = true;
        try {
          this.rawTx = await webWallet
            .getWallet()
            .generateSendToContractTx(
              this.contractAddress,
              encodedData,
              this.gasLimit,
              this.gasPrice,
              this.fee
            );
        } catch (e) {
          this.$root.log.error(
            "send_to_generate_tx_error",
            e.stack || e.toString() || e
          );
          alert(e.message || e);
          this.confirmSendDialog = false;
          return false;
        }
        this.canSend = true;
      } catch (e) {
        this.$root.error("Params error");
        this.$root.log.error(
          "send_to_contract_encode_abi_error",
          e.stack || e.toString() || e
        );
        this.confirmSendDialog = false;
        return false;
      }
    },
    async confirmSend() {
      this.sending = true;
      try {
        const txId = await webWallet.getWallet().sendRawTx(this.rawTx);
        this.confirmSendDialog = false;
        this.sending = false;
        const txViewUrl = server.currentNode().getTxExplorerUrl(txId);
        this.$root.success(
          `Successful sent! You can follow the transaction on <a href="${txViewUrl}" target="_blank">${txViewUrl}</a>`,
          true,
          0
        );
        this.$emit("send");
        this.removeFile();

        this.text = "";
      } catch (e) {
        alert(e.message || e);
        this.$root.log.error(
          "send_to_contract_post_raw_tx_error",
          e.response || e.stack || e.toString() || e
        );
        this.confirmSendDialog = false;
      }
    },
    async callTo() {
      if (this.searchHashID != "") {
        try {
          const encodedData = abi
            .encodeMethod(abiJson[0], [this.searchHashID])
            .substr(2);
          try {
            let encodedResult = await webWallet
              .getWallet()
              .callContract(this.contractAddress, encodedData);
            encodedResult = "0x" + encodedResult;
            let decodedResult = abi.decodeMethod(abiJson[0], encodedResult);

            this.resultStatus = decodedResult[0];

            this.execResultDialog = true;

            this.drawQrCode();
          } catch (e) {
            this.$root.log.error(
              "call_contract_call_contract_error",
              e.stack || e.toString() || e
            );
            alert(e.message || e);
            this.execResultDialog = false;
          }
        } catch (e) {
          this.$root.error("Params error");
          this.$root.log.error(
            "call_contract_encode_abi_error",
            e.stack || e.toString() || e
          );
          return false;
        }
      }
    },
    onCopySucc: function() {
      this.$root.success("copy success");
    },
    onCopyError: function() {
      this.$root.error("copy fail");
    },
    drawQrCode() {
      qrcode.toDataURL(`${this.searchHashID}`, (err, url) => {
        this.qr = url;
      });
    },
    async uploadFile(event = null) {
      this.hashID = "";
      if (event !== null) {
        this.file = event.target.files[0];
        this.isTextareaEnabled = this.file !== null;
        this.text = "";

        this.fileName = this.file.name;
        this.fileSize = this.formatSize(this.file.size);
      }
      const fileBinaryString = await this.fileReader(this.file);
      this.parseHash(fileBinaryString);
      this.isShowOutput = true;
    },
    async fileReader(file) {
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onprogress = ({ loaded, total, lengthComputable }) => {
          if (lengthComputable)
            this.loadStatus = ((loaded / total) * 100).toFixed(2);
        };

        reader.onload = () => {
          resolve(reader.result);
        };

        reader.onerror = reject;

        try {
          reader.readAsDataURL(file);
        } catch (err) {
          reject(err);
        }
      });
    },
    formatSize(size) {
      let sizeTemp = size;
      let cont = 0;

      while (sizeTemp > 1024 && cont < 4) {
        sizeTemp /= 1024;
        cont++;
      }

      switch (cont) {
        case 0:
          return sizeTemp.toFixed(2) + " Byte";
        case 1:
          return sizeTemp.toFixed(2) + " KB";
        case 2:
          return sizeTemp.toFixed(2) + " MB";
        case 3:
          return sizeTemp.toFixed(2) + " GB";
        default:
          return sizeTemp.toFixed(2) + " TB";
      }
    },
    async reprocessHash() {
      if (this.file && this.text === "") await this.uploadFile();
      else if (this.text && this.file === null) this.textHash();
    },
    parseHash(hash) {
      switch (this.hash) {
        case "md5":
          this.hashID = md5(hash);
          break;
        case "sha1":
          this.hashID = sha1(hash);
          break;
        default:
          this.hashID = sha256(hash);
          break;
      }
    },
    textHash() {
      this.parseHash(this.text);
    },
    removeFile() {
      this.file = null;
      this.fileName = "";
      this.fileSize = "";
      this.hashID = "";
      this.loadStatus = 0;
    }
  }
};
</script>