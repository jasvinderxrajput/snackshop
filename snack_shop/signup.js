
    function validateForm(){
        let phone=document.forms["myform"]["phone"].value;
        let password=document.forms["myform"]["password"].value; 
        let fname=document.forms["myform"]["fname"].value;
        let lname=document.forms["myform"]["lname"].value; 
        let email=document.forms["myform"]["email"].value;
    
        if(phone=="" || password=="" || email=="" || fname=="" || lname==""){
            alert("This field must be required");
            return false;
        }
    }

    