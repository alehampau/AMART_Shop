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