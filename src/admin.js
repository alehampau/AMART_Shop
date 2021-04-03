import { http } from './http.js'
import { ui } from './ui.js'

document.addEventListener('DOMContentLoaded', getProducts);

function getProducts(){
    http
        .get('http://localhost:3000/products')
        .then((data) => ui.showAdminProducts(data));
}


    // let newProduct = document.getElementById('addProduct').addEventListener('click', addNewProduct);

//     function addNewProduct() {
//         const imageValue = document.getElementById('image').value;
//         const titleValue = document.getElementById('title').value;
//         const descriptionValue = document.getElementById('description').value;
//         const priceValue = document.getElementById('price').value;
//         const stockValue = document.getElementById('quantity');

//         let newProduct = {
//             image : imageValue,
//             title : titleValue,
//             description : descriptionValue,
//             price : priceValue,  
//             stock : stockValue
//         };

//         http
//             .post('http://localhost:3000/products', newProduct)
//             .then((data) => ui_admin.getProducts());
//     }

// console.log('hello');
// class UI_Admin {
//     constructor() {
//         this.adminDiv = document.getElementById('admin-products');
//         this.title = document.getElementById('title');
//         this.price_admin = document.getElementById('price');
//         this.image_admin = document.getElementById('image');
//         this.description_admin = document.getElementById('description');
//         this.id_admin = document.getElementById('id');
//     }
//     showAdminProducts() {
//         let output = '';
//         adminDiv.forEach((product) => {
//             output = `
//             <tbody id="table-body"> 
//                 <tr class = 'row'>
//                     <td>${product.image}</td>
//                     <td>${product.title}</td>
//                     <td>${product.price}</td>
//                     <td><input type="button" class="removeBtn">Remove</button></td>
//                 </tr>
//             </tbody>    
//             `;
//             this.adminDiv.innerHTML += output;
//         });
//     }
// }
// export const ui_admin = new UI_Admin;

// console.log('hello again');

