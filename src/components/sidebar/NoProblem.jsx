
const NoProblem = ({categoryid}) => {
    return (
        <div 
            id={"collapseSidebar" + categoryid} 
            className="accordion-collapse collapse" 
            aria-labelledby={"headingSidebar" + categoryid} 
            data-bs-parent="#accordionExample"
        >
            <div className="accordion-body pb-0 bg-primary text-muted ps-5">
                <p className="m-0">No existen errores</p>
            </div>
        </div>
    );
}
 
export default NoProblem;