require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid gloom tape slab chest note ridge purse hunt lobster fortune gift'; 
let testAccounts = [
"0x3d30cc6876ea8b64d8388b3fff20a7629abe6d64107be3a80c5f06d96495dc82",
"0x06657619ac147be5853e05ae12520e8a1e5ce66edb0a7bbf406643b50c4af59d",
"0x244b1ee3b49fb81d13050fff4307139a3e67220855ea1a92395abbba81e85c26",
"0x83de8a9b5e6c41578ea5850e83e0c364b5115a5e4961cbd899a7c57f46339b21",
"0x90af6887b669448dde3c745e0b34fb6ebe733f79cc01d41d5baf36912b374f56",
"0x35d6dc433b3ae3403e922d6281b954c4918d04ec0d7144386d0c9554616aa15d",
"0x6567f143ab7e8a8cd0547a1d37a40b90124984c47a2877ba815551b8851c8617",
"0x5de9add3d4f0591bb09a57619f437d3eb1379a8ab7e03aa63b780d0707ce36ec",
"0x09beed747a515f4538603c3b27ef59b5a3ca5c300172a1c65ed0fa85d266052a",
"0x490363acc0a63f5316d12ebb1e157fabf744d30d2726d94ddbfdfc2c528fbda8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

