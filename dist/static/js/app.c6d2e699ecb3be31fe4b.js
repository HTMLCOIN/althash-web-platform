webpackJsonp([1],{

/***/ "+D9K":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_win.583c0bf.png";

/***/ }),

/***/ "+LNh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/logo_photizo.899f00f.png";

/***/ }),

/***/ "+Moa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("settings")]),_vm._v("\n      "+_vm._s(_vm.$t('config.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('config.lan')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-select',{attrs:{"items":_vm.lanSelect,"label":_vm.$t('config.lan'),"single-line":"","bottom":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.lan),callback:function ($$v) {_vm.lan=$$v},expression:"lan"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('config.network')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-select',{attrs:{"items":_vm.networkSelect,"label":_vm.$t('config.network'),"single-line":"","bottom":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.network),callback:function ($$v) {_vm.network=$$v},expression:"network"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('config.mode')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-select',{attrs:{"items":_vm.modeSelect,"label":_vm.$t('config.mode'),"single-line":"","bottom":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.mode),callback:function ($$v) {_vm.mode=$$v},expression:"mode"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-subheader',[_vm._v("LOG")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('file-creator',{attrs:{"color":"red","href":_vm.fileStr}},[_vm._v("DOWNLOAD LOGS")])],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"info",on:{"click":_vm.save}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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

/***/ "/6En":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/kv9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Config_vue__ = __webpack_require__("KJOx");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_293f8a7a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Config_vue__ = __webpack_require__("+Moa");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_293f8a7a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Config_vue__["a" /* default */],
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

/***/ "09AO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("build")]),_vm._v("\n      "+_vm._s(_vm.$t('create_contract.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-textarea',{attrs:{"label":"Byte Code","required":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.code),callback:function ($$v) {_vm.code=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"code"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","outline":"","background-color":"indigo darken-4"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","outline":"","background-color":"indigo darken-4"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","required":"","outline":"","background-color":"indigo darken-4"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('create_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1QQ/":
/***/ (function(module, exports) {

module.exports = {"_args":[["bigi@1.4.2","/var/www/html/althash-web-platform"]],"_from":"bigi@1.4.2","_id":"bigi@1.4.2","_inBundle":false,"_integrity":"sha1-nGZalfiLiwj8Bc/XMfVhhZ1yWCU=","_location":"/bigi","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"bigi@1.4.2","name":"bigi","escapedName":"bigi","rawSpec":"1.4.2","saveSpec":null,"fetchSpec":"1.4.2"},"_requiredBy":["/bitcoinjs-lib","/ecurve","/htmlcoinjs-lib/bitcoinjs-lib"],"_resolved":"https://registry.npmjs.org/bigi/-/bigi-1.4.2.tgz","_spec":"1.4.2","_where":"/var/www/html/althash-web-platform","bugs":{"url":"https://github.com/cryptocoinjs/bigi/issues"},"dependencies":{},"description":"Big integers.","devDependencies":{"coveralls":"^2.11.2","istanbul":"^0.3.5","jshint":"^2.5.1","mocha":"^2.1.0","mochify":"^2.1.0"},"homepage":"https://github.com/cryptocoinjs/bigi#readme","keywords":["cryptography","math","bitcoin","arbitrary","precision","arithmetic","big","integer","int","number","biginteger","bigint","bignumber","decimal","float"],"main":"./lib/index.js","name":"bigi","repository":{"url":"git+https://github.com/cryptocoinjs/bigi.git","type":"git"},"scripts":{"browser-test":"mochify --wd -R spec","coverage":"istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js","coveralls":"npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info","jshint":"jshint --config jshint.json lib/*.js ; true","test":"_mocha -- test/*.js","unit":"mocha"},"testling":{"files":"test/*.js","harness":"mocha","browsers":["ie/9..latest","firefox/latest","chrome/latest","safari/6.0..latest","iphone/6.0..latest","android-browser/4.2..latest"]},"version":"1.4.2"}

/***/ }),

/***/ "1sMk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("edit")]),_vm._v("\n        "+_vm._s(_vm.$t('restore_wif.title'))+"\n      ")],1)])]),_vm._v(" "),_c('v-card-text',[_c('v-layout',[_c('v-flex',{attrs:{"xs2":""}},[_c('v-subheader',[_vm._v("\n          "+_vm._s(_vm.$t('restore_wif.priv_key'))+"\n        ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.restore($event)}},model:{value:(_vm.wif),callback:function ($$v) {_vm.wif=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"wif"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},on:{"click":_vm.restore}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1)],1)}
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

/***/ "2Kgr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("play_circle_outline")]),_vm._v("\n        "+_vm._s(_vm.$t('send_to_contract.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Contract Address","required":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.contractAddress),callback:function ($$v) {_vm.contractAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"contractAddress"}}),_vm._v(" "),_c('v-textarea',{attrs:{"label":"ABI","required":"","outline":"","background-color":"blue lighten-1"},on:{"input":_vm.decodeAbi},model:{value:(_vm.abi),callback:function ($$v) {_vm.abi=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"abi"}}),_vm._v(" "),(_vm.parsedAbi)?_c('v-select',{attrs:{"items":_vm.parsedAbi,"label":"Method","outline":"","background-color":"blue lighten-1","single-line":"","bottom":""},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}}):_vm._e(),_vm._v(" "),(_vm.params)?_vm._l((_vm.params),function(param,index){return _c('v-text-field',{key:index,attrs:{"label":param.name,"outline":"","background-color":"blue lighten-1"},model:{value:(_vm.inputParams[index]),callback:function ($$v) {_vm.$set(_vm.inputParams, index, $$v)},expression:"inputParams[index]"}})}):_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Gas Limit","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2aRy":
/***/ (function(module, exports) {

module.exports = ["가격","가끔","가난","가능","가득","가르침","가뭄","가방","가상","가슴","가운데","가을","가이드","가입","가장","가정","가족","가죽","각오","각자","간격","간부","간섭","간장","간접","간판","갈등","갈비","갈색","갈증","감각","감기","감소","감수성","감자","감정","갑자기","강남","강당","강도","강력히","강변","강북","강사","강수량","강아지","강원도","강의","강제","강조","같이","개구리","개나리","개방","개별","개선","개성","개인","객관적","거실","거액","거울","거짓","거품","걱정","건강","건물","건설","건조","건축","걸음","검사","검토","게시판","게임","겨울","견해","결과","결국","결론","결석","결승","결심","결정","결혼","경계","경고","경기","경력","경복궁","경비","경상도","경영","경우","경쟁","경제","경주","경찰","경치","경향","경험","계곡","계단","계란","계산","계속","계약","계절","계층","계획","고객","고구려","고궁","고급","고등학생","고무신","고민","고양이","고장","고전","고집","고춧가루","고통","고향","곡식","골목","골짜기","골프","공간","공개","공격","공군","공급","공기","공동","공무원","공부","공사","공식","공업","공연","공원","공장","공짜","공책","공통","공포","공항","공휴일","과목","과일","과장","과정","과학","관객","관계","관광","관념","관람","관련","관리","관습","관심","관점","관찰","광경","광고","광장","광주","괴로움","굉장히","교과서","교문","교복","교실","교양","교육","교장","교직","교통","교환","교훈","구경","구름","구멍","구별","구분","구석","구성","구속","구역","구입","구청","구체적","국가","국기","국내","국립","국물","국민","국수","국어","국왕","국적","국제","국회","군대","군사","군인","궁극적","권리","권위","권투","귀국","귀신","규정","규칙","균형","그날","그냥","그늘","그러나","그룹","그릇","그림","그제서야","그토록","극복","극히","근거","근교","근래","근로","근무","근본","근원","근육","근처","글씨","글자","금강산","금고","금년","금메달","금액","금연","금요일","금지","긍정적","기간","기관","기념","기능","기독교","기둥","기록","기름","기법","기본","기분","기쁨","기숙사","기술","기억","기업","기온","기운","기원","기적","기준","기침","기혼","기획","긴급","긴장","길이","김밥","김치","김포공항","깍두기","깜빡","깨달음","깨소금","껍질","꼭대기","꽃잎","나들이","나란히","나머지","나물","나침반","나흘","낙엽","난방","날개","날씨","날짜","남녀","남대문","남매","남산","남자","남편","남학생","낭비","낱말","내년","내용","내일","냄비","냄새","냇물","냉동","냉면","냉방","냉장고","넥타이","넷째","노동","노란색","노력","노인","녹음","녹차","녹화","논리","논문","논쟁","놀이","농구","농담","농민","농부","농업","농장","농촌","높이","눈동자","눈물","눈썹","뉴욕","느낌","늑대","능동적","능력","다방","다양성","다음","다이어트","다행","단계","단골","단독","단맛","단순","단어","단위","단점","단체","단추","단편","단풍","달걀","달러","달력","달리","닭고기","담당","담배","담요","담임","답변","답장","당근","당분간","당연히","당장","대규모","대낮","대단히","대답","대도시","대략","대량","대륙","대문","대부분","대신","대응","대장","대전","대접","대중","대책","대출","대충","대통령","대학","대한민국","대합실","대형","덩어리","데이트","도대체","도덕","도둑","도망","도서관","도심","도움","도입","도자기","도저히","도전","도중","도착","독감","독립","독서","독일","독창적","동화책","뒷모습","뒷산","딸아이","마누라","마늘","마당","마라톤","마련","마무리","마사지","마약","마요네즈","마을","마음","마이크","마중","마지막","마찬가지","마찰","마흔","막걸리","막내","막상","만남","만두","만세","만약","만일","만점","만족","만화","많이","말기","말씀","말투","맘대로","망원경","매년","매달","매력","매번","매스컴","매일","매장","맥주","먹이","먼저","먼지","멀리","메일","며느리","며칠","면담","멸치","명단","명령","명예","명의","명절","명칭","명함","모금","모니터","모델","모든","모범","모습","모양","모임","모조리","모집","모퉁이","목걸이","목록","목사","목소리","목숨","목적","목표","몰래","몸매","몸무게","몸살","몸속","몸짓","몸통","몹시","무관심","무궁화","무더위","무덤","무릎","무슨","무엇","무역","무용","무조건","무지개","무척","문구","문득","문법","문서","문제","문학","문화","물가","물건","물결","물고기","물론","물리학","물음","물질","물체","미국","미디어","미사일","미술","미역","미용실","미움","미인","미팅","미혼","민간","민족","민주","믿음","밀가루","밀리미터","밑바닥","바가지","바구니","바나나","바늘","바닥","바닷가","바람","바이러스","바탕","박물관","박사","박수","반대","반드시","반말","반발","반성","반응","반장","반죽","반지","반찬","받침","발가락","발걸음","발견","발달","발레","발목","발바닥","발생","발음","발자국","발전","발톱","발표","밤하늘","밥그릇","밥맛","밥상","밥솥","방금","방면","방문","방바닥","방법","방송","방식","방안","방울","방지","방학","방해","방향","배경","배꼽","배달","배드민턴","백두산","백색","백성","백인","백제","백화점","버릇","버섯","버튼","번개","번역","번지","번호","벌금","벌레","벌써","범위","범인","범죄","법률","법원","법적","법칙","베이징","벨트","변경","변동","변명","변신","변호사","변화","별도","별명","별일","병실","병아리","병원","보관","보너스","보라색","보람","보름","보상","보안","보자기","보장","보전","보존","보통","보편적","보험","복도","복사","복숭아","복습","볶음","본격적","본래","본부","본사","본성","본인","본질","볼펜","봉사","봉지","봉투","부근","부끄러움","부담","부동산","부문","부분","부산","부상","부엌","부인","부작용","부장","부정","부족","부지런히","부친","부탁","부품","부회장","북부","북한","분노","분량","분리","분명","분석","분야","분위기","분필","분홍색","불고기","불과","불교","불꽃","불만","불법","불빛","불안","불이익","불행","브랜드","비극","비난","비닐","비둘기","비디오","비로소","비만","비명","비밀","비바람","비빔밥","비상","비용","비율","비중","비타민","비판","빌딩","빗물","빗방울","빗줄기","빛깔","빨간색","빨래","빨리","사건","사계절","사나이","사냥","사람","사랑","사립","사모님","사물","사방","사상","사생활","사설","사슴","사실","사업","사용","사월","사장","사전","사진","사촌","사춘기","사탕","사투리","사흘","산길","산부인과","산업","산책","살림","살인","살짝","삼계탕","삼국","삼십","삼월","삼촌","상관","상금","상대","상류","상반기","상상","상식","상업","상인","상자","상점","상처","상추","상태","상표","상품","상황","새벽","색깔","색연필","생각","생명","생물","생방송","생산","생선","생신","생일","생활","서랍","서른","서명","서민","서비스","서양","서울","서적","서점","서쪽","서클","석사","석유","선거","선물","선배","선생","선수","선원","선장","선전","선택","선풍기","설거지","설날","설렁탕","설명","설문","설사","설악산","설치","설탕","섭씨","성공","성당","성명","성별","성인","성장","성적","성질","성함","세금","세미나","세상","세월","세종대왕","세탁","센터","센티미터","셋째","소규모","소극적","소금","소나기","소년","소득","소망","소문","소설","소속","소아과","소용","소원","소음","소중히","소지품","소질","소풍","소형","속담","속도","속옷","손가락","손길","손녀","손님","손등","손목","손뼉","손실","손질","손톱","손해","솔직히","솜씨","송아지","송이","송편","쇠고기","쇼핑","수건","수년","수단","수돗물","수동적","수면","수명","수박","수상","수석","수술","수시로","수업","수염","수영","수입","수준","수집","수출","수컷","수필","수학","수험생","수화기","숙녀","숙소","숙제","순간","순서","순수","순식간","순위","숟가락","술병","술집","숫자","스님","스물","스스로","스승","스웨터","스위치","스케이트","스튜디오","스트레스","스포츠","슬쩍","슬픔","습관","습기","승객","승리","승부","승용차","승진","시각","시간","시골","시금치","시나리오","시댁","시리즈","시멘트","시민","시부모","시선","시설","시스템","시아버지","시어머니","시월","시인","시일","시작","시장","시절","시점","시중","시즌","시집","시청","시합","시험","식구","식기","식당","식량","식료품","식물","식빵","식사","식생활","식초","식탁","식품","신고","신규","신념","신문","신발","신비","신사","신세","신용","신제품","신청","신체","신화","실감","실내","실력","실례","실망","실수","실습","실시","실장","실정","실질적","실천","실체","실컷","실태","실패","실험","실현","심리","심부름","심사","심장","심정","심판","쌍둥이","씨름","씨앗","아가씨","아나운서","아드님","아들","아쉬움","아스팔트","아시아","아울러","아저씨","아줌마","아직","아침","아파트","아프리카","아픔","아홉","아흔","악기","악몽","악수","안개","안경","안과","안내","안녕","안동","안방","안부","안주","알루미늄","알코올","암시","암컷","압력","앞날","앞문","애인","애정","액수","앨범","야간","야단","야옹","약간","약국","약속","약수","약점","약품","약혼녀","양념","양력","양말","양배추","양주","양파","어둠","어려움","어른","어젯밤","어쨌든","어쩌다가","어쩐지","언니","언덕","언론","언어","얼굴","얼른","얼음","얼핏","엄마","업무","업종","업체","엉덩이","엉망","엉터리","엊그제","에너지","에어컨","엔진","여건","여고생","여관","여군","여권","여대생","여덟","여동생","여든","여론","여름","여섯","여성","여왕","여인","여전히","여직원","여학생","여행","역사","역시","역할","연결","연구","연극","연기","연락","연설","연세","연속","연습","연애","연예인","연인","연장","연주","연출","연필","연합","연휴","열기","열매","열쇠","열심히","열정","열차","열흘","염려","엽서","영국","영남","영상","영양","영역","영웅","영원히","영하","영향","영혼","영화","옆구리","옆방","옆집","예감","예금","예방","예산","예상","예선","예술","예습","예식장","예약","예전","예절","예정","예컨대","옛날","오늘","오락","오랫동안","오렌지","오로지","오른발","오븐","오십","오염","오월","오전","오직","오징어","오페라","오피스텔","오히려","옥상","옥수수","온갖","온라인","온몸","온종일","온통","올가을","올림픽","올해","옷차림","와이셔츠","와인","완성","완전","왕비","왕자","왜냐하면","왠지","외갓집","외국","외로움","외삼촌","외출","외침","외할머니","왼발","왼손","왼쪽","요금","요일","요즘","요청","용기","용서","용어","우산","우선","우승","우연히","우정","우체국","우편","운동","운명","운반","운전","운행","울산","울음","움직임","웃어른","웃음","워낙","원고","원래","원서","원숭이","원인","원장","원피스","월급","월드컵","월세","월요일","웨이터","위반","위법","위성","위원","위험","위협","윗사람","유난히","유럽","유명","유물","유산","유적","유치원","유학","유행","유형","육군","육상","육십","육체","은행","음력","음료","음반","음성","음식","음악","음주","의견","의논","의문","의복","의식","의심","의외로","의욕","의원","의학","이것","이곳","이념","이놈","이달","이대로","이동","이렇게","이력서","이론적","이름","이민","이발소","이별","이불","이빨","이상","이성","이슬","이야기","이용","이웃","이월","이윽고","이익","이전","이중","이튿날","이틀","이혼","인간","인격","인공","인구","인근","인기","인도","인류","인물","인생","인쇄","인연","인원","인재","인종","인천","인체","인터넷","인하","인형","일곱","일기","일단","일대","일등","일반","일본","일부","일상","일생","일손","일요일","일월","일정","일종","일주일","일찍","일체","일치","일행","일회용","임금","임무","입대","입력","입맛","입사","입술","입시","입원","입장","입학","자가용","자격","자극","자동","자랑","자부심","자식","자신","자연","자원","자율","자전거","자정","자존심","자판","작가","작년","작성","작업","작용","작은딸","작품","잔디","잔뜩","잔치","잘못","잠깐","잠수함","잠시","잠옷","잠자리","잡지","장관","장군","장기간","장래","장례","장르","장마","장면","장모","장미","장비","장사","장소","장식","장애인","장인","장점","장차","장학금","재능","재빨리","재산","재생","재작년","재정","재채기","재판","재학","재활용","저것","저고리","저곳","저녁","저런","저렇게","저번","저울","저절로","저축","적극","적당히","적성","적용","적응","전개","전공","전기","전달","전라도","전망","전문","전반","전부","전세","전시","전용","전자","전쟁","전주","전철","전체","전통","전혀","전후","절대","절망","절반","절약","절차","점검","점수","점심","점원","점점","점차","접근","접시","접촉","젓가락","정거장","정도","정류장","정리","정말","정면","정문","정반대","정보","정부","정비","정상","정성","정오","정원","정장","정지","정치","정확히","제공","제과점","제대로","제목","제발","제법","제삿날","제안","제일","제작","제주도","제출","제품","제한","조각","조건","조금","조깅","조명","조미료","조상","조선","조용히","조절","조정","조직","존댓말","존재","졸업","졸음","종교","종로","종류","종소리","종업원","종종","종합","좌석","죄인","주관적","주름","주말","주머니","주먹","주문","주민","주방","주변","주식","주인","주일","주장","주전자","주택","준비","줄거리","줄기","줄무늬","중간","중계방송","중국","중년","중단","중독","중반","중부","중세","중소기업","중순","중앙","중요","중학교","즉석","즉시","즐거움","증가","증거","증권","증상","증세","지각","지갑","지경","지극히","지금","지급","지능","지름길","지리산","지방","지붕","지식","지역","지우개","지원","지적","지점","지진","지출","직선","직업","직원","직장","진급","진동","진로","진료","진리","진짜","진찰","진출","진통","진행","질문","질병","질서","짐작","집단","집안","집중","짜증","찌꺼기","차남","차라리","차량","차림","차별","차선","차츰","착각","찬물","찬성","참가","참기름","참새","참석","참여","참외","참조","찻잔","창가","창고","창구","창문","창밖","창작","창조","채널","채점","책가방","책방","책상","책임","챔피언","처벌","처음","천국","천둥","천장","천재","천천히","철도","철저히","철학","첫날","첫째","청년","청바지","청소","청춘","체계","체력","체온","체육","체중","체험","초등학생","초반","초밥","초상화","초순","초여름","초원","초저녁","초점","초청","초콜릿","촛불","총각","총리","총장","촬영","최근","최상","최선","최신","최악","최종","추석","추억","추진","추천","추측","축구","축소","축제","축하","출근","출발","출산","출신","출연","출입","출장","출판","충격","충고","충돌","충분히","충청도","취업","취직","취향","치약","친구","친척","칠십","칠월","칠판","침대","침묵","침실","칫솔","칭찬","카메라","카운터","칼국수","캐릭터","캠퍼스","캠페인","커튼","컨디션","컬러","컴퓨터","코끼리","코미디","콘서트","콜라","콤플렉스","콩나물","쾌감","쿠데타","크림","큰길","큰딸","큰소리","큰아들","큰어머니","큰일","큰절","클래식","클럽","킬로","타입","타자기","탁구","탁자","탄생","태권도","태양","태풍","택시","탤런트","터널","터미널","테니스","테스트","테이블","텔레비전","토론","토마토","토요일","통계","통과","통로","통신","통역","통일","통장","통제","통증","통합","통화","퇴근","퇴원","퇴직금","튀김","트럭","특급","특별","특성","특수","특징","특히","튼튼히","티셔츠","파란색","파일","파출소","판결","판단","판매","판사","팔십","팔월","팝송","패션","팩스","팩시밀리","팬티","퍼센트","페인트","편견","편의","편지","편히","평가","평균","평생","평소","평양","평일","평화","포스터","포인트","포장","포함","표면","표정","표준","표현","품목","품질","풍경","풍속","풍습","프랑스","프린터","플라스틱","피곤","피망","피아노","필름","필수","필요","필자","필통","핑계","하느님","하늘","하드웨어","하룻밤","하반기","하숙집","하순","하여튼","하지만","하천","하품","하필","학과","학교","학급","학기","학년","학력","학번","학부모","학비","학생","학술","학습","학용품","학원","학위","학자","학점","한계","한글","한꺼번에","한낮","한눈","한동안","한때","한라산","한마디","한문","한번","한복","한식","한여름","한쪽","할머니","할아버지","할인","함께","함부로","합격","합리적","항공","항구","항상","항의","해결","해군","해답","해당","해물","해석","해설","해수욕장","해안","핵심","핸드백","햄버거","햇볕","햇살","행동","행복","행사","행운","행위","향기","향상","향수","허락","허용","헬기","현관","현금","현대","현상","현실","현장","현재","현지","혈액","협력","형부","형사","형수","형식","형제","형태","형편","혜택","호기심","호남","호랑이","호박","호텔","호흡","혹시","홀로","홈페이지","홍보","홍수","홍차","화면","화분","화살","화요일","화장","화학","확보","확인","확장","확정","환갑","환경","환영","환율","환자","활기","활동","활발히","활용","활짝","회견","회관","회복","회색","회원","회장","회전","횟수","횡단보도","효율적","후반","후춧가루","훈련","훨씬","휴식","휴일","흉내","흐름","흑백","흑인","흔적","흔히","흥미","흥분","희곡","희망","희생","흰색","힘껏"]

/***/ }),

/***/ "2wuY":
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var tokenContractAddress = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "4520d32ad7c6d863323a597d118cfdd6e28c3f29" : "63738a07daf0514f2d242947117a8d748f85340b";

var contractAddress = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "f5bd6aace695cfaa43a7575b5b139675ab368cde" : "723200bb39c42798e43183b0548ecd71afe61b4e";

var abiJson = JSON.parse('[{"constant": true, "inputs": [{"name": "answeredQuestionsIds", "type": "bytes10[5]"}, {"name": "answeredQuestionsAnswers", "type": "uint8[5]"} ], "name": "getResults", "outputs": [{"name": "results", "type": "bool[5]"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "correctAnswerHintPrize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "prepareQuestions", "outputs": [{"name": "_preparedQuestionsId", "type": "bytes10[5]"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_questionId", "type": "bytes10"} ], "name": "getHint", "outputs": [{"name": "hint", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "answeredQuestionsIds", "type": "bytes10[5]"}, {"name": "answeredQuestionsAnswers", "type": "uint8[5]"}, {"name": "answeredQuestionsHints", "type": "bool[5]"} ], "name": "processAnswers", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "correctAnswerPrize", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "_userAddress", "type": "address"}, {"name": "_questionIndex", "type": "uint256"} ], "name": "getUserQuestion", "outputs": [{"name": "questionId", "type": "bytes10"}, {"name": "question", "type": "string"}, {"name": "option1", "type": "string"}, {"name": "option2", "type": "string"}, {"name": "option3", "type": "string"}, {"name": "option4", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "wrongAnswerFee", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"} ]');

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      txReceiptDialog: false,
      confirmSendDialog: false,
      userTokenBalance: 0,
      loading: false,
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
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
      userHints: [false, false, false, false, false],
      userAnswers: [0, 0, 0, 0, 0],
      userQuestionIds: ['0x', '0x', '0x', '0x', '0x'],
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
    };
  },

  methods: {
    prepareQuestions: function prepareQuestions() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(parseInt(_this.userTokenBalance) >= parseInt(_this.minimumTokenAmount))) {
                  _context.next = 30;
                  break;
                }

                _context.prev = 1;
                encodedData = _this.encodeContractSendFunction(abiJson, 'prepareQuestions', []);


                _this.rawTx = 'loading...';
                _this.confirmSendDialog = true;

                _context.prev = 5;
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 8:
                _this.rawTx = _context.sent;
                _context.next = 18;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](5);

                _this.$root.log.error('send_to_generate_tx_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);
                _this.confirmSendDialog = false;
                _this.currentStep = 0;
                return _context.abrupt('return', false);

              case 18:
                _this.canSend = true;
                _context.next = 28;
                break;

              case 21:
                _context.prev = 21;
                _context.t1 = _context['catch'](1);

                _this.$root.error('Params error');
                _this.$root.log.error('send_to_contract_encode_abi_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                _this.confirmSendDialog = false;
                _this.currentStep = 0;
                return _context.abrupt('return', false);

              case 28:
                _context.next = 31;
                break;

              case 30:
                alert('You do not have enough PHO to cover wrong questions. You need at least ' + _this.minimumTokenAmount + ' PHO.');

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 21], [5, 11]]);
      }))();
    },
    processAnswers: function processAnswers() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(parseInt(_this2.userTokenBalance) >= parseInt(_this2.minimumTokenAmount))) {
                  _context2.next = 30;
                  break;
                }

                _context2.prev = 1;
                encodedData = _this2.encodeContractSendFunction(abiJson, 'processAnswers', [_this2.userQuestionIds, _this2.userAnswers, _this2.userHints]);


                _this2.rawTx = 'loading...';
                _this2.confirmSendDialog = true;

                _context2.prev = 5;
                _context2.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this2.gasLimit, _this2.gasPrice, _this2.fee);

              case 8:
                _this2.rawTx = _context2.sent;
                _context2.next = 18;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](5);

                _this2.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this2.confirmSendDialog = false;
                _this2.currentStep = 0;
                return _context2.abrupt('return', false);

              case 18:
                _this2.canSend = true;
                _context2.next = 28;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t1 = _context2['catch'](1);

                _this2.$root.error('Params error');
                _this2.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this2.confirmSendDialog = false;
                _this2.currentStep = 0;
                return _context2.abrupt('return', false);

              case 28:
                _context2.next = 31;
                break;

              case 30:
                alert('You do not have enough PHO to cover wrong questions. You need at least ' + _this2.minimumTokenAmount + ' PHO.');

              case 31:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 21], [5, 11]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var txId, txViewUrl, apiURL, interval;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.sending = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this3.rawTx);

              case 4:
                txId = _context3.sent;

                _this3.confirmSendDialog = false;
                _this3.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this3.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);

                _this3.txReceiptDialog = true;
                _this3.awaitingTx = true;

                apiURL = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';
                interval = setInterval(function () {

                  __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(apiURL + txId).then(function (result) {
                    console.log('Checking Tx...');

                    if (result.data.confirmations > 0) {
                      clearInterval(interval);
                      _this3.awaitingTx = false;

                      if (result.data.receipt[0].excepted != 'None') {
                        _this3.txError = true;
                        _this3.currentStep = 0;
                      } else {
                        _this3.txReceiptDialog = false;
                        switch (_this3.currentStep) {
                          case -1:
                            _this3.getUserQuestion(0);
                            break;
                          case 5:
                            _this3.getResults();
                            break;
                        }
                        _this3.currentStep++;
                      }
                    }
                  }).catch(console.error);
                }, 15 * 1000);
                _context3.next = 20;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3['catch'](1);

                alert(_context3.t0.message || _context3.t0);
                _this3.$root.log.error('send_to_contract_post_raw_tx_error', _context3.t0.response || _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                _this3.confirmSendDialog = false;

              case 20:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 15]]);
      }))();
    },
    getData: function getData() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var decodedResult, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this4.loading = true;

                _context4.prev = 1;
                _context4.next = 4;
                return _this4.callContractFunction(contractAddress, abiJson, 'correctAnswerPrize', []);

              case 4:
                decodedResult = _context4.sent;


                _this4.correctAnswerPrize = parseInt(decodedResult[0]) / 100000000;

                // Correct answer with hint prize
                _context4.next = 8;
                return _this4.callContractFunction(contractAddress, abiJson, 'correctAnswerHintPrize', []);

              case 8:
                decodedResult = _context4.sent;


                _this4.correctAnswerHintPrize = parseInt(decodedResult[0]) / 100000000;

                // Wrong answer fee
                _context4.next = 12;
                return _this4.callContractFunction(contractAddress, abiJson, 'wrongAnswerFee', []);

              case 12:
                decodedResult = _context4.sent;


                _this4.wrongAnswerFee = parseInt(decodedResult[0]) / 100000000;
                _this4.minimumTokenAmount = _this4.wrongAnswerFee * 5;

                // User token balance
                for (i = 0; i < _this4.wallet.info.hrc20.length; i++) {
                  if (_this4.wallet.info.hrc20[i].contract.contract_address == tokenContractAddress) {
                    _this4.userTokenBalance = parseInt(_this4.wallet.info.hrc20[i].amount) / 100000000;
                  }
                }

                _context4.next = 23;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4['catch'](1);

                _this4.loading = false;
                _this4.$root.log.error('call_contract_call_contract_error', _context4.t0.stack || _context4.t0.toString() || _context4.t0);
                alert(_context4.t0.message || _context4.t0);

              case 23:

                _this4.loading = false;

              case 24:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[1, 18]]);
      }))();
    },
    getUserQuestion: function getUserQuestion(questionIndex) {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var userHexAddress, decodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.loading = true;

                _context5.prev = 1;
                userHexAddress = '0x' + __WEBPACK_IMPORTED_MODULE_7_bs58___default.a.decode(_this5.wallet.info['address']).toString('hex').substr(2, 40);

                // Correct answer prize

                _context5.next = 5;
                return _this5.callContractFunction(contractAddress, abiJson, 'getUserQuestion', [userHexAddress, questionIndex]);

              case 5:
                decodedResult = _context5.sent;


                if (decodedResult[1].toString() != '') {

                  _this5.questionId = decodedResult[0].toString();
                  _this5.question = decodedResult[1].toString();
                  _this5.option1 = decodedResult[2].toString();
                  _this5.option2 = decodedResult[3].toString();
                  _this5.option3 = decodedResult[4].toString();
                  _this5.option4 = decodedResult[5].toString();

                  _this5.userQuestionIds[_this5.currentStep] = _this5.questionId;
                } else {

                  alert('Error when fetching question. Please start over.');
                  _this5.currentStep = -1;
                }

                _context5.next = 14;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5['catch'](1);

                _this5.loading = false;
                _this5.$root.log.error('call_contract_call_contract_error', _context5.t0.stack || _context5.t0.toString() || _context5.t0);
                alert(_context5.t0.message || _context5.t0);

              case 14:

                _this5.loading = false;

              case 15:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[1, 9]]);
      }))();
    },
    getHint: function getHint() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var decodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.loading = true;

                _context6.prev = 1;
                _context6.next = 4;
                return _this6.callContractFunction(contractAddress, abiJson, 'getHint', [_this6.questionId]);

              case 4:
                decodedResult = _context6.sent;


                _this6.userHints[_this6.currentStep] = true;
                _this6.hint = decodedResult[0].toString();
                _this6.hintDialog = true;

                _context6.next = 15;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6['catch'](1);

                _this6.loading = false;
                _this6.$root.log.error('call_contract_call_contract_error', _context6.t0.stack || _context6.t0.toString() || _context6.t0);
                alert(_context6.t0.message || _context6.t0);

              case 15:

                _this6.loading = false;

              case 16:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6, [[1, 10]]);
      }))();
    },
    confirmAnswer: function confirmAnswer() {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this7.loading = true;

                try {

                  _this7.userAnswers[_this7.currentStep] = _this7.currentAnswer;
                  _this7.currentAnswer = 0;
                  _this7.currentStep++;

                  if (_this7.currentStep <= 4) {
                    // Get next question
                    _this7.getUserQuestion(_this7.currentStep);
                  }
                } catch (e) {
                  _this7.loading = false;
                  _this7.$root.log.error('call_contract_call_contract_error', e.stack || e.toString() || e);
                  alert(e.message || e);
                }

                _this7.loading = false;

              case 3:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    getResults: function getResults() {
      var _this8 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var decodedResult, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this8.loading = true;

                _context8.prev = 1;
                _context8.next = 4;
                return _this8.callContractFunction(contractAddress, abiJson, 'getResults', [_this8.userQuestionIds, _this8.userAnswers]);

              case 4:
                decodedResult = _context8.sent;


                _this8.userResults = decodedResult[0];

                for (i = 0; i <= 4; i++) {
                  if (_this8.userResults[i]) {
                    if (_this8.userHints[i]) {
                      _this8.totalEarnedTokens += 1;
                    } else {
                      _this8.totalEarnedTokens += 2;
                    }
                  } else {
                    _this8.totalEarnedTokens -= 1;
                  }
                }

                _context8.next = 14;
                break;

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8['catch'](1);

                _this8.loading = false;
                _this8.$root.log.error('call_contract_call_contract_error', _context8.t0.stack || _context8.t0.toString() || _context8.t0);
                alert(_context8.t0.message || _context8.t0);

              case 14:

                _this8.loading = false;

              case 15:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this8, [[1, 9]]);
      }))();
    },
    restart: function restart() {
      this.currentStep = -1;
      this.questionId = '';
      this.question = '';
      this.currentAnswer = 0;
      this.option1 = '';
      this.option2 = '';
      this.option3 = '';
      this.option4 = '';
      this.hint = '';
      this.userHints = [false, false, false, false, false];
      this.userAnswers = [0, 0, 0, 0, 0];
      this.userQuestionIds = ['0x', '0x', '0x', '0x', '0x'];
      this.userResults = [];
      this.totalEarnedTokens = 0;
      this.rawTx = 'loading...';
    },
    findIndexByName: function findIndexByName(abiJson, name) {
      return abiJson.findIndex(function (item) {
        return item.name === name;
      });
    },
    callContractFunction: function callContractFunction(contractAddress, abiJson, functionName, params) {
      var _this9 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee9() {
        var encodedData, encodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[_this9.findIndexByName(abiJson, functionName)], params).substr(2);
                _context9.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(contractAddress, encodedData);

              case 3:
                encodedResult = _context9.sent;

                encodedResult = '0x' + encodedResult;

                return _context9.abrupt('return', __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.decodeMethod(abiJson[_this9.findIndexByName(abiJson, functionName)], encodedResult));

              case 6:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, _this9);
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

  },

  mounted: function mounted() {
    this.getData();
  }
});

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

/***/ "6HaU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("list")]),_vm._v("\n        "+_vm._s(_vm.$t('view_tx.title'))+"\n    ")],1),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":""},on:{"click":_vm.refreshWallet},slot:"activator"},[_c('v-icon',{attrs:{"color":"blue accent-4"}},[_vm._v("\n          refresh\n        ")])],1),_vm._v(" "),_c('span',[_vm._v("Refresh")])],1)],1),_vm._v(" "),_c('v-card-text',[_c('p',[_vm._v(_vm._s(_vm.$t('view_tx.recent')))]),_vm._v(" "),_vm._l((_vm.txList.txs),function(tx,id){return _c('div',{key:id},[_c('v-layout',{staticStyle:{"border-bottom":"1px dashed"}},[_c('v-flex',{attrs:{"xs10":""}},[_vm._v("\n          "+_vm._s(_vm.$t('view_tx.tx'))+"\n          "),_c('v-btn',{attrs:{"small":"","light":"","href":_vm.node.getTxExplorerUrl(tx.txid),"target":"_blank"}},[_vm._v("\n            "+_vm._s(tx.txid)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_vm._v("\n          "+_vm._s(_vm.$t('view_tx.mined_at'))+_vm._s(new Date(tx.time * 1000).toString())+"\n        ")])],1),_vm._v(" "),_c('v-layout',{staticStyle:{"border-bottom":"1px dashed"}},[_c('v-flex',{attrs:{"xs3":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : '',staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[_vm._v("\n            "+_vm._s(vtx.addr)+"\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":"","text-xs-right":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : ''},[_vm._v("\n            "+_vm._s(vtx.value)+"\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},_vm._l((tx.vin),function(vtx,vid){return _c('p',{key:vid,class:vtx.addr === _vm.wallet.info.address ? 'red--text' : ''},[_vm._v("\n             HTML\n          ")])})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},[_c('v-icon',[_vm._v("\n            arrow_right_alt\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : '',staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              "+_vm._s(vtx.scriptPubKey.addresses.join(' '))+"\n            ")]:_vm._e()],2)})),_vm._v(" "),_c('v-flex',{attrs:{"xs2":"","text-xs-right":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : ''},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              "+_vm._s(vtx.value)+"\n            ")]:_vm._e()],2)})),_vm._v(" "),_c('v-flex',{attrs:{"xs1":""}},_vm._l((tx.vout),function(vtx,vid){return _c('p',{key:vid,class:vtx.scriptPubKey.addresses && vtx.scriptPubKey.addresses[0] === _vm.wallet.info.address ? 'green--text' : ''},[(vtx.scriptPubKey.addresses)?[_vm._v("\n              HTML\n            ")]:_vm._e()],2)}))],1),_vm._v(" "),_c('v-layout',{staticStyle:{"border-bottom":"1px solid"}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.total_in'))+_vm._s(tx.valueIn)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.fee'))+_vm._s(tx.fees)+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-chip',{staticClass:"white--text",attrs:{"label":"","outline":""}},[_vm._v("\n            "+_vm._s(_vm.$t('view_tx.total_out'))+_vm._s(tx.valueOut)+"\n          ")])],1)],1)],1)})],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
//
//
//
//
//
//
//
//
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
        var txId, txViewUrl;
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
                _context2.next = 17;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2['catch'](1);

                alert(_context2.t0.message || _context2.t0);
                _this2.$root.log.error('send_to_contract_post_raw_tx_error', _context2.t0.response || _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                _this2.confirmSendDialog = false;

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 12]]);
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

/***/ "7KTf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("cloud_download")]),_vm._v("\n        "+_vm._s(_vm.$t('dump_as_key_file.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('center',[_c('span',{staticClass:"subheading red--text"},[_c('b',[_vm._v(_vm._s(_vm.$t('dump_as_key_file.warning')))])])]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),(_vm.fileStr)?_c('file-creator',{attrs:{"color":"info","href":_vm.fileStr}}):_vm._e(),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired,"notEmpty":"true","title":"dump_as_key_file.password_title"},on:{"password":_vm.inputed}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22eb65e5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SafeSend_vue__ = __webpack_require__("Gqhm");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22eb65e5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SafeSend_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


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

/***/ "97vC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("cloud_upload")]),_vm._v("\n        "+_vm._s(_vm.$t('restore_key_file.title'))+"\n      ")],1),_vm._v(" "),_c('center',[_c('span',{staticClass:"subheading grey--text"},[_vm._v("Please upload your key file")])])],1)]),_vm._v(" "),_c('v-card-text',[_c('file-reader',{staticStyle:{"color":"white"},attrs:{"color":"blue"},on:{"upload":_vm.parseKeyFile}}),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired,"notEmpty":"true","title":"restore_key_file.password_title"},on:{"password":_vm.inputed}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d034fac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RequestPayment_vue__ = __webpack_require__("C1PJ");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d034fac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RequestPayment_vue__["a" /* default */],
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

/***/ "9Z0V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Send_vue__ = __webpack_require__("L5P4");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d0b69ea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Send_vue__ = __webpack_require__("Uv+A");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d0b69ea_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Send_vue__["a" /* default */],
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

/***/ "A/zS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("sms")]),_vm._v("\n        "+_vm._s(_vm.$t('restore.title'))+"\n      ")],1),_vm._v(" "),_c('center',[_c('span',{staticClass:"subheading grey--text"},[_vm._v(_vm._s(_vm.$t('mnemonic.input_words')))])])],1)]),_vm._v(" "),_c('v-card-text',[_c('mnemonic',{on:{"mnemonic":_vm.restore}})],1),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired},on:{"password":_vm.setPassword}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "AL6D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("info")]),_vm._v("\n          "+_vm._s(_vm.$t('view.title'))+"\n      ")],1),_vm._v(" "),_c('v-tooltip',{attrs:{"bottom":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":""},on:{"click":_vm.refreshWallet},slot:"activator"},[_c('v-icon',{attrs:{"color":"blue accent-4"}},[_vm._v("\n            refresh\n          ")])],1),_vm._v(" "),_c('span',[_vm._v("Refresh")])],1)],1),_vm._v(" "),_c('v-card-text',[_vm._l((_vm.infoLabel),function(item,i){return _c('v-layout',{key:i},[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            "+_vm._s(_vm.$t('common.info.' + item.label))+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"outline":"","readonly":"","single-line":""},model:{value:(_vm.info[item.name]),callback:function ($$v) {_vm.$set(_vm.info, item.name, $$v)},expression:"info[item.name]"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[(item.copy)?_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.info[item.name]),expression:"info[item.name]",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n            "+_vm._s(_vm.$t('common.copy'))+"\n          ")]):_vm._e()],1)],1)}),_vm._v(" "),(_vm.privKey !== null)?_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            "+_vm._s(_vm.$t('common.info.priv_key'))+"\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"outline":"","readonly":"","single-line":"","type":_vm.showPriv ? 'text' : 'password',"append-icon":_vm.showPriv ? 'visibility_off' : 'visibility'},on:{"click:append":function($event){_vm.showPriv = !_vm.showPriv}},model:{value:(_vm.privKey),callback:function ($$v) {_vm.privKey=$$v},expression:"privKey"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPriv),expression:"showPriv"},{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.privKey),expression:"privKey",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n            "+_vm._s(_vm.$t('common.copy'))+"\n          ")])],1)],1):_vm._e(),_vm._v(" "),(_vm.wallet.info.hrc20.length > 0)?_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v("\n            HRC20 Tokens\n          ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-card',{staticStyle:{"border-bottom":"2px solid #000","padding":"5px 10px"},attrs:{"flat":"","tile":"","dark":"","color":"blue-grey darken-3"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"caption"},[_c('b',[_vm._v("NAME")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"caption"},[_c('b',[_vm._v("BALANCE")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('span',{staticClass:"caption"},[_c('b',[_vm._v("CONTRACT ADDRESS")])])])],1)],1),_vm._v(" "),_vm._l((_vm.wallet.info.hrc20),function(token,i){return _c('v-card',{key:i,staticStyle:{"border-bottom":"2px solid #000","padding":"15px 10px"},attrs:{"flat":"","tile":"","dark":"","color":'light-blue darken-'+(i%2+3)}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":""}},[_vm._v(_vm._s(token.contract.name))]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_vm._v(_vm._s(token.amount / Math.pow(10, token.contract.decimals))+" "+_vm._s(token.contract.symbol))]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('span',{staticClass:"caption"},[_vm._v(_vm._s(token.contract.contract_address))])])],1)],1)})],2)],1):_vm._e()],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "AWyr":
/***/ (function(module, exports) {

module.exports = ["abaisser","abandon","abdiquer","abeille","abolir","aborder","aboutir","aboyer","abrasif","abreuver","abriter","abroger","abrupt","absence","absolu","absurde","abusif","abyssal","académie","acajou","acarien","accabler","accepter","acclamer","accolade","accroche","accuser","acerbe","achat","acheter","aciduler","acier","acompte","acquérir","acronyme","acteur","actif","actuel","adepte","adéquat","adhésif","adjectif","adjuger","admettre","admirer","adopter","adorer","adoucir","adresse","adroit","adulte","adverbe","aérer","aéronef","affaire","affecter","affiche","affreux","affubler","agacer","agencer","agile","agiter","agrafer","agréable","agrume","aider","aiguille","ailier","aimable","aisance","ajouter","ajuster","alarmer","alchimie","alerte","algèbre","algue","aliéner","aliment","alléger","alliage","allouer","allumer","alourdir","alpaga","altesse","alvéole","amateur","ambigu","ambre","aménager","amertume","amidon","amiral","amorcer","amour","amovible","amphibie","ampleur","amusant","analyse","anaphore","anarchie","anatomie","ancien","anéantir","angle","angoisse","anguleux","animal","annexer","annonce","annuel","anodin","anomalie","anonyme","anormal","antenne","antidote","anxieux","apaiser","apéritif","aplanir","apologie","appareil","appeler","apporter","appuyer","aquarium","aqueduc","arbitre","arbuste","ardeur","ardoise","argent","arlequin","armature","armement","armoire","armure","arpenter","arracher","arriver","arroser","arsenic","artériel","article","aspect","asphalte","aspirer","assaut","asservir","assiette","associer","assurer","asticot","astre","astuce","atelier","atome","atrium","atroce","attaque","attentif","attirer","attraper","aubaine","auberge","audace","audible","augurer","aurore","automne","autruche","avaler","avancer","avarice","avenir","averse","aveugle","aviateur","avide","avion","aviser","avoine","avouer","avril","axial","axiome","badge","bafouer","bagage","baguette","baignade","balancer","balcon","baleine","balisage","bambin","bancaire","bandage","banlieue","bannière","banquier","barbier","baril","baron","barque","barrage","bassin","bastion","bataille","bateau","batterie","baudrier","bavarder","belette","bélier","belote","bénéfice","berceau","berger","berline","bermuda","besace","besogne","bétail","beurre","biberon","bicycle","bidule","bijou","bilan","bilingue","billard","binaire","biologie","biopsie","biotype","biscuit","bison","bistouri","bitume","bizarre","blafard","blague","blanchir","blessant","blinder","blond","bloquer","blouson","bobard","bobine","boire","boiser","bolide","bonbon","bondir","bonheur","bonifier","bonus","bordure","borne","botte","boucle","boueux","bougie","boulon","bouquin","bourse","boussole","boutique","boxeur","branche","brasier","brave","brebis","brèche","breuvage","bricoler","brigade","brillant","brioche","brique","brochure","broder","bronzer","brousse","broyeur","brume","brusque","brutal","bruyant","buffle","buisson","bulletin","bureau","burin","bustier","butiner","butoir","buvable","buvette","cabanon","cabine","cachette","cadeau","cadre","caféine","caillou","caisson","calculer","calepin","calibre","calmer","calomnie","calvaire","camarade","caméra","camion","campagne","canal","caneton","canon","cantine","canular","capable","caporal","caprice","capsule","capter","capuche","carabine","carbone","caresser","caribou","carnage","carotte","carreau","carton","cascade","casier","casque","cassure","causer","caution","cavalier","caverne","caviar","cédille","ceinture","céleste","cellule","cendrier","censurer","central","cercle","cérébral","cerise","cerner","cerveau","cesser","chagrin","chaise","chaleur","chambre","chance","chapitre","charbon","chasseur","chaton","chausson","chavirer","chemise","chenille","chéquier","chercher","cheval","chien","chiffre","chignon","chimère","chiot","chlorure","chocolat","choisir","chose","chouette","chrome","chute","cigare","cigogne","cimenter","cinéma","cintrer","circuler","cirer","cirque","citerne","citoyen","citron","civil","clairon","clameur","claquer","classe","clavier","client","cligner","climat","clivage","cloche","clonage","cloporte","cobalt","cobra","cocasse","cocotier","coder","codifier","coffre","cogner","cohésion","coiffer","coincer","colère","colibri","colline","colmater","colonel","combat","comédie","commande","compact","concert","conduire","confier","congeler","connoter","consonne","contact","convexe","copain","copie","corail","corbeau","cordage","corniche","corpus","correct","cortège","cosmique","costume","coton","coude","coupure","courage","couteau","couvrir","coyote","crabe","crainte","cravate","crayon","créature","créditer","crémeux","creuser","crevette","cribler","crier","cristal","critère","croire","croquer","crotale","crucial","cruel","crypter","cubique","cueillir","cuillère","cuisine","cuivre","culminer","cultiver","cumuler","cupide","curatif","curseur","cyanure","cycle","cylindre","cynique","daigner","damier","danger","danseur","dauphin","débattre","débiter","déborder","débrider","débutant","décaler","décembre","déchirer","décider","déclarer","décorer","décrire","décupler","dédale","déductif","déesse","défensif","défiler","défrayer","dégager","dégivrer","déglutir","dégrafer","déjeuner","délice","déloger","demander","demeurer","démolir","dénicher","dénouer","dentelle","dénuder","départ","dépenser","déphaser","déplacer","déposer","déranger","dérober","désastre","descente","désert","désigner","désobéir","dessiner","destrier","détacher","détester","détourer","détresse","devancer","devenir","deviner","devoir","diable","dialogue","diamant","dicter","différer","digérer","digital","digne","diluer","dimanche","diminuer","dioxyde","directif","diriger","discuter","disposer","dissiper","distance","divertir","diviser","docile","docteur","dogme","doigt","domaine","domicile","dompter","donateur","donjon","donner","dopamine","dortoir","dorure","dosage","doseur","dossier","dotation","douanier","double","douceur","douter","doyen","dragon","draper","dresser","dribbler","droiture","duperie","duplexe","durable","durcir","dynastie","éblouir","écarter","écharpe","échelle","éclairer","éclipse","éclore","écluse","école","économie","écorce","écouter","écraser","écrémer","écrivain","écrou","écume","écureuil","édifier","éduquer","effacer","effectif","effigie","effort","effrayer","effusion","égaliser","égarer","éjecter","élaborer","élargir","électron","élégant","éléphant","élève","éligible","élitisme","éloge","élucider","éluder","emballer","embellir","embryon","émeraude","émission","emmener","émotion","émouvoir","empereur","employer","emporter","emprise","émulsion","encadrer","enchère","enclave","encoche","endiguer","endosser","endroit","enduire","énergie","enfance","enfermer","enfouir","engager","engin","englober","énigme","enjamber","enjeu","enlever","ennemi","ennuyeux","enrichir","enrobage","enseigne","entasser","entendre","entier","entourer","entraver","énumérer","envahir","enviable","envoyer","enzyme","éolien","épaissir","épargne","épatant","épaule","épicerie","épidémie","épier","épilogue","épine","épisode","épitaphe","époque","épreuve","éprouver","épuisant","équerre","équipe","ériger","érosion","erreur","éruption","escalier","espadon","espèce","espiègle","espoir","esprit","esquiver","essayer","essence","essieu","essorer","estime","estomac","estrade","étagère","étaler","étanche","étatique","éteindre","étendoir","éternel","éthanol","éthique","ethnie","étirer","étoffer","étoile","étonnant","étourdir","étrange","étroit","étude","euphorie","évaluer","évasion","éventail","évidence","éviter","évolutif","évoquer","exact","exagérer","exaucer","exceller","excitant","exclusif","excuse","exécuter","exemple","exercer","exhaler","exhorter","exigence","exiler","exister","exotique","expédier","explorer","exposer","exprimer","exquis","extensif","extraire","exulter","fable","fabuleux","facette","facile","facture","faiblir","falaise","fameux","famille","farceur","farfelu","farine","farouche","fasciner","fatal","fatigue","faucon","fautif","faveur","favori","fébrile","féconder","fédérer","félin","femme","fémur","fendoir","féodal","fermer","féroce","ferveur","festival","feuille","feutre","février","fiasco","ficeler","fictif","fidèle","figure","filature","filetage","filière","filleul","filmer","filou","filtrer","financer","finir","fiole","firme","fissure","fixer","flairer","flamme","flasque","flatteur","fléau","flèche","fleur","flexion","flocon","flore","fluctuer","fluide","fluvial","folie","fonderie","fongible","fontaine","forcer","forgeron","formuler","fortune","fossile","foudre","fougère","fouiller","foulure","fourmi","fragile","fraise","franchir","frapper","frayeur","frégate","freiner","frelon","frémir","frénésie","frère","friable","friction","frisson","frivole","froid","fromage","frontal","frotter","fruit","fugitif","fuite","fureur","furieux","furtif","fusion","futur","gagner","galaxie","galerie","gambader","garantir","gardien","garnir","garrigue","gazelle","gazon","géant","gélatine","gélule","gendarme","général","génie","genou","gentil","géologie","géomètre","géranium","germe","gestuel","geyser","gibier","gicler","girafe","givre","glace","glaive","glisser","globe","gloire","glorieux","golfeur","gomme","gonfler","gorge","gorille","goudron","gouffre","goulot","goupille","gourmand","goutte","graduel","graffiti","graine","grand","grappin","gratuit","gravir","grenat","griffure","griller","grimper","grogner","gronder","grotte","groupe","gruger","grutier","gruyère","guépard","guerrier","guide","guimauve","guitare","gustatif","gymnaste","gyrostat","habitude","hachoir","halte","hameau","hangar","hanneton","haricot","harmonie","harpon","hasard","hélium","hématome","herbe","hérisson","hermine","héron","hésiter","heureux","hiberner","hibou","hilarant","histoire","hiver","homard","hommage","homogène","honneur","honorer","honteux","horde","horizon","horloge","hormone","horrible","houleux","housse","hublot","huileux","humain","humble","humide","humour","hurler","hydromel","hygiène","hymne","hypnose","idylle","ignorer","iguane","illicite","illusion","image","imbiber","imiter","immense","immobile","immuable","impact","impérial","implorer","imposer","imprimer","imputer","incarner","incendie","incident","incliner","incolore","indexer","indice","inductif","inédit","ineptie","inexact","infini","infliger","informer","infusion","ingérer","inhaler","inhiber","injecter","injure","innocent","inoculer","inonder","inscrire","insecte","insigne","insolite","inspirer","instinct","insulter","intact","intense","intime","intrigue","intuitif","inutile","invasion","inventer","inviter","invoquer","ironique","irradier","irréel","irriter","isoler","ivoire","ivresse","jaguar","jaillir","jambe","janvier","jardin","jauger","jaune","javelot","jetable","jeton","jeudi","jeunesse","joindre","joncher","jongler","joueur","jouissif","journal","jovial","joyau","joyeux","jubiler","jugement","junior","jupon","juriste","justice","juteux","juvénile","kayak","kimono","kiosque","label","labial","labourer","lacérer","lactose","lagune","laine","laisser","laitier","lambeau","lamelle","lampe","lanceur","langage","lanterne","lapin","largeur","larme","laurier","lavabo","lavoir","lecture","légal","léger","légume","lessive","lettre","levier","lexique","lézard","liasse","libérer","libre","licence","licorne","liège","lièvre","ligature","ligoter","ligue","limer","limite","limonade","limpide","linéaire","lingot","lionceau","liquide","lisière","lister","lithium","litige","littoral","livreur","logique","lointain","loisir","lombric","loterie","louer","lourd","loutre","louve","loyal","lubie","lucide","lucratif","lueur","lugubre","luisant","lumière","lunaire","lundi","luron","lutter","luxueux","machine","magasin","magenta","magique","maigre","maillon","maintien","mairie","maison","majorer","malaxer","maléfice","malheur","malice","mallette","mammouth","mandater","maniable","manquant","manteau","manuel","marathon","marbre","marchand","mardi","maritime","marqueur","marron","marteler","mascotte","massif","matériel","matière","matraque","maudire","maussade","mauve","maximal","méchant","méconnu","médaille","médecin","méditer","méduse","meilleur","mélange","mélodie","membre","mémoire","menacer","mener","menhir","mensonge","mentor","mercredi","mérite","merle","messager","mesure","métal","météore","méthode","métier","meuble","miauler","microbe","miette","mignon","migrer","milieu","million","mimique","mince","minéral","minimal","minorer","minute","miracle","miroiter","missile","mixte","mobile","moderne","moelleux","mondial","moniteur","monnaie","monotone","monstre","montagne","monument","moqueur","morceau","morsure","mortier","moteur","motif","mouche","moufle","moulin","mousson","mouton","mouvant","multiple","munition","muraille","murène","murmure","muscle","muséum","musicien","mutation","muter","mutuel","myriade","myrtille","mystère","mythique","nageur","nappe","narquois","narrer","natation","nation","nature","naufrage","nautique","navire","nébuleux","nectar","néfaste","négation","négliger","négocier","neige","nerveux","nettoyer","neurone","neutron","neveu","niche","nickel","nitrate","niveau","noble","nocif","nocturne","noirceur","noisette","nomade","nombreux","nommer","normatif","notable","notifier","notoire","nourrir","nouveau","novateur","novembre","novice","nuage","nuancer","nuire","nuisible","numéro","nuptial","nuque","nutritif","obéir","objectif","obliger","obscur","observer","obstacle","obtenir","obturer","occasion","occuper","océan","octobre","octroyer","octupler","oculaire","odeur","odorant","offenser","officier","offrir","ogive","oiseau","oisillon","olfactif","olivier","ombrage","omettre","onctueux","onduler","onéreux","onirique","opale","opaque","opérer","opinion","opportun","opprimer","opter","optique","orageux","orange","orbite","ordonner","oreille","organe","orgueil","orifice","ornement","orque","ortie","osciller","osmose","ossature","otarie","ouragan","ourson","outil","outrager","ouvrage","ovation","oxyde","oxygène","ozone","paisible","palace","palmarès","palourde","palper","panache","panda","pangolin","paniquer","panneau","panorama","pantalon","papaye","papier","papoter","papyrus","paradoxe","parcelle","paresse","parfumer","parler","parole","parrain","parsemer","partager","parure","parvenir","passion","pastèque","paternel","patience","patron","pavillon","pavoiser","payer","paysage","peigne","peintre","pelage","pélican","pelle","pelouse","peluche","pendule","pénétrer","pénible","pensif","pénurie","pépite","péplum","perdrix","perforer","période","permuter","perplexe","persil","perte","peser","pétale","petit","pétrir","peuple","pharaon","phobie","phoque","photon","phrase","physique","piano","pictural","pièce","pierre","pieuvre","pilote","pinceau","pipette","piquer","pirogue","piscine","piston","pivoter","pixel","pizza","placard","plafond","plaisir","planer","plaque","plastron","plateau","pleurer","plexus","pliage","plomb","plonger","pluie","plumage","pochette","poésie","poète","pointe","poirier","poisson","poivre","polaire","policier","pollen","polygone","pommade","pompier","ponctuel","pondérer","poney","portique","position","posséder","posture","potager","poteau","potion","pouce","poulain","poumon","pourpre","poussin","pouvoir","prairie","pratique","précieux","prédire","préfixe","prélude","prénom","présence","prétexte","prévoir","primitif","prince","prison","priver","problème","procéder","prodige","profond","progrès","proie","projeter","prologue","promener","propre","prospère","protéger","prouesse","proverbe","prudence","pruneau","psychose","public","puceron","puiser","pulpe","pulsar","punaise","punitif","pupitre","purifier","puzzle","pyramide","quasar","querelle","question","quiétude","quitter","quotient","racine","raconter","radieux","ragondin","raideur","raisin","ralentir","rallonge","ramasser","rapide","rasage","ratisser","ravager","ravin","rayonner","réactif","réagir","réaliser","réanimer","recevoir","réciter","réclamer","récolter","recruter","reculer","recycler","rédiger","redouter","refaire","réflexe","réformer","refrain","refuge","régalien","région","réglage","régulier","réitérer","rejeter","rejouer","relatif","relever","relief","remarque","remède","remise","remonter","remplir","remuer","renard","renfort","renifler","renoncer","rentrer","renvoi","replier","reporter","reprise","reptile","requin","réserve","résineux","résoudre","respect","rester","résultat","rétablir","retenir","réticule","retomber","retracer","réunion","réussir","revanche","revivre","révolte","révulsif","richesse","rideau","rieur","rigide","rigoler","rincer","riposter","risible","risque","rituel","rival","rivière","rocheux","romance","rompre","ronce","rondin","roseau","rosier","rotatif","rotor","rotule","rouge","rouille","rouleau","routine","royaume","ruban","rubis","ruche","ruelle","rugueux","ruiner","ruisseau","ruser","rustique","rythme","sabler","saboter","sabre","sacoche","safari","sagesse","saisir","salade","salive","salon","saluer","samedi","sanction","sanglier","sarcasme","sardine","saturer","saugrenu","saumon","sauter","sauvage","savant","savonner","scalpel","scandale","scélérat","scénario","sceptre","schéma","science","scinder","score","scrutin","sculpter","séance","sécable","sécher","secouer","sécréter","sédatif","séduire","seigneur","séjour","sélectif","semaine","sembler","semence","séminal","sénateur","sensible","sentence","séparer","séquence","serein","sergent","sérieux","serrure","sérum","service","sésame","sévir","sevrage","sextuple","sidéral","siècle","siéger","siffler","sigle","signal","silence","silicium","simple","sincère","sinistre","siphon","sirop","sismique","situer","skier","social","socle","sodium","soigneux","soldat","soleil","solitude","soluble","sombre","sommeil","somnoler","sonde","songeur","sonnette","sonore","sorcier","sortir","sosie","sottise","soucieux","soudure","souffle","soulever","soupape","source","soutirer","souvenir","spacieux","spatial","spécial","sphère","spiral","stable","station","sternum","stimulus","stipuler","strict","studieux","stupeur","styliste","sublime","substrat","subtil","subvenir","succès","sucre","suffixe","suggérer","suiveur","sulfate","superbe","supplier","surface","suricate","surmener","surprise","sursaut","survie","suspect","syllabe","symbole","symétrie","synapse","syntaxe","système","tabac","tablier","tactile","tailler","talent","talisman","talonner","tambour","tamiser","tangible","tapis","taquiner","tarder","tarif","tartine","tasse","tatami","tatouage","taupe","taureau","taxer","témoin","temporel","tenaille","tendre","teneur","tenir","tension","terminer","terne","terrible","tétine","texte","thème","théorie","thérapie","thorax","tibia","tiède","timide","tirelire","tiroir","tissu","titane","titre","tituber","toboggan","tolérant","tomate","tonique","tonneau","toponyme","torche","tordre","tornade","torpille","torrent","torse","tortue","totem","toucher","tournage","tousser","toxine","traction","trafic","tragique","trahir","train","trancher","travail","trèfle","tremper","trésor","treuil","triage","tribunal","tricoter","trilogie","triomphe","tripler","triturer","trivial","trombone","tronc","tropical","troupeau","tuile","tulipe","tumulte","tunnel","turbine","tuteur","tutoyer","tuyau","tympan","typhon","typique","tyran","ubuesque","ultime","ultrason","unanime","unifier","union","unique","unitaire","univers","uranium","urbain","urticant","usage","usine","usuel","usure","utile","utopie","vacarme","vaccin","vagabond","vague","vaillant","vaincre","vaisseau","valable","valise","vallon","valve","vampire","vanille","vapeur","varier","vaseux","vassal","vaste","vecteur","vedette","végétal","véhicule","veinard","véloce","vendredi","vénérer","venger","venimeux","ventouse","verdure","vérin","vernir","verrou","verser","vertu","veston","vétéran","vétuste","vexant","vexer","viaduc","viande","victoire","vidange","vidéo","vignette","vigueur","vilain","village","vinaigre","violon","vipère","virement","virtuose","virus","visage","viseur","vision","visqueux","visuel","vital","vitesse","viticole","vitrine","vivace","vivipare","vocation","voguer","voile","voisin","voiture","volaille","volcan","voltiger","volume","vorace","vortex","voter","vouloir","voyage","voyelle","wagon","xénon","yacht","zèbre","zénith","zeste","zoologie"]

/***/ }),

/***/ "AbdW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_ufg_manure.e48142b.jpg";

/***/ }),

/***/ "Af8B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RestoreKeyFile_vue__ = __webpack_require__("90rt");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69edb17c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreKeyFile_vue__ = __webpack_require__("97vC");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_69edb17c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreKeyFile_vue__["a" /* default */],
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

/***/ "As37":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("RLpJ")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"teal"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Info\n      "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      New\n      "),_c('v-icon',[_vm._v("child_care")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Check\n      "),_c('v-icon',[_vm._v("search")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"width":"50%","height":"auto"},attrs:{"src":__webpack_require__("TGXn")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("Welcome to MyOffspring!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    This application allows you to register your children and create a Birth Certificate for them in the "),_c('b',[_vm._v("AltHash")]),_vm._v(" blockchain.\n                    "),_c('br'),_c('br'),_vm._v("\n                    To create a new record, just click on \"New\" menu item, and fill in the details about the birth of your heir.\n                    "),_c('br'),_c('br'),_vm._v(" "),_c('b',[_vm._v("Take note of the hash code generated, as it will be the unique identifier for the birth registration.")]),_vm._v(" "),_c('br'),_c('br'),_vm._v("\n                    Once the transaction is confirmed, the registration is complete and you can verify it through the menu item \"Check\".\n                    "),_c('br'),_c('br'),_vm._v("\n                    MyOffspring was developed based on suggestions given by our Communities Manager, "),_c('b',[_vm._v("Heitor Guimarães")]),_vm._v(", supported by the Community member "),_c('b',[_vm._v("Karol Pyla")]),_vm._v(", who wanted to register his son, "),_c('b',[_vm._v("Julek")]),_vm._v(", on AltHash blockchain. The HTMLCOIN Foundation is glad to have the support of such smart and dedicated people. Thank you!\n                  ")]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Full Name","required":"","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.fullName),callback:function ($$v) {_vm.fullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fullName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Mother's Full Name","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.motherFullName),callback:function ($$v) {_vm.motherFullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"motherFullName"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Father's Full Name","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.fatherFullName),callback:function ($$v) {_vm.fatherFullName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fatherFullName"}}),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs6":""}},[_c('v-menu',{ref:"dateOfBirth_menu",attrs:{"close-on-content-click":false,"nudge-right":40,"lazy":"","transition":"scale-transition","offset-y":"","full-width":"","min-width":"290px"},model:{value:(_vm.dateOfBirth_menu),callback:function ($$v) {_vm.dateOfBirth_menu=$$v},expression:"dateOfBirth_menu"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Date of Birth","prepend-icon":"event","readonly":"","outline":"","background-color":"teal"},slot:"activator",model:{value:(_vm.dateOfBirth),callback:function ($$v) {_vm.dateOfBirth=$$v},expression:"dateOfBirth"}}),_vm._v(" "),_c('v-date-picker',{ref:"picker",attrs:{"max":new Date().toISOString().substr(0, 10),"min":"1900-01-01"},on:{"change":_vm.dateOfBirth_save},model:{value:(_vm.dateOfBirth),callback:function ($$v) {_vm.dateOfBirth=$$v},expression:"dateOfBirth"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-menu',{ref:"timeOfBirth_menu",attrs:{"close-on-content-click":false,"nudge-right":40,"return-value":_vm.timeOfBirth,"lazy":"","transition":"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function($event){_vm.timeOfBirth=$event}},model:{value:(_vm.timePicker),callback:function ($$v) {_vm.timePicker=$$v},expression:"timePicker"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Time of Birth","prepend-icon":"access_time","readonly":"","outline":"","background-color":"teal"},slot:"activator",model:{value:(_vm.timeOfBirth),callback:function ($$v) {_vm.timeOfBirth=$$v},expression:"timeOfBirth"}}),_vm._v(" "),(_vm.timePicker)?_c('v-time-picker',{attrs:{"full-width":"","format":"24hr"},on:{"change":_vm.timeOfBirth_save},model:{value:(_vm.timeOfBirth),callback:function ($$v) {_vm.timeOfBirth=$$v},expression:"timeOfBirth"}}):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Place of Birth (Facility, City, State/Province, Country)","outline":"","background-color":"teal","maxlength":"200"},model:{value:(_vm.placeOfBirth),callback:function ($$v) {_vm.placeOfBirth=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"placeOfBirth"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","outline":"","background-color":"indigo"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n                  "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n                  ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('b',[_vm._v("Please store the ID below in a safe place, as it is the unique ID for this Birth registration.")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{attrs:{"label":"Hash ID","disabled":""},model:{value:(_vm.hashID),callback:function ($$v) {_vm.hashID=$$v},expression:"hashID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('v-btn',{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:(_vm.hashID),expression:"hashID",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:(_vm.onCopySucc),expression:"onCopySucc",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:(_vm.onCopyError),expression:"onCopyError",arg:"error"}],staticClass:"mt-3",attrs:{"small":"","color":"cyan"}},[_vm._v("\n                          "+_vm._s(_vm.$t('common.copy'))+"\n                        ")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs10":""}},[_c('v-text-field',{staticClass:"mx-3",attrs:{"label":"Hash ID","append-icon":"search","outline":"","background-color":"teal"},on:{"click:append":_vm.openCertificate},model:{value:(_vm.searchHashID),callback:function ($$v) {_vm.searchHashID=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"searchHashID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs2":""}},[_c('img',{staticClass:"cursor",attrs:{"src":__webpack_require__("igel")},on:{"click":_vm.scanQrcode}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('p',{staticClass:"error"},[_vm._v(_vm._s(_vm.error))])])],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"width":"600px"},model:{value:(_vm.execResultDialog),callback:function ($$v) {_vm.execResultDialog=$$v},expression:"execResultDialog"}},[_c('span',{attrs:{"id":"certificate"}},[_c('v-card',{staticClass:"modal-detail"},[_c('v-card-text',[_c('v-container',{attrs:{"align-center":"","grid-list-md":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-md-center":""}},[_c('img',{staticClass:"logo1",attrs:{"src":__webpack_require__("RLpJ")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-md-center":""}},[_c('img',{staticClass:"logo2",attrs:{"src":__webpack_require__("2Gzf")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","text-md-center":""}},[_c('span',{staticClass:"font-weight-medium my-2 headline font-bold",attrs:{"id":"title"}},[_vm._v("\n                  Digital Birth Certificate\n                ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('p'),_vm._v(" "),_c('p',[_c('b',[_vm._v("Full Name:")]),_vm._v(" "+_vm._s(_vm.resultFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Mother's Full Name:")]),_vm._v(" "+_vm._s(_vm.resultMotherFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Father's Full Name:")]),_vm._v(" "+_vm._s(_vm.resultFatherFullName)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Date of Birth:")]),_vm._v(" "+_vm._s(_vm.resultDateOfBirth)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Time of Birth:")]),_vm._v(" "+_vm._s(_vm.resultTimeOfBirth)+"\n                ")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("Place of Birth:")]),_vm._v(" "+_vm._s(_vm.resultPlaceOfBirth)+"\n                ")]),_vm._v(" "),_c('p',{staticClass:"text-xs-center"},[_c('span',{staticClass:"caption",attrs:{"id":"certificate_id"}},[_vm._v("Hash ID: "+_vm._s(_vm.searchHashID))]),_vm._v(" "),_c('img',{staticClass:"qr",attrs:{"src":_vm.qr,"id":"qr"}}),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-btn',{attrs:{"icon":"","id":"btn"},on:{"click":_vm.print}},[_c('v-icon',[_vm._v("print")])],1)],1)])],1)],1)],1)],1)],1)]),_vm._v(" "),_c('v-dialog',{attrs:{"max-width":"50%"},model:{value:(_vm.qrScan),callback:function ($$v) {_vm.qrScan=$$v},expression:"qrScan"}},[_c('v-container',[_c('v-layout',[_c('v-flex',{attrs:{"xs12":"","align-center":"","text-xs-center":""}},[(_vm.qrComponent)?_c('qrcode-stream',{attrs:{"track":false,"camera":_vm.camera},on:{"decode":_vm.onDecode,"init":_vm.onInit}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"teal","dark":""}},[_c('v-card-text',[_vm._v("\n        Please stand by\n        "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "AySs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_View_vue__ = __webpack_require__("KuJL");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a717d44_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__ = __webpack_require__("AL6D");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a717d44_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_View_vue__["a" /* default */],
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

/***/ "C1PJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("call_received")]),_vm._v("\n        "+_vm._s(_vm.$t('request_payment.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Address","required":"","outline":"","background-color":"blue lighten-1","readonly":""},on:{"input":_vm.drawQrCode},model:{value:(_vm.address),callback:function ($$v) {_vm.address=$$v},expression:"address"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Amount","required":"","outline":"","background-color":"blue lighten-1"},on:{"input":_vm.drawQrCode},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Message","required":"","outline":"","background-color":"blue lighten-1"},on:{"input":_vm.drawQrCode},model:{value:(_vm.message),callback:function ($$v) {_vm.message=$$v},expression:"message"}}),_vm._v(" "),_c('p',{staticClass:"text-xs-center"},[_c('img',{attrs:{"src":_vm.qr}})])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "E3Xr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EClR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',{attrs:{"light":""}},[_c('v-toolbar',{class:_vm.headerClass,attrs:{"app":"","fixed":"","height":"82px","clipped-left":""}},[_c('v-spacer'),_vm._v(" "),_c('v-menu',{attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":100}},[_c('v-btn',{attrs:{"slot":"activator","large":"","icon":""},slot:"activator"},[_c('v-icon',{attrs:{"large":"","color":"blue darken-4"}},[_vm._v("apps")])],1),_vm._v(" "),_c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openURL('https://health.althash.org')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("VZfT")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_myoffspring')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("a4SW")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('create_token')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("GzeU")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_altproof')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("ib+S")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_crypticmag')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("5EIY")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_biffyplutonium')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("Vw+u")}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-btn',{attrs:{"slot":"activator","icon":"","large":"","dark":""},on:{"click":function($event){_vm.openDapp('dapp_photizo')}},slot:"activator"},[_c('img',{staticStyle:{"height":"50px","width":"auto"},attrs:{"src":__webpack_require__("NlvQ")}})])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"title"},[_c('span',{staticClass:"text"},[_c('img',{staticClass:"cursor",attrs:{"src":__webpack_require__("XXFI"),"alt":"Althash Web Platform Logo"},on:{"click":function($event){_vm.changeView('home')}}})])]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),(!this.wallet)?_c('v-menu',{attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":100}},[_c('v-btn',{attrs:{"slot":"activator","large":"","icon":""},slot:"activator"},[_c('v-icon',{attrs:{"large":"","color":"blue darken-4"}},[_vm._v("open_in_browser")])],1),_vm._v(" "),_c('v-list',[_vm._l((_vm.loginItems),function(loginItem){return _c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[loginItem.name]),expression:"!notShow[loginItem.name]"}],key:loginItem.title,on:{"click":function($event){_vm.changeView(loginItem.name)}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v(_vm._s(loginItem.title))])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v(_vm._s(loginItem.action))])],1)],1)}),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow['safe_send']),expression:"!notShow['safe_send']"}],on:{"click":function($event){_vm.changeView('safe_send')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v("Safe Send")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v("security")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){_vm.changeView('settings')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v("Settings")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v("settings")])],1)],1)],2)],1):_vm._e(),_vm._v(" "),(this.wallet)?_c('v-menu',{attrs:{"bottom":"","open-on-hover":"","offset-y":"","nudge-width":100}},[_c('v-btn',{attrs:{"slot":"activator","large":"","icon":""},slot:"activator"},[_c('v-icon',{attrs:{"large":"","color":"blue darken-4"}},[_vm._v("account_balance_wallet")])],1),_vm._v(" "),(this.wallet)?_c('v-toolbar',{attrs:{"color":"light-blue darken-4","dark":""}},[_c('center',[_c('span',{staticClass:"caption cursor",on:{"click":function($event){_vm.changeView('view')}}},[_c('b',[_vm._v("\n              "+_vm._s(this.wallet.info['address'])+"\n            ")]),_vm._v(" "),_c('br'),_vm._v("\n              "+_vm._s(this.wallet.info['balance'])+"\n          ")])])],1):_vm._e(),_vm._v(" "),_c('v-list',[_vm._l((_vm.walletItems),function(walletItem){return _c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[walletItem.name]),expression:"!notShow[walletItem.name]"}],key:walletItem.title,on:{"click":function($event){_vm.changeView(walletItem.name)}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v(_vm._s(walletItem.title))])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v(_vm._s(walletItem.action))])],1)],1)}),_vm._v(" "),_c('v-divider'),_vm._v(" "),_vm._l((_vm.smartContractItems),function(smartContractItem){return _c('v-list-tile',{directives:[{name:"show",rawName:"v-show",value:(!_vm.notShow[smartContractItem.name]),expression:"!notShow[smartContractItem.name]"}],key:smartContractItem.title,on:{"click":function($event){_vm.changeView(smartContractItem.name)}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v(_vm._s(smartContractItem.title))])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v(_vm._s(smartContractItem.action))])],1)],1)}),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){_vm.changeView('settings')}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v("Settings")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v("settings")])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_c('v-list-tile',{on:{"click":function($event){_vm.logout_dialog = true}}},[_c('v-list-tile-content',[_c('v-list-tile-title',{staticClass:"body-2"},[_vm._v("Log Out")])],1),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{attrs:{"color":"blue darken-4"}},[_vm._v("power_settings_new")])],1)],1)],2)],1):_vm._e(),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('main',[_c('v-content',[_c('v-container',{attrs:{"fluid":"","fill-height":"","justify-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs10":"","offset-xs1":""}},[_c('home',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['home']),expression:"isCurrent['home']"}],on:{"openDapp":_vm.openDapp,"openURL":_vm.openURL}}),_vm._v(" "),_c('create-wallet',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['create']),expression:"isCurrent['create']"}],attrs:{"view":_vm.isCurrent['create']},on:{"created":_vm.setWallet}}),_vm._v(" "),_c('create-mnemonic',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['create_from_mnemonic']),expression:"isCurrent['create_from_mnemonic']"}],attrs:{"view":_vm.isCurrent['create_from_mnemonic']},on:{"created":_vm.setWallet}}),_vm._v(" "),_c('restore-wallet',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_mnemonic']),expression:"isCurrent['restore_from_mnemonic']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),_c('restore-wif',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_wif']),expression:"isCurrent['restore_from_wif']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),_c('restore-mobile',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_mobile']),expression:"isCurrent['restore_from_mobile']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),_c('restore-key-file',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCurrent['restore_from_key_file']),expression:"isCurrent['restore_from_key_file']"}],on:{"restored":_vm.setWallet}}),_vm._v(" "),(_vm.isCurrent['restore_from_ledger'])?_c('restore-ledger',{on:{"restored":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['view'])?_c('view-wallet',{attrs:{"view":_vm.isCurrent['view']}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['transactions'])?_c('view-tx',{attrs:{"view":_vm.isCurrent['transactions']}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['safe_send'])?_c('safe-send',{on:{"send":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['send'])?_c('send',{on:{"send":_vm.setWallet}}):_vm._e(),_vm._v(" "),(_vm.isCurrent['request_payment'])?_c('request-payment'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dump_as_key_file'])?_c('dump-key-file'):_vm._e(),_vm._v(" "),(_vm.isCurrent['create_contract'])?_c('create-contract'):_vm._e(),_vm._v(" "),(_vm.isCurrent['send_to_contract'])?_c('send-to-contract'):_vm._e(),_vm._v(" "),(_vm.isCurrent['call_contract'])?_c('call-contract'):_vm._e(),_vm._v(" "),(_vm.isCurrent['create_token'])?_c('create-token'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_myoffspring'])?_c('dapp-myoffspring'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_crypticmag'])?_c('dapp-crypticmag'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_altproof'])?_c('dapp-alt-proof'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_biffyplutonium'])?_c('dapp-biffy-plutonium'):_vm._e(),_vm._v(" "),(_vm.isCurrent['dapp_photizo'])?_c('dapp-photizo'):_vm._e(),_vm._v(" "),(_vm.isCurrent['settings'])?_c('config'):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"max-width":"290"},model:{value:(_vm.logout_dialog),callback:function ($$v) {_vm.logout_dialog=$$v},expression:"logout_dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("Log out?")]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"red darken-1","flat":"flat"},on:{"click":function($event){_vm.logout_dialog = false}}},[_vm._v("\n          No\n        ")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"green darken-1","flat":"flat"},on:{"click":_vm.logout}},[_vm._v("\n          Yes\n        ")])],1)],1)],1),_vm._v(" "),_c('notify'),_vm._v(" "),_c('warning')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
//
//
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c8119ca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Password_vue__ = __webpack_require__("sFH2");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c8119ca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Password_vue__["a" /* default */],
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

/***/ "Gqhm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("security")]),_vm._v("\n        "+_vm._s(_vm.$t('safe_send.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info')))]),_vm._v(" "),_c('v-stepper',{attrs:{"non-linear":"","vertical":""},model:{value:(_vm.step),callback:function ($$v) {_vm.step=$$v},expression:"step"}},[_c('v-stepper-step',{attrs:{"step":"1","editable":""}},[_vm._v("Generate Base Info (At online computer)")]),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"1"}},[(_vm.mode === 'offline')?[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info1_offline')))]),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.step = 2}}},[_vm._v(_vm._s(_vm.$t('common.next')))])]:[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info1_online')))]),_vm._v(" "),_c('v-text-field',{attrs:{"label":"From Address","required":""},model:{value:(_vm.fromAddress),callback:function ($$v) {_vm.fromAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fromAddress"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"To Address","required":""},model:{value:(_vm.toAddress),callback:function ($$v) {_vm.toAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"toAddress"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Amount","required":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"success","disabled":_vm.notValid},nativeOn:{"click":function($event){_vm.confirmAddressDialog = true}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])]],2),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"2","editable":""}},[_vm._v("Generate Tx (At offline computer)")]),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"2"}},[(_vm.mode === 'offline')?[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info2_offline')))]),_vm._v(" "),(!_vm.fileParsed)?[_c('file-reader',{attrs:{"color":"info"},on:{"upload":_vm.handleFile}})]:_vm._e(),_vm._v(" "),(_vm.fileParsed)?[_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.from_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fromAddress),callback:function ($$v) {_vm.fromAddress=$$v},expression:"fromAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.to_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.toAddress),callback:function ($$v) {_vm.toAddress=$$v},expression:"toAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.amount')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.fee')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=$$v},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.confirmAddressDialog = true}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])]:_vm._e()]:[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info2_online')))]),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.step = 3}}},[_vm._v(_vm._s(_vm.$t('common.next')))])]],2),_vm._v(" "),_c('v-stepper-step',{attrs:{"step":"3","editable":""}},[_vm._v("Broadcast Tx (At online computer)")]),_vm._v(" "),_c('v-stepper-content',{attrs:{"step":"3"}},[(_vm.mode === 'offline')?[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info3_offline')))])]:[_c('v-alert',{attrs:{"color":"info","value":"true"}},[_vm._v(_vm._s(_vm.$t('safe_send.info3_online')))]),_vm._v(" "),(!_vm.fileParsed)?[_c('file-reader',{attrs:{"color":"info"},on:{"upload":_vm.handleFile}})]:_vm._e(),_vm._v(" "),(_vm.fileParsed)?[_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.from_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fromAddress),callback:function ($$v) {_vm.fromAddress=$$v},expression:"fromAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.to_address')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.toAddress),callback:function ($$v) {_vm.toAddress=$$v},expression:"toAddress"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.amount')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=$$v},expression:"amount"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs3":""}},[_c('v-subheader',[_vm._v(_vm._s(_vm.$t('safe_send.fee')))])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs7":""}},[_c('v-text-field',{attrs:{"disabled":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=$$v},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-btn',{attrs:{"color":"success"},nativeOn:{"click":function($event){_vm.confirmAddressDialog = true}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])]:_vm._e()]],2)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmAddressDialog),callback:function ($$v) {_vm.confirmAddressDialog=$$v},expression:"confirmAddressDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send.enter_address')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"To Address"},model:{value:(_vm.repeatToAddress),callback:function ($$v) {_vm.repeatToAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"repeatToAddress"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddress}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmAddressDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send.going_to_send'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.amount)+"HTML")]),_vm._v("\n          "+_vm._s(_vm.$t('send.to_address'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.toAddress))]),_vm._v("\n          "+_vm._s(_vm.$t('common.question_mark'))+"\n        ")],1)]),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1)],1)}
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




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
      node: __WEBPACK_IMPORTED_MODULE_3_libs_server__["a" /* default */].currentNode()
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
  },
  methods: {
    refreshWallet: function refreshWallet() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.wallet.setTxList();

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

/***/ "Hs0l":
/***/ (function(module, exports) {

module.exports = ["ábaco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","acción","aceite","acelga","acento","aceptar","ácido","aclarar","acné","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","aéreo","afectar","afición","afinar","afirmar","ágil","agitar","agonía","agosto","agotar","agregar","agrio","agua","agudo","águila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacrán","alambre","alarma","alba","álbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodón","aliado","aliento","alivio","alma","almeja","almíbar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","ámbar","ámbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","andén","anemia","ángulo","anillo","ánimo","anís","anotar","antena","antiguo","antojo","anual","anular","anuncio","añadir","añejo","año","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","araña","arar","árbitro","árbol","arbusto","archivo","arco","arder","ardilla","arduo","área","árido","aries","armonía","arnés","aroma","arpa","arpón","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","áspero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","ático","atleta","átomo","atraer","atroz","atún","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avión","aviso","ayer","ayuda","ayuno","azafrán","azar","azote","azúcar","azufre","azul","baba","babor","bache","bahía","baile","bajar","balanza","balcón","balde","bambú","banco","banda","baño","barba","barco","barniz","barro","báscula","bastón","basura","batalla","batería","batir","batuta","baúl","bazar","bebé","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsái","borde","borrar","bosque","bote","botín","bóveda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufón","búho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzón","caballo","cabeza","cabina","cabra","cacao","cadáver","cadena","caer","café","caída","caimán","caja","cajón","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","cáncer","candil","canela","canguro","canica","canto","caña","cañón","caoba","caos","capaz","capitán","capote","captar","capucha","cara","carbón","cárcel","careta","carga","cariño","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","célebre","celoso","célula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","césped","cetro","chacal","chaleco","champú","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclón","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","ciprés","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","clínica","cobre","cocción","cochino","cocina","coco","código","codo","cofre","coger","cohete","cojín","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","cómodo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazón","corbata","corcho","cordón","corona","correr","coser","cosmos","costa","cráneo","cráter","crear","crecer","creído","crema","cría","crimen","cripta","crisis","cromo","crónica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupón","cúpula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","dátil","deber","débil","década","decir","dedo","defensa","definir","dejar","delfín","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvío","detalle","detener","deuda","día","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difícil","digno","dilema","diluir","dinero","directo","dirigir","disco","diseño","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","dragón","droga","ducha","duda","duelo","dueño","dulce","dúo","duque","durar","dureza","duro","ébano","ebrio","echar","eco","ecuador","edad","edición","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","élite","elixir","elogio","eludir","embudo","emitir","emoción","empate","empeño","empleo","empresa","enano","encargo","enchufe","encía","enemigo","enero","enfado","enfermo","engaño","enigma","enlace","enorme","enredo","ensayo","enseñar","entero","entrar","envase","envío","época","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espía","esposa","espuma","esquí","estar","este","estilo","estufa","etapa","eterno","ética","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","éxito","experto","explicar","exponer","extremo","fábrica","fábula","fachada","fácil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","faraón","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fértil","fervor","festín","fiable","fianza","fiar","fibra","ficción","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flúor","fobia","foca","fogata","fogón","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","frágil","franja","frase","fraude","freír","freno","fresa","frío","frito","fruta","fuego","fuente","fuerza","fuga","fumar","función","funda","furgón","furia","fusil","fútbol","futuro","gacela","gafas","gaita","gajo","gala","galería","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavilán","gemelo","gemir","gen","género","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gráfico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","grúa","grueso","grumo","grupo","guante","guapo","guardia","guerra","guía","guiño","guion","guiso","guitarra","gusano","gustar","haber","hábil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazaña","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","héroe","hervir","hielo","hierro","hígado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","húmedo","humilde","humo","hundir","huracán","hurto","icono","ideal","idioma","ídolo","iglesia","iglú","igual","ilegal","ilusión","imagen","imán","imitar","impar","imperio","imponer","impulso","incapaz","índice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","interés","íntimo","intuir","inútil","invierno","ira","iris","ironía","isla","islote","jabalí","jabón","jamón","jarabe","jardín","jarra","jaula","jazmín","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","júpiter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladrón","lagarto","lágrima","laguna","laico","lamer","lámina","lámpara","lana","lancha","langosta","lanza","lápiz","largo","larva","lástima","lata","látex","latir","laurel","lavar","lazo","leal","lección","leche","lector","leer","legión","legumbre","lejano","lengua","lento","leña","león","leopardo","lesión","letal","letra","leve","leyenda","libertad","libro","licor","líder","lidiar","lienzo","liga","ligero","lima","límite","limón","limpio","lince","lindo","línea","lingote","lino","linterna","líquido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","loción","loco","locura","lógica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","maíz","maldad","maleta","malla","malo","mamá","mambo","mamut","manco","mando","manejar","manga","maniquí","manjar","mano","manso","manta","mañana","mapa","máquina","mar","marco","marea","marfil","margen","marido","mármol","marrón","martes","marzo","masa","máscara","masivo","matar","materia","matiz","matriz","máximo","mayor","mazorca","mecha","medalla","medio","médula","mejilla","mejor","melena","melón","memoria","menor","mensaje","mente","menú","mercado","merengue","mérito","mes","mesón","meta","meter","método","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millón","mimo","mina","minero","mínimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","moción","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","moño","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","móvil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","muñeca","mural","muro","músculo","museo","musgo","música","muslo","nácar","nación","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","náusea","naval","nave","navidad","necio","néctar","negar","negocio","negro","neón","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","niñez","niño","nítido","nivel","nobleza","noche","nómina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","núcleo","nudillo","nudo","nuera","nueve","nuez","nulo","número","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","océano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oído","oír","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opción","ópera","opinar","oponer","optar","óptica","opuesto","oración","orador","oral","órbita","orca","orden","oreja","órgano","orgía","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadía","oscuro","osezno","oso","ostra","otoño","otro","oveja","óvulo","óxido","oxígeno","oyente","ozono","pacto","padre","paella","página","pago","país","pájaro","palabra","palco","paleta","pálido","palma","paloma","palpar","pan","panal","pánico","pantera","pañuelo","papá","papel","papilla","paquete","parar","parcela","pared","parir","paro","párpado","parque","párrafo","parte","pasar","paseo","pasión","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peatón","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldaño","pelea","peligro","pellejo","pelo","peluca","pena","pensar","peñón","peón","peor","pepino","pequeño","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pésimo","pestaña","pétalo","petróleo","pez","pezuña","picar","pichón","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","piña","piojo","pipa","pirata","pisar","piscina","piso","pista","pitón","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesía","poeta","polen","policía","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porción","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","príncipe","prisión","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","próximo","prueba","público","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmón","pulpo","pulso","puma","punto","puñal","puño","pupa","pupila","puré","quedar","queja","quemar","querer","queso","quieto","química","quince","quitar","rábano","rabia","rabo","ración","radical","raíz","rama","rampa","rancho","rango","rapaz","rápido","rapto","rasgo","raspa","rato","rayo","raza","razón","reacción","realidad","rebaño","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refrán","refugio","regalo","regir","regla","regreso","rehén","reino","reír","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","revés","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","rígido","rigor","rincón","riñón","río","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubí","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sábado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmón","salón","salsa","salto","salud","salvar","samba","sanción","sandía","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sartén","sastre","satán","sauna","saxofón","sección","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","señal","señor","separar","sepia","sequía","ser","serie","sermón","servir","sesenta","sesión","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","sílaba","silbar","silencio","silla","símbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","sólido","soltar","solución","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","sostén","sótano","suave","subir","suceso","sudor","suegra","suelo","sueño","suerte","sufrir","sujeto","sultán","sumar","superar","suplir","suponer","supremo","sur","surco","sureño","surgir","susto","sutil","tabaco","tabique","tabla","tabú","taco","tacto","tajo","talar","talco","talento","talla","talón","tamaño","tambor","tango","tanque","tapa","tapete","tapia","tapón","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazón","teatro","techo","tecla","técnica","tejado","tejer","tejido","tela","teléfono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teoría","terapia","terco","término","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburón","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","tímido","timo","tinta","tío","típico","tipo","tira","tirón","titán","títere","título","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","tórax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","tóxico","trabajo","tractor","traer","tráfico","trago","traje","tramo","trance","trato","trauma","trazar","trébol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tubería","tubo","tuerto","tumba","tumor","túnel","túnica","turbina","turismo","turno","tutor","ubicar","úlcera","umbral","unidad","unir","universo","uno","untar","uña","urbano","urbe","urgente","urna","usar","usuario","útil","utopía","uva","vaca","vacío","vacuna","vagar","vago","vaina","vajilla","vale","válido","valle","valor","válvula","vampiro","vara","variar","varón","vaso","vecino","vector","vehículo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vía","viaje","vibrar","vicio","víctima","vida","vídeo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","viñedo","violín","viral","virgo","virtud","visor","víspera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volcán","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]

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
//
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed7d4d24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("ehEc");
function injectStyle (ssrContext) {
  __webpack_require__("hJdU")
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed7d4d24_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
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
//
//
//
//
//
//
//
//
//
//
//
//
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
      this.$root.success('Copied to clipboard!');
    },
    onCopyError: function onCopyError() {
      this.$root.error('Failed to copy!');
    },
    refreshWallet: function refreshWallet() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.wallet.setInfo();
                _this.wallet.setHrc20();

              case 2:
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
//
//
//
//
//
//
//
//
//
//
//
//
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
      create: 'GENERATE NEW WALLET',
      create_from_mnemonic: 'CREATE FROM MNEMONIC',
      restore_from_mnemonic: 'RESTORE FROM MNEMONIC',
      restore_from_wif: 'RESTORE FROM WIF',
      restore_from_mobile: 'RESTORE FROM MOBILE WALLET',
      restore_from_key_file: 'RESTORE WALLET FROM KEY FILE',
      restore_from_ledger: 'RESTORE FROM LEDGER',
      view: 'WALLET INFO',
      dump_as_key_file: 'DUMP AS A KEY FILE',
      transactions: 'WALLET TRANSACTIONS',
      safe_send: 'SAFE SEND',
      send: 'SEND',
      request_payment: 'REQUEST PAYMENT',
      create_contract: 'CREATE CONTRACT',
      send_to_contract: 'SEND TO CONTRACT',
      call_contract: 'CALL CONTRACT',
      settings: 'SETTINGS',
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
      password_is_not_same_as_the_old_one: 'Password is not the same as the old one.',
      mnemonics_are_not_same_as_the_words_should_remember: 'The mnemonics are not same as the words you should remember.',
      mnemonics_can_not_restore: 'Those mnemonics can not restore a wallet! Please check and try again.',
      address_is_not_same_as_the_old_one: 'This address is not the same as the old one.',
      from_address_is_not_same_as_the_wallet: 'The from address is not same as the wallet address.',
      restore_wif_fail: 'Cannot restore a wallet from this WIF.',
      the_key_file_is_not_a_valid_format: 'The key file is not in a valid format.',
      restore_key_file_fail: 'Restore from key file failed. Maybe the password is not correct.',
      connect_ledger_fail: 'Fail to connect to Ledger. Please reconnect your ledger and try again.',
      token_contract_address_is_not_exists: 'Token contract address does not exist! Please confirm and try again.'
    },
    mode: {
      normal: 'Normal',
      offline: 'Offline'
    }
  },
  mnemonic: {
    input_words: 'Please input the mnemonic words',
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
    download: 'Please click on the button below to download your key file.'
  },
  ledger: {
    comm_fail: 'Fail to connect Ledger. Please reconnect your ledger and try again.'
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
    title: 'SAFE SEND',
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
    send_tokens: 'SEND',
    enter_address: 'Please enter the address again',
    going_to_send: 'Do you confirm sending ',
    to_address: 'to address ',
    token_address: 'Token Contract Address'
  },
  request_payment: {
    title: 'REQUEST PAYMENT'
  },
  create_token: {
    title: 'CREATE TOKEN',
    name: 'Token Name',
    symbol: 'Token Symbol',
    decimal: 'Decimals (It\'s recommended to set decimals to 8)',
    total_supply: 'Total Supply (UNIT: 1 Token)',
    confirm: 'Do you confirm the creation of this Token?'
  },
  create_contract: {
    title: 'CREATE CONTRACT',
    confirm: 'Do you confirm to publish this contract?',
    compiler: 'Compiler'
  },
  send_to_contract: {
    title: 'SEND TO CONTRACT',
    confirm: 'Do you confirm?'
  },
  call_contract: {
    title: 'CALL CONTRACT',
    result: 'Result'
  },
  create: {
    title: 'GENERATE NEW WALLET'
  },
  create_mnemonic: {
    title: 'GENERATE NEW WALLET FROM MNEMONIC',
    remember: 'Please remember the following mnemonics:',
    remembered: 'I remember it. Let\'s check!'
  },
  restore: {
    title: 'RESTORE WALLET FROM MNEMONIC',
    mnemonic_warning: 'The input words are not bip39 mnemonics. If your address is generated by this wallet, please cancel this dialog and then check your words (no spaces, no capital letters, etc.). If you have double checked your words, you can continue.'
  },
  restore_wif: {
    title: 'RESTORE WALLET FROM WIF',
    priv_key: 'WIF'
  },
  restore_mobile: {
    title: 'RESTORE FROM MOBILE WALLET'
  },
  restore_key_file: {
    title: 'RESTORE WALLET FROM THE KEY FILE',
    password_title: 'Please input you password to decrypt the wallet'
  },
  restore_ledger: {
    title: 'RESTORE FROM LEDGER',
    usage: 'Please ensure your firmware and app are the newest version. Plugin your Ledger, open Html APP, and then click the "CONNECT" button below try to connect.',
    download: 'No Html APP? Please install it follow this https://www.ledgerwallet.com/apps/manager',
    connect: 'CONNECT'
  },
  view: {
    title: 'WALLET INFO'
  },
  view_tx: {
    title: 'WALLET TRANSACTIONS',
    recent: 'Most recent 10 txs',
    tx: 'Tx: ',
    mined_at: 'Mined at ',
    total_in: 'TOTAL IN: ',
    fee: 'FEE: ',
    total_out: 'TOTAL OUT: '
  },
  dump_as_key_file: {
    title: 'DUMP AS A KEY FILE',
    password_title: 'Please input a password to encrypt your key file:',
    warning: 'Please remember the password. If you lose it, the key file cannot be decrypted anymore.'
  },
  config: {
    title: 'SETTINGS',
    lan: 'Language',
    network: 'Network',
    mode: 'Mode'
  },
  warning: {
    title: 'IMPORTANT',
    list: ['We cannot recover your funds if you visit a phishing site or lose your backups. Please make sure to keep backups of your private keys/seed words safe.', 'We do not store your private keys and/or seed words on this web wallet.', 'We are not responsible for any lost funds or damages related to the use of this platform.', 'You as a user, are entirely responsible for your funds and your own security.', 'Please make sure to utilize updated operating systems and antivirus programs/services.', 'Please keep your private keys PRIVATE, do not provide them to anyone.', 'If you use Restore from Mnemonic, the seed words and password must be exactly right or the wallet will create a new address. When using Restore from Mnemonic, confirm you have the correct address.']
  }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d3558e3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("EClR");
function injectStyle (ssrContext) {
  __webpack_require__("SQ7E")
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d3558e3_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_851bdccc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileCreator_vue__ = __webpack_require__("awp0");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_851bdccc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileCreator_vue__["a" /* default */],
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
//
//
//
//
//
//
//
//
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

/***/ "N9Gj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("cloud_upload")]),_vm._v("\n      "+_vm._s(_vm.$t('create_mnemonic.title'))+"\n    ")],1)]),_vm._v(" "),([3, 5].includes(_vm.step))?_c('v-card-text',[(_vm.step === 3)?[_c('p',[_vm._v(_vm._s(_vm.$t('create_mnemonic.remember')))]),_vm._v(" "),_c('div',_vm._l((_vm.words),function(word,index){return _c('v-chip',{key:index,attrs:{"label":""}},[_vm._v(_vm._s(word))])}))]:(_vm.step === 5)?[_c('mnemonic',{on:{"mnemonic":_vm.validateMnemonic}})]:_vm._e()],2):_vm._e(),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.step === 1)?_c('v-btn',{attrs:{"color":"error","dark":""},on:{"click":_vm.createWallet}},[_vm._t("default",[_c('v-icon',[_vm._v("assignment")])])],2):_vm._e(),_vm._v(" "),(_vm.step === 3)?_c('v-btn',{attrs:{"color":"info","dark":""},on:{"click":_vm.checkWallet}},[_vm._v(_vm._s(_vm.$t('create_mnemonic.remembered')))]):_vm._e(),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired},on:{"password":_vm.setPassword}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6e65fd6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CallContract_vue__ = __webpack_require__("oEOJ");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6e65fd6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CallContract_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NlvQ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "NysP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_MyOffspring_vue__ = __webpack_require__("U877");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6717ef65_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_MyOffspring_vue__ = __webpack_require__("As37");
function injectStyle (ssrContext) {
  __webpack_require__("/6En")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6717ef65"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_MyOffspring_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6717ef65_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_MyOffspring_vue__["a" /* default */],
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
//
//
//
//
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b36a758_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateContract_vue__ = __webpack_require__("09AO");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b36a758_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateContract_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


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

/***/ "RCWu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/logo_Photizo_150.8835575.png";

/***/ }),

/***/ "RLpJ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/myoffspring_logo.597770f.png";

/***/ }),

/***/ "Rapo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ViewTx_vue__ = __webpack_require__("HWGS");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0314d99b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ViewTx_vue__ = __webpack_require__("6HaU");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0314d99b_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ViewTx_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Rq6l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("phonelink_lock")]),_vm._v("\n        "+_vm._s(_vm.$t('restore_mobile.title'))+"\n      ")],1),_vm._v(" "),_c('center',[_c('span',{staticClass:"subheading grey--text"},[_vm._v("Please input the mnemonic words")])])],1)]),_vm._v(" "),_c('v-card-text',[_c('mnemonic',{directives:[{name:"show",rawName:"v-show",value:(this.restored === false),expression:"this.restored === false"}],on:{"mnemonic":_vm.restore}}),_vm._v(" "),(this.restored)?_c('v-data-table',{attrs:{"headers":_vm.headers,"items":_vm.walletList,"no-data-text":"Loading","hide-actions":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_vm._v(_vm._s(props.item.wallet.getAddress()))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.wallet.info.balance))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_c('v-btn',{attrs:{"color":"success"},on:{"click":function($event){_vm.choose(props.item.path)}}},[_vm._v("\n            Choose\n          ")])],1)]}}])}):_vm._e()],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Rufw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_CreateToken_vue__ = __webpack_require__("Zwtj");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b75376ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateToken_vue__ = __webpack_require__("e1FK");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b75376ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateToken_vue__["a" /* default */],
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









var contractAddress = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "6de5afa19ca3e23987abccbe1a8498740c0fedd0" : "9aedd68bb2635995097627331b49c473136343cb";

var abiJson = JSON.parse('[{"constant": false, "inputs": [{"name": "new_j", "type": "address"} ], "name": "change_j", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getCuts", "outputs": [{"name": "BiffCutSetting", "type": "uint256"}, {"name": "JCutSetting", "type": "uint256"}, {"name": "PCutSetting", "type": "uint256"}, {"name": "NCutSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "approve", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"} ], "name": "feeTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_n", "type": "address"} ], "name": "change_n", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_buyTokensFrom", "outputs": [{"name": "numOfTokensPurchased", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_from", "type": "address"}, {"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transferFrom", "outputs": [{"name": "success", "type": "bool"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "_seller", "type": "address"} ], "name": "BIFP_whatsForSale", "outputs": [{"name": "numTokensBeingSold", "type": "uint256"}, {"name": "priceOfEachToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "get_j", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "lotteryID", "type": "string"} ], "name": "checkLotteryResults", "outputs": [{"name": "_player", "type": "address"}, {"name": "_lotteryType", "type": "uint8"}, {"name": "_playedAmount", "type": "uint256"}, {"name": "_luckyNumber", "type": "uint256"}, {"name": "_drawnNumber", "type": "uint256"}, {"name": "_win", "type": "bool"}, {"name": "_rewardAmount", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryPot", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getTokenLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "who", "type": "uint256"}, {"name": "fakeAmount", "type": "uint256"} ], "name": "BIFP_testFeeAndCuts", "outputs": [{"name": "feeCollected", "type": "uint256"}, {"name": "biffGot", "type": "uint256"}, {"name": "jGot", "type": "uint256"}, {"name": "pGot", "type": "uint256"}, {"name": "nGot", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "player", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "feeBalances", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_upForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "standard", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "b", "type": "uint256"}, {"name": "j", "type": "uint256"}, {"name": "p", "type": "uint256"}, {"name": "n", "type": "uint256"} ], "name": "BIFP_setFeeCuts", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "feeWithdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerIsOwnerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchTokenLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "tokensForSale", "outputs": [{"name": "numTokensForSale", "type": "uint256"}, {"name": "pricePerToken", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"} ], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [], "name": "confirmOwnershipTransfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "new_p", "type": "address"} ], "name": "change_p", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "potentialOwner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryFeeThreshold", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "prizeName", "type": "string"} ], "name": "getPrizeBalance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "BIFP_addToTokenPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getHtmlcoinLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "prizeName", "type": "string"}, {"name": "newAmount", "type": "uint256"} ], "name": "setPrizeBalance", "outputs": [{"name": "prizePrevBalance", "type": "uint256"}, {"name": "prizeNewBalance", "type": "uint256"} ], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setTokenLotteryPot", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_buyTokens", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": false, "inputs": [{"name": "_to", "type": "address"}, {"name": "_value", "type": "uint256"} ], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [], "name": "BIFP_addToHtmlPrize", "outputs": [{"name": "newBalance", "type": "uint256"} ], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [], "name": "BIFP_getFees", "outputs": [{"name": "feeOwnerSetting", "type": "uint256"}, {"name": "feeSellerSetting", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "uint256"} ], "name": "setHtmlcoinLotteryFeeThreshold", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "amount", "type": "uint256"} ], "name": "BIFP_loadUpForGrabs", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "f", "type": "uint256"} ], "name": "BIFP_setSellerFeePercent", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "value", "type": "bool"} ], "name": "switchHtmlcoinLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "htmlcoinLotteryOn", "outputs": [{"name": "", "type": "bool"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "tokenLotteryPot", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "get_n", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "playedAmount", "type": "uint256"}, {"name": "luckyNumber", "type": "uint256"}, {"name": "lotteryID", "type": "string"} ], "name": "BIFP_playLottery", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"} ], "name": "allowance", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "quantity", "type": "uint256"}, {"name": "htmlPrice", "type": "uint256"} ], "name": "BIFP_setSell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "get_p", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "newOwner", "type": "address"} ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"}, {"payable": true, "stateMutability": "payable", "type": "fallback"}, {"anonymous": false, "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {"indexed": true, "name": "_to", "type": "address"}, {"indexed": false, "name": "_value", "type": "uint256"} ], "name": "Transfer", "type": "event"} ]');
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userTokenBalance: '0',
      loading: false,
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
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
      bankPricePerToken: '',
      bankTokenQuantity: '',
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
    };
  },

  computed: {
    lotteryNotValid: function lotteryNotValid() {
      return !(/^[0-9]+$/.test(this.lotteryBet) && /^[0-9]+$/.test(this.lotteryLuckyNumber));
    },
    ufgNotValid: function ufgNotValid() {
      return !/^[0-9]+$/.test(this.upForGrabsBet);
    },
    sellNotValid: function sellNotValid() {
      return !(/^[0-9]+$/.test(this.sellPricePerToken) && /^[0-9]+$/.test(this.sellTokenQty));
    }
  },
  watch: {
    checkLotteryResults: function () {
      var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(val) {
        var decodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!val) {
                  _context.next = 29;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return this.callContractFunction(contractAddress, abiJson, 'checkLotteryResults', [this.lotteryID]);

              case 4:
                decodedResult = _context.sent;


                this.drawnNumber = decodedResult[4].toString();

                if (!(decodedResult[5].toString() == 'true')) {
                  _context.next = 20;
                  break;
                }

                this.lotteryRewardAmount = parseInt(decodedResult[6]) / 100000000;
                _context.t0 = decodedResult[1].toString();
                _context.next = _context.t0 === '1' ? 11 : _context.t0 === '2' ? 13 : _context.t0 === '3' ? 15 : 17;
                break;

              case 11:
                this.lotteryType = 'BIFP';
                return _context.abrupt('break', 17);

              case 13:
                this.lotteryType = 'HTML';
                return _context.abrupt('break', 17);

              case 15:
                this.lotteryType = 'UFG';
                return _context.abrupt('break', 17);

              case 17:

                this.lotteryWin = true;
                _context.next = 21;
                break;

              case 20:
                this.lotteryWin = false;

              case 21:

                this.checkLotteryResults = false;
                this.txLotteryConfirmed = true;

                _context.next = 29;
                break;

              case 25:
                _context.prev = 25;
                _context.t1 = _context['catch'](1);

                this.$root.log.error('call_contract_call_contract_error', _context.t1.stack || _context.t1.toString() || _context.t1);
                alert(_context.t1.message || _context.t1);

              case 29:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 25]]);
      }));

      function checkLotteryResults(_x) {
        return _ref.apply(this, arguments);
      }

      return checkLotteryResults;
    }()
  },
  methods: {
    closeDialog: function closeDialog() {
      this.txLotteryConfirmed = false;
      this.txLotteryReceiptDialog = false;
      this.txError = false;
      this.getData();
    },
    runLottery: function runLottery() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var playedAmount, encodedData, htmlcoinLowerFeeThreshold;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(parseInt(_this.userTokenBalance) >= parseInt(_this.lotteryBet))) {
                  _context2.next = 38;
                  break;
                }

                if (!(parseInt(_this.lotteryLuckyNumber) >= 0 && parseInt(_this.lotteryBet) > 0)) {
                  _context2.next = 35;
                  break;
                }

                if (!(parseInt(_this.lotteryBet) <= _this.tokenLotteryFeeThreshold && parseInt(_this.lotteryLuckyNumber) <= _this.tokenLotteryPot || parseInt(_this.lotteryBet) > _this.tokenLotteryFeeThreshold && parseInt(_this.lotteryBet) <= _this.htmlcoinLotteryFeeThreshold && parseInt(_this.lotteryLuckyNumber) <= _this.htmlcoinLotteryPot)) {
                  _context2.next = 31;
                  break;
                }

                _context2.prev = 3;


                _this.lotteryID = __WEBPACK_IMPORTED_MODULE_8_js_sha256___default()(_this.wallet.info.address + Date.now());

                playedAmount = _this.lotteryBet * 100000000;
                encodedData = _this.encodeContractSendFunction(abiJson, 'BIFP_playLottery', [playedAmount, _this.lotteryLuckyNumber, _this.lotteryID]);


                _this.confirmSendLotteryDialog = true;

                _context2.prev = 8;
                _context2.next = 11;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this.gasLimit, _this.gasPrice, _this.fee);

              case 11:
                _this.rawTx = _context2.sent;
                _context2.next = 20;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](8);

                _this.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this.confirmSendLotteryDialog = false;
                return _context2.abrupt('return', false);

              case 20:
                _this.canSend = true;
                _context2.next = 29;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t1 = _context2['catch'](3);

                _this.$root.error('Params error');
                _this.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this.confirmSendLotteryDialog = false;
                return _context2.abrupt('return', false);

              case 29:
                _context2.next = 33;
                break;

              case 31:
                htmlcoinLowerFeeThreshold = _this.tokenLotteryFeeThreshold + 1;


                alert('Wrong bet or lucky number!\n\nBIFP Lottery:\n  * Bets between 1 and ' + _this.tokenLotteryFeeThreshold + ' BIFP\n  * Lucky numbers between 0 and ' + _this.tokenLotteryPot + '\n\nHTMLCoin Lottery:\n  * Bets between ' + htmlcoinLowerFeeThreshold + ' and ' + _this.htmlcoinLotteryFeeThreshold + ' BIFP\n  * Lucky numbers between 0 and ' + _this.htmlcoinLotteryPot);

              case 33:
                _context2.next = 36;
                break;

              case 35:
                alert('Your bet must be higher than 0 and your lucky number must equal or higher than 0!');

              case 36:
                _context2.next = 39;
                break;

              case 38:
                alert('You do not have enough BIFP to play! Go get some!');

              case 39:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[3, 23], [8, 14]]);
      }))();
    },
    runUpForGrabs: function runUpForGrabs() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var playedAmount, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(parseInt(_this2.userTokenBalance) >= parseInt(_this2.upForGrabsBet))) {
                  _context3.next = 33;
                  break;
                }

                if (!(parseInt(_this2.upForGrabsBet) >= 0)) {
                  _context3.next = 30;
                  break;
                }

                _context3.prev = 2;


                _this2.lotteryID = __WEBPACK_IMPORTED_MODULE_8_js_sha256___default()(_this2.wallet.info.address + Date.now());

                playedAmount = _this2.upForGrabsBet * 100000000;
                encodedData = _this2.encodeContractSendFunction(abiJson, 'BIFP_upForGrabs', [playedAmount, _this2.lotteryID]);


                _this2.confirmSendLotteryDialog = true;

                _context3.prev = 7;
                _context3.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this2.gasLimit, _this2.gasPrice, _this2.fee);

              case 10:
                _this2.rawTx = _context3.sent;
                _context3.next = 19;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3['catch'](7);

                _this2.$root.log.error('send_to_generate_tx_error', _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                alert(_context3.t0.message || _context3.t0);
                _this2.confirmSendLotteryDialog = false;
                return _context3.abrupt('return', false);

              case 19:
                _this2.canSend = true;
                _context3.next = 28;
                break;

              case 22:
                _context3.prev = 22;
                _context3.t1 = _context3['catch'](2);

                _this2.$root.error('Params error');
                _this2.$root.log.error('send_to_contract_encode_abi_error', _context3.t1.stack || _context3.t1.toString() || _context3.t1);
                _this2.confirmSendLotteryDialog = false;
                return _context3.abrupt('return', false);

              case 28:
                _context3.next = 31;
                break;

              case 30:
                alert('The amount played must be higher than 0 BIFP!');

              case 31:
                _context3.next = 34;
                break;

              case 33:
                alert('You do not have enough BIFP to play! Go get some!');

              case 34:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[2, 22], [7, 13]]);
      }))();
    },
    confirmSendLottery: function confirmSendLottery() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var txId, txViewUrl, apiURL, interval;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:

                _this3.sending = true;
                _context4.prev = 1;
                _context4.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this3.rawTx);

              case 4:
                txId = _context4.sent;

                _this3.confirmSendLotteryDialog = false;
                _this3.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this3.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);
                _this3.$emit('send');

                _this3.txLotteryReceiptDialog = true;
                _this3.awaitingLotteryTx = true;

                apiURL = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? 'https://explorer.htmlcoin.com/api/tx/' : 'https://testnet.htmlcoin.com/api/tx/';
                interval = setInterval(function () {

                  __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(apiURL + txId).then(function (result) {
                    console.log('Checking Tx...');

                    if (result.data.confirmations > 0) {
                      clearInterval(interval);
                      _this3.awaitingLotteryTx = false;

                      if (result.data.receipt[0].excepted != 'None') {
                        _this3.txError = true;
                      } else {
                        _this3.checkLotteryResults = true;
                      }
                    }
                  }).catch(console.error);
                }, 15 * 1000);
                _context4.next = 21;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4['catch'](1);

                alert(_context4.t0.message || _context4.t0);
                _this3.$root.log.error('send_to_contract_post_raw_tx_error', _context4.t0.response || _context4.t0.stack || _context4.t0.toString() || _context4.t0);
                _this3.confirmSendLotteryDialog = false;

              case 21:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this3, [[1, 16]]);
      }))();
    },
    setSell: function setSell() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var sellQtyPrecision, sellPricePrecision, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(parseInt(_this4.userTokenBalance) >= parseInt(_this4.sellTokenQty))) {
                  _context5.next = 33;
                  break;
                }

                if (!(parseInt(_this4.sellTokenQty) >= 0)) {
                  _context5.next = 30;
                  break;
                }

                _context5.prev = 2;

                // Bringing the numbers to the precision used by the Smart Contract
                sellQtyPrecision = parseInt(_this4.sellTokenQty) * 100000000;
                sellPricePrecision = parseInt(_this4.sellPricePerToken) * 100000000;
                encodedData = _this4.encodeContractSendFunction(abiJson, 'BIFP_setSell', [sellQtyPrecision, sellPricePrecision]);


                _this4.confirmSendDialog = true;

                _context5.prev = 7;
                _context5.next = 10;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this4.gasLimit, _this4.gasPrice, _this4.fee);

              case 10:
                _this4.rawTx = _context5.sent;
                _context5.next = 19;
                break;

              case 13:
                _context5.prev = 13;
                _context5.t0 = _context5['catch'](7);

                _this4.$root.log.error('send_to_generate_tx_error', _context5.t0.stack || _context5.t0.toString() || _context5.t0);
                alert(_context5.t0.message || _context5.t0);
                _this4.confirmSendDialog = false;
                return _context5.abrupt('return', false);

              case 19:
                _this4.canSend = true;
                _context5.next = 28;
                break;

              case 22:
                _context5.prev = 22;
                _context5.t1 = _context5['catch'](2);

                _this4.$root.error('Params error');
                _this4.$root.log.error('send_to_contract_encode_abi_error', _context5.t1.stack || _context5.t1.toString() || _context5.t1);
                _this4.confirmSendDialog = false;
                return _context5.abrupt('return', false);

              case 28:
                _context5.next = 31;
                break;

              case 30:
                alert('The quantity must be higher than 0 BIFP!');

              case 31:
                _context5.next = 34;
                break;

              case 33:
                alert('You do not have enough BIFP to sell! Go get some!');

              case 34:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this4, [[2, 22], [7, 13]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var txId, txViewUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:

                _this5.sending = true;
                _context6.prev = 1;
                _context6.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this5.rawTx);

              case 4:
                txId = _context6.sent;

                _this5.confirmSendDialog = false;
                _this5.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this5.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);

                _context6.next = 16;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6['catch'](1);

                alert(_context6.t0.message || _context6.t0);
                _this5.$root.log.error('send_to_contract_post_raw_tx_error', _context6.t0.response || _context6.t0.stack || _context6.t0.toString() || _context6.t0);
                _this5.confirmSendDialog = false;

              case 16:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this5, [[1, 11]]);
      }))();
    },
    getData: function getData() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var decodedResult, i;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _this6.loading = true;

                _context7.prev = 1;
                _context7.next = 4;
                return _this6.callContractFunction(contractAddress, abiJson, 'tokenLotteryOn', []);

              case 4:
                decodedResult = _context7.sent;


                decodedResult[0].toString() == 'true' ? _this6.tokenLotteryStatus = 'On' : _this6.tokenLotteryStatus = 'Off';

                _context7.next = 8;
                return _this6.callContractFunction(contractAddress, abiJson, 'htmlcoinLotteryOn', []);

              case 8:
                decodedResult = _context7.sent;


                decodedResult[0].toString() == 'true' ? _this6.htmlcoinLotteryStatus = 'On' : _this6.htmlcoinLotteryStatus = 'Off';

                _context7.next = 12;
                return _this6.callContractFunction(contractAddress, abiJson, 'getPrizeBalance', ['tokenLottery']);

              case 12:
                decodedResult = _context7.sent;


                _this6.tokenLotteryPrize = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 16;
                return _this6.callContractFunction(contractAddress, abiJson, 'getPrizeBalance', ['htmlcoinLottery']);

              case 16:
                decodedResult = _context7.sent;


                _this6.htmlcoinLotteryPrize = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 20;
                return _this6.callContractFunction(contractAddress, abiJson, 'getTokenLotteryFeeThreshold', []);

              case 20:
                decodedResult = _context7.sent;


                _this6.tokenLotteryFeeThreshold = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 24;
                return _this6.callContractFunction(contractAddress, abiJson, 'getHtmlcoinLotteryFeeThreshold', []);

              case 24:
                decodedResult = _context7.sent;


                _this6.htmlcoinLotteryFeeThreshold = parseInt(decodedResult[0]) / 100000000;

                _context7.next = 28;
                return _this6.callContractFunction(contractAddress, abiJson, 'getTokenLotteryPot', []);

              case 28:
                decodedResult = _context7.sent;


                _this6.tokenLotteryPot = parseInt(decodedResult[0]);

                _context7.next = 32;
                return _this6.callContractFunction(contractAddress, abiJson, 'getHtmlcoinLotteryPot', []);

              case 32:
                decodedResult = _context7.sent;


                _this6.htmlcoinLotteryPot = parseInt(decodedResult[0]);

                _context7.next = 36;
                return _this6.callContractFunction(contractAddress, abiJson, 'BIFP_whatsForSale', ['0x750db5c622d07fbbb9fd0129a322e810d12e5ca6']);

              case 36:
                decodedResult = _context7.sent;


                _this6.bankTokenQuantity = parseInt(decodedResult[0]) / 100000000;
                _this6.bankPricePerToken = parseInt(decodedResult[1]) / 100000000;

                for (i = 0; i < _this6.wallet.info.hrc20.length; i++) {
                  if (_this6.wallet.info.hrc20[i].contract.contract_address == contractAddress) {
                    _this6.userTokenBalance = parseInt(_this6.wallet.info.hrc20[i].amount) / 100000000;
                  }
                }

                _context7.next = 47;
                break;

              case 42:
                _context7.prev = 42;
                _context7.t0 = _context7['catch'](1);

                _this6.loading = false;
                _this6.$root.log.error('call_contract_call_contract_error', _context7.t0.stack || _context7.t0.toString() || _context7.t0);
                alert(_context7.t0.message || _context7.t0);

              case 47:

                _this6.loading = false;

              case 48:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this6, [[1, 42]]);
      }))();
    },
    findIndexByName: function findIndexByName(abiJson, name) {
      return abiJson.findIndex(function (item) {
        return item.name === name;
      });
    },
    callContractFunction: function callContractFunction(contractAddress, abiJson, functionName, params) {
      var _this7 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee8() {
        var encodedData, encodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[_this7.findIndexByName(abiJson, functionName)], params).substr(2);
                _context8.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(contractAddress, encodedData);

              case 3:
                encodedResult = _context8.sent;

                encodedResult = '0x' + encodedResult;

                return _context8.abrupt('return', __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.decodeMethod(abiJson[_this7.findIndexByName(abiJson, functionName)], encodedResult));

              case 6:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, _this7);
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

  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "S96s":
/***/ (function(module, exports) {

module.exports = ["的","一","是","在","不","了","有","和","人","这","中","大","为","上","个","国","我","以","要","他","时","来","用","们","生","到","作","地","于","出","就","分","对","成","会","可","主","发","年","动","同","工","也","能","下","过","子","说","产","种","面","而","方","后","多","定","行","学","法","所","民","得","经","十","三","之","进","着","等","部","度","家","电","力","里","如","水","化","高","自","二","理","起","小","物","现","实","加","量","都","两","体","制","机","当","使","点","从","业","本","去","把","性","好","应","开","它","合","还","因","由","其","些","然","前","外","天","政","四","日","那","社","义","事","平","形","相","全","表","间","样","与","关","各","重","新","线","内","数","正","心","反","你","明","看","原","又","么","利","比","或","但","质","气","第","向","道","命","此","变","条","只","没","结","解","问","意","建","月","公","无","系","军","很","情","者","最","立","代","想","已","通","并","提","直","题","党","程","展","五","果","料","象","员","革","位","入","常","文","总","次","品","式","活","设","及","管","特","件","长","求","老","头","基","资","边","流","路","级","少","图","山","统","接","知","较","将","组","见","计","别","她","手","角","期","根","论","运","农","指","几","九","区","强","放","决","西","被","干","做","必","战","先","回","则","任","取","据","处","队","南","给","色","光","门","即","保","治","北","造","百","规","热","领","七","海","口","东","导","器","压","志","世","金","增","争","济","阶","油","思","术","极","交","受","联","什","认","六","共","权","收","证","改","清","美","再","采","转","更","单","风","切","打","白","教","速","花","带","安","场","身","车","例","真","务","具","万","每","目","至","达","走","积","示","议","声","报","斗","完","类","八","离","华","名","确","才","科","张","信","马","节","话","米","整","空","元","况","今","集","温","传","土","许","步","群","广","石","记","需","段","研","界","拉","林","律","叫","且","究","观","越","织","装","影","算","低","持","音","众","书","布","复","容","儿","须","际","商","非","验","连","断","深","难","近","矿","千","周","委","素","技","备","半","办","青","省","列","习","响","约","支","般","史","感","劳","便","团","往","酸","历","市","克","何","除","消","构","府","称","太","准","精","值","号","率","族","维","划","选","标","写","存","候","毛","亲","快","效","斯","院","查","江","型","眼","王","按","格","养","易","置","派","层","片","始","却","专","状","育","厂","京","识","适","属","圆","包","火","住","调","满","县","局","照","参","红","细","引","听","该","铁","价","严","首","底","液","官","德","随","病","苏","失","尔","死","讲","配","女","黄","推","显","谈","罪","神","艺","呢","席","含","企","望","密","批","营","项","防","举","球","英","氧","势","告","李","台","落","木","帮","轮","破","亚","师","围","注","远","字","材","排","供","河","态","封","另","施","减","树","溶","怎","止","案","言","士","均","武","固","叶","鱼","波","视","仅","费","紧","爱","左","章","早","朝","害","续","轻","服","试","食","充","兵","源","判","护","司","足","某","练","差","致","板","田","降","黑","犯","负","击","范","继","兴","似","余","坚","曲","输","修","故","城","夫","够","送","笔","船","占","右","财","吃","富","春","职","觉","汉","画","功","巴","跟","虽","杂","飞","检","吸","助","升","阳","互","初","创","抗","考","投","坏","策","古","径","换","未","跑","留","钢","曾","端","责","站","简","述","钱","副","尽","帝","射","草","冲","承","独","令","限","阿","宣","环","双","请","超","微","让","控","州","良","轴","找","否","纪","益","依","优","顶","础","载","倒","房","突","坐","粉","敌","略","客","袁","冷","胜","绝","析","块","剂","测","丝","协","诉","念","陈","仍","罗","盐","友","洋","错","苦","夜","刑","移","频","逐","靠","混","母","短","皮","终","聚","汽","村","云","哪","既","距","卫","停","烈","央","察","烧","迅","境","若","印","洲","刻","括","激","孔","搞","甚","室","待","核","校","散","侵","吧","甲","游","久","菜","味","旧","模","湖","货","损","预","阻","毫","普","稳","乙","妈","植","息","扩","银","语","挥","酒","守","拿","序","纸","医","缺","雨","吗","针","刘","啊","急","唱","误","训","愿","审","附","获","茶","鲜","粮","斤","孩","脱","硫","肥","善","龙","演","父","渐","血","欢","械","掌","歌","沙","刚","攻","谓","盾","讨","晚","粒","乱","燃","矛","乎","杀","药","宁","鲁","贵","钟","煤","读","班","伯","香","介","迫","句","丰","培","握","兰","担","弦","蛋","沉","假","穿","执","答","乐","谁","顺","烟","缩","征","脸","喜","松","脚","困","异","免","背","星","福","买","染","井","概","慢","怕","磁","倍","祖","皇","促","静","补","评","翻","肉","践","尼","衣","宽","扬","棉","希","伤","操","垂","秋","宜","氢","套","督","振","架","亮","末","宪","庆","编","牛","触","映","雷","销","诗","座","居","抓","裂","胞","呼","娘","景","威","绿","晶","厚","盟","衡","鸡","孙","延","危","胶","屋","乡","临","陆","顾","掉","呀","灯","岁","措","束","耐","剧","玉","赵","跳","哥","季","课","凯","胡","额","款","绍","卷","齐","伟","蒸","殖","永","宗","苗","川","炉","岩","弱","零","杨","奏","沿","露","杆","探","滑","镇","饭","浓","航","怀","赶","库","夺","伊","灵","税","途","灭","赛","归","召","鼓","播","盘","裁","险","康","唯","录","菌","纯","借","糖","盖","横","符","私","努","堂","域","枪","润","幅","哈","竟","熟","虫","泽","脑","壤","碳","欧","遍","侧","寨","敢","彻","虑","斜","薄","庭","纳","弹","饲","伸","折","麦","湿","暗","荷","瓦","塞","床","筑","恶","户","访","塔","奇","透","梁","刀","旋","迹","卡","氯","遇","份","毒","泥","退","洗","摆","灰","彩","卖","耗","夏","择","忙","铜","献","硬","予","繁","圈","雪","函","亦","抽","篇","阵","阴","丁","尺","追","堆","雄","迎","泛","爸","楼","避","谋","吨","野","猪","旗","累","偏","典","馆","索","秦","脂","潮","爷","豆","忽","托","惊","塑","遗","愈","朱","替","纤","粗","倾","尚","痛","楚","谢","奋","购","磨","君","池","旁","碎","骨","监","捕","弟","暴","割","贯","殊","释","词","亡","壁","顿","宝","午","尘","闻","揭","炮","残","冬","桥","妇","警","综","招","吴","付","浮","遭","徐","您","摇","谷","赞","箱","隔","订","男","吹","园","纷","唐","败","宋","玻","巨","耕","坦","荣","闭","湾","键","凡","驻","锅","救","恩","剥","凝","碱","齿","截","炼","麻","纺","禁","废","盛","版","缓","净","睛","昌","婚","涉","筒","嘴","插","岸","朗","庄","街","藏","姑","贸","腐","奴","啦","惯","乘","伙","恢","匀","纱","扎","辩","耳","彪","臣","亿","璃","抵","脉","秀","萨","俄","网","舞","店","喷","纵","寸","汗","挂","洪","贺","闪","柬","爆","烯","津","稻","墙","软","勇","像","滚","厘","蒙","芳","肯","坡","柱","荡","腿","仪","旅","尾","轧","冰","贡","登","黎","削","钻","勒","逃","障","氨","郭","峰","币","港","伏","轨","亩","毕","擦","莫","刺","浪","秘","援","株","健","售","股","岛","甘","泡","睡","童","铸","汤","阀","休","汇","舍","牧","绕","炸","哲","磷","绩","朋","淡","尖","启","陷","柴","呈","徒","颜","泪","稍","忘","泵","蓝","拖","洞","授","镜","辛","壮","锋","贫","虚","弯","摩","泰","幼","廷","尊","窗","纲","弄","隶","疑","氏","宫","姐","震","瑞","怪","尤","琴","循","描","膜","违","夹","腰","缘","珠","穷","森","枝","竹","沟","催","绳","忆","邦","剩","幸","浆","栏","拥","牙","贮","礼","滤","钠","纹","罢","拍","咱","喊","袖","埃","勤","罚","焦","潜","伍","墨","欲","缝","姓","刊","饱","仿","奖","铝","鬼","丽","跨","默","挖","链","扫","喝","袋","炭","污","幕","诸","弧","励","梅","奶","洁","灾","舟","鉴","苯","讼","抱","毁","懂","寒","智","埔","寄","届","跃","渡","挑","丹","艰","贝","碰","拔","爹","戴","码","梦","芽","熔","赤","渔","哭","敬","颗","奔","铅","仲","虎","稀","妹","乏","珍","申","桌","遵","允","隆","螺","仓","魏","锐","晓","氮","兼","隐","碍","赫","拨","忠","肃","缸","牵","抢","博","巧","壳","兄","杜","讯","诚","碧","祥","柯","页","巡","矩","悲","灌","龄","伦","票","寻","桂","铺","圣","恐","恰","郑","趣","抬","荒","腾","贴","柔","滴","猛","阔","辆","妻","填","撤","储","签","闹","扰","紫","砂","递","戏","吊","陶","伐","喂","疗","瓶","婆","抚","臂","摸","忍","虾","蜡","邻","胸","巩","挤","偶","弃","槽","劲","乳","邓","吉","仁","烂","砖","租","乌","舰","伴","瓜","浅","丙","暂","燥","橡","柳","迷","暖","牌","秧","胆","详","簧","踏","瓷","谱","呆","宾","糊","洛","辉","愤","竞","隙","怒","粘","乃","绪","肩","籍","敏","涂","熙","皆","侦","悬","掘","享","纠","醒","狂","锁","淀","恨","牲","霸","爬","赏","逆","玩","陵","祝","秒","浙","貌","役","彼","悉","鸭","趋","凤","晨","畜","辈","秩","卵","署","梯","炎","滩","棋","驱","筛","峡","冒","啥","寿","译","浸","泉","帽","迟","硅","疆","贷","漏","稿","冠","嫩","胁","芯","牢","叛","蚀","奥","鸣","岭","羊","凭","串","塘","绘","酵","融","盆","锡","庙","筹","冻","辅","摄","袭","筋","拒","僚","旱","钾","鸟","漆","沈","眉","疏","添","棒","穗","硝","韩","逼","扭","侨","凉","挺","碗","栽","炒","杯","患","馏","劝","豪","辽","勃","鸿","旦","吏","拜","狗","埋","辊","掩","饮","搬","骂","辞","勾","扣","估","蒋","绒","雾","丈","朵","姆","拟","宇","辑","陕","雕","偿","蓄","崇","剪","倡","厅","咬","驶","薯","刷","斥","番","赋","奉","佛","浇","漫","曼","扇","钙","桃","扶","仔","返","俗","亏","腔","鞋","棱","覆","框","悄","叔","撞","骗","勘","旺","沸","孤","吐","孟","渠","屈","疾","妙","惜","仰","狠","胀","谐","抛","霉","桑","岗","嘛","衰","盗","渗","脏","赖","涌","甜","曹","阅","肌","哩","厉","烃","纬","毅","昨","伪","症","煮","叹","钉","搭","茎","笼","酷","偷","弓","锥","恒","杰","坑","鼻","翼","纶","叙","狱","逮","罐","络","棚","抑","膨","蔬","寺","骤","穆","冶","枯","册","尸","凸","绅","坯","牺","焰","轰","欣","晋","瘦","御","锭","锦","丧","旬","锻","垄","搜","扑","邀","亭","酯","迈","舒","脆","酶","闲","忧","酚","顽","羽","涨","卸","仗","陪","辟","惩","杭","姚","肚","捉","飘","漂","昆","欺","吾","郎","烷","汁","呵","饰","萧","雅","邮","迁","燕","撒","姻","赴","宴","烦","债","帐","斑","铃","旨","醇","董","饼","雏","姿","拌","傅","腹","妥","揉","贤","拆","歪","葡","胺","丢","浩","徽","昂","垫","挡","览","贪","慰","缴","汪","慌","冯","诺","姜","谊","凶","劣","诬","耀","昏","躺","盈","骑","乔","溪","丛","卢","抹","闷","咨","刮","驾","缆","悟","摘","铒","掷","颇","幻","柄","惠","惨","佳","仇","腊","窝","涤","剑","瞧","堡","泼","葱","罩","霍","捞","胎","苍","滨","俩","捅","湘","砍","霞","邵","萄","疯","淮","遂","熊","粪","烘","宿","档","戈","驳","嫂","裕","徙","箭","捐","肠","撑","晒","辨","殿","莲","摊","搅","酱","屏","疫","哀","蔡","堵","沫","皱","畅","叠","阁","莱","敲","辖","钩","痕","坝","巷","饿","祸","丘","玄","溜","曰","逻","彭","尝","卿","妨","艇","吞","韦","怨","矮","歇"]

/***/ }),

/***/ "SDtE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',{staticClass:"justify-center",attrs:{"primary-title":""}},[_c('div',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("account_balance_wallet")]),_vm._v("\n        "+_vm._s(_vm.$t('create.title'))+"\n      ")],1),_vm._v(" "),_c('center',[_c('span',{staticClass:"subheading grey--text"},[_vm._v("Please click on the button below")])])],1)]),_vm._v(" "),(_vm.step === 2)?_c('v-card-text',[_c('center',[_c('span',{staticClass:"subheading red--text"},[_c('b',[_vm._v(_vm._s(_vm.$t('dump_as_key_file.warning')))])])]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),(_vm.fileStr)?_c('file-creator',{attrs:{"color":"info","href":_vm.fileStr},on:{"click":_vm.dumpDone}}):_vm._e(),_vm._v(" "),_c('password',{attrs:{"open":_vm.passwordRequired,"notEmpty":"true","title":"dump_as_key_file.password_title"},on:{"password":_vm.setPassword}})],1):_vm._e(),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.step === 1)?_c('v-btn',{attrs:{"color":"error","dark":""},on:{"click":_vm.createWallet}},[_vm._t("default",[_c('v-icon',[_vm._v("fiber_new")])])],2):_vm._e(),_vm._v(" "),_c('v-spacer')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "SQ7E":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "T/Vc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__ = __webpack_require__("MhUS");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd13b3bc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__ = __webpack_require__("SDtE");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd13b3bc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dd8f3e38_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreWif_vue__ = __webpack_require__("1sMk");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dd8f3e38_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreWif_vue__["a" /* default */],
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

/***/ "Uv+A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("call_made")]),_vm._v("\n        "+_vm._s(_vm.$t('send.send_tokens'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Address","outline":"","background-color":"blue lighten-1","required":""},model:{value:(_vm.address),callback:function ($$v) {_vm.address=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"address"}}),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs9":""}},[_c('v-text-field',{attrs:{"label":"Amount","outline":"","background-color":"blue lighten-1","required":""},model:{value:(_vm.amount),callback:function ($$v) {_vm.amount=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"amount"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-select',{attrs:{"items":_vm.tokens,"outline":"","background-color":"blue lighten-1","single-line":""},scopedSlots:_vm._u([{key:"item",fn:function(data){return [_c('v-list-tile-content',[_c('v-list-tile-title',[_vm._v("\n                 "+_vm._s(data.item.text)+_vm._s(data.item.name ? '(' + data.item.name + ')' : '')+"\n                ")]),_vm._v(" "),_c('v-list-tile-sub-title',[_vm._v("\n                 "+_vm._s(data.item.address)+"\n               ")])],1)]}}]),model:{value:(_vm.symbol),callback:function ($$v) {_vm.symbol=$$v},expression:"symbol"}})],1)],1),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","background-color":"indigo darken-4","outline":""},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=$$v},expression:"gasPrice"}}):_vm._e(),_vm._v(" "),(_vm.symbol !== 'HTML')?_c('v-text-field',{attrs:{"label":"Gas Limit","background-color":"indigo darken-4","outline":""},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=$$v},expression:"gasLimit"}}):_vm._e(),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Fee","outline":"","background-color":"indigo darken-4","required":""},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmAddressDialog),callback:function ($$v) {_vm.confirmAddressDialog=$$v},expression:"confirmAddressDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t('send.enter_address')))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"Address","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.repeatAddress),callback:function ($$v) {_vm.repeatAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"repeatAddress"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddress}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.confirmAddressDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))])],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send.going_to_send'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.amount)+_vm._s(this.symbol))]),_vm._v("\n          "+_vm._s(_vm.$t('send.to_address'))+"\n          "),_c('v-chip',{attrs:{"label":""}},[_vm._v(_vm._s(this.address))]),_vm._v("\n          "+_vm._s(_vm.$t('common.question_mark'))+"\n        ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.addTokenDialog),callback:function ($$v) {_vm.addTokenDialog=$$v},expression:"addTokenDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          Token\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":_vm.$t('send.token_address'),"disabled":_vm.addTokenStep === 2},model:{value:(_vm.addTokenAddress),callback:function ($$v) {_vm.addTokenAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenAddress"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Name","disabled":""},model:{value:(_vm.addTokenName),callback:function ($$v) {_vm.addTokenName=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenName"}}):_vm._e()],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(_vm.addTokenStep === 2)?_c('v-text-field',{attrs:{"label":"Symbol","disabled":""},model:{value:(_vm.addTokenSymbol),callback:function ($$v) {_vm.addTokenSymbol=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"addTokenSymbol"}}):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),(_vm.addTokenStep === 1)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":"","loading":_vm.addTokenLoading},on:{"click":_vm.searchAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.search'))+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.addTokenStep === 2)?_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmAddToken}},[_vm._v("\n          "+_vm._s(_vm.$t('common.confirm'))+"\n        ")]):_vm._e(),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.addTokenDialog = false}}},[_vm._v("\n          "+_vm._s(_vm.$t('common.cancel'))+"\n        ")]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Uzv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_DumpKeyFile_vue__ = __webpack_require__("K5Bm");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_723d073c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DumpKeyFile_vue__ = __webpack_require__("7KTf");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_723d073c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DumpKeyFile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "VZfT":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Vncl":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "Vw+u":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

module.exports = "data:image/png;base64,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"

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

/***/ "a4SW":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "aR/i":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "awp0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('center',[_c('p',[_c('span',{staticClass:"subheading"},[_vm._v("\n        "+_vm._s(_vm.$t('file_creator.download'))+"\n      ")])]),_vm._v(" "),_c('p',[_c('v-btn',{attrs:{"color":_vm.color,"download":_vm.downloadName,"href":_vm.href,"target":"_blank"},on:{"click":_vm.doneClick}},[_vm._t("default",[_c('v-icon',[_vm._v("\n            cloud_download\n          ")])])],2)],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ayyg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SendToContract_vue__ = __webpack_require__("6dsK");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b5286efc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendToContract_vue__ = __webpack_require__("2Kgr");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b5286efc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SendToContract_vue__["a" /* default */],
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
//
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55a05397_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mnemonic_vue__ = __webpack_require__("n3br");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_55a05397_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Mnemonic_vue__["a" /* default */],
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

/***/ "ddj7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',[_c('v-flex',{attrs:{"align-center":"","text-xs-center":""}},[_c('v-btn',{attrs:{"dark":"","color":_vm.color},on:{"click":_vm.clickBtn}},[_vm._t("default",[_c('v-icon',[_vm._v("vpn_key")])]),_vm._v(" "),_c('input',{ref:"input",staticStyle:{"display":"none"},attrs:{"type":"file"},on:{"change":_vm.handleFiles}})],2)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "e1FK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("gaNr")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"green"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Info\n        "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        New Token\n        "),_c('v-icon',[_vm._v("local_florist")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("Welcome to TokenFarm!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                  This application allows you to create your own HRC-20 Token on "),_c('b',[_vm._v("AltHash")]),_vm._v(" blockchain, in just a few seconds!\n                  "),_c('br'),_c('br'),_vm._v("\n                  To create a new Token, just click on \"New Token\" menu item, and fill in the details.\n                  "),_c('br'),_c('br'),_vm._v("\n\t\t  After the Transaction is confirmed, you will be able to find your token on the \"View Wallet Info\" option in \"Wallet Functions\" menu. You might need to refresh the browser and re-import your wallet before seeing your Tokens.\n                  "),_c('br'),_c('br')])])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":this.$t('create_token.name'),"required":"","box":""},model:{value:(_vm.name),callback:function ($$v) {_vm.name=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"name"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('create_token.symbol'),"required":"","box":""},model:{value:(_vm.symbol),callback:function ($$v) {_vm.symbol=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"symbol"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('create_token.decimal'),"required":"","box":""},model:{value:(_vm.decimal),callback:function ($$v) {_vm.decimal=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"decimal"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":_vm.$t('create_token.total_supply'),"required":"","box":""},model:{value:(_vm.totalSupply),callback:function ($$v) {_vm.totalSupply=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"totalSupply"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","box":"","background-color":"indigo lighten-3"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","box":"","background-color":"indigo lighten-3"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","box":"","background-color":"indigo lighten-3"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n                      "+_vm._s(_vm.$t('create_token.confirm'))+"\n                    ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ehEc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":"","grid-list-lg":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs10":"","offset-xs1":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":"","fill-height":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('card',[_c('span',{staticClass:"subheading"},[_c('p',[_vm._v("\n                We are a hybrid blockchain that joins "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://en.wikipedia.org/wiki/Bitcoin","target":"_blank"}},[_vm._v("Bitcoin")]),_vm._v(" protocols and the "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://medium.com/mycrypto/the-ethereum-virtual-machine-how-does-it-work-9abac2b7c9e","target":"_blank"}},[_vm._v("Ethereum EVM")]),_vm._v(".\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Althash's cryptocurrency is "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://htmlcoin.com","target":"_blank"}},[_c('b',[_vm._v("HTMLCOIN"),_c('b')])]),_vm._v(", which is used as "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://blockgeeks.com/guides/ethereum-gas-step-by-step-guide/","target":"_blank"}},[_vm._v("gas")]),_vm._v(" for all "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":"https://blockgeeks.com/guides/smart-contracts/","target":"_blank"}},[_vm._v("smart contract")]),_vm._v(" transactions.\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                This page is a hub for decentralized applications (DApps) deployed on Althash Blockchain.\n              ")])])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"indigo","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n              ALTHASH SUITE\n            ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("lXzv")},on:{"click":function($event){_vm.openURL('https://health.althash.org')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"light-blue darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n              ALTHASH DAPP\n            ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("RLpJ")},on:{"click":function($event){_vm.openDapp('dapp_myoffspring')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"light-blue darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n              ALTHASH DAPP\n            ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("gaNr")},on:{"click":function($event){_vm.openDapp('create_token')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"light-blue darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n              ALTHASH DAPP\n            ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("Vncl")},on:{"click":function($event){_vm.openDapp('dapp_altproof')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"cyan darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n              COMMUNITY DAPP\n            ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("wOSG")},on:{"click":function($event){_vm.openDapp('dapp_crypticmag')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"cyan darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n              COMMUNITY DAPP\n            ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("gfSB")},on:{"click":function($event){_vm.openDapp('dapp_biffyplutonium')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-toolbar',{attrs:{"color":"cyan darken-1","dark":"","height":"30px"}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"font-weight-light text-no-wrap"},[_vm._v("\n              COMMUNITY DAPP\n            ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-card',[_c('img',{staticClass:"cursor dappImg",attrs:{"src":__webpack_require__("+LNh")},on:{"click":function($event){_vm.openDapp('dapp_photizo')}}})])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}}),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"body-2 grey--text"},[_vm._v("\n            If you want to publish your project on this space, please reach us through the e-mail "),_c('b',[_vm._v("feedback@althash.org")]),_vm._v(".\n          ")])])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ejIc":
/***/ (function(module, exports) {

module.exports = {"sha224WithRSAEncryption":{"sign":"rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"RSA-SHA224":{"sign":"ecdsa/rsa","hash":"sha224","id":"302d300d06096086480165030402040500041c"},"sha256WithRSAEncryption":{"sign":"rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"RSA-SHA256":{"sign":"ecdsa/rsa","hash":"sha256","id":"3031300d060960864801650304020105000420"},"sha384WithRSAEncryption":{"sign":"rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"RSA-SHA384":{"sign":"ecdsa/rsa","hash":"sha384","id":"3041300d060960864801650304020205000430"},"sha512WithRSAEncryption":{"sign":"rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA512":{"sign":"ecdsa/rsa","hash":"sha512","id":"3051300d060960864801650304020305000440"},"RSA-SHA1":{"sign":"rsa","hash":"sha1","id":"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{"sign":"ecdsa","hash":"sha1","id":""},"sha256":{"sign":"ecdsa","hash":"sha256","id":""},"sha224":{"sign":"ecdsa","hash":"sha224","id":""},"sha384":{"sign":"ecdsa","hash":"sha384","id":""},"sha512":{"sign":"ecdsa","hash":"sha512","id":""},"DSA-SHA":{"sign":"dsa","hash":"sha1","id":""},"DSA-SHA1":{"sign":"dsa","hash":"sha1","id":""},"DSA":{"sign":"dsa","hash":"sha1","id":""},"DSA-WITH-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-SHA224":{"sign":"dsa","hash":"sha224","id":""},"DSA-WITH-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-SHA256":{"sign":"dsa","hash":"sha256","id":""},"DSA-WITH-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-SHA384":{"sign":"dsa","hash":"sha384","id":""},"DSA-WITH-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-SHA512":{"sign":"dsa","hash":"sha512","id":""},"DSA-RIPEMD160":{"sign":"dsa","hash":"rmd160","id":""},"ripemd160WithRSA":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"RSA-RIPEMD160":{"sign":"rsa","hash":"rmd160","id":"3021300906052b2403020105000414"},"md5WithRSAEncryption":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"},"RSA-MD5":{"sign":"rsa","hash":"md5","id":"3020300c06082a864886f70d020505000410"}}

/***/ }),

/***/ "f3ZB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("RCWu")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"blue darken-4"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Info\n      "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Quiz\n      "),_c('v-icon',[_vm._v("library_books")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('span',{staticClass:"display-1"},[_vm._v("Welcome to the Light Project.")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    Photizo is an app focused on spreading bible knowledge amongst the wide crypto community.\n                    "),_c('br'),_c('br'),_vm._v("\n                    While answering general questions in our quiz, you will be able to gather Photizo Tokens (PHO) that will allow you to contribute to important charity projects around the globe. PHO tokens will be accepted by companies and converted into donations.\n                    "),_c('br'),_c('br'),_vm._v("\n                    Thank you for being part of our great project of bringing a higher meaning to the crypto space.\n                    "),_c('br'),_c('br'),_c('br'),_c('br'),_vm._v(" "),_c('small',[_c('b',[_vm._v("Disclaimer")]),_vm._v(" "),_c('br'),_vm._v("\n                      HTMLCoin Foundation has reviewed and approved this application's code, having Althash Web Platform as a proud host, however the Foundation is not responsible for any funds transacted within this application scope.\n                      "),_c('br'),_vm._v("\n                      By using this application you agree on these terms.\n                    ")])]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-container',{attrs:{"fluid":"","grid-list-lg":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[(this.currentStep == -1)?_c('v-flex',{attrs:{"xs12":""}},[_c('p',{staticClass:"title"},[_vm._v("\n                  Questions are randomically picked, in sets of 5, from our Smart Contract in the Althash Blockchain.\n                  "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n                  After answering the 5 questions, your answers will be processed and the tokens distributed/charged.\n                ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-card',{staticClass:"white--text subheader",attrs:{"color":"blue-grey darken-2","raised":""}},[_c('v-card-text',[_c('p',[_vm._v("\n                      Correct answer: "),_c('b',[_vm._v(_vm._s(this.correctAnswerPrize)+" PHO")])]),_vm._v(" "),_c('p',[_vm._v("\n                      Correct answer using a hint: "),_c('b',[_vm._v(_vm._s(this.correctAnswerHintPrize)+" PHO")])]),_vm._v(" "),_c('p',[_vm._v("\n                      Wrong answer: "),_c('b',[_vm._v("-"+_vm._s(this.wrongAnswerFee)+" PHO")])])])],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',[_c('v-btn',{staticClass:"info",on:{"click":_vm.prepareQuestions}},[_vm._v("Prepare Questions")])],1)],1):(this.currentStep >= 0 && this.currentStep <= 4)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title"},[_vm._v("\n                    "+_vm._s(this.question)+"\n                  ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-radio-group',{model:{value:(_vm.currentAnswer),callback:function ($$v) {_vm.currentAnswer=$$v},expression:"currentAnswer"}},[_c('v-radio',{attrs:{"value":"1","label":this.option1}}),_vm._v(" "),_c('v-radio',{attrs:{"value":"2","label":this.option2}}),_vm._v(" "),_c('v-radio',{attrs:{"value":"3","label":this.option3}}),_vm._v(" "),_c('v-radio',{attrs:{"value":"4","label":this.option4}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"caption gray--text"},[_vm._v("\n                    Question ID: "+_vm._s(this.questionId)+"\n                  ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-btn',{staticClass:"indigo--text",attrs:{"flat":""},on:{"click":function($event){_vm.getHint()}}},[_vm._v("Get Hint")])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-btn',{staticClass:"success",attrs:{"disabled":this.currentAnswer == ''},on:{"click":function($event){_vm.confirmAnswer()}}},[_vm._v("\n                    Confirm Answer\n                  ")])],1)],1)],1):(this.currentStep == 5)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title"},[_vm._v("\n                    All questions for this turn have been answered.\n                  ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"subheading"},[_vm._v("\n                    Please click on the button below to process your answers and get the results.\n                  ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{staticClass:"info",on:{"click":function($event){_vm.processAnswers()}}},[_vm._v("Process Answers")])],1)],1)],1):(this.currentStep == 6)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title"},[_c('b',[_vm._v("Results")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs3":""}},[_c('v-card',{attrs:{"color":"blue darken-4"}},[_c('span',{staticClass:"white--text"},[_c('b',[_vm._v("Question #")])])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-card',{attrs:{"color":"blue darken-4"}},[_c('span',{staticClass:"white--text"},[_c('b',[_vm._v("Correct?")])])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-card',{attrs:{"color":"blue darken-4"}},[_c('span',{staticClass:"white--text"},[_c('b',[_vm._v("Hint used?")])])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('v-card',{attrs:{"color":"blue darken-4"}},[_c('span',{staticClass:"white--text"},[_c('b',[_vm._v("PHO Tokens")])])])],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('b',[_vm._v("1")])]),_vm._v(" "),(this.userResults[0])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userHints[0])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userResults[0] && !this.userHints[0])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("2")])])]):(this.userResults[0] && this.userHints[0])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("1")])])]):(!this.userResults[0] && !this.userHints[0])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('b',[_vm._v("2")])]),_vm._v(" "),(this.userResults[1])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userHints[1])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userResults[1] && !this.userHints[1])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("2")])])]):(this.userResults[1] && this.userHints[1])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("1")])])]):(!this.userResults[1] && !this.userHints[1])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('b',[_vm._v("3")])]),_vm._v(" "),(this.userResults[2])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userHints[2])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userResults[2] && !this.userHints[2])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("2")])])]):(this.userResults[2] && this.userHints[2])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("1")])])]):(!this.userResults[2] && !this.userHints[2])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('b',[_vm._v("4")])]),_vm._v(" "),(this.userResults[3])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userHints[3])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userResults[3] && !this.userHints[3])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("2")])])]):(this.userResults[3] && this.userHints[3])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("1")])])]):(!this.userResults[3] && !this.userHints[3])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('b',[_vm._v("5")])]),_vm._v(" "),(this.userResults[4])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userHints[4])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("Yes")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("No")])])]),_vm._v(" "),(this.userResults[4] && !this.userHints[4])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("2")])])]):(this.userResults[4] && this.userHints[4])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"blue--text"},[_c('b',[_vm._v("1")])])]):(!this.userResults[4] && !this.userHints[4])?_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]):_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"red--text"},[_c('b',[_vm._v("-1")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"color":"blue-grey darken-4","height":"1px"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}}),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}}),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"title"},[_vm._v("\n                        Total:\n                      ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs3":""}},[_c('span',{staticClass:"title"},[_c('b',[_vm._v(_vm._s(this.totalEarnedTokens))])])])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{staticClass:"info",on:{"click":function($event){_vm.restart()}}},[_vm._v("Start another round")])],1)],1)],1):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","width":"600px"},model:{value:(_vm.txReceiptDialog),callback:function ($$v) {_vm.txReceiptDialog=$$v},expression:"txReceiptDialog"}},[_c('v-card',{attrs:{"color":"blue-grey lighten-5"}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[(this.awaitingTx)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_vm._v("\n              Transaction broadcasted to the "),_c('b',[_vm._v("Althash Blockchain")]),_vm._v("!\n            ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n            Awaiting confirmation from the network...\n          ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-progress-linear',{attrs:{"indeterminate":true,"color":"blue"}})],1)],1):_vm._e(),_vm._v(" "),(this.txError)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"red--text"},[_c('p'),_c('h1',[_vm._v("Unsuccessful")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v(" \n                There was an error while running your transaction.\n              ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"error"},on:{"click":function($event){_vm.txReceiptDialog = false; _vm.txError = false}}},[_vm._v("\n              Close\n            ")])],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","width":"300"},model:{value:(_vm.hintDialog),callback:function ($$v) {_vm.hintDialog=$$v},expression:"hintDialog"}},[_c('v-card',{attrs:{"color":"blue-grey lighten-4"}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-black"},[_vm._v("\n              Hint\n            ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('b',[_vm._v(_vm._s(this.hint))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{staticClass:"grey--text",attrs:{"flat":""},on:{"click":function($event){_vm.hintDialog = false}}},[_vm._v("Close")])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"blue","dark":""}},[_c('v-card-text',[_c('b',[_vm._v("Loading info...")]),_vm._v(" "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending && _vm.rawTx != 'loading...'),expression:"canSend && !sending && rawTx != 'loading...'"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},on:{"click":function($event){_vm.confirmSendDialog = false; _vm.canSend = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],attrs:{"indeterminate":"","size":20,"color":"primary"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "g/I3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_Photizo_vue__ = __webpack_require__("2wuY");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49b22f5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_Photizo_vue__ = __webpack_require__("f3ZB");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_Photizo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49b22f5c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_Photizo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gaNr":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bs58__ = __webpack_require__("ZDUk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bs58___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bs58__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var explorerURL = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "https://explorer.htmlcoin.com/api/tx/" : "https://testnet.htmlcoin.com/api/tx/";

var contractAddress = __WEBPACK_IMPORTED_MODULE_5_libs_config__["a" /* default */].getNetwork() == "mainnet" ? "bbbb7dbd075840a73d5ca87ed2e0e26ccb7c97fb" : "9b71780abfefb16ccfd24bcb381dd03acf56bad3";

var abiJson = JSON.parse('[{"constant": true, "inputs": [{"name": "rewardCode", "type": "string"} ], "name": "checkReward", "outputs": [{"name": "rewardType", "type": "uint256"}, {"name": "rewardAmount", "type": "uint256"}, {"name": "valid", "type": "bool"}, {"name": "redeemed", "type": "bool"}, {"name": "redeemToAddress", "type": "address"}, {"name": "redeemTimestamp", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_newMAGOwner", "type": "address"} ], "name": "setMAGOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": false, "inputs": [{"name": "rewardCode", "type": "string"}, {"name": "rewardAmount", "type": "uint256"}, {"name": "rewardType", "type": "uint256"} ], "name": "addRewards", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"}, {"constant": true, "inputs": [], "name": "totalHTMLAvailable", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "rewardCode", "type": "string"}, {"name": "destinationWallet", "type": "address"} ], "name": "myReward", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "totalHTMLPrizesAvailable", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_newMAGAddress", "type": "address"} ], "name": "setMAGAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [], "name": "MAGAddress", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "owner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "totalMAGPrizesAvailable", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "MAGOwner", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "totalMAGAvailable", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"} ]');

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      wallet: __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet(),
      txReceiptDialog: false,
      awaitingTx: false,
      txError: false,
      txConfirmed: false,
      parsedAbi: null,
      method: null,
      totalHTMLAvailable: '',
      totalMAGAvailable: '',
      totalHTMLPrizesAvailable: '',
      totalMAGPrizesAvailable: '',
      rewardCode: '',
      destinationWalletAddress: '',
      gasPrice: '40',
      gasLimit: '2500000',
      fee: '0.01',
      confirmSendDialog: false,
      execResultDialog: false,
      rawTx: 'loading...',
      canSend: false,
      sending: false,
      loading: false
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
  methods: {
    closeMsg: function closeMsg() {
      this.getData();
      this.txConfirmed = false;
      this.txReceiptDialog = false;
    },
    getData: function getData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var decodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;

                _context.prev = 1;
                _context.next = 4;
                return _this.callContractFunction(contractAddress, abiJson, 'totalHTMLAvailable', []);

              case 4:
                decodedResult = _context.sent;


                _this.totalHTMLAvailable = parseInt(decodedResult[0]);

                _context.next = 8;
                return _this.callContractFunction(contractAddress, abiJson, 'totalMAGAvailable', []);

              case 8:
                decodedResult = _context.sent;


                _this.totalMAGAvailable = parseInt(decodedResult[0]);

                _context.next = 12;
                return _this.callContractFunction(contractAddress, abiJson, 'totalHTMLPrizesAvailable', []);

              case 12:
                decodedResult = _context.sent;


                _this.totalHTMLPrizesAvailable = parseInt(decodedResult[0]);

                _context.next = 16;
                return _this.callContractFunction(contractAddress, abiJson, 'totalMAGPrizesAvailable', []);

              case 16:
                decodedResult = _context.sent;


                _this.totalMAGPrizesAvailable = parseInt(decodedResult[0]);

                _context.next = 25;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context['catch'](1);

                _this.loading = false;
                _this.$root.log.error('call_contract_call_contract_error', _context.t0.stack || _context.t0.toString() || _context.t0);
                alert(_context.t0.message || _context.t0);

              case 25:

                _this.destinationWalletAddress = _this.wallet.info['address'];
                _this.loading = false;

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 20]]);
      }))();
    },
    send: function send() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var decodedResult, hexAddress, encodedData;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;

                _context2.prev = 1;
                _context2.next = 4;
                return _this2.callContractFunction(contractAddress, abiJson, 'checkReward', [_this2.rewardCode]);

              case 4:
                decodedResult = _context2.sent;


                _this2.loading = false;

                if (decodedResult[2]) {
                  _context2.next = 10;
                  break;
                }

                alert('This reward code doesn\'t exist.');
                _context2.next = 39;
                break;

              case 10:
                if (!decodedResult[3]) {
                  _context2.next = 14;
                  break;
                }

                alert('This reward has already been redeemed.');
                _context2.next = 39;
                break;

              case 14:
                _context2.prev = 14;
                hexAddress = '0x' + __WEBPACK_IMPORTED_MODULE_7_bs58___default.a.decode(_this2.destinationWalletAddress).toString('hex').substr(2, 40);
                encodedData = _this2.encodeContractSendFunction(abiJson, 'myReward', [_this2.rewardCode, hexAddress]);


                _this2.confirmSendDialog = true;

                _context2.prev = 18;
                _context2.next = 21;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().generateSendToContractTx(contractAddress, encodedData, _this2.gasLimit, _this2.gasPrice, _this2.fee);

              case 21:
                _this2.rawTx = _context2.sent;
                _context2.next = 30;
                break;

              case 24:
                _context2.prev = 24;
                _context2.t0 = _context2['catch'](18);

                _this2.$root.log.error('send_to_generate_tx_error', _context2.t0.stack || _context2.t0.toString() || _context2.t0);
                alert(_context2.t0.message || _context2.t0);
                _this2.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 30:
                _this2.canSend = true;
                _context2.next = 39;
                break;

              case 33:
                _context2.prev = 33;
                _context2.t1 = _context2['catch'](14);

                _this2.$root.error('Params error');
                _this2.$root.log.error('send_to_contract_encode_abi_error', _context2.t1.stack || _context2.t1.toString() || _context2.t1);
                _this2.confirmSendDialog = false;
                return _context2.abrupt('return', false);

              case 39:
                _context2.next = 46;
                break;

              case 41:
                _context2.prev = 41;
                _context2.t2 = _context2['catch'](1);

                _this2.loading = false;
                _this2.$root.log.error('call_contract_call_contract_error', _context2.t2.stack || _context2.t2.toString() || _context2.t2);
                alert(_context2.t2.message || _context2.t2);

              case 46:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[1, 41], [14, 33], [18, 24]]);
      }))();
    },
    confirmSend: function confirmSend() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var txId, txViewUrl, interval;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:

                _this3.sending = true;
                _context3.prev = 1;
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().sendRawTx(_this3.rawTx);

              case 4:
                txId = _context3.sent;

                _this3.confirmSendDialog = false;
                _this3.sending = false;
                txViewUrl = __WEBPACK_IMPORTED_MODULE_4_libs_server__["a" /* default */].currentNode().getTxExplorerUrl(txId);

                _this3.$root.success('Successful sent! You can follow the transaction on <a href="' + txViewUrl + '" target="_blank">' + txViewUrl + '</a>', true, 0);

                _this3.txReceiptDialog = true;
                _this3.awaitingTx = true;

                interval = setInterval(function () {

                  __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(explorerURL + txId).then(function (result) {
                    console.log('Checking Tx...');

                    if (result.data.confirmations > 0) {
                      clearInterval(interval);
                      _this3.awaitingTx = false;

                      if (result.data.receipt[0].excepted != 'None') {
                        _this3.txError = true;
                      } else {
                        _this3.txConfirmed = true;
                      }
                    }
                  }).catch(console.error);
                }, 30 * 1000);


                _this3.rewardCode = '';
                _this3.destinationWalletAddress = '';
                _this3.getData();

                _context3.next = 22;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3['catch'](1);

                alert(_context3.t0.message || _context3.t0);
                _this3.$root.log.error('send_to_contract_post_raw_tx_error', _context3.t0.response || _context3.t0.stack || _context3.t0.toString() || _context3.t0);
                _this3.confirmSendDialog = false;

              case 22:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[1, 17]]);
      }))();
    },
    findIndexByName: function findIndexByName(abiJson, name) {
      return abiJson.findIndex(function (item) {
        return item.name === name;
      });
    },
    callContractFunction: function callContractFunction(contractAddress, abiJson, functionName, params) {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var encodedData, encodedResult;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                encodedData = __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.encodeMethod(abiJson[_this4.findIndexByName(abiJson, functionName)], params).substr(2);
                _context4.next = 3;
                return __WEBPACK_IMPORTED_MODULE_2_libs_web_wallet__["a" /* default */].getWallet().callContract(contractAddress, encodedData);

              case 3:
                encodedResult = _context4.sent;

                encodedResult = '0x' + encodedResult;

                return _context4.abrupt('return', __WEBPACK_IMPORTED_MODULE_3_ethjs_abi___default.a.decodeMethod(abiJson[_this4.findIndexByName(abiJson, functionName)], encodedResult));

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
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
  },

  mounted: function mounted() {
    this.getData();
  }
});

/***/ }),

/***/ "gfSB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAACWCAYAAADKSPR6AAAdkUlEQVR42u1dCXxU1dW/YZLMZJvsk0z2ZUIWSYKAYMBiFJqCxSIQlH4KDYi2YutWtW4fqPWr1lqU0kbTT6tCW7VFLdJaq1hs1bZKF6nSr4iICxQBQUxk377/mdwXXm7um5lkVuD8f7/zy8y8+95dcv7vnHNXIRgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYjPBjUH19fWZlZeV5mZmZTyQmJr49aNCgTvy+H3IwSDkMOdIPORSCPHtJXFycV2R99pKgfnvj4+O7HA7HB3a7/XdlZWWXQvJxzc7qwIgFJLjd7tqMjIyFNpttG74fPVklKSlpK8h5NT47ITZWDUZUrGROTk4BCHk1rMkH0rIdPcnFa7ETEhLe9Hg8rficzGrCiKiVTE5OHp6amvqkdPGOsvSRLrTPffhbCIljlWGEnZSwlM1Op/Mf0kJYWY7DMt7rEZD4EGKzQ3B56TPFap8Zgu+f4ZpXcL1HEMf1CCyRV/A7xa87ITsCFeNeEuN55nwoXyoDiVKuvbh+UJb5kFonUwysa4d9iLd/k5aWNpjVhhFW95UsZXp6+j8sXFeyntsh/4L8BfJHyB8gL4IIK3HfyoKCgpXl5eUrqZMIZPix3W7vcDgcHVlZWR15eXkdRUVFHYjTOpCmo6qqqqOurq7jlFNO6WhsbOwYMWKEV/D7vbjnFjz3ukAEed9s3Dt06FDvs+iZ9GzKg/KjfCl/KgcsXQeVC+XrQDkfx/XnCgsLV2ZnZ69EviupPpCXZN1eg6yHdGoISt/3gJxPI/4sYvVhhAVQzEJyXzUKSCT9FAT4E6zDTSDgMCh0OvVQNjc3x5+grlwCJBF1zQSpm1NSUhbBor4tuntue72w8PsOXL+roqIinbWIEWokZmRkXKWJKYmkW2FJf+JyuUafzA0EF/9LsLTPSRe3FzlhNdeXlpZ+mdWIEVIXFtayBqR8X2Mpt5G1gFtYws0kxLBhwzzwHJ6n+FJpq/0g5zJ2aRkhQ0lJSSas5T2auLKTLCVctIGQMi7G3dy4AZYtDuSsBTlfUtrrCGLWD5xO5xWCxzgZoUBBQcFkKJU6eeAglO9VuK9jArW6hYWF2YjJhsP6TnE4HJeA1Jfj71w8YyrcwBFIE80YjHqbC2DRmmDZplK5bDbbJfh8EcrcgmvVSJMSIFkTqI64f7PqYXBHECNkgGI+Kfr2wG6H8t4cyP3V1dXlUMjpSH8HyPgcXN/NMlY9gr+H8f0/+P15pLkNcn55eXlpBKtnLyoqagCJ5oIwi1DGP6AMm+XwyFEaVsH3tfj954gfrwVBz4XVywrguZlotx+r7YbnrQZpx7NWMYLXXLv9XU2Hz1tQsNP8WUko8emQ9oSEhHdk3OUd34QFPkCusCSoMR54AN83pqamPgA5G3FrYjjrBfc8IzMz8yLk9TTy3W4uB4i5W46XGmWmOn+GF8hapF8A932wH5eUJmFMomeZ2w7tsAHt1sZaxQjex0tI2KXp9Hk5KyvL6eO25LS0tCk0wRufuyQZt0FZf4vnLYQVImt7DSzILfQd1uoZkGOrfPY+3PcyCD3L7XaHZVobrHQeCPbfKMc6I098fge/LcPf/0F5roNcgzLfhLL8EBbzNZTvU1mPT3D/T+GaD/VFTjzrFNy7ydx2IPsW1OtK1ipG0ICi7tHEl9TzOMjiFhuM0VTc9zepyPshj0IuBdFGNDc3Z5hjNRrfg/vaSDEd0twvrSmt6PgXSHvZ8OHDE0LtneOlcp+cdE+WcCPKeieINMPj8dThe5LZ6qPMOXBLP4+yXI16/1VawQO45ylY9VOs2gFkLkE7vCx6j2luA1mvY61iBA0o8F6zcoE4B6HYv7NKj2tNUL4XRPc0PFLEDihxrfDfG2mDlSqGNVoIAtBUusP4+0ZZWdmEUDoAIMsslIms+EGQbR0I+XXqmAqgY4fc03NRlxWie8reQRD2IatOK6R1oy2eVGLMXbCY81mrGEFDzms1K9eBoqKiFbq0LperApbiAXJf6T58bodLW6MhZUp+fn4urGeqmh2UuRgKfw9eAGSp95B7WVNTE5L5pih3FYi1RnQPX3yIGHMeiJ+hJIunmUs0q4ccBpWcqM8YmuUkY+JdKO81upcOrc8sLi5+XIkxu5D+26xVjFBgr+KO7YZyPqzr7IHF+zIUfoN0YR+lOMustKTsUNgboaCksMshT8J9vBF/08zPITKD1EvJaiK/92B9Lg1BPeJhrRbImHIHnr9A6WG14QVQT8SBl/AUvv8K1nspXjZTcnNzzS8Q8DKeelapQ+swnvNvchTUzPDSyR8yZMjjykutCxabickICdT5n11wBdvVROQOwhp9l9KDlFuh3G1mUtKUPVx/COT9SJgG36HYW0HUx0CCoebQFuScTBaJrCaeR1Y42N0BHMj/XzLvN0E2j3EhJycnDS+N6dRZBfJ8LGNPeglRPP0mXjC3UsxoJid++18qG1lOPGu6mllLS4sLxHxI6fyh5WBMTEZIXNkDisXsoiEQNR0Nn8CyUezpHUiHO9hgXKPZQ2QB6V6hXya1D0r7tJnIUPYqkPNZSo9rz5eXl1cH2YlVL7qHP8g9pjHGeOMaDetQz6tQhjfEsV7oLajPZaNGjerpiS4oKKDJFVuofCD1MjU/Go7Bc7+tth3yYWIyQkLMg6pygYTtmk6fabCG75EbS8pXXV3d455WVlbejN8+Er7XcHbW1dXdbdxD9yMmpKGFI3juxsGDB18STD3q6+tni+5JDR/X1tbOMH4/55xz8pHX3RrPoBc5YdXfQx3GmjqJ7HgRvSWv7dLEmU5acqa2HV4QTExGSNCLmHAru/Lz81VixkFJ59FQB5RvDxT1CpMCp0IZfy00qy5U5QcB/y6ODVfEwbU8B888Kp/5/WAqAQv3Q5nPhyCm2/gdeZKL/bYIYGcCWG4it6PHN3Y4fm/Ua9y4cXkqMeXsKPMzaJH2HaxSjJATk+IkxJPtSkdHPA3IS8tHA/FfM64RCXDPqgAUn1zGtURk417EneMhR6WL+cNgKuHxeFbIfN43k5/CQdG9I0IgW4ZcJrrnzBqx6W+M9gHxixUPwgl3nInJiBwxS0tLVYtpg3W7EpaN4sED+HyVOb7EnxcCJOYaE2mo+/PzeJ6XmLCci4OpxMiRIx8wLCZ1zJgujdVMOLeymHOFaZMtxJ3PGu3zuc99zq0SMy8vTyVmF+rBriwjPMQsKytr13R2zIQ7+7GMMe8wxZhxDQ0N98OifuZH8Q/KziMvJk6caIdlnknX0tLStjU2Nt4QZOfPVGnRd8DS9SxanjFjRhli24f9kZJcarxwaP7rIJNFf0u64EfVGJOI6Xa7mZiMyBCTxuLgFvYhJshzBs1xJUWFwtJeOTWmzh8X9ayqz1ItJg1N4Dk5UrFpFhCNZR7B73+Aq3hqMJUA+UaJ7tlIe10u108NS0/LulDujX6IuR/lusE8GQFxNk3fI0t7BC+l36v5UQ8uXixMTEbkiFlVVdWHmEQ+WjpFBIPybYKFmmHqAPJ2shgzZoS+V5bkAJT8JTk0MpZ6UEX3Xq0/nzlzZkqQ9UjCy+Ej+QL4Jy1HAyHHI4810o02RC3b7uzs7KVyRYnZQ6CYdzeVG9cv0hGzuLi4T4yJtuEYkxEeYtbW1rZr0hEJ54jusb1DspMj05xg+vTptiFDhiwF0agDhkiyqampafnYsWNr5WJsL0Hh0m5EfPYDSfL/wFpdG4J6JMLFflTmsY3GYmEtd8rv+1JTU385bdq082HllklLuAXlfBsvnK/Omzev19RBWlQNQnvdWBoGoumFOmLSMJFqMSFsMRkRJaYgSwf38zHRPYRAS6loup1uYTF18DjNHSm0UgNW9Q3Re1iFrNtLyG9ICOoRR3ngedRrTEMwXktNri3yfTIzM9OY2UOxIllnIqO6siWO5sDC0r4kLf8huNz3CtNkBTMx4Vn0sZgQtpiM0BOTJmJDwdutEsOtm0rHBMhYcyviuevxN1/4X71Bm37Vwjq+Z8prR0lJyXdE6A7rycAzHzTVh5ZvrcALJS+A8tngzlbJqXifyk6f1+QLRuiICXeZLSYjNojZ1tbmgJtIZ5pskq5oF4h5D347TXbs9FqxITflyqLNpOlwItE9A6fnBC9Yp3WwmLOEafxwIBg/fnw67eUj69PzfJRvPW2SRRPnqXNHlscMmlDgpjFVWFva7Nm7qwEtrAb5WoTFcjYiJsrNxGTEBjFlDJYGhafd0jdKRaYOnB1Q/kdhdWjYohGKTStP6hGHTQQpyYrtkGQ5SHEl0v9b7hpAJFgPa3q5lXXyB8S1eSDK7aJ70jmtWNkuY8TtssPnAEi7HsRc5Ha7JyC/IXJlTAN+n0N7EskJ9ZSWjuFbL/fuibfKk4nJiDliypgxEfFXKyweHSuwVVrCw9JKHYXiG3GeMbmAYrZttPteaWnpf40ZM6YaJLlfkocIS8vJrrKIWX2hAC7lEnHsNK730tPTb5BW8Bp8p9lGu2Rs653LS+OSSEN17TmLRa5L3Uybk8H6Nvvbk4iJyYhJYhqgjhsQ4Hp8fAakW2Oz2T42Ok7o2SDBJzRkgd+fBWG/RT20xr20C4BcJrVJEvpdIlU/toD04MXwoEFK5P9/RUVFV/Rc9HhoEkMTnkvne66iYw6kZfRuEkazmCCbIK+jDk/gRXMJypMbSMYWxOTOH0ZsENNAU1NTEu4bCWLcBiI8gZ9o241lQ4cO/W5xcfFpFJvq7gMRXEh/nbSYFHPukj2hpX46bGgCwHJTTPknuKozrBJT/JuXl3cu/n5flu0pxLy/gPX+en19fQ2RuD/1JWI2NDSwxWTENjGDBG318TXEe7RrAK1g2QnrR7vDV4juzZrT5Fhisvw+HFaOVrTslZaZhmGGiQju/M7EZJwMxBRQchfczsuQ/99lmbbTrnog4MW08xxcze/g2lXU8woS/17GtDRv92VcmxDp8loQk11ZRviIOWTIkPZoFIQ276J9hUT3uZRGnLpfHJuUcEjuuODt3U1MTHympqamORplZYvJOGmIKUGxKA25vCL6nqrVs1LF6XS+UFJSYrnvKxOTccIRc+jQoe1RLpMD5ZhJm0LriIn48/Xq6uqzRBRP1mJiMk5GYtJqlmK4qk9aEJPm6KZEs3wTJ050op2YmIyw4XAsEpOmzuXl5dFRee+IY5t80aT31SjjSBHlcyiZmIxwo9cmWiBC16mnntoeCwWD8ufKvYbek2V7KzU19XzR+/yRqBFz2LBhTExGZFzZWCImoaSk5AyykqJ725MOuZJFMDEZTMzourRnwGquluW7E5LNxGQwMaOM8ePHn5GcnHy8EJMnGDBODmJOmDDhuCEm2o52PLiPVYpxwhNz0qRJZ6SlpR0XxMQLhDaG/hGrFOOEJ+aUKVOYmAwmJhOTiclgYvrFuHHjPg+F/4dU/J/0YxE1E5PBxAwhbB6Pp4k6UeLj4/8mjm1b4t2cGbLJbre/mJOTcys+5zAxGUzMMCM/P/8UuK1LBg0aRNt/0PIu7x5C4tiUPOOzsRysMzU1df7y5cvTmJiME5qY0ZgrS/Ni09PTL8BL4QMTGWknA9r1nc5L2SLL92dYS9rT1ry51pGUlBTa+T0z0sRU58qibIfz8vIWs0oxwkLMSK7HbGlpSXG73V+l7S8l0Q6SqwqiTnM6nVmNjY1nOBwOtfPHTVuRgLgfSYLSaV2bQYr6SJWbdzBgRJyYEdxaxIY4kjZapi0mafPoj5E/HVxUYSTwNcEAxDgd1tI49fkQpYP1zWdiMpiYwcEj11zSGSOfIl68jzZvNifwN1zS1taWjzKvli7wXklsJiaDiTlQawk5F4Sk3dMPIN/Hk5KSzMep0y7ouYjjpsMS/lOWj06NHkqHxgrTjnhwhWmv2m2SnO/SaV2RICZv+Mw44YiJuLFUnhx2BJ/XVVZW0vklxv49tuzs7FGIMR+He7tTHFvMTZtxbSosLLxdHhTUg7KysstEd0/u7oyMjMUizFtZMjEZESWmr2P4Qog4WMcxIOR2aS2X0A55xkW4tHVwcX8p9Ifg0tEL+zIzM2n392Qz1+l4BEni1SBnRriJyad9MSJKTN2J0iFGIsjXCoLtpw4fGos0u7AAnT3yqfBxPDsddYDY03wKdCKI6T06HkLbkdSFm5iw2kxMRuSI6fF4wk1M2qJylnRN30cM+TXTtRSU4W61XBo5TCeJmdxfGgu9URLzfRjMM8NNTLjUTExGZIhps9m6SktLw01M2rOnTXSfzrXe5XJdaLqWDvmBH1J6ZfLkyTeYzrukzqTL5LXNsKZfCmcFqAMqLy+vDzHhATAxGSEI9uLiehGTDqLNz8+PBDG/Ii3mhpSUlDbTNepxvVcou/fpZOzYsXPEsd3ybHa7/WppMTfBCk8Mcx2ciHP7DJeg/Xi4hHHcEtMOy0wnc9G0u60g5rfM11CGW0X3IbS+iLlHHo5r9L4mgIw/ksR81+l0nh5uYsLlvlmJe7tQJraYjJBgv6pciNXCTUwbyNgCAnbi825YOsrPOCg2DgQ7F0r/V6FsrWkSOreETvsyn2WZBLeY7qFDaN9yu92l4awA2igTruyd6ksNZWdiMkKCvWqcBGsW9nFMsnYgEh0edNjhcLxWXV19trljJTs7+yvyuPY+xMS9v5GdOz1HsZ911llnIj0tC9uXlJT0S6vzOEOFlpYWV319/SNqfA5LzcRkhJ6YdOQ5YqefhztTGmekk6hhZfbAOn5GVrqsrKxn7JHOxAQBL8D1+0Dgn9G4Jv4+grTfKyoqGkWuq+lx2S6X63cyLt2KR58X7vLX1dXlDx48+HGhTM7IyspiYjJC4FPabHsVd+xgbm7ubyMR3sLtGw5r+SeKC+mY9rS0tIvxOdWUhixiNqyQh6bdgXBlRFjRe1YPHXp7p3R7D8BaPqM8IywoLS11o52Wid5DTbtQ1gWsVYxQuJRqJ8shxHwviAgcb0ckS01NvRTk3ExxIyzOG/hMQyeBuqHJIOXdIMRO6RJ/BHKPiUS7wTIWw91epbzUtpMXwFrFCBpQanWGDVmeVXDVEiORP004hzLfJTuCaPhkDazenXBNR8O11RIU1jMZbuR5eIE8AIu/U5Z7F1zweZFqN5SvEvltUGLMLbDqV7NWMUJhMTcrxKQ47VW5giMSIMtcinIsADm9OxjQxHW8MF4FYRfi9wvhHn4BlvVs/PaFkpKSK2EZH5U7GZAbfhjptsAtnhMJF9bUbvUg4i4lxnwfFvxS1ipG0ICSv6oQk8YB34zkbgASuXBDL4G1/ItBOJoPi7/v4C8t+3qDygVCbBLdJ00fBjH2g6ArYXXPsrKu4XI0aLhHKLOm6KBdlH86axUjaICA3xZ9J4hvw5v/higUxwmSjQBBr4eVXA3iaY96h+XcDQKsgCt5EYhaF4VypoOYi8SxTcIMWU07MrBWMYJGUVFRgylO6xnAh4K9Qmsio1CkOBpKoaVfIOcX8f0quLa3ozzU83pbbm7ulSjXeFjKighbSS9obm5FRcUkvLw+FH3HV38d7okNjJMHKS6Xa6Hy9qfPnVC0h3AtL4plo+ESGh6hHfCyIBkgZqqIQI+xFWClS+TmYOqBv5th7emQXRurFCMkFgpuawWspq4T6NOEhIQHKysrXdxM3p7YPLkJtbqA+wCIuQxWntuJEVIkUG+nJp4jy/kJ4qmlpaWlw07mBqqvrx8LUr4uNPN3aT/c4uLieaxGjHAgF2/8pyzIuYcmiCO2u4JcOdF7OtyJDDvi3CrUmcZZt+hIiVjzk7S0tHuampqSWIUYYXFp7XZ7NWSd6NvbeES6tuTC7UpKSvqgoKDgz/n5+Us8Hs+9zc3N38PfeVlZWefD8rZWV1e3jh49unXcuHGtkyZNap0+fXqPzJ49u3Xu3LkRk1mzZvXkPXXq1NaJEye2orytI0aM8JYTdWhF3HrBmWeeedOYMWO+V1hYeG9FRcXT+P1NuRP8Z7LeujbZB2u5fOTIkdmsPoxwYhBcstMcDscGEcAOAie5HKCpi1HuHGOcTJYTrlkNZIXofbAPk/GY50Abgd0Py5rO6sKIKIYPH+6uqqq6A7HlRtE90+YIk9Iba6+tqan5JmsII6qubXl5eWN2djYdjUcD6p/ImIumzO2X25KEWmiu7NFABWU4EuoyyHrtk/Wkne920lRAtMNdovdetgxGVJFIc2dpiZbT6VyYlJS0JCMjYwXiKzqVa1VKSsoqxKWrEHOtio+Pp6VQAxJYI5o8/0+32/3vQIXSDzQ/m83mFSo3lR/1W0VLuSAv4rdfwF19hNZ6on4X1tbWulkNGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAxGVHAe5HY/cjmEThTWHbk2X0l7gelaQwDPNuRi031X9+O+KsgCze8FmrJO0KSb7Kd9hvvJ/2YInaqsOyfym0ratgH8P27VpKmxaAfCtf1oO0Nma/KIk/9zqsODkBchSyA3QaZBrM7qvNKHPhioU9LcJnqfD+NLpxo15S9Rnp+kSdNiuj7Doh1OU54z2iLd5EgQkxo90E2A6Ui2IuV+Nc0TSgME+uxXTPf158iCs2Vjqb8vVcqZA+nUpPN3QvOcfpRlvnLvVuX68wP8f8Qpac7VpJlgkWcgskpD/FV+7lkn216F7n93qpJmiiZNSoA6dZHm+mjl+VmaNN8xXf+FRZ3alecssUjXEWvE1ClXLBDTDlmruTbW9Mz7NdevD6B95vSzfaYc58Qc3s97ZwZAzLWKhY1VYm5QPIatsUbMxZCF0n3RFSwtCGKukQqqykI//9znLcR4Gw+zUIgE6aKo1+jsx/gBEnOZfJvqLPCzxzEx46VXZGUhdb9TG7gCeKneeRwQ86gpJKn1kSZqxDQ30iLN9cwgiDk+gDJt8GFNfWGBJr9rJAnV32sDfOYcH4owSKOwW6NMzCHyZWXIfE3auUoaj7y3TZP2RRkGEOi4hIc1aRYGQExzu8UyMS+SaS6NZWIWaKzmsiBd2XAS0y4tsj8LcW0/2meOH0X4W4wRU4VOkcdYpNW5+xVKmmRNvQINQzZI3Yo1YprL/LBM84TF9agSs9PCTevUNEIoYszXA4hTdPJFTX1O9XPPnwN0YX0Rc6HsSXxFc+1XxzEx/6gJBXR4TKMXgf7vfhCDxFysvFhtiv4vjvXOn6WarulQEHPtAIlp1W0938c9Nf1sn/52/nzxOCZmoOX9vuaZWf343/04xog5Tfmu6u3U46FXlt4k7hgnZqKFS3vNANqnP8T8VgwMlwRDzA8DDCEe0jzTYfG/mx/A0Eu0iVmlWMgPlc+NsULMTNmbSWOWl2uufzUIYrbJuMUsBX6IuUZzT4XwfXbjLZq8y0NEzFXSnfsZ5G7IPI0nMVBiLtTkp7bPvH6QLRhXttPC7X+lH64s/R/KQkjMyZrr05XyNWjS3OiDmJVKTGmW+2OJmClKsO9rSCCWOn8iRczRAd47EGJerMnvG36IcVQZshgoMe+yeJGaMUKT5td+iBmI5xEoMav9xPVCxv++xpd1xLTqhb0glohJlaApTDRV6xnhe1YNEzNwYnYK6/HY63wo/lE5bvoNjVVTe4KDIabV2N09kC9Lq6PrFJwRADHjJIGDJWaCsJ74crkPy1fph5hWdS+IJWL6k9lMzAER05c8bLrv2X7+P1pDREzCon7m3a7EwFbENIbfOoMkppDDXf0p42Llfh0xdTN91sn0xwUxl4neE46ZmKEnZpmwnmnj675QEDNR+B6ANwvpziA//7tblOsXhICYDum+BlJG6p9ID4CYQvSdG7somsTsCKBy1DP1HOTrCil1jfiYH2KeHSFi3iSsp1v1B7M1zzk9wHs/HCAxCRlyWGKDD4WbEUAZLhzgi4U6VB4R1nNfLxf61UbqC+UmTRqdu5kcoE4ZoBcCrWR5XVhPZqCZYPYA8jcmUbRZxKUNmg4hBsM7PEWrYEZJqx8f4fxp+IHmIteI3tMxYwWZslPoNNlODlYZBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGI/z4fyiE1yUtdN/hAAAAAElFTkSuQmCC"

/***/ }),

/***/ "gj2+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/biffy_ufg_win.9072f3e.jpg";

/***/ }),

/***/ "glbK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dapp_CrypticMAG_vue__ = __webpack_require__("geKI");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72d096ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_CrypticMAG_vue__ = __webpack_require__("z9s6");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_72d096ce_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_CrypticMAG_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "gmgO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v(_vm._s(_vm.$t(_vm.headline)))])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{ref:"passwordInput",attrs:{"label":_vm.$t('password.password'),"type":"password","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"repeat the password","type":"password","outline":"","background-color":"blue lighten-1"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.confirmPassword($event)}},model:{value:(_vm.repeatPassword),callback:function ($$v) {_vm.repeatPassword=$$v},expression:"repeatPassword"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmPassword}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "hJdU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16cc20c9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PasswordCreate_vue__ = __webpack_require__("gmgO");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16cc20c9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PasswordCreate_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lXzv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/logo_althash_health.4545a25.png";

/***/ }),

/***/ "n3br":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},_vm._l((_vm.length),function(i){return _c('v-flex',{key:i,attrs:{"xs2":""}},[_c('v-text-field',{ref:"mnemonicInput",refInFor:true,attrs:{"label":_vm.$t('mnemonic.label') + i,"type":"text"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.tryInputMnemonicWords($event)},"focus":function($event){_vm.focus(i - 1)}},model:{value:(_vm.mnemonic[i - 1]),callback:function ($$v) {_vm.$set(_vm.mnemonic, i - 1, $$v)},expression:"mnemonic[i - 1]"}})],1)}))],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"success","dark":"","disabled":_vm.notFinishInput},on:{"click":_vm.inputMnemonicWords}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "oEOJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-card-title',[_c('div',{staticClass:"headline font-weight-medium blue--text"},[_c('v-icon',{attrs:{"large":""}},[_vm._v("pageview")]),_vm._v("\n        "+_vm._s(_vm.$t('call_contract.title'))+"\n    ")],1)]),_vm._v(" "),_c('v-card-text',[_c('v-form',[_c('v-text-field',{attrs:{"label":"Contract Address","required":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.contractAddress),callback:function ($$v) {_vm.contractAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"contractAddress"}}),_vm._v(" "),_c('v-textarea',{attrs:{"label":"ABI","required":"","outline":"","background-color":"blue lighten-1"},on:{"input":_vm.decodeAbi},model:{value:(_vm.abi),callback:function ($$v) {_vm.abi=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"abi"}}),_vm._v(" "),(_vm.parsedAbi)?_c('v-select',{attrs:{"items":_vm.parsedAbi,"label":"Method","single-line":"","bottom":"","outline":"","background-color":"blue lighten-1"},model:{value:(_vm.method),callback:function ($$v) {_vm.method=$$v},expression:"method"}}):_vm._e(),_vm._v(" "),(_vm.params)?_vm._l((_vm.params),function(param,index){return _c('v-text-field',{key:index,attrs:{"label":param.name,"outline":"","background-color":"blue lighten-1"},model:{value:(_vm.inputParams[index]),callback:function ($$v) {_vm.$set(_vm.inputParams, index, $$v)},expression:"inputParams[index]"}})}):_vm._e()],2)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"dark":"","disabled":_vm.notValid},on:{"click":_vm.callTo}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.execResultDialog),callback:function ($$v) {_vm.execResultDialog=$$v},expression:"execResultDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('call_contract.result'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Result","disabled":""},model:{value:(_vm.result),callback:function ($$v) {_vm.result=$$v},expression:"result"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},nativeOn:{"click":function($event){_vm.execResultDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },
    openURL: function openURL(url) {
      this.$emit("openURL", url);
    }
  }
});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bb70702_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileReader_vue__ = __webpack_require__("ddj7");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4bb70702_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_FileReader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


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

      __WEBPACK_IMPORTED_MODULE_1_qrcode___default.a.toDataURL('htmlcoin:' + this.address + '?amount=' + this.amount + '&message=' + this.message, function (err, url) {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2aab22e8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_BiffyPlutonium_vue__ = __webpack_require__("xAo8");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2aab22e8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dapp_BiffyPlutonium_vue__["a" /* default */],
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

/***/ "sFH2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-layout',{attrs:{"row":"","justify-center":""}},[_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("Please input your password:")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{ref:"passwordInput",attrs:{"label":_vm.$t('password.password'),"type":"password","outline":"","background-color":"blue lighten-1"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.confirmPassword($event)}},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmPassword}},[_vm._v(_vm._s(_vm.$t('common.confirm')))])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8a2cdcd0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Restore_vue__ = __webpack_require__("A/zS");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8a2cdcd0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Restore_vue__["a" /* default */],
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

/***/ "wOSG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "xAo8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("4quz")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"blue-grey"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Info\n      "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Play\n      "),_c('v-icon',[_vm._v("casino")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Sell\n      "),_c('v-icon',[_vm._v("attach_money")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n      Buy\n      "),_c('v-icon',[_vm._v("add_shopping_cart")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"height":"auto","width":"25%"},attrs:{"src":__webpack_require__("U8Q/")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("This is heavy, Doc!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                  Going straight to the point: Do not expect any commitment from us.\n                  "),_c('br'),_c('br'),_vm._v("\n                  Yeah, that's right. We're here just for the fun!\n                  "),_c('br'),_c('br'),_vm._v("\n                  Please feel home and browse around. You may have great surprises in our lotteries!\n                  "),_c('br'),_c('br'),_c('br'),_c('br'),_vm._v(" "),_c('small',[_c('b',[_vm._v("Disclaimer")]),_vm._v(" "),_c('br'),_vm._v("\n                    HTMLCoin Foundation has reviewed and approved this application's code, having Althash Web Platform as a proud host, however the Foundation is not responsible for any funds transacted within this application scope.\n                    "),_c('br'),_vm._v("\n                    By using this application you agree on these terms.\n                  ")])]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-container',{attrs:{"fluid":"","grid-list-lg":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-xs-right":""}},[_c('v-btn',{attrs:{"fab":"","color":"success","disabled":_vm.playLottery},on:{"click":function($event){_vm.playLottery = true; _vm.playUpForGrabs = false}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("monetization_on")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-xs-left":""}},[_c('v-btn',{attrs:{"fab":"","color":"warning","disabled":_vm.playUpForGrabs},on:{"click":function($event){_vm.playLottery = false; _vm.playUpForGrabs = true}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("directions_run")])],1)],1),_vm._v(" "),(_vm.playLottery)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"py-3 display-2 font-weight-light"},[_vm._v("LOTTERY")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-card',{staticClass:"py-3 white--text",attrs:{"color":"blue-grey","height":"100%"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('img',{staticStyle:{"width":"75%","max-width":"85px","height":"auto","max-height":"85px"},attrs:{"src":__webpack_require__("owsU")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-black"},[_vm._v("BIFP Lottery")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[(this.tokenLotteryStatus == 'On')?_c('span',[_vm._v("\n                          Status: "),_c('span',{staticClass:"subheading font-weight-bold green"},[_vm._v("On")])]):_c('span',[_vm._v("\n                          Status: "),_c('span',{staticClass:"subheading font-weight-bold red"},[_vm._v("Off")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Max Prize: "),_c('span',{staticClass:"subheading font-weight-bold"},[_vm._v(_vm._s((Math.round(this.tokenLotteryPrize * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" BIFP*")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Bets between "),_c('b',[_vm._v("1 and "+_vm._s(this.tokenLotteryFeeThreshold)+" BIFP")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Lucky number between "),_c('b',[_vm._v("0 and "+_vm._s(this.tokenLotteryPot))])])],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-card',{staticClass:"py-3 white--text",attrs:{"color":"blue darken-1","height":"100%"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":"","align-center":""}},[_c('img',{staticStyle:{"width":"75%","max-width":"64px","height":"auto","max-height":"85px"},attrs:{"src":__webpack_require__("aR/i")}})]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title font-weight-black"},[_vm._v("HTMLCoin Lottery")])]),_vm._v(" "),(this.htmlcoinLotteryStatus == 'On')?_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Status: "),_c('span',{staticClass:"subheading font-weight-bold green"},[_vm._v("On")])]):_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Status: "),_c('span',{staticClass:"subheading font-weight-bold red"},[_vm._v("Off")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Max Prize: "),_c('span',{staticClass:"subheading font-weight-bold"},[_vm._v(_vm._s((Math.round(this.htmlcoinLotteryPrize * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" HTML*")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Bets between "),_c('b',[_vm._v(_vm._s(this.tokenLotteryFeeThreshold + 1)+" and "+_vm._s(this.htmlcoinLotteryFeeThreshold)+" BIFP")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n                        Lucky number between "),_c('b',[_vm._v("0 and "+_vm._s(this.htmlcoinLotteryPot))])])],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","text-xs-center":""}},[_c('span',{staticClass:"title"},[_vm._v("The more BIFP you bet, the higher is your prize!")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Your bet","outline":"","suffix":"BIFP","background-color":"teal darken-4"},model:{value:(_vm.lotteryBet),callback:function ($$v) {_vm.lotteryBet=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"lotteryBet"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Your lucky number","outline":"","background-color":"teal darken-4"},model:{value:(_vm.lotteryLuckyNumber),callback:function ($$v) {_vm.lotteryLuckyNumber=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"lotteryLuckyNumber"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.lotteryNotValid},on:{"click":_vm.runLottery}},[_vm._v("I'm feeling lucky!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('span',{staticClass:"caption"},[_vm._v("* Prize pots are subject to constant fluctuation as several players run for the same prize, simultaneously and asynchronously. Such changes may not be reflected on this page.")]),_vm._v(" "),_c('v-spacer')],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.playUpForGrabs)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"display-2 font-weight-light"},[_vm._v("UP FOR GRABS")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"label":"How much to play","outline":"","background-color":"teal darken-4","suffix":"BIFP"},model:{value:(_vm.upForGrabsBet),callback:function ($$v) {_vm.upForGrabsBet=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"upForGrabsBet"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.ufgNotValid},on:{"click":_vm.runUpForGrabs}},[_vm._v("The cookie is mine!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1):_vm._e()],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Token quantity","outline":"","suffix":"BIFP","background-color":"blue-grey darken-3"},model:{value:(_vm.sellTokenQty),callback:function ($$v) {_vm.sellTokenQty=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"sellTokenQty"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{attrs:{"label":"Price per token","outline":"","suffix":"HTML","background-color":"blue-grey darken-3"},model:{value:(_vm.sellPricePerToken),callback:function ($$v) {_vm.sellPricePerToken=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"sellPricePerToken"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.sellNotValid},on:{"click":_vm.setSell}},[_vm._v("Put for Sale!")]),_vm._v(" "),_c('v-spacer')],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-tab-item',[_c('v-container',{attrs:{"fluid":"","grid-list-lg":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs6":"","text-xs-right":""}},[_c('v-btn',{attrs:{"fab":"","color":"info","disabled":_vm.buyBank},on:{"click":function($event){_vm.buyBank = true; _vm.buyUsers = false}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("account_balance")])],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","text-xs-left":""}},[_c('v-btn',{attrs:{"fab":"","color":"error","disabled":_vm.buyUsers},on:{"click":function($event){_vm.buyBank = false; _vm.buyUsers = true}}},[_c('v-icon',{attrs:{"dark":""}},[_vm._v("assessment")])],1)],1),_vm._v(" "),(_vm.buyBank)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"py-3 display-2 font-weight-light"},[_vm._v("FROM BANK")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title"},[_vm._v("\n                          Tokens for sale: "),_c('b',[_vm._v(_vm._s((Math.round(this.bankTokenQuantity * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" BIFP")]),_vm._v(" "),_c('br'),_c('br'),_vm._v("\n                          Price per token: "),_c('b',[_vm._v(_vm._s((Math.round(this.bankPricePerToken * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" HTML")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}}),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"subheading"},[_vm._v("\n                          The \"buy from bank\" functionality is not yet implemented on AWP. For more info, please go to "),_c('a',{attrs:{"href":"http://biffytoken.site/BIFP.php","target":"_blank"}},[_vm._v("biffytoken.site")]),_vm._v(".\n                        ")])])],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.buyUsers)?_c('v-flex',{attrs:{"xs12":""}},[_c('v-card',{attrs:{"flat":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"py-3 display-2 font-weight-light"},[_vm._v("FROM MARKET")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs8":"","offset-xs2":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"subheading"},[_vm._v("\n                          The \"buy from market\" functionality is not yet implemented on AWP. For more info, please go to "),_c('a',{attrs:{"href":"http://biffytoken.site/BIFP.php","target":"_blank"}},[_vm._v("biffytoken.site")]),_vm._v(".\n                        ")])])],1)],1)],1)],1)],1):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendLotteryDialog),callback:function ($$v) {_vm.confirmSendLotteryDialog=$$v},expression:"confirmSendLotteryDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSendLottery}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendLotteryDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","width":"600px"},model:{value:(_vm.txLotteryReceiptDialog),callback:function ($$v) {_vm.txLotteryReceiptDialog=$$v},expression:"txLotteryReceiptDialog"}},[_c('v-card',{attrs:{"color":"blue-grey lighten-5"}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[(this.awaitingLotteryTx)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_vm._v("\n              Transaction broadcasted to the "),_c('b',[_vm._v("Althash Blockchain")]),_vm._v("!\n            ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n            Awaiting confirmation from the network...\n          ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-progress-linear',{attrs:{"indeterminate":true,"color":"blue"}})],1)],1):_vm._e(),_vm._v(" "),(this.txError)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"red--text"},[_c('p'),_c('h1',[_vm._v("Unsuccessful")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v(" \n                There was an error while running your transaction.\n              ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"error"},on:{"click":_vm.closeDialog}},[_vm._v("\n              Close\n            ")])],1)],1):_vm._e(),_vm._v(" "),(this.txLotteryConfirmed)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[(this.lotteryWin)?_c('v-flex',{attrs:{"xs12":""}},[(this.lotteryType != 'UFG')?_c('span',[_c('img',{attrs:{"src":__webpack_require__("+D9K")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold"},[_vm._v("\n                You have just won "+_vm._s(this.lotteryRewardAmount)+" "+_vm._s(this.lotteryType)+"!\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Are you sure you haven't seen any almanac around?\n              ")])]):_c('span',[_c('img',{attrs:{"src":__webpack_require__("gj2+")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"title"},[_vm._v("\n                Well, well... We have here the fastest draw in the west.\n              ")]),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold"},[_vm._v("\n                You have just won "+_vm._s(this.lotteryRewardAmount)+" BIFP!\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Now get outta here, or I'll hunt you down and shoot you like a duck!\n              ")])])]):_c('v-flex',{attrs:{"xs12":""}},[(this.lotteryType != 'UFG')?_c('span',[_c('img',{attrs:{"src":__webpack_require__("t7Gd")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold orange--text"},[_vm._v("\n                Not this time, McFly...\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Your \"lucky\" number was "),_c('b',[_vm._v(_vm._s(this.lotteryLuckyNumber))]),_vm._v(", but the drawn number was "),_c('b',[_vm._v(_vm._s(this.drawnNumber))]),_vm._v(".\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                So why don't you make like a tree... and get outta here?!\n              ")])]):_c('span',[_c('img',{attrs:{"src":__webpack_require__("AbdW")}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('p',{staticClass:"display-1 font-weight-bold orange--text"},[_vm._v("\n                Not this time, Mr. Eastwood...\n              ")]),_vm._v(" "),_c('p',[_vm._v("\n                Some other punk has been quicker than you.\n                "),_c('br'),_vm._v("\n                Next time try seven o'clock. I do my killin' before breakfast!\n              ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{staticClass:"grey--text",attrs:{"flat":""},on:{"click":_vm.closeDialog}},[_vm._v("\n              Close\n            ")])],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"blue","dark":""}},[_c('v-card-text',[_c('b',[_vm._v("Loading info...")]),_vm._v(" "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n          "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n        ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)}
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_controllers_Dapp_Photizo__ = __webpack_require__("g/I3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_controllers_CreateContract__ = __webpack_require__("QbG2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_controllers_SendToContract_vue__ = __webpack_require__("ayyg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_controllers_CallContract_vue__ = __webpack_require__("Nj6y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_controllers_Config__ = __webpack_require__("/kv9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_libs_config__ = __webpack_require__("6+u4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_libs_web_wallet__ = __webpack_require__("G2dt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_libs_i18n__ = __webpack_require__("KUFz");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  i18n: __WEBPACK_IMPORTED_MODULE_31_libs_i18n__["a" /* default */],
  data: function data() {
    return {
      wallet: false,
      walletAddress: '',
      walletBalance: '',
      current: "home",
      logout_dialog: false,
      network: __WEBPACK_IMPORTED_MODULE_29_libs_config__["a" /* default */].getNetwork(),
      mode: __WEBPACK_IMPORTED_MODULE_29_libs_config__["a" /* default */].getMode(),
      log: log,
      notifyList: {},
      loginItems: [{
        title: "Restore from Key File",
        name: "restore_from_key_file",
        action: "cloud_upload"
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
        title: "Generate New Wallet",
        name: "create",
        action: "account_balance_wallet"
      }, {
        title: "Create from Mnemonic",
        name: "create_from_mnemonic",
        action: "assignment"
      }],
      walletItems: [{
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
        action: "call_made"
      }, {
        title: "Request Payment",
        name: "request_payment",
        action: "call_received"
      }, {
        title: "Dump as Key File",
        name: "dump_as_key_file",
        action: "cloud_download"
      }, {
        title: "Safe Send",
        name: "safe_send",
        action: "security"
      }],
      smartContractItems: [{
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
        dapp_photizo: this.mode === "offline" || !this.wallet,
        dapps: this.mode === "offline" || !this.wallet
      };
    },
    headerClass: function headerClass() {
      return this.mode === "normal" ? this.network === "mainnet" ? "blue-grey lighten-5" : "red darken-3" : "blue-grey darken-4";
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
    DappPhotizo: __WEBPACK_IMPORTED_MODULE_24_controllers_Dapp_Photizo__["a" /* default */],
    CreateContract: __WEBPACK_IMPORTED_MODULE_25_controllers_CreateContract__["a" /* default */],
    SendToContract: __WEBPACK_IMPORTED_MODULE_26_controllers_SendToContract_vue__["a" /* default */],
    CallContract: __WEBPACK_IMPORTED_MODULE_27_controllers_CallContract_vue__["a" /* default */],
    Config: __WEBPACK_IMPORTED_MODULE_28_controllers_Config__["a" /* default */]
  },
  methods: {
    setWallet: function setWallet() {
      this.wallet = __WEBPACK_IMPORTED_MODULE_30_libs_web_wallet__["a" /* default */].getWallet();
      this.wallet.init();
      if (this.wallet) {
        if (this.mode === "offline") {
          this.current = "request_payment";
        } else {
          this.current = "home";
        }
      }
    },
    logout: function logout() {
      this.wallet = null;
      this.current = "home";
      this.logout_dialog = false;
    },
    changeView: function changeView(name) {
      this.current = name;
    },
    openDapp: function openDapp(name) {
      if (this.mode === "offline" || !this.wallet) {
        alert('You need to either import or create a new Wallet before using Dapps! Please use the menu at the top-right corner of the page.');
      } else {
        this.changeView(name);
      }
    },
    openURL: function openURL(url) {
      window.open(url, "_blank");
    },
    error: function error(msg) {
      var isHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      this.addNotify(msg, "error", true, ttl);
    },
    success: function success(msg) {
      var isHtml = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      this.addNotify(msg, "success", true, ttl);
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
//
//
//
//
//
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
      this.repeatPassword = '';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8558e20_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreMobile_vue__ = __webpack_require__("Rq6l");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8558e20_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RestoreMobile_vue__["a" /* default */],
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

/***/ "z9s6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-card-title',{staticClass:"justify-center"},[_c('span',{staticClass:"headline"},[_c('img',{attrs:{"src":__webpack_require__("wOSG")}})])])],1)],1),_vm._v(" "),_c('v-tabs',{attrs:{"centered":"","icons-and-text":"","color":"transparent","slider-color":"deep-orange"},model:{value:(_vm.active),callback:function ($$v) {_vm.active=$$v},expression:"active"}},[_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Info\n        "),_c('v-icon',[_vm._v("info")])],1),_vm._v(" "),_c('v-tab',{attrs:{"ripple":""}},[_vm._v("\n        Redeem\n        "),_c('v-icon',[_vm._v("check_circle")])],1),_vm._v(" "),_c('v-tab-item',[[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs12":"","sm6":"","offset-sm3":""}},[_c('br'),_c('br'),_vm._v(" "),_c('v-card',[_c('v-card-text',[_c('div',{attrs:{"align":"center"}},[_c('div',[_c('img',{staticStyle:{"height":"auto","width":"75%"},attrs:{"src":__webpack_require__("90T0")}})]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"display-1"},[_vm._v("Welcome to CypticMAG!")]),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('span',{staticClass:"subheading"},[_vm._v("\n                    This application allows the redeeming of rewards found inside your Cryptic Magazine.\n                    "),_c('br'),_c('br'),_vm._v("\n            \t\t    To redeem your prize view the \"redeem\" tab, then enter the code found inside your magazine along with your destination wallet.\n            \t\t    "),_c('br'),_c('br'),_vm._v("\n            \t\t    After you have entered in the code, review that the info is correct then press confirm.\n            \t\t    "),_c('br'),_c('br'),_vm._v("\n            \t\t    We look forward to rewarding you again in the next edition.\n            \t\t    "),_c('br'),_c('br'),_vm._v("\n            \t\t    Stay Tuned & Good Luck!\n                    "),_c('br'),_c('br'),_c('br'),_c('br'),_vm._v(" "),_c('small',[_c('b',[_vm._v("Disclaimer")]),_vm._v(" "),_c('br'),_vm._v("\n                      HTMLCoin Foundation has reviewed and approved this application's code, having Althash Web Platform as a proud host, however the Foundation is not responsible for any funds transacted within this application scope.\n                      "),_c('br'),_vm._v("\n                      By using this application you agree on these terms.\n                    ")])]),_vm._v(" "),_c('br'),_c('br')])])],1)],1)],1)]],2),_vm._v(" "),_c('v-tab-item',[_c('v-card',{attrs:{"flat":""}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs6":"","offset-xs3":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title"},[_vm._v("\n                    Total available:\n                  ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v(_vm._s((Math.round(this.totalMAGAvailable * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" MAG")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v(_vm._s((Math.round(this.totalHTMLAvailable * 100) / 100).toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2}))+" HTML")])]),_vm._v(" "),(this.totalMAGPrizesAvailable > 1)?_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v(_vm._s(this.totalMAGPrizesAvailable)+" rewards")])]):(this.totalMAGPrizesAvailable == 1)?_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v("1 reward")])]):_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v("No rewards available.")])]),_vm._v(" "),(this.totalHTMLPrizesAvailable > 1)?_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v(_vm._s(this.totalHTMLPrizesAvailable)+" rewards")])]):(this.totalHTMLPrizesAvailable == 1)?_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v("1 reward")])]):_c('v-flex',{attrs:{"xs6":"","title":""}},[_c('b',[_vm._v("No rewards available.")])])],1),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"label":"Reward Code","required":"","outline":"","background-color":"orange"},model:{value:(_vm.rewardCode),callback:function ($$v) {_vm.rewardCode=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"rewardCode"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Destination Wallet Address","outline":"","background-color":"orange"},model:{value:(_vm.destinationWalletAddress),callback:function ($$v) {_vm.destinationWalletAddress=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"destinationWalletAddress"}}),_vm._v(" "),_c('br'),_c('br'),_vm._v(" "),_c('v-layout',[_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Price (1e-8 HTML/gas)","required":"","outline":"","background-color":"deep-orange"},model:{value:(_vm.gasPrice),callback:function ($$v) {_vm.gasPrice=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasPrice"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Gas Limit","required":"","outline":"","background-color":"deep-orange"},model:{value:(_vm.gasLimit),callback:function ($$v) {_vm.gasLimit=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"gasLimit"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs4":""}},[_c('v-text-field',{attrs:{"label":"Fee","required":"","outline":"","background-color":"deep-orange"},model:{value:(_vm.fee),callback:function ($$v) {_vm.fee=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"fee"}})],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticClass:"success",attrs:{"disabled":_vm.notValid},on:{"click":_vm.send}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"50%"},model:{value:(_vm.confirmSendDialog),callback:function ($$v) {_vm.confirmSendDialog=$$v},expression:"confirmSendDialog"}},[_c('v-card',[_c('v-card-title',[_c('span',{staticClass:"headline"},[_vm._v("\n                      "+_vm._s(_vm.$t('send_to_contract.confirm'))+"\n                    ")])]),_vm._v(" "),_c('v-card-text',[_c('v-container',{attrs:{"grid-list-md":""}},[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-textarea',{attrs:{"label":"Raw Tx","disabled":""},model:{value:(_vm.rawTx),callback:function ($$v) {_vm.rawTx=$$v},expression:"rawTx"}})],1)],1)],1)],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.canSend && !_vm.sending),expression:"canSend && !sending"}],staticClass:"blue--text darken-1",attrs:{"flat":""},on:{"click":_vm.confirmSend}},[_vm._v(_vm._s(_vm.$t('common.confirm')))]),_vm._v(" "),_c('v-btn',{staticClass:"red--text darken-1",attrs:{"flat":"","v-show":!_vm.sending},nativeOn:{"click":function($event){_vm.confirmSendDialog = false}}},[_vm._v(_vm._s(_vm.$t('common.cancel')))]),_vm._v(" "),_c('v-progress-circular',{directives:[{name:"show",rawName:"v-show",value:(_vm.sending),expression:"sending"}],staticClass:"primary--text",attrs:{"indeterminate":"","size":20}})],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","width":"600px"},model:{value:(_vm.txReceiptDialog),callback:function ($$v) {_vm.txReceiptDialog=$$v},expression:"txReceiptDialog"}},[_c('v-card',{attrs:{"color":"white"}},[_c('v-container',{attrs:{"fluid":"","grid-list-md":""}},[(this.awaitingTx)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_vm._v("\n                Transaction broadcasted to the "),_c('b',[_vm._v("Althash Blockchain")]),_vm._v("!\n              ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n              Awaiting confirmation from the network...\n            ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-progress-linear',{attrs:{"indeterminate":true,"color":"orange"}})],1)],1):_vm._e(),_vm._v(" "),(this.txError)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"red--text"},[_c('p'),_c('h1',[_vm._v("Unsuccessful")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v(" \n                  This reward code has either been claimed or is invalid.\n                ")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"error"},on:{"click":function($event){_vm.txError = false; _vm.txReceiptDialog = false}}},[_vm._v("\n                Close\n              ")])],1)],1):_vm._e(),_vm._v(" "),(this.txConfirmed)?_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","text-xs-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('span',{staticClass:"title blue--text"},[_c('h1',[_vm._v("Successful!")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_vm._v("\n              The reward was successfully redeemed. Congrats!\n            ")]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-btn',{attrs:{"color":"warning"},on:{"click":_vm.closeMsg}},[_vm._v("\n                Close\n              ")])],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c('v-dialog',{attrs:{"hide-overlay":"","persistent":"","width":"300"},model:{value:(_vm.loading),callback:function ($$v) {_vm.loading=$$v},expression:"loading"}},[_c('v-card',{attrs:{"color":"blue","dark":""}},[_c('v-card-text',[_c('b',[_vm._v("Loading info...")]),_vm._v(" "),_c('v-progress-linear',{staticClass:"mb-0",attrs:{"indeterminate":"","color":"white"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f7ef0b6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateMnemonic_vue__ = __webpack_require__("N9Gj");
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f7ef0b6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_CreateMnemonic_vue__["a" /* default */],
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
//# sourceMappingURL=app.c6d2e699ecb3be31fe4b.js.map