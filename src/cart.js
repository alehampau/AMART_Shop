import { ui } from './ui.js';
import { getCartFromLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
  let storageItems = getCartFromLocalStorage();
  ui.showProductsCart(storageItems);
  getCartTotal(storageItems);
//   getCartTotal(storageItems);
});

function getCartTotal (storageItems) {
	let total = 0;
	for (let item of storageItems) {
		let numberOfProducts = parseInt(item.count);
		let productPrice = parseInt(item.product.price);
		total = total + numberOfProducts * productPrice;
	}
	// console.log(total);
	addEventListener('DOMContentLoaded', () => {
	//    let t = total.toString();
		document.getElementById("total").innerHTML += total + " " + "RON";
		
	});
	return total;
}

// function getElementSubtotal (storageElement) {
// 	let numberOfProducts = parseInt(storageElement.count);
// 	let productPrice = parseInt(storageElement.product.price);
// 	return numberOfProducts*productPrice;
// }

// function getElementSubtotal (storageElement) {
// 	let numberOfProducts = parseInt(storageElement.count);
// 	let productPrice = parseInt(storageElement.product.price);
// 	return numberOfProducts*productPrice;
// }
// function addCartItem(productId) {
//     var count = parseInt(localStorage.getItem('cart-size')) || 0;
//     localStorage.setItem('selectedProduct' + (count + 1), productId);
//     localStorage.setItem('cart-size', count + 1);
//     console.log("hello addCartItems");
//   } 
//   addCartItem()
 

// function getCartItems(productId) {
//     var selectedProduct = [];
//     var count = parseInt(localStorage.getItem('cart-size')) || 0;
//     console.log("hello_getCartItems");
//     for (var i = 1; i <= count; i++) {
//       var productId = localStorage.getItem('selectedProduct' + i);
//       selectedProduct.push(parseInt(productId));
//     }
//   }
//   getCartItems();


  


// let addProductToCart = document.getElementById('addProductToCart');
// let showProductOnCart = document.getElementById('showProducsInCart')

// addProductToCart.addEventListener('click', saveProductsToCart);

// function saveProductsToCart() {
//     localStorage.setItem('cart_products', JSON.stringify(product));
// }

// showProductOnCart.addEventListener('click', showProductsCart);

// function showProductsCart(){
//     const products = JSON.parse(localStorage.getItem('cart_products'))
// }


// localStorage.setItem('products', 'id');
// localStorage.setItem('products', JSON.stringify(product));
//la products trebuie sa fie o denumire specifica exemplu , myProducts pentru a nu suprascrie.
// addProductToCart.addEventListener('click', saveProductsToCart);
// localStorage.setItem('products', JSON.stringify(product));

// function saveProductsToCart() {
//     localStorage.setItem('products', JSON.stringify(product));
	// localStorage.setItem('products', 'id');
	// localStorage.setItem('products', 'product');
	
// }

// addProductToCart.addEventListener('click', getProductsFromCart);

// function getProductsFromCart() {
// 	const products = JSON.parse(localStorage.getItem('products'));
// 	console.log(products);
// }

// tableBody.addEventListener('click', deleteElement)

