const NewsName = ({notice}) => {
    return (
        <option
            className="text-capitalize text-center"
            value={notice._id}
        >{notice.title}</option>
    );
}
 
export default NewsName;