pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Student.sol";
import "../contracts/Subject.sol";

contract TestStudent {
    Student student;
    
    function testCreateStudent() {
        student = Student(DeployedAddresses.Student());
        bool studentExist = student.exist();
        Assert.equal(studentExist, true, "student now exists");
    }

    function testAddSubject() {
        student.addSubject("test");
    }

    function testSetSubjectGrade() {
        bool success = student.setSubjectGrade("test", Subject.Grade.A);
        Assert.isTrue(success, "set new subject grade Success");
    }

    function testSetSubjectGradeFail() {
        bool success = student.setSubjectGrade("test", Subject.Grade.B);
        Assert.isFalse(success, "set old subject grade Fail");
    }
}
