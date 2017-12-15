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

    function registerSubject(address _subjectAddress, bytes8 _subjectId, uint _openSeats, address _teacher) public {
        require(subjects[_subjectId].exist() == false);
        subjects[_subjectId] = Subject(_subjectAddress);
        subjects[_subjectId].setOpenSeats(_openSeats);
        subjects[_subjectId].setTeacher(_teacher);
    }

    function registerStudent(address _studentAddress) public {
        require(students[_studentAddress].exist() == false);
        students[_studentAddress] = Student(_studentAddress);
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

    function withdrawStudentFromSubject(address _student, bytes8 _subjectId) {
        require(students[_student].exist() == true);
        subjects[_subjectId].studentWithDraw(_student,withDrawPenalty);
        students[_student].withDrawSubject(_subjectId,withDrawPenalty);
    }

    function setStudentGrade(address _student, bytes8 _subjectId, Subject.Grade _grade) {
        require(students[_student].exist() == true);
        students[_student].setSubjectGrade(_subjectId, _grade);
    }
}
