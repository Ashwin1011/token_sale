module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: "7545",
      network_id: "*" // match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4,
      gas: 4700000
    }
  },
  compilers: {
    solc: {
      version: "^0.8.4", // A version or constraint - Ex. "^0.5.0"
                         // Can also be set to "native" to use a native solc
    }
  }
};
