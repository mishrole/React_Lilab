import { useState, useEffect } from 'react';
import { getProducts } from '../helpers/getProducts';

export const useFetchProducts = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Los efectos no pueden ser async porque esperan algo síncrono
    useEffect(() => {
        getProducts(category)
        .then(products => {
            setState({
                data: products,
                loading: false
            })
        })
    }, [category])

    return state;
}