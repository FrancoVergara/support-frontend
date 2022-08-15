import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addNewsAction } from "../../actions/newsAction";

const AddNews = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addNews = (news) => dispatch( addNewsAction(news) )

    const [ news, setNews ] = useState({
        title: '',
        content: ''
    })

    const { title, content } = news

    const handleChange = e => {
        setNews({
            ...news,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Verify if something is missing
        if( title === '' || content === '') return

        // Add news
        addNews(news)

        // Reset state
        setNews({
            title: '',
            content: ''
        })

        // Redirect
        navigate('/')
    }

    return (
        <div className="container-sm w-50">
            <h3 className="mt-5 mb-3">Agregar noticia</h3>

            <form
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea
                        className="form-control"
                        name="content"
                        value={content}
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
                    >Guardar noticia</button>
                </div>

            </form>
        </div>
    );
}
 
export default AddNews;