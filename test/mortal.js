var Mortal = artifacts.require("./Mortal.sol");

contract('Mortal', function(accounts) {
    it("...creates successfully", function() {
        console.log("first account", accounts[0]);
        return Mortal.new({from: accounts[0]}).then(function(instance) {
            var MortalInstance = instance;

            return MortalInstance.owner();
        }).then(function (owner) {
            console.log("mortal owner", owner);
        });
    });

});
