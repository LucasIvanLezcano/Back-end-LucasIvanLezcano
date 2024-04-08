
class ProductManager {
    static Id = 0; 
    constructor() {
        this.products = [];
    }


     addProduct(title, description, price, img, code, stock) {

        if(!title || !description || !price || !img || !code || !stock) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        
        if(this,this.products.some(item => item.code === code)) {
             console.log("El codigo ya existe");
             return;
        }


        const newProduct = {
            id: ++ProductManager.Id,
            title,
            description,
            price,
            img,
            code, 
            stock,
        }
        this.products.push(newProduct); 
     }

     getProduct() {
        return this.products;
     }

     getProductById(id) {
        const producto = this.products.find(item => item.id === id );

        if(!producto) {
            return "Not Found";
        } 
        return producto; 
    }
}



const manager = new ProductManager();
console.log(manager.getProduct());

//Ejemplo de producto que despeta todas las pruebas

manager.addProduct("Producto prueba", "este es un producto de prueba", 200, "sin imagen", "abc123", 25)

console.log(manager.getProduct());

//ejemplo de si queremos agregar un producto con el mismo codigo

manager.addProduct("Producto prueba", "este es un producto de prueba", 200, "sin imagen", "abc123", 25);


//agregando mas productos 
manager.addProduct("Producto prueba 2", "este es un producto de prueba 2 ", 250, "sin imagen", "abc124", 20);
manager.addProduct("Producto prueba 3", "este es un producto de prueba 3 ", 150, "sin imagen", "abc125", 10);
console.log(manager.getProduct());


// Buscar producto por id

console.log(manager.getProductById(2));