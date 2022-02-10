function submitFunction(event) {
    event.preventDefault();

    const form = event.target;

    //get form textbox control
    const inputControl = form.inputbox;
    const inputValue = inputControl.value;

    //get form radio button control
    const radioControl = form.radioGender;
    const radioValue = radioControl.value;

    //get form checkbox control
    const checkboxControl = form.chkSkill;

    let skills = [];
    //get value of checkbox whose checked
    checkboxControl.forEach(function(item, index) {
        if(checkboxControl[index].checked)
            skills.push(checkboxControl[index].value);
    });

    console.log(`-----------------------------------------------------------------`);
    console.log(`Your Entered Details are as below:`);
    console.log(`Name: ${inputValue}`);
    console.log(`Gender: ${radioValue}`);
    console.log(`Skills: ${skills.join(', ')}`);
    console.log(`-----------------------------------------------------------------`);

    inputControl.value = "";

    //By default first radio button checked
    radioControl[0].checked =true;

    //Reset checkbox's selection
    checkboxControl.forEach(function(item, index) {
        if(checkboxControl[index].checked)
            checkboxControl[index].checked = false;
    });
  }