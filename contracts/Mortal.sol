pragma solidity ^0.4.11;

contract Mortal {
    address public owner;

    function Mortal() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function destroy() public onlyOwner {
        selfdestruct(owner);
    }


}
