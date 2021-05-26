import { createContext } from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useFetchCategories } from '../hooks/useFetchCategories';

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    
    const { state: { data: products } } = useFetchProducts();
    const { state: { data: categories } } = useFetchCategories();

    return (
        <MainContext.Provider value={ { products, categories } }>
            { children }
        </MainContext.Provider>
    )
}

export default MainContext;

export { MainContextProvider };