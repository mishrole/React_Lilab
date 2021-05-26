import { useState, useEffect } from 'react';
import { getCategories } from '../helpers/getCategories';

export const useFetchCategories = () => {
    
    const [category, setCategory] = useState({
        categories: [],
        loading: true
    });

    // Los efectos no pueden ser async porque esperan algo síncrono
    useEffect(() => {
        getCategories()
        .then(category => {
            setCategory({
                categories: category,
                loading: false
            })
        })
    }, []);

    return category;
}