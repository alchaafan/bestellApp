function getFoodTemplates(i) {
    return ` <div id="content">
    <div><img id="cart" src="./img/cart.png" alt="" onclick="addToCart(${i})"></div>
    <div>
    
            <h2>${myFood[i].name}</h2>
            <p>${myFood[i].price}</p>
           <p>${myFood[i].description}</p>
           
           </div>
        </div>
        
        `
}

