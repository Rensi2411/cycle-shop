const orderItems = [
  {
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 22222,
  },
  {
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 22222,
  },
  {
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 22222,
  },
  {
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 22222,
  },
];
displayOrders(orderItems);
function displayOrders(orderItems) {
  orderItems.map((order) => {
    let card_div = document.createElement("div");

    let left_div = document.createElement("div");
    left_div.className= "left_div"
    let orderimg = document.createElement("img");
    orderimg.src = order.image;

    let details_div = document.createElement("div");

    let title = document.createElement("h3");
    title.textContent = order.title;

    let price = document.createElement("p");
    price.textContent = `$ ${order.price}`;

    details_div.append(title, price);

    left_div.append(orderimg, details_div);

    let right_div = document.createElement("div");
    right_div.className = "right_div";

    let quantitiy = document.createElement("div");

    let spandec = document.createElement("span");
    spandec.textContent = "-";

    let quan = 1;

    let quantitiy_p = document.createElement("p");
    quantitiy_p.textContent = `${Number(quan)}`;
  

    let spaninc = document.createElement("span");
    spaninc.textContent = "+";

    quantitiy.append(spandec, quantitiy_p, spaninc);

    let totalOrderPrice = document.createElement("p");

    totalOrderPrice.textContent = `$ ${quan*order.price}`;

    let DelIcon = document.createElement("i");
    DelIcon.setAttribute("class","fa-regular fa-trash-can")
    // DelIcon.setAttribute("class","");
    DelIcon.style.color = "#050505"
 
    right_div.append(quantitiy,totalOrderPrice,DelIcon);

    card_div.append(left_div,right_div);

   document.querySelector(".orderItems").append(card_div)



  });
}
