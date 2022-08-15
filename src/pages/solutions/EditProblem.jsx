import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { updateProblemAction } from "../../actions/problemsAction";

const EditProblem = () => {

    const params = useParams()
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const updateProblem = (problem) => dispatch( updateProblemAction(problem) )

    const problems = useSelector( state => state.problems.problems )

    const [ problemUpdate, setProblemUpdate ] = useState({
        _id: '',
        name: '',
        description: '',
        category: '',
        solutions: []
    })

    const { _id, name, description } = problemUpdate

    useEffect(() => {
        const findProblem = (problems, id) => {
            problems.map( problem => {
                problem._id === id && setProblemUpdate(problem)
            })
        }

        findProblem(problems, params.id)   
    }, [])

    const handleChange = e => {
        setProblemUpdate({
            ...problemUpdate,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Validacion
        if(_id === '' || name === '' || description === '') return

        // Creamos la solucion
        updateProblem(problemUpdate)

        // Reset state
        setProblemUpdate({
            _id: '',
            name: '',
            description: '',
            category: '',
            solutions: []
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
 
export default EditProblem;