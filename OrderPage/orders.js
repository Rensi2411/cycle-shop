<<<<<<< HEAD

import footer from "../r_footer/footer.js";



var footerContainer = document.querySelector("#footer")
footerContainer.innerHTML = footer(); 

=======
>>>>>>> 2c39aadeaa41d336fd4824b77741dea2f01a9c00
const recomendItems = [
  {
    id:1,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dwbd7c3148/Products/Hustle/BSHUS29BL00002/01.png?sh=523&sfrm=png",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 40,
  },
  {
    id:2,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw1abd5398/Products/Thorn/BSTHO24BLOR002/02.png?sh=523&sfrm=png",
    title: "Urban Terrain UT7003S27.5 Denver City Bike with Complete Accessories",
    price: 60,
  },
  {
    id:3,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw75396bc5/Products/Voltage/BSVOL24BKGN001/01.png?sh=523&sfrm=png",
    title: "Leader Spyder 27.5T MTB Cycle/Bike Single Speed with Complete Accessories for Men",
    price: 30,
  },
  {
    id:4,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dwc7153626/Products/Voltage/BSVOL24OR00002/01.png?sh=523&sfrm=png",
    title: "Lifelong LLBC2001 Tribe 20T Cycle (Yellow and Black) I Ideal for: Kids (5-8 Years) I Frame Size: 12",
    price: 75,
  },
  {
    id:5,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dwbd7c3148/Products/Hustle/BSHUS29BL00002/01.png?sh=523&sfrm=png",
    title: "Leader Scout MTB 26T Mountain Bicycle/Bike Without Gear Single Speed for Men ",
    price: 43,
  },
  {
    id:6,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dw8da918b5/Products/Gyrfalcon/BSGFL29BKGN001/01.png?sh=523&sfrm=png",
    title: "Cockatoo Travis Series 26T Mtb Road Bicycle Without Gear Single Speed With Power Brake",
    price: 54,
  },
  {
    id:7,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dwaf61cac9/Products/Trot/BSTRO26BKBL004/01.png?sh=523&sfrm=png",
    title: "Hero Spinner 26T Single Speed Cycle | MTB | Grey | Front Suspension ",
    price: 65,
  },
  {
    id:8,
    image:
      "https://www.herocycles.com/dw/image/v2/BGQH_PRD/on/demandware.static/-/Sites-cycles-master/default/dwd1165ac1/Products/Voltage/BSVOL20BKGN001/01.png?sh=523&sfrm=png",
    title: "Lifelong Lady Cycle for Girls/Women 26T with Caliper Brake, Rigid Fork",
    price:98,
  },
];
let total_amount = 0;
  let orderItems =  JSON.parse(localStorage.getItem("cartArr"))||[];
 
displayOrders(orderItems);
totalfind();
function displayOrders(orderItems) {
  document.querySelector(".orderItems").innerHTML = "";

  orderItems.map((order) => {
    let card_div = document.createElement("div");

    let left_div = document.createElement("div");
    left_div.className = "left_div";
    let orderimg = document.createElement("img");
    orderimg.src = order.img;

    let details_div = document.createElement("div");

    let title = document.createElement("h5");
    title.textContent = order.title;

    let price = document.createElement("p");
    price.textContent = `$ ${order.currentPrice}`;

    details_div.append(title, price);

    left_div.append(orderimg, details_div);

    let right_div = document.createElement("div");
    right_div.className = "right_div";

    let quantitiy = document.createElement("div");

    let spandec = document.createElement("span");
    spandec.textContent = "−";

    let quan = 1;

    let storedQuantity = localStorage.getItem(`quantity_${order.id}`);
    if (storedQuantity !== null) {
      quan = parseInt(storedQuantity);
    }

    let quantitiy_p = document.createElement("p");
    quantitiy_p.textContent = `${Number(quan)}`;

    let spaninc = document.createElement("span");
    spaninc.textContent = "＋";
    spaninc.addEventListener("click", () => {
      quan++;
      quantitiy_p.textContent = `${Number(quan)}`;
      totalOrderPrice.textContent = `$ ${quan * order.currentPrice}`;
      total_amount += order.currentPrice;
      totalfind();
      localStorage.setItem(`quantity_${order.id}`, quan);
    });

    spandec.addEventListener("click", () => {
      if (quan > 1) {
        quan--;
        quantitiy_p.textContent = `${Number(quan)}`;
        totalOrderPrice.textContent = `$ ${quan * order.currentPrice}`;
        total_amount -= order.currentPrice;
        totalfind();
        localStorage.setItem(`quantity_${order.id}`, quan);
      }
    });
    total_amount += quan * order.currentPrice;

    quantitiy.append(spandec, quantitiy_p, spaninc);

    let totalOrderPrice = document.createElement("p");

    totalOrderPrice.textContent = `$ ${quan * order.currentPrice}`;

    let DelIcon = document.createElement("i");
    DelIcon.setAttribute("class", "fa-regular fa-trash-can");
    // DelIcon.setAttribute("class","");
    DelIcon.style.color = "#050505";
    DelIcon.addEventListener("click", () => {
      const itemIndex = orderItems.indexOf(order);
      console.log(itemIndex, order);
      orderItems.splice(itemIndex, 1);
      localStorage.setItem("cartArr" , JSON.stringify(orderItems));
      console.log(itemIndex, order);
      total_amount = 0;
      displayOrders(orderItems);
      totalfind();
    });
    right_div.append(quantitiy, totalOrderPrice, DelIcon);

    card_div.append(left_div, right_div);

    document.querySelector(".orderItems").append(card_div);
  });
}

function totalfind() {
  let preTotal = document.getElementById("pre_total");
  let currentTotal = document.getElementById("current_total");

  preTotal.textContent = `$${total_amount}`;
  let final  = total_amount * (90 / 100)
  currentTotal.textContent = `$${final}`;
  localStorage.setItem("totalAmount",final)
}

displayrecommend(recomendItems);

function displayrecommend(orderItems) {
  orderItems.map((order) => {
    let card_div = document.createElement("div");

    let img_div = document.createElement("div");
    let img = document.createElement("img");
    img.src = order.image;

    img_div.append(img);

    let details_div = document.createElement("div");
    let title = document.createElement("h5");

    title.textContent = order.title;

    let price = document.createElement("p");
    price.textContent = `Price: $${order.price}`;

    // <i class="fa-solid fa-cart-shopping" style="color: #000000;"></i>
    details_div.append(title, price);

    card_div.append(img_div, details_div);
    document.querySelector(".recommend_div").append(card_div);
  });
}

// JavaScript code for sliding the recommendation section
const recommendSection = document.querySelector(".recommend_div");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");

// Set the scroll amount for each click
const scrollAmount = 300;

leftArrow.addEventListener("click", () => {
  recommendSection.scrollLeft -= scrollAmount;
});

rightArrow.addEventListener("click", () => {
  recommendSection.scrollLeft += scrollAmount;
});


document.getElementById("makeOrder").addEventListener("click",()=>{
  window.location.href="../AcountPage/account.html"
})