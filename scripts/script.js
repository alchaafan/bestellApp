function init() {
    let contentRef = document.getElementById('menuContainer');
    for(let i = 0; i < myFood.length; i++) {
        contentRef.innerHTML += getFoodTemplates(i);
    }
}

function warenkorb() {
    let warenkorbRef = document.getElementById('menuContainer');
    warenkorbRef.innerHTML +=`<div id="warenkorb"><img id="carts" src="./img/carts.png" alt=""></div>`
}
warenkorb()

function addToCart(i) {
    let cartRef = document.getElementById('warenkorb');
 
    cartRef.innerHTML += addToCartTemplates(i);
    
}

let cartCounts = {}; // Speichert die Anzahl pro Artikel

function increaseCount(i) {
    if (!cartCounts[i]) cartCounts[i] = 1;
    cartCounts[i]++;
    document.getElementById(`count${i}`).innerText = cartCounts[i];
}

function decreaseCount(i) {
    if (cartCounts[i] > 1) {
        cartCounts[i]--;
        document.getElementById(`count${i}`).innerText = cartCounts[i];
    }
}

