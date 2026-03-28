 text-align: center;
    padding: 20px;
    background-color: #000;
    color: #555;
    font-size: 0.9rem;
    margin-top: 50px;
}
let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    document.getElementById('cart-count').innerText = "Carrello (" + cartCount + ")";
    alert(productName + " è stato aggiunto al carrello!");
}
