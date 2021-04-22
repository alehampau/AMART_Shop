import { http } from './http.js'
import { ui } from './ui.js'

window.onload = () => {
	if (window.location.search !== '') {
		const id = window.location.search.split('=')[1];
    http 
      .get(`http://localhost:3000/products/${id}`)
      .then((data) => ui.showDetails(data))
  }
}


// class UI_Details {
//   constructor() {
//     this.detailsDiv = document.getElementById("product_details");
//     this.title = document.getElementById("title");
//     this.price = document.getElementById("price");
//     this.image = document.getElementById("image");
//     this.description = document.getElementById("description");
//     this.id = document.getElementById("id");
//     this.quantity = document.getElementById("stock");
//   }

//   showDetailsProduct(product) {
//     let output = "";
//     product.forEach((product) => {
      
//       output += `
//                 <div class = "card-details">
//                     <img src = "${product.image}" class = "card-img">
//                     <h4 class = "card-title">${product.title} </h4>
//                     <p class="card-text">${product.description}</p>
//                     <p class = "card-price">Pret : ${product.price} lei</p>
//                     <p class = "card-stock">Stoc : ${product.quantity}</p>
//                     <button onclick="window.location.href='cart.html?id=${product.id}'" type="button" class="card-button">Adauga in cos</button>
//                 </div>
//                 `;
//     });

//     this.detailsDiv.innerHTML = output;
//   }
// }
