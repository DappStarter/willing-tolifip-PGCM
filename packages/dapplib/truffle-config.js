require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note spider unique harvest crew foster genuine'; 
let testAccounts = [
"0xa747d37e00d8914103ce6deb6ababa355a94a4d71176ded523b1d2b5c2720211",
"0x493d1ef7d6f20fe2cb85451c07ebaa9fcc4e6e5bfe266a1582459c81485e20ef",
"0x312bb89d36eea22c9bf2df6c4918317f91aa9ac7a253e4a8ea59399920530f8d",
"0xfa95c487d4e7ff1978917038cd0a2c43c485d6dabf932963ed39dd607f8e68f4",
"0x7d1cecc99b269671d1c913189502a792d108ad4f3f9e4edd18fffcf3e3a6f112",
"0xeb558ec0c5fedcc18ec466f0f22c9b9a858aa177ec4547c3f8dc6445bd383004",
"0x17fbed869faad49e0a9189cd3ef9022f341d28f1d5276500cd24d1f7f546f1aa",
"0xd6fabcfea0e053b10593b4a7c138518b5aec580e8433a0613d1b0e9203a7f0f3",
"0xe89cfbe95cae6b9ad3184aa6221225658960c6d5a84c80ff4fe6d5cacff452a8",
"0x73a7da639e480795ebbaa879c51e9284f76d657eca98c7a97d251d0c6475d6f2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


