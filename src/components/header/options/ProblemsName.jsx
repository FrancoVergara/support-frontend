const ProblemsName = ({problem}) => {
    return (
        <option
            className="text-capitalize"
            value={problem._id}
        >{problem.name}</option>
    );
}
 
export default ProblemsName;