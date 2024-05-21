const cart = {}
const btns = document.querySelectorAll('.card button');
const cartDialog = document.getElementById('cart');

// Open cart dialog
document.getElementById('openCart').addEventListener('click', () => {
  cartDialog.showModal();
});

// Close cart dialog
document.getElementById('closeCart').addEventListener('click', () => {
  cartDialog.close();
});
// Add products to cart
btns.forEach((btn) => {
  btn.addEventListener('click',(e) => {
    if( e.target.id in cart){
      cart[e.target.id] += 1;
    }
    else{
      cart[e.target.id] = 1;
    }
    cartDialog.querySelector('.cart-body').innerHTML = '';
    if( Object.keys(cart).length > 0){
      for(let product in cart){
        const itemCart = document.createElement('div');
        const itemQuantity = document.createElement('span');
        itemQuantity.innerText = cart[product];
        itemCart.innerText = product;
        itemCart.appendChild(itemQuantity); 
        cartDialog.querySelector('.cart-body').appendChild(itemCart);
  
      }
    }
  })
});
// Empty cart
if(Object.keys(cart) == 0){
  cartDialog.querySelector('.cart-body').innerText = 'Selecciona un producto :)'

}