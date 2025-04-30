
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

    let html = `<button onclick="toggleCart()" id="closeCart">Schließen</button><img src="./img/carts.png" alt="">
   `;

    for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        html += getRenderCart(item, i);
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
    document.getElementById(`quantity-${i}`).innerText = `Menge: ${cart[i].quantity}`;
    calcTotal(); 
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
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    let disabledAttr = cart.length === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : '';

    document.getElementById('totalContainer').innerHTML = `
        <br>
        <p id="gesamtsumme">Gesamtsumme: ${total.toFixed(2)} €</p><br> 
        <button onclick="orderNow()" id="bestellen" ${disabledAttr}><h2>JETZT BESTELLEN</h2></button>
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
   
    if (cartRef.classList.contains('fullScreenCart')) {
        cartRef.style.display = "block";
    } else {
        cartRef.style.display = "none";
    }
}