pragma solidity ^0.4.11;

import './Mortal.sol';
import './Subject.sol';
import './Student.sol';


contract Reg is Mortal {
    bool public withDrawPenalty;
    mapping (bytes8 => Subject) subjects;
    mapping (address => Student) students;

    function Reg() {
        withDrawPenalty = false;
    }

    function registerSubject(bytes8 _subjectId, uint _openSeats, address _teacher) public onlyOwner {
        require(subjects[_subjectId].exist() == false);
        subjects[_subjectId] = Subject(msg.sender);
        subjects[_subjectId].setOpenSeats(_openSeats);
        subjects[_subjectId].setTeacher(_teacher);
    }

    function registerStudent() public onlyOwner {
        require(students[msg.sender].exist() == false);
        students[msg.sender] = Student(msg.sender);
    }

    function isStudentValid(address _studentAddress) public view returns (bool) {
        return students[_studentAddress].exist();
    }

    function isSubjectValid(bytes8 _subjectId) public view returns (bool) {
        return subjects[_subjectId].exist();
    }

    function registerStudentToSubject(address _student, bytes8 _subjectId) {
        require(students[_student].exist() == true);
        subjects[_subjectId].registerStudent(_student);
        students[_student].addSubject(_subjectId);
    }
}
