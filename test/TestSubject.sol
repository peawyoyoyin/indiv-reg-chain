pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Subject.sol";
import "../contracts/Reg.sol";

contract TestSubject {

    Subject subject = new Subject(10,DeployedAddresses.Subject());

    function testExist() {
        Assert.equal(subject.getExist(),true,"It should store the value true.");
    }
    
    function testWithdrawPenalty() {
        Assert.equal(subject.getWithdrawPenalty(),false,"It should store the value false.");
    }

    function testOpenSeats() {
        Assert.equal(subject.getOpenSeats(),10,"It should store the value 10.");
    }

    function testTeacher() {
        Assert.equal(subject.getTeacher(),DeployedAddresses.Subject(),"It should store the value true.");
    }
}