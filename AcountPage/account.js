 
    var options = {
      "key": "rzp_test_Ak3NbcEG8292VY",
      "amount": "1000",
      "currency": "INR",
      "description": "Acme Corp",
      "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      "prefill":
      {
        "email": "gaurav.kumar@example.com",
        "contact": +919900000000,
      },
  }
    var rzp1 = new Razorpay(options);

    // document.getElementById('rzp-button1').onclick = function (e) {
    //   rzp1.open();
    //   e.preventDefault();
    // }
  
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("accountForm");
    const saveButton = document.getElementById("rzp-button1");
    const errorMessage = document.getElementById("error-message")
    saveButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate required fields
        const requiredFields = form.querySelectorAll("input[required]");
        let isValid = true;

        requiredFields.forEach(function(field) {
            if (!field.value.trim()) {
 
                isValid = false;
                field.style.border="2px solid red";
            } else {
              field.style.border="";
                field.classList.remove("error");
            }
        });


        const passwordField = form.querySelector('input[type="password"]');
        const confirmPasswordField = form.querySelector('input[type="text"][placeholder="confirm password"]');
        
        if (passwordField.value !== confirmPasswordField.value) {
            isValid = false;
            passwordField.classList.add("error");
            confirmPasswordField.classList.add("error");
            errorMessage.textContent = "Passwords do not match. Please re-enter your password.";
            errorMessage.style.color= "red"
        } else {
          errorMessage.textContent = "";
            passwordField.classList.remove("error");
            confirmPasswordField.classList.remove("error");
        }

        if (isValid) {
          
            initiateRazorpay();
        }
    });

    function initiateRazorpay() {
     
        rzp1.open();
    }
});

     
    const leftSecDivs = document.querySelectorAll('#left_sec div');

     document.querySelector(".first_color").style.color="orange"
    leftSecDivs.forEach(div => {
        div.addEventListener('click', () => {
             
            leftSecDivs.forEach(div => {
                console.log(div);
                div.style.color = '#a29f9f'; 
             
            });

             
            div.style.color = 'orange';
        });
    });

    

    document.querySelector(".first_color").addEventListener("click",()=>{
        window.location.href = "./account.html"
    })

    document.querySelector("#myOrderClick").addEventListener("click",()=>{
        window.location.href = "../myorder/myorder.html"
    })
    
