import React from "react";

export default function NewsItem (props){

    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      props;
    return (
      <div className="my-3 ">
        <div className="card hover:shadow-lg transition-shadow duration-300" style={{margin:"20px", height:"5%", transition: "transform 0.3s ease",
            cursor: "pointer"}}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
        <div style={{display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0',
          }}>
        <span className="badge rounded-pill bg-primary">{source}</span>
        </div>
        <div className="ratio ratio-16x9">
          <img
            className="card-img-top hover:"
            src={
              imageUrl
                ? imageUrl
                : "https://img.freepik.com/free-vector/top-headlines-news-themem-background_1017-14199.jpg?w=2000"
            }
            
            alt="..."
            onError={(e) => {
              e.currentTarget.src = "https://img.freepik.com/free-vector/top-headlines-news-themem-background_1017-14199.jpg?w=2000";
            }}
            style={{ objectFit: "cover" }} 
          />
          </div>
          <div className="card-body">
            <h5 className="card-title text-black">{title.length > 30 ? title.slice(0, 30) + '...' : title}</h5>
            <p className="card-text text-black">{description ? (description.length > 60 ? description.slice(0, 60) + '...' : description) : ''}</p>
            <p className="card-text">
            <small className="text-muted">
                By {author
                  ? author.length > 20
                    ? author.slice(0, 20) + "..."
                    : author
                  : "Unknown"} on {new Date(publishedAt).toUTCString()}
            </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}
