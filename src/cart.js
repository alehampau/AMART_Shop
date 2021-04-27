import { ui } from './ui.js';
import { getCartFromLocalStorage } from './localStorage.js';

document.addEventListener('DOMContentLoaded', () => {
  let storageItems = getCartFromLocalStorage();
  ui.showProductsCart(storageItems);
  getCartTotal(storageItems);
});

function getCartTotal (storageItems) {
	let total = 0;
	for (let item of storageItems) {
		let numberOfProducts = parseInt(item.count);
		let productPrice = parseInt(item.product.price);
		total = total + numberOfProducts * productPrice;
	}
	addEventListener('DOMContentLoaded', () => {
		document.getElementById("total").innerHTML += total + " " + "RON";
		
	});
	return total;
}


