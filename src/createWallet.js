//import
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// definir rede (caso rodar real trocar testnet por bitcoin)
const network = bitcoin.networks.testnet;

//derivação de carteiras
const path = "m/49'/1'/0'/0/0";

//gerar palavras aleatórias
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//criar raiz da carteira
let root = bip32.fromSeed(seed, network);

//criar conta
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2wpkh({ 
    pubkey: node.publicKey, 
    network: network, 
}).address;

console.log("Carteira criada com sucesso!");
console.log("Endereço: ", btcAddress);
console.log("Chave privada: ", node.toWIF());
console.log("Seed", mnemonic);