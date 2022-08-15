import { useSelector } from 'react-redux'

import Categories from "./Categories";
import SearchBar from "./SearchBar";

const Aside = () => {

    const categories = useSelector( state => state.categories.categories )

    return (
        <>
            <SearchBar />

            <p className="mt-4 ms-3 text-uppercase fw-light">Errores</p>

            <div className="accordion" id="accordionExample">

                { categories?.map( category => (
                    <Categories
                        key={category._id}
                        category={category}
                    />
                ))}

            </div>
        </>
    );
}
 
export default Aside;