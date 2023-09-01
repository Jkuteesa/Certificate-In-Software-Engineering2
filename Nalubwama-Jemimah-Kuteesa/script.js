

const Validate=(event )=>{
    let error = 0;
    let firstName = document.registration.fname
    let lastName = document.registration.lname
    let date = document.registration.date
    let nin = document.registration.nin
    let contact = document.registration.contact
    let carModel = document.registration.carmodel
    let nplate = document.registration.nplate
    let timeIn = document.registration.timein
    let timeOut = document.registration.timeout
    let period = document.registration.period
    let carType = document.registration.cartype
    let amount = document.registration.amount


   

    //finding errors in empty fields
    let fnameError = document.getElementById("fname-error")
    let lnameError = document.getElementById("lname-error")
    let dateError = document.getElementById("date-error")
    let contactError = document.getElementById("contact-error")
    let ninError = document.getElementById("nin-error")
    let carModelError = document.getElementById("carmodel-error")
    let nplateError = document.getElementById("nplate-error")
    
    let timeInError = document.getElementById("timein-error")
    let timeOutError = document.getElementById("timeout-error")
    let periodError = document.getElementById("period-error")
    let carTypeError = document.getElementById("cartype-error")
    let amountError = document.getElementById("amount-error")
    
    
    


    let firstNameRegex = /^[A-Za-z]+$/;
    let firstNameRegex1 = /^[A-Z]/;
    let firstNameRegex2 = /^[A-Za-z]{2,}$/;
    // this regex is for last name
    let lastNameRegex = /^[A-Za-z]+$/;
    let lastNameRegex1 = /^[A-Z]/;
    let lastNameRegex2 = /^[A-Za-z]{2,}$/;

    // this regex is for contact
    // let contactRegex = /^\+256\d{9}$/;
    let contactRegex = /^(?:\+256|256|0)(?:(7[0-8]|20|39|41|32|33)\d{7})$/
    // this is regex for nin
    let ninRegex = /^.{14}$/
   
    // this is regex for number plate
    let nplateRegex = /^U.*/
    let nplateRegex1 = /^[\s\S]{0,7}$/

    







    // validating  fields using if statements
    if (firstName.value ==""){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "Please enter first name";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must only contain letters.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex1)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must start with an uppercase letter.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex2)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must conain not less than one character";
        fnameError.style = "color:red; font-family:serif "
        firstName.focus();
        error++;
    }
    else{
        firstName.style.border = "2px solid green";
        fnameError.textContent = "";
        lastName.focus();
    }

    if(lastName.value ==""){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Please enter last name";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;

    }else if(!lastName.value.match(lastNameRegex)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must only contain letters.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex1)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must start with an uppercase letter.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex2)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must conain not less than one character";
        lnameError.style = "color:red; font-family:serif "
        lastName.focus();
        error++;
    }
    else{
        lastName.style.border = "2px solid green";
        lnameError.textContent = "";
        contact.focus();
    }

    // Validating for NIN
    // regex for nin
    const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/


//     if(nin.value == ""){
//     nin.style.border = "2px solid red";
//     ninError.textContent = "Please enter NIN.";
//     ninError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
//     nin.focus();
//     error++;
//     }else if(!(ninRegex.test(nin.value)|| ninRegex2.test(nin.value))){
//     nin.style.border = "2px solid red";
//     ninError.textContent = "NIN should look like CFXXXXXXX or CMXXXXXXX";
//     ninError.style = "color:red; font-family:serif;";
//     nin.focus();
//     error++;
//     }
//     else{
//     nin.style.border = "2px solid green";
//     ninError.textContent = "";
//     }

//     if(contact.value == ""){
//         contact.style.border = "2px solid red";
//         contactError.textContent = "Please enter contact number";
//         contactError.style = "color:red; font-family:serif ";
//         contact.focus();
//         error++;
//     }else if(!contact.value.match(contactRegex)){
//         contact.style.border = "2px solid red";
//         contactError.textContent = "Contact should start with +256";
//         contactError.style = "color:red; font-family:serif ";
//         contact.focus();
//         error++;    
//     }
//     else{
//             contact.style.border = "2px solid green";
//             contactError.textContent = "";
//             carModel.focus();
//     } 
    
//     if (carType.value == ""){
//         carType.style.border = "2px solid red";
//     carTypeError.textContent = "Please enter car type";
//     carTypeError.style = "color:red; font-family:serif ";
//     carType.focus();
//     error++;
//     }
//     else{
//         carType.style.border = "2px solid green";
//         carTypeError.textContent = "";
//         carModel.focus();
//     }
      
      
//    if(carModel.value == ""){
//     carModel.style.border = "2px solid red";
//     carModelError.textContent = "Please enter car model";
//     carModelError.style = "color:red; font-family:serif ";
//     carModel.focus();
//     error++;
//     }
//     else{
//         carModel.style.border = "2px solid green";
//         carModelError.textContent = "";
//         nplate.focus();
//     }
    
    
//     if(nplate.value == ""){
//         nplate.style.border = "2px solid red";
//         nplateError.textContent = "Please enter plate number";
//         nplateError.style = "color:red; font-family:serif ";
//         nplateError.focus();
//           error++; 
//     }else if(!nplate.value.match(nplateRegex)){
//         nplate.style.border = "2px solid red";
//         nplateError.textContent = "Number plate should start with U";
//         nplateError.style = "color:red; font-family:serif ";
//         nplate.focus();
//         error++
        
//      }else if(!nplate.value.match(nplateRegex1)){
//         nplate.style.border = "2px solid red";
//         nplateError.textContent = "Number plate should not have more than 7 characters.";
//         nplateError.style = "color:red; font-family:serif ";
//         nplate.focus();
//         error++;
//     }
//     else{
//             nplate.style.border = "2px solid green";
//             nplateError.textContent = "";
//             period.focus();
//         }

    

//     if(date.value == ""){
//         date.style.border = "2px solid red";
//         dateError.textContent = "Please enter date";
//         dateError.style = "color:red; font-family:serif ";
//         date.focus();
//           error++;
//     }
//     else{
//         date.style.border = "2px solid green";
//         dateError.textContent = "";
//         timeIn.focus();
//     }

//     if(timeIn.value == ""){
//         timeIn.style.border = "2px solid red";
//         timeInError.textContent = "Please enter time in";
//         timeInError.style = "color:red; font-family:serif ";
//         timeIn.focus();
//           error++;
//     }else{
//         date.style.border = "2px solid green";
//         dateError.textContent = "";
//         period.focus();
//     }

//     if(period.value == ""){
//         period.style.border = "2px solid red";
//         periodError.textContent = "Please enter period";
//         periodError.style = "color:red; font-family:serif ";
//         period.focus();
//           error++;
//     }else{
//         date.style.border = "2px solid green";
//         dateError.textContent = "";
//         timeOut.focus();
//     }

//     if(amount.value == ""){
//         amount.style.border = "2px solid red";
//         amountError.textContent = "Please enter amount";
//         amountError.style = "color:red; font-family:serif ";
//         amount.focus();
//           error++;
//     }else{
//         date.style.border = "2px solid green";
//         dateError.textContent = "";
//         timeOut.focus();
        
//     }


    
//     if(timeOut == ""){
//         timeOut.style.border = "2px solid red";
//         timeOutError.textContent = "Please enter time out";
//         timeOutError.style = "color:red; font-family:serif ";
//         timeOut.focus();
//                 error++;
//         }
    
   
    






    if(error > 0){
        event.preventDefault()
    }


 }


// document.addEventListener('DOMContentLoaded', function() {
const button = document.querySelector('#revenue button[type="button"]');
const form = document.getElementById('revenue');

button.addEventListener('click', function() {
    form.submit();
});

