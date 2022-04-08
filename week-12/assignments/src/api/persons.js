const persons = require("../data/persons");

const getAll = ({ id, first_name, last_name, email, gender, ip_address, language, job_title, department, linkedin_skill, race } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(persons);

    /*if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((item) => item.last_name === last_name);
    }

    if (price) {
      result = result.filter((item) => item.price === Number(price));
    }*/

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const person = persons.find((person) => person.id === id);

    if (persons) {
      resolve({ code: 200, data: persons });
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
