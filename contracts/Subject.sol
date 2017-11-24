pragma solidity ^0.4.11;

contract Subject {
    address owner;
    enum Grade { NotExist, A, B, C, D, F, W, Undergoing }

    bool exist;
    bool withdrawPenalty;
    uint openSeats;
    mapping (address => Grade) grades;
    address teacher;
    
    function Subject(uint _openSeats, address _teacher) {
        openSeats = _openSeats;
        teacher = _teacher;
        owner = msg.sender;
        withdrawPenalty = false;
        exist = true;
    }

    function destroy() {
        if (msg.sender == owner || msg.sender == teacher) {
            exist = false;
            selfdestruct(msg.sender);
        }
    }

    function registerStudent(address _student) {
        require(grades[_student] == Grade.NotExist);
        grades[_student] = Grade.Undergoing;
    }

    function studentWithDraw(address _student) {
        if (withdrawPenalty) {
            grades[_student] = Grade.W;
        } else {
            grades[_student] = Grade.NotExist;
        }
    }

    function getExist() returns (bool) {
        return exist;
    }

    function getWithdrawPenalty() returns (bool) {
        return withdrawPenalty;
    }

    function getOpenSeats() returns (uint) {
        return openSeats;
    }

    function getTeacher() returns (address) {
        return teacher;
    }
}
