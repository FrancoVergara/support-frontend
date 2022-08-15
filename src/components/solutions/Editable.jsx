import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { deleteSolutionAction } from "../../actions/solutionsAction"

import ContentEditable from 'react-contenteditable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Editable = ({cbuState}) => {

    const dispatch = useDispatch()

    const deleteSolution = id => dispatch( deleteSolutionAction(id) )

    const { cbu, notes, resolution, _id } = cbuState

    return (
        <>
            <ContentEditable
                html={resolution}
                disabled={false}
                id={"collapseEditable" + _id}
                className="accordion-collapse collapse transition-none bg-primary h-editable w-editable rounded overflow-scroll position-absolute editable-position editable-appear p-4"
                aria-labelledby={"headingEditable" + _id}
                data-bs-parent="#accordionEditable"
            ></ContentEditable>

            <div
                className="accordion-collapse collapse transition-none bg-primary h-editable rounded overflow-scroll position-absolute w-notes notes-position editable-appear"
                id={"collapseEditable" + _id}
                aria-labelledby={"headingEditable" + _id}
                data-bs-parent="#accordionEditable"
            >
                <h3 className="ps-4 pe-4 pt-3 text-capitalize text-break">Notas - {cbu}</h3>
                <p className="p-4 pt-0">{notes}</p>
            </div>


            <Link
                to={`/solutions/editsolution/${_id}`}
                className="accordion-collapse collapse transition-none position-absolute rounded-circle absolute-editbtn rounded-btn-size hover-absolute-edit"
                id={"collapseEditable" + _id}
                aria-labelledby={"headingEditable" + _id}
                data-bs-parent="#accordionEditable"
            >
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    transform="down-4 right-5"
                    className="fs-3 bg-transparent"
                />
            </Link>

            <button 
                className="accordion-collapse collapse transition-none position-absolute rounded-circle absolute-deletebtn rounded-btn-size hover-absolute-delete"
                id={"collapseEditable" + _id}
                aria-labelledby={"headingEditable" + _id} 
                data-bs-parent="#accordionEditable"
                onClick={() => deleteSolution(_id)}
            >
                <FontAwesomeIcon
                    icon={faTrashCan}
                    transform="down-1"
                    className="fs-3 bg-transparent"
                />
            </button>
        </>
    );
}

export default Editable