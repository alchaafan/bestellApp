function init() {
    let contentRef = document.getElementById('menuContainer');
    for(let i = 0; i < myFood.length; i++) {
        contentRef.innerHTML += getFoodTemplates(i);
    }
}

function renderCart() {
    let cartRef = document.getElementById('cartContainer');

    let html = `<img src="./img/carts.png" alt="">`;

    for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        html += `
        <div id="cart-item${i}" class ="cartList">
        <h2>${item.name}</h2> <br>
        <p>${item.price} €</p>
       
        <div id="buttonsContainer">
         <img onclick ="increaseQuantity(${i})" src="./img/plus.png" alt="" class ="plusminus">
         <p>Menge: ${item.quantity}</p>
        <img  onclick ="decreaseQuantity(${i})"src="./img/minus.png" alt="" class ="plusminus">
         <img class="deleteBtn" src="./img/delete.png" alt="" onclick="removeFromCart(${i})">
         </div>
          
        
        
        </div>
        
        `
    }
    html += `<div id="totalContainer">Gesamtsumme: 0.00 € </div>`

    cartRef.innerHTML = html;
    
   calcTotal();
}


function removeFromCart(i) {
    cart.splice(i, 1);
    renderCart();
}
renderCart();


function addToCart(i) {
    
    let FoodItem = myFood[i];
    let existingItem = cart.find(item=> item.id == FoodItem.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({... FoodItem, quantity: 1})
    }
   
    renderCart();
}


function increaseQuantity(i) {
    
    cart[i].quantity++;
    renderCart();
}

function decreaseQuantity(i) {
    if(cart[i].quantity > 1) {
        cart[i].quantity--;
    } else {
        cart.splice(i, 1);
    }
    renderCart();
}


function calcTotal() {
    let total = 0;
    for(let i = 0; i < cart.length; i++ ) {
        total += cart[i].price * cart[i].quantity;
    }
    document.getElementById('totalContainer').innerText = `Gesamtsumme: ${total.toFixed(2)} €`;
}