import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import OptionsNews from './options/OptionsNews';
import OptionsCategories from './options/OptionsCategories';
import OptionsProblems from './options/OptionsProblems';
import { logOutAction } from '../../actions/authActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const UserOptions = () => {

    const dispatch = useDispatch()

    const logOut = () => dispatch( logOutAction() )

    const user = useSelector( state => state.auth.user )

    return (
        <div className='d-flex flex-row-reverse'>
            <div className="btn-group">
                <button 
                    type="button" 
                    className="btn btn-secondary dropdown-toggle text-capitalize" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                >
                    Logged: <span className=' fw-bold'>{user?.name}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">

                    {/* ADMIN CATEGORIES AND PROBLEMS */}
                    { user.role?.role === 'ADMIN' ? (
                        <>
                            <li>
                                <button 
                                    className="dropdown-item text-center" 
                                    type="button"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#OptionsNewsModal"
                                >Noticias</button>
                            </li>

                            <li>
                                <button 
                                    className="dropdown-item text-center" 
                                    type="button"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#optionsCategoryModal"
                                >Categorias</button>
                            </li>

                            <li>
                                <button 
                                    className="dropdown-item text-center" 
                                    type="button"
                                    data-bs-toggle="modal" 
                                    data-bs-target="#optionsProblemModal"
                                >Errores</button>
                            </li>
                        </>
                    ) : null}

                    {/* LOGOUT BUTTON*/}
                    <li>
                        <Link
                            className='text-decoration-none'
                            to="/login"
                        >
                            <button 
                                className="dropdown-item text-center" 
                                type="button"
                                onClick={() => logOut()}
                            >
                                <FontAwesomeIcon
                                    icon={faRightFromBracket}
                                    transform="down-1"
                                    className='me-2'
                                />
                                Log out                
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>

            <OptionsNews/>
            <OptionsCategories/>
            <OptionsProblems/>
        </div>
    );
}
 
export default UserOptions;