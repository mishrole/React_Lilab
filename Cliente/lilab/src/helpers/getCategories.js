export const getCategories = async () => {

    const URL  = 'https://localhost:44330/api/Categoria';
    const response = await fetch(URL);
    const data = await response.json();

    const categories = data.map(category => {
        return {
            id: category.idCategoria,
            title: category.nombreCategoria
        }
    });

    // Regresa una promesa que resuelve la colección
    return categories;

}