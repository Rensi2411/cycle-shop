let totalpages;
let limit = 12;
let pageNum = 1;



let category = document.querySelector(".category .sub_box");

category.addEventListener("click", () => {
    let close = document.querySelector(".category .close")
    let expand = document.querySelector(".category .expand");

    let category_popup = document.querySelector("#category_popup_container");

    if (close.style.display === "none") {


        category_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        category_popup.style.display = "none"
    }
})

let experience = document.querySelector(".experience .sub_box");

experience.addEventListener("click", () => {
    let close = document.querySelector(".experience .close")
    let expand = document.querySelector(".experience .expand");

    let experience_popup = document.querySelector("#experience_popup_container");

    if (close.style.display === "none") {


        experience_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        experience_popup.style.display = "none"
    }
})

let collection = document.querySelector(".collection .sub_box");

collection.addEventListener("click", () => {
    let close = document.querySelector(".collection .close")
    let expand = document.querySelector(".collection .expand");

    let collection_popup = document.querySelector("#collection_popup_container");

    if (close.style.display === "none") {


        collection_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        collection_popup.style.display = "none"
    }
})

let productFamily = document.querySelector(".productFamily .sub_box");

productFamily.addEventListener("click", () => {
    let close = document.querySelector(".productFamily .close")
    let expand = document.querySelector(".productFamily .expand");

    let productFamily_popup = document.querySelector("#productFamily_popup_container");

    if (close.style.display === "none") {


        productFamily_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        productFamily_popup.style.display = "none"
    }
})

let material = document.querySelector(".material .sub_box");

material.addEventListener("click", () => {
    let close = document.querySelector(".material .close")
    let expand = document.querySelector(".material .expand");

    let material_popup = document.querySelector("#material_popup_container");

    if (close.style.display === "none") {


        material_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        material_popup.style.display = "none"
    }
})

let size = document.querySelector(".size .sub_box");

size.addEventListener("click", () => {
    let close = document.querySelector(".size .close")
    let expand = document.querySelector(".size .expand");

    let size_popup = document.querySelector("#size_popup_container");

    if (close.style.display === "none") {


        size_popup.style.display = "grid";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        size_popup.style.display = "none"
    }
})


let color = document.querySelector(".color .sub_box");

color.addEventListener("click", () => {
    let close = document.querySelector(".color .close")
    let expand = document.querySelector(".color .expand");

    let color_popup = document.querySelector("#color_popup_container");

    if (close.style.display === "none") {


        color_popup.style.display = "grid";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        color_popup.style.display = "none"
    }
})

let type = document.querySelector(".type .sub_box");

type.addEventListener("click", () => {
    let close = document.querySelector(".type .close")
    let expand = document.querySelector(".type .expand");

    let type_popup = document.querySelector("#type_popup_container");

    if (close.style.display === "none") {


        type_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        type_popup.style.display = "none"
    }
})

let brakeType = document.querySelector(".brakeType .sub_box");

brakeType.addEventListener("click", () => {
    let close = document.querySelector(".brakeType .close")
    let expand = document.querySelector(".brakeType .expand");

    let brakeType_popup = document.querySelector("#brakeType_popup_container");

    if (close.style.display === "none") {


        brakeType_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        brakeType_popup.style.display = "none"
    }
})

let drivetrain = document.querySelector(".drivetrain .sub_box");

drivetrain.addEventListener("click", () => {
    let close = document.querySelector(".drivetrain .close")
    let expand = document.querySelector(".drivetrain .expand");

    let drivetrain_popup = document.querySelector("#drivetrain_popup_container");

    if (close.style.display === "none") {


        drivetrain_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        drivetrain_popup.style.display = "none"
    }
})

let suspension = document.querySelector(".suspension .sub_box");

suspension.addEventListener("click", () => {
    let close = document.querySelector(".suspension .close")
    let expand = document.querySelector(".suspension .expand");

    let suspension_popup = document.querySelector("#suspension_popup_container");

    if (close.style.display === "none") {


        suspension_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        suspension_popup.style.display = "none"
    }
})



let wheelSize = document.querySelector(".wheelSize .sub_box");

wheelSize.addEventListener("click", () => {
    let close = document.querySelector(".wheelSize .close")
    let expand = document.querySelector(".wheelSize .expand");

    let wheelSize_popup = document.querySelector("#wheelSize_popup_container");

    if (close.style.display === "none") {


        wheelSize_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        wheelSize_popup.style.display = "none"
    }
})


let filterIcon = document.querySelector(".filter_function img");
let functions = document.querySelector("#functions");
let productPage = document.querySelector("#productPage")


filterIcon.addEventListener("click", () => {
    if (functions.style.display === "none") {
        functions.style.display = "flex"
        productPage.style.width = "75%"
    }

    else {
        functions.style.display = "none";
        productPage.style.width = "100%"
    }
})

var product_box = document.querySelector("#product_box")


let fetchedData;

let url = "http://localhost:3000/bikes"

displayMountainproducts()
async function displayMountainproducts() {

    try {


        var response = await fetch(url);
        var result = await response.json();
        fetchedData = result;

        getCyclePagination(pageNum)


        result.forEach(function (element, index) {
            let previous_html = product_box.innerHTML;

            if (index > 2) {
                index = index / 3;
            }

            let new_html = `
            <div class="product_sub_box" > 
                    <img class = "product_img" style="background-color: white;" src=${element.large_img} alt="Cycle Image">
                    <button class = "color_btn" style="background-color: ${element.frame_colors[0]};"></button>
                    <p class="product_title">${element.title}</p>
                    <p class="product_price">&#8364 ${element.price}</p>
                    <img class = "wishlist_icon" src="./Images/wishlist icon small.png" alt="Wishlit icon">
                    <img class = "compare_icon" src="./Images/compare icon.png" alt="Compare Icon">

                </div>
            `
            product_box.innerHTML = previous_html + new_html;

        })


    }
    catch (error) {
        console.log(error)
    }
}


console.log(fetchedData)

function displayProducts(array) {
    product_box.innerHTML = "";
    array.forEach(function (element, index) {
        let previous_html = product_box.innerHTML;

        if (index > 2) {
            index = index / 3;
        }

        let new_html = `
        <div class="product_sub_box" > 
                <img class = "product_img" style="background-color: white;" src=${element.large_img} alt="Cycle Image">
                <button class = "color_btn" style="background-color: ${element.frame_colors[0]};"></button>
                <p class="product_title">${element.title}</p>
                <p class="product_price">&#8364 ${element.price}</p>
                <img class = "wishlist_icon" src="./Images/wishlist icon small.png" alt="Wishlit icon">
                <img class = "compare_icon" src="./Images/compare icon.png" alt="Compare Icon">

            </div>
        `

        product_box.innerHTML = previous_html + new_html;

    })
}



var sortButton = document.querySelector("#sort_options");


sortButton.addEventListener("change", function () {
    var sortValue = document.querySelector("#sort_options").value;

    if (sortValue === "Default") {
        // displayMountainproducts();
        window.location.reload();

    }
    else if (sortValue === "Price (High-Low)") {
        console.log(fetchedData, "fetchedData")
        var sorted = fetchedData.sort((a, b) => {
            return b.price - a.price;
        })
    }
    else if (sortValue === "Price (Low-High)") {
        var sorted = fetchedData.sort((b, a) => {
            return b.price - a.price;
        })
    }
    // getCyclePagination(pageNum)
    displayProducts(sorted)

})


// sort by category 

var categoryFilter = document.querySelectorAll("#category_popup_container>p")






categoryFilter.forEach((ele) => {
    let cat = ele.textContent;
    cat = cat.toLowerCase();
    ele.addEventListener("click", function () {
        let filteredArray = fetchedData.filter((element) => {
            if (cat === "") {
                return true
            }
            else {
                return cat === element.category;
            }
        })


        displayProducts(filteredArray);
    })
})


var colorFilter = document.querySelectorAll("#color_popup_container>button")
console.log(colorFilter)

colorFilter.forEach((element) => {
    let color = element.style.backgroundColor;
    color = color.toLowerCase();
    element.addEventListener("click", function () {


        let filteredArray = fetchedData.filter((element) => {
            return color === element.frame_colors[0].toLowerCase();
        })
        console.log(filteredArray)
        displayProducts(filteredArray);
    })

})






function getProduct() {
    var product_sub_box = document.querySelectorAll(".product_sub_box");

    // console.log(product_sub_box);
    product_sub_box.forEach(function (element, index) {
        if (index > 2) {
            index = index / 2;
        }
        element.addEventListener("click", () => {

            window.location.href = `./product${index + 1}.html`

        })
    })


}

setTimeout(getProduct, 1000)





// pagination


let prev = document.getElementById("prev")
let next = document.getElementById("next")
getCyclePagination(pageNum)

async function getCyclePagination(pageNum) {
    if (pageNum == 1) {
        prev.disabled = true
    }
    else {
        prev.disabled = false
    }

    if (pageNum === totalpages) {
        next.disabled = true
    }
    else {
        next.disabled = false
    }
    try {

        let res = await fetch(`http://localhost:3000/bikes?_page=${pageNum}&_limit=12`)
        let data2 = await res.json()
        // console.log(data2)
        let totalItems = res.headers.get("X-Total-Count"); // Retrieve the header after response.json()
        totalpages = totalItems / limit
        // console.log(totalpages)
        // console.log(totalItems);
        document.getElementById("page").innerHTML = "Page No:  " + pageNum
        // display(data.data)
        displayProducts(data2)

    } catch (err) {
        console.log(err)
    }
}

////////////
prev.addEventListener("click", () => {
    if (pageNum == 1) {
        return
    }
    pageNum--
    getCyclePagination(pageNum)
})


next.addEventListener("click", () => {
    if (pageNum == totalpages) {
        return
    }
    pageNum++
    getCyclePagination(pageNum)
})
///////////
