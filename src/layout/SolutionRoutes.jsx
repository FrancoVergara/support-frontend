import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import Header from "../components/header/Header"
import Sidebar from "../components/sidebar/Sidebar"
import ChooseAdd from "../components/modals/ChooseAdd";
import { getDataFromLSAction } from "../actions/authActions"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const SolutionRoutes = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getDataFromLS = token => dispatch( getDataFromLSAction(token) )

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!token) {
            navigate('/login')
            return
        }

        getDataFromLS(token)
    }, [])

    return (
        <>
            <div className="row position-relative">

                <Header/>

                <div className="col-xxl-2">
                    <Sidebar />
                </div>

                <div className="col-xxl-10">
                    <Outlet/>
                </div>

                <button 
                    className="position-absolute rounded-circle rounded-btn-size absolute-addbtn hover-absolute-add"
                    data-bs-toggle="modal" 
                    data-bs-target="#chooseAddModal"
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        transform="down-1 left-2"
                        className="fs-3 bg-transparent"
                    />
                </button>

                <ChooseAdd/>
            </div>
        </>
    )
}

export default SolutionRoutes