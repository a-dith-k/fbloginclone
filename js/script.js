$(document).ready(function(){
   
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            emailAddress2:{
                required:true,
                email:true

            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            },
            password:{
                required:true, 
                passwordRule:true  
            },
            conpassword:{
                required:true,
                equalTo:"#password"
            }

        
        },
        messages:{
            fname:{
                required:"required",
                minlength:"enter atleast 4 characters please"
            },
            conpassword: {
                equalTo: "password does not match"
            }
        }
        
    })
    $.validator.addMethod(
        "passwordRule",function(value,element,args){
           return/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
         },'use atleast one uppercase letter one lowercase letter one special character one number');
    
    
   
   
})