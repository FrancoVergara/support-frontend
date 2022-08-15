import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createNewCategoryAction } from "../../actions/categoriesAction";

const AddCategory = () => {

    const navigator = useNavigate()
    const dispatch = useDispatch()

    const createCategory = (category) => dispatch( createNewCategoryAction(category) )

    const [ category, setCategory ] = useState({
        name: ''
    })

    const handleChange = e => {
        setCategory({
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Validacion
        if(category.name === '') return

        // Creamos la solucion
        createCategory(category)

        // Reseteamos el state
        setCategory('')

        // Redireccionar
        navigator('/solutions')
    }

    return (
        <div className="row position-relative">
            <div className="col-xxl-10 general-container">
                <div className="container-sm w-50">
                    <h3 className="mt-5 mb-3">Agregar Categoria</h3>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <label className="form-label">Nombre de la categoria</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value={category.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-5 d-flex justify-content-evenly">
                            <Link to="/solutions">
                                <button 
                                    type="submit" 
                                    className="btn deletebtn hover-delete" 
                                >Cancelar</button>
                            </Link>


                            <button 
                                type="submit" 
                                className="btn addbtn hover-add" 
                            >Guardar Categoria</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default AddCategory;