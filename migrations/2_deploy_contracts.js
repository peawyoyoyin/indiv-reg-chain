var Subject = artifacts.require("./Subject.sol");
var Reg = artifacts.require("./Reg.sol");
module.exports = function(deployer) {
  deployer.deploy(Subject);
  deployer.deploy(Reg);
};
