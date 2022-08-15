import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { updateNewsAction } from "../../actions/newsAction"

const EditNews = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const updateNews = news => dispatch( updateNewsAction(news) )

    const news = useSelector( state => state.news.news )

    const [ newsUpdate, setNewsUpdate ] = useState({
        _id: '',
        title: '',
        content: '',
        createdAt: '',
        updatedAt: ''
    })

    useEffect(() => {
        const findNews = (news, id) => {
            news.map( notice => {
                notice._id === id && setNewsUpdate(notice)
            })
        }

        findNews(news, params.id)
    }, [])

    const handleChange = e => {
        setNewsUpdate({
            ...newsUpdate,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Verify if something is missing
        if( newsUpdate.title === '' || newsUpdate.content === '') return

        // Add news
        updateNews(newsUpdate)

        // Reset state
        setNewsUpdate({
            _id: '',
            title: '',
            content: '',
            createdAt: '',
            updatedAt: ''
        })

        // Redirect
        navigate('/')
    }

    return (
        <div className="container-sm w-50">
            <h3 className="mt-5 mb-3">Editar noticia</h3>

            <form
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="title"
                        value={newsUpdate.title}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea
                        className="form-control"
                        name="content"
                        value={newsUpdate.content}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-5 d-flex justify-content-evenly">
                    <Link to="/">
                        <button 
                            type="submit" 
                            className="btn btn-danger text-primary" 
                        >Cancelar</button>
                    </Link>


                    <button 
                        type="submit" 
                        className="btn btn-success text-primary" 
                    >Guardar cambios</button>
                </div>

            </form>
        </div>
    )
}

export default EditNews