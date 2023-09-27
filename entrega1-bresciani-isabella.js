class ProductManager {
    constructor(){
        this.products = []
    }
    static productcode= 0
    getProductById(id){
        for (const prod of this.products) {
            if (prod.id === id) {
              return prod; // Retorna el producto si se encuentra
            }
          }
          
          console.log("Element not found"); // Si no se encontró el producto, muestra un mensaje
          return null;
    }

    addProduct(title, code, description, price, thumbnail, stock){
        for (const prod of this.products) {
            if (prod.code === code) {
              console.log(`El producto con codigo ${code} ya existe en la lista`)
              return
            }
          }
        

        let prod = {
                id: ProductManager.productcode++,
                code: code,
                title: title,
                description: description,
                price: price,
                thumbnail:  thumbnail,
                stock: stock
        }
        this.products.push(prod)

       
        
    }

    getProducts(){
        return this.products
    }
    
}



const prodManager = new ProductManager()
console.log(prodManager.getProducts())

prodManager.addProduct("pantalon1", "ab", "ancho", 2000, "img1", 1)
console.log(prodManager.getProducts())

prodManager.addProduct("pantalon2","ab1", "ancho", 2000, "img2", 2)
console.log(prodManager.getProducts())

console.log(prodManager.getProductById(1))