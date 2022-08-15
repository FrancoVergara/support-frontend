import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import Editable from "../../components/solutions/Editable";
import Tabs from "../../components/solutions/Tabs";
import ProblemNoSolution from "../../components/solutions/ProblemNoSolutions";
import { getProblemAction } from "../../actions/problemsAction";

const ProblemSelected = () => {

    const params = useParams()
    const dispatch = useDispatch()

    const getProblem = id => dispatch( getProblemAction(id) )

    const problem = useSelector( state => state.problems.problem )
    const solutions = useSelector( state => state.solutions.solutions )

    useEffect(() => {
        getProblem(params.id)
    }, [params.id])

    const { _id, name, description } = problem

    if( problem.solutions?.length === 0) return <ProblemNoSolution/>

    return (
        <>
            <div className='row container-fluid m-0 p-0'>
                <div className="bg-secondary mt-4 ps-4 rounded vh-description">
                    <h3 className="pt-3 text-capitalize">{name}</h3>
                    <div className="container-fluid solutiondescription overflow-scroll ps-0 pe-0">
                        <p className="mb-0">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-secondary mt-4 rounded vh-editable">
                <div id="accordionEditable">
                    <div className="d-flex pt-3 w-editable overflow-scroll" >
                        {solutions?.map(cbu => cbu.problem === _id && (
                            <Tabs
                                key={cbu.cbu}
                                name={cbu.cbu}
                                _id={cbu._id}
                            />
                        ))}
                    </div>

                    <div className="d-flex pt-3 w-editable">
                        {solutions?.map(cbu => cbu.problem === _id && (
                            <Editable
                                key={cbu._id}
                                cbuState={cbu}
                            />
                        ))}
                    </div>
                </div>

                <div className="d-flex pt-3">
                    <div
                        className={`d-flex align-items-center justify-content-center transition-none bg-primary h-editable w-editable rounded overflow-scroll position-absolute editable-position`}
                    >
                        <p className='fs-2 fw-bold text-muted mb-0'>Seleccione un cliente</p>
                    </div>
                </div>

                <div className="bg-primary h-editable rounded overflow-scroll position-absolute w-notes notes-position" />
            </div>
        </>
    );
}

export default ProblemSelected