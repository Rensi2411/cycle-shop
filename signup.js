import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import {getDatabase,ref,set,} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB2CjYmjAZI_mMaHCHs1jgjU_X4Wv3hwng",
  authDomain: "cycleshop-8710c.firebaseapp.com",
  projectId: "cycleshop-8710c",
  storageBucket: "cycleshop-8710c.appspot.com",
  messagingSenderId: "1064590899651",
  appId: "1:1064590899651:web:cf26860adcae35a554e576",
};


let parentAlert_div=document.querySelector("#alert");
let alert_div=document.querySelector(".Alert_Box");
// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);

const database = getDatabase();
const auth = getAuth();

document.querySelector("#btn").addEventListener("click", function (event) {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let userName = document.querySelector("#first_name").value;
    let userId = Math.round(Math.random() * 10);

    createUserWithEmailAndPassword(auth, email, password)

      .then((userCredential) => {
        
        // Signed in
        const user = userCredential.user;
        set(ref(database, "users/" + userId), {
          username: userName,
          email: email,
        });
        localStorage.setItem("userId", userId);
        console.log(user);
        parentAlert_div.innerHTML="";
        //alert("registered successfully");
        var successmsg="User registered Succesfully";

        displayAlert(successmsg);

        setTimeout(() => {
          parentAlert_div.innerHTML="";
        }, 2000);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        //alert(`${errorMessage}`)         
       
        displayAlert(errorMessage);
        
      });
  });

  function displayAlert(Message){
    parentAlert_div.innerHTML="";
    var alert_div=document.createElement("div")
    alert_div.className="Alert_Box" 
    alert_div.role="alert"

    var fill_div=document.createElement("div");
    fill_div.fill="#FF5A60";

    var svg_div=document.createElement("div");
    svg_div.fill=""
    var svgtag=document.createElement("svg");
    svgtag.xmlns="http://www.w3.org/2000/svg";
    svgtag.height="24px" 
    svgtag.viewBox="0 0 24 24" 
    svgtag.width="24px" 
    svgtag.fill="#000000"

    var pathtag=document.createElement("path");
    pathtag.d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    
    var alertMessage=document.createElement("p");
    alertMessage.id="alert_msg";
    if(Message ==="Firebase: Error (auth/invalid-email)."){
      alertMessage.textContent="Invalid Email address, please enter valid Email address"; 
      //alert_div.backgroundColor="red"
    }
    else if(Message ==="Firebase: Error (auth/missing-password)."){
      alertMessage.textContent=`Missing password, Please enter valid password`; 
      //alert_div.backgroundColor="red"
    }
    else if(Message ==="Firebase: Password should be at least 6 characters (auth/weak-password)."){
      alertMessage.textContent=`Password should be at least 6 characters`
      //alert_div.backgroundColor="red"
    }
    else if(Message === "Firebase: Error (auth/email-already-in-use)."){
      alertMessage.textContent=`Email address already in use`
      //alert_div.backgroundColor="red"
    }
    else if(Message ==="Firebase: Error (auth/missing-email)."){
      alertMessage.textContent=`Missing email, Please enter valid email`
      //alert_div.backgroundColor="red"
    }
    else if(Message ==="User registered Succesfully"){
      alertMessage.textContent="User registered Succesfully";
      alert_div.style.backgroundColor="green"
      alert_div.style.borderColor="green"
    }

    svgtag.append(pathtag);
    svg_div.append(svgtag);
    fill_div.append(svg_div);
    alert_div.append(fill_div,alertMessage);

    parentAlert_div.append(alert_div)
  }