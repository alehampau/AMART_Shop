import { addProductsInLocalStorage, updateQuantityInLocalStorage, getElementFromLocalStorage, removeElementFromLocalStorage } from './localStorage.js';

class UI {
    constructor() {
        this.productsDiv = document.getElementById('products');
        this.detailsDiv = document.getElementById('product_details');
        this.adminDiv = document.getElementById('admin-products');
        this.title = document.getElementById('title');
        this.price = document.getElementById('price');
        this.image = document.getElementById('image');
        this.description = document.getElementById('description');
        this.id = document.getElementById('id');
        this.quantity = document.getElementById('stock');
        this.tableAdmin = document.getElementById('table-admin');
        this.adminProductsTable = document.getElementById('admin-products-table');
        this.tableCart = document.getElementById('table-cart');
        this.total = document.getElementById('total');
        this.subtotal = document.getElementById('subtotal');
    }

    showProducts(products) {
        let output = '';
        products.forEach((product) => {
            output += `
            <div class = "card-body">
                <div id = "card-image">
                    <img src = "${product.image}" class = "card-img">
                    </div>
                <div id = "card-details">
                    <h4 class = "card-title">${product.title} </h4>
                    <p class = "card-price">Pret : ${product.price} lei</p>
                    <button onclick="window.location.href='details.html?id=${product.id}'" type="button" class="card-button">Detalii</button>
                </div>       
            </div>
            `;
        }); 
        this.productsDiv.innerHTML = output;
     }

    showDetails(product) {
        let output = '';
        output = `<div class = "card-details">
                    <div id = "card-image-details">
                        <img src = "${product.image}" class = "card-img-det">
                    </div>
                    <div id = "card-content-details">
                        <h4 class = "card-title-details">${product.title} </h4>
                        <br>
                        <p class="card-text-details">${product.description}</p>
                        <br>
                        <br>
                        <p class = "card-price-details">Pret : ${product.price} lei</p>
                        <br>
                        <p class = "card-stock-details">Stoc : ${product.quantity}</p>
                        <br>
                        <input type = "number" min = "1" max = "10" value = "1">
                        <br>
                        <button id="addProductToCart" type="button" class="card-button">Adauga in cos</button>
                        <button onclick="window.location.href='index.html'"  id="continueHome" class="card-button" type="button">Continua cumparaturile</button>
                        <button onclick="window.location.href='cart.html'"  id="continueCart" class="card-button" type="button">Vezi cosul de cumparaturi</button>
              </div>
                
                </div>`;
            this.detailsDiv.innerHTML = output;

            let addProductToCart = document.getElementById('addProductToCart');

            addProductToCart.addEventListener('click',() => {
                let count = parseInt(product.quantity.value);
                if (isNaN(count)) {
                    count = 1;
                }
                addProductsInLocalStorage(product, count);
                // const Toast = Swal.mixin({
                //     toast: true,
                //     position: 'top',
                //     showConfirmButton: false,
                //     timer: 1000,
                //     timerProgressBar: true,
                //     didOpen: (toast) => {
                //       toast.addEventListener('mouseenter', Swal.stopTimer)
                //       toast.addEventListener('mouseleave', Swal.resumeTimer)
                //     }
                    Swal.fire(
                        'Ai adaugat produsul in cos',
                        'Continua cumparaturile'
                      );
                  })
                  
                //   Toast.fire({
                //     icon: 'success',
                //     title: 'Produsul a fost adauga in cos!'
                //   })
    }

    showAdminProducts(products) {
        let output = '';
        products.forEach((product) => {
            output = `
            <table id="admin-products-table">
            <tbody id="table-admin"> 
                <tr>
                    <td><img src="${product.image}"></td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.description}</td>
                    <td>${product.quantity}</td>
                    <td><button type="button" id = ${product.id} class="removeBtn delete">Sterge</button></td>
                </tr>
            </tbody> 
            </table>   
            `;
            this.tableAdmin.innerHTML += output;
        });
    };

    showProductsCart(storageItems) {
        let output = '';
        storageItems.forEach((item) => {
            output = `
            <table id= "cart-products-table">
                <tbody id="table-cart"> 
                    <tr class = "cart-rows">
                        <td><img src="${item.product.image}" class="admin-card-img"/></td>
                        <td><button onclick="window.location.href='details.html?id=${item.product.id}'">${item.product.title}</button></td> 
                        <td>${item.product.price} RON</td>
                        <td><input value=${item.count} id="quantity" type="number" min="1" max="10"</td>
                        <td id="subtotal">${item.product.price*item.count} RON</td>
                        <td><button id=${item.product.id} type="button" class="card-button delete">Sterge produs</button></td>
                    </tr>
                </tbody>   
            </table>
            `;
        this.tableCart.innerHTML += output;
        });
        
        let inputFields = document.querySelectorAll("input");
        inputFields.forEach( (inputElement) => {
            let row = inputElement.parentElement.parentElement;
            let removeButton = row.lastElementChild.firstElementChild;

            let productId = removeButton.id;
            inputElement.addEventListener('change', (e) => {
                let count = parseInt(e.target.value);
                if(!isNaN(count) && count > 0) {
                    updateQuantityInLocalStorage(productId, count);
                    return window.location.reload();
                } else {
                    let storageElement = getElementFromLocalStorage(productId);
                    e.target.value = storageElement.count;
                }
            });  
            
            removeButton.addEventListener('click', (e) => {
                removeElementFromLocalStorage(e.target.id);
                row.remove();
                return window.location.reload();
            });  
        });
    }
}

export const ui = new UI();

// document.getElementById('addProduct').addEventListener('click', addNewProduct);

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



        


// class UI_Admin {
//     constructor() {
//         this.adminDiv = document.getElementById('admin-products');
//         // this.admin_products = document.getElementById('admin_products')
//         this.title_admin = document.getElementById('title');
//         this.price_admin = document.getElementById('price');
//         this.image_admin = document.getElementById('image');
//         this.description_admin = document.getElementById('description');
//         this.id_admin = document.getElementById('id');
//     }
//     showAdminProducts() {
//         let output = '';
//         adminDiv.forEach((ui_admin) => {
//             output += `
//             <tbody id="table-body"> 
//                 <tr class = 'row'>
//                     <td>${ui_admin.image_admin}</td>
//                     <td>${ui_admin.title_admin}</td>
//                     <td>${ui.admin.price_admin}</td>
//                     <td><input type="button" class="removeBtn">Remove</button></td>
//                 </tr>
//             </tbody>    
//             `;
//             this.adminDiv.innerHTML += output;
//         });
//     }
// }



//se poate adauga showSucces si showError pt adatgare/stergere produse

//clearfields




// export const ui_admin = new UI_Admin();
