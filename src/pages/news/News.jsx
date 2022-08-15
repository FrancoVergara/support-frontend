import { formatDate } from "../../helpers"

const News = ({notice}) => {

    const { title, content, createdAt } = notice

    return (
        <div className="pt-4 pb-3 ps-2 news">
            <div className="d-flex">
                <h4 className="text-capitalize mb-0">{title}</h4>
                <span className="text-muted ps-2 align-self-end"> - {formatDate(createdAt)}</span>
            </div>
            <p>{content}</p>
        </div>
    );
}
 
export default News;