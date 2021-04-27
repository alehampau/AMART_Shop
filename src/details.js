import { http } from './http.js'
import { ui } from './ui.js'

window.onload = () => {
	if (window.location.search !== '') {
		const id = window.location.search.split('=')[1];
    http 
      .get(`https://6086fafca3b9c200173b759b.mockapi.io/products/${id}`)
      .then((data) => ui.showDetails(data))
  }
}
