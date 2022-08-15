import Header from "../components/header/Header";

const Credentials = () => {
    return (
        <div className="row">

            <Header/>

            <div className="container-fluid p-4 rounded vh-description-noselected">
                <div className="d-flex align-items-center justify-content-center transition-none bg-secondary vh-credentials rounded">
                    <p className="fs-2 fw-bold text-muted mb-0">Error 404</p>
                </div>

            </div>
        </div>
    );
}
 
export default Credentials;