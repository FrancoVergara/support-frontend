import { NavLink } from "react-router-dom"

const Errors = ({problem, categoryid}) => {

    const { _id, name } = problem

    let activeClass = 'text-info'

    return (
        <div 
            id={"collapseSidebar" + categoryid} 
            className="accordion-collapse collapse" 
            aria-labelledby={"headingSidebar" + categoryid} 
            data-bs-parent="#accordionExample"
        >
            <div className="accordion-body pb-0 bg-primary text-dark">
                <button 
                    className="ps-5 bg-transparent border-0 w-100 text-start overflow-points "
                >
                    <NavLink
                        to={`${_id}`}
                        className="mb-0 text-capitalize text-start text-decoration-none text-dark"
                    >
                        {({ isActive }) => (
                            <span
                                className={ `hover ${ isActive && activeClass }` }
                            >{name}</span>
                        )}
                    </NavLink>
                </button>  
            </div>
        </div>
    );
}
 
export default Errors;