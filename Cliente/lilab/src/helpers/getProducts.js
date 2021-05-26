export const getProducts = async ( category ) => {

    const URL  = 'https://localhost:44330/api/Producto';
    const response = await fetch(URL);
    const data = await response.json();

    const products = data.map(product => {
        return {
            id: product.idProducto,
            title: product.nombreProducto,
            description: product.descripcionProducto,
            price: product.precioProducto,
            stock: product.stockProducto,
            url: product.imagenProducto,
            category: product.idCategoria,
        }
    });
    
    // Regresa una promesa que resuelve la colección
    return products;

}