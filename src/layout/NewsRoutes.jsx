import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import Header from "../components/header/Header"
import { getDataFromLSAction } from "../actions/authActions"

const NewsRoutes = () => {

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
        <div className="row">
            <Header/>

            <Outlet/>
        </div>
    )
}

export default NewsRoutes