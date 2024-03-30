let products = [];

const addProducts = (title, description, price, thumbnail, code, stock) => {

    const newProduct = {
        id: products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
    }




    console.log(Object.values(newProduct));
    if(Object.values(newProduct).includes(undefined)){
        console.log("todos los campos son obligatorios");
        return;
    };


    const productExists = products.find( product => product.code === code);
    if(productExists) {
        console.log(`el producto ${title} con el codigo ${code} ya existe`);
        return;
    }
    products.push(newProduct);
}

const getProducts = () => {
    console.log(products);
    return products;
}




const getProductsById = (id)  => {
    const product = products.find( product => product.id === id );
    if (!product) {
        console.log(`No se encontro el producto con el id ${id}`);
        return;
    }

    console.log(product);
    return product; 

}


addProducts("Producto1", "el primer producto", 200, "http://www.google.com", "adghk45", 10);
addProducts("Producto2", "el segundo producto", 567, "http://www.google.com", "adty78", 60);
addProducts("Producto3", "el tercer producto", 567, "http://www.google.com", "adty78", 60);
addProducts("Producto4", "el cuarto producto", 537, "http://www.google.com", "adjllyy28", 6);
addProducts("Producto5", "el quinto producto", 899, "http://www.google.com", "adty126");

getProducts();

getProductsById(5);