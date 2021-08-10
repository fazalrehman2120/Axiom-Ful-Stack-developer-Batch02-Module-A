const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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
function checkValidEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
      showSuccess(input);
    }
    else {
      showError(input,`please provide a valid email`);
    }
}

//function to check if required fields have data
function checkRequird(inputArray){
  inputArray.forEach(function(input){
    if(input.value===''){
      console.log(input.id);
      showError(input,`${getFieldId(input) }is required`);
    }

    else{
      showSuccess(input);
    }
  }); 
      
            
}
//Function to check length of input field
function checklength(input,min,max){

  if(input.value.length < min){
    showError(input,`${getFieldId(input)} needs to be at least ${min} characters`)}
  
  else if(input.value.length > max){
    showError(input,`${getFieldId(input)} needs to be less than ${max} characters`)}
else{
  showSuccess(input);
}
}
//function to check if password and confirm password matches
function checkPasswordMatches(input1, input2){
  if(input1.value !== input2.value){
    showError(input2,`password don't matches `)
  }
 
  
}

//Function to get the Id of input field with proper case
function getFieldId(input){
  return input.id.charAt(0). toUpperCase() + input.id.slice(1);
}

//This is an event listner for the form on submission
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequird([username,Email,password,password2]);
    checklength(username,3,10);
    checklength(password,6,10);
    checkValidEmail(Email);
    checkPasswordMatches(password,password2);
    
})  
