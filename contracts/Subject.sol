pragma solidity ^0.4.11;

import './Mortal.sol';

contract Subject is Mortal {
    enum Grade { NotExist, A, B, C, D, F, W, Undergoing }

    bool public exist;
    uint public openSeats;
    mapping (address => Grade) grades;
    address public teacher;

    function Subject() public {
        openSeats = 0;
        teacher = 0;
        owner = msg.sender;
        exist = true;
    }

    function setTeacher(address _teacher) public onlyOwner {
        require(teacher == 0);
        teacher = _teacher;
    }

    function setOpenSeats(uint _openSeats) {
        openSeats = _openSeats;
    }

    function destroy() public {
        if (msg.sender == owner || msg.sender == teacher) {
            exist = false;
            selfdestruct(msg.sender);
        }
    }

    function registerStudent(address _student) public {
        require(grades[_student] == Grade.NotExist);
        grades[_student] = Grade.Undergoing;
    }

    function studentWithDraw(address _student, bool _withdrawPenalty) public {
        if (_withdrawPenalty) {
            grades[_student] = Grade.W;
        } else {
            grades[_student] = Grade.NotExist;
        }
    }

    function setStudentGrade(address _student, Subject.Grade _grade) public returns (bool) {
        require(msg.sender == teacher);
        if (grades[_student] == Grade.Undergoing) {
            grades[_student] = _grade;
            return true;
        } else {
            return false;
        }
    }
}
