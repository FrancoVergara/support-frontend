import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProblemsName from '../../components/header/options/ProblemsName'
import { createSolutionAction } from "../../actions/solutionsAction";

import ContentEditable from 'react-contenteditable'

const ChooseAdd = () => {

    const navigator = useNavigate()
    const dispatch = useDispatch()

    const createSolution = (solution) => dispatch( createSolutionAction(solution) )

    const problems = useSelector( state => state.problems.problems )

    const [ solution, saveSolution ] = useState({
        cbu : '',
        notes : '',
        resolution : '',
        problem: ''
    })

    const { cbu, notes, resolution, problem } = solution

    // Take form values
    const handleChange = e => {
        saveSolution({
            ...solution,
            [e.target.name] : e.target.value
        })
    }

    const handleChangeEditable = e => {
        saveSolution({
            ...solution,
            resolution : e.target.value
        })
    }

    // Validate and create solution
    const handleSubmit = e => {
        e.preventDefault()

        // Validation
        if( cbu === '' || resolution === '' || problem === '' ){
            return
        }

        // Creation
        createSolution(solution)

        // Reset state
        saveSolution({
            cbu : '',
            notes : '',
            resolution : '',
            problem: ''
        })

        // Redirect
        navigator('/solutions')
    }

    return (
        <div className="row position-relative">
            <div className="col-xxl-10 general-container">
                <div className="container-sm w-50">
                    <h3 className="mt-5 mb-3">Agregar solucion</h3>

                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <label className="form-label">Nombre del error</label>
                            <select 
                                className="form-select"
                                name="problem"
                                value={problem}
                                onChange={handleChange}
                            >
                                <option value="0">-- Opciones --</option>

                                { problems.map( problem => (
                                    <ProblemsName
                                        key={problem._id}
                                        problem={problem}
                                    />
                                ))}

                            </select>
                        </div>

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
                                html={ solution.resolution }
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
                            >Guardar Solucion</button>
                        </div>

                    </form>
                </div>
                
            </div>
            
        </div>
    );
}
 
export default ChooseAdd;