function init() {
    let foodRef = document.getElementById('menuContainer');
    foodRef.innerHTML += ` <div class="food">

        <div id="menuPizza">
        <div id="pizza"> <img  src="./img/pizza.png" alt=""></div>
            <h2>PIZZA:</h2>
            <p>Pizza Margaritta: 10,99€</p>
            <p>Pizza Salami: 11,99€</p>
            <p>Pizza Champinion: 12,99€</p>
            <p>Pizza Hawaii: 12,99€</p>
            </div>
            <div id="menuBurger">
            <img src="./img/burger.png" alt="">
                   <h2>BURGER</h2>
            <p>Hamburger: 5,99€</p>
            <p>Cheeseburger: 5,99€</p>
            <p>Chickenburger: 5.99€</p>
            <p>Big Burger: 7,99€</p>
            
            </div>

        
       
    </div>`
}
