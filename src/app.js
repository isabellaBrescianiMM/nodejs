const express = require('express');
const ProductManager = require('./ProductManager.js'); 
const path = require('path')
const currentDir = __dirname
const fileName = 'productos.json'
const url = path.join(currentDir, fileName)
const app = express();
const productManager = new ProductManager(url); 

app.get('/products', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit);
        const products = await productManager.getProducts();

        if (isNaN(limit)) {
            res.json(products);
        } else {
            res.json(products.slice(0, limit));
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Endpoint para obtener un producto por ID
app.get('/products/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const product = await productManager.getProductById(productId);
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
