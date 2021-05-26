import { useState, useEffect } from 'react';
import { getProducts } from '../helpers/getProducts';

export const useFetchProducts = (category) => {
    
    const [product, setProduct] = useState({
        products: [],
        loading: true
    });

    // Los efectos no pueden ser async porque esperan algo síncrono
    useEffect(() => {
        getProducts(category)
        .then(product => {
            setProduct({
                products: product,
                loading: false
            })
        })
    }, [category])

    return product;
}