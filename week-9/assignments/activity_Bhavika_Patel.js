/*
    Submitted By:
        Name: Bhavika Jagdishbhai Patel 
        Humber ID: N01432720 
        Section: XML and Java Script - ITC-5202-0IA
        Lab Activity - Week 9 : activity_Bhavika_Patel.js
*/

//load data from the specified file which pass as a parameter
const loadData = (path) =>
    new Promise((resolve) => {
        const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = ({ target }) => {
                if (target.readyState == 4 && target.status == 200) {
                    resolve(JSON.parse(target.response));
                }
            };
            xhttp.open("GET", path, true);
            xhttp.send();
        });

//render contents into html table using its id
const renderTable = (data, filterTextTerm) => {
    const tableBody = document.getElementById("tableDisplayBody");

    //throw error when table is not found
    if (!tableBody) {
        throw new Error("No table element found");
    }

    //validate filterTextTerm
    if (filterTextTerm) {
        //apply filter on first name, last name, email, gender, or ip address
        data = data.filter((datainfo) =>               
                    datainfo.first_name.toLowerCase().includes(filterTextTerm) ||
                    datainfo.last_name.toLowerCase().includes(filterTextTerm)  ||
                    datainfo.email.toLowerCase().includes(filterTextTerm)      ||
                    datainfo.gender.toLowerCase().includes(filterTextTerm)     ||
                    datainfo.ip_address.includes(filterTextTerm)
                );
    }

    //mapping filtered result as a HTML row
    const rows = data.reduce((acc, {id, first_name, last_name, email, gender, ip_address}) =>
                            acc +
                                `<tr id="table-row-${id}">
                                    <td>${id}</td>
                                    <td>${first_name}</td>
                                    <td>${last_name}</td>
                                    <td>${email}</td>
                                    <td>${gender}</td>
                                    <td>${ip_address}</td>
                                </tr>`,
                            ``
    );

    //binds result into HTML table
    tableBody.innerHTML = rows;
};

//load data from data.json file
loadData(`./data.json`).then((data) => renderTable(data));

//submit funtion
const onSubmit = (event) => {
    event.preventDefault();

    //fetch value from the filter textbox, entered by user
    const filterTextTerm = event.target.txtFilter.value;

    //pass that filterTextTerm in renderTable(), for filtering result
    loadData(`./data.json`).then((data) => renderTable(data, filterTextTerm));
};

//reset function
const onReset = () => {
    loadData(`./data.json`).then((data) => renderTable(data));

    //set focus to filter textbox
    document.getElementById("txtFilter").focus();
};
