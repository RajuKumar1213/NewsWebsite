import React, { useEffect, useState } from 'react';
import NewsItems from "./NewsItems.jsx";
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    //eslint-disable-next-line
    const [lodding, setLodding] = useState(true);
    const [page, setPage] = useState(1);  
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.changeProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.changeProgress(40)
        let parsedData = await data.json();
        props.changeProgress(70)
        console.log(parsedData)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLodding(false);
        props.changeProgress(100)
    }
    useEffect(() => {
        updateNews();
    // eslint-disable-next-line 
    },[]);

    const captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setPage(page + 1);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLodding(false);
    };

    document.title = ` ${captalize(props.category)} - NewsMonkey `

    return (
        <>
            <h1 className='text-center' style={{ marginTop: "70px" }}>News Monkey - {captalize(props.category)} Top Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItems mode={props.mode} imageUrl={element.urlToImage ? element.urlToImage : "" } title={element.title} description={element.description} newsUrl={element.url} newsSource={element.source.name} author={element.author} publishedAt={element.publishedAt} category={props.category} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 9,
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}

export default News;