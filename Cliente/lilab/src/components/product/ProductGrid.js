import React from 'react';
import { ProductGridItem } from './ProductGridItem';
import { useFetchProducts } from '../../hooks/useFetchProducts';

export const ProductGrid = ({ category }) => {

    // Renombrar actual:nuevo
    const { data:products, loading } = useFetchProducts(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__delay-1s">{category}</h3>
            {
                loading && <p className="animate__animated animate__flash animate__delay-1s">loading</p>
            }

            <div className="card-grid">
                {
                    products.map( product => {
                        return (
                            <ProductGridItem key={product.id} {...product} /> 
                        )   
                    })
                }
            </div>
        </>
    )
}