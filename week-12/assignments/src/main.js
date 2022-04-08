const { getAll } = require("./api/persons.js");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  const params = new URLSearchParams(window.location.search);
	const nameTerm = params.get("name");
	const languageTerm = params.getAll("language");
	const departmentTerm = params.get("department");
  const jobTitleTerm = params.get("jobTitle");

  if (nameTerm) {
    source = source.filter(({ first_name }) => first_name.toLowerCase().includes(nameTerm.toLowerCase()));
  }

  //check box filter
  if (languageTerm.length > 0) {
      const newSource =  languageTerm.map((item) => (source.filter(({ language }) => 
            language === item,
            document.getElementById(`chkClass${item}`).checked = true
      )));

      //flats array
      source = newSource.flat();
	}

  //radio button filter
	if (departmentTerm) {
		source = source.filter(({ department }) => 
             department == (departmentTerm),
             document.getElementById(`${departmentTerm}`).checked = true
      );
	}

  //dropdown filter
  if (jobTitleTerm) {
    if (jobTitleTerm != 0)
		  source = source.filter(({ job_title }) => job_title === (jobTitleTerm),
      document.getElementById(`${jobTitleTerm}`).selected = true);
	}

  const rows = source.reduce(
    (acc, { id, first_name, last_name, email, gender, ip_address, language, job_title, department, linkedin_skill, race}) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td>
       <td>${gender}</td><td>${ip_address}</td><td>${language}</td><td>${job_title}</td>
       <td>${department}</td><td>${linkedin_skill}</td><td>${race}</td></tr>`,
    ``
  );
  
  tableBody.innerHTML = rows;
};

//render dynamic checkbox for Languages in Sort Order
const renderLanguageCheckBox = (data) => {
	const divLanguage = document.getElementById("divLanguage");

  //retrieve unique Language
  const uniqueLanguage = data.map(item => item.language).filter((value, index, self) => self.indexOf(value) === index).sort();

  //generate checkbox from uniqueLanguage
	const languages = uniqueLanguage.reduce(
    (acc, language) => 
                    acc + 
                    `<input type="checkbox" name="language" id="chkClass${language}" value="${language}">
                     <label class="chkClass" for="chkClass${language}">${language}</label>`
    , []);

  //bind checkbox to the div
	divLanguage.innerHTML = languages;
};

//render dynamic radio buttons for Departments in Sort Order
const renderDepartmentRadioBox = (data) => {
	const departmentRadio = document.getElementById("divDepartment");

  //retrieve unique Department
  const uniqueDept = data.map(item => item.department).filter((value, index, self) => self.indexOf(value) === index).sort();

  //generate radio button from uniqueDept
	const department = uniqueDept.reduce(
    (acc, department) => 
                    acc + 
                    `<input type="radio" id="${department}" name="department" value="${department}">
                     <label class="radioClass" for="${department}">${department}</label>`
    , []);

  //bind radio button to the div
	departmentRadio.innerHTML = department;

  //checked first radio button
  //document.getElementsByName("department")[0].checked = true;
};

//render dynamic dropdown for Job Titles in Sort Order
const renderJobTitleDropDown = (data) => {
	const ddlJobTitle = document.getElementById("jobTitle");

  //retrieve unique Job Titles
  const uniqueJobTitles = data.map(item => item.job_title).filter((value, index, self) => self.indexOf(value) === index).sort();

  //generate option for dropdown from uniqueJobTitles
	const jobTitles = uniqueJobTitles.reduce(
    (acc, job_title) => 
                    acc + `<option id="${job_title}" value="${job_title}">${job_title}</option>`
    , []);

  //bind dropdown to the div
	ddlJobTitle.innerHTML = `<option value="0">--- Please Select Job Title ---</option>` + jobTitles;
};

getAll().then(({ data }) => {
    renderLanguageCheckBox(data);
    renderDepartmentRadioBox(data);
    renderJobTitleDropDown(data);
    renderTable(data);
});

const onSubmit = (event) => {
  event.preventDefault();

  getAll().then(({ data }) => renderTable(data));
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAll().then(({ data }) => renderTable(data));
};
