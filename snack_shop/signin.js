
    function validateForm(){
        let phone=document.forms["myform"]["phone"].value;
        let password=document.forms["myform"]["password"].value; 
       
        if(phone!==password){
            alert("The phone number is not equal to password");
            return false;
        }
    }
