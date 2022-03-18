/*
Submitted By:
        Name: Bhavika Jagdishbhai Patel 
        Humber ID: N01432720 
        Section: XML and Java Script - ITC-5202-0IA
        Week 9 - Assignment - assignment_Bhavika_Patel.js
*/

//load data from the specified file which pass as a parameter
const loadData = (path) =>
    new Promise((resolve) => {
       const xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = ({ target }) => {
            if (target.readyState == 4 && target.status == 200) {
                resolve(target.responseXML);
            }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
});
  
//fetching values for binding into table from its respective node
const generateTableRow = (item, filterTextTerm) => {
    const ID = Array.from(item.getElementsByTagName(`id`))[0];
    const firstName = Array.from(item.getElementsByTagName(`firstName`))[0];
    const lastName = Array.from(item.getElementsByTagName(`lastName`))[0];

    //fullname : firstName + " " + lastName
    const fullName = firstName.textContent + " " + lastName.textContent;
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ipAddress = Array.from(item.getElementsByTagName(`ipAddress`))[0];
  
    //validates filterTextTerm
    if (filterTextTerm) {
		filterTextTerm = filterTextTerm.toLowerCase();

        //apply filter on fullName
		if (fullName.toLowerCase().includes(filterTextTerm)) 
        {
            //return filtered result
            return `<tr>
                        <td>${ID.textContent}</td>
                        <td>${fullName}</td>
                        <td>${email.textContent}</td>
                        <td>${gender.textContent}</td>
                        <td>${ipAddress.textContent}</td>
                    </tr>`;
        } else {
            //return nothing
            return ``
        }
    }

    //return default result - without filter
    return `<tr>
                <td>${ID.textContent}</td>
                <td>${fullName}</td>
                <td>${email.textContent}</td>
                <td>${gender.textContent}</td>
                <td>${ipAddress.textContent}</td>
            </tr>`;
};

//render contents into html table using its id
const renderTable = (xmlData, filterTextTerm) => {
    const table = document.getElementById("tableDisplayBody");

    if (!table) {
        throw new Error("No table element found!!!!");
    }

    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
        ({ nodeName }) => nodeName === `person`
    );

    //assigns filtered result into variable
    let filterResult = nodes.reduce((acc, personNode) => 
                                acc +
                                generateTableRow(personNode, filterTextTerm),
                                ``
                            );

    //binds filtered result into HTML table body
    table.innerHTML = filterResult;
};
  
//load data from people.json file
loadData(`http://localhost:8080/week-6/assignments/people.xml`)
    .then((data) => renderTable(data));

//submit funtion
const onSubmit = (event) => {
    event.preventDefault();

    //fetch value from the filter textbox, entered by user
    const filterTextTerm = event.target.txtFilter.value;

    //pass that filterTextTerm in renderTable(), for filtering result
    loadData(`http://localhost:8080/week-6/assignments/people.xml`)
        .then((data) => renderTable(data, filterTextTerm));
};

//reset function
const onReset = () => {
    loadData(`http://localhost:8080/week-6/assignments/people.xml`)
        .then((data) => renderTable(data));

    //set focus to filter textbox
    document.getElementById("txtFilter").focus();
}