/*
  Submitted By:
        Name: Bhavika Jagdishbhai Patel 
        Humber ID: N01432720 
        Section: XML and Java Script - ITC-5202-0IA
        Assignment - Week 10 : assignment_students.js
*/

//load students.json file from data directory
const students = require("../data/students");

// retrieve all persons' info
const getAll = ({ rollNo, firstName, lastName, nickName, marks }) =>
  new Promise((resolve) => {
    let students_result = Array.from(students);

    if (rollNo) {
        //compare atrribute @rollNo
        students_result = students_result.filter((item) => item['@rollNo'] === Number(rollNo));
    }

    if (firstName) {
        students_result = students_result.filter((item) => item.firstName === firstName);
    }

    if (lastName) {
        students_result = students_result.filter((item) => item.lastName === lastName);
    }

    if (nickName) {
        students_result = students_result.filter((item) => item.nickName === nickName);
    }

    if (marks) {
        students_result = students_result.filter((item) => item.marks === Number(marks));
    }

    //when retrieved result has data
    if (students_result.length > 0) {
      resolve({
         code: 200, 
         data: JSON.stringify(students_result) 
      });
    } else
      resolve({
        code: 404,
        data: JSON.stringify({ message: `No Student found!!!` }),
      });
  });

//retrieve student by its rollNo
const getById = (rollNo) =>
  new Promise((resolve) => {
    //compare Student's node attribute '@rollNo' using find()
    let students_result = students.find((student) => student['@rollNo'] === Number(rollNo));
    
    if (students_result) {
      resolve({ 
        code: 200, 
        data: JSON.stringify(students_result) 
      });
    } else {
      resolve({
        code: 404,
        data: JSON.stringify({ message: `No Student found for roll number ${rollNo}` }),
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
