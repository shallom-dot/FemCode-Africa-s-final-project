// Get the modal
var modal = document.getElementById('id01');
     
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var regexPassword = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

function login() {
    var q = document.getElementById('pswd').value;
    var y =  document.getElementById('email').value;
   
    var errors = [];
if(!regexPassword.test(q)){
    errors[errors.length] = "please enter a valid password";
}
if(!regexEmail.test(y)){
    errors[errors.length] = "you must enter a valid email address";
}

function reportErrors(errors) {
    var msg = "please enter a valid data...\n";
    for (var i = 0; i<errors.length; i++) {
        var numError = i + 1;
        msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
    };
    if(!errors.length == 0){
        reportErrors(errors);
    } else {
         alert('Login successful');
    };   
};  
    login();