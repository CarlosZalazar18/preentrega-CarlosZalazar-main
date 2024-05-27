import { useParams } from "react-router-dom"
import { getProductById } from "../helpers/getProductById";

export const ProductDetail = () => {
    const prps = useParams();
    const product = getProductById(prps.id);
    if(product == undefined){
        return (<h1>Producto inexistente!.</h1>);
    }
  return (
    <>
        <h1>Detalle de Producto</h1>
        <hr />
        <div>
            <h2>{ product.nombre }</h2>
            <p>Precio: { product.precio }</p>
            <p>Stock: { product.stock }</p>
        </div>
    </>
  )
}
