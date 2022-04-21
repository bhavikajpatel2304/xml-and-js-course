const { getAll } = require("./api/apps.js");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  const rows = data.reduce(
    (acc, { Id, appName, domain, mimeType, published }) =>
      acc +
      `<tr id="table-row-${Id}">
        <td>${Id}</td>
        <td width="150px">${appName}</td>
        <td width="250px">${domain}</td>
        <td width="250px">${mimeType}</td>
        <td>${published}</td>
       </tr>`,
      ``
  );
  
  tableBody.innerHTML = rows;
};

//render dynamic checkbox for app domain in Sort Order
const renderAppDomainCheckBox = (data) => {
	const divAppDomain = document.getElementById("divAppDomain");

  //retrieve unique App domains using set object and spread operator    
  //retrieving .com, .net, and so on
  const uniqueAppDomain = [...new Set(data.map(item => item.domain.split(".")[1]))].sort();

  //generate checkbox from unique App Domain
	const appDomain = uniqueAppDomain.reduce(
    (acc, domain) => 
                    acc + 
                    `<input type="checkbox" name="domain" id="chkClass-${domain}" value="${domain}">
                     <label class="chkClass" for="chkClass-${domain}">.${domain}</label>`
    , []);

  //bind checkbox to the div
	divAppDomain.innerHTML = appDomain;
};

//render dynamic radio buttons for app published in Sort Order
const renderPublishedRadioBox = (data) => {
	const divPublished = document.getElementById("divPublished");

  //retrieve unique Published
  const uniquePublished = [...new Set(data.map(item => item.published))].reverse();

  //generate radio button from uniquePublished
	const published = uniquePublished.reduce(
    (acc, published) => 
                    acc + 
                    `<input type="radio" id="${published}" name="published" value="${published}">
                     <label class="radioClass" for="${published}">${published}</label>`
    , []);

  //bind radio button to the div
	divPublished.innerHTML = `<input type="radio" id="all" name="published" value="all">
                            <label class="radioClass" for="all">All</label>`
                            + published;
};

//render dynamic dropdown for MIME Type in Sort Order
const renderMimeTypeDropDown = (data) => {
	const ddlMimeType = document.getElementById("mimeType");

  //retrieve unique Mime Type
  const uniqueMimeType = [...new Set(data.map(item => item.mimeType))].sort();

  //generate option for dropdown from uniqueMimeType
	const mimeTypes = uniqueMimeType.reduce(
    (acc, mimeTypes) => 
                    acc + `<option id="${mimeTypes}" value="${mimeTypes}">${mimeTypes}</option>`
    , []);

  //bind dropdown to the div
	ddlMimeType.innerHTML = `<option value="">--- Please Select App's MIME Type ---</option>` + mimeTypes;
};

getAll().then(({ data }) => {
    renderAppDomainCheckBox(data);
    renderPublishedRadioBox(data);
    renderMimeTypeDropDown(data);
    renderTable(data);
});

window.onSubmit = (event) => {
  event.preventDefault();

  const Id = event.target.Id.value;
	const appName = event.target.appName.value;
	const mimeType = event.target.mimeType.value;

  //retreive checked checkbox's value
  let domain = [...(event.target.domain)];
  domain = domain.flatMap((item) => item.checked ? (`.` + item.value) : []);
  if (domain.length === 0)
    domain = ``;
  
  const published = event.target.published.value;

  getAll({ Id, appName, domain, mimeType, published }).then(({data}) => renderTable(data));
};

window.onReset = () => {
    getAll().then(({ data }) => renderTable(data));
};
