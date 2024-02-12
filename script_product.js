let productsDiv = document.getElementById("products");
let mainData = [];

function addToCartFun(obj) {
    let cartDetails = JSON.parse(localStorage.getItem("cartDetails")) || [];
    cartDetails.push(obj);
    localStorage.setItem("cartDetails", JSON.stringify(cartDetails));
}

function displayProducts(data) {
    productsDiv.innerHTML = "";
    data.forEach((obj) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.innerText = obj.title;
        let img = document.createElement("img");
        img.src = obj.image;
        img.style.height = "100px";
        let price = document.createElement("p");
        price.innerText = `₹ ${obj.price}`;
        let rating = document.createElement("p");
        rating.innerText = `${obj.rating.rate}`;
        for (let i = 1; i <= 5; i++) {
            let star = document.createElement("span");
            star.innerText = i <= obj.rating.rate ? "★" : "☆";
            rating.appendChild(star);
        }

        let addtoCart = document.createElement("button");
        addtoCart.innerText = "Add to Cart";
        addtoCart.onclick = function () {
            addToCartFun(obj);
        }

        div.append(h3, img, price, rating, addtoCart);
        productsDiv.appendChild(div);
    });
}

function sortRateHightoLow() {
    mainData.sort(function (a, b) {
        return b.rating.rate - a.rating.rate;
    });
    displayProducts(mainData);
}

function sortPriceLowtoHigh() {
    mainData.sort(function (a, b) {
        return a.price - b.price;
    });
    displayProducts(mainData);
}

fetch("./db.json")
    .then((res) => res.json())
    .then((data) => {
        mainData = data;
        displayProducts(mainData);
    })
    .catch((err) => console.error(err));
