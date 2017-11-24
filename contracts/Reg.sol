pragma solidity ^0.4.11;

import './Subject.sol';

contract Mortal {
    address owner;

    function Mortal() {
        owner = msg.sender;
    }

    function destroy() {
        if (msg.sender == owner) {
            selfdestruct(owner);
        }
    }
}

contract Reg is Mortal {
    mapping (string => Subject) subjects;

    function registerSubject(string _subjectId, uint _openSeats, address _teacher) {
        require(subjects[_subjectId] == address(0x0));
        subjects[_subjectId] = new Subject(_openSeats,_teacher);
    }

    function getSubject(string _subjectId) returns (Subject) {
        return subjects[_subjectId];
    }
}
