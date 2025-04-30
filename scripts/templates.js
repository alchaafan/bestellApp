function getFoodTemplates(i) {
        return ` <div id="food">
                         <div><img id="cart" src="./img/cart.png" alt="" onclick="addToCart(${i})"></div>
    
                        <div id="noodDetails">
    
                        <h2>${myFood[i].name}</h2>
                        <p>${myFood[i].price} €</p>
                        <p>${myFood[i].description}</p>
           
                        </div>
                 </div>
                
        
        
        `

}


function getRenderCart() {
        return ` 
        
        <div id="waren">
        <div id="cart-item${i}" class="ware" >
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
