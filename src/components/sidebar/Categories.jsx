import { useSelector } from "react-redux"

import Problems from "./Problems";
import NoProblem from "./NoProblem";

const Categories = ({category}) => {

    const { _id, name } = category

    // TODO Ver como actualizar el array de problemas en el state reducer de categoria cuando se elimina uno
    const problems = useSelector( state => state.problems.problems )

    return (
        <div className="accordion-item border-0">
            <h2 
                className="accordion-header"
                id={"headingSidebar" + _id}
            >
                <button 
                    className="accordion-button collapsed text-capitalize hover pb-1 bg-primary" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#collapseSidebar" + _id}
                    aria-expanded="false"
                    aria-controls={"collapseSidebar" + _id}
                >
                    {name}
                </button>
            </h2>

            { category.problems.length === 0 ? (
                <NoProblem
                    key={_id}
                    categoryid={_id}
                />
            ) : (
                problems?.map( problem => problem.category === _id && (
                    <Problems
                        key={problem._id}
                        problem={problem}
                        categoryid={_id}
                    />
                ))
            )}

        </div>
    );
}
 
export default Categories;