let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if (isAuth !== "Authenticated") {
    window.location.href = "./login.html";
} else {
let productsDiv = document.getElementById("products");
let mainData = JSON.parse(localStorage.getItem("cartDetails")) || [];
let cartTotal = document.getElementById("cart-total");

calculateCartTotal(mainData);

function calculateCartTotal(data) {
    let total = data.reduce(function(acc, el) {
        return acc + el.price;
    }, 0);
    
    cartTotal.innerText = `₹${total}`;
}


displayProducts(mainData);

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

        let removeFromCart = document.createElement("button");
        removeFromCart.innerText = "Remove from Cart";
        removeFromCart.onclick = function() {
            removeFromCartFun(obj);
        };

        div.append(h3, img, price, rating, removeFromCart);
        productsDiv.appendChild(div);
    });
}

function removeFromCartFun(obj) {
    mainData = mainData.filter(item => item !== obj);

    localStorage.setItem("cartDetails", JSON.stringify(mainData));
    calculateCartTotal(mainData);
    displayProducts(mainData);
}
}


