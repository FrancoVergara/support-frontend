const CategoriesName = ({category}) => {
    return (
        <option
            className="text-capitalize text-center"
            value={category._id}
        >{category.name}</option>
    );
}
 
export default CategoriesName;