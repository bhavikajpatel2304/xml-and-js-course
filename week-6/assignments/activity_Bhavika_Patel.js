/*
    Submitted By:
    Name: Bhavika Jagdishbhai Patel 
    Humber ID: N01432720 
    Section: XML and Java Script - ITC-5202-0IA
    Lab Activity 6
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
    const rollNo = item.attributes[0].textContent;
    const firstName = Array.from(item.getElementsByTagName(`firstname`))[0];
    const lastName = Array.from(item.getElementsByTagName(`lastname`))[0];

    //fullname : firstName + " " + lastName
    const fullName = firstName.textContent + " " + lastName.textContent;
    const nickname = Array.from(item.getElementsByTagName(`nickname`))[0];
    const marks = Array.from(item.getElementsByTagName(`marks`))[0];
  
    return `<tr>
      <td>${rollNo}</td>
      <td>${fullName}</td>
      <td>${nickname.textContent}</td>
      <td>${marks.textContent}</td>
    </tr>`;
};
  
//render html table
const renderTable = (xmlData) => {
    const table = document.getElementById("table-main");

    if (!table) {
        throw new Error("No table element found!!!!");
    }

    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
        ({ nodeName }) => nodeName === `student`
    );

    //map studentNode into html table element
    nodes.map((studentNode) => 
        table.appendChild(htmlToElement(generateTableRow(studentNode)))
    );
};
  
 //call loadData() 
loadData(`http://localhost:8080/students.xml`, renderTable);