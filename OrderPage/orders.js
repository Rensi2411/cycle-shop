const orderItems = [
  {
    id:1,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
  {
    id:2,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
  {
    id:3,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
  {
    id:4,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
  {
    id:5,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
  {
    id:6,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
  {
    id:7,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
  {
    id:8,
    image:
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/d0afa1adbfd78cdb8f47d6f48c23ea35",
    title: "BLACK ARROW 700C 7-SPEED - WHITE ORANGE",
    price: 20,
  },
];
let total_amount = 0;

displayOrders(orderItems);
totalfind();
function displayOrders(orderItems) {
  document.querySelector(".orderItems").innerHTML = "";

  orderItems.map((order, index) => {
    let card_div = document.createElement("div");

    let left_div = document.createElement("div");
    left_div.className = "left_div";
    let orderimg = document.createElement("img");
    orderimg.src = order.image;

    let details_div = document.createElement("div");

    let title = document.createElement("h5");
    title.textContent = order.title;

    let price = document.createElement("p");
    price.textContent = `$ ${order.price}`;

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
      totalOrderPrice.textContent = `$ ${quan * order.price}`;
      total_amount += order.price;
      totalfind();
      localStorage.setItem(`quantity_${order.id}`, quan);
    });

    spandec.addEventListener("click", () => {
      if (quan > 1) {
        quan--;
        quantitiy_p.textContent = `${Number(quan)}`;
        totalOrderPrice.textContent = `$ ${quan * order.price}`;
        total_amount -= order.price;
        totalfind();
        localStorage.setItem(`quantity_${order.id}`, quan);
      }
    });
    total_amount += quan * order.price;

    quantitiy.append(spandec, quantitiy_p, spaninc);

    let totalOrderPrice = document.createElement("p");

    totalOrderPrice.textContent = `$ ${quan * order.price}`;

    let DelIcon = document.createElement("i");
    DelIcon.setAttribute("class", "fa-regular fa-trash-can");
    // DelIcon.setAttribute("class","");
    DelIcon.style.color = "#050505";
    DelIcon.addEventListener("click", () => {
      const itemIndex = orderItems.indexOf(order);
      console.log(itemIndex, order);
      orderItems.splice(itemIndex, 1);
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

displayrecommend(orderItems);

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
