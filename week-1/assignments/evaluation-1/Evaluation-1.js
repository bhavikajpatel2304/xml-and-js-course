//button onclick event
const btnClick = document.getElementById("btnClick");
btnClick.addEventListener("click", submitClick);

//function to display name on Label when button clicked
function submitClick() {
    document.getElementById("lblName").innerHTML =  "Welcome, Bhavika Patel (N01432720)!!!";
}