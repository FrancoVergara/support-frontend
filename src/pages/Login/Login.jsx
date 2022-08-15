import { useState } from "react";
import { useDispatch } from 'react-redux'

import { authUserAction } from "../../actions/authActions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

const Login = () => {

    const dispatch = useDispatch()

    const authUser = credentials => dispatch( authUserAction(credentials) )

    const [ credentials, setCredentials ] = useState({
        name: '',
        password: ''
    })

    const { name, password } = credentials

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Check if some field is empty
        if([ name, password ].includes('')) return

        // Call action to auth user
        authUser(credentials)
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="Usuario"
                    name="name"
                    onChange={handleChange}
                />
                <label htmlFor="floatingInput">
                    <FontAwesomeIcon
                        icon={faUser}
                        className={`ms-2 me-2 align-self-center`}
                    />
                    Usuario
                </label>
            </div>
            
            <div className="form-floating mb-3">
                <input 
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                />
                <label htmlFor="floatingPassword">
                    <FontAwesomeIcon
                        icon={faLock}
                        className={`ms-2 me-2 align-self-center`}
                    />
                    Password
                </label>
            </div>

            <div className="d-grid">
                <button
                    className="btn btn-block btn-info text-primary"
                    type="submit"
                >Login</button>
            </div>
        </form>
    );
}
 
export default Login;