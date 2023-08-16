

import footer from "../r_footer/footer.js";



var footerContainer = document.querySelector("#footer")
footerContainer.innerHTML = footer(); 
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

document.getElementById("PersonalClick").addEventListener("click",()=>{
    window.location.href="../AcountPage/account.html"
})
 

 
//     const orderItems = [
//   {
//     id:1,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
//   {
//     id:2,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
//   {
//     id:3,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
//   {
//     id:4,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
//   {
//     id:5,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
//   {
//     id:6,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
//   {
//     id:7,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
//   {
//     id:8,
//     image:
//       "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
//     title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
//     price: 20,
//   },
// ];

let orderItems =  JSON.parse(localStorage.getItem("cartArr"))||[];
document.getElementById("total_items").textContent = orderItems.length
document.getElementById("order_id").textContent =Math.floor(Math.random()*100000)

document.getElementById("order_amount").textContent = `$ ${localStorage.getItem("totalAmount")}` 

displayOrderItems(orderItems);

function displayOrderItems(orderItems){

 orderItems.map((order)=>{

    let card_div = document.createElement("div");

    let left_div = document.createElement("div");
    left_div.className = "left_div";
    let orderimg = document.createElement("img");
    orderimg.src = order.img;
    left_div.append(orderimg);

    let details_div = document.createElement("div");

    let title = document.createElement("h5");
    title.textContent = order.title.slice(0,20);
  
   let quantity =  document.createElement("span");
   let quan  =  localStorage.getItem(`quantity_${order.id}`) || 1;
   quantity.textContent = `${quan} pc`

    let price = document.createElement("p");
    price.textContent = `$ ${quan*order.currentPrice}`;
    

    details_div.append(title,quantity, price);

    card_div.append(left_div,details_div);
    document.getElementById("ordered_items").append(card_div)
 })
}



document.getElementById("save_btn").addEventListener("click", function() {
  const cancelCard = document.getElementById("cancelCard");
  const cancelButton = document.getElementById("save_btn");
  const countdownElement = document.getElementById("countdown");
  const orderdiv = document.getElementById("order_details");
  const itemdiv = document.getElementById("orderitemsDiv");
  const canceledbtn = document.getElementById("canceledbtn");
  const  progresbtn = document.getElementById("progres");
  canceledbtn
  // Show cancel card
  cancelCard.style.display = "block";
 
  cancelButton.style.display = "none";
  orderdiv.style.display = "none";
  itemdiv.style.display = "none";
  canceledbtn.style.color= "red"
  progresbtn.style.color= "#9e9d9ddc"
  // Hide other content after 5 seconds and redirect

  let countdown = 5;

  
  
    const countdownInterval = setInterval(function() {
        countdown--;
        countdownElement.textContent = `${countdown}` +" ";

        if (countdown <= 0) {
            clearInterval(countdownInterval);
          
            window.location.href = "../index.html";
        }
    }, 1000);
});




 