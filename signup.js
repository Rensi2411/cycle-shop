// #email, #password, #first_name, #last_name
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let firstName = document.querySelector("#first_name");
let lastName = document.querySelector("#last_name");

let create_btn = document.querySelector("#btn");
let Acc_data=JSON.parse(localStorage.getItem("acc_data")) || [];

create_btn.addEventListener("click", function () {
  var acc_obj = {
    Email: email.value,
    Password: password.value,
    FirstName: firstName.value,
    LastName: lastName.value,
  };
  console.log(acc_obj);
  Acc_data.push(acc_obj);
  localStorage.setItem("acc_data",JSON.stringify(Acc_data));

});