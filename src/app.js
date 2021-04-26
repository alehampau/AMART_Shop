import { http } from './http.js';
import { ui } from './ui.js';
 
//Get products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts(){
    http
        .get('https://6086fafca3b9c200173b759b.mockapi.io/products')
        .then((data) => ui.showProducts(data));
}


//addProduct
document.getElementById('addProduct').addEventListener('click', addNewProduct);

function addNewProduct() {
    const imageValue = document.getElementById('image').value;
    const titleValue = document.getElementById('title').value;
    const descriptionValue = document.getElementById('description').value;
    const priceValue = document.getElementById('price').value;
    const quantityValue = document.getElementById('quantity').value;

    let product = {
        image : imageValue,
        title : titleValue,
        description : descriptionValue,
        price : priceValue, 
        quantity : quantityValue 
    };

    http
        .post('https://6086fafca3b9c200173b759b.mockapi.io/products', product)
        .then((data) => getProducts());
}

//delete products
document.getElementById('admin-products').addEventListener('click', deleteProduct);

function deleteProduct(e) {
    if(e.target.classList.contains('delete')) {
        const id = e.target.id;
        http
        .delete(`https://6086fafca3b9c200173b759b.mockapi.io/products/${id}`)
        .then((data) => getProducts())
        .catch('Error on delete!')
    }
}
