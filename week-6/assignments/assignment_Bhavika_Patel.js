/*
Submitted By:
        Name: Bhavika Jagdishbhai Patel 
        Humber ID: N01432720 
        Section: XML and Java Script - ITC-5202-0IA
        Week 6 - Assignment - assignment_Bhavika_Patel.js
*/

//create template for html
const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim();         //removes extra space from the node if any
    template.innerHTML = html;
    return template.content.firstChild;
};

//load data using callback
const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
        if (target.readyState == 4 && target.status == 200) {
            callback(target.responseXML);
        }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
};
  
const generateTableRow = (item) => {
    const ID = Array.from(item.getElementsByTagName(`id`))[0];
    const firstName = Array.from(item.getElementsByTagName(`firstName`))[0];
    const lastName = Array.from(item.getElementsByTagName(`lastName`))[0];

    //fullname : firstName + " " + lastName
    const fullName = firstName.textContent + " " + lastName.textContent;
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ipAddress = Array.from(item.getElementsByTagName(`ipAddress`))[0];
  
    return `<tr>
      <td>${ID.textContent}</td>
      <td>${fullName}</td>
      <td>${email.textContent}</td>
      <td>${gender.textContent}</td>
      <td>${ipAddress.textContent}</td>
    </tr>`;
};
  
//render html table
const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");

    if (!table) {
        throw new Error("No table element found!!!!");
    }

    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
        ({ nodeName }) => nodeName === `person`
    );

    //map personNode into html table element
    nodes.map((personNode) => 
        table.appendChild(htmlToElement(generateTableRow(personNode)))
    );
};
  
 //call loadData() 
loadData(`http://localhost:8080/people.xml`, renderTable);