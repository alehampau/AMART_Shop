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
        this.tableAdmin = document.getElementById('table-body');
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
                        <button onclick="window.location.href='cart.html?id=${product.id}'" type="button" class="card-button">Adauga in cos</button>
                    </div>
                </div>`;
              this.detailsDiv.innerHTML += output;
    }

    showAdminProducts(products) {
        let output = '';
        products.forEach((product) => {
            output = `
            
            <tbody id= "table-body"> 
                <tr>
                    <td><img src="${product.image}"></td>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.quantity}</td>
                    <td><input type="button" class="removeBtn">Remove</button></td>
                </tr>
            </tbody>    
            `;
            this.tableAdmin.innerHTML += output;
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

