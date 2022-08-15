import { useEffect } from "react"
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"

import Logo from './Logo';
import UserOptions from './UserOptions';
import Navbar from './Navbar';
import { getCategoriesAction } from '../../actions/categoriesAction';
import { getProblemsAction } from '../../actions/problemsAction';
import { getSolutionsAction } from '../../actions/solutionsAction';
import { getNewsAction } from "../../actions/newsAction"

const Header = () => {

    const dispatch = useDispatch()

    const getCategories = token => dispatch( getCategoriesAction(token) )
    const getProblems = token => dispatch( getProblemsAction(token) )
    const getSolutions = token => dispatch( getSolutionsAction(token) )
    const getNews = token => dispatch( getNewsAction(token) )

    useEffect(() => {
        const token = localStorage.getItem('token')

        getCategories(token)
        getProblems(token)
        getSolutions(token)
        getNews(token)
    }, [])

    return (
        <div className="container-fluid shadow">
            <div className='row align-items-center p-3'>
                <div className='col-3'>
                    <Link 
                        to="/"
                        className='text-dark text-decoration-none'
                    >
                        <Logo/>
                    </Link>
                </div>

                <div className='col-6 text-center'>
                    <Navbar/>
                </div>

                <div className='col-3'>
                    <UserOptions/>
                </div>
            </div>
        </div>
    );
}
 
export default Header;