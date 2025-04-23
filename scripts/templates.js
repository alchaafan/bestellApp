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

// function addToCartTemplates(i) {
//     return `<div id="cartList"><li>${myFood[i].name}${myFood[i].price} €</li>
//     <img id="delete" src="./img/delete.png" alt="">
//     </div>`
// }


function addToCartTemplates(i) {
    return `<div id="cartList">
        <li>${myFood[i].name} ${myFood[i].price} € - 
        <span id="count${i}">1</span>
        </li>
        <img onclick="increaseCount(${i})" class="plusminus" src="./img/plus.png" alt="">
        <img  onclick="decreaseCount(${i})" class="plusminus" src="./img/minus.png" alt="">
        <img " id="delete" src="./img/delete.png" alt="">
    </div>`;
}