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

function addToCart(item) {
    let cartRef = document.getElementById('warenkorb');
    cartRef.innerHTML += `<li>${item}</li>`
}