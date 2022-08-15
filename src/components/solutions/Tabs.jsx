

const Tabs = ({ name, _id }) => {

    return (
        <h2
            className="fs-4"
            id={"headingEditable" + _id}
        >
            <button
                id="btntab"
                className={`border-0 bg-primary hover rounded tabs me-1 p-2 pt-2 overflow-points fs-5 text-capitalize`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseEditable" + _id}
                aria-expanded="false"
                aria-controls={"collapseEditable" + _id}
            >
                {name}
            </button>
        </h2>
    )
}

export default Tabs