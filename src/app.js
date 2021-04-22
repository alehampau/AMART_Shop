import { http } from './http.js';
import { ui } from './ui.js';
 
//Get products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts(){
    http
        .get('http://localhost:3000/products')
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
        .post('http://localhost:3000/products', product)
        .then((data) => getProducts());
}


document.getElementById('admin-products').addEventListener('click', deleteProduct);

function deleteProduct(e) {
    if(e.target.classList.contains('delete')) {
        const id = e.target.id;
        http
        .delete(`http://localhost:3000/products/${id}`)
        .then((data) => getProducts())
        .catch('Error on delete!')
    }
}
