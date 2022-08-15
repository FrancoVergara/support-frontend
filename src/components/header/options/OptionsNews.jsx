import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import NewsName from './NewsName'
import { deleteNewsAction } from '../../../actions/newsAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons'

const OptionsNews = () => {

    const dispatch = useDispatch()

    const deleteNews = (id, token) => dispatch( deleteNewsAction(id, token) )

    const news = useSelector( state => state.news.news )

    const [ id, setId ] = useState('')

    return (
        <div 
            className="modal fade" 
            id="OptionsNewsModal" 
            tabIndex={-1}
            aria-labelledby="OptionsNewsModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="OptionsNewsModalLabel">Administrar noticias</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" data-bs-target="#OptionsNewsModal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">

                        <div className="pb-4 d-grid border-bottom">
                            <Link
                                to="addnews"
                                className='text-decoration-none'
                            >
                                <button 
                                    type="button"
                                    className="form-control addbtn hover-add"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    data-bs-target="#OptionsNewsModal"
                                >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className="pe-2"
                                    />
                                Agregar</button>
                            </Link>
                        </div>

                        <div className="mb-3 pt-4">
                            <select 
                                className="form-select"
                                onChange={e => setId(e.target.value)}
                            >
                                <option className='text-center' value="0">-- Noticia --</option>

                                { news?.map( notice => (
                                    <NewsName
                                        key={notice._id}
                                        notice={notice}
                                    />
                                ))}

                            </select>
                        </div>

                        <div className='d-flex justify-content-evenly'>

                            {/* EDIT BUTTON */}
                            <div className="mb-3 w-25">
                                <Link
                                    to={`/${id}`}
                                    className="text-decoration-none text-white"
                                >
                                    <div 
                                        className="form-control editbtn hover-edit text-center"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        data-bs-target="#OptionsNewsModal"
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
                                    data-bs-target="#OptionsNewsModal"
                                    onClick={() => deleteNews(id)}
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
 
export default OptionsNews;