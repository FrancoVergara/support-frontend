import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { updateSolutionAction } from "../../actions/solutionsAction"

import ContentEditable from "react-contenteditable"

const EditSolution = () => {

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updateSolution = solution => dispatch( updateSolutionAction(solution) )

    const solutions = useSelector( state => state.solutions.solutions )

    const [ solutionUpdate, setSolutionUpdate ] = useState({
        _id: '',
        cbu: '',
        notes: '',
        resolution: '',
        problem: ''
    })

    const { _id, cbu, notes, resolution, problem } = solutionUpdate

    useEffect(() => {
        const findSolution = (solutions, id) => {
            solutions.map( solution => {
                solution._id === id && setSolutionUpdate(solution)
            })
        }

        findSolution(solutions, params.id)   
    }, [])

    // Take form values
    const handleChange = e => {
        setSolutionUpdate({
            ...solutionUpdate,
            [e.target.name] : e.target.value
        })
    }

    const handleChangeEditable = e => {
        setSolutionUpdate({
            ...solutionUpdate,
            resolution : e.target.value
        })
    }

    // Validate and update solution
    const handleSubmit = e => {
        e.preventDefault()

        // Validation
        if( [_id,cbu,resolution,problem].includes('') ) return

        // Update solution
        updateSolution(solutionUpdate)

        // Reset state
        setSolutionUpdate({
            _id: '',
            cbu: '',
            notes: '',
            resolution: '',
            problem: ''
        })

        // Redirect
        navigate('/solutions')
    }

    return (
        <div className="row position-relative">
            <div className="col-xxl-10 general-container">
                <div className="container-sm w-50">
                    <h3 className="mt-5 mb-3">Editar solucion</h3>

                    <form
                        onSubmit={handleSubmit}
                    >

                        <div className="mb-3">
                            <label className="form-label">Cbu</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="cbu"
                                value={cbu}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Notas</label>
                            <textarea
                                className="form-control"
                                name="notes"
                                value={notes}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Resolucion</label>
                            <ContentEditable
                                className="form-control vh-edit-editable overflow-scroll"
                                html={ resolution }
                                disabled={false}
                                onChange={handleChangeEditable}
                            ></ContentEditable>
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
                            >Guardar cambios</button>

                        </div>

                    </form>
                </div>
                
            </div>
            
        </div>
    );
}

export default EditSolution