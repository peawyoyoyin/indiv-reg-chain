pragma solidity ^0.4.11;

import './Subject.sol';

contract Student {
    mapping (bytes8 => Subject.Grade) subjects;
    bytes8[] subjectsList;
    bool public exist;
    address public owner;
    
    function Student() public {
        exist = true;
        owner = msg.sender;
    }

    function addSubject(bytes8 _subjectId) public {
        subjects[_subjectId] = Subject.Grade.Undergoing;
        subjectsList.push(_subjectId);
    }

    function setSubjectGrade(bytes8 _subjectId, Subject.Grade _grade) public returns (bool) {
        if (subjects[_subjectId] == Subject.Grade.Undergoing) {
            subjects[_subjectId] = _grade;
            return true;
        } else {
            return false;
        }
    }

    function getStudentSubjects() public returns (bytes8[]) {
        return subjectsList;
    }

    function withDrawSubject(bytes8 _subjectId, bool _withDrawPenalty) public {
        if (_withDrawPenalty) {
            subjects[_subjectId] = Subject.Grade.W;
        } else {
            subjects[_subjectId] = Subject.Grade.NotExist;
        }
    }

}
