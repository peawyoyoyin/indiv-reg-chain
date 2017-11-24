pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Mortal.sol";

contract TestMortal {
    Mortal mortal;

    function testCreateMortal() {
        mortal = Mortal(DeployedAddresses.Mortal());
    }
}
