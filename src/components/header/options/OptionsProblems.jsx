import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ProblemsName from './ProblemsName'
import { deleteProblemAction } from '../../../actions/problemsAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

const OptionsProblem = () => {

    const dispatch = useDispatch()

    const deleteProblem = (id) => dispatch( deleteProblemAction(id) )

    const problems = useSelector( state => state.problems.problems )

    const [ id, setId ] = useState('')

    return (
        <div 
            className="modal fade" 
            id="optionsProblemModal" 
            tabIndex={-1}
            aria-labelledby="optionsProblemModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="optionsProblemModalLabel">Administrar errores</h5>
                    </div>

                    <div className="modal-body">

                        {/* ADD PROBLEM */}
                        <div className="pb-4 d-grid border-bottom">
                            <Link
                                to="/solutions/addproblem"
                                className='text-decoration-none'
                            >
                                <button 
                                    type="button"
                                    className="form-control addbtn hover-add"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    data-bs-target="#optionsProblemModal"
                                >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className="pe-2"
                                    />
                                Agregar</button>
                            </Link>
                        </div>

                        {/* SELECT OF DIFFERENTS CATEGORIES */}
                        <div className="mb-3">
                            <select 
                                className="form-select"
                                name="problem_id"
                                onChange={e => setId(e.target.value)}
                            >
                                <option className='text-center' value="0">-- Error --</option>

                                { problems?.map( problem => (
                                    <ProblemsName
                                        key={problem._id}
                                        problem={problem}
                                    />
                                ))}

                            </select>
                        </div>

                        <div className='d-flex justify-content-evenly'>

                            {/* EDIT BUTTON */}
                            <div className="mb-3 w-25">
                                <Link
                                    to={`/solutions/editproblem/${id}`}
                                    className="text-decoration-none text-white"
                                >
                                    <button 
                                        type="button"
                                        className="form-control editbtn hover-edit text-center"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        data-bs-target="#optionsProblemModal"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPenToSquare}
                                            className="pe-2"
                                        />
                                    Editar</button>
                                </Link>
                            </div>

                            {/* DELETE BUTTON */}
                            <div className="mb-3 w-25">
                                <button 
                                    type="button"
                                    className="form-control deletebtn hover-delete"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    data-bs-target="#optionsProblemModal"
                                    onClick={() => deleteProblem(id)}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrashCan}
                                        className="pe-2"
                                    />    
                                Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OptionsProblem;