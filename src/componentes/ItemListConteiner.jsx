// ItemListContainer.js

import React from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import './ItemListConteiner.css';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    
    const { products } = useFetchProducts();
    
    return (
        <div className="item-list-container mt-3">
            <h1>{greeting}</h1>
            <hr />
            <div>
                {
                    products.map( p => 
                        <div key={p.id} className='producto'>
                            <h2>{p.nombre}</h2>
                            <p>Precio: {p.precio}</p>
                            <p>Stock: {p.stock}</p>
                            <Link to={`/product/${p.id}`}>
                                ver mas.
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ItemListContainer;
