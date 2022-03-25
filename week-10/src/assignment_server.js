
/*
  Submitted By:
        Name: Bhavika Jagdishbhai Patel 
        Humber ID: N01432720 
        Section: XML and Java Script - ITC-5202-0IA
        Assignment - Week 10 : assignment_server.js
*/

const http = require("http");

const students = require("./controllers/assignment_students");

const parseURLParams = (value) => {
  const params = new URLSearchParams(value);

  return Array.from(params.entries()).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
};

const server = http.createServer(async (req, res) => {
  const [basePath, paramsString] = req.url.split("?");

  if (basePath === "/api/students" && req.method === "GET") {
    const params = parseURLParams(paramsString);

    const { data, code } = await students.getAll(params);

    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(data);
  } else if (basePath.match(/\/api\/students\/\w+/) && req.method === "GET") {
    const id = basePath.split("/")[3];

    const { data, code } = await students.getById(id);

    res.writeHead(code);
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found!!!" }));
  }
});

const PORT = 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
