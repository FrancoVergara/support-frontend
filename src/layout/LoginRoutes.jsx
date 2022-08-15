import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Logo from "../components/header/Logo"

const LoginRoutes = () => {

    const navigate = useNavigate()

    const user = useSelector( state => state.auth.user )

    // Check if some user are logged
    useEffect(() => {
        const token = localStorage.getItem("token")

        if(token) {
            navigate("/")
        }
    }, [user])

    return (
        <div className="container w-25 vh-100 d-flex align-items-center">
            <div className="p-5 w-100 rounded shadow-lg">
                <div className="row mb-4">
                    <Logo
                        font={'fs-1'}
                        center={true}
                    />
                </div>

                <Outlet/>
            </div>
        </div>
    )
}

export default LoginRoutes