var Subject = artifacts.require("./Subject.sol");

contract('Subject', function(accounts) {
    var SubjectInstance;
    it('...creates successfully', function() {
        return Subject.new({from: accounts[0]}).then(function(instance) {
            SubjectInstance = instance;
        });
    });

    it('...should exist', function() {
        return Subject.new({from: accounts[0]}).then(function(instance) {
            return instance.exist();
        }).then(function(exist) {
            assert.isTrue(exist, "exist is initialized as true");
        });
    });

    it('...should have ownership', function() {
        return Subject.new({from: accounts[0]}).then(function(instance) {
            return instance.owner();
        }).then(function(owner) {
            assert.equal(owner, accounts[0], "owner is msg.sender");
        });
    });

    it('...should initially have 0 open seats', function() {
        return Subject.new({from: accounts[0]}).then(function(instance) {
            return instance.openSeats();
        }).then(function(openSeats) {
            assert.equal(openSeats, 0, "openSeats initially is 0");
        });
    });

    it('...should initially have teacher address 0', function() {
        return Subject.new({from: accounts[0]}).then(function(instance) {
            return instance.teacher();
        }).then(function (teacher) {
            assert.equal(teacher, "0x0000000000000000000000000000000000000000", "teacher initially is 0x0");
        });
    });

    it('...should be able to set teacher correctly', function() {
        var subjectInstance;
        return Subject.new({from: accounts[0]}).then(function(instance) {
            subjectInstance = instance;
            return subjectInstance.setTeacher(accounts[1], {from: accounts[0]});
        }).then(function(result) {
            return subjectInstance.teacher.call();
        }).then(function(teacher){
            assert.equal(teacher, accounts[1], "teacher address is correct after set");
        })
    });

    it('...should be able to set seats correctly', function() {
        var subjectInstance;
        return Subject.new({from: accounts[0]}).then(function(instance) {
            subjectInstance = instance;
            return subjectInstance.setOpenSeats(1, {from: accounts[0]});
        }).then(function(result) {
            return subjectInstance.openSeats.call();
        }).then(function(openSeats) {
            assert.equal(openSeats, 1, "openSeats is correct after set");
        });
    });

    it('...should be able to add students', function() {
        var subjectInstance;
        return Subject.new({from: accounts[0]}).then(function(instance) {
            subjectInstance = instance;
            return subjectInstance.setOpenSeats(1, {from: accounts[0]});
        }).then(function(result) {
            return subjectInstance.registerStudent(accounts[2], {from: accounts[0]});
        }).then(function(result) {
            return subjectInstance.openSeats.call();
        }).then(function(openSeats) {
            assert.equal(openSeats, 0, "class have no empty seats after register");
        });
    });
});
