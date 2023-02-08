const form = document.getElementById('form');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})



function Validate(){
    
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    
    if(passwordVal === ""){
        setErrorMsg(password, 'Please Enter Password');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'Password should be atleast 8 characters');
    }
    else{
        setSuccessMsg(password);
    }

    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Please confirm password');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Password not Matched!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
