import { Link } from "react-router-dom";

const AddSolution = () => {
    return (
        <div 
            className="modal fade" 
            id="chooseAddModal" 
            tabIndex={-1}
            aria-labelledby="chooseAddModalLabel" 
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="chooseAddModalLabel">Crear</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">

                        <div className="mb-3">
                            <Link
                                to="/solutions/addcategory"
                                className="text-decoration-none"
                            >
                                <button 
                                    type="button"
                                    className="form-control"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >Category</button>
                            </Link>
                        </div>

                        <div className="mb-3">
                            <Link
                                to="/solutions/addproblem"
                                className="text-decoration-none"
                            >
                                <button 
                                    type="button"
                                    className="form-control"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >Problem</button>
                            </Link>
                        </div>

                        <div className="mb-3">
                            <Link
                                to="/solutions/addsolution"
                                className="text-decoration-none"
                            >
                                <button 
                                    type="button"
                                    className="form-control"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >Solution</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AddSolution;