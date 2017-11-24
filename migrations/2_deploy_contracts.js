var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Student = artifacts.require("./Student.sol");
var Subject = artifacts.require("./Subject.sol");
var Reg = artifacts.require("./Reg.sol");
var Mortal = artifacts.require("./Mortal.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Mortal);
  deployer.deploy(Subject);
  deployer.deploy(Student);
  deployer.deploy(Reg);
};
