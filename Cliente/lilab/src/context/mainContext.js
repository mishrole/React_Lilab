import { createContext } from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { useFetchCategories } from '../hooks/useFetchCategories';

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
    
    const { products } = useFetchProducts();
    const { categories } = useFetchCategories();

    return (
        <MainContext.Provider value={ { categories, products } }>
            { children }
        </MainContext.Provider>
    )
}

export default MainContext;

export { MainContextProvider };