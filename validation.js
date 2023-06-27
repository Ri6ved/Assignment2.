var email =document.getElementById('field1');
var err1 =document.getElementById('err1');
var pwd =document.getElementById('field2');
var err2 =document.getElementById('err2');
var phone =document.getElementById('field3');
var err3 =document.getElementById('err3');
var regex =/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var passq = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
var passpo = /[a-z]/;
var passme =/(?=.*?[0-9])/;;
var passui =/(?=.*?[#?!@$%^&*-])/;
function validateEmail(){
     if(email.value.trim()==''){
          err1.innerText="Email cannot be Empty";
          email.style.border='1px solid red';
          return false
     }
     else if(!email.value.match(regex)){
          err1.innerText="Email is not in corect format";
          email.style.border='1px solid red';
          return false
     }
     else{
          err1.innerText="";
          email.style.border='1px solid green';
          return true

     }
} 

     function validatephone(){
          if(phone.value.trim()==''){
               err3.innerText="Phone Number cannot be Empty";
               phone.style.border='1px solid red';
               return false;
          }

 
  if(!phone.value.match(phoneno)){
     err3.innerText="Should contain 10 numbers"
     phone.style.border='1px solid red';
        return false;
  }
   
  else{
     err3.innerText="";
     phone.style.border='1px solid green';
     return true

}
     }

function validatepass()
{
     if(pwd.value.trim()==''){
          err2.innerText="Password cannot be Empty";
          pwd.style.border='1px solid red';
          return false
     }
     else if(pwd.value.length<8){
           err2.innerText="Password should be at least 8 characters long";
          pwd.style.border='1px solid red';
          return false;
     }

     else if(!pwd.value.match(passq)){
          err2.innerText="Password must contain one Upper case,one Lower case and must contain at least one number";
          pwd.style.border='1px solid red';
          return false
     }

     else if(!pwd.value.match(passpo)){
          err2.innerText="Poor";
          pwd.style.border='2px solid blue';
          return false
     }
     else if(!pwd.value.match(passme)){
          err2.innerText="Medium";
          pwd.style.border='2px solid yellow';
          return false

     }

     else if(!pwd.value.match(passui)){
          err2.innerText="Strong";
          pwd.style.border='2px solid green';
          return false
     }
     else{
          err2.innerText="";
          pwd.style.border='1px solid green';
          return true
     }
}

function verify(){
     if(!validateEmail()||!validatephone()||!validatepass()){
          return false
     }
     else{
          return true
     }
}
