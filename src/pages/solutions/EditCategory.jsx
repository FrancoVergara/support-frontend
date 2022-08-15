import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { updateCategoryAction } from "../../actions/categoriesAction";

const EditCategory = () => {

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updateCategory = (category, token) => dispatch( updateCategoryAction(category, token) )

    const categories = useSelector( state => state.categories.categories )

    const [ categoryUpdate, setCategoryUpdate ] = useState({
        _id: '',
        name: '',
        problems: []
    })

    useEffect(() => {
        const findCategory = (categories, id) => {
            categories.map( category => {
                category._id === id && setCategoryUpdate(category)
            })
        }

        findCategory(categories, params.id)   
    }, [])

    const handleChange = e => {
        setCategoryUpdate({
            ...categoryUpdate,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Validacion
        if(categoryUpdate.name === '') return

        // Creamos la solucion
        updateCategory(categoryUpdate)

        // Reset State
        setCategoryUpdate({
            _id: '',
            name: '',
            problems: []
        })

        // Redireccionar
        navigate('/solutions')
    }

    return (
        <div className="row position-relative">
            <div className="col-xxl-10 general-container">
                <div className="container-sm w-50">
                    <h3 className="mt-5 mb-3">Editar categoria</h3>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <label className="form-label">Nombre de la categoria</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value={categoryUpdate.name}
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
 
export default EditCategory;