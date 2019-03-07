webpackJsonp([1],{

/***/ "+D9K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_win.583c0bf.png";

/***/ }),

/***/ "+Udk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_token_json__ = __webpack_require__("B1zG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_token_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_libs_token_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib__ = __webpack_require__("LbyV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib__);








function loadTokenList(network) {
  var tokenList = __WEBPACK_IMPORTED_MODULE_2_libs_token_json___default.a[network].concat(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].get('tokenList_' + network, []));
  tokenList.sort(function (a, b) {
    return a.symbol > b.symbol ? 1 : -1;
  });
  return tokenList;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getTokenList: function getTokenList() {
    return loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
  },
  addCustomToken: function addCustomToken(address, name, symbol, decimals) {
    var tokenList = loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
    var has = tokenList.find(function (item) {
      return address === item.address;
    });
    if (has) return true;
    var network = __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork();
    var savedTokenList = __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].get('tokenList_' + network, []);
    savedTokenList[savedTokenList.length] = {
      name: name,
      symbol: symbol,
      address: address,
      decimals: decimals
    };
    __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].set('tokenList_' + network, savedTokenList, 365 * 86400);
  },
  fetchTokenInfo: function fetchTokenInfo(contractAddress) {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTokenInfo(contractAddress);

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  },
  checkSymbol: function checkSymbol(symbol) {
    var tokenList = loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
    return tokenList.filter(function (token) {
      return token.symbol === symbol;
    }).length > 0;
  },
  getTokenBySymbol: function getTokenBySymbol(symbol) {
    var tokenList = loadTokenList(__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork());
    return tokenList.filter(function (token) {
      return token.symbol === symbol;
    })[0];
  },
  encodeSendData: function encodeSendData(token, address, amount) {
    return 'a9059cbb' + __WEBPACK_IMPORTED_MODULE_5_ethjs_abi___default.a.encodeParams(['address', 'uint256'], ['0x' + __WEBPACK_IMPORTED_MODULE_6_htmlcoinjs_lib___default.a.address.fromBase58Check(address)['hash'].toString('hex'), amount * Math.pow(10, token.decimals)]).substr(2);
  }
});

/***/ }),

/***/ "/kv9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Config_vue__ = __webpack_require__("KJOx");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e22f8bd6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Config_vue__ = __webpack_require__("576I");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Config_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e22f8bd6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Config_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "05Ij":
/***/ (function(module, exports) {

module.exports = {"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1QQ/":
/***/ (function(module, exports) {

module.exports = {"_args":[["bigi@1.4.2","/var/www/html/althash-web-platform"]],"_development":true,"_from":"bigi@1.4.2","_id":"bigi@1.4.2","_inBundle":false,"_integrity":"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=","_location":"/bigi","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"bigi@1.4.2","name":"bigi","escapedName":"bigi","rawSpec":"1.4.2","saveSpec":null,"fetchSpec":"1.4.2"},"_requiredBy":["/bitcoinjs-lib","/ecurve","/htmlcoinjs-lib/bitcoinjs-lib"],"_resolved":"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz","_spec":"1.4.2","_where":"/var/www/html/althash-web-platform","bugs":{"url":"https://github.com/cryptocoinjs/bigi/issues"},"dependencies":{},"description":"Big integers.","devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"homepage":"https://github.com/cryptocoinjs/bigi#readme","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"main":"./lib/index.js","name":"bigi","repository":{"url":"git+https://github.com/cryptocoinjs/bigi.git","type":"git"},"scripts":{"browser-test":"mochify --wd -R spec","coverage":"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info","jshint":"jshint --config jshint.json lib/*.js ; true","test":"_mocha -- test/*.js","unit":"mocha"},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},"version":"1.4.2"}

/***/ }),

/***/ "1Yb/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',[_vm._v(_vm._s(_vm.$t('mnemonic.input_words')))]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},_vm._l((_vm.length),function(i){return _c('v-flex',{key:i,attrs:{"xs2":""}},[_c('v-text-field',{ref:"mnemonicInput",refInFor:true,attrs:{"label":_vm.$t('mnemonic.label') + i,"type":"text"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.tryInputMnemonicWords($event)},"focus":function($event){_vm.focus(i - 1)}},model:{value:(_vm.mnemonic[i - 1]),callback:function ($$v) {_vm.$set(_vm.mnemonic, i - 1, $$v)},expression:"mnemonic[i - 1]"}})],1)}))],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"success","dark":"","disabled":_vm.notFinishInput},on:{"click":_vm.inputMnemonicWords}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "1lpv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("wOSG")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"deep-orange"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Info\n        "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Redeem\n        "),_c('v-icon',[_vm._v("check_circle")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"height":"auto","width":"75%"},attrs:{"src":__webpack_require__("90T0")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("Welcome to CypticMAG!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    This application allows the redeeming of rewards found inside your Cryptic Magazine.\n                    "),_c('br'),_c('br'),_vm._v("\n            \t\t    To redeem your prize view the \"redeem\" tab, then enter the code found inside your magazine along with your destination wallet.\n            \t\t    "),_c('br'),_c('br'),_vm._v("\n            \t\t    After you have entered in the code, review that the info is correct then press confirm.\n            \t\t    "),_c('br'),_c('br'),_vm._v("\n            \t\t    We look forward to rewarding you again in the next edition.\n            \t\t    "),_c('br'),_c('br'),_vm._v("\n            \t\t    Stay Tuned & Good Luck!\n            \t\t  ")]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-text-field',{attrs:{"label":"Reward Code","required":"","outline":"","background-color":"orange"},model:{value:(_vm.rewardCode),callback:function ($$v) {_vm.rewardCode=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"rewardCode"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Destination Wallet Address","outline":"","background-color":"orange"},model:{value:(_vm.destinationWalletAddress),callback:function ($$v) {_vm.destinationWalletAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"destinationWalletAddress"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","outline":"","background-color":"deep-orange"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","outline":"","background-color":"deep-orange"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","outline":"","background-color":"deep-orange"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n                      "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n                    ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","width":"600px"},model:{value:(_vm.txReceiptDialog),callback:function ($$v) {_vm.txReceiptDialog=$$v},expression:"txReceiptDialog"}},[_c('v-card',{attrs:{"color":"white"}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[(this.awaitingTx)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_vm._v("\n                Transaction broadcasted to the "),_c('b',[_vm._v("Althash Blockchain")]),_vm._v("!\n              ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n              Awaiting confirmation from the network...\n            ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-progress-linear',{attrs:{"indeterminate":true,"color":"orange"}})],1)],1):_vm._e(),_vm._v(" "),(this.txError)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"red--text"},[_c('p'),_c('h1',[_vm._v("Unsuccessful")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v(" \n                  This reward code has either been claimed or is invalid.\n                ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"error"},on:{"click":function($event){_vm.txError = false; _vm.txReceiptDialog = false}}},[_vm._v("\n                Close\n              ")])],1)],1):_vm._e(),_vm._v(" "),(this.txConfirmed)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_c('h1',[_vm._v("Successful!")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n              The reward was successfully redeemed. Congrats!\n            ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"warning"},on:{"click":function($event){_vm.txConfirmed = false; _vm.txReceiptDialog = false}}},[_vm._v("\n                Close\n              ")])],1)],1):_vm._e()],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Gzf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "2MRl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('restore_wif.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-layout',[_c('v-flex',{attrs:{"xs2":""}},[_c('v-subheader',[_vm._v("\n          "+_vm._s(_vm.$t('restore_wif.priv_key'))+"\n        ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.restore($event)}},model:{value:(_vm.wif),callback:function ($$v) {_vm.wif=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"wif"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.restore}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2N3Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-btn',{attrs:{"color":_vm.color,"download":_vm.downloadName,"href":_vm.href,"target":"_blank"},on:{"click":_vm.doneClick}},[_vm._t("default",[_vm._v(_vm._s(_vm.$t('file_creator.download')))])],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2aRy":
/***/ (function(module, exports) {

module.exports = ["가격","가끔","가난","가능","가득","가르침","가뭄","가방","가상","가슴","가운데","가을","가이드","가입","가장","가정","가족","가죽","각오","각자","간격","간부","간섭","간장","간접","간판","갈등","갈비","갈색","갈증","감각","감기","감소","감수성","감자","감정","갑자기","강남","강당","강도","강력히","강변","강북","강사","강수량","강아지","강원도","강의","강제","강조","같이","개구리","개나리","개방","개별","개선","개성","개인","객관적","거실","거액","거울","거짓","거품","걱정","건강","건물","건설","건조","건축","걸음","검사","검토","게시판","게임","겨울","견해","결과","결국","결론","결석","결승","결심","결정","결혼","경계","경고","경기","경력","경복궁","경비","경상도","경영","경우","경쟁","경제","경주","경찰","경치","경향","경험","계곡","계단","계란","계산","계속","계약","계절","계층","계획","고객","고구려","고궁","고급","고등학생","고무신","고민","고양이","고장","고전","고집","고춧가루","고통","고향","곡식","골목","골짜기","골프","공간","공개","공격","공군","공급","공기","공동","공무원","공부","공사","공식","공업","공연","공원","공장","공짜","공책","공통","공포","공항","공휴일","과목","과일","과장","과정","과학","관객","관계","관광","관념","관람","관련","관리","관습","관심","관점","관찰","광경","광고","광장","광주","괴로움","굉장히","교과서","교문","교복","교실","교양","교육","교장","교직","교통","교환","교훈","구경","구름","구멍","구별","구분","구석","구성","구속","구역","구입","구청","구체적","국가","국기","국내","국립","국물","국민","국수","국어","국왕","국적","국제","국회","군대","군사","군인","궁극적","권리","권위","권투","귀국","귀신","규정","규칙","균형","그날","그냥","그늘","그러나","그룹","그릇","그림","그제서야","그토록","극복","극히","근거","근교","근래","근로","근무","근본","근원","근육","근처","글씨","글자","금강산","금고","금년","금메달","금액","금연","금요일","금지","긍정적","기간","기관","기념","기능","기독교","기둥","기록","기름","기법","기본","기분","기쁨","기숙사","기술","기억","기업","기온","기운","기원","기적","기준","기침","기혼","기획","긴급","긴장","길이","김밥","김치","김포공항","깍두기","깜빡","깨달음","깨소금","껍질","꼭대기","꽃잎","나들이","나란히","나머지","나물","나침반","나흘","낙엽","난방","날개","날씨","날짜","남녀","남대문","남매","남산","남자","남편","남학생","낭비","낱말","내년","내용","내일","냄비","냄새","냇물","냉동","냉면","냉방","냉장고","넥타이","넷째","노동","노란색","노력","노인","녹음","녹차","녹화","논리","논문","논쟁","놀이","농구","농담","농민","농부","농업","농장","농촌","높이","눈동자","눈물","눈썹","뉴욕","느낌","늑대","능동적","능력","다방","다양성","다음","다이어트","다행","단계","단골","단독","단맛","단순","단어","단위","단점","단체","단추","단편","단풍","달걀","달러","달력","달리","닭고기","담당","담배","담요","담임","답변","답장","당근","당분간","당연히","당장","대규모","대낮","대단히","대답","대도시","대략","대량","대륙","대문","대부분","대신","대응","대장","대전","대접","대중","대책","대출","대충","대통령","대학","대한민국","대합실","대형","덩어리","데이트","도대체","도덕","도둑","도망","도서관","도심","도움","도입","도자기","도저히","도전","도중","도착","독감","독립","독서","독일","독창적","동화책","뒷모습","뒷산","딸아이","마누라","마늘","마당","마라톤","마련","마무리","마사지","마약","마요네즈","마을","마음","마이크","마중","마지막","마찬가지","마찰","마흔","막걸리","막내","막상","만남","만두","만세","만약","만일","만점","만족","만화","많이","말기","말씀","말투","맘대로","망원경","매년","매달","매력","매번","매스컴","매일","매장","맥주","먹이","먼저","먼지","멀리","메일","며느리","며칠","면담","멸치","명단","명령","명예","명의","명절","명칭","명함","모금","모니터","모델","모든","모범","모습","모양","모임","모조리","모집","모퉁이","목걸이","목록","목사","목소리","목숨","목적","목표","몰래","몸매","몸무게","몸살","몸속","몸짓","몸통","몹시","무관심","무궁화","무더위","무덤","무릎","무슨","무엇","무역","무용","무조건","무지개","무척","문구","문득","문법","문서","문제","문학","문화","물가","물건","물결","물고기","물론","물리학","물음","물질","물체","미국","미디어","미사일","미술","미역","미용실","미움","미인","미팅","미혼","민간","민족","민주","믿음","밀가루","밀리미터","밑바닥","바가지","바구니","바나나","바늘","바닥","바닷가","바람","바이러스","바탕","박물관","박사","박수","반대","반드시","반말","반발","반성","반응","반장","반죽","반지","반찬","받침","발가락","발걸음","발견","발달","발레","발목","발바닥","발생","발음","발자국","발전","발톱","발표","밤하늘","밥그릇","밥맛","밥상","밥솥","방금","방면","방문","방바닥","방법","방송","방식","방안","방울","방지","방학","방해","방향","배경","배꼽","배달","배드민턴","백두산","백색","백성","백인","백제","백화점","버릇","버섯","버튼","번개","번역","번지","번호","벌금","벌레","벌써","범위","범인","범죄","법률","법원","법적","법칙","베이징","벨트","변경","변동","변명","변신","변호사","변화","별도","별명","별일","병실","병아리","병원","보관","보너스","보라색","보람","보름","보상","보안","보자기","보장","보전","보존","보통","보편적","보험","복도","복사","복숭아","복습","볶음","본격적","본래","본부","본사","본성","본인","본질","볼펜","봉사","봉지","봉투","부근","부끄러움","부담","부동산","부문","부분","부산","부상","부엌","부인","부작용","부장","부정","부족","부지런히","부친","부탁","부품","부회장","북부","북한","분노","분량","분리","분명","분석","분야","분위기","분필","분홍색","불고기","불과","불교","불꽃","불만","불법","불빛","불안","불이익","불행","브랜드","비극","비난","비닐","비둘기","비디오","비로소","비만","비명","비밀","비바람","비빔밥","비상","비용","비율","비중","비타민","비판","빌딩","빗물","빗방울","빗줄기","빛깔","빨간색","빨래","빨리","사건","사계절","사나이","사냥","사람","사랑","사립","사모님","사물","사방","사상","사생활","사설","사슴","사실","사업","사용","사월","사장","사전","사진","사촌","사춘기","사탕","사투리","사흘","산길","산부인과","산업","산책","살림","살인","살짝","삼계탕","삼국","삼십","삼월","삼촌","상관","상금","상대","상류","상반기","상상","상식","상업","상인","상자","상점","상처","상추","상태","상표","상품","상황","새벽","색깔","색연필","생각","생명","생물","생방송","생산","생선","생신","생일","생활","서랍","서른","서명","서민","서비스","서양","서울","서적","서점","서쪽","서클","석사","석유","선거","선물","선배","선생","선수","선원","선장","선전","선택","선풍기","설거지","설날","설렁탕","설명","설문","설사","설악산","설치","설탕","섭씨","성공","성당","성명","성별","성인","성장","성적","성질","성함","세금","세미나","세상","세월","세종대왕","세탁","센터","센티미터","셋째","소규모","소극적","소금","소나기","소년","소득","소망","소문","소설","소속","소아과","소용","소원","소음","소중히","소지품","소질","소풍","소형","속담","속도","속옷","손가락","손길","손녀","손님","손등","손목","손뼉","손실","손질","손톱","손해","솔직히","솜씨","송아지","송이","송편","쇠고기","쇼핑","수건","수년","수단","수돗물","수동적","수면","수명","수박","수상","수석","수술","수시로","수업","수염","수영","수입","수준","수집","수출","수컷","수필","수학","수험생","수화기","숙녀","숙소","숙제","순간","순서","순수","순식간","순위","숟가락","술병","술집","숫자","스님","스물","스스로","스승","스웨터","스위치","스케이트","스튜디오","스트레스","스포츠","슬쩍","슬픔","습관","습기","승객","승리","승부","승용차","승진","시각","시간","시골","시금치","시나리오","시댁","시리즈","시멘트","시민","시부모","시선","시설","시스템","시아버지","시어머니","시월","시인","시일","시작","시장","시절","시점","시중","시즌","시집","시청","시합","시험","식구","식기","식당","식량","식료품","식물","식빵","식사","식생활","식초","식탁","식품","신고","신규","신념","신문","신발","신비","신사","신세","신용","신제품","신청","신체","신화","실감","실내","실력","실례","실망","실수","실습","실시","실장","실정","실질적","실천","실체","실컷","실태","실패","실험","실현","심리","심부름","심사","심장","심정","심판","쌍둥이","씨름","씨앗","아가씨","아나운서","아드님","아들","아쉬움","아스팔트","아시아","아울러","아저씨","아줌마","아직","아침","아파트","아프리카","아픔","아홉","아흔","악기","악몽","악수","안개","안경","안과","안내","안녕","안동","안방","안부","안주","알루미늄","알코올","암시","암컷","압력","앞날","앞문","애인","애정","액수","앨범","야간","야단","야옹","약간","약국","약속","약수","약점","약품","약혼녀","양념","양력","양말","양배추","양주","양파","어둠","어려움","어른","어젯밤","어쨌든","어쩌다가","어쩐지","언니","언덕","언론","언어","얼굴","얼른","얼음","얼핏","엄마","업무","업종","업체","엉덩이","엉망","엉터리","엊그제","에너지","에어컨","엔진","여건","여고생","여관","여군","여권","여대생","여덟","여동생","여든","여론","여름","여섯","여성","여왕","여인","여전히","여직원","여학생","여행","역사","역시","역할","연결","연구","연극","연기","연락","연설","연세","연속","연습","연애","연예인","연인","연장","연주","연출","연필","연합","연휴","열기","열매","열쇠","열심히","열정","열차","열흘","염려","엽서","영국","영남","영상","영양","영역","영웅","영원히","영하","영향","영혼","영화","옆구리","옆방","옆집","예감","예금","예방","예산","예상","예선","예술","예습","예식장","예약","예전","예절","예정","예컨대","옛날","오늘","오락","오랫동안","오렌지","오로지","오른발","오븐","오십","오염","오월","오전","오직","오징어","오페라","오피스텔","오히려","옥상","옥수수","온갖","온라인","온몸","온종일","온통","올가을","올림픽","올해","옷차림","와이셔츠","와인","완성","완전","왕비","왕자","왜냐하면","왠지","외갓집","외국","외로움","외삼촌","외출","외침","외할머니","왼발","왼손","왼쪽","요금","요일","요즘","요청","용기","용서","용어","우산","우선","우승","우연히","우정","우체국","우편","운동","운명","운반","운전","운행","울산","울음","움직임","웃어른","웃음","워낙","원고","원래","원서","원숭이","원인","원장","원피스","월급","월드컵","월세","월요일","웨이터","위반","위법","위성","위원","위험","위협","윗사람","유난히","유럽","유명","유물","유산","유적","유치원","유학","유행","유형","육군","육상","육십","육체","은행","음력","음료","음반","음성","음식","음악","음주","의견","의논","의문","의복","의식","의심","의외로","의욕","의원","의학","이것","이곳","이념","이놈","이달","이대로","이동","이렇게","이력서","이론적","이름","이민","이발소","이별","이불","이빨","이상","이성","이슬","이야기","이용","이웃","이월","이윽고","이익","이전","이중","이튿날","이틀","이혼","인간","인격","인공","인구","인근","인기","인도","인류","인물","인생","인쇄","인연","인원","인재","인종","인천","인체","인터넷","인하","인형","일곱","일기","일단","일대","일등","일반","일본","일부","일상","일생","일손","일요일","일월","일정","일종","일주일","일찍","일체","일치","일행","일회용","임금","임무","입대","입력","입맛","입사","입술","입시","입원","입장","입학","자가용","자격","자극","자동","자랑","자부심","자식","자신","자연","자원","자율","자전거","자정","자존심","자판","작가","작년","작성","작업","작용","작은딸","작품","잔디","잔뜩","잔치","잘못","잠깐","잠수함","잠시","잠옷","잠자리","잡지","장관","장군","장기간","장래","장례","장르","장마","장면","장모","장미","장비","장사","장소","장식","장애인","장인","장점","장차","장학금","재능","재빨리","재산","재생","재작년","재정","재채기","재판","재학","재활용","저것","저고리","저곳","저녁","저런","저렇게","저번","저울","저절로","저축","적극","적당히","적성","적용","적응","전개","전공","전기","전달","전라도","전망","전문","전반","전부","전세","전시","전용","전자","전쟁","전주","전철","전체","전통","전혀","전후","절대","절망","절반","절약","절차","점검","점수","점심","점원","점점","점차","접근","접시","접촉","젓가락","정거장","정도","정류장","정리","정말","정면","정문","정반대","정보","정부","정비","정상","정성","정오","정원","정장","정지","정치","정확히","제공","제과점","제대로","제목","제발","제법","제삿날","제안","제일","제작","제주도","제출","제품","제한","조각","조건","조금","조깅","조명","조미료","조상","조선","조용히","조절","조정","조직","존댓말","존재","졸업","졸음","종교","종로","종류","종소리","종업원","종종","종합","좌석","죄인","주관적","주름","주말","주머니","주먹","주문","주민","주방","주변","주식","주인","주일","주장","주전자","주택","준비","줄거리","줄기","줄무늬","중간","중계방송","중국","중년","중단","중독","중반","중부","중세","중소기업","중순","중앙","중요","중학교","즉석","즉시","즐거움","증가","증거","증권","증상","증세","지각","지갑","지경","지극히","지금","지급","지능","지름길","지리산","지방","지붕","지식","지역","지우개","지원","지적","지점","지진","지출","직선","직업","직원","직장","진급","진동","진로","진료","진리","진짜","진찰","진출","진통","진행","질문","질병","질서","짐작","집단","집안","집중","짜증","찌꺼기","차남","차라리","차량","차림","차별","차선","차츰","착각","찬물","찬성","참가","참기름","참새","참석","참여","참외","참조","찻잔","창가","창고","창구","창문","창밖","창작","창조","채널","채점","책가방","책방","책상","책임","챔피언","처벌","처음","천국","천둥","천장","천재","천천히","철도","철저히","철학","첫날","첫째","청년","청바지","청소","청춘","체계","체력","체온","체육","체중","체험","초등학생","초반","초밥","초상화","초순","초여름","초원","초저녁","초점","초청","초콜릿","촛불","총각","총리","총장","촬영","최근","최상","최선","최신","최악","최종","추석","추억","추진","추천","추측","축구","축소","축제","축하","출근","출발","출산","출신","출연","출입","출장","출판","충격","충고","충돌","충분히","충청도","취업","취직","취향","치약","친구","친척","칠십","칠월","칠판","침대","침묵","침실","칫솔","칭찬","카메라","카운터","칼국수","캐릭터","캠퍼스","캠페인","커튼","컨디션","컬러","컴퓨터","코끼리","코미디","콘서트","콜라","콤플렉스","콩나물","쾌감","쿠데타","크림","큰길","큰딸","큰소리","큰아들","큰어머니","큰일","큰절","클래식","클럽","킬로","타입","타자기","탁구","탁자","탄생","태권도","태양","태풍","택시","탤런트","터널","터미널","테니스","테스트","테이블","텔레비전","토론","토마토","토요일","통계","통과","통로","통신","통역","통일","통장","통제","통증","통합","통화","퇴근","퇴원","퇴직금","튀김","트럭","특급","특별","특성","특수","특징","특히","튼튼히","티셔츠","파란색","파일","파출소","판결","판단","판매","판사","팔십","팔월","팝송","패션","팩스","팩시밀리","팬티","퍼센트","페인트","편견","편의","편지","편히","평가","평균","평생","평소","평양","평일","평화","포스터","포인트","포장","포함","표면","표정","표준","표현","품목","품질","풍경","풍속","풍습","프랑스","프린터","플라스틱","피곤","피망","피아노","필름","필수","필요","필자","필통","핑계","하느님","하늘","하드웨어","하룻밤","하반기","하숙집","하순","하여튼","하지만","하천","하품","하필","학과","학교","학급","학기","학년","학력","학번","학부모","학비","학생","학술","학습","학용품","학원","학위","학자","학점","한계","한글","한꺼번에","한낮","한눈","한동안","한때","한라산","한마디","한문","한번","한복","한식","한여름","한쪽","할머니","할아버지","할인","함께","함부로","합격","합리적","항공","항구","항상","항의","해결","해군","해답","해당","해물","해석","해설","해수욕장","해안","핵심","핸드백","햄버거","햇볕","햇살","행동","행복","행사","행운","행위","향기","향상","향수","허락","허용","헬기","현관","현금","현대","현상","현실","현장","현재","현지","혈액","협력","형부","형사","형수","형식","형제","형태","형편","혜택","호기심","호남","호랑이","호박","호텔","호흡","혹시","홀로","홈페이지","홍보","홍수","홍차","화면","화분","화살","화요일","화장","화학","확보","확인","확장","확정","환갑","환경","환영","환율","환자","활기","활동","활발히","활용","활짝","회견","회관","회복","회색","회원","회장","회전","횟수","횡단보도","효율적","후반","후춧가루","훈련","훨씬","휴식","휴일","흉내","흐름","흑백","흑인","흔적","흔히","흥미","흥분","희곡","희망","희생","흰색","힘껏"]

/***/ }),

/***/ "2yL+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.showWarning),callback:function ($$v) {_vm.showWarning=$$v},expression:"showWarning"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('warning.title')))]),_vm._v(" "),_c('v-card-text',[_c('ol',_vm._l((_vm.total),function(dummy,i){return (_vm.hasWarning(i))?_c('li',[_vm._v("\n            "+_vm._s(_vm.$t('warning.list.' + i))+"\n          ")]):_vm._e()}))]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","flat":""},nativeOn:{"click":function($event){return _vm.close($event)}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3QFr":
/***/ (function(module, exports) {

module.exports = ["あいこくしん","あいさつ","あいだ","あおぞら","あかちゃん","あきる","あけがた","あける","あこがれる","あさい","あさひ","あしあと","あじわう","あずかる","あずき","あそぶ","あたえる","あたためる","あたりまえ","あたる","あつい","あつかう","あっしゅく","あつまり","あつめる","あてな","あてはまる","あひる","あぶら","あぶる","あふれる","あまい","あまど","あまやかす","あまり","あみもの","あめりか","あやまる","あゆむ","あらいぐま","あらし","あらすじ","あらためる","あらゆる","あらわす","ありがとう","あわせる","あわてる","あんい","あんがい","あんこ","あんぜん","あんてい","あんない","あんまり","いいだす","いおん","いがい","いがく","いきおい","いきなり","いきもの","いきる","いくじ","いくぶん","いけばな","いけん","いこう","いこく","いこつ","いさましい","いさん","いしき","いじゅう","いじょう","いじわる","いずみ","いずれ","いせい","いせえび","いせかい","いせき","いぜん","いそうろう","いそがしい","いだい","いだく","いたずら","いたみ","いたりあ","いちおう","いちじ","いちど","いちば","いちぶ","いちりゅう","いつか","いっしゅん","いっせい","いっそう","いったん","いっち","いってい","いっぽう","いてざ","いてん","いどう","いとこ","いない","いなか","いねむり","いのち","いのる","いはつ","いばる","いはん","いびき","いひん","いふく","いへん","いほう","いみん","いもうと","いもたれ","いもり","いやがる","いやす","いよかん","いよく","いらい","いらすと","いりぐち","いりょう","いれい","いれもの","いれる","いろえんぴつ","いわい","いわう","いわかん","いわば","いわゆる","いんげんまめ","いんさつ","いんしょう","いんよう","うえき","うえる","うおざ","うがい","うかぶ","うかべる","うきわ","うくらいな","うくれれ","うけたまわる","うけつけ","うけとる","うけもつ","うける","うごかす","うごく","うこん","うさぎ","うしなう","うしろがみ","うすい","うすぎ","うすぐらい","うすめる","うせつ","うちあわせ","うちがわ","うちき","うちゅう","うっかり","うつくしい","うったえる","うつる","うどん","うなぎ","うなじ","うなずく","うなる","うねる","うのう","うぶげ","うぶごえ","うまれる","うめる","うもう","うやまう","うよく","うらがえす","うらぐち","うらない","うりあげ","うりきれ","うるさい","うれしい","うれゆき","うれる","うろこ","うわき","うわさ","うんこう","うんちん","うんてん","うんどう","えいえん","えいが","えいきょう","えいご","えいせい","えいぶん","えいよう","えいわ","えおり","えがお","えがく","えきたい","えくせる","えしゃく","えすて","えつらん","えのぐ","えほうまき","えほん","えまき","えもじ","えもの","えらい","えらぶ","えりあ","えんえん","えんかい","えんぎ","えんげき","えんしゅう","えんぜつ","えんそく","えんちょう","えんとつ","おいかける","おいこす","おいしい","おいつく","おうえん","おうさま","おうじ","おうせつ","おうたい","おうふく","おうべい","おうよう","おえる","おおい","おおう","おおどおり","おおや","おおよそ","おかえり","おかず","おがむ","おかわり","おぎなう","おきる","おくさま","おくじょう","おくりがな","おくる","おくれる","おこす","おこなう","おこる","おさえる","おさない","おさめる","おしいれ","おしえる","おじぎ","おじさん","おしゃれ","おそらく","おそわる","おたがい","おたく","おだやか","おちつく","おっと","おつり","おでかけ","おとしもの","おとなしい","おどり","おどろかす","おばさん","おまいり","おめでとう","おもいで","おもう","おもたい","おもちゃ","おやつ","おやゆび","およぼす","おらんだ","おろす","おんがく","おんけい","おんしゃ","おんせん","おんだん","おんちゅう","おんどけい","かあつ","かいが","がいき","がいけん","がいこう","かいさつ","かいしゃ","かいすいよく","かいぜん","かいぞうど","かいつう","かいてん","かいとう","かいふく","がいへき","かいほう","かいよう","がいらい","かいわ","かえる","かおり","かかえる","かがく","かがし","かがみ","かくご","かくとく","かざる","がぞう","かたい","かたち","がちょう","がっきゅう","がっこう","がっさん","がっしょう","かなざわし","かのう","がはく","かぶか","かほう","かほご","かまう","かまぼこ","かめれおん","かゆい","かようび","からい","かるい","かろう","かわく","かわら","がんか","かんけい","かんこう","かんしゃ","かんそう","かんたん","かんち","がんばる","きあい","きあつ","きいろ","ぎいん","きうい","きうん","きえる","きおう","きおく","きおち","きおん","きかい","きかく","きかんしゃ","ききて","きくばり","きくらげ","きけんせい","きこう","きこえる","きこく","きさい","きさく","きさま","きさらぎ","ぎじかがく","ぎしき","ぎじたいけん","ぎじにってい","ぎじゅつしゃ","きすう","きせい","きせき","きせつ","きそう","きぞく","きぞん","きたえる","きちょう","きつえん","ぎっちり","きつつき","きつね","きてい","きどう","きどく","きない","きなが","きなこ","きぬごし","きねん","きのう","きのした","きはく","きびしい","きひん","きふく","きぶん","きぼう","きほん","きまる","きみつ","きむずかしい","きめる","きもだめし","きもち","きもの","きゃく","きやく","ぎゅうにく","きよう","きょうりゅう","きらい","きらく","きりん","きれい","きれつ","きろく","ぎろん","きわめる","ぎんいろ","きんかくじ","きんじょ","きんようび","ぐあい","くいず","くうかん","くうき","くうぐん","くうこう","ぐうせい","くうそう","ぐうたら","くうふく","くうぼ","くかん","くきょう","くげん","ぐこう","くさい","くさき","くさばな","くさる","くしゃみ","くしょう","くすのき","くすりゆび","くせげ","くせん","ぐたいてき","くださる","くたびれる","くちこみ","くちさき","くつした","ぐっすり","くつろぐ","くとうてん","くどく","くなん","くねくね","くのう","くふう","くみあわせ","くみたてる","くめる","くやくしょ","くらす","くらべる","くるま","くれる","くろう","くわしい","ぐんかん","ぐんしょく","ぐんたい","ぐんて","けあな","けいかく","けいけん","けいこ","けいさつ","げいじゅつ","けいたい","げいのうじん","けいれき","けいろ","けおとす","けおりもの","げきか","げきげん","げきだん","げきちん","げきとつ","げきは","げきやく","げこう","げこくじょう","げざい","けさき","げざん","けしき","けしごむ","けしょう","げすと","けたば","けちゃっぷ","けちらす","けつあつ","けつい","けつえき","けっこん","けつじょ","けっせき","けってい","けつまつ","げつようび","げつれい","けつろん","げどく","けとばす","けとる","けなげ","けなす","けなみ","けぬき","げねつ","けねん","けはい","げひん","けぶかい","げぼく","けまり","けみかる","けむし","けむり","けもの","けらい","けろけろ","けわしい","けんい","けんえつ","けんお","けんか","げんき","けんげん","けんこう","けんさく","けんしゅう","けんすう","げんそう","けんちく","けんてい","けんとう","けんない","けんにん","げんぶつ","けんま","けんみん","けんめい","けんらん","けんり","こあくま","こいぬ","こいびと","ごうい","こうえん","こうおん","こうかん","ごうきゅう","ごうけい","こうこう","こうさい","こうじ","こうすい","ごうせい","こうそく","こうたい","こうちゃ","こうつう","こうてい","こうどう","こうない","こうはい","ごうほう","ごうまん","こうもく","こうりつ","こえる","こおり","ごかい","ごがつ","ごかん","こくご","こくさい","こくとう","こくない","こくはく","こぐま","こけい","こける","ここのか","こころ","こさめ","こしつ","こすう","こせい","こせき","こぜん","こそだて","こたい","こたえる","こたつ","こちょう","こっか","こつこつ","こつばん","こつぶ","こてい","こてん","ことがら","ことし","ことば","ことり","こなごな","こねこね","このまま","このみ","このよ","ごはん","こひつじ","こふう","こふん","こぼれる","ごまあぶら","こまかい","ごますり","こまつな","こまる","こむぎこ","こもじ","こもち","こもの","こもん","こやく","こやま","こゆう","こゆび","こよい","こよう","こりる","これくしょん","ころっけ","こわもて","こわれる","こんいん","こんかい","こんき","こんしゅう","こんすい","こんだて","こんとん","こんなん","こんびに","こんぽん","こんまけ","こんや","こんれい","こんわく","ざいえき","さいかい","さいきん","ざいげん","ざいこ","さいしょ","さいせい","ざいたく","ざいちゅう","さいてき","ざいりょう","さうな","さかいし","さがす","さかな","さかみち","さがる","さぎょう","さくし","さくひん","さくら","さこく","さこつ","さずかる","ざせき","さたん","さつえい","ざつおん","ざっか","ざつがく","さっきょく","ざっし","さつじん","ざっそう","さつたば","さつまいも","さてい","さといも","さとう","さとおや","さとし","さとる","さのう","さばく","さびしい","さべつ","さほう","さほど","さます","さみしい","さみだれ","さむけ","さめる","さやえんどう","さゆう","さよう","さよく","さらだ","ざるそば","さわやか","さわる","さんいん","さんか","さんきゃく","さんこう","さんさい","ざんしょ","さんすう","さんせい","さんそ","さんち","さんま","さんみ","さんらん","しあい","しあげ","しあさって","しあわせ","しいく","しいん","しうち","しえい","しおけ","しかい","しかく","じかん","しごと","しすう","じだい","したうけ","したぎ","したて","したみ","しちょう","しちりん","しっかり","しつじ","しつもん","してい","してき","してつ","じてん","じどう","しなぎれ","しなもの","しなん","しねま","しねん","しのぐ","しのぶ","しはい","しばかり","しはつ","しはらい","しはん","しひょう","しふく","じぶん","しへい","しほう","しほん","しまう","しまる","しみん","しむける","じむしょ","しめい","しめる","しもん","しゃいん","しゃうん","しゃおん","じゃがいも","しやくしょ","しゃくほう","しゃけん","しゃこ","しゃざい","しゃしん","しゃせん","しゃそう","しゃたい","しゃちょう","しゃっきん","じゃま","しゃりん","しゃれい","じゆう","じゅうしょ","しゅくはく","じゅしん","しゅっせき","しゅみ","しゅらば","じゅんばん","しょうかい","しょくたく","しょっけん","しょどう","しょもつ","しらせる","しらべる","しんか","しんこう","じんじゃ","しんせいじ","しんちく","しんりん","すあげ","すあし","すあな","ずあん","すいえい","すいか","すいとう","ずいぶん","すいようび","すうがく","すうじつ","すうせん","すおどり","すきま","すくう","すくない","すける","すごい","すこし","ずさん","すずしい","すすむ","すすめる","すっかり","ずっしり","ずっと","すてき","すてる","すねる","すのこ","すはだ","すばらしい","ずひょう","ずぶぬれ","すぶり","すふれ","すべて","すべる","ずほう","すぼん","すまい","すめし","すもう","すやき","すらすら","するめ","すれちがう","すろっと","すわる","すんぜん","すんぽう","せあぶら","せいかつ","せいげん","せいじ","せいよう","せおう","せかいかん","せきにん","せきむ","せきゆ","せきらんうん","せけん","せこう","せすじ","せたい","せたけ","せっかく","せっきゃく","ぜっく","せっけん","せっこつ","せっさたくま","せつぞく","せつだん","せつでん","せっぱん","せつび","せつぶん","せつめい","せつりつ","せなか","せのび","せはば","せびろ","せぼね","せまい","せまる","せめる","せもたれ","せりふ","ぜんあく","せんい","せんえい","せんか","せんきょ","せんく","せんげん","ぜんご","せんさい","せんしゅ","せんすい","せんせい","せんぞ","せんたく","せんちょう","せんてい","せんとう","せんぬき","せんねん","せんぱい","ぜんぶ","ぜんぽう","せんむ","せんめんじょ","せんもん","せんやく","せんゆう","せんよう","ぜんら","ぜんりゃく","せんれい","せんろ","そあく","そいとげる","そいね","そうがんきょう","そうき","そうご","そうしん","そうだん","そうなん","そうび","そうめん","そうり","そえもの","そえん","そがい","そげき","そこう","そこそこ","そざい","そしな","そせい","そせん","そそぐ","そだてる","そつう","そつえん","そっかん","そつぎょう","そっけつ","そっこう","そっせん","そっと","そとがわ","そとづら","そなえる","そなた","そふぼ","そぼく","そぼろ","そまつ","そまる","そむく","そむりえ","そめる","そもそも","そよかぜ","そらまめ","そろう","そんかい","そんけい","そんざい","そんしつ","そんぞく","そんちょう","ぞんび","ぞんぶん","そんみん","たあい","たいいん","たいうん","たいえき","たいおう","だいがく","たいき","たいぐう","たいけん","たいこ","たいざい","だいじょうぶ","だいすき","たいせつ","たいそう","だいたい","たいちょう","たいてい","だいどころ","たいない","たいねつ","たいのう","たいはん","だいひょう","たいふう","たいへん","たいほ","たいまつばな","たいみんぐ","たいむ","たいめん","たいやき","たいよう","たいら","たいりょく","たいる","たいわん","たうえ","たえる","たおす","たおる","たおれる","たかい","たかね","たきび","たくさん","たこく","たこやき","たさい","たしざん","だじゃれ","たすける","たずさわる","たそがれ","たたかう","たたく","ただしい","たたみ","たちばな","だっかい","だっきゃく","だっこ","だっしゅつ","だったい","たてる","たとえる","たなばた","たにん","たぬき","たのしみ","たはつ","たぶん","たべる","たぼう","たまご","たまる","だむる","ためいき","ためす","ためる","たもつ","たやすい","たよる","たらす","たりきほんがん","たりょう","たりる","たると","たれる","たれんと","たろっと","たわむれる","だんあつ","たんい","たんおん","たんか","たんき","たんけん","たんご","たんさん","たんじょうび","だんせい","たんそく","たんたい","だんち","たんてい","たんとう","だんな","たんにん","だんねつ","たんのう","たんぴん","だんぼう","たんまつ","たんめい","だんれつ","だんろ","だんわ","ちあい","ちあん","ちいき","ちいさい","ちえん","ちかい","ちから","ちきゅう","ちきん","ちけいず","ちけん","ちこく","ちさい","ちしき","ちしりょう","ちせい","ちそう","ちたい","ちたん","ちちおや","ちつじょ","ちてき","ちてん","ちぬき","ちぬり","ちのう","ちひょう","ちへいせん","ちほう","ちまた","ちみつ","ちみどろ","ちめいど","ちゃんこなべ","ちゅうい","ちゆりょく","ちょうし","ちょさくけん","ちらし","ちらみ","ちりがみ","ちりょう","ちるど","ちわわ","ちんたい","ちんもく","ついか","ついたち","つうか","つうじょう","つうはん","つうわ","つかう","つかれる","つくね","つくる","つけね","つける","つごう","つたえる","つづく","つつじ","つつむ","つとめる","つながる","つなみ","つねづね","つのる","つぶす","つまらない","つまる","つみき","つめたい","つもり","つもる","つよい","つるぼ","つるみく","つわもの","つわり","てあし","てあて","てあみ","ていおん","ていか","ていき","ていけい","ていこく","ていさつ","ていし","ていせい","ていたい","ていど","ていねい","ていひょう","ていへん","ていぼう","てうち","ておくれ","てきとう","てくび","でこぼこ","てさぎょう","てさげ","てすり","てそう","てちがい","てちょう","てつがく","てつづき","でっぱ","てつぼう","てつや","でぬかえ","てぬき","てぬぐい","てのひら","てはい","てぶくろ","てふだ","てほどき","てほん","てまえ","てまきずし","てみじか","てみやげ","てらす","てれび","てわけ","てわたし","でんあつ","てんいん","てんかい","てんき","てんぐ","てんけん","てんごく","てんさい","てんし","てんすう","でんち","てんてき","てんとう","てんない","てんぷら","てんぼうだい","てんめつ","てんらんかい","でんりょく","でんわ","どあい","といれ","どうかん","とうきゅう","どうぐ","とうし","とうむぎ","とおい","とおか","とおく","とおす","とおる","とかい","とかす","ときおり","ときどき","とくい","とくしゅう","とくてん","とくに","とくべつ","とけい","とける","とこや","とさか","としょかん","とそう","とたん","とちゅう","とっきゅう","とっくん","とつぜん","とつにゅう","とどける","ととのえる","とない","となえる","となり","とのさま","とばす","どぶがわ","とほう","とまる","とめる","ともだち","ともる","どようび","とらえる","とんかつ","どんぶり","ないかく","ないこう","ないしょ","ないす","ないせん","ないそう","なおす","ながい","なくす","なげる","なこうど","なさけ","なたでここ","なっとう","なつやすみ","ななおし","なにごと","なにもの","なにわ","なのか","なふだ","なまいき","なまえ","なまみ","なみだ","なめらか","なめる","なやむ","ならう","ならび","ならぶ","なれる","なわとび","なわばり","にあう","にいがた","にうけ","におい","にかい","にがて","にきび","にくしみ","にくまん","にげる","にさんかたんそ","にしき","にせもの","にちじょう","にちようび","にっか","にっき","にっけい","にっこう","にっさん","にっしょく","にっすう","にっせき","にってい","になう","にほん","にまめ","にもつ","にやり","にゅういん","にりんしゃ","にわとり","にんい","にんか","にんき","にんげん","にんしき","にんずう","にんそう","にんたい","にんち","にんてい","にんにく","にんぷ","にんまり","にんむ","にんめい","にんよう","ぬいくぎ","ぬかす","ぬぐいとる","ぬぐう","ぬくもり","ぬすむ","ぬまえび","ぬめり","ぬらす","ぬんちゃく","ねあげ","ねいき","ねいる","ねいろ","ねぐせ","ねくたい","ねくら","ねこぜ","ねこむ","ねさげ","ねすごす","ねそべる","ねだん","ねつい","ねっしん","ねつぞう","ねったいぎょ","ねぶそく","ねふだ","ねぼう","ねほりはほり","ねまき","ねまわし","ねみみ","ねむい","ねむたい","ねもと","ねらう","ねわざ","ねんいり","ねんおし","ねんかん","ねんきん","ねんぐ","ねんざ","ねんし","ねんちゃく","ねんど","ねんぴ","ねんぶつ","ねんまつ","ねんりょう","ねんれい","のいず","のおづま","のがす","のきなみ","のこぎり","のこす","のこる","のせる","のぞく","のぞむ","のたまう","のちほど","のっく","のばす","のはら","のべる","のぼる","のみもの","のやま","のらいぬ","のらねこ","のりもの","のりゆき","のれん","のんき","ばあい","はあく","ばあさん","ばいか","ばいく","はいけん","はいご","はいしん","はいすい","はいせん","はいそう","はいち","ばいばい","はいれつ","はえる","はおる","はかい","ばかり","はかる","はくしゅ","はけん","はこぶ","はさみ","はさん","はしご","ばしょ","はしる","はせる","ぱそこん","はそん","はたん","はちみつ","はつおん","はっかく","はづき","はっきり","はっくつ","はっけん","はっこう","はっさん","はっしん","はったつ","はっちゅう","はってん","はっぴょう","はっぽう","はなす","はなび","はにかむ","はぶらし","はみがき","はむかう","はめつ","はやい","はやし","はらう","はろうぃん","はわい","はんい","はんえい","はんおん","はんかく","はんきょう","ばんぐみ","はんこ","はんしゃ","はんすう","はんだん","ぱんち","ぱんつ","はんてい","はんとし","はんのう","はんぱ","はんぶん","はんぺん","はんぼうき","はんめい","はんらん","はんろん","ひいき","ひうん","ひえる","ひかく","ひかり","ひかる","ひかん","ひくい","ひけつ","ひこうき","ひこく","ひさい","ひさしぶり","ひさん","びじゅつかん","ひしょ","ひそか","ひそむ","ひたむき","ひだり","ひたる","ひつぎ","ひっこし","ひっし","ひつじゅひん","ひっす","ひつぜん","ぴったり","ぴっちり","ひつよう","ひてい","ひとごみ","ひなまつり","ひなん","ひねる","ひはん","ひびく","ひひょう","ひほう","ひまわり","ひまん","ひみつ","ひめい","ひめじし","ひやけ","ひやす","ひよう","びょうき","ひらがな","ひらく","ひりつ","ひりょう","ひるま","ひるやすみ","ひれい","ひろい","ひろう","ひろき","ひろゆき","ひんかく","ひんけつ","ひんこん","ひんしゅ","ひんそう","ぴんち","ひんぱん","びんぼう","ふあん","ふいうち","ふうけい","ふうせん","ぷうたろう","ふうとう","ふうふ","ふえる","ふおん","ふかい","ふきん","ふくざつ","ふくぶくろ","ふこう","ふさい","ふしぎ","ふじみ","ふすま","ふせい","ふせぐ","ふそく","ぶたにく","ふたん","ふちょう","ふつう","ふつか","ふっかつ","ふっき","ふっこく","ぶどう","ふとる","ふとん","ふのう","ふはい","ふひょう","ふへん","ふまん","ふみん","ふめつ","ふめん","ふよう","ふりこ","ふりる","ふるい","ふんいき","ぶんがく","ぶんぐ","ふんしつ","ぶんせき","ふんそう","ぶんぽう","へいあん","へいおん","へいがい","へいき","へいげん","へいこう","へいさ","へいしゃ","へいせつ","へいそ","へいたく","へいてん","へいねつ","へいわ","へきが","へこむ","べにいろ","べにしょうが","へらす","へんかん","べんきょう","べんごし","へんさい","へんたい","べんり","ほあん","ほいく","ぼうぎょ","ほうこく","ほうそう","ほうほう","ほうもん","ほうりつ","ほえる","ほおん","ほかん","ほきょう","ぼきん","ほくろ","ほけつ","ほけん","ほこう","ほこる","ほしい","ほしつ","ほしゅ","ほしょう","ほせい","ほそい","ほそく","ほたて","ほたる","ぽちぶくろ","ほっきょく","ほっさ","ほったん","ほとんど","ほめる","ほんい","ほんき","ほんけ","ほんしつ","ほんやく","まいにち","まかい","まかせる","まがる","まける","まこと","まさつ","まじめ","ますく","まぜる","まつり","まとめ","まなぶ","まぬけ","まねく","まほう","まもる","まゆげ","まよう","まろやか","まわす","まわり","まわる","まんが","まんきつ","まんぞく","まんなか","みいら","みうち","みえる","みがく","みかた","みかん","みけん","みこん","みじかい","みすい","みすえる","みせる","みっか","みつかる","みつける","みてい","みとめる","みなと","みなみかさい","みねらる","みのう","みのがす","みほん","みもと","みやげ","みらい","みりょく","みわく","みんか","みんぞく","むいか","むえき","むえん","むかい","むかう","むかえ","むかし","むぎちゃ","むける","むげん","むさぼる","むしあつい","むしば","むじゅん","むしろ","むすう","むすこ","むすぶ","むすめ","むせる","むせん","むちゅう","むなしい","むのう","むやみ","むよう","むらさき","むりょう","むろん","めいあん","めいうん","めいえん","めいかく","めいきょく","めいさい","めいし","めいそう","めいぶつ","めいれい","めいわく","めぐまれる","めざす","めした","めずらしい","めだつ","めまい","めやす","めんきょ","めんせき","めんどう","もうしあげる","もうどうけん","もえる","もくし","もくてき","もくようび","もちろん","もどる","もらう","もんく","もんだい","やおや","やける","やさい","やさしい","やすい","やすたろう","やすみ","やせる","やそう","やたい","やちん","やっと","やっぱり","やぶる","やめる","ややこしい","やよい","やわらかい","ゆうき","ゆうびんきょく","ゆうべ","ゆうめい","ゆけつ","ゆしゅつ","ゆせん","ゆそう","ゆたか","ゆちゃく","ゆでる","ゆにゅう","ゆびわ","ゆらい","ゆれる","ようい","ようか","ようきゅう","ようじ","ようす","ようちえん","よかぜ","よかん","よきん","よくせい","よくぼう","よけい","よごれる","よさん","よしゅう","よそう","よそく","よっか","よてい","よどがわく","よねつ","よやく","よゆう","よろこぶ","よろしい","らいう","らくがき","らくご","らくさつ","らくだ","らしんばん","らせん","らぞく","らたい","らっか","られつ","りえき","りかい","りきさく","りきせつ","りくぐん","りくつ","りけん","りこう","りせい","りそう","りそく","りてん","りねん","りゆう","りゅうがく","りよう","りょうり","りょかん","りょくちゃ","りょこう","りりく","りれき","りろん","りんご","るいけい","るいさい","るいじ","るいせき","るすばん","るりがわら","れいかん","れいぎ","れいせい","れいぞうこ","れいとう","れいぼう","れきし","れきだい","れんあい","れんけい","れんこん","れんさい","れんしゅう","れんぞく","れんらく","ろうか","ろうご","ろうじん","ろうそく","ろくが","ろこつ","ろじうら","ろしゅつ","ろせん","ろてん","ろめん","ろれつ","ろんぎ","ろんぱ","ろんぶん","ろんり","わかす","わかめ","わかやま","わかれる","わしつ","わじまし","わすれもの","わらう","われる"]

/***/ }),

/***/ "3ZG3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Warning_vue__ = __webpack_require__("v3+l");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f692f0e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Warning_vue__ = __webpack_require__("2yL+");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Warning_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f692f0e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Warning_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4Vh3":
/***/ (function(module, exports) {

module.exports = {"modp1":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},"modp2":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},"modp5":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},"modp14":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},"modp15":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},"modp16":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},"modp17":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},"modp18":{"gen":"02","prime":"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}

/***/ }),

/***/ "4quz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/logo_BIFP_150.2242100.png";

/***/ }),

/***/ "4tbZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__ = __webpack_require__("cDYc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Password__ = __webpack_require__("G+K8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      passwordRequired: false,
      inputMnemonic: []
    };
  },

  components: {
    password: __WEBPACK_IMPORTED_MODULE_1_components_Password__["a" /* default */],
    mnemonic: __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__["a" /* default */]
  },
  methods: {
    restore: function restore(mnemonic) {
      this.inputMnemonic = mnemonic;
      if (!__WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].validateBip39Mnemonic(this.inputMnemonic)) {
        if (!confirm(this.$t('restore.mnemonic_warning'))) return false;
      }
      this.passwordRequired = true;
    },
    setPassword: function setPassword(password) {
      this.passwordRequired = false;
      if (!__WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].restoreFromMnemonic(this.inputMnemonic, password)) {
        this.$root.error('mnemonics_can_not_restore');
        return false;
      }
      this.$emit('restored');
    }
  }
});

/***/ }),

/***/ "576I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('config.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('config.lan')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-select',{attrs:{"items":_vm.lanSelect,"label":_vm.$t('config.lan'),"single-line":"","bottom":""},model:{value:(_vm.lan),callback:function ($$v) {_vm.lan=$$v},expression:"lan"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('config.network')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-select',{attrs:{"items":_vm.networkSelect,"label":_vm.$t('config.network'),"single-line":"","bottom":""},model:{value:(_vm.network),callback:function ($$v) {_vm.network=$$v},expression:"network"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('config.mode')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-select',{attrs:{"items":_vm.modeSelect,"label":_vm.$t('config.mode'),"single-line":"","bottom":""},model:{value:(_vm.mode),callback:function ($$v) {_vm.mode=$$v},expression:"mode"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v("LOG")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('file-creator',{attrs:{"color":"red","href":_vm.fileStr}},[_vm._v("DOWNLOAD LOGS")])],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"info",on:{"click":_vm.save}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5EIY":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "5Ik/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  common: {
    confirm: '확인',
    cancel: '취소',
    search: '검색',
    copy: '복사',
    next: '다음',
    question_mark: '? ',
    testnet: 'Testnet',
    mainnet: 'Htmlcoin Mainnet',
    menu: {
      create: '새 지갑 생성',
      create_from_mnemonic: '니모닉에서 생성',
      restore_from_mnemonic: '니모닉에서 복원',
      restore_from_wif: 'WIF에서 복원',
      restore_from_mobile: '모바일 지갑에서 복원',
      restore_from_key_file: '키 파일에서 복원',
      restore_from_ledger: 'Ledger에서 복원',
      view: '지갑 정보 보기',
      dump_as_key_file: '키 파일로 덤프',
      transactions: '지갑 트랜잭션 보기',
      safe_send: '안전한 전송',
      send: '전송',
      request_payment: '지불 요청',
      create_contract: '컨트랙트 생성',
      send_to_contract: '컨트랙트 보내기',
      call_contract: '콜 컨트랙트',
      settings: '설정'
    },
    info: {
      address: '주소',
      balance: '잔액',
      unconfirmed_balance: '미확인 잔액',
      priv_key: '개인 키'
    },
    notify: {
      success: '성공',
      fail: '실패',
      copy: '복사',
      password: '패스워드',
      is_required: '필수사항',
      parse: '파싱',
      file: '파일',
      password_is_not_same_as_the_old_one: '패스워드가 이전 패스워드와 다릅니다.',
      mnemonics_are_not_same_as_the_words_should_remember: '니모닉이 기억해야 할 단어와 다릅니다.',
      mnemonics_can_not_restore: '그 니모닉은 지갑을 복원할 수 없습니다. 확인하고 다시 시도하십시오.',
      address_is_not_same_as_the_old_one: '이 주소는 이전 주소와 같지 않습니다.',
      from_address_is_not_same_as_the_wallet: '발신 주소가 지갑 주소와 다릅니다.',
      restore_wif_fail: '이 WIF에서 지갑을 복원할 수 없습니다.',
      the_key_file_is_not_a_valid_format: '키 파일이 올바른 형식이 아닙니다.',
      restore_key_file_fail: '키 파일에서 복원에 실패했습니다. 패스워드가 올바르지 않을 수 있습니다.',
      connect_ledger_fail: 'Ledger 연결 실패. Ledger를 다시 플러그인 하고 재시도하십시오.',
      token_contract_address_is_not_exists: '토큰 컨트랙트 주소가 없습니다. 확인한 후 다시 시도하십시오'
    },
    mode: {
      normal: '노멀',
      offline: '오프라인'
    }
  },
  mnemonic: {
    input_words: '단어를 입력하십시오',
    label: 'M'
  },
  password: {
    enter: '패스워드를 입력하십시오.',
    password: '패스워드'
  },
  file_reader: {
    upload: '업로드'
  },
  file_creator: {
    download: '다운로드가 시작되지 않으면이 버튼을 클릭하여 파일 다운로드를 시작하십시오. 마우스 오른쪽 버튼으로 클릭하고 "링크를 다른 이름으로 저장 ..."을 선택할 수 있습니다.'
  },
  ledger: {
    comm_fail: 'Ledger 연결 실패. Ledger를 다시 플러그인 하고 재시도하십시오.'
  },
  derive_path: {
    title: '드라이브 경로를 선택하십시오.',
    default: '기본 경로',
    add_custom: '커스텀 경로를 추가',
    edit_custom: '커스텀 경로를 수정',
    del_custom: '이 경로를 삭제 하시겠습니까?',
    path_name: '경로 이름',
    path: '경로',
    prev_10: '이전 10 Address',
    next_10: '다음 10 Address'
  },
  safe_send: {
    title: '안전한 전송',
    from_address: 'From Address',
    to_address: 'To Address',
    amount: '금액',
    fee: '수수료',
    info: '안전 전송을 완료하려면 두 대의 컴퓨터 (온라인과 오프라인 중 하나)와 제거 가능한 저장 장치가 필요합니다. 아래 팁을 따르는 경우 개인 키 누설의 위험은 없습니다. 오프라인 컴퓨터의 경우 "설정" - "모드"에서 "오프라인"을 선택한 다음 지갑을 복원하십시오.',
    info1_online: '양식을 작성한 다음 파일을 저장하고 오프라인 컴퓨터로 복사하십시오. 그리고 오프라인 컴퓨터의 2단계를 마칩니다.',
    info1_offline: '온라인 컴퓨터에서 1단계를 마치고 온라인 컴퓨터에서 파일을 복사한 다음 2단계로 이동하십시오.',
    info2_online: '오프라인 컴퓨터에서 이 단계를 완료하고 오프라인 컴퓨터에서 파일을 복사한 다음 3단계로 이동하십시오.',
    info2_offline: '온라인 컴퓨터에서 파일 복사본을 업로드하고 서명을 마친 다음 파일을 저장하고 다시 온라인 컴퓨터로 복사하십시오.',
    info3_online: '오프라인 컴퓨터에서 파일을 업로드한 다음 안전 전송을 완료하십시오.',
    info3_offline: '온라인 컴퓨터에서 이 단계를 완료하십시오.'
  },
  send: {
    send_tokens: '토큰 보내기',
    enter_address: '주소를 다시 입력하십시오 (다시 확인하십시오).',
    going_to_send: '보내겠습니다 ',
    to_address: 'to address ',
    token_address: '토큰 컨트랙트 주소'
  },
  request_payment: {
    title: '지불 요청'
  },
  create_contract: {
    title: '컨트랙트 생성',
    confirm: '이 컨트랙트를 게시하시겠습니까?',
    compiler: '컴파일러'
  },
  send_to_contract: {
    title: '컨트랙트 전송',
    confirm: '확인하셨나요?'
  },
  call_contract: {
    title: '콜 컨트랙트',
    result: '결과'
  },
  create: {
    title: '새 지갑 생성'
  },
  create_mnemonic: {
    title: '새 지갑 생성',
    remember: '다음 니모닉을 기억하십시오.',
    remembered: '나는 모든 것을 기억하였습니다'
  },
  restore: {
    title: '지갑 복원',
    mnemonic_warning: '입력한 단어는 bip39 니모닉이 아닙니다. 이 지갑에서 주소가 생성 된 경우 이 대화 상자를 취소 한 다음 단어를 확인하십시오 (공백이나 대문자가 없음). 단어를 두 번 확인했다면 계속 진행할 수 있습니다.'
  },
  restore_wif: {
    title: 'WIF에서 복원',
    priv_key: 'WIF'
  },
  restore_mobile: {
    title: '모바일 지갑에서 복원'
  },
  restore_key_file: {
    title: '키 파일에서 복원',
    password_title: '지갑을 복원하려면 패스워드를 입력하십시오'
  },
  restore_ledger: {
    title: 'Ledger에서 복원',
    usage: '펌웨어 및 응용 프로그램이 최신 버전인지 확인하십시오. 귀하의 Ledger를 플러그인하고 Html APP을 실행한 다음 아래의 "연결" 버튼을 클릭하여 연결하십시오.',
    download: 'Html APP이 없으신가요? 다음 항목을 설치하십시오 https://www.ledgerwallet.com/apps/manager',
    connect: '연결'
  },
  view: {
    title: '지갑 정보 보기'
  },
  view_tx: {
    title: '지갑 트랜잭션 보기',
    recent: '최근 10개의 트랜잭션',
    tx: 'Tx: ',
    mined_at: 'Mined at ',
    total_in: 'TOTAL IN: ',
    fee: '수수료: ',
    total_out: 'TOTAL OUT: '
  },
  dump_as_key_file: {
    title: '키 파일로 덤프',
    password_title: '지갑을 암호화하기위한 패스워드를 입력하십시오.',
    warning: '이 패스워드를 기억하십시오. 이 패스워드를 분실하면이 백업 파일을 더 이상 암호 해독 할 수 없습니다'
  },
  config: {
    title: '설정',
    lan: '언어',
    network: '네트워크',
    mode: '모드'
  },
  warning: {
    title: '경고',
    list: ['피싱 사이트를 방문하거나 백업을 상실하면 자금을 회수 할 수 없습니다. 개인 키 / 시드 단어의 백업을 유지하십시오.', '우리는 귀하의 개인 키 / 시드 단어를 웹 지갑에 저장하지 않습니다.', '귀하는 사용자로서 자신의 자금과 자신의 안전에 전적으로 책임이 있습니다.', '업데이트 된 바이러스 백신 및 운영체제를 유지하십시오.', '개인 키는 누구에게도 제공하지 마십시오.', '니모닉에서 복원을 사용하는 경우 시드 단어와 비밀번호가 정확히 맞아야하며 그렇지 않으면 지갑이 새 주소를 만듭니다. 니모닉에서 복원을 사용할 때 정확한 주소를 가지고 있는지 확인하십시오.']
  }
});

/***/ }),

/***/ "5NZv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5X/h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send.send_tokens')))])]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Address","required":""},model:{value:(_vm.address),callback:function ($$v) {_vm.address=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"address"}}),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs9":""}},[_c('v-text-field',{attrs:{"label":"Amount","required":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-select',{attrs:{"items":_vm.tokens,"bottom":""},scopedSlots:_vm._u([{key:"item",fn:function(data){return [_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                 "+_vm._s(data.item.text)+_vm._s(data.item.name ? '(' + data.item.name + ')' : '')+"\n                ")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n                 "+_vm._s(data.item.address)+"\n               ")])],1)]}}]),model:{value:(_vm.symbol),callback:function ($$v) {_vm.symbol=$$v},expression:"symbol"}})],1)],1),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=$$v},expression:"gasPrice"}}):_vm._e(),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Limit"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=$$v},expression:"gasLimit"}}):_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmAddressDialog),callback:function ($$v) {_vm.confirmAddressDialog=$$v},expression:"confirmAddressDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send.enter_address')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Address"},model:{value:(_vm.repeatAddress),callback:function ($$v) {_vm.repeatAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"repeatAddress"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddress}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmAddressDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send.going_to_send'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.amount)+_vm._s(this.symbol))]),_vm._v("\n          "+_vm._s(_vm.$t('send.to_address'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.address))]),_vm._v("\n          "+_vm._s(_vm.$t('common.question_mark'))+"\n        ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Raw Tx","multi-line":"","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.addTokenDialog),callback:function ($$v) {_vm.addTokenDialog=$$v},expression:"addTokenDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          Token\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":_vm.$t('send.token_address'),"disabled":_vm.addTokenStep === 2},model:{value:(_vm.addTokenAddress),callback:function ($$v) {_vm.addTokenAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenAddress"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Name","disabled":""},model:{value:(_vm.addTokenName),callback:function ($$v) {_vm.addTokenName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenName"}}):_vm._e()],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Symbol","disabled":""},model:{value:(_vm.addTokenSymbol),callback:function ($$v) {_vm.addTokenSymbol=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenSymbol"}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.addTokenStep === 1)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":"","loading":_vm.addTokenLoading},on:{"click":_vm.searchAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.search'))+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.addTokenStep === 2)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]):_vm._e(),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.addTokenDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5hal":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "6+u4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__("Y4FN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_locales__ = __webpack_require__("qoVm");



/* harmony default export */ __webpack_exports__["a"] = ({
  set: function set(key, value) {
    var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 86400;

    __WEBPACK_IMPORTED_MODULE_0_store___default.a.set(key, {
      value: value,
      expired_at: +new Date() + expires * 1000
    });
  },
  get: function get(key, defaultValue) {
    var temp = __WEBPACK_IMPORTED_MODULE_0_store___default.a.get(key);
    try {
      var value = temp.value;
      if (value === undefined || temp.expired_at < +new Date()) {
        return defaultValue;
      }
      return value;
    } catch (e) {
      return defaultValue;
    }
  },
  getLan: function getLan() {
    var locale = this.get('lan');
    navigator.languages.forEach(function (language) {
      if (locale === undefined && __WEBPACK_IMPORTED_MODULE_1_locales__["a" /* default */].locales.indexOf(language) !== -1) {
        locale = language;
      }
    });
    if (locale === undefined) {
      locale = 'en';
    }
    return locale;
  },
  getNetwork: function getNetwork() {
    return this.get('network', 'mainnet');
  },
  getMode: function getMode() {
    return this.get('mode', 'normal');
  }
});

/***/ }),

/***/ "6ZSt":
/***/ (function(module, exports) {

module.exports = {"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}

/***/ }),

/***/ "6dsK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contractAddress: '',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    params: function params() {
      if (this.method === null) {
        return null;
      }
      var inputs = this.parsedAbi[this.method].info.inputs;
      if (inputs.length > 0) {
        return inputs;
      }
      return null;
    },
    notValid: function notValid() {
      //@todo valid the address
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(gasPriceCheck && gasLimitCheck && feeCheck && this.method !== null);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    }
  },
  methods: {
    decodeAbi: function decodeAbi() {
      try {
        var abiJson = JSON.parse(this.abi);
        this.parsedAbi = [];
        for (var i = 0; i < abiJson.length; i++) {
          this.parsedAbi[i] = { text: abiJson[i]['name'], value: i, info: abiJson[i] };
        }
      } catch (e) {
        this.$root.log.error('send_to_contract_decode_abi_error', e.stack || e.toString() || e);
        return true;
      }
    },
    send: function send() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(_this.parsedAbi[_this.method].info, _this.inputParams).substr(2);

                _this.confirmSendDialog = true;
                _context.prev = 3;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(_this.contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 6:
                _this.rawTx = _context.sent;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);

                _this.$root.log.error('send_to_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 15:
                _this.canSend = true;
                _context.next = 25;
                break;

              case 18:
                _context.prev = 18;
                _context.t1 = _context['catch'](0);

                _this.$root.error('Params error');
                alert(_context.t1.message || _context.t1);
                _this.$root.log.error('send_to_contract_encode_abi_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 18], [3, 9]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                _this2.$root.success('Successful send. You can view at ' + __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId));
                _this2.$emit('send');
                _context2.next = 16;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_to_contract_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "6gBg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__ = __webpack_require__("cDYc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_PasswordCreate__ = __webpack_require__("iwj8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      step: 1,
      passwordRequired: false,
      inputPassword: '',
      words: [],
      wallet: false
    };
  },

  props: ['view'],
  watch: {
    view: function view() {
      this.step = 1;
    }
  },
  components: {
    password: __WEBPACK_IMPORTED_MODULE_1_components_PasswordCreate__["a" /* default */],
    mnemonic: __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__["a" /* default */]
  },
  methods: {
    setPassword: function setPassword(password) {
      if (this.step === 2) {
        this.passwordRequired = false;
        this.step = 3;
        this.inputPassword = password;
        var _mnemonic = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].generateMnemonic();
        this.wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].restoreFromMnemonic(_mnemonic, password);
        this.words = _mnemonic.split(' ');
      } else if (this.step === 4) {
        if (this.inputPassword !== password) {
          this.$root.error('password_is_not_same_as_the_old_one');
          return false;
        }
        this.passwordRequired = false;
        this.step = 5;
      }
    },
    createWallet: function createWallet() {
      this.step = 2;
      this.passwordRequired = true;
    },
    checkWallet: function checkWallet() {
      this.step = 4;
      this.passwordRequired = true;
    },
    validateMnemonic: function validateMnemonic(mnemonic) {
      if (!this.wallet.validateMnemonic(mnemonic, this.inputPassword)) {
        this.$root.error('mnemonics_are_not_same_as_the_words_should_remember');
        return false;
      }
      this.$emit('created');
    }
  }
});

/***/ }),

/***/ "72kf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aes256__ = __webpack_require__("W9fM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aes256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_aes256__);



var VERSION = '0.1';

function parse(str) {
    try {
        var res = JSON.parse(str);
        if (res.version !== VERSION) {
            return null;
        }
        return res.content;
    } catch (e) {
        return null;
    }
}

function decode(content, password) {
    return __WEBPACK_IMPORTED_MODULE_1_aes256___default.a.decrypt(password + VERSION, content);
}

function build(content) {
    var res = {
        version: VERSION,
        content: content
    };
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res);
}

function encode(content, password) {
    return __WEBPACK_IMPORTED_MODULE_1_aes256___default.a.encrypt(password + VERSION, content);
}

/* harmony default export */ __webpack_exports__["a"] = ({
    parse: parse,
    decode: decode,
    build: build,
    encode: encode
});

/***/ }),

/***/ "7zck":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "86EO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SafeSend_vue__ = __webpack_require__("dHmf");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12135bfc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SafeSend_vue__ = __webpack_require__("GBQW");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SafeSend_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12135bfc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SafeSend_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "8DkI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('create_mnemonic.title')))])]),_vm._v(" "),([3, 5].includes(_vm.step))?_c('v-card-text',[(_vm.step === 3)?[_c('p',[_vm._v(_vm._s(_vm.$t('create_mnemonic.remember')))]),_vm._v(" "),_c('div',_vm._l((_vm.words),function(word,index){return _c('v-chip',{key:index,attrs:{"label":""}},[_vm._v(_vm._s(word))])}))]:(_vm.step === 5)?[_c('mnemonic',{on:{"mnemonic":_vm.validateMnemonic}})]:_vm._e()],2):_vm._e(),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.step === 1)?_c('v-btn',{attrs:{"color":"error","dark":""},on:{"click":_vm.createWallet}},[_vm._v(_vm._s(_vm.$t('create_mnemonic.title')))]):_vm._e(),_vm._v(" "),(_vm.step === 3)?_c('v-btn',{attrs:{"color":"info","dark":""},on:{"click":_vm.checkWallet}},[_vm._v(_vm._s(_vm.$t('create_mnemonic.remembered')))]):_vm._e()],1),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired},on:{"password":_vm.setPassword}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "8YCc":
/***/ (function(module, exports) {

module.exports = {"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}

/***/ }),

/***/ "8kY9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__("3EgV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__ = __webpack_require__("7zck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a, {});

/***/ }),

/***/ "8x3+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('view.title')))]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":""},on:{"click":_vm.refreshWallet},slot:"activator"},[_c('v-icon',{attrs:{"large":"","color":"blue accent-4"}},[_vm._v("\n\t  refresh\n\t  ")])],1),_vm._v(" "),_c('span',[_vm._v("Refresh")])],1),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card-text',[_vm._l((_vm.infoLabel),function(item,i){return _c('v-layout',{key:i},[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            "+_vm._s(_vm.$t('common.info.' + item.label))+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"outline":"","readonly":"","single-line":""},model:{value:(_vm.info[item.name]),callback:function ($$v) {_vm.$set(_vm.info, item.name, $$v)},expression:"info[item.name]"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[(item.copy)?_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.info[item.name]),expression:"info[item.name]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n            "+_vm._s(_vm.$t('common.copy'))+"\n          ")]):_vm._e()],1)],1)}),_vm._v(" "),(_vm.privKey !== null)?_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            "+_vm._s(_vm.$t('common.info.priv_key'))+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"outline":"","readonly":"","single-line":"","type":_vm.showPriv ? 'text' : 'password',"append-icon":_vm.showPriv ? 'visibility_off' : 'visibility'},on:{"click:append":function($event){_vm.showPriv = !_vm.showPriv}},model:{value:(_vm.privKey),callback:function ($$v) {_vm.privKey=$$v},expression:"privKey"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPriv),expression:"showPriv"},{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.privKey),expression:"privKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n            "+_vm._s(_vm.$t('common.copy'))+"\n          ")])],1)],1):_vm._e(),_vm._v(" "),(_vm.wallet.info.hrc20.length > 0)?_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            HRC20 Tokens\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},_vm._l((_vm.wallet.info.hrc20),function(token,i){return _c('v-card',{key:i,staticStyle:{"border-bottom":"2px solid #000","padding":"15px 10px"},attrs:{"flat":"","tile":"","dark":"","color":'light-blue darken-'+(i%2+3)}},[_c('v-layout',[_c('v-flex',{attrs:{"xs5":""}},[_vm._v(_vm._s(token.contract.name))]),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_vm._v(_vm._s(token.amount / Math.pow(10, token.contract.decimals))+" "+_vm._s(token.contract.symbol))]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{class:_vm.caption},[_vm._v(_vm._s(token.contract.contract_address))])])],1)],1)}))],1):_vm._e()],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "90T0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/crypticmag_splash.56dfe42.jpg";

/***/ }),

/***/ "90rt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_FileReader__ = __webpack_require__("poAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Password__ = __webpack_require__("G+K8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_keyfile__ = __webpack_require__("72kf");
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      passwordRequired: false,
      content: ''
    };
  },

  components: {
    fileReader: __WEBPACK_IMPORTED_MODULE_0_components_FileReader__["a" /* default */],
    password: __WEBPACK_IMPORTED_MODULE_1_components_Password__["a" /* default */]
  },
  methods: {
    parseKeyFile: function parseKeyFile(upload) {
      var content = __WEBPACK_IMPORTED_MODULE_3_libs_keyfile__["a" /* default */].parse(upload.content);
      if (content) {
        this.passwordRequired = true;
        this.content = content;
      } else {
        this.$root.error('the_key_file_is_not_a_valid_format');
      }
    },
    inputed: function inputed(password) {
      this.passwordRequired = false;
      try {
        __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].restoreFromWif(__WEBPACK_IMPORTED_MODULE_3_libs_keyfile__["a" /* default */].decode(this.content, password));
      } catch (e) {
        this.$root.error('restore_key_file_fail');
        this.$root.log.error('restore_key_file_restore_wif_error', e.stack || e.toString() || e);
        return false;
      }
      this.$emit('restored');
    }
  }
});

/***/ }),

/***/ "9DK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_AltProof_vue__ = __webpack_require__("Aism");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_300536d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_AltProof_vue__ = __webpack_require__("H0w2");
function injectStyle (ssrContext) {
  __webpack_require__("E3Xr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_AltProof_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_300536d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_AltProof_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "9H6G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RequestPayment_vue__ = __webpack_require__("qvsf");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af5f1428_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RequestPayment_vue__ = __webpack_require__("Qi/x");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RequestPayment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_af5f1428_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RequestPayment_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "9SIY":
/***/ (function(module, exports) {

module.exports = ["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"]

/***/ }),

/***/ "9WOO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9Z0V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Send_vue__ = __webpack_require__("L5P4");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa3e28b2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Send_vue__ = __webpack_require__("5X/h");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Send_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_aa3e28b2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Send_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "9rcu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__ = __webpack_require__("LbyV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc__ = __webpack_require__("4sqG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f__ = __webpack_require__("lajm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js__ = __webpack_require__("uotZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_safe_buffer__ = __webpack_require__("X3l8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_safe_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_safe_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qtum_opcodes__ = __webpack_require__("b4MT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qtum_opcodes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_qtum_opcodes__);











var Buffer = __WEBPACK_IMPORTED_MODULE_8_safe_buffer___default.a.Buffer;

function number2Buffer(num) {
  var buffer = [];
  var neg = num < 0;
  num = Math.abs(num);
  while (num) {
    buffer[buffer.length] = num & 0xff;
    num = num >> 8;
  }

  var top = buffer[buffer.length - 1];
  if (top & 0x80) {
    buffer[buffer.length] = neg ? 0x80 : 0x00;
  } else if (neg) {
    buffer[buffer.length - 1] = top | 0x80;
  }
  return Buffer.from(buffer);
}

function hex2Buffer(hexString) {
  var buffer = [];
  for (var i = 0; i < hexString.length; i += 2) {
    buffer[buffer.length] = parseInt(hexString[i], 16) << 4 | parseInt(hexString[i + 1], 16);
  }
  return Buffer.from(buffer);
}

var Ledger = function () {
  function Ledger(app) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Ledger);

    this.htmlcoin = app;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Ledger, null, [{
    key: 'connect',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var htmlcoin, pubkeyRes;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = __WEBPACK_IMPORTED_MODULE_5__ledgerhq_hw_app_btc___default.a;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_6__ledgerhq_hw_transport_u2f___default.a.create();

              case 3:
                _context.t1 = _context.sent;
                htmlcoin = new _context.t0(_context.t1);
                _context.next = 7;
                return htmlcoin.getWalletPublicKey(Ledger.defaultPath);

              case 7:
                pubkeyRes = _context.sent;

                if (!(pubkeyRes.bitcoinAddress[0] !== 'H')) {
                  _context.next = 10;
                  break;
                }

                throw 'Not HTML App';

              case 10:
                return _context.abrupt('return', new Ledger(htmlcoin));

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connect() {
        return _ref.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: 'generateTx',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(keyPair, ledger, path, from, to, amount, fee, utxoList) {
        var rawTxFetchFunc = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : function () {};
        var amountSat, feeSat, pubkeyRes, totalSelectSat, inputs, paths, selectUtxo, rawTxCache, i, item, outputs, changeSat, outputsScript;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                amountSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(amount).times(1e8);
                feeSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(fee).times(1e8);
                _context2.next = 4;
                return ledger.htmlcoin.getWalletPublicKey(path);

              case 4:
                pubkeyRes = _context2.sent;

                if (!(pubkeyRes.bitcoinAddress !== from)) {
                  _context2.next = 7;
                  break;
                }

                throw 'Ledger can not restore the source address, please plugin the correct ledger';

              case 7:
                totalSelectSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(0);
                inputs = [];
                paths = [];
                selectUtxo = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.selectTxs(utxoList, amount, fee);
                rawTxCache = {};
                i = 0;

              case 13:
                if (!(i < selectUtxo.length)) {
                  _context2.next = 31;
                  break;
                }

                item = selectUtxo[i];

                if (rawTxCache[item.hash]) {
                  _context2.next = 19;
                  break;
                }

                _context2.next = 18;
                return rawTxFetchFunc(item.hash);

              case 18:
                rawTxCache[item.hash] = _context2.sent;

              case 19:
                paths.push(path);
                totalSelectSat = totalSelectSat.plus(item.value);
                _context2.t0 = inputs;
                _context2.next = 24;
                return ledger.htmlcoin.splitTransaction(rawTxCache[item.hash]);

              case 24:
                _context2.t1 = _context2.sent;
                _context2.t2 = item.pos;
                _context2.t3 = [_context2.t1, _context2.t2];

                _context2.t0.push.call(_context2.t0, _context2.t3);

              case 28:
                i++;
                _context2.next = 13;
                break;

              case 31:
                outputs = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.TransactionBuilder(keyPair.network);

                outputs.addOutput(to, amountSat.toNumber());
                changeSat = totalSelectSat.minus(amountSat).minus(feeSat);

                outputs.addOutput(from, changeSat.toNumber());
                outputsScript = outputs.buildIncomplete().toHex().slice(10, -8);
                _context2.next = 38;
                return ledger.htmlcoin.createPaymentTransactionNew(inputs, paths, undefined, outputsScript);

              case 38:
                return _context2.abrupt('return', _context2.sent);

              case 39:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function generateTx(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _ref2.apply(this, arguments);
      }

      return generateTx;
    }()
  }, {
    key: 'generateSendToContractTx',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(keyPair, ledger, path, from, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList) {
        var rawTxFetchFunc = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : function () {};
        var pubkeyRes, amount, amountSat, feeSat, totalSelectSat, inputs, paths, selectUtxo, rawTxCache, i, item, outputs, contract, changeSat, outputsScript;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return ledger.htmlcoin.getWalletPublicKey(path);

              case 2:
                pubkeyRes = _context3.sent;

                if (!(pubkeyRes.bitcoinAddress !== from)) {
                  _context3.next = 5;
                  break;
                }

                throw 'Ledger can not restore the source address, please plugin the correct ledger';

              case 5:
                amount = 0;
                amountSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(amount).times(1e8);

                fee = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(gasLimit).times(gasPrice).div(1e8).add(fee).toNumber();
                feeSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(fee).times(1e8);
                totalSelectSat = new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(0);
                inputs = [];
                paths = [];
                selectUtxo = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.selectTxs(utxoList, amount, fee);
                rawTxCache = {};
                i = 0;

              case 15:
                if (!(i < selectUtxo.length)) {
                  _context3.next = 33;
                  break;
                }

                item = selectUtxo[i];

                if (rawTxCache[item.hash]) {
                  _context3.next = 21;
                  break;
                }

                _context3.next = 20;
                return rawTxFetchFunc(item.hash);

              case 20:
                rawTxCache[item.hash] = _context3.sent;

              case 21:
                paths.push(path);
                totalSelectSat = totalSelectSat.plus(item.value);
                _context3.t0 = inputs;
                _context3.next = 26;
                return ledger.htmlcoin.splitTransaction(rawTxCache[item.hash]);

              case 26:
                _context3.t1 = _context3.sent;
                _context3.t2 = item.pos;
                _context3.t3 = [_context3.t1, _context3.t2];

                _context3.t0.push.call(_context3.t0, _context3.t3);

              case 30:
                i++;
                _context3.next = 15;
                break;

              case 33:
                outputs = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.TransactionBuilder(keyPair.network);
                contract = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.script.compile([__WEBPACK_IMPORTED_MODULE_9_qtum_opcodes___default.a.OP_4, number2Buffer(gasLimit), number2Buffer(gasPrice), hex2Buffer(encodedData), hex2Buffer(contractAddress), __WEBPACK_IMPORTED_MODULE_9_qtum_opcodes___default.a.OP_CALL]);

                outputs.addOutput(contract, 0);
                changeSat = totalSelectSat.minus(amountSat).minus(feeSat);

                outputs.addOutput(from, changeSat.toNumber());
                outputsScript = outputs.buildIncomplete().toHex().slice(10, -8);
                _context3.next = 41;
                return ledger.htmlcoin.createPaymentTransactionNew(inputs, paths, undefined, outputsScript);

              case 41:
                return _context3.abrupt('return', _context3.sent);

              case 42:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function generateSendToContractTx(_x10, _x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19) {
        return _ref3.apply(this, arguments);
      }

      return generateSendToContractTx;
    }()
  }, {
    key: 'defaultPath',
    get: function get() {
      return "m/44'/88'/0'/0";
    }
  }]);

  return Ledger;
}();

/* harmony default export */ __webpack_exports__["a"] = (Ledger);

/***/ }),

/***/ "AWyr":
/***/ (function(module, exports) {

module.exports = ["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","académie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acquérir","acronyme","acteur","actif","actuel","adepte","adéquat","adhésif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","aérer","aéronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agréable","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","algèbre","algue","aliéner","aliment","alléger","alliage","allouer","allumer","alourdir","alpaga","altesse","alvéole","amateur","ambigu","ambre","aménager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","anéantir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","apéritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","artériel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannière","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","bélier","belote","bénéfice","berceau","berger","berline","bermuda","besace","besogne","bétail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","brèche","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","caféine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","caméra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","cédille","ceinture","céleste","cellule","cendrier","censurer","central","cercle","cérébral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","chéquier","chercher","cheval","chien","chiffre","chignon","chimère","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cinéma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohésion","coiffer","coincer","colère","colibri","colline","colmater","colonel","combat","comédie","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","cortège","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","créature","créditer","crémeux","creuser","crevette","cribler","crier","cristal","critère","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuillère","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","débattre","débiter","déborder","débrider","débutant","décaler","décembre","déchirer","décider","déclarer","décorer","décrire","décupler","dédale","déductif","déesse","défensif","défiler","défrayer","dégager","dégivrer","déglutir","dégrafer","déjeuner","délice","déloger","demander","demeurer","démolir","dénicher","dénouer","dentelle","dénuder","départ","dépenser","déphaser","déplacer","déposer","déranger","dérober","désastre","descente","désert","désigner","désobéir","dessiner","destrier","détacher","détester","détourer","détresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","différer","digérer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","éblouir","écarter","écharpe","échelle","éclairer","éclipse","éclore","écluse","école","économie","écorce","écouter","écraser","écrémer","écrivain","écrou","écume","écureuil","édifier","éduquer","effacer","effectif","effigie","effort","effrayer","effusion","égaliser","égarer","éjecter","élaborer","élargir","électron","élégant","éléphant","élève","éligible","élitisme","éloge","élucider","éluder","emballer","embellir","embryon","émeraude","émission","emmener","émotion","émouvoir","empereur","employer","emporter","emprise","émulsion","encadrer","enchère","enclave","encoche","endiguer","endosser","endroit","enduire","énergie","enfance","enfermer","enfouir","engager","engin","englober","énigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","énumérer","envahir","enviable","envoyer","enzyme","éolien","épaissir","épargne","épatant","épaule","épicerie","épidémie","épier","épilogue","épine","épisode","épitaphe","époque","épreuve","éprouver","épuisant","équerre","équipe","ériger","érosion","erreur","éruption","escalier","espadon","espèce","espiègle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","étagère","étaler","étanche","étatique","éteindre","étendoir","éternel","éthanol","éthique","ethnie","étirer","étoffer","étoile","étonnant","étourdir","étrange","étroit","étude","euphorie","évaluer","évasion","éventail","évidence","éviter","évolutif","évoquer","exact","exagérer","exaucer","exceller","excitant","exclusif","excuse","exécuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expédier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fébrile","féconder","fédérer","félin","femme","fémur","fendoir","féodal","fermer","féroce","ferveur","festival","feuille","feutre","février","fiasco","ficeler","fictif","fidèle","figure","filature","filetage","filière","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fléau","flèche","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fougère","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","frégate","freiner","frelon","frémir","frénésie","frère","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","géant","gélatine","gélule","gendarme","général","génie","genou","gentil","géologie","géomètre","géranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruyère","guépard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","hélium","hématome","herbe","hérisson","hermine","héron","hésiter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homogène","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygiène","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impérial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","inédit","ineptie","inexact","infini","infliger","informer","infusion","ingérer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irréel","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juvénile","kayak","kimono","kiosque","label","labial","labourer","lacérer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","légal","léger","légume","lessive","lettre","levier","lexique","lézard","liasse","libérer","libre","licence","licorne","liège","lièvre","ligature","ligoter","ligue","limer","limite","limonade","limpide","linéaire","lingot","lionceau","liquide","lisière","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumière","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","maléfice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","matériel","matière","matraque","maudire","maussade","mauve","maximal","méchant","méconnu","médaille","médecin","méditer","méduse","meilleur","mélange","mélodie","membre","mémoire","menacer","mener","menhir","mensonge","mentor","mercredi","mérite","merle","messager","mesure","métal","météore","méthode","métier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","minéral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","murène","murmure","muscle","muséum","musicien","mutation","muter","mutuel","myriade","myrtille","mystère","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","nébuleux","nectar","néfaste","négation","négliger","négocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","numéro","nuptial","nuque","nutritif","obéir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","océan","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","onéreux","onirique","opale","opaque","opérer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxygène","ozone","paisible","palace","palmarès","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","pastèque","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pélican","pelle","pelouse","peluche","pendule","pénétrer","pénible","pensif","pénurie","pépite","péplum","perdrix","perforer","période","permuter","perplexe","persil","perte","peser","pétale","petit","pétrir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pièce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poésie","poète","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","pondérer","poney","portique","position","posséder","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","précieux","prédire","préfixe","prélude","prénom","présence","prétexte","prévoir","primitif","prince","prison","priver","problème","procéder","prodige","profond","progrès","proie","projeter","prologue","promener","propre","prospère","protéger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quiétude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","réactif","réagir","réaliser","réanimer","recevoir","réciter","réclamer","récolter","recruter","reculer","recycler","rédiger","redouter","refaire","réflexe","réformer","refrain","refuge","régalien","région","réglage","régulier","réitérer","rejeter","rejouer","relatif","relever","relief","remarque","remède","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","réserve","résineux","résoudre","respect","rester","résultat","rétablir","retenir","réticule","retomber","retracer","réunion","réussir","revanche","revivre","révolte","révulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivière","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","scélérat","scénario","sceptre","schéma","science","scinder","score","scrutin","sculpter","séance","sécable","sécher","secouer","sécréter","sédatif","séduire","seigneur","séjour","sélectif","semaine","sembler","semence","séminal","sénateur","sensible","sentence","séparer","séquence","serein","sergent","sérieux","serrure","sérum","service","sésame","sévir","sevrage","sextuple","sidéral","siècle","siéger","siffler","sigle","signal","silence","silicium","simple","sincère","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spécial","sphère","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succès","sucre","suffixe","suggérer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","symétrie","synapse","syntaxe","système","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","témoin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","tétine","texte","thème","théorie","thérapie","thorax","tibia","tiède","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tolérant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","trèfle","tremper","trésor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","végétal","véhicule","veinard","véloce","vendredi","vénérer","venger","venimeux","ventouse","verdure","vérin","vernir","verrou","verser","vertu","veston","vétéran","vétuste","vexant","vexer","viaduc","viande","victoire","vidange","vidéo","vignette","vigueur","vilain","village","vinaigre","violon","vipère","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xénon","yacht","zèbre","zénith","zeste","zoologie"]

/***/ }),

/***/ "Af8B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreKeyFile_vue__ = __webpack_require__("90rt");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f9e0706_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreKeyFile_vue__ = __webpack_require__("ILUG");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreKeyFile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f9e0706_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreKeyFile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Aism":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__("//Fk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_js_sha256__ = __webpack_require__("BUS2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_js_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qrcode__ = __webpack_require__("71e1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_libs_config__ = __webpack_require__("6+u4");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var abiJson = JSON.parse('[{"constant":true,"inputs":[{"name":"hash","type":"string"}],"name":"getDocument","outputs":[{"name":"stored","type":"bool"},{"name":"blockNumber","type":"uint256"},{"name":"blockTimestamp","type":"uint256"},{"name":"sender","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"}],"name":"newDocument","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"blockNumber","type":"uint256"},{"indexed":false,"name":"hash","type":"string"}],"name":"DocumentEvent","type":"event"}]');

var contractAddress = __WEBPACK_IMPORTED_MODULE_8_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "5034f90f0fae1f0ab3c8f5385b556b65308cd8ac" : "73ff16a4066702fb58ac775427b5aae905b2ab1e";

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loading: false,
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
      qr: "",
      file: null,
      fileName: "",
      fileSize: "",
      text: "",
      loadStatus: 0,
      blockNumber: 0,
      blockTimestamp: 0,
      fileNameSearch: "",
      textSearch: "",
      active: null
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;

      var hashID = this.hashID !== "";

      return !(gasPriceCheck && gasLimitCheck && feeCheck && hashID);
    },
    isFile: function isFile() {
      return this.fileName !== "";
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    }
  },
  methods: {
    send: function send() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_4_ethjs_abi___default.a.encodeMethod(abiJson[1], [_this.hashID]).substr(2);


                _this.confirmSendDialog = true;
                _context.prev = 3;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 6:
                _this.rawTx = _context.sent;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);

                _this.$root.log.error("send_to_generate_tx_error", _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt("return", false);

              case 15:
                _this.canSend = true;
                _context.next = 24;
                break;

              case 18:
                _context.prev = 18;
                _context.t1 = _context["catch"](0);

                _this.$root.error("Params error");
                _this.$root.log.error("send_to_contract_encode_abi_error", _context.t1.stack || _context.t1.toString() || _context.t1);
                _this.confirmSendDialog = false;
                return _context.abrupt("return", false);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 18], [3, 9]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_5_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this2.$root.success("Successful sent! You can follow the transaction on <a href=\"" + txViewUrl + "\" target=\"_blank\">" + txViewUrl + "</a>", true, 0);
                _this2.$emit("send");
                _this2.removeFile();

                _this2.text = "";
                _context2.next = 19;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error("send_to_contract_post_raw_tx_error", _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 14]]);
      }))();
    },
    getDocument: function getDocument() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var encodedData, encodedResult, decodedResult, stored;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.searchHashID != "")) {
                  _context3.next = 29;
                  break;
                }

                _this3.loading = true;
                _context3.prev = 2;
                encodedData = __WEBPACK_IMPORTED_MODULE_4_ethjs_abi___default.a.encodeMethod(abiJson[0], [_this3.searchHashID]).substr(2);
                _context3.prev = 4;
                _context3.next = 7;
                return __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__["a" /* default */].getWallet().callContract(contractAddress, encodedData);

              case 7:
                encodedResult = _context3.sent;

                encodedResult = "0x" + encodedResult;
                decodedResult = __WEBPACK_IMPORTED_MODULE_4_ethjs_abi___default.a.decodeMethod(abiJson[0], encodedResult);
                stored = decodedResult[0];


                _this3.loading = false;

                if (stored) {
                  _this3.blockNumber = decodedResult[1].words[0];
                  _this3.blockTimestamp = new Date(parseInt(decodedResult[2]) * 1000).toUTCString();
                  _this3.execResultDialog = true;
                  _this3.drawQrCode();
                } else {
                  alert("Record not found!");
                }
                _context3.next = 21;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](4);

                _this3.loading = false;
                _this3.$root.log.error("call_contract_call_contract_error", _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                alert(_context3.t0.message || _context3.t0);
                _this3.execResultDialog = false;

              case 21:
                _context3.next = 29;
                break;

              case 23:
                _context3.prev = 23;
                _context3.t1 = _context3["catch"](2);

                _this3.loading = false;
                _this3.$root.error("Params error");
                _this3.$root.log.error("call_contract_encode_abi_error", _context3.t1.stack || _context3.t1.toString() || _context3.t1);
                return _context3.abrupt("return", false);

              case 29:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[2, 23], [4, 15]]);
      }))();
    },

    onCopySucc: function onCopySucc() {
      this.$root.success("copy success");
    },
    onCopyError: function onCopyError() {
      this.$root.error("copy fail");
    },
    drawQrCode: function drawQrCode() {
      var _this4 = this;

      __WEBPACK_IMPORTED_MODULE_7_qrcode___default.a.toDataURL("" + this.searchHashID, function (err, url) {
        _this4.qr = url;
      });
    },
    uploadFile: function uploadFile() {
      var _this5 = this;

      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var file, fileBinaryString;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                _this5.active === 1 ? _this5.hashID = "" : _this5.searchHashID = "";

                file = event.target.files[0];

                if (!(typeof file === 'undefined')) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:

                _this5.textSearch = "";
                _this5.text = "";

                if (!(file.size > 1024 * 1024 * 500)) {
                  _context4.next = 9;
                  break;
                }

                throw new Error("The max size of the file should have 500 MegaBytes! \"File name: " + file.name + " - Size: " + _this5.formatSize(file.size) + "\"");

              case 9:

                _this5.fileSize = _this5.formatSize(file.size);

                _context4.next = 12;
                return _this5.fileReader(file);

              case 12:
                fileBinaryString = _context4.sent;

                _this5.parseHash(fileBinaryString);

                _this5.fileName = file.name;

                _this5.fileInfo = "File name: " + file.name + " - File hash: " + _this5.hashID;

                _context4.next = 22;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](0);

                _this5.$root.error(_context4.t0.message);
                _this5.$root.log.error("call_contract_encode_abi_error", _context4.t0.stack || _context4.t0.toString() || _context4.t0);

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this5, [[0, 18]]);
      }))();
    },
    fileReader: function fileReader(file) {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                  var reader = new FileReader();

                  reader.onprogress = function (_ref) {
                    var loaded = _ref.loaded,
                        total = _ref.total,
                        lengthComputable = _ref.lengthComputable;

                    if (lengthComputable) _this6.loadStatus = (loaded / total * 100).toFixed(2);
                  };

                  reader.onload = function () {
                    resolve(reader.result);
                  };

                  reader.onerror = reject;

                  try {
                    reader.readAsDataURL(file);
                  } catch (err) {
                    reject(err);
                  }
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this6);
      }))();
    },
    formatSize: function formatSize(size) {
      var sizeTemp = size;
      var cont = 0;

      while (sizeTemp > 1024 && cont < 4) {
        sizeTemp /= 1024;
        cont++;
      }

      switch (cont) {
        case 0:
          return sizeTemp.toFixed(2) + " Bytes";
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
    reprocessHash: function reprocessHash() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(_this7.file && _this7.text === "")) {
                  _context6.next = 5;
                  break;
                }

                _context6.next = 3;
                return _this7.uploadFile();

              case 3:
                _context6.next = 6;
                break;

              case 5:
                if (_this7.text && _this7.file === null) _this7.textHash();

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, _this7);
      }))();
    },
    parseHash: function parseHash(hash) {
      if (this.active === 1) this.hashID = hash !== "" ? __WEBPACK_IMPORTED_MODULE_6_js_sha256___default()(hash) : "";else this.searchHashID = hash !== "" ? __WEBPACK_IMPORTED_MODULE_6_js_sha256___default()(hash) : "";
    },
    textHash: function textHash() {
      this.parseHash(this.text);
    },
    removeFile: function removeFile() {
      this.fileName = "";
      this.fileSize = "";
      this.hashID = "";
      this.loadStatus = 0;
      this.$refs.file.value = null;
    },
    textHashSearch: function textHashSearch() {
      this.parseHash(this.textSearch);
    },
    reset: function reset() {
      this.removeFile();
      this.textSearch = "";
      this.searchHashID = "";
    },
    removeFileSearch: function removeFileSearch() {
      this.searchHashID = "";
      this.fileName = "";
      this.loadStatus = 0;
      this.$refs.fileSearch.value = null;
    }
  }
});

/***/ }),

/***/ "AySs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_View_vue__ = __webpack_require__("KuJL");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78804bda_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__ = __webpack_require__("8x3+");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_View_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78804bda_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "B1zG":
/***/ (function(module, exports) {

module.exports = {"mainnet":[{"name":"HTMLBunker","symbol":"BUNK","address":"6e7c1636f021563e0c95b134f55c3d48c63d5051","decimals":"8","total_supply":"33000000"},{"name":"XOLA","symbol":"XOLA","address":"567190cb97dfe363342fcf178e52d67040388dad","decimals":"8","total_supply":"10000011505.34809532"},{"name":"CrypticMAG","symbol":"MAG","address":"8ef863bce3568898f293596b4638d00876bada86","decimals":"8","total_supply":"314159265"},{"name":"ROY","symbol":"ROY","address":"aff123aab8e8e2f02ed07e366b18e9a5f2479d32","decimals":"8","total_supply":"700000000"},{"name":"Auto Sales Wear","symbol":"ASW","address":"71c2d38b323aa33528cf5589de7cf4ceb9bd7125","decimals":"8","total_supply":"100000000"},{"name":"Biffy Diamond","symbol":"BIFD","address":"e659893bc750173b626d53a94b3f728b09742733","decimals":"8","total_supply":"10000000000"},{"name":"MyTeenCoin","symbol":"TEEN","address":"8ced6e2d3beafcb5d0696d3651faf2a6cd68263a","decimals":"8","total_supply":"13500000000"},{"name":"Connections By Design","symbol":"CBD","address":"1dd107453be5f5b97ce861d896269407a4e8ec21","decimals":"8","total_supply":"250000000"},{"name":"NEWS Token Pool","symbol":"NETP","address":"e08e0dafd1efef65b8dc9c139dfd54ca409c740e","decimals":"8","total_supply":"31375000"},{"name":"GAMES","symbol":"GAMES","address":"9a4e8fe4f7d83fa52002e40c5792ca260847c323","decimals":"8","total_supply":"80189296250"},{"name":"CSS","symbol":"CSS","address":"e2f2be4bd96b331fe524455c4b81bd125653bbc0","decimals":"8","total_supply":"333333333"}],"testnet":[]}

/***/ }),

/***/ "BFiv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BIpY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('dump_as_key_file.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-alert',{attrs:{"color":"error","value":"true"}},[_vm._v(_vm._s(_vm.$t('dump_as_key_file.warning')))]),_vm._v(" "),(_vm.fileStr)?_c('file-creator',{attrs:{"color":"green","href":_vm.fileStr}}):_vm._e(),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired,"notEmpty":"true","title":"dump_as_key_file.password_title"},on:{"password":_vm.inputed}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "CABZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('restore_mobile.title')))])]),_vm._v(" "),_c('v-card-text',[_c('mnemonic',{directives:[{name:"show",rawName:"v-show",value:(this.restored === false),expression:"this.restored === false"}],on:{"mnemonic":_vm.restore}}),_vm._v(" "),(this.restored)?_c('v-data-table',{attrs:{"headers":_vm.headers,"items":_vm.walletList,"no-data-text":"Loading","hide-actions":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_vm._v(_vm._s(props.item.wallet.getAddress()))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.wallet.info.balance))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_c('v-btn',{attrs:{"color":"success"},on:{"click":function($event){_vm.choose(props.item.path)}}},[_vm._v("\n            Choose\n          ")])],1)]}}])}):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "CR93":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "DMj2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "E3Xr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EGFZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contractAddress: '',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      execResultDialog: false,
      result: 'loading...'
    };
  },

  computed: {
    params: function params() {
      if (this.method === null) {
        return null;
      }
      var inputs = this.parsedAbi[this.method].info.inputs;
      if (inputs.length > 0) {
        return inputs;
      }
      return null;
    },
    notValid: function notValid() {
      //@todo valid the address
      return !(this.method !== null);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    }
  },
  methods: {
    decodeAbi: function decodeAbi() {
      try {
        var abiJson = JSON.parse(this.abi);
        this.parsedAbi = [];
        for (var i = 0; i < abiJson.length; i++) {
          this.parsedAbi[i] = { text: abiJson[i]['name'], value: i, info: abiJson[i] };
        }
      } catch (e) {
        this.$root.log.error('call_contract_decode_abi_error', e.stack || e.toString() || e);
        return true;
      }
    },
    callTo: function callTo() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(_this.parsedAbi[_this.method].info, _this.inputParams).substr(2);

                _this.execResultDialog = true;
                _context.prev = 3;
                _context.next = 6;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(_this.contractAddress, encodedData);

              case 6:
                _this.result = _context.sent;
                _context.next = 14;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](3);

                _this.$root.log.error('call_contract_call_contract_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.execResultDialog = false;

              case 14:
                _context.next = 21;
                break;

              case 16:
                _context.prev = 16;
                _context.t1 = _context['catch'](0);

                _this.$root.error('Params error');
                _this.$root.log.error('call_contract_encode_abi_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                return _context.abrupt('return', false);

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 16], [3, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "EUbi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('view_tx.title')))])]),_vm._v(" "),_c('v-card-text',[_c('p',[_vm._v(_vm._s(_vm.$t('view_tx.recent')))]),_vm._v(" "),_vm._l((_vm.txList.txs),function(tx,id){return _c('div',{key:id},[_c('v-layout',{staticStyle:{"border-bottom":"1px dashed"}},[_c('v-flex',{attrs:{"xs10":""}},[_vm._v("\n          "+_vm._s(_vm.$t('view_tx.tx'))+"\n          "),_c('v-btn',{attrs:{"small":"","light":"","href":_vm.node.getTxExplorerUrl(tx.txid),"target":"_blank"}},[_vm._v("\n            "+_vm._s(tx.txid)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_vm._v("\n          "+_vm._s(_vm.$t('view_tx.mined_at'))+_vm._s(new Date(tx.time * 1000).toString())+"\n        ")])],1),_vm._v(" "),_c('v-layout',{staticStyle:{"border-bottom":"1px dashed"}},[_c('v-flex',{attrs:{"xs3":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : '',staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[_vm._v("\n            "+_vm._s(vtx.addr)+"\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":"","text-xs-right":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : ''},[_vm._v("\n            "+_vm._s(vtx.value)+"\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : ''},[_vm._v("\n             HTML\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},[_vm._v("\n          =>\n        ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : '',staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              "+_vm._s(vtx.scriptPubKey.addresses.join(' '))+"\n            ")]:_vm._e()],2)})),_vm._v(" "),_c('v-flex',{attrs:{"xs2":"","text-xs-right":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : ''},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              "+_vm._s(vtx.value)+"\n            ")]:_vm._e()],2)})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : ''},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              HTML\n            ")]:_vm._e()],2)}))],1),_vm._v(" "),_c('v-layout',{staticStyle:{"border-bottom":"1px solid"}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.total_in'))+_vm._s(tx.valueIn)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.fee'))+_vm._s(tx.fees)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.total_out'))+_vm._s(tx.valueOut)+"\n          ")])],1)],1)],1)})],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "FoCJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-btn',{attrs:{"color":_vm.color},on:{"click":_vm.clickBtn}},[_vm._t("default",[_vm._v(_vm._s(_vm.$t('file_reader.upload')))]),_vm._v(" "),_c('input',{ref:"input",staticStyle:{"display":"none"},attrs:{"type":"file"},on:{"change":_vm.handleFiles}})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Fzx9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_DerivePath__ = __webpack_require__("clH9");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      step: 1,
      ledger: null
    };
  },

  components: {
    DerivePath: __WEBPACK_IMPORTED_MODULE_3_components_DerivePath__["a" /* default */]
  },
  methods: {
    connect: function connect() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].connectLedger();

              case 3:
                _this.ledger = _context.sent;
                _context.next = 11;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);

                _this.$root.error('connect_ledger_fail');
                _this.$root.log.error('restore_ledger_connect_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                return _context.abrupt('return', false);

              case 11:
                _this.step = 2;

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 6]]);
      }))();
    },
    setWallet: function setWallet(wallet) {
      __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].setWallet(wallet);
      this.$emit('restored');
    }
  }
});

/***/ }),

/***/ "G+K8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Password_vue__ = __webpack_require__("pbl8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b371acfc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Password_vue__ = __webpack_require__("kVi7");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Password_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b371acfc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Password_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "G2dt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_wallet__ = __webpack_require__("Wq6Z");



var connectLedger = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].connectLedger();

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function connectLedger() {
    return _ref.apply(this, arguments);
  };
}();

var restoreHdNodeFromLedgerPath = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(ledger, path) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreHdNodeFromLedgerPath(ledger, path);

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function restoreHdNodeFromLedgerPath(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();



var wallet = false;

function getWallet() {
  return wallet;
}

function setWallet(wal) {
  wallet = wal;
}

function getLedgerDefaultPath() {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].getLedgerDefaultPath();
}

function generateMnemonic() {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].generateMnemonic();
}

function restoreFromMnemonic(mnemonic, password) {
  return wallet = __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromMnemonic(mnemonic, password);
}

function restoreFromMobile(mnemonic) {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromMobile(mnemonic);
}

function chooseMobileWallet(walletList, path) {
  return wallet = walletList[path].wallet;
}

function restoreFromWif(wif) {
  return wallet = __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromWif(wif);
}

function restoreFromHdNodeByPage(hdNode, start) {
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].restoreFromHdNodeByPage(hdNode, start, length);
}

function validateBip39Mnemonic(mnemonic) {
  return __WEBPACK_IMPORTED_MODULE_2_libs_wallet__["a" /* default */].validateBip39Mnemonic(mnemonic);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getWallet: getWallet,
  setWallet: setWallet,
  connectLedger: connectLedger,
  getLedgerDefaultPath: getLedgerDefaultPath,
  generateMnemonic: generateMnemonic,
  restoreFromMnemonic: restoreFromMnemonic,
  restoreFromMobile: restoreFromMobile,
  restoreFromWif: restoreFromWif,
  restoreHdNodeFromLedgerPath: restoreHdNodeFromLedgerPath,
  restoreFromHdNodeByPage: restoreFromHdNodeByPage,
  chooseMobileWallet: chooseMobileWallet,
  validateBip39Mnemonic: validateBip39Mnemonic
});

/***/ }),

/***/ "GBQW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('safe_send.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info')))]),_vm._v(" "),_c('v-stepper',{attrs:{"non-linear":"","vertical":""},model:{value:(_vm.step),callback:function ($$v) {_vm.step=$$v},expression:"step"}},[_c('v-stepper-step',{attrs:{"step":"1","editable":""}},[_vm._v("Generate Base Info (At online computer)")]),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"1"}},[(_vm.mode === 'offline')?[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info1_offline')))]),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.step = 2}}},[_vm._v(_vm._s(_vm.$t('common.next')))])]:[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info1_online')))]),_vm._v(" "),_c('v-text-field',{attrs:{"label":"From Address","required":""},model:{value:(_vm.fromAddress),callback:function ($$v) {_vm.fromAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fromAddress"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"To Address","required":""},model:{value:(_vm.toAddress),callback:function ($$v) {_vm.toAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"toAddress"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Amount","required":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"success","disabled":_vm.notValid},nativeOn:{"click":function($event){_vm.confirmAddressDialog = true}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])]],2),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"2","editable":""}},[_vm._v("Generate Tx (At offline computer)")]),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"2"}},[(_vm.mode === 'offline')?[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info2_offline')))]),_vm._v(" "),(!_vm.fileParsed)?[_c('file-reader',{attrs:{"color":"info"},on:{"upload":_vm.handleFile}})]:_vm._e(),_vm._v(" "),(_vm.fileParsed)?[_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.from_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fromAddress),callback:function ($$v) {_vm.fromAddress=$$v},expression:"fromAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.to_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.toAddress),callback:function ($$v) {_vm.toAddress=$$v},expression:"toAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.amount')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.fee')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=$$v},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.confirmAddressDialog = true}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])]:_vm._e()]:[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info2_online')))]),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.step = 3}}},[_vm._v(_vm._s(_vm.$t('common.next')))])]],2),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"3","editable":""}},[_vm._v("Broadcast Tx (At online computer)")]),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"3"}},[(_vm.mode === 'offline')?[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info3_offline')))])]:[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info3_online')))]),_vm._v(" "),(!_vm.fileParsed)?[_c('file-reader',{attrs:{"color":"info"},on:{"upload":_vm.handleFile}})]:_vm._e(),_vm._v(" "),(_vm.fileParsed)?[_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.from_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fromAddress),callback:function ($$v) {_vm.fromAddress=$$v},expression:"fromAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.to_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.toAddress),callback:function ($$v) {_vm.toAddress=$$v},expression:"toAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.amount')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.fee')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=$$v},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.confirmAddressDialog = true}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])]:_vm._e()]],2)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmAddressDialog),callback:function ($$v) {_vm.confirmAddressDialog=$$v},expression:"confirmAddressDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send.enter_address')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"To Address"},model:{value:(_vm.repeatToAddress),callback:function ($$v) {_vm.repeatToAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"repeatToAddress"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddress}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmAddressDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send.going_to_send'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.amount)+"HTML")]),_vm._v("\n          "+_vm._s(_vm.$t('send.to_address'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.toAddress))]),_vm._v("\n          "+_vm._s(_vm.$t('common.question_mark'))+"\n        ")],1)]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GzeU":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "H0w2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("Vncl")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"indigo darken-4"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("Info\n      "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""},on:{"click":_vm.reset}},[_vm._v("New\n      "),_c('v-icon',[_vm._v("verified_user")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""},on:{"click":_vm.reset}},[_vm._v("Check\n      "),_c('v-icon',[_vm._v("search")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('span',{staticClass:"display-1"},[_vm._v("Welcome to AltProof!")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    This decentralized application allows you to register documents' versions in the\n                    "),_c('b',[_vm._v("AltHash")]),_vm._v(" blockchain.\n                    "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n                    As a notary service, "),_c('b',[_vm._v("you must to keep the copy of your document")]),_vm._v(", as we don't store the file itself. \n                    "),_c('br'),_vm._v("\n                    The blockchain will store only a "),_c('b',[_vm._v("hash")]),_vm._v(" of the contents of the document, and only that same file will generate that hash, therefore the file shouldn't be changed after being registered.\n                    "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n                    To create a new record, just click on \"New\" menu item, and upload your file or type any text you want to register.\n                    "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n                    Once the transaction is confirmed, the registration is complete and you can verify it through the menu item \"Check\". You can either inform the hash generated upon the registration, or upload the same file, or type the same text that you registered.\n                  ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-form',[_c('h2',{staticClass:"headline"},[_vm._v("Upload:")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"text-xs-center file"},[_c('input',{ref:"file",attrs:{"type":"file"},on:{"change":_vm.uploadFile}}),_vm._v(" "),_c('div',[_c('v-btn',{attrs:{"flat":"","icon":"","color":"blue"},on:{"click":function($event){_vm.$refs.file.click()}}},[_c('v-icon',{attrs:{"x-large":""}},[_vm._v("cloud_upload")])],1)],1),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.loadStatus)+"%")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isFile),expression:"isFile"}],staticClass:"remove-file",on:{"click":_vm.removeFile}},[_c('v-icon',{attrs:{"color":"red accent-4"}},[_vm._v("delete_forever")])],1)]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"text-xs-center"},[_vm._v("or")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-textarea',{attrs:{"label":"Text","readonly":_vm.isFile,"outline":"","background-color":"indigo"},on:{"keyup":_vm.textHash},model:{value:(_vm.text),callback:function ($$v) {_vm.text=$$v},expression:"text"}}),_vm._v(" "),(_vm.isFile)?_c('v-text-field',{attrs:{"label":"File name:","readonly":"","outline":"","background-color":"indigo"},model:{value:(_vm.fileName),callback:function ($$v) {_vm.fileName=$$v},expression:"fileName"}}):_vm._e(),_vm._v(" "),(_vm.isFile)?_c('v-text-field',{attrs:{"label":"File size:","readonly":"","outline":"","background-color":"indigo"},model:{value:(_vm.fileSize),callback:function ($$v) {_vm.fileSize=$$v},expression:"fileSize"}}):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Generated Hash:","readonly":"","outline":"","background-color":"indigo"},model:{value:(_vm.hashID),callback:function ($$v) {_vm.hashID=$$v},expression:"hashID"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","outline":"","background-color":"deep-purple darken-1"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","outline":"","background-color":"deep-purple darken-1"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","outline":"","background-color":"deep-purple darken-1"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"info",attrs:{"disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send_to_contract.confirm')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[(_vm.text=='')?_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('b',[_vm._v("Please store the file info below in a safe place, as it contains the unique ID for this content registration.")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{attrs:{"label":"File Name and Hash","disabled":""},model:{value:(_vm.fileInfo),callback:function ($$v) {_vm.fileInfo=$$v},expression:"fileInfo"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.fileInfo),expression:"fileInfo",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v(_vm._s(_vm.$t('common.copy')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1):_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('b',[_vm._v("Please store the hash below in a safe place, as it is the unique ID for this content registration.")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{attrs:{"label":"Text Hash","disabled":""},model:{value:(_vm.hashID),callback:function ($$v) {_vm.hashID=$$v},expression:"hashID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.hashID),expression:"hashID",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v(_vm._s(_vm.$t('common.copy')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-form',[_c('h2',{staticClass:"headline"},[_vm._v("Upload:")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"text-xs-center file"},[_c('input',{ref:"fileSearch",attrs:{"type":"file"},on:{"change":_vm.uploadFile}}),_vm._v(" "),_c('div',[_c('v-btn',{attrs:{"flat":"","icon":"","color":"blue"},on:{"click":function($event){_vm.$refs.fileSearch.click()}}},[_c('v-icon',{attrs:{"x-large":""}},[_vm._v("cloud_upload")])],1)],1),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.loadStatus)+"%")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isFile),expression:"isFile"}],staticClass:"remove-file",on:{"click":_vm.removeFileSearch}},[_c('v-icon',{attrs:{"color":"red accent-4"}},[_vm._v("delete_forever")])],1)]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',{staticClass:"text-xs-center"},[_vm._v("or")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-textarea',{attrs:{"label":"Text","readonly":_vm.isFile,"outline":"","background-color":"indigo"},on:{"keyup":_vm.textHashSearch},model:{value:(_vm.textSearch),callback:function ($$v) {_vm.textSearch=$$v},expression:"textSearch"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Hash ID","append-icon":"search","outline":"","background-color":"indigo"},on:{"click:append":_vm.getDocument},model:{value:(_vm.searchHashID),callback:function ($$v) {_vm.searchHashID=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"searchHashID"}})],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"width":"600px"},model:{value:(_vm.execResultDialog),callback:function ($$v) {_vm.execResultDialog=$$v},expression:"execResultDialog"}},[_c('v-card',[_c('v-card-text',[_c('v-container',{attrs:{"align-center":"","grid-list-md":"","text-md-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('img',{staticStyle:{"width":"auto","height":"40px"},attrs:{"src":__webpack_require__("Vncl")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('img',{staticStyle:{"width":"auto","height":"40px"},attrs:{"src":__webpack_require__("2Gzf")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"font-weight-medium my-2 headline font-bold"},[_vm._v("Content Found")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"text-xs-center"},[_c('p',[_vm._v("The content is registered on "),_c('b',[_vm._v("Althash Blockchain")]),_vm._v(" with the atttributes below:")]),_vm._v(" "),_c('b',[_vm._v("Block Timestamp:")]),_vm._v(" "+_vm._s(_vm.blockTimestamp)+"\n                          "),_c('br'),_vm._v(" "),_c('b',[_vm._v("Block Number:")]),_vm._v(" "+_vm._s(_vm.blockNumber)+"\n                          "),_c('br'),_vm._v(" "),_c('b',[_vm._v("Hash:")]),_vm._v(" "),_c('span',{staticClass:"caption"},[_vm._v(_vm._s(_vm.searchHashID))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('img',{staticStyle:{"width":"75px","height":"auto"},attrs:{"src":_vm.qr}})])])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"indigo darken-1","dark":""}},[_c('v-card-text',[_vm._v("\n        Please stand by\n        "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "HWGS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_libs_server__ = __webpack_require__("yDAo");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wallet: __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__["a" /* default */].getWallet(),
      node: __WEBPACK_IMPORTED_MODULE_1_libs_server__["a" /* default */].currentNode()
    };
  },

  props: ['view'],
  watch: {
    view: function view() {
      this.wallet.setTxList();
    }
  },
  computed: {
    txList: function txList() {
      return this.wallet.txList;
    }
  }
});

/***/ }),

/***/ "Hs0l":
/***/ (function(module, exports) {

module.exports = ["ábaco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","acción","aceite","acelga","acento","aceptar","ácido","aclarar","acné","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","aéreo","afectar","afición","afinar","afirmar","ágil","agitar","agonía","agosto","agotar","agregar","agrio","agua","agudo","águila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacrán","alambre","alarma","alba","álbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodón","aliado","aliento","alivio","alma","almeja","almíbar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","ámbar","ámbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","andén","anemia","ángulo","anillo","ánimo","anís","anotar","antena","antiguo","antojo","anual","anular","anuncio","añadir","añejo","año","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","araña","arar","árbitro","árbol","arbusto","archivo","arco","arder","ardilla","arduo","área","árido","aries","armonía","arnés","aroma","arpa","arpón","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","áspero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","ático","atleta","átomo","atraer","atroz","atún","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avión","aviso","ayer","ayuda","ayuno","azafrán","azar","azote","azúcar","azufre","azul","baba","babor","bache","bahía","baile","bajar","balanza","balcón","balde","bambú","banco","banda","baño","barba","barco","barniz","barro","báscula","bastón","basura","batalla","batería","batir","batuta","baúl","bazar","bebé","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsái","borde","borrar","bosque","bote","botín","bóveda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufón","búho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzón","caballo","cabeza","cabina","cabra","cacao","cadáver","cadena","caer","café","caída","caimán","caja","cajón","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","cáncer","candil","canela","canguro","canica","canto","caña","cañón","caoba","caos","capaz","capitán","capote","captar","capucha","cara","carbón","cárcel","careta","carga","cariño","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","célebre","celoso","célula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","césped","cetro","chacal","chaleco","champú","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclón","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","ciprés","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","clínica","cobre","cocción","cochino","cocina","coco","código","codo","cofre","coger","cohete","cojín","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","cómodo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazón","corbata","corcho","cordón","corona","correr","coser","cosmos","costa","cráneo","cráter","crear","crecer","creído","crema","cría","crimen","cripta","crisis","cromo","crónica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupón","cúpula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","dátil","deber","débil","década","decir","dedo","defensa","definir","dejar","delfín","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvío","detalle","detener","deuda","día","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difícil","digno","dilema","diluir","dinero","directo","dirigir","disco","diseño","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","dragón","droga","ducha","duda","duelo","dueño","dulce","dúo","duque","durar","dureza","duro","ébano","ebrio","echar","eco","ecuador","edad","edición","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","élite","elixir","elogio","eludir","embudo","emitir","emoción","empate","empeño","empleo","empresa","enano","encargo","enchufe","encía","enemigo","enero","enfado","enfermo","engaño","enigma","enlace","enorme","enredo","ensayo","enseñar","entero","entrar","envase","envío","época","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espía","esposa","espuma","esquí","estar","este","estilo","estufa","etapa","eterno","ética","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","éxito","experto","explicar","exponer","extremo","fábrica","fábula","fachada","fácil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","faraón","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fértil","fervor","festín","fiable","fianza","fiar","fibra","ficción","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flúor","fobia","foca","fogata","fogón","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","frágil","franja","frase","fraude","freír","freno","fresa","frío","frito","fruta","fuego","fuente","fuerza","fuga","fumar","función","funda","furgón","furia","fusil","fútbol","futuro","gacela","gafas","gaita","gajo","gala","galería","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavilán","gemelo","gemir","gen","género","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gráfico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","grúa","grueso","grumo","grupo","guante","guapo","guardia","guerra","guía","guiño","guion","guiso","guitarra","gusano","gustar","haber","hábil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazaña","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","héroe","hervir","hielo","hierro","hígado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","húmedo","humilde","humo","hundir","huracán","hurto","icono","ideal","idioma","ídolo","iglesia","iglú","igual","ilegal","ilusión","imagen","imán","imitar","impar","imperio","imponer","impulso","incapaz","índice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","interés","íntimo","intuir","inútil","invierno","ira","iris","ironía","isla","islote","jabalí","jabón","jamón","jarabe","jardín","jarra","jaula","jazmín","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","júpiter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladrón","lagarto","lágrima","laguna","laico","lamer","lámina","lámpara","lana","lancha","langosta","lanza","lápiz","largo","larva","lástima","lata","látex","latir","laurel","lavar","lazo","leal","lección","leche","lector","leer","legión","legumbre","lejano","lengua","lento","leña","león","leopardo","lesión","letal","letra","leve","leyenda","libertad","libro","licor","líder","lidiar","lienzo","liga","ligero","lima","límite","limón","limpio","lince","lindo","línea","lingote","lino","linterna","líquido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","loción","loco","locura","lógica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","maíz","maldad","maleta","malla","malo","mamá","mambo","mamut","manco","mando","manejar","manga","maniquí","manjar","mano","manso","manta","mañana","mapa","máquina","mar","marco","marea","marfil","margen","marido","mármol","marrón","martes","marzo","masa","máscara","masivo","matar","materia","matiz","matriz","máximo","mayor","mazorca","mecha","medalla","medio","médula","mejilla","mejor","melena","melón","memoria","menor","mensaje","mente","menú","mercado","merengue","mérito","mes","mesón","meta","meter","método","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millón","mimo","mina","minero","mínimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","moción","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","moño","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","móvil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","muñeca","mural","muro","músculo","museo","musgo","música","muslo","nácar","nación","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","náusea","naval","nave","navidad","necio","néctar","negar","negocio","negro","neón","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","niñez","niño","nítido","nivel","nobleza","noche","nómina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","núcleo","nudillo","nudo","nuera","nueve","nuez","nulo","número","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","océano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oído","oír","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opción","ópera","opinar","oponer","optar","óptica","opuesto","oración","orador","oral","órbita","orca","orden","oreja","órgano","orgía","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadía","oscuro","osezno","oso","ostra","otoño","otro","oveja","óvulo","óxido","oxígeno","oyente","ozono","pacto","padre","paella","página","pago","país","pájaro","palabra","palco","paleta","pálido","palma","paloma","palpar","pan","panal","pánico","pantera","pañuelo","papá","papel","papilla","paquete","parar","parcela","pared","parir","paro","párpado","parque","párrafo","parte","pasar","paseo","pasión","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peatón","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldaño","pelea","peligro","pellejo","pelo","peluca","pena","pensar","peñón","peón","peor","pepino","pequeño","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pésimo","pestaña","pétalo","petróleo","pez","pezuña","picar","pichón","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","piña","piojo","pipa","pirata","pisar","piscina","piso","pista","pitón","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesía","poeta","polen","policía","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porción","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","príncipe","prisión","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","próximo","prueba","público","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmón","pulpo","pulso","puma","punto","puñal","puño","pupa","pupila","puré","quedar","queja","quemar","querer","queso","quieto","química","quince","quitar","rábano","rabia","rabo","ración","radical","raíz","rama","rampa","rancho","rango","rapaz","rápido","rapto","rasgo","raspa","rato","rayo","raza","razón","reacción","realidad","rebaño","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refrán","refugio","regalo","regir","regla","regreso","rehén","reino","reír","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","revés","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","rígido","rigor","rincón","riñón","río","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubí","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sábado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmón","salón","salsa","salto","salud","salvar","samba","sanción","sandía","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sartén","sastre","satán","sauna","saxofón","sección","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","señal","señor","separar","sepia","sequía","ser","serie","sermón","servir","sesenta","sesión","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","sílaba","silbar","silencio","silla","símbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","sólido","soltar","solución","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","sostén","sótano","suave","subir","suceso","sudor","suegra","suelo","sueño","suerte","sufrir","sujeto","sultán","sumar","superar","suplir","suponer","supremo","sur","surco","sureño","surgir","susto","sutil","tabaco","tabique","tabla","tabú","taco","tacto","tajo","talar","talco","talento","talla","talón","tamaño","tambor","tango","tanque","tapa","tapete","tapia","tapón","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazón","teatro","techo","tecla","técnica","tejado","tejer","tejido","tela","teléfono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teoría","terapia","terco","término","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburón","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","tímido","timo","tinta","tío","típico","tipo","tira","tirón","titán","títere","título","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","tórax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","tóxico","trabajo","tractor","traer","tráfico","trago","traje","tramo","trance","trato","trauma","trazar","trébol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tubería","tubo","tuerto","tumba","tumor","túnel","túnica","turbina","turismo","turno","tutor","ubicar","úlcera","umbral","unidad","unir","universo","uno","untar","uña","urbano","urbe","urgente","urna","usar","usuario","útil","utopía","uva","vaca","vacío","vacuna","vagar","vago","vaina","vajilla","vale","válido","valle","valor","válvula","vampiro","vara","variar","varón","vaso","vecino","vector","vehículo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vía","viaje","vibrar","vicio","víctima","vida","vídeo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","viñedo","violín","viral","virgo","virtud","visor","víspera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volcán","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]

/***/ }),

/***/ "HwYL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"light":""}},[_c('v-toolbar',{class:_vm.headerClass,attrs:{"app":"","fixed":"","height":"82px","clipped-left":""}},[_c('span',{staticClass:"title"},[_c('span',{staticClass:"text"},[_c('img',{staticClass:"cursor",attrs:{"src":__webpack_require__("XXFI"),"alt":"Althash Web Platform Logo"},on:{"click":function($event){_vm.changeView('home')}}})])]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-menu',{key:"myOffspring",attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":"100"}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_myoffspring')}},slot:"activator"},[_c('img',{staticStyle:{"height":"35px","width":"auto"},attrs:{"src":__webpack_require__("a4SW")}})])],1),_vm._v(" "),_c('v-menu',{key:"TokenFarm",attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":"100"}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('create_token')}},slot:"activator"},[_c('img',{staticStyle:{"height":"35px","width":"auto"},attrs:{"src":__webpack_require__("GzeU")}})])],1),_vm._v(" "),_c('v-menu',{key:"AltProof",attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":"100"}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_altproof')}},slot:"activator"},[_c('img',{staticStyle:{"height":"35px","width":"auto"},attrs:{"src":__webpack_require__("ib+S")}})])],1),_vm._v(" "),_c('v-menu',{key:"CrypticMAG",attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":"100"}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_crypticmag')}},slot:"activator"},[_c('img',{staticStyle:{"height":"35px","width":"auto"},attrs:{"src":__webpack_require__("5EIY")}})])],1),_vm._v(" "),_c('v-menu',{key:"biffyPlutonium",attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":"100"}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_biffyplutonium')}},slot:"activator"},[_c('img',{staticStyle:{"height":"35px","width":"auto"},attrs:{"src":__webpack_require__("owsU")}})])],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","dark":""},on:{"click":function($event){_vm.changeView('home')}},slot:"activator"},[_c('v-icon',[_vm._v("home")])],1),_vm._v(" "),_c('span',[_vm._v("Home")])],1),_vm._v(" "),_vm._l((_vm.items),function(item){return _c('v-menu',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[item.name]),expression:"!notShow[item.name]"}],key:item.title,attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":100}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","dark":""},slot:"activator"},[_c('v-icon',[_vm._v(_vm._s(item.action))])],1),_vm._v(" "),_c('v-list',{attrs:{"subheader":""}},[_c('v-subheader',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_vm._l((item.items),function(subItem){return _c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[subItem.name]),expression:"!notShow[subItem.name]"}],key:subItem.title,on:{"click":function($event){_vm.changeView(subItem.name)}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v(_vm._s(subItem.title))])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',[_vm._v(_vm._s(subItem.action))])],1)],1)})],2)],1)}),_vm._v(" "),_c('v-tooltip',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLogoff),expression:"showLogoff"}],attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","dark":""},on:{"click":function($event){$event.stopPropagation();_vm.logoff_dialog = true}},slot:"activator"},[_c('v-icon',[_vm._v("power_settings_new")])],1),_vm._v(" "),_c('span',[_vm._v("Log off")])],1)],2),_vm._v(" "),_c('main',[_c('v-content',[_c('v-container',{attrs:{"fluid":"","fill-height":"","justify-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs10":"","offset-xs1":""}},[_c('home',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['home']),expression:"isCurrent['home']"}],on:{"openDapp":_vm.openDapp}}),_vm._v(" "),_c('create-wallet',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['create']),expression:"isCurrent['create']"}],attrs:{"view":_vm.isCurrent['create']},on:{"created":_vm.setWallet}}),_vm._v(" "),_c('create-mnemonic',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['create_from_mnemonic']),expression:"isCurrent['create_from_mnemonic']"}],attrs:{"view":_vm.isCurrent['create_from_mnemonic']},on:{"created":_vm.setWallet}}),_vm._v(" "),_c('restore-wallet',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_mnemonic']),expression:"isCurrent['restore_from_mnemonic']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),_c('restore-wif',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_wif']),expression:"isCurrent['restore_from_wif']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),_c('restore-mobile',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_mobile']),expression:"isCurrent['restore_from_mobile']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),_c('restore-key-file',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_key_file']),expression:"isCurrent['restore_from_key_file']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),(_vm.isCurrent['restore_from_ledger'])?_c('restore-ledger',{on:{"restored":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['view'])?_c('view-wallet',{attrs:{"view":_vm.isCurrent['view']}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['transactions'])?_c('view-tx',{attrs:{"view":_vm.isCurrent['transactions']}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['safe_send'])?_c('safe-send',{on:{"send":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['send'])?_c('send',{on:{"send":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['request_payment'])?_c('request-payment'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dump_as_key_file'])?_c('dump-key-file'):_vm._e(),_vm._v(" "),(_vm.isCurrent['create_contract'])?_c('create-contract'):_vm._e(),_vm._v(" "),(_vm.isCurrent['send_to_contract'])?_c('send-to-contract'):_vm._e(),_vm._v(" "),(_vm.isCurrent['call_contract'])?_c('call-contract'):_vm._e(),_vm._v(" "),(_vm.isCurrent['create_token'])?_c('create-token'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_myoffspring'])?_c('dapp-myoffspring'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_crypticmag'])?_c('dapp-crypticmag'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_altproof'])?_c('dapp-alt-proof'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_biffyplutonium'])?_c('dapp-biffy-plutonium'):_vm._e(),_vm._v(" "),(_vm.isCurrent['settings'])?_c('config'):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"max-width":"290"},model:{value:(_vm.logoff_dialog),callback:function ($$v) {_vm.logoff_dialog=$$v},expression:"logoff_dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("Log off?")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"red darken-1","flat":"flat"},on:{"click":function($event){_vm.logoff_dialog = false}}},[_vm._v("\n            No\n          ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","flat":"flat"},on:{"click":_vm.logoff}},[_vm._v("\n            Yes\n          ")])],1)],1)],1),_vm._v(" "),_c('notify'),_vm._v(" "),_c('warning')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ILUG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('restore_key_file.title')))])]),_vm._v(" "),_c('v-card-text',[_c('file-reader',{staticStyle:{"color":"white"},attrs:{"color":"blue"},on:{"upload":_vm.parseKeyFile}}),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired,"notEmpty":"true","title":"restore_key_file.password_title"},on:{"password":_vm.inputed}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "IzkT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"d-flex":"","xs12":"","sm6":"","md6":""}},[_c('v-card',{attrs:{"color":"light-blue darken-1","dark":""}},[_c('v-card-title',{staticClass:"headline",attrs:{"primary":""}},[_c('b',[_vm._v("What we have been up to")])]),_vm._v(" "),_c('v-card-text',[_c('p',[_vm._v("\n                Since the release of the Althash Web Platform (AWP), the development team has been engaged in many activities behind the scenes. The "),_c('span',{staticClass:"cursor",on:{"click":function($event){_vm.openDapp('dapp_altproof')}}},[_c('b',[_vm._v("AltProof")])]),_vm._v(" DApp is a good example of where our efforts are being concentrated now (please take the time to check it out!).\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                With our goal of being a software company, we have been much more dedicated to building products on top of our infrastructure than marketing our initiatives. That has been seen with criticism by some people in the community, which we totally understand. In order to be able to inform our communities better, we have been working on our new website, which is in its final steps of content writing. With that, we expect to have, once for all, a place that concentrates all the info that anyone needs to know about the Althash and HTMLCoin. Meanwhile, our social networks are the best place for that.\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                In parallel, the development work never stops. Our Tech Team will keep working to deploy applications on top of the "),_c('b',[_vm._v("AWP")]),_vm._v(", along with the DApps developed by community members, just like the succesfull "),_c('span',{staticClass:"cursor",on:{"click":function($event){_vm.openDapp('dapp_crypticmag')}}},[_c('b',[_vm._v("CrypticMAG")])]),_vm._v(", the recently rebranded "),_c('b',[_vm._v("Biffy Plutonium")]),_vm._v(", which is just around the corner, and the recently initiated "),_c('b',[_vm._v("Photizo")]),_vm._v(".\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                If you are a development enthusiast and have your idea for a DApp project, please count on us. We will give you all support you need to deploy your decentralized solution on the "),_c('b',[_vm._v("AWP")]),_vm._v(".\n              ")]),_vm._v(" "),_c('p',[_vm._v("We are here for you.")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_c('b',[_vm._v("The HTMLCOIN Foundation")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://htmlcoin.com","target":"_blank"}},[_vm._v("https://htmlcoin.com")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"mailto:feedback@althash.org"}},[_vm._v("feedback@althash.org")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_c('center',[_c('img',{attrs:{"src":__webpack_require__("aR/i")}})])],1)])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"d-flex":"","xs12":"","sm6":"","md3":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"d-flex":""}},[_c('v-card',{attrs:{"color":"blue lighten-1","dark":""}},[_c('v-card-title',{staticClass:"subheading"},[_c('div',{staticClass:"cursor",on:{"click":function($event){_vm.openDapp('dapp_altproof')}}},[_c('img',{staticStyle:{"width":"100%","height":"auto"},attrs:{"src":__webpack_require__("pRmB")}})])]),_vm._v(" "),_c('v-card-text',[_c('p',[_c('b',[_vm._v("New Addition!")])]),_vm._v(" "),_c('p',[_vm._v("The "),_c('b',[_vm._v("AltProof")]),_vm._v(" is our new decentralized application where you can register documents or text, as a way to prove the version of their contents. Just like a notary, but with a decentralized approach, without any middlemen, and, the best, "),_c('b',[_vm._v("for free")]),_vm._v(" (You just pay the network fees)!")])])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"d-flex":""}},[_c('v-card',{attrs:{"color":"light-blue darken-3","dark":""}},[_c('v-card-title',{staticClass:"subheading"},[_c('div',{staticClass:"cursor",on:{"click":function($event){_vm.openDapp('dapp_myoffspring')}}},[_c('img',{staticStyle:{"width":"100%","height":"auto"},attrs:{"src":__webpack_require__("5hal")}})])]),_vm._v(" "),_c('v-card-text',[_c('p',[_c('b',[_vm._v("MyOffspring")]),_vm._v(" allows you to register your children on the AltHash blockchain, creating a digital, immutable and accessible birth certificate.")])])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"d-flex":""}},[_c('v-card',{attrs:{"color":"light-blue darken-1","dark":""}},[_c('v-card-title',{staticClass:"subheading"},[_c('div',{staticClass:"cursor",on:{"click":function($event){_vm.openDapp('create_token')}}},[_c('img',{staticStyle:{"width":"100%","height":"auto"},attrs:{"src":__webpack_require__("lS1t")}})])]),_vm._v(" "),_c('v-card-text',[_c('p',[_vm._v("TokenFarm boosts the process of creating Tokens on "),_c('b',[_vm._v("AltHash")]),_vm._v(" with just a few clicks!")])])],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"d-flex":"","xs12":"","sm6":"","md3":"","child-flex":""}},[_c('v-card',{attrs:{"color":"light-blue darken-1","dark":""}},[_c('v-card-title',{staticClass:"title"},[_c('b',[_vm._v("Community DAPPs")])]),_vm._v(" "),_c('v-card-text',[_c('p',[_c('b',[_vm._v("It's time!")])]),_vm._v(" "),_c('p',[_c('center',[_c('img',{staticClass:"cursor",staticStyle:{"max-width":"150px","width":"65%","height":"auto","border":"0"},attrs:{"src":__webpack_require__("CR93")},on:{"click":function($event){_vm.openDapp('dapp-crypticmag')}}})])],1),_vm._v(" "),_c('p',[_vm._v("We're very excited to announce the deployment of our first Community-developed DAPP!")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("CrypticMAG")]),_vm._v(" is a Token and a Decentralized Application that will allow its magazine readers to redeem prizes through a web interface here in the AltHash Web Platform.")]),_vm._v(" "),_c('p',[_vm._v("To access it, remember to log in by adding a wallet (top-right corner menu) and clicking on CrypticMAG's icon.")]),_vm._v(" "),_c('p',[_vm._v("Good luck on your redeeming!")])]),_vm._v(" "),_c('v-container',{attrs:{"fluid":"","grid-list-xl":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-card',{attrs:{"color":"transparent","flat":""}},[_c('div',[_c('a',{attrs:{"href":"http://biffytoken.site","target":"_blank"}},[_c('img',{staticStyle:{"max-width":"100px","width":"65%","height":"auto","border":"0"},attrs:{"src":__webpack_require__("a2ct")}})]),_vm._v(" "),_c('br'),_vm._v(" "),_c('b',[_vm._v("Soon: Biffy Plutonium")])])])],1)],1)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Ju6P":
/***/ (function(module, exports) {

module.exports = ["的","一","是","在","不","了","有","和","人","這","中","大","為","上","個","國","我","以","要","他","時","來","用","們","生","到","作","地","於","出","就","分","對","成","會","可","主","發","年","動","同","工","也","能","下","過","子","說","產","種","面","而","方","後","多","定","行","學","法","所","民","得","經","十","三","之","進","著","等","部","度","家","電","力","裡","如","水","化","高","自","二","理","起","小","物","現","實","加","量","都","兩","體","制","機","當","使","點","從","業","本","去","把","性","好","應","開","它","合","還","因","由","其","些","然","前","外","天","政","四","日","那","社","義","事","平","形","相","全","表","間","樣","與","關","各","重","新","線","內","數","正","心","反","你","明","看","原","又","麼","利","比","或","但","質","氣","第","向","道","命","此","變","條","只","沒","結","解","問","意","建","月","公","無","系","軍","很","情","者","最","立","代","想","已","通","並","提","直","題","黨","程","展","五","果","料","象","員","革","位","入","常","文","總","次","品","式","活","設","及","管","特","件","長","求","老","頭","基","資","邊","流","路","級","少","圖","山","統","接","知","較","將","組","見","計","別","她","手","角","期","根","論","運","農","指","幾","九","區","強","放","決","西","被","幹","做","必","戰","先","回","則","任","取","據","處","隊","南","給","色","光","門","即","保","治","北","造","百","規","熱","領","七","海","口","東","導","器","壓","志","世","金","增","爭","濟","階","油","思","術","極","交","受","聯","什","認","六","共","權","收","證","改","清","美","再","採","轉","更","單","風","切","打","白","教","速","花","帶","安","場","身","車","例","真","務","具","萬","每","目","至","達","走","積","示","議","聲","報","鬥","完","類","八","離","華","名","確","才","科","張","信","馬","節","話","米","整","空","元","況","今","集","溫","傳","土","許","步","群","廣","石","記","需","段","研","界","拉","林","律","叫","且","究","觀","越","織","裝","影","算","低","持","音","眾","書","布","复","容","兒","須","際","商","非","驗","連","斷","深","難","近","礦","千","週","委","素","技","備","半","辦","青","省","列","習","響","約","支","般","史","感","勞","便","團","往","酸","歷","市","克","何","除","消","構","府","稱","太","準","精","值","號","率","族","維","劃","選","標","寫","存","候","毛","親","快","效","斯","院","查","江","型","眼","王","按","格","養","易","置","派","層","片","始","卻","專","狀","育","廠","京","識","適","屬","圓","包","火","住","調","滿","縣","局","照","參","紅","細","引","聽","該","鐵","價","嚴","首","底","液","官","德","隨","病","蘇","失","爾","死","講","配","女","黃","推","顯","談","罪","神","藝","呢","席","含","企","望","密","批","營","項","防","舉","球","英","氧","勢","告","李","台","落","木","幫","輪","破","亞","師","圍","注","遠","字","材","排","供","河","態","封","另","施","減","樹","溶","怎","止","案","言","士","均","武","固","葉","魚","波","視","僅","費","緊","愛","左","章","早","朝","害","續","輕","服","試","食","充","兵","源","判","護","司","足","某","練","差","致","板","田","降","黑","犯","負","擊","范","繼","興","似","餘","堅","曲","輸","修","故","城","夫","夠","送","筆","船","佔","右","財","吃","富","春","職","覺","漢","畫","功","巴","跟","雖","雜","飛","檢","吸","助","昇","陽","互","初","創","抗","考","投","壞","策","古","徑","換","未","跑","留","鋼","曾","端","責","站","簡","述","錢","副","盡","帝","射","草","衝","承","獨","令","限","阿","宣","環","雙","請","超","微","讓","控","州","良","軸","找","否","紀","益","依","優","頂","礎","載","倒","房","突","坐","粉","敵","略","客","袁","冷","勝","絕","析","塊","劑","測","絲","協","訴","念","陳","仍","羅","鹽","友","洋","錯","苦","夜","刑","移","頻","逐","靠","混","母","短","皮","終","聚","汽","村","雲","哪","既","距","衛","停","烈","央","察","燒","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","遊","久","菜","味","舊","模","湖","貨","損","預","阻","毫","普","穩","乙","媽","植","息","擴","銀","語","揮","酒","守","拿","序","紙","醫","缺","雨","嗎","針","劉","啊","急","唱","誤","訓","願","審","附","獲","茶","鮮","糧","斤","孩","脫","硫","肥","善","龍","演","父","漸","血","歡","械","掌","歌","沙","剛","攻","謂","盾","討","晚","粒","亂","燃","矛","乎","殺","藥","寧","魯","貴","鐘","煤","讀","班","伯","香","介","迫","句","豐","培","握","蘭","擔","弦","蛋","沉","假","穿","執","答","樂","誰","順","煙","縮","徵","臉","喜","松","腳","困","異","免","背","星","福","買","染","井","概","慢","怕","磁","倍","祖","皇","促","靜","補","評","翻","肉","踐","尼","衣","寬","揚","棉","希","傷","操","垂","秋","宜","氫","套","督","振","架","亮","末","憲","慶","編","牛","觸","映","雷","銷","詩","座","居","抓","裂","胞","呼","娘","景","威","綠","晶","厚","盟","衡","雞","孫","延","危","膠","屋","鄉","臨","陸","顧","掉","呀","燈","歲","措","束","耐","劇","玉","趙","跳","哥","季","課","凱","胡","額","款","紹","卷","齊","偉","蒸","殖","永","宗","苗","川","爐","岩","弱","零","楊","奏","沿","露","桿","探","滑","鎮","飯","濃","航","懷","趕","庫","奪","伊","靈","稅","途","滅","賽","歸","召","鼓","播","盤","裁","險","康","唯","錄","菌","純","借","糖","蓋","橫","符","私","努","堂","域","槍","潤","幅","哈","竟","熟","蟲","澤","腦","壤","碳","歐","遍","側","寨","敢","徹","慮","斜","薄","庭","納","彈","飼","伸","折","麥","濕","暗","荷","瓦","塞","床","築","惡","戶","訪","塔","奇","透","梁","刀","旋","跡","卡","氯","遇","份","毒","泥","退","洗","擺","灰","彩","賣","耗","夏","擇","忙","銅","獻","硬","予","繁","圈","雪","函","亦","抽","篇","陣","陰","丁","尺","追","堆","雄","迎","泛","爸","樓","避","謀","噸","野","豬","旗","累","偏","典","館","索","秦","脂","潮","爺","豆","忽","托","驚","塑","遺","愈","朱","替","纖","粗","傾","尚","痛","楚","謝","奮","購","磨","君","池","旁","碎","骨","監","捕","弟","暴","割","貫","殊","釋","詞","亡","壁","頓","寶","午","塵","聞","揭","炮","殘","冬","橋","婦","警","綜","招","吳","付","浮","遭","徐","您","搖","谷","贊","箱","隔","訂","男","吹","園","紛","唐","敗","宋","玻","巨","耕","坦","榮","閉","灣","鍵","凡","駐","鍋","救","恩","剝","凝","鹼","齒","截","煉","麻","紡","禁","廢","盛","版","緩","淨","睛","昌","婚","涉","筒","嘴","插","岸","朗","莊","街","藏","姑","貿","腐","奴","啦","慣","乘","夥","恢","勻","紗","扎","辯","耳","彪","臣","億","璃","抵","脈","秀","薩","俄","網","舞","店","噴","縱","寸","汗","掛","洪","賀","閃","柬","爆","烯","津","稻","牆","軟","勇","像","滾","厘","蒙","芳","肯","坡","柱","盪","腿","儀","旅","尾","軋","冰","貢","登","黎","削","鑽","勒","逃","障","氨","郭","峰","幣","港","伏","軌","畝","畢","擦","莫","刺","浪","秘","援","株","健","售","股","島","甘","泡","睡","童","鑄","湯","閥","休","匯","舍","牧","繞","炸","哲","磷","績","朋","淡","尖","啟","陷","柴","呈","徒","顏","淚","稍","忘","泵","藍","拖","洞","授","鏡","辛","壯","鋒","貧","虛","彎","摩","泰","幼","廷","尊","窗","綱","弄","隸","疑","氏","宮","姐","震","瑞","怪","尤","琴","循","描","膜","違","夾","腰","緣","珠","窮","森","枝","竹","溝","催","繩","憶","邦","剩","幸","漿","欄","擁","牙","貯","禮","濾","鈉","紋","罷","拍","咱","喊","袖","埃","勤","罰","焦","潛","伍","墨","欲","縫","姓","刊","飽","仿","獎","鋁","鬼","麗","跨","默","挖","鏈","掃","喝","袋","炭","污","幕","諸","弧","勵","梅","奶","潔","災","舟","鑑","苯","訟","抱","毀","懂","寒","智","埔","寄","屆","躍","渡","挑","丹","艱","貝","碰","拔","爹","戴","碼","夢","芽","熔","赤","漁","哭","敬","顆","奔","鉛","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","倉","魏","銳","曉","氮","兼","隱","礙","赫","撥","忠","肅","缸","牽","搶","博","巧","殼","兄","杜","訊","誠","碧","祥","柯","頁","巡","矩","悲","灌","齡","倫","票","尋","桂","鋪","聖","恐","恰","鄭","趣","抬","荒","騰","貼","柔","滴","猛","闊","輛","妻","填","撤","儲","簽","鬧","擾","紫","砂","遞","戲","吊","陶","伐","餵","療","瓶","婆","撫","臂","摸","忍","蝦","蠟","鄰","胸","鞏","擠","偶","棄","槽","勁","乳","鄧","吉","仁","爛","磚","租","烏","艦","伴","瓜","淺","丙","暫","燥","橡","柳","迷","暖","牌","秧","膽","詳","簧","踏","瓷","譜","呆","賓","糊","洛","輝","憤","競","隙","怒","粘","乃","緒","肩","籍","敏","塗","熙","皆","偵","懸","掘","享","糾","醒","狂","鎖","淀","恨","牲","霸","爬","賞","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鴨","趨","鳳","晨","畜","輩","秩","卵","署","梯","炎","灘","棋","驅","篩","峽","冒","啥","壽","譯","浸","泉","帽","遲","矽","疆","貸","漏","稿","冠","嫩","脅","芯","牢","叛","蝕","奧","鳴","嶺","羊","憑","串","塘","繪","酵","融","盆","錫","廟","籌","凍","輔","攝","襲","筋","拒","僚","旱","鉀","鳥","漆","沈","眉","疏","添","棒","穗","硝","韓","逼","扭","僑","涼","挺","碗","栽","炒","杯","患","餾","勸","豪","遼","勃","鴻","旦","吏","拜","狗","埋","輥","掩","飲","搬","罵","辭","勾","扣","估","蔣","絨","霧","丈","朵","姆","擬","宇","輯","陝","雕","償","蓄","崇","剪","倡","廳","咬","駛","薯","刷","斥","番","賦","奉","佛","澆","漫","曼","扇","鈣","桃","扶","仔","返","俗","虧","腔","鞋","棱","覆","框","悄","叔","撞","騙","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","脹","諧","拋","黴","桑","崗","嘛","衰","盜","滲","臟","賴","湧","甜","曹","閱","肌","哩","厲","烴","緯","毅","昨","偽","症","煮","嘆","釘","搭","莖","籠","酷","偷","弓","錐","恆","傑","坑","鼻","翼","綸","敘","獄","逮","罐","絡","棚","抑","膨","蔬","寺","驟","穆","冶","枯","冊","屍","凸","紳","坯","犧","焰","轟","欣","晉","瘦","禦","錠","錦","喪","旬","鍛","壟","搜","撲","邀","亭","酯","邁","舒","脆","酶","閒","憂","酚","頑","羽","漲","卸","仗","陪","闢","懲","杭","姚","肚","捉","飄","漂","昆","欺","吾","郎","烷","汁","呵","飾","蕭","雅","郵","遷","燕","撒","姻","赴","宴","煩","債","帳","斑","鈴","旨","醇","董","餅","雛","姿","拌","傅","腹","妥","揉","賢","拆","歪","葡","胺","丟","浩","徽","昂","墊","擋","覽","貪","慰","繳","汪","慌","馮","諾","姜","誼","兇","劣","誣","耀","昏","躺","盈","騎","喬","溪","叢","盧","抹","悶","諮","刮","駕","纜","悟","摘","鉺","擲","頗","幻","柄","惠","慘","佳","仇","臘","窩","滌","劍","瞧","堡","潑","蔥","罩","霍","撈","胎","蒼","濱","倆","捅","湘","砍","霞","邵","萄","瘋","淮","遂","熊","糞","烘","宿","檔","戈","駁","嫂","裕","徙","箭","捐","腸","撐","曬","辨","殿","蓮","攤","攪","醬","屏","疫","哀","蔡","堵","沫","皺","暢","疊","閣","萊","敲","轄","鉤","痕","壩","巷","餓","禍","丘","玄","溜","曰","邏","彭","嘗","卿","妨","艇","吞","韋","怨","矮","歇"]

/***/ }),

/***/ "K5Bm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_PasswordCreate__ = __webpack_require__("iwj8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_FileCreator__ = __webpack_require__("MSCV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_keyfile__ = __webpack_require__("72kf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__ = __webpack_require__("G2dt");
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      passwordRequired: true,
      wallet: __WEBPACK_IMPORTED_MODULE_3_libs_web_wallet__["a" /* default */].getWallet(),
      fileStr: false
    };
  },

  components: {
    password: __WEBPACK_IMPORTED_MODULE_0_components_PasswordCreate__["a" /* default */],
    fileCreator: __WEBPACK_IMPORTED_MODULE_1_components_FileCreator__["a" /* default */]
  },
  methods: {
    inputed: function inputed(password) {
      this.passwordRequired = false;
      this.fileStr = 'data:text/plain,' + __WEBPACK_IMPORTED_MODULE_2_libs_keyfile__["a" /* default */].build(__WEBPACK_IMPORTED_MODULE_2_libs_keyfile__["a" /* default */].encode(this.wallet.getPrivKey(), password));
    }
  }
});

/***/ }),

/***/ "KJOx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_FileCreator__ = __webpack_require__("MSCV");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var loadConfig = {
  lan: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].getLan(),
  network: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].getNetwork(),
  mode: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].getMode()
};

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      lan: loadConfig.lan,
      lanSelect: [{ value: 'zh', text: '中文' }, { value: 'en', text: 'En' }, { value: 'ko', text: '한글' }],
      network: loadConfig.network,
      networkSelect: [{ value: 'testnet', text: this.$t('common.testnet') }, { value: 'mainnet', text: this.$t('common.mainnet') }],
      mode: loadConfig.mode,
      modeSelect: [{ value: 'normal', text: this.$t('common.mode.normal') }, { value: 'offline', text: this.$t('common.mode.offline') }]
    };
  },

  components: {
    fileCreator: __WEBPACK_IMPORTED_MODULE_1_components_FileCreator__["a" /* default */]
  },
  computed: {
    fileStr: function fileStr() {
      return 'data:text/plain,' + this.$root.log.exportToArray().join("\n");
    }
  },
  methods: {
    save: function save() {
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('lan', this.lan);
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('network', this.network);
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('mode', this.mode);
      window.location.reload();
    }
  }
});

/***/ }),

/***/ "KSlh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("pEtf");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c73f044_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("IzkT");
function injectStyle (ssrContext) {
  __webpack_require__("BFiv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c73f044_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "KUFz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_i18n__ = __webpack_require__("TXmL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_locales__ = __webpack_require__("qoVm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_config__ = __webpack_require__("6+u4");





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_i18n__["a" /* default */]({
  locale: __WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getLan(),
  fallbackLocale: 'en',
  messages: __WEBPACK_IMPORTED_MODULE_2_locales__["a" /* default */].messages
}));

/***/ }),

/***/ "KYqO":
/***/ (function(module, exports) {

module.exports = {"_args":[["elliptic@6.4.1","/var/www/html/althash-web-platform"]],"_development":true,"_from":"elliptic@6.4.1","_id":"elliptic@6.4.1","_inBundle":false,"_integrity":"sha512-BsXLz5sqX8OHcsh7CqBMztyXARmGQ3LWPtGjJi6DiJHq5C/qvi9P3OqgswKSDftbu8+IoI/QDTAm2fFnQ9SZSQ==","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.4.1","name":"elliptic","escapedName":"elliptic","rawSpec":"6.4.1","saveSpec":null,"fetchSpec":"6.4.1"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.1.tgz","_spec":"6.4.1","_where":"/var/www/html/althash-web-platform","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.1"}

/***/ }),

/***/ "KoW1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t(_vm.headline)))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{ref:"passwordInput",attrs:{"label":_vm.$t('password.password'),"type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"repeat the password","type":"password"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.confirmPassword($event)}},model:{value:(_vm.repeatPassword),callback:function ($$v) {_vm.repeatPassword=$$v},expression:"repeatPassword"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmPassword}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "KuJL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      infoLabel: [{ label: 'address', name: 'address', copy: true }, { label: 'balance', name: 'balance' }, { label: 'unconfirmed_balance', name: 'unconfirmedBalance' }],
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
      showPriv: false
    };
  },

  props: ['view'],
  watch: {
    view: function view() {
      this.wallet.setInfo();
    }
  },
  computed: {
    info: function info() {
      return this.wallet.info;
    },
    privKey: function privKey() {
      return this.wallet.getPrivKey();
    }
  },
  methods: {
    onCopySucc: function onCopySucc() {
      this.$root.success('copy success');
    },
    onCopyError: function onCopyError() {
      this.$root.error('copy fail');
    },
    refreshWallet: function refreshWallet() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.wallet.setInfo();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ "L5P4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__ = __webpack_require__("+Udk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      address: '',
      amount: '',
      symbol: 'HTML',
      tokens: [],
      addTokenStep: 1,
      addTokenDialog: false,
      addTokenLoading: false,
      addTokenName: '',
      addTokenSymbol: '',
      addTokenAddress: '',
      addTokenDecimals: 8,
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmAddressDialog: false,
      repeatAddress: '',
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var amountCheck = /^\d+\.?\d*$/.test(this.amount) && this.amount > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(amountCheck && feeCheck);
    }
  },
  methods: {
    send: function send() {
      this.confirmAddressDialog = true;
      this.canSend = false;
    },
    confirmAddress: function confirmAddress() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wallet, token, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this.address !== _this.repeatAddress)) {
                  _context.next = 3;
                  break;
                }

                _this.$root.error('address_is_not_same_as_the_old_one');
                return _context.abrupt('return', false);

              case 3:
                _this.confirmAddressDialog = false;
                _this.confirmSendDialog = true;
                wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet();
                _context.prev = 6;

                if (!(_this.symbol == 'HTML')) {
                  _context.next = 14;
                  break;
                }

                if (wallet.extend.ledger) {
                  _this.rawTx = 'Please confirm tx on your ledger...';
                }
                _context.next = 11;
                return wallet.generateTx(_this.address, _this.amount, _this.fee);

              case 11:
                _this.rawTx = _context.sent;
                _context.next = 21;
                break;

              case 14:
                if (!__WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].checkSymbol(_this.symbol)) {
                  _context.next = 21;
                  break;
                }

                if (wallet.extend.ledger) {
                  _this.rawTx = 'Please confirm tx on your ledger...';
                }
                token = __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].getTokenBySymbol(_this.symbol);
                encodedData = __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].encodeSendData(token, _this.address, _this.amount);
                _context.next = 20;
                return wallet.generateSendToContractTx(token.address, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 20:
                _this.rawTx = _context.sent;

              case 21:
                _this.canSend = true;
                _context.next = 30;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context['catch'](6);

                alert(_context.t0.message || _context.t0);
                _this.$root.log.error('send_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 30:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[6, 24]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                _this2.$root.success('Successful send. You can view at ' + __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId));
                _this2.$emit('send');
                _context2.next = 16;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 11]]);
      }))();
    },
    searchAddToken: function searchAddToken() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var tokenInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.addTokenLoading = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].fetchTokenInfo(_this3.addTokenAddress);

              case 4:
                tokenInfo = _context3.sent;

                _this3.addTokenName = tokenInfo.name;
                _this3.addTokenSymbol = tokenInfo.symbol;
                _this3.addTokenDecimals = tokenInfo.decimals;
                _context3.next = 15;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3['catch'](1);

                _this3.addTokenLoading = false;
                if (_context3.t0.response.status === 404) {
                  _this3.$root.error('token_contract_address_is_not_exists');
                  _this3.$root.log.error('token_contract_address_is_not_exists', _this3.addTokenAddress);
                } else {
                  alert(_context3.t0.message || _context3.t0);
                  _this3.addTokenDialog = false;
                }
                return _context3.abrupt('return', false);

              case 15:
                _this3.addTokenLoading = false;
                _this3.addTokenStep = 2;

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 10]]);
      }))();
    },
    confirmAddToken: function confirmAddToken() {
      __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].addCustomToken(this.addTokenAddress, this.addTokenName, this.addTokenSymbol, this.addTokenDecimals);
      this.initTokens();
      this.symbol = this.addTokenSymbol;
      this.addTokenStep = 1;
      this.addTokenDialog = false;
      this.addTokenAddress = '';
    },
    initTokens: function initTokens() {
      var tokenList = [{ text: 'HTML', value: 'HTML' }];
      __WEBPACK_IMPORTED_MODULE_3_libs_hrc20__["a" /* default */].getTokenList().forEach(function (token) {
        tokenList[tokenList.length] = {
          text: token.symbol,
          value: token.symbol,
          name: token.name,
          address: token.address
        };
      });
      tokenList[tokenList.length] = { text: 'More...', value: 'more' };
      this.tokens = tokenList;
    }
  },
  mounted: function mounted() {
    this.initTokens();
  },

  watch: {
    'symbol': function symbol(to, from) {
      var _this4 = this;

      if (from === 'more') return true;
      if (to === 'more') {
        this.$nextTick(function () {
          _this4.symbol = from;
          _this4.addTokenDialog = true;
        });
      }
    }
  }
});

/***/ }),

/***/ "LUta":
/***/ (function(module, exports) {

module.exports = ["abaco","abbaglio","abbinato","abete","abisso","abolire","abrasivo","abrogato","accadere","accenno","accusato","acetone","achille","acido","acqua","acre","acrilico","acrobata","acuto","adagio","addebito","addome","adeguato","aderire","adipe","adottare","adulare","affabile","affetto","affisso","affranto","aforisma","afoso","africano","agave","agente","agevole","aggancio","agire","agitare","agonismo","agricolo","agrumeto","aguzzo","alabarda","alato","albatro","alberato","albo","albume","alce","alcolico","alettone","alfa","algebra","aliante","alibi","alimento","allagato","allegro","allievo","allodola","allusivo","almeno","alogeno","alpaca","alpestre","altalena","alterno","alticcio","altrove","alunno","alveolo","alzare","amalgama","amanita","amarena","ambito","ambrato","ameba","america","ametista","amico","ammasso","ammenda","ammirare","ammonito","amore","ampio","ampliare","amuleto","anacardo","anagrafe","analista","anarchia","anatra","anca","ancella","ancora","andare","andrea","anello","angelo","angolare","angusto","anima","annegare","annidato","anno","annuncio","anonimo","anticipo","anzi","apatico","apertura","apode","apparire","appetito","appoggio","approdo","appunto","aprile","arabica","arachide","aragosta","araldica","arancio","aratura","arazzo","arbitro","archivio","ardito","arenile","argento","argine","arguto","aria","armonia","arnese","arredato","arringa","arrosto","arsenico","arso","artefice","arzillo","asciutto","ascolto","asepsi","asettico","asfalto","asino","asola","aspirato","aspro","assaggio","asse","assoluto","assurdo","asta","astenuto","astice","astratto","atavico","ateismo","atomico","atono","attesa","attivare","attorno","attrito","attuale","ausilio","austria","autista","autonomo","autunno","avanzato","avere","avvenire","avviso","avvolgere","azione","azoto","azzimo","azzurro","babele","baccano","bacino","baco","badessa","badilata","bagnato","baita","balcone","baldo","balena","ballata","balzano","bambino","bandire","baraonda","barbaro","barca","baritono","barlume","barocco","basilico","basso","batosta","battuto","baule","bava","bavosa","becco","beffa","belgio","belva","benda","benevole","benigno","benzina","bere","berlina","beta","bibita","bici","bidone","bifido","biga","bilancia","bimbo","binocolo","biologo","bipede","bipolare","birbante","birra","biscotto","bisesto","bisnonno","bisonte","bisturi","bizzarro","blando","blatta","bollito","bonifico","bordo","bosco","botanico","bottino","bozzolo","braccio","bradipo","brama","branca","bravura","bretella","brevetto","brezza","briglia","brillante","brindare","broccolo","brodo","bronzina","brullo","bruno","bubbone","buca","budino","buffone","buio","bulbo","buono","burlone","burrasca","bussola","busta","cadetto","caduco","calamaro","calcolo","calesse","calibro","calmo","caloria","cambusa","camerata","camicia","cammino","camola","campale","canapa","candela","cane","canino","canotto","cantina","capace","capello","capitolo","capogiro","cappero","capra","capsula","carapace","carcassa","cardo","carisma","carovana","carretto","cartolina","casaccio","cascata","caserma","caso","cassone","castello","casuale","catasta","catena","catrame","cauto","cavillo","cedibile","cedrata","cefalo","celebre","cellulare","cena","cenone","centesimo","ceramica","cercare","certo","cerume","cervello","cesoia","cespo","ceto","chela","chiaro","chicca","chiedere","chimera","china","chirurgo","chitarra","ciao","ciclismo","cifrare","cigno","cilindro","ciottolo","circa","cirrosi","citrico","cittadino","ciuffo","civetta","civile","classico","clinica","cloro","cocco","codardo","codice","coerente","cognome","collare","colmato","colore","colposo","coltivato","colza","coma","cometa","commando","comodo","computer","comune","conciso","condurre","conferma","congelare","coniuge","connesso","conoscere","consumo","continuo","convegno","coperto","copione","coppia","copricapo","corazza","cordata","coricato","cornice","corolla","corpo","corredo","corsia","cortese","cosmico","costante","cottura","covato","cratere","cravatta","creato","credere","cremoso","crescita","creta","criceto","crinale","crisi","critico","croce","cronaca","crostata","cruciale","crusca","cucire","cuculo","cugino","cullato","cupola","curatore","cursore","curvo","cuscino","custode","dado","daino","dalmata","damerino","daniela","dannoso","danzare","datato","davanti","davvero","debutto","decennio","deciso","declino","decollo","decreto","dedicato","definito","deforme","degno","delegare","delfino","delirio","delta","demenza","denotato","dentro","deposito","derapata","derivare","deroga","descritto","deserto","desiderio","desumere","detersivo","devoto","diametro","dicembre","diedro","difeso","diffuso","digerire","digitale","diluvio","dinamico","dinnanzi","dipinto","diploma","dipolo","diradare","dire","dirotto","dirupo","disagio","discreto","disfare","disgelo","disposto","distanza","disumano","dito","divano","divelto","dividere","divorato","doblone","docente","doganale","dogma","dolce","domato","domenica","dominare","dondolo","dono","dormire","dote","dottore","dovuto","dozzina","drago","druido","dubbio","dubitare","ducale","duna","duomo","duplice","duraturo","ebano","eccesso","ecco","eclissi","economia","edera","edicola","edile","editoria","educare","egemonia","egli","egoismo","egregio","elaborato","elargire","elegante","elencato","eletto","elevare","elfico","elica","elmo","elsa","eluso","emanato","emblema","emesso","emiro","emotivo","emozione","empirico","emulo","endemico","enduro","energia","enfasi","enoteca","entrare","enzima","epatite","epilogo","episodio","epocale","eppure","equatore","erario","erba","erboso","erede","eremita","erigere","ermetico","eroe","erosivo","errante","esagono","esame","esanime","esaudire","esca","esempio","esercito","esibito","esigente","esistere","esito","esofago","esortato","esoso","espanso","espresso","essenza","esso","esteso","estimare","estonia","estroso","esultare","etilico","etnico","etrusco","etto","euclideo","europa","evaso","evidenza","evitato","evoluto","evviva","fabbrica","faccenda","fachiro","falco","famiglia","fanale","fanfara","fango","fantasma","fare","farfalla","farinoso","farmaco","fascia","fastoso","fasullo","faticare","fato","favoloso","febbre","fecola","fede","fegato","felpa","feltro","femmina","fendere","fenomeno","fermento","ferro","fertile","fessura","festivo","fetta","feudo","fiaba","fiducia","fifa","figurato","filo","finanza","finestra","finire","fiore","fiscale","fisico","fiume","flacone","flamenco","flebo","flemma","florido","fluente","fluoro","fobico","focaccia","focoso","foderato","foglio","folata","folclore","folgore","fondente","fonetico","fonia","fontana","forbito","forchetta","foresta","formica","fornaio","foro","fortezza","forzare","fosfato","fosso","fracasso","frana","frassino","fratello","freccetta","frenata","fresco","frigo","frollino","fronde","frugale","frutta","fucilata","fucsia","fuggente","fulmine","fulvo","fumante","fumetto","fumoso","fune","funzione","fuoco","furbo","furgone","furore","fuso","futile","gabbiano","gaffe","galateo","gallina","galoppo","gambero","gamma","garanzia","garbo","garofano","garzone","gasdotto","gasolio","gastrico","gatto","gaudio","gazebo","gazzella","geco","gelatina","gelso","gemello","gemmato","gene","genitore","gennaio","genotipo","gergo","ghepardo","ghiaccio","ghisa","giallo","gilda","ginepro","giocare","gioiello","giorno","giove","girato","girone","gittata","giudizio","giurato","giusto","globulo","glutine","gnomo","gobba","golf","gomito","gommone","gonfio","gonna","governo","gracile","grado","grafico","grammo","grande","grattare","gravoso","grazia","greca","gregge","grifone","grigio","grinza","grotta","gruppo","guadagno","guaio","guanto","guardare","gufo","guidare","ibernato","icona","identico","idillio","idolo","idra","idrico","idrogeno","igiene","ignaro","ignorato","ilare","illeso","illogico","illudere","imballo","imbevuto","imbocco","imbuto","immane","immerso","immolato","impacco","impeto","impiego","importo","impronta","inalare","inarcare","inattivo","incanto","incendio","inchino","incisivo","incluso","incontro","incrocio","incubo","indagine","india","indole","inedito","infatti","infilare","inflitto","ingaggio","ingegno","inglese","ingordo","ingrosso","innesco","inodore","inoltrare","inondato","insano","insetto","insieme","insonnia","insulina","intasato","intero","intonaco","intuito","inumidire","invalido","invece","invito","iperbole","ipnotico","ipotesi","ippica","iride","irlanda","ironico","irrigato","irrorare","isolato","isotopo","isterico","istituto","istrice","italia","iterare","labbro","labirinto","lacca","lacerato","lacrima","lacuna","laddove","lago","lampo","lancetta","lanterna","lardoso","larga","laringe","lastra","latenza","latino","lattuga","lavagna","lavoro","legale","leggero","lembo","lentezza","lenza","leone","lepre","lesivo","lessato","lesto","letterale","leva","levigato","libero","lido","lievito","lilla","limatura","limitare","limpido","lineare","lingua","liquido","lira","lirica","lisca","lite","litigio","livrea","locanda","lode","logica","lombare","londra","longevo","loquace","lorenzo","loto","lotteria","luce","lucidato","lumaca","luminoso","lungo","lupo","luppolo","lusinga","lusso","lutto","macabro","macchina","macero","macinato","madama","magico","maglia","magnete","magro","maiolica","malafede","malgrado","malinteso","malsano","malto","malumore","mana","mancia","mandorla","mangiare","manifesto","mannaro","manovra","mansarda","mantide","manubrio","mappa","maratona","marcire","maretta","marmo","marsupio","maschera","massaia","mastino","materasso","matricola","mattone","maturo","mazurca","meandro","meccanico","mecenate","medesimo","meditare","mega","melassa","melis","melodia","meninge","meno","mensola","mercurio","merenda","merlo","meschino","mese","messere","mestolo","metallo","metodo","mettere","miagolare","mica","micelio","michele","microbo","midollo","miele","migliore","milano","milite","mimosa","minerale","mini","minore","mirino","mirtillo","miscela","missiva","misto","misurare","mitezza","mitigare","mitra","mittente","mnemonico","modello","modifica","modulo","mogano","mogio","mole","molosso","monastero","monco","mondina","monetario","monile","monotono","monsone","montato","monviso","mora","mordere","morsicato","mostro","motivato","motosega","motto","movenza","movimento","mozzo","mucca","mucosa","muffa","mughetto","mugnaio","mulatto","mulinello","multiplo","mummia","munto","muovere","murale","musa","muscolo","musica","mutevole","muto","nababbo","nafta","nanometro","narciso","narice","narrato","nascere","nastrare","naturale","nautica","naviglio","nebulosa","necrosi","negativo","negozio","nemmeno","neofita","neretto","nervo","nessuno","nettuno","neutrale","neve","nevrotico","nicchia","ninfa","nitido","nobile","nocivo","nodo","nome","nomina","nordico","normale","norvegese","nostrano","notare","notizia","notturno","novella","nucleo","nulla","numero","nuovo","nutrire","nuvola","nuziale","oasi","obbedire","obbligo","obelisco","oblio","obolo","obsoleto","occasione","occhio","occidente","occorrere","occultare","ocra","oculato","odierno","odorare","offerta","offrire","offuscato","oggetto","oggi","ognuno","olandese","olfatto","oliato","oliva","ologramma","oltre","omaggio","ombelico","ombra","omega","omissione","ondoso","onere","onice","onnivoro","onorevole","onta","operato","opinione","opposto","oracolo","orafo","ordine","orecchino","orefice","orfano","organico","origine","orizzonte","orma","ormeggio","ornativo","orologio","orrendo","orribile","ortensia","ortica","orzata","orzo","osare","oscurare","osmosi","ospedale","ospite","ossa","ossidare","ostacolo","oste","otite","otre","ottagono","ottimo","ottobre","ovale","ovest","ovino","oviparo","ovocito","ovunque","ovviare","ozio","pacchetto","pace","pacifico","padella","padrone","paese","paga","pagina","palazzina","palesare","pallido","palo","palude","pandoro","pannello","paolo","paonazzo","paprica","parabola","parcella","parere","pargolo","pari","parlato","parola","partire","parvenza","parziale","passivo","pasticca","patacca","patologia","pattume","pavone","peccato","pedalare","pedonale","peggio","peloso","penare","pendice","penisola","pennuto","penombra","pensare","pentola","pepe","pepita","perbene","percorso","perdonato","perforare","pergamena","periodo","permesso","perno","perplesso","persuaso","pertugio","pervaso","pesatore","pesista","peso","pestifero","petalo","pettine","petulante","pezzo","piacere","pianta","piattino","piccino","picozza","piega","pietra","piffero","pigiama","pigolio","pigro","pila","pilifero","pillola","pilota","pimpante","pineta","pinna","pinolo","pioggia","piombo","piramide","piretico","pirite","pirolisi","pitone","pizzico","placebo","planare","plasma","platano","plenario","pochezza","poderoso","podismo","poesia","poggiare","polenta","poligono","pollice","polmonite","polpetta","polso","poltrona","polvere","pomice","pomodoro","ponte","popoloso","porfido","poroso","porpora","porre","portata","posa","positivo","possesso","postulato","potassio","potere","pranzo","prassi","pratica","precluso","predica","prefisso","pregiato","prelievo","premere","prenotare","preparato","presenza","pretesto","prevalso","prima","principe","privato","problema","procura","produrre","profumo","progetto","prolunga","promessa","pronome","proposta","proroga","proteso","prova","prudente","prugna","prurito","psiche","pubblico","pudica","pugilato","pugno","pulce","pulito","pulsante","puntare","pupazzo","pupilla","puro","quadro","qualcosa","quasi","querela","quota","raccolto","raddoppio","radicale","radunato","raffica","ragazzo","ragione","ragno","ramarro","ramingo","ramo","randagio","rantolare","rapato","rapina","rappreso","rasatura","raschiato","rasente","rassegna","rastrello","rata","ravveduto","reale","recepire","recinto","recluta","recondito","recupero","reddito","redimere","regalato","registro","regola","regresso","relazione","remare","remoto","renna","replica","reprimere","reputare","resa","residente","responso","restauro","rete","retina","retorica","rettifica","revocato","riassunto","ribadire","ribelle","ribrezzo","ricarica","ricco","ricevere","riciclato","ricordo","ricreduto","ridicolo","ridurre","rifasare","riflesso","riforma","rifugio","rigare","rigettato","righello","rilassato","rilevato","rimanere","rimbalzo","rimedio","rimorchio","rinascita","rincaro","rinforzo","rinnovo","rinomato","rinsavito","rintocco","rinuncia","rinvenire","riparato","ripetuto","ripieno","riportare","ripresa","ripulire","risata","rischio","riserva","risibile","riso","rispetto","ristoro","risultato","risvolto","ritardo","ritegno","ritmico","ritrovo","riunione","riva","riverso","rivincita","rivolto","rizoma","roba","robotico","robusto","roccia","roco","rodaggio","rodere","roditore","rogito","rollio","romantico","rompere","ronzio","rosolare","rospo","rotante","rotondo","rotula","rovescio","rubizzo","rubrica","ruga","rullino","rumine","rumoroso","ruolo","rupe","russare","rustico","sabato","sabbiare","sabotato","sagoma","salasso","saldatura","salgemma","salivare","salmone","salone","saltare","saluto","salvo","sapere","sapido","saporito","saraceno","sarcasmo","sarto","sassoso","satellite","satira","satollo","saturno","savana","savio","saziato","sbadiglio","sbalzo","sbancato","sbarra","sbattere","sbavare","sbendare","sbirciare","sbloccato","sbocciato","sbrinare","sbruffone","sbuffare","scabroso","scadenza","scala","scambiare","scandalo","scapola","scarso","scatenare","scavato","scelto","scenico","scettro","scheda","schiena","sciarpa","scienza","scindere","scippo","sciroppo","scivolo","sclerare","scodella","scolpito","scomparto","sconforto","scoprire","scorta","scossone","scozzese","scriba","scrollare","scrutinio","scuderia","scultore","scuola","scuro","scusare","sdebitare","sdoganare","seccatura","secondo","sedano","seggiola","segnalato","segregato","seguito","selciato","selettivo","sella","selvaggio","semaforo","sembrare","seme","seminato","sempre","senso","sentire","sepolto","sequenza","serata","serbato","sereno","serio","serpente","serraglio","servire","sestina","setola","settimana","sfacelo","sfaldare","sfamato","sfarzoso","sfaticato","sfera","sfida","sfilato","sfinge","sfocato","sfoderare","sfogo","sfoltire","sforzato","sfratto","sfruttato","sfuggito","sfumare","sfuso","sgabello","sgarbato","sgonfiare","sgorbio","sgrassato","sguardo","sibilo","siccome","sierra","sigla","signore","silenzio","sillaba","simbolo","simpatico","simulato","sinfonia","singolo","sinistro","sino","sintesi","sinusoide","sipario","sisma","sistole","situato","slitta","slogatura","sloveno","smarrito","smemorato","smentito","smeraldo","smilzo","smontare","smottato","smussato","snellire","snervato","snodo","sobbalzo","sobrio","soccorso","sociale","sodale","soffitto","sogno","soldato","solenne","solido","sollazzo","solo","solubile","solvente","somatico","somma","sonda","sonetto","sonnifero","sopire","soppeso","sopra","sorgere","sorpasso","sorriso","sorso","sorteggio","sorvolato","sospiro","sosta","sottile","spada","spalla","spargere","spatola","spavento","spazzola","specie","spedire","spegnere","spelatura","speranza","spessore","spettrale","spezzato","spia","spigoloso","spillato","spinoso","spirale","splendido","sportivo","sposo","spranga","sprecare","spronato","spruzzo","spuntino","squillo","sradicare","srotolato","stabile","stacco","staffa","stagnare","stampato","stantio","starnuto","stasera","statuto","stelo","steppa","sterzo","stiletto","stima","stirpe","stivale","stizzoso","stonato","storico","strappo","stregato","stridulo","strozzare","strutto","stuccare","stufo","stupendo","subentro","succoso","sudore","suggerito","sugo","sultano","suonare","superbo","supporto","surgelato","surrogato","sussurro","sutura","svagare","svedese","sveglio","svelare","svenuto","svezia","sviluppo","svista","svizzera","svolta","svuotare","tabacco","tabulato","tacciare","taciturno","tale","talismano","tampone","tannino","tara","tardivo","targato","tariffa","tarpare","tartaruga","tasto","tattico","taverna","tavolata","tazza","teca","tecnico","telefono","temerario","tempo","temuto","tendone","tenero","tensione","tentacolo","teorema","terme","terrazzo","terzetto","tesi","tesserato","testato","tetro","tettoia","tifare","tigella","timbro","tinto","tipico","tipografo","tiraggio","tiro","titanio","titolo","titubante","tizio","tizzone","toccare","tollerare","tolto","tombola","tomo","tonfo","tonsilla","topazio","topologia","toppa","torba","tornare","torrone","tortora","toscano","tossire","tostatura","totano","trabocco","trachea","trafila","tragedia","tralcio","tramonto","transito","trapano","trarre","trasloco","trattato","trave","treccia","tremolio","trespolo","tributo","tricheco","trifoglio","trillo","trincea","trio","tristezza","triturato","trivella","tromba","trono","troppo","trottola","trovare","truccato","tubatura","tuffato","tulipano","tumulto","tunisia","turbare","turchino","tuta","tutela","ubicato","uccello","uccisore","udire","uditivo","uffa","ufficio","uguale","ulisse","ultimato","umano","umile","umorismo","uncinetto","ungere","ungherese","unicorno","unificato","unisono","unitario","unte","uovo","upupa","uragano","urgenza","urlo","usanza","usato","uscito","usignolo","usuraio","utensile","utilizzo","utopia","vacante","vaccinato","vagabondo","vagliato","valanga","valgo","valico","valletta","valoroso","valutare","valvola","vampata","vangare","vanitoso","vano","vantaggio","vanvera","vapore","varano","varcato","variante","vasca","vedetta","vedova","veduto","vegetale","veicolo","velcro","velina","velluto","veloce","venato","vendemmia","vento","verace","verbale","vergogna","verifica","vero","verruca","verticale","vescica","vessillo","vestale","veterano","vetrina","vetusto","viandante","vibrante","vicenda","vichingo","vicinanza","vidimare","vigilia","vigneto","vigore","vile","villano","vimini","vincitore","viola","vipera","virgola","virologo","virulento","viscoso","visione","vispo","vissuto","visura","vita","vitello","vittima","vivanda","vivido","viziare","voce","voga","volatile","volere","volpe","voragine","vulcano","zampogna","zanna","zappato","zattera","zavorra","zefiro","zelante","zelo","zenzero","zerbino","zibetto","zinco","zircone","zitto","zolla","zotico","zucchero","zufolo","zulu","zuppa"]

/***/ }),

/***/ "LVcC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  common: {
    confirm: 'Confirm',
    cancel: 'Cancel',
    search: 'Search',
    copy: 'COPY',
    next: 'NEXT',
    question_mark: '? ',
    testnet: 'Testnet',
    mainnet: 'Htmlcoin Mainnet',
    menu: {
      create: 'Generate New Wallet',
      create_from_mnemonic: 'Create From Mnemonic',
      restore_from_mnemonic: 'Restore From Mnemonic',
      restore_from_wif: 'Restore From WIF',
      restore_from_mobile: 'Restore From Mobile Wallet',
      restore_from_key_file: 'Restore From Key File',
      restore_from_ledger: 'Restore From Ledger',
      view: 'View Wallet Info',
      dump_as_key_file: 'Dump As a Key File',
      transactions: 'View Wallet Txs',
      safe_send: 'Safe Send',
      send: 'Send',
      request_payment: 'Request Payment',
      create_contract: 'Create Contract',
      send_to_contract: 'Send To Contract',
      call_contract: 'Call Contract',
      settings: 'Settings',
      create_token: 'TokenFarm',
      dapp_myoffspring: 'MyOffspring'
    },
    info: {
      address: 'Address',
      balance: 'Balance',
      unconfirmed_balance: 'Unconfirmed Balance',
      priv_key: 'Private Key'
    },
    notify: {
      success: 'Success',
      fail: 'Failed',
      copy: 'Copy',
      password: 'Password',
      is_required: 'is required',
      parse: 'Parse',
      file: 'File',
      password_is_not_same_as_the_old_one: 'Password is not same as the old one',
      mnemonics_are_not_same_as_the_words_should_remember: 'The mnemonics are not same as the words you should remember',
      mnemonics_can_not_restore: 'Those mnemonics can not restore a wallet, please check and try again',
      address_is_not_same_as_the_old_one: 'This address is not same as the old one',
      from_address_is_not_same_as_the_wallet: 'The from address is not same as the wallet address',
      restore_wif_fail: 'Cannot restore a wallet from this WIF',
      the_key_file_is_not_a_valid_format: 'The key file is not a valid format',
      restore_key_file_fail: 'Restore from key file failed. Maybe the password is not correct',
      connect_ledger_fail: 'Fail to connect Ledger. Please re-plugin your ledger and try again',
      token_contract_address_is_not_exists: 'Token contract address does not exist, please confirm and try again'
    },
    mode: {
      normal: 'Normal',
      offline: 'Offline'
    }
  },
  mnemonic: {
    input_words: 'Please input words',
    label: 'M'
  },
  password: {
    enter: 'Please enter you password',
    password: 'password'
  },
  file_reader: {
    upload: 'Upload'
  },
  file_creator: {
    download: 'Please click this button to start downloading your backup. You can also right-click and choose "save link as ..."'
  },
  ledger: {
    comm_fail: 'Fail to connect Ledger. Please re-plugin your ledger and try again'
  },
  derive_path: {
    title: 'Please choose a derive path',
    default: 'Default path',
    add_custom: 'Add custom derive path',
    edit_custom: 'Edit custom derive path',
    del_custom: 'Do you confirm to delete this path?',
    path_name: 'Path name',
    path: 'Path',
    prev_10: 'Prev 10 Address',
    next_10: 'Next 10 Address'
  },
  safe_send: {
    title: 'Safe Send',
    from_address: 'From Address',
    to_address: 'To Address',
    amount: 'Amount',
    fee: 'Fee',
    info: 'You need two computers (one online and one offline) and a removeable storage device to finish a safe-send. If you follow the tips below, you will not risk leaking your private key. For the offline computer, please in "Settings"-"Mode" choose "offline", and then restore your wallet.',
    info1_online: 'Please finish the form, then save the file and copy to the offline computer. And the finish step 2 on the offline computer',
    info1_offline: 'Please finish step 1 on the online computer and copy the file from online computer and then go to step 2',
    info2_online: 'Please finish this step on offline computer, and copy the file from offline computer and then go to step 3',
    info2_offline: 'Please upload the file copy from online computer, and finish the signature, and then save the file and copy back to online computer',
    info3_online: 'Please upload the file from the offline computer, and then finish the safe-send',
    info3_offline: 'Please finish this step on the online computer'
  },
  send: {
    send_tokens: 'Send',
    enter_address: 'Please enter address again (Double check)',
    going_to_send: 'You are going to send ',
    to_address: 'to address ',
    token_address: 'Token Contract Address'
  },
  request_payment: {
    title: 'Request Payment'
  },
  create_token: {
    title: 'Create Token',
    name: 'Token Name',
    symbol: 'Token Symbol',
    decimal: 'Decimals (It\'s recommended to set decimals to 8)',
    total_supply: 'Total Supply (UNIT: 1 Token)',
    confirm: 'Do you confirm the creation of this Token?'
  },
  create_contract: {
    title: 'Create Contract',
    confirm: 'Do you confirm to publish this contract?',
    compiler: 'Compiler'
  },
  send_to_contract: {
    title: 'Send To Contract',
    confirm: 'Do you confirm?'
  },
  call_contract: {
    title: 'Call Contract',
    result: 'Result'
  },
  create: {
    title: 'Generate New Wallet'
  },
  create_mnemonic: {
    title: 'Generate New Wallet',
    remember: 'Please remember the following mnemonics',
    remembered: 'I have remembered all. Let\'s check'
  },
  restore: {
    title: 'Restore Wallet',
    mnemonic_warning: 'The input words are not bip39 mnemonics. If your address is generated by this wallet, please cancel this dialog and then check your words(no space, no capital letter etc.). If you have double checked your words, you can continue.'
  },
  restore_wif: {
    title: 'Restore Wallet From WIF',
    priv_key: 'WIF'
  },
  restore_mobile: {
    title: 'Restore From Mobile Wallet'
  },
  restore_key_file: {
    title: 'Restore From The Key File',
    password_title: 'Please input you password to decrypt the wallet'
  },
  restore_ledger: {
    title: 'Restore From Ledger',
    usage: 'Please ensure your firmware and app are the newest version. Plugin your Ledger, open Html APP, and then click the "CONNECT" button below try to connect.',
    download: 'No Html APP? Please install it follow this https://www.ledgerwallet.com/apps/manager',
    connect: 'CONNECT'
  },
  view: {
    title: 'View Wallet Info'
  },
  view_tx: {
    title: 'View Wallet Txs',
    recent: 'Recent 10 txs',
    tx: 'Tx: ',
    mined_at: 'Mined at ',
    total_in: 'TOTAL IN: ',
    fee: 'FEE: ',
    total_out: 'TOTAL OUT: '
  },
  dump_as_key_file: {
    title: 'Dump as a key file',
    password_title: 'Please input a password to encrypt your wallet',
    warning: 'Please remember this password. If you lose it, this backup file cannot be decrypted anymore'
  },
  config: {
    title: 'Settings',
    lan: 'Language',
    network: 'Network',
    mode: 'Mode'
  },
  warning: {
    title: 'Important',
    list: ['We cannot recover your funds if you visit a phishing site or lose your backups. Please make sure to keep backups of your private keys/seed words safe.', 'We do not store your private keys and/or seed words on this web wallet.', 'We are not responsible for any lost funds or damages related to the use of this platform.', 'You as a user, are entirely responsible for your funds and your own security.', 'Please make sure to utilize updated operating systems and antivirus programs/services.', 'Please keep your private keys PRIVATE, do not give them to anyone.', 'If you use Restore from Mnemonic, the seed words and password must be exactly right or the wallet will create a new address. When using Restore from Mnemonic, confirm you have the correct address.']
  }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354ba043_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("HwYL");
function injectStyle (ssrContext) {
  __webpack_require__("DMj2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_354ba043_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MSCV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FileCreator_vue__ = __webpack_require__("Phfv");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22a7119e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileCreator_vue__ = __webpack_require__("2N3Z");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FileCreator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22a7119e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileCreator_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MhUS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_PasswordCreate__ = __webpack_require__("iwj8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_FileCreator__ = __webpack_require__("MSCV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_keyfile__ = __webpack_require__("72kf");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      step: 1,
      passwordRequired: false,
      fileStr: false
    };
  },

  props: ['view'],
  watch: {
    view: function view() {
      this.step = 1;
    }
  },
  components: {
    password: __WEBPACK_IMPORTED_MODULE_0_components_PasswordCreate__["a" /* default */],
    fileCreator: __WEBPACK_IMPORTED_MODULE_2_components_FileCreator__["a" /* default */]
  },
  methods: {
    setPassword: function setPassword(password) {
      var wallet = __WEBPACK_IMPORTED_MODULE_1_libs_web_wallet__["a" /* default */].restoreFromMnemonic(__WEBPACK_IMPORTED_MODULE_1_libs_web_wallet__["a" /* default */].generateMnemonic(), Date.now());
      this.fileStr = 'data:text/plain,' + __WEBPACK_IMPORTED_MODULE_3_libs_keyfile__["a" /* default */].build(__WEBPACK_IMPORTED_MODULE_3_libs_keyfile__["a" /* default */].encode(wallet.getPrivKey(), password));
      this.passwordRequired = false;
    },
    createWallet: function createWallet() {
      this.step = 2;
      this.passwordRequired = true;
    },
    dumpDone: function dumpDone() {
      var _this = this;

      setTimeout(function () {
        _this.$emit('created');
      }, 1000);
    }
  }
});

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugins_vuetify__ = __webpack_require__("8kY9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_clipboard2__ = __webpack_require__("wvfG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_clipboard2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_clipboard2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify__ = __webpack_require__("3EgV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css__ = __webpack_require__("7zck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_css_material_icons_css__ = __webpack_require__("5NZv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_assets_css_material_icons_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_assets_css_material_icons_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_clipboard2___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"](__WEBPACK_IMPORTED_MODULE_4_App__["a" /* default */]).$mount('#app');

/***/ }),

/***/ "Nj6y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CallContract_vue__ = __webpack_require__("EGFZ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f45e594_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CallContract_vue__ = __webpack_require__("c6Ri");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CallContract_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f45e594_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CallContract_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Nm8Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("gaNr")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"green"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Info\n        "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        New Token\n        "),_c('v-icon',[_vm._v("local_florist")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("Welcome to TokenFarm!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                  This application allows you to create your own HRC-20 Token on "),_c('b',[_vm._v("AltHash")]),_vm._v(" blockchain, in just a few seconds!\n                  "),_c('br'),_c('br'),_vm._v("\n                  To create a new Token, just click on \"New Token\" menu item, and fill in the details.\n                  "),_c('br'),_c('br'),_vm._v("\n\t\t  After the Transaction is confirmed, you will be able to find your token on the \"View Wallet Info\" option in \"Wallet Functions\" menu. You might need to refresh the browser and re-import your wallet before seeing your Tokens.\n                  "),_c('br'),_c('br')])])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":this.$t('create_token.name'),"required":"","box":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"name"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('create_token.symbol'),"required":"","box":""},model:{value:(_vm.symbol),callback:function ($$v) {_vm.symbol=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"symbol"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('create_token.decimal'),"required":"","box":""},model:{value:(_vm.decimal),callback:function ($$v) {_vm.decimal=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"decimal"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('create_token.total_supply'),"required":"","box":""},model:{value:(_vm.totalSupply),callback:function ($$v) {_vm.totalSupply=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"totalSupply"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","box":"","background-color":"indigo lighten-3"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","box":"","background-color":"indigo lighten-3"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","box":"","background-color":"indigo lighten-3"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n                      "+_vm._s(_vm.$t('create_token.confirm'))+"\n                    ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Raw Tx","multi-line":"","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NysP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_MyOffspring_vue__ = __webpack_require__("U877");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f929878_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_MyOffspring_vue__ = __webpack_require__("qpBf");
function injectStyle (ssrContext) {
  __webpack_require__("9WOO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f929878"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_MyOffspring_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f929878_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_MyOffspring_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Phfv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  computed: {
    downloadName: function downloadName() {
      return this.download ? this.download : new Date().getTime();
    }
  },
  methods: {
    doneClick: function doneClick() {
      this.$emit('click');
    }
  },
  props: ['color', 'download', 'href']
});

/***/ }),

/***/ "QDfD":
/***/ (function(module, exports) {

module.exports = {"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}

/***/ }),

/***/ "QSGr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notify_vue__ = __webpack_require__("ZMJ6");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72b48952_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notify_vue__ = __webpack_require__("brDV");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notify_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72b48952_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notify_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "QbG2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateContract_vue__ = __webpack_require__("cAXN");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_babaa078_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateContract_vue__ = __webpack_require__("vyTM");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateContract_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_babaa078_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateContract_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Qi/x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('request_payment.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Address","required":"","disabled":""},on:{"input":_vm.drawQrCode},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Amount","required":""},on:{"input":_vm.drawQrCode},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Message","required":""},on:{"input":_vm.drawQrCode},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}}),_vm._v(" "),_c('p',{staticClass:"text-xs-center"},[_c('img',{attrs:{"src":_vm.qr}})])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "R9Gm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__ = __webpack_require__("G2dt");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wif: ''
    };
  },

  methods: {
    restore: function restore() {
      try {
        __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__["a" /* default */].restoreFromWif(this.wif);
      } catch (e) {
        this.$root.error('restore_wif_fail');
        this.$root.log.error('restore_wif_restore_error', e.stack || e.toString() || e);
        return false;
      }
      this.$emit('restored');
    }
  }
});

/***/ }),

/***/ "RLpJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/myoffspring_logo.021ffa1.png";

/***/ }),

/***/ "Rapo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ViewTx_vue__ = __webpack_require__("HWGS");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_761ea9e5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ViewTx_vue__ = __webpack_require__("EUbi");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ViewTx_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_761ea9e5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ViewTx_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Rufw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateToken_vue__ = __webpack_require__("Zwtj");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef10798_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateToken_vue__ = __webpack_require__("Nm8Y");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateToken_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ef10798_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateToken_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Rz30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bs58__ = __webpack_require__("ZDUk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bs58___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bs58__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_js_sha256__ = __webpack_require__("BUS2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_js_sha256__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var contractAddress = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "0" : "0a80f2e06289aea9b8140babd94ccf2fb01c55bc";

var abiJson = JSON.parse('[{"constant": false, "inputs": [{"name": "new_j", "type": "address"} ], "name": "change_j", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getCuts", "outputs": [{"name": "BiffCutSetting", "type": "uint256"}, {"name": "JCutSetting", "type": "uint256"}, {"name": "PCutSetting", "type": "uint256"}, {"name": "NCutSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "approve", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_n", "type": "address"} ], "name": "change_n", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryChances", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_buyTokensFrom", "outputs": [{"name": "numOfTokensPurchased", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transferFrom", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_whatsForSale", "outputs": [{"name": "numTokensBeingSold", "type": "uint256"}, {"name": "priceOfEachToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "lotteryID", "type": "string"} ], "name": "checkLotteryResults", "outputs": [{"name": "_player", "type": "address"}, {"name": "_lotteryType", "type": "uint8"}, {"name": "_playedAmount", "type": "uint256"}, {"name": "_luckyNumber", "type": "uint256"}, {"name": "_drawnNumber", "type": "uint256"}, {"name": "_win", "type": "bool"}, {"name": "_rewardAmount", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "who", "type": "uint256"}, {"name": "fakeAmount", "type": "uint256"} ], "name": "BIFP_testFeeAndCuts", "outputs": [{"name": "feeCollected", "type": "uint256"}, {"name": "biffGot", "type": "uint256"}, {"name": "jGot", "type": "uint256"}, {"name": "pGot", "type": "uint256"}, {"name": "nGot", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "player", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_upForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "standard", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "b", "type": "uint256"}, {"name": "j", "type": "uint256"}, {"name": "p", "type": "uint256"}, {"name": "n", "type": "uint256"} ], "name": "BIFP_setFeeCuts", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerIsOwnerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchTokenLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "tokensForSale", "outputs": [{"name": "numTokensForSale", "type": "uint256"}, {"name": "pricePerToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "confirmOwnershipTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_p", "type": "address"} ], "name": "change_p", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "potentialOwner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryChances", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "prizeName", "type": "string"} ], "name": "getPrizeBalance", "outputs": [{"name": "prizeBalance", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "BIFP_addToTokenPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "prizeName", "type": "string"}, {"name": "newAmount", "type": "uint256"} ], "name": "setPrizeBalance", "outputs": [{"name": "prizePrevBalance", "type": "uint256"}, {"name": "prizeNewBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_addToHtmlPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getFees", "outputs": [{"name": "feeOwnerSetting", "type": "uint256"}, {"name": "feeSellerSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "amount", "type": "uint256"} ], "name": "BIFP_loadUpForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchHtmlcoinLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryChances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "luckyNumber", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_playLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"} ], "name": "allowance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "quantity", "type": "uint256"}, {"name": "htmlPrice", "type": "uint256"} ], "name": "BIFP_setSell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "newOwner", "type": "address"} ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"} ], "name": "Transfer", "type": "event"} ]');

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
      active: 0,
      buyBank: true,
      buyUsers: false,
      playLottery: true,
      playUpForGrabs: false,
      checkResults: false,
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
    };
  },

  watch: {
    checkResults: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(val) {
        var decodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!val) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return this.callContractFunction(contractAddress, abiJson, 'checkLotteryResults', [this.lotteryID]);

              case 4:
                decodedResult = _context.sent;


                this.drawnNumber = decodedResult[4].toString();

                if (decodedResult[5].toString() == 'true') {
                  this.lotteryRewardAmount = parseInt(decodedResult[6]) / 100000000;
                  if (decodedResult[1].toString() == '1') {
                    this.lotteryType = 'BIFP';
                  } else {
                    this.lotteryType = 'HTML';
                  }

                  this.lotteryWin = true;
                } else {
                  this.lotteryWin = false;
                }

                this.checkResults = false;
                this.txConfirmed = true;

                _context.next = 16;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](1);

                this.$root.log.error('call_contract_call_contract_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                this.execResultDialog = false;

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function checkResults(_x) {
        return _ref.apply(this, arguments);
      }

      return checkResults;
    }()
  },
  methods: {
    runLottery: function runLottery() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var playedAmount, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                _this.lotteryID = __WEBPACK_IMPORTED_MODULE_8_js_sha256___default()(_this.wallet.info.address + Date.now());

                playedAmount = _this.lotteryBet * 100000000;
                encodedData = _this.encodeContractSendFunction(abiJson, 'BIFP_playLottery', [playedAmount, _this.lotteryLuckyNumber, _this.lotteryID]);


                _this.confirmSendDialog = true;

                _context2.prev = 5;
                _context2.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 8:
                _this.rawTx = _context2.sent;
                _context2.next = 17;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](5);

                _this.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 17:
                _this.canSend = true;
                _context2.next = 26;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t1 = _context2['catch'](0);

                _this.$root.error('Params error');
                _this.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 26:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[0, 20], [5, 11]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var txId, txViewUrl, apiURL, interval;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:

                _this2.sending = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context3.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this2.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this2.$emit('send');

                _this2.txReceiptDialog = true;
                _this2.awaitingTx = true;

                apiURL = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';
                interval = setInterval(function () {

                  __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(apiURL + txId).then(function (result) {
                    console.log('Checking Tx...');

                    if (result.data.confirmations > 0) {
                      clearInterval(interval);
                      _this2.awaitingTx = false;

                      if (result.data.receipt[0].excepted != 'None') {
                        _this2.txError = true;
                      } else {
                        _this2.checkResults = true;
                      }
                    }
                  }).catch(console.error);
                }, 30 * 1000);
                _context3.next = 21;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3['catch'](1);

                alert(_context3.t0.message || _context3.t0);
                _this2.$root.log.error('send_to_contract_post_raw_tx_error', _context3.t0.response || _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                _this2.confirmSendDialog = false;

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[1, 16]]);
      }))();
    },
    findIndexByName: function findIndexByName(abiJson, name) {
      return abiJson.findIndex(function (item) {
        return item.name === name;
      });
    },
    callContractFunction: function callContractFunction(contractAddress, abiJson, functionName, params) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var encodedData, encodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[_this3.findIndexByName(abiJson, functionName)], params).substr(2);
                _context4.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(contractAddress, encodedData);

              case 3:
                encodedResult = _context4.sent;

                encodedResult = '0x' + encodedResult;

                return _context4.abrupt('return', __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.decodeMethod(abiJson[_this3.findIndexByName(abiJson, functionName)], encodedResult));

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3);
      }))();
    },
    encodeContractSendFunction: function encodeContractSendFunction(abiJson, functionName, params) {
      return __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[this.findIndexByName(abiJson, functionName)], params).substr(2);
    },


    onCopySucc: function onCopySucc() {
      this.$root.success('copy success');
    },
    onCopyError: function onCopyError() {
      this.$root.error('copy fail');
    }
  }
});

/***/ }),

/***/ "S96s":
/***/ (function(module, exports) {

module.exports = ["的","一","是","在","不","了","有","和","人","这","中","大","为","上","个","国","我","以","要","他","时","来","用","们","生","到","作","地","于","出","就","分","对","成","会","可","主","发","年","动","同","工","也","能","下","过","子","说","产","种","面","而","方","后","多","定","行","学","法","所","民","得","经","十","三","之","进","着","等","部","度","家","电","力","里","如","水","化","高","自","二","理","起","小","物","现","实","加","量","都","两","体","制","机","当","使","点","从","业","本","去","把","性","好","应","开","它","合","还","因","由","其","些","然","前","外","天","政","四","日","那","社","义","事","平","形","相","全","表","间","样","与","关","各","重","新","线","内","数","正","心","反","你","明","看","原","又","么","利","比","或","但","质","气","第","向","道","命","此","变","条","只","没","结","解","问","意","建","月","公","无","系","军","很","情","者","最","立","代","想","已","通","并","提","直","题","党","程","展","五","果","料","象","员","革","位","入","常","文","总","次","品","式","活","设","及","管","特","件","长","求","老","头","基","资","边","流","路","级","少","图","山","统","接","知","较","将","组","见","计","别","她","手","角","期","根","论","运","农","指","几","九","区","强","放","决","西","被","干","做","必","战","先","回","则","任","取","据","处","队","南","给","色","光","门","即","保","治","北","造","百","规","热","领","七","海","口","东","导","器","压","志","世","金","增","争","济","阶","油","思","术","极","交","受","联","什","认","六","共","权","收","证","改","清","美","再","采","转","更","单","风","切","打","白","教","速","花","带","安","场","身","车","例","真","务","具","万","每","目","至","达","走","积","示","议","声","报","斗","完","类","八","离","华","名","确","才","科","张","信","马","节","话","米","整","空","元","况","今","集","温","传","土","许","步","群","广","石","记","需","段","研","界","拉","林","律","叫","且","究","观","越","织","装","影","算","低","持","音","众","书","布","复","容","儿","须","际","商","非","验","连","断","深","难","近","矿","千","周","委","素","技","备","半","办","青","省","列","习","响","约","支","般","史","感","劳","便","团","往","酸","历","市","克","何","除","消","构","府","称","太","准","精","值","号","率","族","维","划","选","标","写","存","候","毛","亲","快","效","斯","院","查","江","型","眼","王","按","格","养","易","置","派","层","片","始","却","专","状","育","厂","京","识","适","属","圆","包","火","住","调","满","县","局","照","参","红","细","引","听","该","铁","价","严","首","底","液","官","德","随","病","苏","失","尔","死","讲","配","女","黄","推","显","谈","罪","神","艺","呢","席","含","企","望","密","批","营","项","防","举","球","英","氧","势","告","李","台","落","木","帮","轮","破","亚","师","围","注","远","字","材","排","供","河","态","封","另","施","减","树","溶","怎","止","案","言","士","均","武","固","叶","鱼","波","视","仅","费","紧","爱","左","章","早","朝","害","续","轻","服","试","食","充","兵","源","判","护","司","足","某","练","差","致","板","田","降","黑","犯","负","击","范","继","兴","似","余","坚","曲","输","修","故","城","夫","够","送","笔","船","占","右","财","吃","富","春","职","觉","汉","画","功","巴","跟","虽","杂","飞","检","吸","助","升","阳","互","初","创","抗","考","投","坏","策","古","径","换","未","跑","留","钢","曾","端","责","站","简","述","钱","副","尽","帝","射","草","冲","承","独","令","限","阿","宣","环","双","请","超","微","让","控","州","良","轴","找","否","纪","益","依","优","顶","础","载","倒","房","突","坐","粉","敌","略","客","袁","冷","胜","绝","析","块","剂","测","丝","协","诉","念","陈","仍","罗","盐","友","洋","错","苦","夜","刑","移","频","逐","靠","混","母","短","皮","终","聚","汽","村","云","哪","既","距","卫","停","烈","央","察","烧","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","游","久","菜","味","旧","模","湖","货","损","预","阻","毫","普","稳","乙","妈","植","息","扩","银","语","挥","酒","守","拿","序","纸","医","缺","雨","吗","针","刘","啊","急","唱","误","训","愿","审","附","获","茶","鲜","粮","斤","孩","脱","硫","肥","善","龙","演","父","渐","血","欢","械","掌","歌","沙","刚","攻","谓","盾","讨","晚","粒","乱","燃","矛","乎","杀","药","宁","鲁","贵","钟","煤","读","班","伯","香","介","迫","句","丰","培","握","兰","担","弦","蛋","沉","假","穿","执","答","乐","谁","顺","烟","缩","征","脸","喜","松","脚","困","异","免","背","星","福","买","染","井","概","慢","怕","磁","倍","祖","皇","促","静","补","评","翻","肉","践","尼","衣","宽","扬","棉","希","伤","操","垂","秋","宜","氢","套","督","振","架","亮","末","宪","庆","编","牛","触","映","雷","销","诗","座","居","抓","裂","胞","呼","娘","景","威","绿","晶","厚","盟","衡","鸡","孙","延","危","胶","屋","乡","临","陆","顾","掉","呀","灯","岁","措","束","耐","剧","玉","赵","跳","哥","季","课","凯","胡","额","款","绍","卷","齐","伟","蒸","殖","永","宗","苗","川","炉","岩","弱","零","杨","奏","沿","露","杆","探","滑","镇","饭","浓","航","怀","赶","库","夺","伊","灵","税","途","灭","赛","归","召","鼓","播","盘","裁","险","康","唯","录","菌","纯","借","糖","盖","横","符","私","努","堂","域","枪","润","幅","哈","竟","熟","虫","泽","脑","壤","碳","欧","遍","侧","寨","敢","彻","虑","斜","薄","庭","纳","弹","饲","伸","折","麦","湿","暗","荷","瓦","塞","床","筑","恶","户","访","塔","奇","透","梁","刀","旋","迹","卡","氯","遇","份","毒","泥","退","洗","摆","灰","彩","卖","耗","夏","择","忙","铜","献","硬","予","繁","圈","雪","函","亦","抽","篇","阵","阴","丁","尺","追","堆","雄","迎","泛","爸","楼","避","谋","吨","野","猪","旗","累","偏","典","馆","索","秦","脂","潮","爷","豆","忽","托","惊","塑","遗","愈","朱","替","纤","粗","倾","尚","痛","楚","谢","奋","购","磨","君","池","旁","碎","骨","监","捕","弟","暴","割","贯","殊","释","词","亡","壁","顿","宝","午","尘","闻","揭","炮","残","冬","桥","妇","警","综","招","吴","付","浮","遭","徐","您","摇","谷","赞","箱","隔","订","男","吹","园","纷","唐","败","宋","玻","巨","耕","坦","荣","闭","湾","键","凡","驻","锅","救","恩","剥","凝","碱","齿","截","炼","麻","纺","禁","废","盛","版","缓","净","睛","昌","婚","涉","筒","嘴","插","岸","朗","庄","街","藏","姑","贸","腐","奴","啦","惯","乘","伙","恢","匀","纱","扎","辩","耳","彪","臣","亿","璃","抵","脉","秀","萨","俄","网","舞","店","喷","纵","寸","汗","挂","洪","贺","闪","柬","爆","烯","津","稻","墙","软","勇","像","滚","厘","蒙","芳","肯","坡","柱","荡","腿","仪","旅","尾","轧","冰","贡","登","黎","削","钻","勒","逃","障","氨","郭","峰","币","港","伏","轨","亩","毕","擦","莫","刺","浪","秘","援","株","健","售","股","岛","甘","泡","睡","童","铸","汤","阀","休","汇","舍","牧","绕","炸","哲","磷","绩","朋","淡","尖","启","陷","柴","呈","徒","颜","泪","稍","忘","泵","蓝","拖","洞","授","镜","辛","壮","锋","贫","虚","弯","摩","泰","幼","廷","尊","窗","纲","弄","隶","疑","氏","宫","姐","震","瑞","怪","尤","琴","循","描","膜","违","夹","腰","缘","珠","穷","森","枝","竹","沟","催","绳","忆","邦","剩","幸","浆","栏","拥","牙","贮","礼","滤","钠","纹","罢","拍","咱","喊","袖","埃","勤","罚","焦","潜","伍","墨","欲","缝","姓","刊","饱","仿","奖","铝","鬼","丽","跨","默","挖","链","扫","喝","袋","炭","污","幕","诸","弧","励","梅","奶","洁","灾","舟","鉴","苯","讼","抱","毁","懂","寒","智","埔","寄","届","跃","渡","挑","丹","艰","贝","碰","拔","爹","戴","码","梦","芽","熔","赤","渔","哭","敬","颗","奔","铅","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","仓","魏","锐","晓","氮","兼","隐","碍","赫","拨","忠","肃","缸","牵","抢","博","巧","壳","兄","杜","讯","诚","碧","祥","柯","页","巡","矩","悲","灌","龄","伦","票","寻","桂","铺","圣","恐","恰","郑","趣","抬","荒","腾","贴","柔","滴","猛","阔","辆","妻","填","撤","储","签","闹","扰","紫","砂","递","戏","吊","陶","伐","喂","疗","瓶","婆","抚","臂","摸","忍","虾","蜡","邻","胸","巩","挤","偶","弃","槽","劲","乳","邓","吉","仁","烂","砖","租","乌","舰","伴","瓜","浅","丙","暂","燥","橡","柳","迷","暖","牌","秧","胆","详","簧","踏","瓷","谱","呆","宾","糊","洛","辉","愤","竞","隙","怒","粘","乃","绪","肩","籍","敏","涂","熙","皆","侦","悬","掘","享","纠","醒","狂","锁","淀","恨","牲","霸","爬","赏","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鸭","趋","凤","晨","畜","辈","秩","卵","署","梯","炎","滩","棋","驱","筛","峡","冒","啥","寿","译","浸","泉","帽","迟","硅","疆","贷","漏","稿","冠","嫩","胁","芯","牢","叛","蚀","奥","鸣","岭","羊","凭","串","塘","绘","酵","融","盆","锡","庙","筹","冻","辅","摄","袭","筋","拒","僚","旱","钾","鸟","漆","沈","眉","疏","添","棒","穗","硝","韩","逼","扭","侨","凉","挺","碗","栽","炒","杯","患","馏","劝","豪","辽","勃","鸿","旦","吏","拜","狗","埋","辊","掩","饮","搬","骂","辞","勾","扣","估","蒋","绒","雾","丈","朵","姆","拟","宇","辑","陕","雕","偿","蓄","崇","剪","倡","厅","咬","驶","薯","刷","斥","番","赋","奉","佛","浇","漫","曼","扇","钙","桃","扶","仔","返","俗","亏","腔","鞋","棱","覆","框","悄","叔","撞","骗","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","胀","谐","抛","霉","桑","岗","嘛","衰","盗","渗","脏","赖","涌","甜","曹","阅","肌","哩","厉","烃","纬","毅","昨","伪","症","煮","叹","钉","搭","茎","笼","酷","偷","弓","锥","恒","杰","坑","鼻","翼","纶","叙","狱","逮","罐","络","棚","抑","膨","蔬","寺","骤","穆","冶","枯","册","尸","凸","绅","坯","牺","焰","轰","欣","晋","瘦","御","锭","锦","丧","旬","锻","垄","搜","扑","邀","亭","酯","迈","舒","脆","酶","闲","忧","酚","顽","羽","涨","卸","仗","陪","辟","惩","杭","姚","肚","捉","飘","漂","昆","欺","吾","郎","烷","汁","呵","饰","萧","雅","邮","迁","燕","撒","姻","赴","宴","烦","债","帐","斑","铃","旨","醇","董","饼","雏","姿","拌","傅","腹","妥","揉","贤","拆","歪","葡","胺","丢","浩","徽","昂","垫","挡","览","贪","慰","缴","汪","慌","冯","诺","姜","谊","凶","劣","诬","耀","昏","躺","盈","骑","乔","溪","丛","卢","抹","闷","咨","刮","驾","缆","悟","摘","铒","掷","颇","幻","柄","惠","惨","佳","仇","腊","窝","涤","剑","瞧","堡","泼","葱","罩","霍","捞","胎","苍","滨","俩","捅","湘","砍","霞","邵","萄","疯","淮","遂","熊","粪","烘","宿","档","戈","驳","嫂","裕","徙","箭","捐","肠","撑","晒","辨","殿","莲","摊","搅","酱","屏","疫","哀","蔡","堵","沫","皱","畅","叠","阁","莱","敲","辖","钩","痕","坝","巷","饿","祸","丘","玄","溜","曰","逻","彭","尝","卿","妨","艇","吞","韦","怨","矮","歇"]

/***/ }),

/***/ "T/Vc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__ = __webpack_require__("MhUS");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_609c8afc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__ = __webpack_require__("h2Hj");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_609c8afc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "T7VU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreLedger_vue__ = __webpack_require__("Fzx9");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5dc2808_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreLedger_vue__ = __webpack_require__("zZEl");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreLedger_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e5dc2808_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreLedger_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TBqZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      currentIndex: 0,
      length: 12,
      mnemonic: []
    };
  },

  computed: {
    notFinishInput: function notFinishInput() {
      return this.mnemonic.filter(function (word) {
        return !!word;
      }).length !== this.length;
    }
  },
  methods: {
    inputMnemonicWords: function inputMnemonicWords() {
      this.$emit('mnemonic', this.mnemonic.join(' '));
    },
    tryInputMnemonicWords: function tryInputMnemonicWords() {
      if (this.notFinishInput) {
        if (this.mnemonic[this.currentIndex]) {
          this.$refs.mnemonicInput[this.currentIndex + 1].focus();
        }
        return;
      }
      this.inputMnemonicWords();
    },
    focus: function focus(index) {
      this.currentIndex = index;
    }
  }
});

/***/ }),

/***/ "TGXn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/myoffspring_splash2.56c6628.jpg";

/***/ }),

/***/ "Ts+B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreWif_vue__ = __webpack_require__("R9Gm");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52acd071_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreWif_vue__ = __webpack_require__("2MRl");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreWif_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_52acd071_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreWif_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "U877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_sha256__ = __webpack_require__("BUS2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_js_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qrcode__ = __webpack_require__("71e1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_qrcode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_printd__ = __webpack_require__("5OkI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_printd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_printd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_qrcode_reader__ = __webpack_require__("AbOu");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loading: false,
      contractAddress: '0b0c37fa6d64078dac7cfa4ccc43529a615602a1',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      fullName: '',
      motherFullName: '',
      fatherFullName: '',
      dateOfBirth_menu: false,
      dateOfBirth: '',
      timeOfBirth_menu: false,
      timeOfBirth: null,
      timePicker: false,
      placeOfBirth: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      error: null,
      qrScan: false,
      camera: false,
      qrComponent: false,
      confirmSendDialog: false,
      execResultDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false,
      hashID: '',
      searchHashID: '',
      resultStatus: '',
      resultFullName: 'loading...',
      resultMotherFullName: 'loading...',
      resultFatherFullName: 'loading...',
      resultDateOfBirth: 'loading...',
      resultTimeOfBirth: 'loading...',
      resultPlaceOfBirth: 'loading...',
      qr: ''
    };
  },

  components: {
    QrcodeStream: __WEBPACK_IMPORTED_MODULE_8_vue_qrcode_reader__["QrcodeStream"],
    QrcodeCapture: __WEBPACK_IMPORTED_MODULE_8_vue_qrcode_reader__["QrcodeCapture"]
  },
  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var nameCheck = /^(?!\s*$).+/.test(this.fullName);
      var dateOfBirthCheck = /^(?:(?:31(-)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(-)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)\d{2})$|^(?:29(-)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)\d{2})$/.test(this.dateOfBirth.split("-").reverse().join("-")) && parseInt(this.dateOfBirth.replace(/-/g, "")) <= parseInt(this.todayFormattedDate());
      var timeOfBirthCheck = this.timeOfBirth == '' || /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(this.timeOfBirth);
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(nameCheck && dateOfBirthCheck && timeOfBirthCheck && gasPriceCheck && gasLimitCheck && feeCheck);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    },
    dateOfBirth_menu: function dateOfBirth_menu(val) {
      var _this = this;

      val && this.$nextTick(function () {
        return _this.$refs.picker.activePicker = 'YEAR';
      });
    },
    qrScan: function qrScan(val) {
      if (!val) this.camera = false;
    }
  },
  methods: {
    print: function print() {
      var cssText = '\n        #title {\n          font-family: Arial, Helvetica, sans-serif;\n          font-weight: bold;\n          font-size: x-large;\n          text-align: center;                      \n          display: block;\n          padding: 20px;\n          margin-top: 120px;\n        }\n\n        p {\n          font-family: Arial, Helvetica, sans-serif;\n          margin-left: 50px;\n        }\n\n        #certificate_id {\n          font-family: Arial, Helvetica, sans-serif;\n          text-align: center;\n          display: block;\n          padding: 20px;\n        }\n\n        #qr {\n          margin-left: auto;\n          margin-right: auto;\n          padding: 10px;\n          width: 100px; \n          height: auto;\n          display: block;\n        }\n\n        #btn {\n          display: none;\n        }\n\n        .logo1 {\n          float: left;\n          padding: 10px;\n          height: 20px;\n          width: auto;\n          margin-left: 25px;\n        }\n\n        .logo2 {\n          float: right;\n          padding: 10px;\n          height: 20px;\n          width: auto;\n          margin-right: 25px;\n        }\n      ';

      var d = new __WEBPACK_IMPORTED_MODULE_7_printd___default.a();

      var printCallback = function printCallback(_ref) {
        var launchPrint = _ref.launchPrint;
        return launchPrint();
      };

      d.print(document.getElementById('certificate'), cssText, printCallback);
    },
    scanQrcode: function scanQrcode() {
      this.searchHashID = '';
      this.qrComponent = true;
      this.camera = true;
      this.qrScan = true;
    },
    onDecode: function onDecode(certificateID) {
      this.searchHashID = certificateID;
      this.camera = false;
      this.qrScan = false;
      this.openCertificate();
    },
    onInit: function onInit(promise) {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return promise;

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context['catch'](0);

                if (_context.t0.name === 'NotAllowedError') {
                  _this2.error = "ERROR: you need to grant camera access permisson";
                } else if (_context.t0.name === 'NotFoundError') {
                  _this2.error = "ERROR: no camera on this device";
                } else if (_context.t0.name === 'NotSupportedError') {
                  _this2.error = "ERROR: secure context required (HTTPS, localhost)";
                } else if (_context.t0.name === 'NotReadableError') {
                  _this2.error = "ERROR: is the camera already in use?";
                } else if (_context.t0.name === 'OverconstrainedError') {
                  _this2.error = "ERROR: installed cameras are not suitable";
                } else if (_context.t0.name === 'StreamApiNotSupportedError') {
                  _this2.error = "ERROR: Stream API is not supported in this browser";
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 5]]);
      }))();
    },
    send: function send() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var abiJson, newDateOfBirth, newTimeOfBirth, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                abiJson = [{ "constant": true, "inputs": [{ "name": "hash", "type": "string" }], "name": "getHeir", "outputs": [{ "name": "result", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "hash", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "name": "newHeir", "outputs": [{ "name": "result", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "hash", "type": "string" }], "name": "heirEvent", "type": "event" }];
                newDateOfBirth = _this3.dateOfBirth.replace(/-/g, "");
                newTimeOfBirth = _this3.timeOfBirth.replace(/:/g, "");

                _this3.hashID = __WEBPACK_IMPORTED_MODULE_5_js_sha256___default()(_this3.fullName + _this3.motherFullName + _this3.fatherFullName + newDateOfBirth + newTimeOfBirth + _this3.placeOfBirth + Date.now());
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[1], [_this3.hashID, _this3.fullName, _this3.motherFullName, _this3.fatherFullName, newDateOfBirth, newTimeOfBirth, _this3.placeOfBirth]).substr(2);

                _this3.confirmSendDialog = true;
                _context2.prev = 7;
                _context2.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(_this3.contractAddress, encodedData, _this3.gasLimit, _this3.gasPrice, _this3.fee);

              case 10:
                _this3.rawTx = _context2.sent;
                _context2.next = 19;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](7);

                _this3.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this3.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 19:
                _this3.canSend = true;
                _context2.next = 28;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t1 = _context2['catch'](0);

                _this3.$root.error('Params error');
                _this3.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this3.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 28:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 22], [7, 13]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this4.sending = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this4.rawTx);

              case 4:
                txId = _context3.sent;

                _this4.confirmSendDialog = false;
                _this4.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this4.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this4.$emit('send');
                _this4.fullName = '';
                _this4.motherFullName = '';
                _this4.fatherFullName = '';
                _this4.dateOfBirth = '';
                _this4.timeOfBirth = null;
                _this4.placeOfBirth = '';
                _context3.next = 23;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3['catch'](1);

                alert(_context3.t0.message || _context3.t0);
                _this4.$root.log.error('send_to_contract_post_raw_tx_error', _context3.t0.response || _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                _this4.confirmSendDialog = false;

              case 23:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[1, 18]]);
      }))();
    },
    openCertificate: function openCertificate() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var abiJson, encodedData, encodedResult, decodedResult, rawDoB, formattedDateOfBirth, rawToB, formattedTimeOfBirth;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this5.searchHashID != '')) {
                  _context4.next = 49;
                  break;
                }

                _this5.loading = true;
                _context4.prev = 2;
                abiJson = [{ "constant": true, "inputs": [{ "name": "hash", "type": "string" }], "name": "getHeir", "outputs": [{ "name": "result", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "hash", "type": "string" }, { "name": "heirFullName", "type": "string" }, { "name": "motherFullName", "type": "string" }, { "name": "fatherFullName", "type": "string" }, { "name": "dateOfBirth", "type": "uint256" }, { "name": "timeOfBirth", "type": "uint256" }, { "name": "placeOfBirth", "type": "string" }], "name": "newHeir", "outputs": [{ "name": "result", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "hash", "type": "string" }], "name": "heirEvent", "type": "event" }];
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[0], [_this5.searchHashID]).substr(2);
                _context4.prev = 5;
                _context4.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(_this5.contractAddress, encodedData);

              case 8:
                encodedResult = _context4.sent;

                encodedResult = '0x' + encodedResult;
                decodedResult = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.decodeMethod(abiJson[0], encodedResult);
                rawDoB = decodedResult[4].toString();
                formattedDateOfBirth = '';

                if (rawDoB != '0') {
                  formattedDateOfBirth = rawDoB.substring(0, 4) + "-" + rawDoB.substring(4, 6) + "-" + rawDoB.substring(6);
                }
                rawToB = decodedResult[5].toString();
                formattedTimeOfBirth = '';

                if (!(rawToB != '0')) {
                  _context4.next = 29;
                  break;
                }

                _context4.t0 = rawToB.length;
                _context4.next = _context4.t0 === 3 ? 20 : _context4.t0 === 2 ? 22 : _context4.t0 === 1 ? 24 : 26;
                break;

              case 20:
                rawToB = '0' + rawToB;
                return _context4.abrupt('break', 26);

              case 22:
                rawToB = '00' + rawToB;
                return _context4.abrupt('break', 26);

              case 24:
                rawToB = '000' + rawToB;
                return _context4.abrupt('break', 26);

              case 26:
                formattedTimeOfBirth = rawToB.substring(0, 2) + ":" + rawToB.substring(2);
                _context4.next = 30;
                break;

              case 29:
                formattedTimeOfBirth = '00:00';

              case 30:
                _this5.resultStatus = decodedResult[0];
                _this5.loading = false;
                if (_this5.resultStatus == 'Heir record found.') {
                  _this5.execResultDialog = true;
                  _this5.resultFullName = decodedResult[1];
                  _this5.resultMotherFullName = decodedResult[2];
                  _this5.resultFatherFullName = decodedResult[3];
                  _this5.resultDateOfBirth = formattedDateOfBirth;
                  _this5.resultTimeOfBirth = formattedTimeOfBirth;
                  _this5.resultPlaceOfBirth = decodedResult[6];
                  _this5.drawQrCode();
                } else {
                  alert('Record not found!');
                }
                _context4.next = 41;
                break;

              case 35:
                _context4.prev = 35;
                _context4.t1 = _context4['catch'](5);

                _this5.loading = false;
                _this5.$root.log.error('call_contract_call_contract_error', _context4.t1.stack || _context4.t1.toString() || _context4.t1);
                alert(_context4.t1.message || _context4.t1);
                _this5.execResultDialog = false;

              case 41:
                _context4.next = 49;
                break;

              case 43:
                _context4.prev = 43;
                _context4.t2 = _context4['catch'](2);

                _this5.loading = false;
                _this5.$root.error('Params error');
                _this5.$root.log.error('call_contract_encode_abi_error', _context4.t2.stack || _context4.t2.toString() || _context4.t2);
                return _context4.abrupt('return', false);

              case 49:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this5, [[2, 43], [5, 35]]);
      }))();
    },
    dateOfBirth_save: function dateOfBirth_save(date) {
      this.$refs.dateOfBirth_menu.save(this.dateOfBirth);
    },
    timeOfBirth_save: function timeOfBirth_save() {
      this.$refs.timeOfBirth_menu.save(this.timeOfBirth);
    },
    todayFormattedDate: function todayFormattedDate() {
      var today = new Date();
      var dd = today.getDate().toString();
      var mm = (today.getMonth() + 1).toString(); //January is 0!
      var yyyy = today.getFullYear().toString();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      var formattedDate = yyyy + mm + dd;
      return formattedDate;
    },

    onCopySucc: function onCopySucc() {
      this.$root.success('copy success');
    },
    onCopyError: function onCopyError() {
      this.$root.error('copy fail');
    },
    drawQrCode: function drawQrCode() {
      var _this6 = this;

      __WEBPACK_IMPORTED_MODULE_6_qrcode___default.a.toDataURL('' + this.searchHashID, function (err, url) {
        _this6.qr = url;
      });
    }
  }
});

/***/ }),

/***/ "U8Q/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_plutonium_splash.f14e206.jpg";

/***/ }),

/***/ "Uzv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DumpKeyFile_vue__ = __webpack_require__("K5Bm");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70a298e2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DumpKeyFile_vue__ = __webpack_require__("BIpY");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DumpKeyFile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70a298e2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DumpKeyFile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Vncl":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/logo_altproof.acda6ab.png";

/***/ }),

/***/ "Wq6Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("wxAW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__ = __webpack_require__("LbyV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39__ = __webpack_require__("+Qgu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bip39___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bip39__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js__ = __webpack_require__("uotZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bignumber_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_libs_ledger__ = __webpack_require__("9rcu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_buffer__ = __webpack_require__("EuP9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_buffer__);













var unit = ' HTML';
var network = {};
switch (__WEBPACK_IMPORTED_MODULE_10_libs_config__["a" /* default */].getNetwork()) {
  case 'testnet':
    network = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.networks.htmlcoin_testnet;
    break;
  case 'mainnet':
    network = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.networks.htmlcoin;
    break;
}

var Wallet = function () {
  function Wallet(keyPair) {
    var extend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Wallet);

    this.keyPair = keyPair;
    this.extend = extend;
    this.info = {
      address: this.getAddress(),
      balance: 'loading',
      unconfirmedBalance: 'loading',
      hrc20: []
    };
    this.txList = [];
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Wallet, [{
    key: 'validateMnemonic',
    value: function validateMnemonic(mnemonic, password) {
      var tempWallet = Wallet.restoreFromMnemonic(mnemonic, password);
      return this.keyPair.toWIF() === tempWallet.keyPair.toWIF();
    }
  }, {
    key: 'getAddress',
    value: function getAddress() {
      return this.keyPair.getAddress();
    }
  }, {
    key: 'getHasPrivKey',
    value: function getHasPrivKey() {
      return !!this.keyPair.d;
    }
  }, {
    key: 'getPrivKey',
    value: function getPrivKey() {
      try {
        return this.keyPair.toWIF();
      } catch (e) {
        if (e.toString() === 'Error: Missing private key') {
          return null;
        } else {
          throw e;
        }
      }
    }
  }, {
    key: 'init',
    value: function init() {
      if (__WEBPACK_IMPORTED_MODULE_10_libs_config__["a" /* default */].getMode() !== 'offline') {
        this.setInfo();
        this.setHrc20();
        this.setTxList();
      }
    }
  }, {
    key: 'setInfo',
    value: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var info;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getInfo(this.info.address);

              case 2:
                info = _context.sent;

                this.info.balance = info.balance + unit;
                this.info.unconfirmedBalance = info.unconfirmedBalance + unit;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setInfo() {
        return _ref.apply(this, arguments);
      }

      return setInfo;
    }()
  }, {
    key: 'setHrc20',
    value: function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getHrc20(this.info.address);

              case 2:
                this.info.hrc20 = _context2.sent;

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setHrc20() {
        return _ref2.apply(this, arguments);
      }

      return setHrc20;
    }()
  }, {
    key: 'setTxList',
    value: function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getTxList(this.info.address);

              case 2:
                this.txList = _context3.sent;

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setTxList() {
        return _ref3.apply(this, arguments);
      }

      return setTxList;
    }()
  }, {
    key: 'generateCreateTokenTx',
    value: function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4(name, symbol, decimal, totalSupply1, gasLimit, gasPrice, fee) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = Wallet;
                _context4.t1 = this;
                _context4.t2 = name;
                _context4.t3 = symbol;
                _context4.t4 = decimal;
                _context4.t5 = totalSupply1;
                _context4.t6 = gasLimit;
                _context4.t7 = gasPrice;
                _context4.t8 = fee;
                _context4.next = 11;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 11:
                _context4.t9 = _context4.sent;
                return _context4.abrupt('return', _context4.t0.generateCreateTokenTx.call(_context4.t0, _context4.t1, _context4.t2, _context4.t3, _context4.t4, _context4.t5, _context4.t6, _context4.t7, _context4.t8, _context4.t9));

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function generateCreateTokenTx(_x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _ref4.apply(this, arguments);
      }

      return generateCreateTokenTx;
    }()
  }, {
    key: 'generateCreateContractTx',
    value: function () {
      var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5(code, gasLimit, gasPrice, fee) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = Wallet;
                _context5.t1 = this;
                _context5.t2 = code;
                _context5.t3 = gasLimit;
                _context5.t4 = gasPrice;
                _context5.t5 = fee;
                _context5.next = 8;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 8:
                _context5.t6 = _context5.sent;
                return _context5.abrupt('return', _context5.t0.generateCreateContractTx.call(_context5.t0, _context5.t1, _context5.t2, _context5.t3, _context5.t4, _context5.t5, _context5.t6));

              case 10:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function generateCreateContractTx(_x9, _x10, _x11, _x12) {
        return _ref5.apply(this, arguments);
      }

      return generateCreateContractTx;
    }()
  }, {
    key: 'generateSendToContractTx',
    value: function () {
      var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6(contractAddress, encodedData, gasLimit, gasPrice, fee) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = Wallet;
                _context6.t1 = this;
                _context6.t2 = contractAddress;
                _context6.t3 = encodedData;
                _context6.t4 = gasLimit;
                _context6.t5 = gasPrice;
                _context6.t6 = fee;
                _context6.next = 9;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 9:
                _context6.t7 = _context6.sent;
                _context6.next = 12;
                return _context6.t0.generateSendToContractTx.call(_context6.t0, _context6.t1, _context6.t2, _context6.t3, _context6.t4, _context6.t5, _context6.t6, _context6.t7);

              case 12:
                return _context6.abrupt('return', _context6.sent);

              case 13:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function generateSendToContractTx(_x13, _x14, _x15, _x16, _x17) {
        return _ref6.apply(this, arguments);
      }

      return generateSendToContractTx;
    }()
  }, {
    key: 'generateTx',
    value: function () {
      var _ref7 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7(to, amount, fee) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = Wallet;
                _context7.t1 = this;
                _context7.t2 = to;
                _context7.t3 = amount;
                _context7.t4 = fee;
                _context7.next = 7;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().getUtxoList(this.info.address);

              case 7:
                _context7.t5 = _context7.sent;
                _context7.next = 10;
                return _context7.t0.generateTx.call(_context7.t0, _context7.t1, _context7.t2, _context7.t3, _context7.t4, _context7.t5);

              case 10:
                return _context7.abrupt('return', _context7.sent);

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function generateTx(_x18, _x19, _x20) {
        return _ref7.apply(this, arguments);
      }

      return generateTx;
    }()
  }, {
    key: 'sendRawTx',
    value: function () {
      var _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8(tx) {
        var res;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return Wallet.sendRawTx(tx);

              case 2:
                res = _context8.sent;

                this.init();
                return _context8.abrupt('return', res);

              case 5:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function sendRawTx(_x21) {
        return _ref8.apply(this, arguments);
      }

      return sendRawTx;
    }()
  }, {
    key: 'callContract',
    value: function () {
      var _ref9 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9(address, encodedData) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return Wallet.callContract(address, encodedData);

              case 2:
                return _context9.abrupt('return', _context9.sent);

              case 3:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function callContract(_x22, _x23) {
        return _ref9.apply(this, arguments);
      }

      return callContract;
    }()
  }], [{
    key: 'generateCreateTokenTx',
    value: function generateCreateTokenTx(wallet, name, symbol, decimal, totalSupply1, gasLimit, gasPrice, fee, utxoList) {
      var hrc20TokenCode = '60606040526020604051908101604052806000815250600090805190602001906200002c929190620001b5565b5060206040519081016040528060008152506001908051906020019062000055929190620001b5565b506000600260006101000a81548160ff021916908360ff160217905550600060035534156200008357600080fd5b60405162000fa438038062000fa4833981016040528080518201919060200180518201919060200180519060200190919080519060200190919050508360009080519060200190620000d7929190620001b5565b508260019080519060200190620000f0929190620001b5565b5081600260006101000a81548160ff021916908360ff16021790555080600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff1660007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6003546040518082815260200191505060405180910390a35050505062000264565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001f857805160ff191683800117855562000229565b8280016001018555821562000229579182015b82811115620002285782518255916020019190600101906200020b565b5b5090506200023891906200023c565b5090565b6200026191905b808211156200025d57600081600090555060010162000243565b5090565b90565b610d3080620002746000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100a9578063095ea7b31461013757806318160ddd1461019157806323b872dd146101ba578063313ce567146102335780635a3b7e421461026257806370a08231146102f057806395d89b411461033d578063a9059cbb146103cb578063dd62ed3e14610425575b600080fd5b34156100b457600080fd5b6100bc610491565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fc5780820151818401526020810190506100e1565b50505050905090810190601f1680156101295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014257600080fd5b610177600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610539565b604051808215151515815260200191505060405180910390f35b341561019c57600080fd5b6101a46106e9565b6040518082815260200191505060405180910390f35b34156101c557600080fd5b610219600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106f3565b604051808215151515815260200191505060405180910390f35b341561023e57600080fd5b6102466109d3565b604051808260ff1660ff16815260200191505060405180910390f35b341561026d57600080fd5b6102756109ea565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b557808201518184015260208101905061029a565b50505050905090810190601f1680156102e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102fb57600080fd5b610327600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a23565b6040518082815260200191505060405180910390f35b341561034857600080fd5b610350610a3b565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610390578082015181840152602081019050610375565b50505050905090810190601f1680156103bd5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103d657600080fd5b61040b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae3565b604051808215151515815260200191505060405180910390f35b341561043057600080fd5b61047b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c94565b6040518082815260200191505060405180910390f35b610499610cf0565b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561052f5780601f106105045761010080835404028352916020019161052f565b820191906000526020600020905b81548152906001019060200180831161051257829003601f168201915b5050505050905090565b60008260008173ffffffffffffffffffffffffffffffffffffffff161415151561056257600080fd5b60008314806105ed57506000600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b15156105f857600080fd5b82600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a3600191505092915050565b6000600354905090565b60008360008173ffffffffffffffffffffffffffffffffffffffff161415151561071c57600080fd5b8360008173ffffffffffffffffffffffffffffffffffffffff161415151561074357600080fd5b6107c9600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485610cb9565b600560008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610892600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485610cb9565b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061091e600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485610cd2565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a36001925050509392505050565b6000600260009054906101000a900460ff16905090565b6040805190810160405280600981526020017f546f6b656e20302e31000000000000000000000000000000000000000000000081525081565b60046020528060005260406000206000915090505481565b610a43610cf0565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ad95780601f10610aae57610100808354040283529160200191610ad9565b820191906000526020600020905b815481529060010190602001808311610abc57829003601f168201915b5050505050905090565b60008260008173ffffffffffffffffffffffffffffffffffffffff1614151515610b0c57600080fd5b610b55600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610cb9565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610be1600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205484610cd2565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3600191505092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b6000818310151515610cc757fe5b818303905092915050565b6000808284019050838110151515610ce657fe5b8091505092915050565b6020604051908101604052806000815250905600a165627a7a72305820b4801b60642dbdf96ab8aeb750302c39320e18dfedd0c1bf9c8efb3d3d41701d0029';
      if (new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(totalSupply1).times(new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(10).pow(decimal)).greaterThanOrEqualTo(new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(2).pow(256))) {
        alert('Total supply is overflowed in uint256');
        return false;
      }
      var encodedParam = __WEBPACK_IMPORTED_MODULE_6_ethjs_abi___default.a.encodeParams(['string', 'string', 'uint8', 'uint256'], [name, symbol, decimal, '0x' + new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(totalSupply1).times(new __WEBPACK_IMPORTED_MODULE_7_bignumber_js___default.a(10).pow(decimal)).toString(16)]);
      console.log(encodedParam);
      return __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildCreateContractTransaction(wallet.keyPair, hrc20TokenCode + encodedParam.substr(2), gasLimit, gasPrice, fee, utxoList);
    }
  }, {
    key: 'generateCreateContractTx',
    value: function generateCreateContractTx(wallet, code, gasLimit, gasPrice, fee, utxoList) {
      return __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildCreateContractTransaction(wallet.keyPair, code, gasLimit, gasPrice, fee, utxoList);
    }
  }, {
    key: 'generateSendToContractTx',
    value: function () {
      var _ref10 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee10(wallet, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (wallet.getHasPrivKey()) {
                  _context10.next = 5;
                  break;
                }

                if (!wallet.extend.ledger) {
                  _context10.next = 5;
                  break;
                }

                _context10.next = 4;
                return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].generateSendToContractTx(wallet.keyPair, wallet.extend.ledger.ledger, wallet.extend.ledger.path, wallet.info.address, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList, __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().fetchRawTx);

              case 4:
                return _context10.abrupt('return', _context10.sent);

              case 5:
                return _context10.abrupt('return', __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildSendToContractTransaction(wallet.keyPair, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList));

              case 6:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function generateSendToContractTx(_x24, _x25, _x26, _x27, _x28, _x29, _x30) {
        return _ref10.apply(this, arguments);
      }

      return generateSendToContractTx;
    }()
  }, {
    key: 'generateTx',
    value: function () {
      var _ref11 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee11(wallet, to, amount, fee, utxoList) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (wallet.getHasPrivKey()) {
                  _context11.next = 5;
                  break;
                }

                if (!wallet.extend.ledger) {
                  _context11.next = 5;
                  break;
                }

                _context11.next = 4;
                return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].generateTx(wallet.keyPair, wallet.extend.ledger.ledger, wallet.extend.ledger.path, wallet.info.address, to, amount, fee, utxoList, __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().fetchRawTx);

              case 4:
                return _context11.abrupt('return', _context11.sent);

              case 5:
                return _context11.abrupt('return', __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.utils.buildPubKeyHashTransaction(wallet.keyPair, to, amount, fee, utxoList));

              case 6:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function generateTx(_x31, _x32, _x33, _x34, _x35) {
        return _ref11.apply(this, arguments);
      }

      return generateTx;
    }()
  }, {
    key: 'sendRawTx',
    value: function () {
      var _ref12 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee12(tx) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().sendRawTx(tx);

              case 2:
                return _context12.abrupt('return', _context12.sent);

              case 3:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function sendRawTx(_x36) {
        return _ref12.apply(this, arguments);
      }

      return sendRawTx;
    }()
  }, {
    key: 'callContract',
    value: function () {
      var _ref13 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee13(address, encodedData) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return __WEBPACK_IMPORTED_MODULE_9_libs_server__["a" /* default */].currentNode().callContract(address, encodedData);

              case 2:
                return _context13.abrupt('return', _context13.sent);

              case 3:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function callContract(_x37, _x38) {
        return _ref13.apply(this, arguments);
      }

      return callContract;
    }()
  }, {
    key: 'validateBip39Mnemonic',
    value: function validateBip39Mnemonic(mnemonic) {
      return __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.validateMnemonic(mnemonic);
    }
  }, {
    key: 'restoreFromMnemonic',
    value: function restoreFromMnemonic(mnemonic, password) {
      //if (bip39.validateMnemonic(mnemonic) == false) return false
      var seedHex = __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.mnemonicToSeedHex(mnemonic, password);
      var hdNode = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.HDNode.fromSeedHex(seedHex, network);
      var account = hdNode.deriveHardened(88).deriveHardened(0).deriveHardened(0);
      var keyPair = account.keyPair;
      return new Wallet(keyPair);
    }
  }, {
    key: 'restoreFromMobile',
    value: function restoreFromMobile(mnemonic) {
      var seedHex = __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.mnemonicToSeedHex(mnemonic);
      var hdNode = __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.HDNode.fromSeedHex(seedHex, network);
      var account = hdNode.deriveHardened(88).deriveHardened(0);
      var walletList = [];
      for (var i = 0; i < 10; i++) {
        var wallet = new Wallet(account.deriveHardened(i).keyPair);
        wallet.setInfo();
        walletList[i] = {
          wallet: wallet,
          path: i
        };
      }
      return walletList;
    }
  }, {
    key: 'restoreFromWif',
    value: function restoreFromWif(wif) {
      return new Wallet(__WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.ECPair.fromWIF(wif, network));
    }
  }, {
    key: 'restoreHdNodeFromLedgerPath',
    value: function () {
      var _ref14 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee14(ledger, path) {
        var res, compressed, keyPair, hdNode;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return ledger.htmlcoin.getWalletPublicKey(path);

              case 2:
                res = _context14.sent;
                compressed = ledger.htmlcoin.compressPublicKey(__WEBPACK_IMPORTED_MODULE_11_buffer___default.a.Buffer.from(res['publicKey'], 'hex'));
                keyPair = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.ECPair.fromPublicKeyBuffer(compressed, network);
                hdNode = new __WEBPACK_IMPORTED_MODULE_4_htmlcoinjs_lib___default.a.HDNode(keyPair, __WEBPACK_IMPORTED_MODULE_11_buffer___default.a.Buffer.from(res['chainCode'], 'hex'));

                hdNode.extend = {
                  ledger: {
                    ledger: ledger,
                    path: path
                  }
                };
                return _context14.abrupt('return', hdNode);

              case 8:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function restoreHdNodeFromLedgerPath(_x39, _x40) {
        return _ref14.apply(this, arguments);
      }

      return restoreHdNodeFromLedgerPath;
    }()
  }, {
    key: 'restoreFromHdNodeByPage',
    value: function restoreFromHdNodeByPage(hdNode, start) {
      var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      var walletList = [];
      var extend = hdNode.extend;
      for (var i = start; i < length + start; i++) {
        var wallet = new Wallet(hdNode.derive(i).keyPair, extend);
        wallet.setInfo();
        walletList[i] = {
          wallet: wallet,
          path: i
        };
      }
      return walletList;
    }
  }, {
    key: 'generateMnemonic',
    value: function generateMnemonic() {
      return __WEBPACK_IMPORTED_MODULE_5_bip39___default.a.generateMnemonic();
    }
  }, {
    key: 'connectLedger',
    value: function () {
      var _ref15 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee15() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].connect();

              case 2:
                return _context15.abrupt('return', _context15.sent);

              case 3:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function connectLedger() {
        return _ref15.apply(this, arguments);
      }

      return connectLedger;
    }()
  }, {
    key: 'getLedgerDefaultPath',
    value: function getLedgerDefaultPath() {
      return __WEBPACK_IMPORTED_MODULE_8_libs_ledger__["a" /* default */].defaultPath;
    }
  }]);

  return Wallet;
}();

/* harmony default export */ __webpack_exports__["a"] = (Wallet);

/***/ }),

/***/ "XJpw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store__ = __webpack_require__("Y4FN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      walletCache: {},
      hdNodeCache: {},
      posCache: {},
      pathTypeList: [{
        name: this.$t('derive_path.default'),
        path: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getLedgerDefaultPath()
      }].concat(__WEBPACK_IMPORTED_MODULE_3_store___default.a.get('ledgerPath', [])),

      showPathForm: false,
      pathFormName: '',
      pathFormPathName: '',
      pathFormPath: '',
      pathFormPathId: '',

      activePath: null,
      showAddressList: false,
      addressListLoading: false,
      addressListPathName: '',
      addressListPath: '',
      addressListPos: 0,
      addressListHeaders: [{ text: 'Path', value: 'path', align: 'left', sortable: false }, { text: 'Address', value: 'address', align: 'left', sortable: false }, { text: 'Balance', value: 'balance', sortable: false }, { text: '', value: '', sortable: false }],
      addressList: []
    };
  },

  props: ['ledger'],
  methods: {
    addCusPath: function addCusPath() {
      this.showPathForm = true;
      this.pathFormName = this.$t('derive_path.add_custom');
      this.pathFormPathId = Date.now();
      this.pathFormPathName = '';
      this.pathFormPath = '';
    },
    editCusPath: function editCusPath(pathItem) {
      this.showPathForm = true;
      this.pathFormName = this.$t('derive_path.edit_custom');
      this.pathFormPathId = pathItem.id;
      this.pathFormPathName = pathItem.name;
      this.pathFormPath = pathItem.path;
    },
    delCusPath: function delCusPath(id) {
      if (confirm(this.$t('derive_path.del_custom'))) {
        this.updateCusPath(id);
      }
    },
    updateCusPath: function updateCusPath(id) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var cusPathList = __WEBPACK_IMPORTED_MODULE_3_store___default.a.get('ledgerPath', []);
      var i = void 0;
      for (i = 0; i < cusPathList.length; i++) {
        if (cusPathList[i].id === id) {
          break;
        }
      }
      cusPathList.splice(i, 1);
      this.pathTypeList.splice(i + 1, 1);
      if (data !== undefined) {
        cusPathList.splice(i, 0, data);
        this.pathTypeList.splice(i + 1, 0, data);
      }
      __WEBPACK_IMPORTED_MODULE_3_store___default.a.set('ledgerPath', cusPathList);
    },
    savePathForm: function savePathForm() {
      this.updateCusPath(this.pathFormPathId, {
        id: this.pathFormPathId,
        name: this.pathFormPathName,
        path: this.pathFormPath
      });
      this.showPathForm = false;
    },
    choosePath: function choosePath(path) {
      var _this = this;

      this.activePath = path;
      if (this.posCache[path.path] === undefined) {
        this.posCache[path.path] = 0;
      }
      this.addressListPos = this.posCache[path.path];
      this.showAddressList = true;
      this.addressListPathName = path.name;
      this.addressListPath = path.path;
      this.addressListLoading = true;
      this.addressList = [];
      setTimeout(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getAddressList(path.path, _this.addressListPos);

              case 2:
                _this.addressList = _context.sent;

                _this.addressListLoading = false;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      })), 10);
    },
    next10Address: function next10Address() {
      var _this2 = this;

      var path = this.activePath;
      if (this.posCache[path.path] === undefined) {
        this.posCache[path.path] = 0;
      }
      this.posCache[path.path] += 10;
      this.addressListPos = this.posCache[path.path];
      this.addressListLoading = true;
      this.addressList = [];
      setTimeout(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.getAddressList(path.path, _this2.addressListPos);

              case 2:
                _this2.addressList = _context2.sent;

                _this2.addressListLoading = false;

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      })), 10);
    },
    prev10Address: function prev10Address() {
      var _this3 = this;

      var path = this.activePath;
      if (this.posCache[path.path] === undefined) {
        this.posCache[path.path] = 0;
      }
      this.posCache[path.path] = Math.max(this.posCache[path.path] - 10, 0);
      this.addressListPos = this.posCache[path.path];
      this.addressListLoading = true;
      this.addressList = [];
      setTimeout(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.getAddressList(path.path, _this3.addressListPos);

              case 2:
                _this3.addressList = _context3.sent;

                _this3.addressListLoading = false;

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      })), 10);
    },
    getAddressList: function getAddressList(path, start) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var hdNode, returnList, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(_this4.hdNodeCache[path] === undefined)) {
                  _context4.next = 11;
                  break;
                }

                _context4.prev = 1;
                _context4.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].restoreHdNodeFromLedgerPath(_this4.ledger, path);

              case 4:
                _this4.hdNodeCache[path] = _context4.sent;
                _context4.next = 11;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](1);

                alert(_context4.t0.message + '\n\n' + _this4.$t('ledger.comm_fail'));
                return _context4.abrupt('return');

              case 11:
                hdNode = _this4.hdNodeCache[path];

                if (_this4.walletCache[path] === undefined) {
                  _this4.walletCache[path] = {};
                }
                if (_this4.walletCache[path][start] === undefined) {
                  __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].restoreFromHdNodeByPage(hdNode, start).forEach(function (item) {
                    _this4.walletCache[path][item.path] = item;
                  });
                }
                returnList = [];

                for (i = start; i < start + 10; i++) {
                  returnList[returnList.length] = _this4.walletCache[path][i];
                }
                return _context4.abrupt('return', returnList);

              case 17:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[1, 7]]);
      }))();
    },
    setWallet: function setWallet(wallet, index) {
      wallet.extend.ledger.path += '/' + index;
      this.$emit('setWallet', wallet);
    }
  }
});

/***/ }),

/***/ "XXFI":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUkAAAAtCAYAAAAjmJlQAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAUVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDktMTdUMTA6Mjk6NTgtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA5LTE3VDEwOjMwOjI1LTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA5LTE3VDEwOjMwOjI1LTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMxMDQ3NjktYmNiMi00MzViLTljZmEtZGQyNmMxNTA3NjkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQzMTA0NzY5LWJjYjItNDM1Yi05Y2ZhLWRkMjZjMTUwNzY5MyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQzMTA0NzY5LWJjYjItNDM1Yi05Y2ZhLWRkMjZjMTUwNzY5MyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDMxMDQ3NjktYmNiMi00MzViLTljZmEtZGQyNmMxNTA3NjkzIiBzdEV2dDp3aGVuPSIyMDE4LTA5LTE3VDEwOjI5OjU4LTAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6O5rTQAAG0VJREFUeJztnXmUVNW1/z/73FtDz808igIi0oCKEAcQRUUUNMOLMogGJXF4Jis+49OY+H5GO3lPY3yJ5vfMSvTFMWKgcUwUBaOixiFE4wS0Ig6oCErTND3XcM/+/XGru6u6q7qbpkHy437W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"

/***/ }),

/***/ "ZMJ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  computed: {
    list: function list() {
      return this.$root.notifyList;
    }
  }
});

/***/ }),

/***/ "Zwtj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      name: "",
      symbol: "",
      decimal: "8",
      totalSupply: "",
      gasPrice: "40",
      gasLimit: "2500000",
      fee: "0.01",
      confirmSendDialog: false,
      introDialog: true,
      rawTx: "loading...",
      canSend: false,
      sending: false
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var nameCheck = /^(?!\s*$).+/.test(this.name);
      var symbolCheck = /^\b[a-zA-Z0-9_]+\b$/.test(this.symbol);
      var decimalCheck = /^(0|[1-9][0-9]*)$/.test(this.decimal) && this.decimal < 256;
      var totalSupplyCheck = !isNaN(this.totalSupply) && this.totalSupply != "" && /^([1-9]*)$/.test(this.decimal);
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(nameCheck && symbolCheck && decimalCheck && totalSupplyCheck && gasPriceCheck && gasLimitCheck && feeCheck);
    }
  },
  methods: {
    send: function send() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wallet;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.confirmSendDialog = true;
                wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet();
                _context.prev = 2;
                _context.next = 5;
                return wallet.generateCreateTokenTx(_this.name, _this.symbol, _this.decimal, _this.totalSupply, _this.gasLimit, _this.gasPrice, _this.fee);

              case 5:
                _this.rawTx = _context.sent;

                _this.canSend = true;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

                alert(_context.t0.message || _context.t0);
                _this.$root.log.error("create_contract_token_error", _context.t0.stack || _context.t0.toString() || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt("return", false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this, [[2, 9]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var wallet, txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet();

                _this2.sending = true;
                _context2.prev = 2;
                _context2.next = 5;
                return wallet.sendRawTx(_this2.rawTx);

              case 5:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_3_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this2.$root.success("Successful sent! You can view it at <a href=\"" + txViewUrl + "\" target=\"_blank\">" + txViewUrl + "</a>", true, 0);
                _this2.$emit("send");

                _this2.name = "";
                _this2.symbol = "";
                _this2.decimal = "8";
                _this2.totalSupply = "";
                _context2.next = 22;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](2);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error("create_contract_post_raw_tx_error", _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 17]]);
      }))();
    }
  }
});

/***/ }),

/***/ "a2ct":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "a4SW":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "aR/i":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "ayyg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SendToContract_vue__ = __webpack_require__("6dsK");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e42a83a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendToContract_vue__ = __webpack_require__("coaj");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SendToContract_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e42a83a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendToContract_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "b4MT":
/***/ (function(module, exports) {

module.exports = {"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_1":81,"OP_TRUE":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_CREATE":193,"OP_CALL":194,"OP_SPEND":195,"OP_GAS_PRICE":245,"OP_VERSION":246,"OP_GAS_LIMIT":247,"OP_DATA":248,"OP_SMALLINTEGER":250,"OP_PUBKEYS":251,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}

/***/ }),

/***/ "bEpM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_config__ = __webpack_require__("6+u4");



var _this = this;




var domain = '';
switch (__WEBPACK_IMPORTED_MODULE_3_libs_config__["a" /* default */].getNetwork()) {
  case 'testnet':
    domain = 'https://testnet.htmlcoin.com';
    break;
  case 'mainnet':
    domain = 'https://explorer.htmlcoin.com';
    break;
}
var apiPrefix = domain + '/api';

var _get = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(url) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(apiPrefix + url);

          case 2:
            return _context.abrupt('return', _context.sent.data);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function _get(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _post = function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(url, data) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post(apiPrefix + url, data);

          case 2:
            return _context2.abrupt('return', _context2.sent.data);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function _post(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  getInfo: function getInfo(address) {
    var _this2 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _get('/addr/' + address);

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }))();
  },
  getHrc20: function getHrc20(address) {
    var _this3 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _get('/erc20/balances?balanceAddress=' + address);

            case 2:
              return _context4.abrupt('return', _context4.sent);

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this3);
    }))();
  },
  getTokenInfo: function getTokenInfo(contractAddress) {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _get('/erc20/' + contractAddress);

            case 2:
              return _context5.abrupt('return', _context5.sent);

            case 3:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this4);
    }))();
  },
  getTxList: function getTxList(address) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _get('/txs/?address=' + address);

            case 2:
              return _context6.abrupt('return', _context6.sent);

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this5);
    }))();
  },
  getUtxoList: function getUtxoList(address) {
    var _this6 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _get('/addr/' + address + '/utxo');

            case 2:
              _context7.t0 = function (item) {
                return {
                  address: item.address,
                  txid: item.txid,
                  confirmations: item.confirmations,
                  isStake: item.isStake,
                  amount: item.amount,
                  value: item.satoshis,
                  hash: item.txid,
                  pos: item.vout
                };
              };

              return _context7.abrupt('return', _context7.sent.map(_context7.t0));

            case 4:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this6);
    }))();
  },
  sendRawTx: function sendRawTx(rawTx) {
    var _this7 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return _post('/tx/send', { rawtx: rawTx });

            case 2:
              return _context8.abrupt('return', _context8.sent.txid);

            case 3:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this7);
    }))();
  },
  fetchRawTx: function fetchRawTx(txid) {
    var _this8 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return _get('/rawtx/' + txid);

            case 2:
              return _context9.abrupt('return', _context9.sent.rawtx);

            case 3:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this8);
    }))();
  },
  getTxExplorerUrl: function getTxExplorerUrl(tx) {
    return domain + '/tx/' + tx;
  },
  getAddrExplorerUrl: function getAddrExplorerUrl(addr) {
    return domain + '/address/' + addr;
  },
  callContract: function callContract(address, encodedData) {
    var _this9 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee10() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _get('/contracts/' + address + '/hash/' + encodedData + '/call');

            case 2:
              return _context10.abrupt('return', _context10.sent['executionResult']['output']);

            case 3:
            case 'end':
              return _context10.stop();
          }
        }
      }, _callee10, _this9);
    }))();
  }
});

/***/ }),

/***/ "brDV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"fixed","bottom":"0px","width":"100%","z-index":"10000"}},_vm._l((_vm.list),function(info,id){return _c('v-alert',{key:id,attrs:{"color":info.type,"dismissible":""},model:{value:(info.show),callback:function ($$v) {_vm.$set(info, "show", $$v)},expression:"info.show"}},[(info.isHtml)?[_c('span',{domProps:{"innerHTML":_vm._s(info.msg)}})]:[_vm._v("\n      "+_vm._s(info.msg)+"\n    ")]],2)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "c6Ri":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('call_contract.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Contract Address","required":""},model:{value:(_vm.contractAddress),callback:function ($$v) {_vm.contractAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"contractAddress"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"ABI","required":"","multiLine":""},on:{"input":_vm.decodeAbi},model:{value:(_vm.abi),callback:function ($$v) {_vm.abi=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"abi"}}),_vm._v(" "),(_vm.parsedAbi)?_c('v-select',{attrs:{"items":_vm.parsedAbi,"label":"Method","single-line":"","bottom":""},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}}):_vm._e(),_vm._v(" "),(_vm.params)?_vm._l((_vm.params),function(param,index){return _c('v-text-field',{key:index,attrs:{"label":param.name},model:{value:(_vm.inputParams[index]),callback:function ($$v) {_vm.$set(_vm.inputParams, index, $$v)},expression:"inputParams[index]"}})}):_vm._e()],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.callTo}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.execResultDialog),callback:function ($$v) {_vm.execResultDialog=$$v},expression:"execResultDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('call_contract.result'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Result","multi-line":"","disabled":""},model:{value:(_vm.result),callback:function ($$v) {_vm.result=$$v},expression:"result"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.execResultDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "cAXN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_libs_server__ = __webpack_require__("yDAo");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      code: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(gasPriceCheck && gasLimitCheck && feeCheck);
    }
  },
  methods: {
    send: function send() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var wallet;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.confirmSendDialog = true;
                wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet();
                _context.prev = 2;
                _context.next = 5;
                return wallet.generateCreateContractTx(_this.code, _this.gasLimit, _this.gasPrice, _this.fee);

              case 5:
                _this.rawTx = _context.sent;

                _this.canSend = true;
                _context.next = 15;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](2);

                alert(_context.t0.message || _context.t0);
                _this.$root.log.error('create_contract_generate_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[2, 9]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var wallet, txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wallet = __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet();

                _this2.sending = true;
                _context2.prev = 2;
                _context2.next = 5;
                return wallet.sendRawTx(_this2.rawTx);

              case 5:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_3_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this2.$root.success('Successful sent! You can view it at <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this2.$emit('send');
                _context2.next = 18;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](2);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('create_contract_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 18:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 13]]);
      }))();
    }
  }
});

/***/ }),

/***/ "cDYc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mnemonic_vue__ = __webpack_require__("TBqZ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76736f64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mnemonic_vue__ = __webpack_require__("1Yb/");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Mnemonic_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76736f64_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mnemonic_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "clH9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DerivePath_vue__ = __webpack_require__("XJpw");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e042d56_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DerivePath_vue__ = __webpack_require__("r2GR");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DerivePath_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e042d56_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DerivePath_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "coaj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send_to_contract.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Contract Address","required":""},model:{value:(_vm.contractAddress),callback:function ($$v) {_vm.contractAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"contractAddress"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"ABI","required":"","multiLine":""},on:{"input":_vm.decodeAbi},model:{value:(_vm.abi),callback:function ($$v) {_vm.abi=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"abi"}}),_vm._v(" "),(_vm.parsedAbi)?_c('v-select',{attrs:{"items":_vm.parsedAbi,"label":"Method","single-line":"","bottom":""},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}}):_vm._e(),_vm._v(" "),(_vm.params)?_vm._l((_vm.params),function(param,index){return _c('v-text-field',{key:index,attrs:{"label":param.name},model:{value:(_vm.inputParams[index]),callback:function ($$v) {_vm.$set(_vm.inputParams, index, $$v)},expression:"inputParams[index]"}})}):_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Limit","required":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Raw Tx","multi-line":"","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "dHmf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("lDdF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libs_wallet__ = __webpack_require__("Wq6Z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_components_FileReader__ = __webpack_require__("poAW");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      mode: __WEBPACK_IMPORTED_MODULE_7_libs_config__["a" /* default */].getMode(),
      step: 1,
      fromAddress: "",
      toAddress: "",
      amount: "",
      fee: "",
      utxo: [],
      confirmAddressDialog: false,
      repeatToAddress: "",
      confirmSendDialog: false,
      fileParsed: false,
      rawTx: "loading...",
      canSend: false,
      sending: false
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var amountCheck = /^\d+\.?\d*$/.test(this.amount) && this.amount > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(amountCheck && feeCheck && this.fromAddress && this.toAddress);
    }
  },
  components: {
    FileReader: __WEBPACK_IMPORTED_MODULE_8_components_FileReader__["a" /* default */]
  },
  methods: {
    createInfoFile: function createInfoFile() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var utxoList, saveInfo, blob;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.step = 2;
                _this.confirmSendDialog = false;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_6_libs_server__["a" /* default */].currentNode().getUtxoList(_this.fromAddress);

              case 4:
                utxoList = _context.sent;
                saveInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()({
                  from: _this.fromAddress,
                  to: _this.toAddress,
                  amount: _this.amount,
                  fee: _this.fee,
                  utxo: utxoList });
                blob = new Blob([saveInfo], {
                  type: "text/plain;charset=utf-8"
                });

                __WEBPACK_IMPORTED_MODULE_3_file_saver___default.a.saveAs(blob, _this.fromAddress + "_" + new Date().getTime() + ".raw");

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    createTxFile: function createTxFile() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var offLineWallet, rawTx, saveInfo;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.step = 3;
                _this2.confirmSendDialog = false;
                offLineWallet = __WEBPACK_IMPORTED_MODULE_4_libs_web_wallet__["a" /* default */].getWallet();
                _context2.next = 5;
                return __WEBPACK_IMPORTED_MODULE_5_libs_wallet__["a" /* default */].generateTx(offLineWallet, _this2.toAddress, _this2.amount, _this2.fee, _this2.utxo);

              case 5:
                rawTx = _context2.sent;
                saveInfo = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()({
                  from: _this2.fromAddress,
                  to: _this2.toAddress,
                  amount: _this2.amount,
                  fee: _this2.fee,
                  rawTx: rawTx });

                __WEBPACK_IMPORTED_MODULE_3_file_saver___default.a.saveAs(new Blob([saveInfo], {
                  type: "text/plain;charset=utf-8"
                }), _this2.fromAddress + "_" + new Date().getTime() + ".tx");

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    handleFile: function handleFile(file) {
      try {
        var info = JSON.parse(file.content);
        this.fromAddress = info.from;
        this.toAddress = info.to;
        this.amount = info.amount;
        this.fee = info.fee;
        if (this.mode === 'offline') {
          this.utxo = info.utxo;
          var offLineWallet = __WEBPACK_IMPORTED_MODULE_4_libs_web_wallet__["a" /* default */].getWallet();
          if (offLineWallet.getAddress() !== this.fromAddress) {
            this.$root.error('from_address_is_not_same_as_the_wallet');
            return false;
          }
        } else {
          if (!info.rawTx) {
            this.$root.error('file parse fail');
            return false;
          }
          this.rawTx = info.rawTx;
        }
        this.fileParsed = true;
      } catch (e) {
        this.$root.error('file parse fail');
        this.$root.log.error('safe_send_file_parse_error', e.stack || e.toString() || e);
        return false;
      }
    },
    confirmAddress: function confirmAddress() {
      if (this.toAddress !== this.repeatToAddress) {
        this.$root.error("address_is_not_same_as_the_old_one");
        return false;
      }
      this.confirmAddressDialog = false;
      this.confirmSendDialog = true;
    },
    confirmSend: function confirmSend() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var txId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.step === 1)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _this3.createInfoFile();

              case 3:
                _context3.next = 24;
                break;

              case 5:
                if (!(_this3.step === 2)) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 8;
                return _this3.createTxFile();

              case 8:
                _context3.next = 24;
                break;

              case 10:
                if (!(_this3.step === 3)) {
                  _context3.next = 24;
                  break;
                }

                _context3.prev = 11;
                _context3.next = 14;
                return __WEBPACK_IMPORTED_MODULE_5_libs_wallet__["a" /* default */].sendRawTx(_this3.rawTx);

              case 14:
                txId = _context3.sent;

                _this3.confirmSendDialog = false;
                _this3.$root.success('Successful send. You can view at ' + __WEBPACK_IMPORTED_MODULE_6_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId));
                _context3.next = 24;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](11);

                alert(_context3.t0.message || _context3.t0);
                _this3.$root.log.error('safe_send_post_raw_tx_error', _context3.t0.response || _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                _this3.confirmSendDialog = false;

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[11, 19]]);
      }))();
    }
  }
});

/***/ }),

/***/ "ejIc":
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ "gaNr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/tokenfarm_logo21.05ba613.png";

/***/ }),

/***/ "geKI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("Xxa5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("exGp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi__ = __webpack_require__("sVTA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ethjs_abi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libs_server__ = __webpack_require__("yDAo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bs58__ = __webpack_require__("ZDUk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_bs58___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_bs58__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      txReceiptDialog: false,
      awaitingTx: false,
      txError: false,
      txConfirmed: false,
      contractAddress: '8ef863bce3568898f293596b4638d00876bada86',
      abi: '',
      parsedAbi: null,
      method: null,
      inputParams: [],
      rewardCode: '',
      destinationWalletAddress: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      execResultDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false
    };
  },

  computed: {
    notValid: function notValid() {
      //@todo valid the address
      var rewardCodeCheck = this.rewardCode != '';
      var destinationWalletAddressCheck = this.destinationWalletAddress != '' && /^[H|h][a-zA-Z0-9]{33}$/.test(this.destinationWalletAddress);
      var gasPriceCheck = /^\d+\.?\d*$/.test(this.gasPrice) && this.gasPrice > 0;
      var gasLimitCheck = /^\d+\.?\d*$/.test(this.gasLimit) && this.gasLimit > 0;
      var feeCheck = /^\d+\.?\d*$/.test(this.fee) && this.fee > 0.0001;
      return !(rewardCodeCheck && destinationWalletAddressCheck && gasPriceCheck && gasLimitCheck && feeCheck);
    }
  },
  watch: {
    method: function method() {
      this.inputParams = [];
    }
  },
  methods: {
    send: function send() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var abiJson, hexAddress, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                abiJson = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "rewardCode", "type": "string" }], "name": "checkReward", "outputs": [{ "name": "rewardType", "type": "uint256" }, { "name": "rewardAmount", "type": "uint256" }, { "name": "valid", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "rewardCode", "type": "string" }, { "name": "rewardAmount", "type": "uint256" }, { "name": "rewardType", "type": "uint256" }], "name": "addRewards", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "rewardCode", "type": "string" }, { "name": "destinationWallet", "type": "address" }], "name": "myReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "contractBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }];
                hexAddress = '0x' + __WEBPACK_IMPORTED_MODULE_6_bs58___default.a.decode(_this.destinationWalletAddress).toString('hex').substr(2, 40);
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[8], [_this.rewardCode, hexAddress]).substr(2);


                _this.confirmSendDialog = true;

                _context.prev = 5;
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(_this.contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 8:
                _this.rawTx = _context.sent;
                _context.next = 17;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](5);

                _this.$root.log.error('send_to_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 17:
                _this.canSend = true;
                _context.next = 26;
                break;

              case 20:
                _context.prev = 20;
                _context.t1 = _context['catch'](0);

                _this.$root.error('Params error');
                _this.$root.log.error('send_to_contract_encode_abi_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                _this.confirmSendDialog = false;
                return _context.abrupt('return', false);

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 20], [5, 11]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var txId, txViewUrl, interval;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:

                _this2.sending = true;
                _context2.prev = 1;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this2.rawTx);

              case 4:
                txId = _context2.sent;

                _this2.confirmSendDialog = false;
                _this2.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this2.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this2.$emit('send');

                _this2.txReceiptDialog = true;
                _this2.awaitingTx = true;

                interval = setInterval(function () {

                  __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get('https://explorer.htmlcoin.com/api/tx/' + txId).then(function (result) {
                    console.log('Checking Tx...');

                    if (result.data.confirmations > 0) {
                      clearInterval(interval);
                      _this2.awaitingTx = false;

                      if (result.data.receipt[0].excepted != 'None') {
                        _this2.txError = true;
                      } else {
                        _this2.txConfirmed = true;
                      }
                    }
                  }).catch(console.error);
                }, 30 * 1000);


                _this2.rewardCode = '';
                _this2.destinationWalletAddress = '';

                _context2.next = 22;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_to_contract_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 17]]);
      }))();
    },


    onCopySucc: function onCopySucc() {
      this.$root.success('copy success');
    },
    onCopyError: function onCopyError() {
      this.$root.error('copy fail');
    }
  }
});

/***/ }),

/***/ "glbK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_CrypticMAG_vue__ = __webpack_require__("geKI");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f2d6d13_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_CrypticMAG_vue__ = __webpack_require__("1lpv");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_CrypticMAG_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f2d6d13_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_CrypticMAG_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "h2Hj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('create.title')))])]),_vm._v(" "),(_vm.step === 2)?_c('v-card-text',[_c('v-alert',{attrs:{"color":"error","value":"true"}},[_vm._v(_vm._s(_vm.$t('dump_as_key_file.warning')))]),_vm._v(" "),(_vm.fileStr)?_c('file-creator',{attrs:{"color":"green","href":_vm.fileStr},on:{"click":_vm.dumpDone}}):_vm._e(),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired,"notEmpty":"true","title":"dump_as_key_file.password_title"},on:{"password":_vm.setPassword}})],1):_vm._e(),_vm._v(" "),_c('v-card-actions',[(_vm.step === 1)?_c('v-btn',{attrs:{"color":"error","dark":""},on:{"click":_vm.createWallet}},[_vm._v(_vm._s(_vm.$t('create.title')))]):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ib+S":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "igel":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "iwj8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PasswordCreate_vue__ = __webpack_require__("xnON");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50d8326a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PasswordCreate_vue__ = __webpack_require__("KoW1");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PasswordCreate_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_50d8326a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PasswordCreate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "kVi7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t(_vm.headline)))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{ref:"passwordInput",attrs:{"label":_vm.$t('password.password'),"type":"password"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.confirmPassword($event)}},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmPassword}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lS1t":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAAyCAYAAAAOcwQoAAATrUlEQVR42u2dCVgT57qAse09Xc7xni7ntD1dvD493rbX20VFkoDV4nEFAkJC6tYqSjYUUFvbKi70tNalRQKoVSpkm8QFUSFBpXVBNhUIoCxSoYBYUQoiKsiazJzvjwkMIRtIRPvM9zzfM2Tmn39+Jt873/LPTJycBknGL8beovPlcoZAce3DFYea/SJymtmi/DK2qGCTr6hwpBMllPzRxSVAMoYmkCtcBYomV6GCcF2i1PlszrrrH11A+Eflt7Gj8tN8owrYzrGa/6LOFiV/OPkHM/YZGhcLcxVgbXoAjEoGoVvztWyRZv/UzZq/OhHEMOrsUfLIy1s+8cNpgYqFDIE8B0IhvBcEFkG4p+yogusskWadz5asV6gzSckjK84BknfpAizLVSBv7wOAHSDcgyG/ix2Vd9VHlDufw0l4nDqrlDwy8j5P9iaNK9/C4GMtFgEAdQtS4l6rDusW/qBpm729ELcEg0E7WaK8g95bLzA8Yo4+SZ1lSh5aGc3Z8Rc6T76aLpCXM4SYzhoE3qsP6XYdr8BTy5rwk1WteHLpbfyLAxU4xzoMyEPU+0Xm/+genvY36oxT8lDJSHfJU2MXy1zpAkWeNeNHOnXFft0qaY4251oHUXyT6KWFDTpCcq4eD9hdhHO2WfcQrKj8FlZUQaBveOGz1DdAyZDLOK7UGfIAGXiBZmsATAzeq1u+M1t3qLBed+EGjptCQNaMK+14zMlafN4P53Eb3qHDP6rgpN9WDccjpoIKlygZAi8QIHmKxpN9yxBgnWarQSSdtuKA9oDmuq6oEcdBCWsQIC1q1C/x3Lou/Iv95bh/jHXvwI7O1/qJNCp9uZUSSh6EoPkA50DJPPACeQyhwkYecFi3OfGCNqe2A7dl/Ja0oF5HKDU38OV7LuEf2QiX2CLIH0R5a2ZEljxPfVOUOEzAA7xJFyoiAIBWawB8sFSpWy3J7Tpd2YzbCoPs1ZxrXbj4bD0+d8d529WlqHwNM0JDJdOUOEamfHpgr1uQot5SKDQxZK9uzoZjXQm517UX7AiBBqLZVzvwf6su6yzlD+zoApwtymv32ZS+1ZkfS92mQcngi+eapPoZqw61TV6+D90n1OtWCZ+wpK4fT1Rq86536hwBQO/qEo6ry5p1qxN/1fWqLkUV6Hy/y2ry/urYXY81SWVTv1SNoL41SgZdvNYk6bzWJhOea5Lx6V8eanYLUja6CRXapTGnWwt+1xKOBsBUIewidmbUaT+KKdT5RebeYf77WAMaGxojjLXDc13Su9S3RokDPILByAwKHqIzYOuJpqzLrV0PGoKeChNORByt7PBar24jj00/vrDDY6hvjRKHg4B046HiRlTq7JcBX60jys4qiXL1SqJy3zy9Vqg+I8rOKPTb+gvD0Ys3cf8NR3EKBEqGDITYU1W37DLY+jai9OJZokL9OVG92424HOtiVqtjGURF8nLiYnE6UXyj0y4QTlTcIeZv+ZmgQKBk6EA4WXXHNgStxKXjm4iq+EkWATDVqnh3ojxlFVF87aZNEE4CCB9/N0QguIc/oS8rBykXIaUJ5TNoC2QvUNZCgdBbr90CL7DSbgB6ewcXvXewBUN/QbB1P5SpMriYu2kfowPjnqcFyhYyBFhZn/YCRQudh8nGcWXvIVDMjYEuUHp27yPAcp3Cwx8jb9fP3POxcNiuRW3oAqxpPF+6qGd/xUZ7x0/jybeS+4bxJevHKcR0qB9YNczc/wfb0rv/J57Mg7ydIAgPwn6pAX3Hkl3Btud0Ot1tY2P4+1vCxgNZsD3CyvFwkBroRwZ/00H7lNFhWyGpcT0sxlg4ztOwPYncef9B+L2FKE/9akAQ9MBAA8/wBXiV9ocGhNF82Qg6H0u1NbPO4GO1NB4W3F8QSBB0Gdu48LGg0ZyEPw0mCPdgUNyl8RULhxgEoYkVF8DilfsAgSxgIcRn1kBA7IGKzcEH6xaCtt0XCGUXThDVP7reFwhG/eWMjCi2MEnXfxCw9t6q7CIZjtZ0u0ugdBLJSJ8FQ7rcY8QKLYOvuEwTYtEAxzownizY3uv+KxcetqQ/IDB48vmwf4exf/A8gr779wJB2/d/6lGAcbMlEAzHuDOOK2HcJwjtVrQCdLQFgx4ORvmTSV8doDP7AYLWzDG7EFOkNjQrIOj76OzsdCO3aW1tfQ3Wt5qS1T8QIDmu3DtnUCBAWrl3NlHy2zWH5AhgwNt6whpMZandKI+YJ8E4tpOMqJMukK9Fz2GQmg0bz8WmQSjzi7Edna/4TR8m2QIBwigYyyL4bLyTt53BU6xxMvNkHhkEGPMx5EXsDXFNQUDQwnjTRsz74bmBgtDS0vLyQMJt2NXZcNU2GjRu8Aoqe0EAo06ExZ9I2x4D9YP1DaQ2ShsgoGNegcXrhj6eAZWZczH9AuFi4VF9jD9YIFTH0omL51OHFARnvuRtiKurewwc2+bkbP42jrGLFKOhrxZSLL7eFgguAjkLQpWb3SGNUBmO4DMfWg0eCEbPA3nNngcNAhjkLqMdwt+psGwyfO4EHTsQEEhtEklDRIb/mDUQDH19D4vHQacAGLfvD4RGHVFxeOmgQWDU8iNhQwoCnavwNyavDIG88d0g5XNWDY6P7e4xauy0JRCgr7zxgYoJAEGtYV0rgy/fYnXM5NAIDNaFJ/1/1yXYKFN15mP/sAYC2XN1h3HggR4ECOjqC8bWYgyHurq6JhpgMF6h9yKjHAgIyOhhfQppiHnkHMAkWT5DCoFqYRyTYV2u0UvB3+cNoVY/QbjeRFTKmYMOQqXMa2hB4MnXkxLh0+Tk1ZyM50oXGHMFaH/FMgjYTTD8OpJB1o4XysbaCwLyPAz0eKwAu9RHhdhuayC48OWhEN4lk/qqGS9U0voLAhjLcVikmNPbt28/b8GYt5C6yAJ9AtSN1Of1jo6O9wYQGqEruoBciQL5wUpo9CXoflJOUUPaVg7KN+Qd/QOh5HI1USWdMeggIDU3yfagQKDxseiesEiutnV3K50rm2Ws/EC/v1sMjcxVnATyOCcnzuN2eQSr/WDHrIEAiXnAhMXxwwHEAiO00Hfpu/Pi3xisqtHdu3f7VIAgEX0djLHMeNWFq/AMkpFmk3KGFfdZNSIMIc6bVkAIgUTZGdo1m+yKvMQkUM8BgVBaVQEgTHMMCHUtQ+kRVpMS4LOW4vducATywG6PIFRU2gIBxnEOzUEYxtEJx1tprsZvxiM0MPiK47DvT32Ur9hgCwS0ziVQMpPek6QjGH6Gfs87CgRYPdsYjoAB1sJiOug0pGCksSQjzrFQ1oywE4JqWPjbKJ+GoHVarZZrgA9JF7TZZDjWwEBANf+SilLiYkkmUaY5TFxKiyEqkoKJqrgP+z2hViWeQvyayCcu/fwt8UtWHHgE7RAmy5iXce4APZz01pxtr9joN4HU7xFrIND5ssSXPpH/GYzxZ1I15w6Dp5xqCwQ0p4H21VeXTNWp90SdJRD04PLkK8iVJPI8iR0gjAB90pxaSJLVJnX8LpJqydvAW/xrgCD8Avp3C8fvAwISAOeAYV0p6Gt2g8DfdurrnGtVE7OvlE0/W1Pic+63Snb+9frZhQ0d84saCQEYaljRDSIGlvuLGnWniqvKy8s0ye3lqeFEpZLdqyqEyq0oIQaDbyktSrtUfOVqOiTeB2HfuPM3dJvP32hfXdDQ+Knm+tUlObUVgedqq+ecvVrjveP4xQU+61XXHA3CuEBsFBhIeXcCzMeOjebEPW8eGqkXw/B6S3R1RxNilnMERalxBvod7u6XwNsUkipKZ0YHJjzvqKoRGQTDuZCTJ/IckSxD3P+O6SSVNQGjzauo6P1yBks5AlzVl5B2RVCx+gMCmm8AvQzKJq2zDcJqbHWNJNO7SJzlUyrO9L4ozmSWSrK8i0A18FkNGinJ8AyQZAeMKbp16zlNbeuIogbCuej3tm9Kfqu9WpabQFw6tp4o/SUfL6qpSS2uu7P4wk3inYJrbf+TULDRVXZmvkCa4R0Zn+GtEmcx80yPJc7yLo48GlDK+mZvm6NBQFdYVM0xqb8njOWISVcdYhiNL5uHcgJSn2XvC2Wv2juh5sLb8yEKd7rLmgL5PtMQyVEgOH8iGwGJ/QVHgkC+ZQEMsgQWO82okhzhgFeYZg8IsHzKpFqUb5wbsBMENAcxjlytsguEdXs+JyRZPnYpGG+dOMNLGpfB9JVme/zzSMmRl8FrbADD33Wmtvrt2JMe/4zL8PCF7WIw8t/s7Tc69ROCs0Hh8NAIyRv82L+CoZzoddUUYDdpAuwg7BtHJ8XVhqS3Dk2w9eteI3Qjn0D2TW9jxILJE2v9ucUCDF9pLwh6EAWKSaiS5QgQICkdAyDcMV6xTQ3c5BjZpEOg+YYn7KwavWaYHDPK9+Q5BGsgWBiHbRA+l629GJ/JPByfwVTCFVuq10zvA7DuBLpai9OZd/oAkeWjA4+RtStz+vvhae5PSDJ9ONA+AfRX2KerT/sM7zvxmd4lAMdx6A/1LRNnMKVwTAUcKzFCHXDmgXgE4wzzIvHfYZ9dxjkFSwpX8kIaV/6vgdx0N2q+4r/pQiyVNK4r47hK5wcBgr70y1MsJr+kYTBAQEkv6FpSDpBFNm5TgTDH03C7BUp6f4XFq/aAEA7nEj6vNEzK6as/0Nc8h4LgEXb4a+S2wwmnxzgJnMfdw92fQMvwcKfuLzY2zf1tcaZnKBhuGhj6zfh0r73yn6a/uDtzpjsYckmP0Xvj8LkDwGiC5Wm0z+6zU/8PDm0MC4bpjwHwGI/jBMeZueqgi9eapIaBgkC7F+7c1KugZ3bVlrjw5CiEyYRw6bbrPaNpRZUXVItHcw7o1TeWy5/YNOMxwTBPmEtq35wb+zfoq9jYDhLqDONMNoCwtnvMtlSAxZqAoDRuo3GxuebGh0It8HxiYzuXQOkUE+OYarg1Qq/Nzc0v2gECum3hhHEfMM5ZNtq/AAabTmq/gLTta9LxpWYm1IYbZpP1bQCkora2tjdIIKST9ufZGMc0NKdhaNtoBgRV+6zNyeeXJPI3hSb7bV+uYu1epmJJ0DJUxYoJVbO+Ck2atXSpypspSGT+LzLk7SemvBCfNWMyeI59YPgtJAiuQh4QF3/ac644ffrrTmD8i+MnDA9R+9KCVbPmhaj8Pl+m9vsuROW7a5maJVmm8gVlxcL6SM/1O/bNDDs4NI9qQrjy/gLZqwwh5o7UmS959z1UwaHkD/w8wtrkZuPD+8yvjtxmbT13yz9Ko/s4HsOXqTjE8hR2L12WwsKXq1ldYLh3Q9W+xzmRrk/HZXiugLCmEV399QBk+nTEpXtt2Jk9/cXYWGf91U5wxGd8aIqfFParW6byuw0AtC9LYWv1/ZH7V7EJjuhLwjVIjrsGKe5O+Szxd+MLBrzWJLdTD+9T4hgQ1qlyvdantM3aeLqJJdK0kd8nNHvHTwR3z3ptsGruRTBgTajarxiu2JdBm5al+B3adJzpLsnwVt7LD1DizLwFcb/8h1OT30J9h6qYI0KSfXhg+Of6GLya3Qnr6pansMqh3/MhSZyiACm/Y+b67yB+lffEwkJMNzFkT9O0Lw62eoQllU79MoF6nQslgy+ztmSH+kXmNKCXaJl7uRYnJlfL2Z5ePnvnvvnCw74jg1XMt0NTfJ0jTk13js9injN6AcgTKiSZnjMjz7g+jWL9YLWPEAy9GIy+oxsAMP5QlV9GSMqssCVJPpOD1X7vL0n2GTVr40r6pOU7U92WSDotJIZoJrdjQsheEfWCL0ocIsxYzTPsKM1WMPpWq69djMpv+2j7afHCuO8mxBz3GQsA1BpyAZ040yt1R5r7yyjJXZIwYxR4jyPdHkDNQiDUADwxArU+p3AKOOz+rPCY78i5uwSukz+LWY8eWbRxb00nJHn5zvw91CsfKXEgDOGaZ/xEmvno/aL+0YU6669tz6n+fF90TWyaP/ICneJMz8ioE1NeQv0EJ/twIAy61BP++F4FD7ByUaLXG6gatFTNdIXEOCI4iZM2Z/un16atjta6BckJG+XKBheBdO3bC7ZTD89T8mDEdcWZp1nRhRtZ6DfOLIRKRp27Ix1fk/D1NidDGTRUxQrpAYClg7j/6PTv39NXWrhHPV4DQNSQF+iWHvqImLE2Ak0m2brDUkvjydQjA0TUj4ZQMjTiE1kwniUqkLOj8pttvLL9LngS6SLFtxuXqf2b70HgVw9hURgqkwaleD0XqvYND1WzGoT7PybYEWHEhGCxLQA66Hz5KRpfzhkVEkP9UAglQyvukuqnvLbmurGjCvJsvLKd8I/J7loo2UWEJM9pCD3ijSZUhqE5BvASeaHJ/p1zt39GTFoe26saZDYM4itaXPgYd0yAhPIClDxkQISX/IUVmR8GoVI5ejO19V+5OXeFFZ3/CXvHATfunsV5i6QCfMa6720DIMDqaVxsN5p1pc44JQ93uLQl7y2WKH8LhEst1qtLhR1s0Zn6qaviCLcgqa0wqBNCoIMuPLHbKA/q52UpeZSAiMp4jx2lyQZtt5w7aHQTQ/e3WYGgi87Dal24so+dqB8cp+TR9Q5Zw8E7BLCiCnLNVZfYkRrdB6EJd82/KU5eh25eG7s4/hXqTFLyh5Dp31/4M3tr3hpWVH6bTRDQ2+ME2P575VDr78CkhJJHUnxFhWMgHNrDjipo6gOCQNFG42On6UKMTd0eQckfXtzDq5+aFZkzkS3K3++3Ne/GByEJDeABslEeYOkZYEooeVjkPy3HjG+9F3+oAAAAAElFTkSuQmCC"

/***/ }),

/***/ "owsU":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "pEtf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ["current"],
  data: function data() {
    return {};
  },

  methods: {
    openDapp: function openDapp(name) {
      this.$emit("openDapp", name);
    }
  }
});

/***/ }),

/***/ "pRmB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "pbl8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      password: ''
    };
  },

  props: ['open', 'validate', 'notEmpty', 'title'],
  computed: {
    dialog: function dialog() {
      return this.open;
    },
    headline: function headline() {
      return this.title ? this.title : 'password.enter';
    }
  },
  methods: {
    confirmPassword: function confirmPassword() {
      var password = this.password;
      if (this.notEmpty && this.password === '') {
        this.$root.error('Password is required!');
        return false;
      }
      this.$emit('password', password);
      this.password = '';
      return true;
    }
  },
  watch: {
    open: function open(_open) {
      var _this = this;

      if (_open) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
          return _this.$refs.passwordInput.focus();
        });
      }
    }
  }
});

/***/ }),

/***/ "poAW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FileReader_vue__ = __webpack_require__("zG4X");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_015a4ccc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileReader_vue__ = __webpack_require__("FoCJ");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_FileReader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_015a4ccc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileReader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "pv4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('restore.title')))])]),_vm._v(" "),_c('v-card-text',[_c('mnemonic',{on:{"mnemonic":_vm.restore}})],1),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired},on:{"password":_vm.setPassword}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qoVm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__en__ = __webpack_require__("LVcC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zh__ = __webpack_require__("r3Gj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ko__ = __webpack_require__("5Ik/");




var locales = ['en', 'zh', 'ko'];
var messages = {
  en: __WEBPACK_IMPORTED_MODULE_0__en__["a" /* default */],
  zh: __WEBPACK_IMPORTED_MODULE_1__zh__["a" /* default */],
  ko: __WEBPACK_IMPORTED_MODULE_2__ko__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = ({
  locales: locales,
  messages: messages
});

/***/ }),

/***/ "qpBf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("RLpJ")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"teal"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Info\n      "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      New\n      "),_c('v-icon',[_vm._v("child_care")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Check\n      "),_c('v-icon',[_vm._v("search")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"width":"50%","height":"auto"},attrs:{"src":__webpack_require__("TGXn")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("Welcome to MyOffspring!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    This application allows you to register your children and create a Birth Certificate for them in the "),_c('b',[_vm._v("AltHash")]),_vm._v(" blockchain.\n                    "),_c('br'),_c('br'),_vm._v("\n                    To create a new record, just click on \"New\" menu item, and fill in the details about the birth of your heir.\n                    "),_c('br'),_c('br'),_vm._v(" "),_c('b',[_vm._v("Take note of the hash code generated, as it will be the unique identifier for the birth registration.")]),_vm._v(" "),_c('br'),_c('br'),_vm._v("\n                    Once the transaction is confirmed, the registration is complete and you can verify it through the menu item \"Check\".\n                    "),_c('br'),_c('br'),_vm._v("\n                    MyOffspring was developed based on suggestions given by our Communities Manager, "),_c('b',[_vm._v("Heitor Guimarães")]),_vm._v(", supported by the Community member "),_c('b',[_vm._v("Karol Pyla")]),_vm._v(", who wanted to register his son, "),_c('b',[_vm._v("Julek")]),_vm._v(", on AltHash blockchain. The HTMLCOIN Foundation is glad to have the support of such smart and dedicated people. Thank you!\n                  ")]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Full Name","required":"","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.fullName),callback:function ($$v) {_vm.fullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fullName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Mother's Full Name","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.motherFullName),callback:function ($$v) {_vm.motherFullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"motherFullName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Father's Full Name","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.fatherFullName),callback:function ($$v) {_vm.fatherFullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fatherFullName"}}),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs6":""}},[_c('v-menu',{ref:"dateOfBirth_menu",attrs:{"close-on-content-click":false,"nudge-right":40,"lazy":"","transition":"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:(_vm.dateOfBirth_menu),callback:function ($$v) {_vm.dateOfBirth_menu=$$v},expression:"dateOfBirth_menu"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Date of Birth","prepend-icon":"event","readonly":"","outline":"","background-color":"teal"},slot:"activator",model:{value:(_vm.dateOfBirth),callback:function ($$v) {_vm.dateOfBirth=$$v},expression:"dateOfBirth"}}),_vm._v(" "),_c('v-date-picker',{ref:"picker",attrs:{"max":new Date().toISOString().substr(0, 10),"min":"1900-01-01"},on:{"change":_vm.dateOfBirth_save},model:{value:(_vm.dateOfBirth),callback:function ($$v) {_vm.dateOfBirth=$$v},expression:"dateOfBirth"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-menu',{ref:"timeOfBirth_menu",attrs:{"close-on-content-click":false,"nudge-right":40,"return-value":_vm.timeOfBirth,"lazy":"","transition":"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function($event){_vm.timeOfBirth=$event}},model:{value:(_vm.timePicker),callback:function ($$v) {_vm.timePicker=$$v},expression:"timePicker"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Time of Birth","prepend-icon":"access_time","readonly":"","outline":"","background-color":"teal"},slot:"activator",model:{value:(_vm.timeOfBirth),callback:function ($$v) {_vm.timeOfBirth=$$v},expression:"timeOfBirth"}}),_vm._v(" "),(_vm.timePicker)?_c('v-time-picker',{attrs:{"full-width":"","format":"24hr"},on:{"change":_vm.timeOfBirth_save},model:{value:(_vm.timeOfBirth),callback:function ($$v) {_vm.timeOfBirth=$$v},expression:"timeOfBirth"}}):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Place of Birth (Facility, City, State/Province, Country)","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.placeOfBirth),callback:function ($$v) {_vm.placeOfBirth=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"placeOfBirth"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n                  "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n                  ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('b',[_vm._v("Please store the ID below in a safe place, as it is the unique ID for this Birth registration.")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{attrs:{"label":"Hash ID","disabled":""},model:{value:(_vm.hashID),callback:function ($$v) {_vm.hashID=$$v},expression:"hashID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.hashID),expression:"hashID",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n                          "+_vm._s(_vm.$t('common.copy'))+"\n                        ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Raw Tx","multi-line":"","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{staticClass:"mx-3",attrs:{"label":"Hash ID","append-icon":"search","outline":"","background-color":"teal"},on:{"click:append":_vm.openCertificate},model:{value:(_vm.searchHashID),callback:function ($$v) {_vm.searchHashID=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"searchHashID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('img',{staticClass:"cursor",attrs:{"src":__webpack_require__("igel")},on:{"click":_vm.scanQrcode}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('p',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])])],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"width":"600px"},model:{value:(_vm.execResultDialog),callback:function ($$v) {_vm.execResultDialog=$$v},expression:"execResultDialog"}},[_c('span',{attrs:{"id":"certificate"}},[_c('v-card',{staticClass:"modal-detail"},[_c('v-card-text',[_c('v-container',{attrs:{"align-center":"","grid-list-md":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-md-center":""}},[_c('img',{staticClass:"logo1",attrs:{"src":__webpack_require__("RLpJ")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-md-center":""}},[_c('img',{staticClass:"logo2",attrs:{"src":__webpack_require__("2Gzf")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","text-md-center":""}},[_c('span',{staticClass:"font-weight-medium my-2 headline font-bold",attrs:{"id":"title"}},[_vm._v("\n                  Digital Birth Certificate\n                ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('p'),_vm._v(" "),_c('p',[_c('b',[_vm._v("Full Name:")]),_vm._v(" "+_vm._s(_vm.resultFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Mother's Full Name:")]),_vm._v(" "+_vm._s(_vm.resultMotherFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Father's Full Name:")]),_vm._v(" "+_vm._s(_vm.resultFatherFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Date of Birth:")]),_vm._v(" "+_vm._s(_vm.resultDateOfBirth)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Time of Birth:")]),_vm._v(" "+_vm._s(_vm.resultTimeOfBirth)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Place of Birth:")]),_vm._v(" "+_vm._s(_vm.resultPlaceOfBirth)+"\n                ")]),_vm._v(" "),_c('p',{staticClass:"text-xs-center"},[_c('span',{staticClass:"caption",attrs:{"id":"certificate_id"}},[_vm._v("Hash ID: "+_vm._s(_vm.searchHashID))]),_vm._v(" "),_c('img',{staticClass:"qr",attrs:{"src":_vm.qr,"id":"qr"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","id":"btn"},on:{"click":_vm.print}},[_c('v-icon',[_vm._v("print")])],1)],1)])],1)],1)],1)],1)],1)]),_vm._v(" "),_c('v-dialog',{attrs:{"max-width":"50%"},model:{value:(_vm.qrScan),callback:function ($$v) {_vm.qrScan=$$v},expression:"qrScan"}},[_c('v-container',[_c('v-layout',[_c('v-flex',{attrs:{"xs12":"","align-center":"","text-xs-center":""}},[(_vm.qrComponent)?_c('qrcode-stream',{attrs:{"track":false,"camera":_vm.camera},on:{"decode":_vm.onDecode,"init":_vm.onInit}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"teal","dark":""}},[_c('v-card-text',[_vm._v("\n        Please stand by\n        "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "qvsf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qrcode__ = __webpack_require__("71e1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qrcode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qrcode__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      address: __WEBPACK_IMPORTED_MODULE_0_libs_web_wallet__["a" /* default */].getWallet().getAddress(),
      amount: '0.0',
      message: '',
      qr: ''
    };
  },

  methods: {
    drawQrCode: function drawQrCode() {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_1_qrcode___default.a.toDataURL('html:' + this.address + '?amount=' + this.amount + '&message=' + this.message, function (err, url) {
        _this.qr = url;
      });
    }
  },
  mounted: function mounted() {
    this.drawQrCode();
  }
});

/***/ }),

/***/ "r1Qh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_BiffyPlutonium_vue__ = __webpack_require__("Rz30");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34dd881c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_BiffyPlutonium_vue__ = __webpack_require__("wRaC");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_BiffyPlutonium_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34dd881c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_BiffyPlutonium_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "r1po":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "r2GR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('p',[_vm._v(_vm._s(_vm.$t('derive_path.title')))]),_vm._v(" "),_c('v-card-text',[_c('v-data-table',{attrs:{"items":_vm.pathTypeList,"hide-headers":"","hide-actions":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_vm._v(_vm._s(props.item.name))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.path))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[(props.item.id)?[_c('v-btn',{attrs:{"color":"primary","fab":"","small":"","flat":""},on:{"click":function($event){_vm.editCusPath(props.item)}}},[_c('v-icon',[_vm._v("mode_edit")])],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"error","fab":"","small":"","flat":""},on:{"click":function($event){_vm.delCusPath(props.item.id)}}},[_c('v-icon',[_vm._v("delete")])],1)]:_vm._e(),_vm._v(" "),_c('v-btn',{attrs:{"color":"success","fab":"","small":"","flat":""},on:{"click":function($event){_vm.choosePath(props.item)}}},[_c('v-icon',[_vm._v("lock_open")])],1)],2)]}}])},[_c('template',{slot:"footer"},[_c('td',{attrs:{"colspan":"100%"}},[_c('v-btn',{attrs:{"color":"info","dark":""},on:{"click":_vm.addCusPath}},[_vm._v(_vm._s(_vm.$t('derive_path.add_custom')))])],1)])],2)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"max-width":"50%"},model:{value:(_vm.showPathForm),callback:function ($$v) {_vm.showPathForm=$$v},expression:"showPathForm"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.pathFormName))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":_vm.$t('derive_path.path_name') + '*'},model:{value:(_vm.pathFormPathName),callback:function ($$v) {_vm.pathFormPathName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"pathFormPathName"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":_vm.$t('derive_path.path') + '*'},model:{value:(_vm.pathFormPath),callback:function ($$v) {_vm.pathFormPath=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"pathFormPath"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.savePathForm}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.showPathForm = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"max-width":"80%"},model:{value:(_vm.showAddressList),callback:function ($$v) {_vm.showAddressList=$$v},expression:"showAddressList"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.addressListPathName)+" "+_vm._s(_vm.addressListPath))])]),_vm._v(" "),_c('v-card-text',[_c('v-data-table',{attrs:{"headers":_vm.addressListHeaders,"items":_vm.addressList,"loading":_vm.addressListLoading,"no-data-text":"","hide-actions":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_vm._v(_vm._s(_vm.addressListPath)+"/"+_vm._s(props.item.path))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(props.item.wallet.getAddress()))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.wallet.info.balance))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_c('v-btn',{attrs:{"color":"success","fab":"","small":"","flat":""},on:{"click":function($event){_vm.setWallet(props.item.wallet, props.item.path)}}},[_c('v-icon',[_vm._v("lock_open")])],1)],1)]}}])})],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.addressListPos > 0)?_c('v-btn',{staticClass:"green--text darken-1",attrs:{"flat":""},on:{"click":_vm.prev10Address}},[_vm._v(_vm._s(_vm.$t('derive_path.prev_10')))]):_vm._e(),_vm._v(" "),_c('v-btn',{staticClass:"green--text darken-1",attrs:{"flat":""},on:{"click":_vm.next10Address}},[_vm._v(_vm._s(_vm.$t('derive_path.next_10')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.showAddressList = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "r3Gj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  common: {
    confirm: '确认',
    cancel: '取消',
    search: '搜索',
    copy: '复制',
    next: '下一步',
    question_mark: '？',
    testnet: '测试网络',
    mainnet: '主网',
    menu: {
      create: '创建新钱包',
      create_from_mnemonic: '创建密语钱包',
      restore_from_mnemonic: '从密语恢复钱包',
      restore_from_wif: '从私钥恢复钱包',
      restore_from_mobile: '从手机钱包恢复',
      restore_from_key_file: '从加密文件恢复',
      restore_from_ledger: '使用Ledger',
      view: '查看钱包信息',
      dump_as_key_file: '备份为加密文件',
      transactions: '查看交易记录',
      safe_send: '安全转账',
      send: '转账',
      request_payment: '收款码',
      create_contract: '创建智能合约',
      send_to_contract: '向智能合约发送数据',
      call_contract: '调用智能合约',
      settings: '设置'
    },
    info: {
      address: '地址',
      balance: '余额',
      unconfirmed_balance: '未确认余额',
      priv_key: '私钥'
    },
    notify: {
      success: '成功',
      fail: '失败',
      copy: '复制',
      password: '密码',
      is_required: '是必须的',
      parse: '解析',
      file: '文件',
      password_is_not_same_as_the_old_one: '两次输入的密码不一样',
      mnemonics_are_not_same_as_the_words_should_remember: '这组密语跟应该记住的密语不一样',
      mnemonics_can_not_restore: '密语不能恢复钱包，请检查输入',
      address_is_not_same_as_the_old_one: '两次输入的地址不一样',
      from_address_is_not_same_as_the_wallet: '发送地址跟钱包地址不一样',
      restore_wif_fail: '从此密钥不能恢复钱包，请再次确认',
      the_key_file_is_not_a_valid_format: '加密文件格式不对',
      restore_key_file_fail: '可能是加密文件的解密密码不对，从此加密文件不能恢复钱包，请再次确认',
      connect_ledger_fail: '连接Ledger失败，请按上面的操作重做一次。如果还是失败，请把Ledger拔下来后重试',
      token_contract_address_is_not_exists: 'Token合约地址不存在，请确认后再试'
    },
    mode: {
      normal: '正常模式',
      offline: '离线模式'
    }
  },
  mnemonic: {
    input_words: '请输入密语',
    label: '密语'
  },
  password: {
    enter: '请输入你的密码',
    password: '密码'
  },
  file_reader: {
    upload: '上传'
  },
  file_creator: {
    download: '请点击此的按钮下载文件，如果没有启动下载，请在按钮上右键并选择"链接另存为..."'
  },
  ledger: {
    comm_fail: '与ledger通信失败，请重新插入ledger'
  },
  derive_path: {
    title: '请选择生成路径',
    default: '默认路径',
    add_custom: '新增自定义路径',
    edit_custom: '编辑自定义路径',
    del_custom: '确定删除这个路径吗?',
    path_name: '路径名',
    path: '路径',
    prev_10: '前10个地址',
    next_10: '后10个地址'
  },
  safe_send: {
    title: '安全转账',
    from_address: '源地址',
    to_address: '目的地址',
    amount: '金额',
    fee: '手续费',
    info: '欢迎使用安全转账模式，您需要两台电脑（一台联网，一台不联网）和一个移动存储设备来完成一次安全转账操作。如果您完全遵循下面的操作指导，那么您将不会有泄露私钥的风险。对于不联网的电脑，请在"设置"-"模式"里面设置为"离线模式"，然后恢复您的钱包',
    info1_online: '请填写下列参数，确认后请保存生成的文件，并把文件拷贝到不联网的电脑上，并在那台电脑上进行第二步操作',
    info1_offline: '请在联网电脑上完成第一步操作，然后把生成的文件设备拷贝过来，然后进行第二步操作',
    info2_online: '请在不联网电脑上完成此步操作，然后把生成的文件拷贝过来，然后进行第三步操作',
    info2_offline: '请上传拷贝过来的文件，完成签名后，把生成的文件再拷贝回联网电脑，然后进行第三步操作',
    info3_online: '请上传拷贝过来的文件，验证后将完成转账操作',
    info3_offline: '请在联网电脑上继续操作'
  },
  send: {
    send_tokens: '转账',
    enter_address: '请再次输入地址（二次检查）',
    going_to_send: '你确定要发送',
    to_address: '到地址',
    token_address: 'Token合约地址'
  },
  request_payment: {
    title: '收款码'
  },
  create_contract: {
    title: '创建智能合约',
    confirm: '确定发布此智能合约吗?',
    compiler: '编译器'
  },
  send_to_contract: {
    title: '向智能合约发送数据',
    confirm: '确定发送吗?'
  },
  call_contract: {
    title: '调用智能合约',
    result: '执行结果'
  },
  create: {
    title: '创建新钱包'
  },
  create_mnemonic: {
    title: '创建新钱包',
    remember: '请记住如下助记词',
    remembered: '我已经都记住了'
  },
  restore: {
    title: '恢复钱包',
    mnemonic_warning: '输入的助记词可能不是标准助记词词组。如果是使用本钱包通过助记词创建的地址，那么请取消本对话框后重新确认您输入的助记词（不含空格，大写字母等等）。如果您确认输入无误那么请继续'
  },
  restore_wif: {
    title: '恢复钱包',
    priv_key: '私钥'
  },
  restore_mobile: {
    title: '从手机钱包恢复'
  },
  restore_key_file: {
    title: '从加密文件恢复',
    password_title: '请输入您的加密文件解密密码'
  },
  restore_ledger: {
    title: '从Ledger恢复',
    usage: '请确保您的固件和软件都是最新的版本。连接您的LedgerWallet，进入Html APP，然后点击下面的连接按钮尝试连接。',
    download: '没有Html APP? 请按照这个安装 https://www.ledgerwallet.com/apps/manager',
    connect: '连接'
  },
  view: {
    title: '查看钱包信息'
  },
  view_tx: {
    title: '查看钱包交易',
    recent: '最近10笔交易',
    tx: '交易：',
    mined_at: 'Mined at ',
    total_in: '总计输入：',
    fee: '手续费：',
    total_out: '总计输出：'
  },
  dump_as_key_file: {
    title: '备份为加密文件',
    password_title: '请输入密码进行文件加密',
    warning: '请记住此时您用来加密文件的密码，此密码没有另一个地方有备份，也不能被找回，如果此密码丢失的话，这次备份的加密文件不可能通过其它办法恢复成您的钱包'
  },
  config: {
    title: '设置',
    lan: '语言',
    network: '网络选择',
    mode: '模式'
  },
  warning: {
    title: '警告',
    list: ['如果您访问了一个钓鱼网站或者丢失了您的备份，本站无法为您恢复资金。请确保备份您的私钥或者助记词。', '本站不存储您的私钥或者助记词。', '您作为用户，完全为您自己的资金安全负责。', '请确保使用最新的防病毒软件和操作系统。', '请私下保存您的私钥或助记词，不要告诉任何人。', '如果使用了从助记词恢复地址的方式，请保证助记词和密码的绝对正确。输入任意的助记词和密码都会生成地址，如果有细微的不同都可能会导致生成跟原来不同的地址。']
  }
});

/***/ }),

/***/ "t7Gd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_manure.fd0ff29.jpg";

/***/ }),

/***/ "tUk+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Restore_vue__ = __webpack_require__("4tbZ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ef0d4b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Restore_vue__ = __webpack_require__("pv4d");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Restore_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_68ef0d4b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Restore_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "v3+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_config__ = __webpack_require__("6+u4");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      total: 6,
      showWarning: __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].get('showWarning', true)
    };
  },

  methods: {
    hasWarning: function hasWarning(i) {
      var key = 'warning.list.' + i;
      return this.$t(key) !== key;
    },
    close: function close() {
      this.showWarning = false;
      __WEBPACK_IMPORTED_MODULE_0_libs_config__["a" /* default */].set('showWarning', this.showWarning, 86400);
    }
  }
});

/***/ }),

/***/ "vyTM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('create_contract.title')))])]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Byte Code","multiLine":"","required":""},model:{value:(_vm.code),callback:function ($$v) {_vm.code=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"code"}}),_vm._v(" "),_c('a',{staticStyle:{"float":"right"},attrs:{"href":"https://remix.ethereum.org","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('create_contract.compiler')))]),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Limit","required":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('create_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Raw Tx","multi-line":"","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "wOSG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "wRaC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("4quz")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"blue-grey"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Info\n        "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Buy\n        "),_c('v-icon',[_vm._v("add_shopping_cart")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Sell\n        "),_c('v-icon',[_vm._v("attach_money")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Play\n        "),_c('v-icon',[_vm._v("casino")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"height":"auto","width":"25%"},attrs:{"src":__webpack_require__("U8Q/")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("This is heavy, Doc!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    Going straight to the point: Do not expect any commitment from us.\n                    "),_c('br'),_c('br'),_vm._v("\n            \t\t    Yeah, that's right. We're here just for the fun!\n            \t\t    "),_c('br'),_c('br'),_vm._v("\n            \t\t    Please feel home and browse around. You may have great surprises in our lotteries!\n                    "),_c('br'),_c('br'),_c('br'),_c('br'),_vm._v(" "),_c('small',[_c('b',[_vm._v("Disclaimer")]),_vm._v(" "),_c('br'),_vm._v("\n                      HTMLCoin Foundation has reviewed and approved this application's code, having Althash Web Platform as a proud host, however the Foundation is not responsible for any funds transacted within this application scope.\n                      "),_c('br'),_vm._v("\n                      By using this application you agree on this terms.\n                    ")])]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-container',{attrs:{"fluid":"","grid-list-lg":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-xs-right":""}},[_c('v-btn',{attrs:{"fab":"","color":"info","disabled":_vm.buyBank},on:{"click":function($event){_vm.buyBank = true; _vm.buyUsers = false}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("account_balance")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-xs-left":""}},[_c('v-btn',{attrs:{"fab":"","color":"error","disabled":_vm.buyUsers},on:{"click":function($event){_vm.buyBank = false; _vm.buyUsers = true}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("assessment")])],1)],1),_vm._v(" "),(_vm.buyBank)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-bold"},[_vm._v("FROM BANK")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                          Current price per token: "),_c('b',[_vm._v("1 HTML")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"How much to spend","outline":"","suffix":"HTML","background-color":"blue-grey darken-3"},model:{value:(_vm.buyFromBankAmount),callback:function ($$v) {_vm.buyFromBankAmount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"buyFromBankAmount"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",on:{"click":_vm.buyFromBank}},[_vm._v("Buy!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.buyUsers)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-bold"},[_vm._v("FROM MARKET")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Who to buy from","outline":"","background-color":"blue-grey darken-3"},model:{value:(_vm.buyFromUserAddress),callback:function ($$v) {_vm.buyFromUserAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"buyFromUserAddress"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                          Current price per token: "),_c('b',[_vm._v("2 HTML")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"How much to spend","outline":"","suffix":"HTML","background-color":"blue-grey darken-3"},model:{value:(_vm.buyFromUserAmount),callback:function ($$v) {_vm.buyFromUserAmount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"buyFromUserAmount"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",on:{"click":_vm.buyFromUser}},[_vm._v("Buy!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Price per token","outline":"","suffix":"HTML","background-color":"blue-grey darken-3"},model:{value:(_vm.sellPricePerToken),callback:function ($$v) {_vm.sellPricePerToken=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"sellPricePerToken"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Token quantity","outline":"","background-color":"blue-grey darken-3"},model:{value:(_vm.sellTokenQty),callback:function ($$v) {_vm.sellTokenQty=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"sellTokenQty"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",on:{"click":_vm.sell}},[_vm._v("Sell!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-container',{attrs:{"fluid":"","grid-list-lg":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-xs-right":""}},[_c('v-btn',{attrs:{"fab":"","color":"success","disabled":_vm.playLottery},on:{"click":function($event){_vm.playLottery = true; _vm.playUpForGrabs = false}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("monetization_on")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-xs-left":""}},[_c('v-btn',{attrs:{"fab":"","color":"warning","disabled":_vm.playUpForGrabs},on:{"click":function($event){_vm.playLottery = false; _vm.playUpForGrabs = true}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("directions_run")])],1)],1),_vm._v(" "),(_vm.playLottery)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"py-3 display-2 font-weight-light"},[_vm._v("LOTTERY")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-card',{staticClass:"py-3 white--text",attrs:{"color":"blue-grey","height":"100%"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs4":"","align-center":""}},[_c('img',{staticStyle:{"width":"75%","max-width":"85px","height":"auto","max-height":"85px"},attrs:{"src":__webpack_require__("owsU")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-black"},[_vm._v("BIFP Lottery")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                              Status: "),_c('span',{staticClass:"subheading font-weight-bold green--text"},[_vm._v("On")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                              Prize: "),_c('span',{staticClass:"subheading font-weight-bold"},[_vm._v("1,000 BIFP*")])]),_vm._v(" "),_c('v-flex',[_vm._v("\n                              Bets between "),_c('b',[_vm._v("0 and 100 BIFP")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-card',{staticClass:"py-3 white--text",attrs:{"color":"blue darken-1","height":"100%"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs4":"","align-center":""}},[_c('img',{staticStyle:{"width":"75%","max-width":"64px","height":"auto","max-height":"85px"},attrs:{"src":__webpack_require__("aR/i")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-black"},[_vm._v("HTMLCoin Lottery")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                              Status: "),_c('span',{staticClass:"subheading font-weight-bold green--text"},[_vm._v("On")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                              Prize: "),_c('span',{staticClass:"subheading font-weight-bold"},[_vm._v("100,000 HTML*")])]),_vm._v(" "),_c('v-flex',[_vm._v("\n                              Bets between "),_c('b',[_vm._v("100 and 1000 BIFP")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Your bet","outline":"","suffix":"BIFP","background-color":"teal darken-4"},model:{value:(_vm.lotteryBet),callback:function ($$v) {_vm.lotteryBet=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"lotteryBet"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Your lucky number","outline":"","background-color":"teal darken-4"},model:{value:(_vm.lotteryLuckyNumber),callback:function ($$v) {_vm.lotteryLuckyNumber=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"lotteryLuckyNumber"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",on:{"click":_vm.runLottery}},[_vm._v("I'm feeling lucky!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"caption"},[_vm._v("* Prize pots are subject to constant fluctuation as several players run for the same prize, simultaneously and asynchronously. Such changes may not be reflected on this page.")]),_vm._v(" "),_c('v-spacer')],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.playUpForGrabs)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"display-2 font-weight-light"},[_vm._v("UP FOR GRABS")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"How much to play","outline":"","background-color":"teal darken-4","suffix":"BIFP"},model:{value:(_vm.upForGrabsBet),callback:function ($$v) {_vm.upForGrabsBet=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"upForGrabsBet"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",on:{"click":_vm.buyFromUser}},[_vm._v("The cookie is mine!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n            "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n          ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":50}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","width":"600px"},model:{value:(_vm.txReceiptDialog),callback:function ($$v) {_vm.txReceiptDialog=$$v},expression:"txReceiptDialog"}},[_c('v-card',{attrs:{"color":"blue-grey lighten-5"}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[(this.awaitingTx)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_vm._v("\n                Transaction broadcasted to the "),_c('b',[_vm._v("Althash Blockchain")]),_vm._v("!\n              ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n              Awaiting confirmation from the network...\n            ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-progress-linear',{attrs:{"indeterminate":true,"color":"blue"}})],1)],1):_vm._e(),_vm._v(" "),(this.txError)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"red--text"},[_c('p'),_c('h1',[_vm._v("Unsuccessful")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v(" \n                  There was an error while running your transaction.\n                ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"error"},on:{"click":function($event){_vm.txError = false; _vm.txReceiptDialog = false}}},[_vm._v("\n                Close\n              ")])],1)],1):_vm._e(),_vm._v(" "),(this.txConfirmed)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[(this.lotteryWin)?_c('v-flex',{attrs:{"xs12":""}},[_c('img',{attrs:{"src":__webpack_require__("+D9K")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold"},[_vm._v("\n                You have just won "+_vm._s(this.lotteryRewardAmount)+" "+_vm._s(this.lotteryType)+"!\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Are you sure you haven't seen any almanac around?\n              ")])]):_c('v-flex',{attrs:{"xs12":""}},[_c('img',{attrs:{"src":__webpack_require__("t7Gd")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold orange--text"},[_vm._v("\n                Not this time, McFly...\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Your \"lucky\" number was "),_c('b',[_vm._v(_vm._s(this.lotteryLuckyNumber))]),_vm._v(", but the drawn number was "),_c('b',[_vm._v(_vm._s(this.drawnNumber))]),_vm._v(".\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                So why don't you make like a tree... and get outta here?!\n              ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{staticClass:"grey--text",attrs:{"flat":""},on:{"click":function($event){_vm.txConfirmed = false; _vm.txReceiptDialog = false}}},[_vm._v("\n                Close\n              ")])],1)],1):_vm._e()],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localstorage_logger__ = __webpack_require__("lY3B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localstorage_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_localstorage_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_Notify__ = __webpack_require__("QSGr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_Warning__ = __webpack_require__("3ZG3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_controllers_Home__ = __webpack_require__("KSlh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_controllers_Create__ = __webpack_require__("T/Vc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_controllers_CreateMnemonic__ = __webpack_require__("zTYZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_controllers_Restore__ = __webpack_require__("tUk+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_controllers_RestoreWif__ = __webpack_require__("Ts+B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_controllers_RestoreMobile__ = __webpack_require__("ygyt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_controllers_RestoreKeyFile__ = __webpack_require__("Af8B");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_controllers_RestoreLedger__ = __webpack_require__("T7VU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_controllers_View__ = __webpack_require__("AySs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_controllers_ViewTx__ = __webpack_require__("Rapo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_controllers_SafeSend__ = __webpack_require__("86EO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_controllers_Send__ = __webpack_require__("9Z0V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_controllers_RequestPayment__ = __webpack_require__("9H6G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_controllers_DumpKeyFile__ = __webpack_require__("Uzv/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_controllers_CreateToken__ = __webpack_require__("Rufw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_controllers_Dapp_MyOffspring__ = __webpack_require__("NysP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_controllers_Dapp_CrypticMAG__ = __webpack_require__("glbK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_controllers_Dapp_AltProof__ = __webpack_require__("9DK7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_controllers_Dapp_BiffyPlutonium__ = __webpack_require__("r1Qh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_controllers_CreateContract__ = __webpack_require__("QbG2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_controllers_SendToContract_vue__ = __webpack_require__("ayyg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_controllers_CallContract_vue__ = __webpack_require__("Nj6y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_controllers_Config__ = __webpack_require__("/kv9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_libs_i18n__ = __webpack_require__("KUFz");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



//Components




























var log = __WEBPACK_IMPORTED_MODULE_2_localstorage_logger___default()({
  maxLogSizeInBytes: 500 * 1024 // 500KB
});

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "app",
  i18n: __WEBPACK_IMPORTED_MODULE_30_libs_i18n__["a" /* default */],
  data: function data() {
    return {
      wallet: false,
      current: "home",
      logoff_dialog: false,
      network: __WEBPACK_IMPORTED_MODULE_28_libs_config__["a" /* default */].getNetwork(),
      mode: __WEBPACK_IMPORTED_MODULE_28_libs_config__["a" /* default */].getMode(),
      log: log,
      notifyList: {},
      items: [{
        action: "open_in_browser",
        title: "Add Wallet",
        name: "new_wallet",
        active: true,
        items: [{
          title: "Generate New Wallet",
          name: "create",
          action: "add"
        }, {
          title: "Restore from Key File",
          name: "restore_from_key_file",
          action: "cloud_upload"
        }, {
          title: "Create from Mnemonic",
          name: "create_from_mnemonic",
          action: "assignment"
        }, {
          title: "Restore from Mnemonic",
          name: "restore_from_mnemonic",
          action: "sms"
        }, {
          title: "Restore from WIF",
          name: "restore_from_wif",
          action: "create"
        }, {
          title: "Restore from Mobile",
          name: "restore_from_mobile",
          action: "phonelink_lock"
        }, {
          title: "Restore from Ledger",
          name: "restore_from_ledger",
          action: "flip_to_front"
        }]
      }, {
        action: "account_balance_wallet",
        title: "Wallet Functions",
        name: "wallet",
        active: false,
        items: [{
          title: "View Wallet Info",
          name: "view",
          action: "info"
        }, {
          title: "View Wallet Txs",
          name: "transactions",
          action: "list"
        }, {
          title: "Send",
          name: "send",
          action: "redo"
        }, {
          title: "Safe Send",
          name: "safe_send",
          action: "security"
        }, {
          title: "Request Payment",
          name: "request_payment",
          action: "undo"
        }, {
          title: "Dump as Key File",
          name: "dump_as_key_file",
          action: "cloud_download"
        }]
      }, {
        action: "code",
        title: "Smart Contracts",
        name: "contract",
        active: false,
        items: [{
          title: "Send to Contract",
          name: "send_to_contract",
          action: "play_circle_outline"
        }, {
          title: "Call Contract",
          name: "call_contract",
          action: "pageview"
        }, {
          title: "Create Contract",
          name: "create_contract",
          action: "build"
        }]
      }, {
        action: "settings",
        title: "Settings",
        name: "top_settings",
        active: false,
        items: [{
          title: "General",
          name: "settings",
          action: "list"
        }]
      }]
    };
  },

  computed: {
    isCurrent: function isCurrent() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, this.current, true);
    },
    notShow: function notShow() {
      return {
        restore_from_ledger: this.network !== "mainnet",
        view: this.mode === "offline" || !this.wallet,
        transactions: this.mode === "offline" || !this.wallet,
        wallet: this.mode === "offline" && !this.wallet,
        safe_send: this.mode === "offline" && !this.wallet,
        send: this.mode === "offline" || !this.wallet,
        request_payment: !this.wallet,
        dump_as_key_file: !this.wallet || !this.wallet.getHasPrivKey(),
        create_token: this.mode === "offline" || !this.wallet,
        contract: this.mode === "offline" || !this.wallet,
        create_contract: this.mode === "offline" || !this.wallet,
        send_to_contract: this.mode === "offline" || !this.wallet,
        call_contract: this.mode === "offline" || !this.wallet,
        dapp_myoffspring: this.mode === "offline" || !this.wallet,
        dapp_crypticmag: this.mode === "offline" || !this.wallet,
        dapp_altproof: this.mode === "offline" || !this.wallet,
        dapp_biffyplutonium: this.mode === "offline" || !this.wallet,
        dapps: this.mode === "offline" || !this.wallet
      };
    },
    headerClass: function headerClass() {
      return this.mode === "normal" ? this.network === "mainnet" ? "indigo darken-3" : "red darken-3" : "blue-grey lighten-1";
    },
    showLogoff: function showLogoff() {
      return !(this.mode === "offline" || !this.wallet);
    }
  },
  components: {
    Notify: __WEBPACK_IMPORTED_MODULE_3_components_Notify__["a" /* default */],
    Warning: __WEBPACK_IMPORTED_MODULE_4_components_Warning__["a" /* default */],
    Home: __WEBPACK_IMPORTED_MODULE_5_controllers_Home__["a" /* default */],
    CreateWallet: __WEBPACK_IMPORTED_MODULE_6_controllers_Create__["a" /* default */],
    CreateMnemonic: __WEBPACK_IMPORTED_MODULE_7_controllers_CreateMnemonic__["a" /* default */],
    RestoreWallet: __WEBPACK_IMPORTED_MODULE_8_controllers_Restore__["a" /* default */],
    RestoreWif: __WEBPACK_IMPORTED_MODULE_9_controllers_RestoreWif__["a" /* default */],
    RestoreMobile: __WEBPACK_IMPORTED_MODULE_10_controllers_RestoreMobile__["a" /* default */],
    RestoreKeyFile: __WEBPACK_IMPORTED_MODULE_11_controllers_RestoreKeyFile__["a" /* default */],
    RestoreLedger: __WEBPACK_IMPORTED_MODULE_12_controllers_RestoreLedger__["a" /* default */],
    ViewWallet: __WEBPACK_IMPORTED_MODULE_13_controllers_View__["a" /* default */],
    ViewTx: __WEBPACK_IMPORTED_MODULE_14_controllers_ViewTx__["a" /* default */],
    SafeSend: __WEBPACK_IMPORTED_MODULE_15_controllers_SafeSend__["a" /* default */],
    Send: __WEBPACK_IMPORTED_MODULE_16_controllers_Send__["a" /* default */],
    RequestPayment: __WEBPACK_IMPORTED_MODULE_17_controllers_RequestPayment__["a" /* default */],
    DumpKeyFile: __WEBPACK_IMPORTED_MODULE_18_controllers_DumpKeyFile__["a" /* default */],
    CreateToken: __WEBPACK_IMPORTED_MODULE_19_controllers_CreateToken__["a" /* default */],
    DappMyoffspring: __WEBPACK_IMPORTED_MODULE_20_controllers_Dapp_MyOffspring__["a" /* default */],
    DappCrypticmag: __WEBPACK_IMPORTED_MODULE_21_controllers_Dapp_CrypticMAG__["a" /* default */],
    DappAltProof: __WEBPACK_IMPORTED_MODULE_22_controllers_Dapp_AltProof__["a" /* default */],
    DappBiffyPlutonium: __WEBPACK_IMPORTED_MODULE_23_controllers_Dapp_BiffyPlutonium__["a" /* default */],
    CreateContract: __WEBPACK_IMPORTED_MODULE_24_controllers_CreateContract__["a" /* default */],
    SendToContract: __WEBPACK_IMPORTED_MODULE_25_controllers_SendToContract_vue__["a" /* default */],
    CallContract: __WEBPACK_IMPORTED_MODULE_26_controllers_CallContract_vue__["a" /* default */],
    Config: __WEBPACK_IMPORTED_MODULE_27_controllers_Config__["a" /* default */]
  },
  methods: {
    setWallet: function setWallet() {
      this.wallet = __WEBPACK_IMPORTED_MODULE_29_libs_web_wallet__["a" /* default */].getWallet();
      this.wallet.init();
      if (this.wallet) {
        if (this.mode === "offline") {
          this.current = "request_payment";
        } else {
          this.current = "view";
        }
      }
    },
    logoff: function logoff() {
      this.wallet = null;
      this.current = "home";
      this.logoff_dialog = false;
    },
    changeView: function changeView(name) {
      this.current = name;
    },
    openDapp: function openDapp(name) {
      if (this.mode === "offline" || !this.wallet) {
        alert('You need to either import or create a new Wallet before using Dapps! Please go to the "Add Wallet" menu at the top-right corner of the page.');
      } else {
        this.changeView(name);
      }
    },
    error: function error(msg) {
      var isHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      this.addNotify(msg, "error", isHtml, ttl);
    },
    success: function success(msg) {
      var isHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      this.addNotify(msg, "success", isHtml, ttl);
    },
    addNotify: function addNotify(msg, type) {
      var _this = this;

      var isHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var ttl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

      var notifyId = [msg, type].join("_");
      var notify = {
        msg: msg.split(" ").reduce(function (msg, current) {
          var tmsg = _this.$t("common.notify." + current);
          tmsg = tmsg === "common.notify." + current ? " " + current : tmsg;
          return msg + tmsg;
        }, ""),
        type: type,
        show: true,
        isHtml: isHtml
      };
      if (this.notifyList[notifyId] && this.notifyList[notifyId].timer) {
        clearTimeout(this.notifyList[notifyId].timer);
      }
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].set(this.notifyList, notifyId, notify);
      if (ttl > 0) {
        this.notifyList[notifyId].timer = setTimeout(function () {
          __WEBPACK_IMPORTED_MODULE_1_vue__["default"].delete(_this.notifyList, notifyId);
        }, ttl * 1000);
      }
    }
  }
});

/***/ }),

/***/ "xnON":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      password: '',
      repeatPassword: ''
    };
  },

  props: ['open', 'validate', 'notEmpty', 'title'],
  computed: {
    dialog: function dialog() {
      return this.open;
    },
    headline: function headline() {
      return this.title ? this.title : 'password.enter';
    }
  },
  methods: {
    confirmPassword: function confirmPassword() {
      var password = this.password;
      if (this.notEmpty && (this.password === '' || this.repeatPassword === '')) {
        this.$root.error('Password is required!');
        return false;
      }
      if (this.password != this.repeatPassword) {
        this.$root.error('Passwords do not match!');
        return false;
      }
      this.$emit('password', password);
      this.password = '';
      return true;
    }
  },
  watch: {
    open: function open(_open) {
      var _this = this;

      if (_open) {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
          return _this.$refs.passwordInput.focus();
        });
      }
    }
  }
});

/***/ }),

/***/ "yDAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_libs_nodes_insight__ = __webpack_require__("bEpM");


var nodeConfigs = {
  insight: __WEBPACK_IMPORTED_MODULE_0_libs_nodes_insight__["a" /* default */]
};

var defaultNodeId = 'insight';
var currentNodeId = defaultNodeId;

/* harmony default export */ __webpack_exports__["a"] = ({
  currentNode: function currentNode() {
    return nodeConfigs[currentNodeId];
  },
  setNodeId: function setNodeId(nodeId) {
    if (nodeConfigs[nodeId]) {
      currentNodeId = nodeId;
    }
  }
});

/***/ }),

/***/ "ygyt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreMobile_vue__ = __webpack_require__("zGMQ");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d378993e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreMobile_vue__ = __webpack_require__("CABZ");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreMobile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d378993e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreMobile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "yoUZ":
/***/ (function(module, exports) {

module.exports = {"OP_FALSE":0,"OP_0":0,"OP_PUSHDATA1":76,"OP_PUSHDATA2":77,"OP_PUSHDATA4":78,"OP_1NEGATE":79,"OP_RESERVED":80,"OP_TRUE":81,"OP_1":81,"OP_2":82,"OP_3":83,"OP_4":84,"OP_5":85,"OP_6":86,"OP_7":87,"OP_8":88,"OP_9":89,"OP_10":90,"OP_11":91,"OP_12":92,"OP_13":93,"OP_14":94,"OP_15":95,"OP_16":96,"OP_NOP":97,"OP_VER":98,"OP_IF":99,"OP_NOTIF":100,"OP_VERIF":101,"OP_VERNOTIF":102,"OP_ELSE":103,"OP_ENDIF":104,"OP_VERIFY":105,"OP_RETURN":106,"OP_TOALTSTACK":107,"OP_FROMALTSTACK":108,"OP_2DROP":109,"OP_2DUP":110,"OP_3DUP":111,"OP_2OVER":112,"OP_2ROT":113,"OP_2SWAP":114,"OP_IFDUP":115,"OP_DEPTH":116,"OP_DROP":117,"OP_DUP":118,"OP_NIP":119,"OP_OVER":120,"OP_PICK":121,"OP_ROLL":122,"OP_ROT":123,"OP_SWAP":124,"OP_TUCK":125,"OP_CAT":126,"OP_SUBSTR":127,"OP_LEFT":128,"OP_RIGHT":129,"OP_SIZE":130,"OP_INVERT":131,"OP_AND":132,"OP_OR":133,"OP_XOR":134,"OP_EQUAL":135,"OP_EQUALVERIFY":136,"OP_RESERVED1":137,"OP_RESERVED2":138,"OP_1ADD":139,"OP_1SUB":140,"OP_2MUL":141,"OP_2DIV":142,"OP_NEGATE":143,"OP_ABS":144,"OP_NOT":145,"OP_0NOTEQUAL":146,"OP_ADD":147,"OP_SUB":148,"OP_MUL":149,"OP_DIV":150,"OP_MOD":151,"OP_LSHIFT":152,"OP_RSHIFT":153,"OP_BOOLAND":154,"OP_BOOLOR":155,"OP_NUMEQUAL":156,"OP_NUMEQUALVERIFY":157,"OP_NUMNOTEQUAL":158,"OP_LESSTHAN":159,"OP_GREATERTHAN":160,"OP_LESSTHANOREQUAL":161,"OP_GREATERTHANOREQUAL":162,"OP_MIN":163,"OP_MAX":164,"OP_WITHIN":165,"OP_RIPEMD160":166,"OP_SHA1":167,"OP_SHA256":168,"OP_HASH160":169,"OP_HASH256":170,"OP_CODESEPARATOR":171,"OP_CHECKSIG":172,"OP_CHECKSIGVERIFY":173,"OP_CHECKMULTISIG":174,"OP_CHECKMULTISIGVERIFY":175,"OP_NOP1":176,"OP_NOP2":177,"OP_CHECKLOCKTIMEVERIFY":177,"OP_NOP3":178,"OP_CHECKSEQUENCEVERIFY":178,"OP_NOP4":179,"OP_NOP5":180,"OP_NOP6":181,"OP_NOP7":182,"OP_NOP8":183,"OP_NOP9":184,"OP_NOP10":185,"OP_PUBKEYHASH":253,"OP_PUBKEY":254,"OP_INVALIDOPCODE":255}

/***/ }),

/***/ "zG4X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  },

  props: ['color'],
  methods: {
    clickBtn: function clickBtn() {
      this.$refs.input.click();
    },
    handleFiles: function handleFiles(e) {
      var file = e.target.files[0];
      var reader = new FileReader();
      var vue = this;
      reader.onload = function () {
        vue.$emit('upload', {
          content: this.result
        });
      };
      reader.readAsText(file);
      this.$refs.input.value = '';
    }
  }
});

/***/ }),

/***/ "zGMQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__ = __webpack_require__("cDYc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_libs_web_wallet__ = __webpack_require__("G2dt");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      walletList: [],
      restored: false,
      headers: [{ text: 'Address', value: 'address', align: 'left', sortable: false }, { text: 'Balance', value: 'balance', sortable: false }, { text: '', value: '', sortable: false }]
    };
  },

  components: {
    mnemonic: __WEBPACK_IMPORTED_MODULE_0_components_Mnemonic__["a" /* default */]
  },
  methods: {
    restore: function restore(mnemonic) {
      var _this = this;

      this.restored = true;
      setTimeout(function () {
        _this.walletList = __WEBPACK_IMPORTED_MODULE_1_libs_web_wallet__["a" /* default */].restoreFromMobile(mnemonic);
      }, 10);
    },
    choose: function choose(path) {
      __WEBPACK_IMPORTED_MODULE_1_libs_web_wallet__["a" /* default */].chooseMobileWallet(this.walletList, path);
      this.$emit('restored');
    }
  }
});

/***/ }),

/***/ "zTYZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateMnemonic_vue__ = __webpack_require__("6gBg");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0168814b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateMnemonic_vue__ = __webpack_require__("8DkI");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateMnemonic_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0168814b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateMnemonic_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "zZEl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('restore_ledger.title')))])]),_vm._v(" "),_c('v-card-text',[(_vm.step === 1)?[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v("\n        "+_vm._s(_vm.$t('restore_ledger.usage'))+"\n      ")]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.ledgerwallet.com/apps/manager","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('restore_ledger.download')))])]:_vm._e(),_vm._v(" "),(_vm.step === 2)?[_c('derive-path',{attrs:{"ledger":_vm.ledger},on:{"setWallet":_vm.setWallet}})]:_vm._e()],2),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.step === 1)?_c('v-btn',{attrs:{"color":"error","dark":""},on:{"click":_vm.connect}},[_vm._v(_vm._s(_vm.$t('restore_ledger.connect')))]):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.d4550aab4787332dd9fb.js.map