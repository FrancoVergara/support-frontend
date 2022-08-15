import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesName from './CategoriesName'
import { deleteCategoryAction } from '../../../actions/categoriesAction'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

const OptionsCategories = () => {

    const dispatch = useDispatch()

    const deleteCategory = id => dispatch( deleteCategoryAction(id) )

    const categories = useSelector( state => state.categories.categories )

    const [ id, setId ] = useState('')

    return (
        <div 
            className="modal fade" 
            id="optionsCategoryModal" 
            tabIndex={-1}
            aria-labelledby="optionsCategoryModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="optionsCategoryModalLabel">Administrar categorias</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" data-bs-target="#optionsCategoryModal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">

                        {/* ADD CATEGORY */}
                        <div className="pb-4 d-grid border-bottom">
                            <Link
                                to="/solutions/addcategory"
                                className='text-decoration-none'
                            >
                                <button 
                                    type="button"
                                    className="form-control addbtn hover-add"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    data-bs-target="#optionsCategoryModal"
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
                                <option className='text-center' value="0">-- Categoria --</option>

                                { categories?.map( category => (
                                    <CategoriesName
                                        key={category._id}
                                        category={category}
                                    />
                                ))}

                            </select>
                        </div>

                        <div className='d-flex justify-content-evenly'>

                            {/* EDIT BUTTON */}
                            <div className="mb-3 w-25">
                                <Link
                                    to={`/solutions/editcategory/${id}`}
                                    className="text-decoration-none"
                                >
                                    <div 
                                        className="form-control editbtn hover-edit text-center"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        data-bs-target="#optionsCategoryModal"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPenToSquare}
                                            className="pe-2"
                                        />
                                    Editar</div>
                                </Link>
                            </div>

                            {/* DELETE BUTTON */}
                            <div className="mb-3 w-25">
                                <button 
                                    type="button"
                                    className="form-control deletebtn hover-delete"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    data-bs-target="#optionsCategoryModal"
                                    onClick={() => deleteCategory(id)}
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
 
export default OptionsCategories;