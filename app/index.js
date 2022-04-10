function render (){

    const productStore = localStorageUtils.getProducts();
    headerPage.render(productStore.length);
    productsPage.render(); 


}

let CATALOG = [];

//https://myjson.dit.upm.es/api/bins/h0s1
//components/server/catalog.json

fetch('components/server/catalog.json')
.then(res=>res.json())
.then(body=>{

    CATALOG = body;
    render();
})
.catch(error=>
    {console.error();
    })
