import { useSelector } from "react-redux";

import News from "./News"
import NoNews from "./NoNews";

const Home = () => {

    const news = useSelector( state => state.news.news )

    return (
        <div className="container-fluid p-4 rounded vh-description-noselected">
            <div className="container transition-none bg-secondary vh-credentials rounded">
                <h3 className="fs-2 fw-bold text-muted pt-5 pb-5 ps-4">Noticias</h3>
                <div className="container bg-primary rounded news-container overflow-scroll">
                    {news.length !== 0 ? (
                        ( news?.map( notice => (
                            <News
                                key={notice._id}
                                notice={notice}
                            />
                        ))))
                    : <NoNews/>}
                </div>
            </div>
        </div>
    )
}

export default Home