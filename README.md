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
