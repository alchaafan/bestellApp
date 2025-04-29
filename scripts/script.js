
function init() {
    let contentRef = document.getElementById('content');
    for(let i = 0; i < myFood.length; i++) {
        contentRef.innerHTML += getFoodTemplates(i);
    }
    warenkorbBtn();
    
}


let cart = [];
function renderCart() {
    let cartRef = document.getElementById('cartContainer');

    let html = `<img src="./img/carts.png" alt="">
   `;

    for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        html += ` 
        <div id="cart-item${i}" class="ware">
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
        total += cart[i].price * cart[i].quantity +5;
    }
    document.getElementById('totalContainer').innerHTML = 
    `
    <p>Lieferkosten: 5.00 €</p>
    <br>
    <p id="gesamtsumme">Gesamtsumme: ${total.toFixed(2)} €</p><br> 
    <button onclick="orderNow()" id="bestellen"<h2>JETZT BESTELLEN</h2></button>
      
    `;
}


function orderNow() {
    let notifyRef = document.getElementById('notify');
    notifyRef.style.display = "block";
    cart = [];
    renderCart();

    setTimeout(() => {
        notifyRef.style.display = "none"
    }, 4000);
}


function warenkorbBtn() {
    let btnRef = document.getElementById('content');
    btnRef.innerHTML += `<button id="warenkorbBtn">Warenkorb</button>`;

    document.getElementById('warenkorbBtn').addEventListener('click', toggleCart);
}
    

function toggleCart() {
    let cartRef = document.getElementById('cartContainer');
    cartRef.classList.toggle('fullScreenCart');
    let closeRef = document.getElementById('cartContainer');
    closeRef.innerHTML += ` <button onclick="toggleCart()" id="closeCart">Schließen</button>`

    if (cartRef.classList.contains('fullScreenCart')) {
        cartRef.style.display = "block";
    } else {
        cartRef.style.display = "none";
    }
}