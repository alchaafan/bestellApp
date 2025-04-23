function getFoodTemplates(i) {
    return ` <div id="content">
    <div><img onclick="addToCart(${i})" id="cart" src="./img/cart.png" alt=""></div>
    <div>
    
            <h2>${myFood[i].name}</h2>
            <p>${myFood[i].price}</p>
           <p>${myFood[i].description}</p>
           </div>
        </div>
        
        `
}


function addToCartTemplates(i) {
    return `<div id="cartList">
        <li>${myFood[i].name} ${myFood[i].price} € - 
        
        </li>
        <div id="buttonsContainer">
        <div id="plusminusContainer">
        <img onclick="increaseCount(${i})" class="plusminus" src="./img/plus.png" alt="">
        <span id="count${i}">1</span>
        <img  onclick="decreaseCount(${i})" class="plusminus" src="./img/minus.png" alt="">
        </div>
        <img " id="delete" src="./img/delete.png" alt="">
        </div>
    </div>`;
}