# Individual Studies Project: RegChain

An implementation of registration system, backed up by blockchain. Designed to be a proof-of-concept.

Since smart contract execution costs ethereum, it is determined for us to optimize contract code.

## What can/should be _public_:

 - Subject informations e.g. course name and syllabuses.
 - Identity of Teachers.
 - Amount of available seats per subject.

## What should be **private**

 - Identity of students.
 - Grades.

## Stack:

 - Smart Contract Development: Truffle.
 - Web Interface: React (Using truffle's `react` box).
 - DevTools include: TestRPC (`ethereumjs-testrpc`), geth.

## Planned Website Flow

 - Login Page
   - Login into each student's personal account, "accounts" is much likely to be represented as _addresses_ in this state.
   - App asks the Reg system if the address is Valid
     - through `Reg.isStudentValid(address)` (public view function)
   - If student is a valid student, save the address for further transactions.
 - Register Page
   - Users(students) input a list of subjects
   - In background app checks if the input subject id is valid
     - through `Reg.isSubjectValid(bytes8)`
   - When user submits the actual registration list, the app rapidly sends a subject register request (through `Reg.registerStudentToSubject(address, bytes8)`) per subjects submitted.
     - this should requires a password
   - Results should come in _later_ (not sure how long), students should always be able to check.
     - I'm not really sure how to implement this logic. We should be able to detect if `registerStudentToSubject()` succeed or not somehow.
 - Results page
    - this should show the state (grades) of each subjects the student has registered
      - through `Student.getSubjectsList()` to get list of all subjects and `Student.getSubjectGrade()` to get Grades for each subject.
 - Course Info Page
    - this page shows additional information (more than subject Ids) for subjects
      - information should be **purely** public and kept out of the smart contract.
