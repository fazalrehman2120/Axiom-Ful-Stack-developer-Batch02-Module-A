const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//All functions
//function to show Error
function showError(input,message){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control error';
    const small=formcontrol.querySelector('small');
    small.innerText=message;
}
//Funtion to show success
function showSuccess(input){
    const formcontrol=input.parentElement;
    formcontrol.className='form-control success'
}

//Function to show if Email is valid
function isValidEmail(Email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(Email);
}

//This is an event listner for the form on submission
form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    if (username.value==='') {

        showError(username,'Username is required')
        
    } else{
        showSuccess(username);
    }

    if (Email.value==='') {

        showError(Email,'Email is required');
        
    }else if(!isValidEmail(Email.value)){
        showError(Email,'Email is invalid');
    } 
    
    else{
        showSuccess(Email);
    }

    if (password.value==='') {

        showError(password,'Password is required')
        
    } else{
        showSuccess(password);
    }

    if (password2.value==='') {

        showError(password2,'Password2 is required')
        
    } else{
        showSuccess(password2);
    }
    

})
