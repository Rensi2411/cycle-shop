

let filter = document.querySelector(".filter .sub_box");

filter.addEventListener("click", () => {
    let close = document.querySelector(".filter .close")
    let expand = document.querySelector(".filter .expand");

    let filter_popup = document.querySelector("#filter_popup_container");

    if (close.style.display === "none") {
        

        filter_popup.style.display = "inline-block";

        close.style.display = "inline-block";
        expand.style.display = "none";
    }

    else {
        close.style.display = "none";
        expand.style.display = "inline-block";

        filter_popup.style.display = "none"
    }
})

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


filterIcon.addEventListener("click", () =>{
      if(functions.style.display==="none"){
        functions.style.display = "flex"
        productPage.style.width = "75%"
      }

      else{
        functions.style.display = "none";
        productPage.style.width = "100%"
      }
})

var product_box = document.querySelector("#product_box")


async function displayMountainproducts() {
    
    try{
        const url = "http://localhost:3000/bikes"

        let response = await fetch(url);
        let result = await response.json();
        console.log(result)

        result.forEach(function(element, index) {
            let previous_html = product_box.innerHTML;
            let new_html = `
            <div class="product_sub_box"> 
                    <img class = "product_img" style="background-color: white;" src=${element.large_img} alt="Cycle Image">
                    <button class = "color_btn" style="background-color: ${element.frame_colors[0]};"></button>
                    <p class="product_title">${element.title}</p>
                    <p class="product_price">&#8364 ${element.year+7000+".00"}</p>
                    <img class = "wishlist_icon" src="./Images/wishlist icon small.png" alt="Wishlit icon">
                    <img class = "compare_icon" src="./Images/compare icon.png" alt="Compare Icon">

                </div>
            `

            product_box.innerHTML = previous_html + new_html;

        })
        
        
    }
    catch(error){
        console.log(error)
    }
}

displayMountainproducts()

