import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CategoriesName from "../../components/header/options/CategoriesName"
import { createProblemAction } from "../../actions/problemsAction";

const AddProblem = () => {

    const navigator = useNavigate()
    const dispatch = useDispatch()

    const createProblem = (problem) => dispatch( createProblemAction(problem) )

    const categories = useSelector( state => state.categories.categories )

    const [ problem, setProblem ] = useState({
        name: '',
        description: '',
        category: ''
    })

    const { name, description, category } = problem

    const handleChange = e => {
        setProblem({
            ...problem,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Validacion
        if(name === '' || description === '' || category === '') return

        // Creamos la solucion
        createProblem(problem)

        // Reseteamos el state
        setProblem({
            name: '',
            description: '',
            category: ''
        })

        // Redireccionar
        navigator('/solutions')
    }

    return (
        <div className="row position-relative">
            <div className="col-xxl-10 general-container">
                <div className="container-sm w-50">
                    <h3 className="mt-5 mb-3">Agregar problema</h3>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <label className="form-label">Nombre de la categoria</label>
                            <select 
                                className="form-select"
                                name="category"
                                value={category}
                                onChange={handleChange}
                            >
                                <option value="0">-- Opciones --</option>

                                { categories.map( category => (
                                    <CategoriesName
                                        key={category._id}
                                        category={category}
                                    />
                                ))}

                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Nombre del problema</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Descripción</label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={description}
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
                            >Guardar Problema</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default AddProblem;