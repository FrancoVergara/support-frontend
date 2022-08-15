import { useNavigate } from "react-router-dom";

const SearchBarItem = ({problem, search, saveSearch}) => {

    const navigate = useNavigate()

    const handleClick = (id) => {
        navigate(`/solutions/${id}`)
        saveSearch('')
    }

    if(search === '') return

    if(problem.name.toLowerCase().includes(search.toLowerCase()) || problem.description.toLowerCase().includes(search.toLowerCase())) {
        return (
            <button 
                className="bg-transparent border-0 text-capitalize h-25 hover-a w-100"
                onClick={() => handleClick(problem._id)}
                onBlur={() => saveSearch('')}
            >
                <p id="search-title" className="ms-3 me-3 mb-0 p-2 pb-0 border-top border-primary fw-bold overflow-points text-start">{problem.name}</p>
                <p className="ms-3 me-3 mb-0 p-2 pt-0 fs-6 overflow-points text-start">{problem.description}</p>
            </button>
        )
    } else {
        return
    }
}
 
export default SearchBarItem;