    let email = document.querySelector("#email");
    let password = document.querySelector("#password"); 
    let sign_btn=document.querySelector("#btn");
    
    let Acc_data=JSON.parse(localStorage.getItem("acc_data"));

    sign_btn.addEventListener("click",function(){
        
        if(email.value==="" || password.value=== ""){
            alert("Please Enter Email & Password !")
        }
        else{
            Acc_data.forEach(function(element){
 
                if(element.Email === email.value){
                    
                    
                    if(element.Password === password.value){
                       alert("login successfully");
                       //window.location.assign("./home.html")
                    }
                    else{
                       alert("Incorrect password");
                    }
                }        
           });
        }
              
    })