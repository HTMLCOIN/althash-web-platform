export default {
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
      priv_key: 'Private Key',
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
      token_contract_address_is_not_exists: 'Token contract address does not exist! Please confirm and try again.',
    },
    mode: {
      normal: 'Normal',
      offline: 'Offline',
    }
  },
  mnemonic: {
    input_words: 'Please input the mnemonic words',
    label: 'M'
  },
  password: {
    enter: 'Please enter you password',
    password: 'password',
  },
  file_reader: {
    upload: 'Upload',
  },
  file_creator: {
    download: 'Please click on the button below to download your key file.',
  },
  ledger: {
    comm_fail: 'Fail to connect Ledger. Please reconnect your ledger and try again.',
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
    next_10: 'Next 10 Address',
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
    info3_offline: 'Please finish this step on the online computer',
  },
  send: {
    send_tokens: 'SEND',
    enter_address: 'Please enter the address again',
    going_to_send: 'Do you confirm sending ',
    to_address: 'to address ',
    token_address: 'Token Contract Address',
  },
  request_payment: {
    title: 'REQUEST PAYMENT',
  },
  create_token: {
    title: 'CREATE TOKEN',
    name: 'Token Name',
    symbol: 'Token Symbol',
    decimal: 'Decimals (It\'s recommended to set decimals to 8)',
    total_supply: 'Total Supply (UNIT: 1 Token)',
    confirm: 'Do you confirm the creation of this Token?',
  },
  create_contract: {
    title: 'CREATE CONTRACT',
    confirm: 'Do you confirm to publish this contract?',
    compiler: 'Compiler',
  },
  send_to_contract: {
    title: 'SEND TO CONTRACT',
    confirm: 'Do you confirm?',
  },
  call_contract: {
    title: 'CALL CONTRACT',
    result: 'Result',
  },
  create: {
    title: 'GENERATE NEW WALLET',
  },
  create_mnemonic: {
    title: 'GENERATE NEW WALLET FROM MNEMONIC',
    remember: 'Please remember the following mnemonics:',
    remembered: 'I remember it. Let\'s check!',
  },
  restore: {
    title: 'RESTORE WALLET FROM MNEMONIC',
    mnemonic_warning: 'The input words are not bip39 mnemonics. If your address is generated by this wallet, please cancel this dialog and then check your words (no spaces, no capital letters, etc.). If you have double checked your words, you can continue.',
  },
  restore_wif: {
    title: 'RESTORE WALLET FROM WIF',
    priv_key: 'WIF',
  },
  restore_mobile: {
    title: 'RESTORE FROM MOBILE WALLET',
  },
  restore_key_file: {
    title: 'RESTORE WALLET FROM THE KEY FILE',
    password_title: 'Please input you password to decrypt the wallet',
  },
  restore_ledger: {
    title: 'RESTORE FROM LEDGER',
    usage: 'Please ensure your firmware and app are the newest version. Plugin your Ledger, open Html APP, and then click the "CONNECT" button below try to connect.',
    download: 'No Html APP? Please install it follow this https://www.ledgerwallet.com/apps/manager',
    connect: 'CONNECT',
  },
  view: {
    title: 'WALLET INFO',
  },
  view_tx: {
    title: 'WALLET TRANSACTIONS',
    recent: 'Most recent 10 txs',
    tx: 'Tx: ',
    mined_at: 'Mined at ',
    total_in: 'TOTAL IN: ',
    fee: 'FEE: ',
    total_out: 'TOTAL OUT: ',
  },
  dump_as_key_file: {
    title: 'DUMP AS A KEY FILE',
    password_title: 'Please input a password to encrypt your key file:',
    warning: 'Please remember the password. If you lose it, the key file cannot be decrypted anymore.',
  },
  config: {
    title: 'SETTINGS',
    lan: 'Language',
    network: 'Network',
    mode: 'Mode',
  },
  warning: {
    title: 'IMPORTANT',
    list: [
      'We cannot recover your funds if you visit a phishing site or lose your backups. Please make sure to keep backups of your private keys/seed words safe.',
      'We do not store your private keys and/or seed words on this web wallet.',
      'We are not responsible for any lost funds or damages related to the use of this platform.',
      'You as a user, are entirely responsible for your funds and your own security.',
      'Please make sure to utilize updated operating systems and antivirus programs/services.',
      'Please keep your private keys PRIVATE, do not provide them to anyone.',
      'If you use Restore from Mnemonic, the seed words and password must be exactly right or the wallet will create a new address. When using Restore from Mnemonic, confirm you have the correct address.'
    ]
  }
}
