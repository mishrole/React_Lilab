import { useState, useEffect } from 'react';
import { getCategories } from '../helpers/getCategories';

export const useFetchCategories = () => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Los efectos no pueden ser async porque esperan algo síncrono
    useEffect(() => {
        getCategories()
        .then(category => {
            setState({
                data: category,
                loading: false
            })
        })
    }, [])

    return state;
}