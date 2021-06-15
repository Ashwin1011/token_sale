var DappToken = artifacts.require("./DappToken.sol");
var DappTokenSale = artifacts.require("./DappTokenSale.sol");
var TestToken = artifacts.require("./Token.sol/BEP20Token");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000;
    return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
  });
};

// module.exports = async function(deployer){
//   await deployer.deploy(TestToken);
//   console.log("Deployed address : ",TestToken.address)
// }
