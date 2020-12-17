
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  function checkstrenght(){
    console.log('hello');
    let password=document.getElementById('password');
    let psswordStrength=document.getElementById('password-strength');
    let lowerUpperCase=document.querySelector('.fas1');
    let number=document.querySelector('.fas2');
    let specialChar= document.querySelector('.fas3');
    let eightChar=document.querySelector('.fas4');
    console.log(lowerUpperCase);
    password.addEventListener('keyup',function(){
      let pass=password.value;
      CheckStrenght(pass);
    
    })
     function CheckStrenght(pass){
       let str=0;
       if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
          {
            str +=1;
            lowerUpperCase.classList.remove('fa-circle');
            lowerUpperCase.classList.add('fa-check');
          
            }
            else{
              lowerUpperCase.classList.remove('fa-check');
            lowerUpperCase.classList.add('fa-circle');
            }
         console.log(lowerUpperCase.classList);
    
    
    
        if(pass.match(/([0-9])/))
        {
          str +=1;
          number.classList.remove('fa-circle');
          number.classList.add('fa-check');
       
         }
         else{
           number.classList.remove('fa-check');
          number.classList.add('fa-circle');
         }
        //  console.log(str);
     
    
    
     if(pass.match(/([@,#,$,%,^,&,*,_,-,+,=,!])/))
     {
       str +=1;
       specialChar.classList.remove('fa-circle');
       specialChar.classList.add('fa-check');
    
      }
      else{
        specialChar.classList.remove('fa-check');
        specialChar.classList.add('fa-circle');
      }
      console.log(str);
      if(pass.length>7){
        str+=1;
        eightChar.classList.remove('fa-circle')
        eightChar.classList.add('fa-check');
    
      }
      else{
        eightChar.classList.remove('fa-check');
        eightChar.classList.add('fa-circle');
      }
      
      if (str==0){
        psswordStrength.style='width:0%';
    
      }
      else if(str==1){
        psswordStrength.classList.remove('progress-bar-warning');
        psswordStrength.classList.remove('progress-bar-success');
        psswordStrength.classList.add('progress-bar-danger');
        psswordStrength.style='width:20%';
    
      }
      else if(str==3){
        psswordStrength.classList.remove('progress-bar-danger');
        psswordStrength.classList.remove('progress-bar-success');
        psswordStrength.classList.add('progress-bar-warning');
        psswordStrength.style='width:70%';
        
      }
      else if(str==4){
        psswordStrength.classList.remove('progress-bar-danger');
        psswordStrength.classList.remove('progress-bar-warning');
        psswordStrength.classList.add('progress-bar-success');
        psswordStrength.style='width:100%';
        
      }
    }
    }
    
    
    function CheckPassword() 
    { var error3 = document.getElementById("error3") ;
        var inputtxt = document.getElementById("password");
        var inputtxt2 = document.getElementById("conf");
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    
    if(inputtxt.value.match(passw)) 
    { 
        error3.textContent = "" ;
        inputtxt.style.border = "2px none red";
    // alert('Neat!...(Good Password format)')
    return true;
    }
    
    else if(inputtxt.value=="")
    {
        
 inputtxt.style.border = "2px solid red";
 error3.textContent = "No password" 
            error3.style.color = "red" 
    // alert('You have given no password');
    return false;
    }
    
    
    else
    { 
                
 inputtxt.style.border = "2px solid red";
 error3.textContent = "Choose a strong password" 
            error3.style.color = "red" 
    // alert('Wrong Password format.. try another one!')
    return false;
    }
    }
    
    
    function phonenumber()
    {var error2 = document.getElementById("error2") ;
      var inputtxt = document.getElementById("inputPhone");
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if((inputtxt.value.match(phoneno))){
        error2.textContent = "" ;
        inputtxt.style.border = "1px none red";
          // alert("phone valid!");
          return true;
            }
            
    else if(inputtxt.value=="")
    {
        inputtxt.style.border = "1px solid red";
        error2.textContent = "No phone number" 
            error2.style.color = "red" 
    // alert('You have given no phone number!');
    return false;
    }
          else
            {
                inputtxt.style.border = "1px solid red";
                error2.textContent ="Wrong format..Try another phone number." 
            error2.style.color = "red" 
            // alert("Wrong phone number format..Try another phone number.");
            return false;
            }
    }
    
    
    function ValidateEmail(inputText)
    {var error1 = document.getElementById("error1") ;
        var inputText = document.getElementById("inputEmail4");
    var mailformat =  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;


    if(inputText.value.match(mailformat))
    {
    // alert("Valid email address!");
    error1.textContent = "";
    inputText.style.border = "1px none red";
    return true;
    }
    
    else if(inputText.value=="")
    {
        inputText.style.border = "1px solid red";
        error1.textContent = "No Email ID" 
            error1.style.color = "red" 
    // alert('You have given no Email id');
    return false;
    }
    else
    {
        inputText.style.border = "1px solid red";
        error1.textContent = "Wrong format.. try another one!" 
            error1.style.color = "red" 
    // alert("You have entered an invalid email address!");
    
    return false;
    }
    }    


    
    function ValidateEmail2(inputText)
    {var error1 = document.getElementById("error_1") ;
        var inputText = document.getElementById("form2email");
    var mailformat =  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if(inputText.value.match(mailformat))
    {
    // alert("Valid email address!");
    error1.textContent = "";
    inputText.style.border = "1px none red";
    // return true;
    }
    
    else if(inputText.value=="")
    {
        inputText.style.border = "1px solid red";
        error1.textContent = "No Email ID" 
            error1.style.color = "red" 
    // alert('You have given no Email id');
    return false;
    }
    else
    {
        inputText.style.border = "1px solid red";
        error1.textContent = "Wrong format.. try another one!" 
            error1.style.color = "red" 
    // alert("You have entered an invalid email address!");
    
    return false;
    }
    }    

   function confirmpass(){
    var error4 = document.getElementById("error4") ;
    var inputtxt = document.getElementById("password");
    
    var inputtxt2 = document.getElementById("conf");
    // console.log(inputtxt2);
    if(inputtxt2.value==""){
      inputtxt2.style.border = "2px solid red";
      error4.textContent = "Re-enter Password" 
          error4.style.color = "red"
          error4.style.font="15px" 
          return false;
  }
    if(inputtxt.value==inputtxt2.value){
        inputtxt2.style.border = "2px none red";
        error4.textContent = "Match" 
            error4.style.color = "green"
            error4.style.font="15px" 
            return true;
    }
    
    if(inputtxt.value&&inputtxt2.value==0){
      inputtxt2.style.border = "2px solid red";
      // error4.textContent = "Match" 
          error4.style.color = "red"
          error4.style.font="15px" 
          return true;
  }
  
    else{
        inputtxt2.style.border = "1px solid red";
        error4.textContent = "Password doesnt match" 
            error4.style.color = "red"
            return false 
    }

   }
      
   function CheckPassword2() 
   { var error3 = document.getElementById("error_2") ;
       var inputtxt = document.getElementById("form2pass");
   var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
   
   if(inputtxt.value.match(passw)) 
   { 
       error3.textContent = "" ;
       inputtxt.style.border = "1px none red";
   // alert('Neat!...(Good Password format)')
   return true;
   }
   
   else if(inputtxt.value=="")
   {
       
inputtxt.style.border = "2px solid red";
error3.textContent = "No password" 
           error3.style.color = "red" 
   // alert('You have given no password');
   return false;
   }
   
   
   }
   
  //  var cnt=0;
// document.getElementById("newfield").addEventListener("click", createnewfield);
function createnewfield() {

  var addmore=document.getElementById("newfield");
  var disappear=document.getElementById("disappear");
  addmore.style.visibility = "hidden";
  disappear.style.visibility="visible";


//  return true;
}
function readURL(input,abc) {
  var y= document.getElementById(abc);

  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
       $(y).attr('src', e.target.result).width(250).height(200);
      };

      reader.readAsDataURL(input.files[0]);
  }
}

// function blank(a,b,c,d){
//   var a= document.getElementsByName(a);
//   var b= document.getElementsByName(b);
//   var c= document.getElementsByName(c);
//   var d= document.getElementsByName(d);
//   alert("blank")
//   if(a==""){
           
// a.style.border = "2px solid red";
 
//   }
//   if(b==""){
           
//     b.style.border = "2px solid red";
     
//       }
//       if(c==""){
           
//         c.style.border = "2px solid red";
         
//           }
        
//           if(d==""){
           
//             d.style.border = "2px solid red";
             
//               }
            
// }