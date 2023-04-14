import React from 'react'

const NewsItems = (props)=> {

        let { title, description, imageUrl, newsUrl, author, newsSource, publishedAt , category , mode} = props
        return (
            <div>
                <div className="card my-3 border border-1.3" >
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: 0,
                        top: "-10px",
                    }}>
                    <span className=" badge rounded-pill bg-danger">
                        {newsSource}
                    </span>
                    </div>
                    <img src={!imageUrl ?"https://images.hindustantimes.com/tech/img/2023/04/12/1600x900/048_1654217194104_1681263287290_1681263287290.jpg" : imageUrl} className="card-img-top" alt={category + " category Image"} />
                    <div className="card-body" style={{backgroundColor : mode==="light"? "white" : "rgb(1 20 40)" , color : mode==="light"? "black" : "white"}}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className={`text-body-${props.mode === "light" ? "secondary":"warning"} text-${props.mode === "light" ? "secondary":"warning"} `}>Published by {author == null ? "Unknown" : author} on {new Date(publishedAt).toUTCString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target='_blank' className={`btn btn-sm ${props.mode==="light" ? "btn-dark" : "btn-outline-success"  }`}>Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItems;
