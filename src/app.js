import { http } from './http.js'
import { ui } from './ui.js'
 
//Get products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts(){
    // const http = new customHTTPMethods();
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

    let product = {
        image : imageValue,
        title : titleValue,
        description : descriptionValue,
        price : priceValue,  
    };

    http
        .post('http://localhost:3000/products', product)
        .then((data) => getProducts());
}

//delete product
// document.getElementById('products').addEventListener('click', deleteProduct);

function deleteProduct(e) {
    console.log(e.target);
}
