pragma solidity ^0.4.11;

import './Subject.sol';

contract Student {
    mapping (bytes8 => Subject.Grade) subjects;
    bool public exist;
    address public owner;

    function Student() public {
        exist = true;
        owner = msg.sender;
    }

    function addSubject(bytes8 _subjectId) public {
        subjects[_subjectId] = Subject.Grade.Undergoing;
    }

    function setSubjectGrade(bytes8 _subjectId, Subject.Grade _grade) public returns (bool) {
        if (subjects[_subjectId] == Subject.Grade.Undergoing) {
            subjects[_subjectId] = _grade;
            return true;
        } else {
            return false;
        }
    }
}
