// console.log("hello");
import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', getProducts);

function getProducts(){
    http
        .get('https://6086fafca3b9c200173b759b.mockapi.io/products')
        .then((data) => ui.showAdminProducts(data));
}


