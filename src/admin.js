// console.log("hello");
import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', getProducts);

function getProducts(){
    http
        .get('http://localhost:3000/products')
        .then((data) => ui.showAdminProducts(data));
}


