	const localStorageKey = "selectedProducts";
	
	class StorageItem {
		constructor(count, product) {
			this.count = count;
			this.product = product;
		};
	};
	
	export function addProductsInLocalStorage (product, count) {
		let storageObject = localStorage.getItem(product.id)
		if (null!=storageObject)
		{
			let storageItem = JSON.parse(storageObject)
			storageItem.count += count;
			localStorage.setItem(product.id, JSON.stringify(storageItem));
			return;
		}
	
		let storageItem = new StorageItem(count,product);
		localStorage.setItem(product.id, JSON.stringify(storageItem));	
	}
	
	export function updateQuantityInLocalStorage(productId, count) {
		let storageObject = localStorage.getItem(productId)
		if (null!=storageObject)
		{
			let storageItem = JSON.parse(storageObject);
			storageItem.count = count;
			localStorage.setItem(productId, JSON.stringify(storageItem));
		}
	}
	
	export function getElementFromLocalStorage (productId) {
		return JSON.parse(localStorage.getItem(productId));
	}
	
	export function getCartFromLocalStorage () {
		let keys = Object.keys(localStorage);
		let storageItems = [];
		for (let value of keys) {
			let storageItem = JSON.parse(localStorage.getItem(value));
			storageItems.push(storageItem);
		}
		return storageItems;
	}
	
	export function removeElementFromLocalStorage (productId) {
		localStorage.removeItem(productId);
	}
	
	// let storageObject = localStorage.getItem(localStorageKey);
	// if (null==storageObject)
	// 	var selectedProduct = []
	// else
	// 	var selectedProduct = JSON.parse(storageObject);
	

	//3 adauga element selectat in array
	//scoti elementul din products
     //for(let i = 0; i < productsArray.length; i++) {
	//	 console.log(productsArray[i]);
	 //}
    //  selectedProduct.push(product);
	//selectedProduct.push(....)
	
	//4 salveaza array in local storage
	// localStorage.setItem(localStorageKey, JSON.stringify(selectedProduct));
	// document.getElementById('table-cart') == localStorage.getItem(localStorageKey);
// 	console.log(localStorageKey);
//     console.log("sdfsdfs");
//     let count = 0;
//     let total = 0;
// 	for (let i=0; i<selectedProduct.length-1; i++) {
//         if (selectedProduct[i].id == 1) {
//             count++;
// 			console.log("sdfsdfs1");
//         }
//         total = total + selectedProduct[i].price;
//     }

//     console.log("found: "+count);
//     console.log("total price: "+count);
//     console.log("number of products: "+(selectedProduct.length-1));
// }

// this.tableCart.innerHTML = localStorage.getItem(localStorageKey);

// localStorage.setItem('products', JSON.stringify(product));

// function saveProductsToCart() {
// 	localStorage.setItem('products', 'id');
// 	localStorage.setItem('products', 'product');
// 	localStorage.setItem('products', JSON.stringify(product));
// }

