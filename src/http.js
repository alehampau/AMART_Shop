class customHTTPMethods {
    async get(url){
        const response = await fetch(url='https://api.jsonbin.io/b/6086f736c7df3422f7fe53a7');
        const data = await response.json();
        return data;
        }

    async post(url, product){
        const response = await fetch(url='https://api.jsonbin.io/b/6086f736c7df3422f7fe53a7', {
            method : 'POST',
            headers : {
                'Contant-type' : 'application/json',
            },
        body : JSON.stringify(product)
    });
    const data = await response.json();
    return data;
    }

    async delete(url){
        const response = await fetch(url='https://api.jsonbin.io/b/6086f736c7df3422f7fe53a7', {
            method : 'DELETE',
            headers : {
                'Contant-type' : 'application/json',
            }
    });
    const data = await response.json();
    return data;
    }
}        

export const http = new customHTTPMethods();