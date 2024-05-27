import productos from "./productos";
export const getProducts = async () => {

    const products = productos.map( products => ({
        id : products.id,
        nombre : products.nombre,
        precio: products.precio,
        stock: products.stock
    }))
    return products;
};