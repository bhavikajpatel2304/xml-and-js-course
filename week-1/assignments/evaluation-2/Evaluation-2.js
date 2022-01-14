//button onclick event
const btnClick = document.getElementById("btnClick");
btnClick.addEventListener("click", submitClick);

//function to display data when Button click
function submitClick() {
    let email = document.getElementById("txtEmail");
    let date = document.getElementById("txtDate");
    let comment = document.getElementById("txtComment");

    var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let data;

    //validates email
    if(!emailRegExp.test(email.value)) {
        document.getElementById("txtEmail").style.borderColor = "red";
        document.getElementById("lblData").style.color = "red";
        data = "Please Enter Valid Email";
    } else {
        document.getElementById("txtEmail").style.borderColor = "black";
        document.getElementById("lblData").style.color = "green";

        //checks date and comment's entered value
        if((date.value == null || date.value == "") && (comment.value == null || comment.value == ""))
            data = "Your Entered Details: \n" + "Email: " + email.value;        //prints only email
        else
            data =  "Your Entered Details: \n" + "Email: " + email.value + "\nDate: " + date.value + "\nComment: " +  comment.value; 
            //prints all entered details   
    }
    document.getElementById("lblData").innerHTML =  data;       //prints data into label
}