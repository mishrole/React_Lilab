import React from 'react';
import { ProductGridItem } from './ProductGridItem';
import { useFetchProducts } from '../../hooks/useFetchProducts';

export const ProductGrid = ({ category }) => {
    
    const { products, loading } = useFetchProducts(category);
    
    return (
        <>
            {
                loading && <p className="animate__animated animate__flash animate__delay-1s">loading</p>
            }

            <div className="card-grid">
                {
                    products.map(product => {
                        return (
                            <ProductGridItem key={product.id} {...product}/>
                        )
                    })
                }
            </div>
        </>
    )
}