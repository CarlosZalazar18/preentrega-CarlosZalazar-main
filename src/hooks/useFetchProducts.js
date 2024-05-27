import { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProducts";


export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);

    const handlerProducts = async () => {
        const prods = await getProducts();
        setProducts(prods);
    };

    useEffect(() => {
        handlerProducts();
    }, [ ])

    return {products};
}