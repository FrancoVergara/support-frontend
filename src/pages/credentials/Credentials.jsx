
const Credentials = () => {

    const url = "https://q4techargentina.sharepoint.com/sites/DocumentosCompartidos/Documents/Forms/AllItems.aspx?slrid=2d1f959e%2D6043%2D7000%2Dcdf2%2D904d099005ce&FolderCTID=0x0120002A0E533F8734EE42A2113321E0992DA1&viewid=b06bf575%2Ded7d%2D47a0%2D91e4%2Ddb08a1b2eb8e&id=%2Fsites%2FDocumentosCompartidos%2FDocuments%2FQ4Tech%2FSFA%2FProduction%20Team%2FConexiones"

    return (
        <div className="container-fluid p-4 rounded vh-description-noselected">
            <div className="d-flex align-items-center justify-content-center transition-none bg-secondary vh-credentials rounded">
                <a
                    className="fs-2 fw-bold text-muted mb-0"
                    href={url}
                    target="_blank" 
                    rel="noopener noreferrer"
                >Credenciales</a>
            </div>

        </div>
    );
}
 
export default Credentials;