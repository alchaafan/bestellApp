function init() {
    let contentRef = document.getElementById('menuContainer');
    for(let i = 0; i < myFood.length; i++) {
        contentRef.innerHTML += getFoodTemplates(i);
    }
}

function renderCart() {
    let cartRef = document.getElementById('cartContainer');

    cartRef.innerHTML = `<img src="./img/carts.png" alt="">`;

    for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        cartRef.innerHTML += `
        <div>
        
        <h2>${item.name}</h2>
        <p>${item.price}</p>
         <img class="deleteBtn" src="./img/delete.png" alt="" onclick="removeFromCart(${i})">
        
        
        </div>
        
        `
    }
  
}





function removeFromCart(i) {
    cart.splice(i, 1);
    renderCart();
}
renderCart();


function addToCart(i) {
    let FoodItem = myFood[i]
    cart.push(FoodItem);
    renderCart();
}

