/*
  Submitted By:
        Name: Bhavika Jagdishbhai Patel 
        Humber ID: N01432720 
        Section: XML and Java Script - ITC-5202-0IA
        Lab Activity - Week 10 : person.js
*/
const persons = require("../data/persons");

// retrieve all persons' info
const getAll = ({ id, first_name, last_name, email, gender, ip_address }) =>
  new Promise((resolve) => {
    let person_result = Array.from(persons);

    if (id) {
        person_result = person_result.filter((item) => item.id === Number(id));
    }

    if (first_name) {
        person_result = person_result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
        person_result = person_result.filter((item) => item.last_name === last_name);
    }

    if (email) {
        person_result = person_result.filter((item) => item.email === email);
    }

    if (gender) {
        person_result = person_result.filter((item) => item.gender.toLowerCase() === gender.toLowerCase());
    }

    if (ip_address) {
        person_result = person_result.filter((item) => item.ip_address === ip_address);
    }

    if (person_result) {
      resolve({ code: 200, data: JSON.stringify(person_result) });
    } else {
      resolve({
        code: 404,
        data: { message: `No person found!!!` },
      });
    }
  });

//retrieve product by its id
const getById = (id) =>
  new Promise((resolve) => {
    const person_result = persons.find((person) => person.id === Number(id));
    
    if (person_result) {
      resolve({ code: 200, data: JSON.stringify(person_result) });
    } else {
      resolve({
        code: 404,
        data: { message: `No person found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
