import productos from "./productos";
export const getProductById = (id) => {
    return productos.find( p => p.id == id);
};