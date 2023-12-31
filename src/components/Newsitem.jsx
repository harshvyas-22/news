import React from 'react';
import image from '../components/download (1).jpg';

const Newsitem = ({ title, description, src, url,publishedAt }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-2" style={{ width: "345px" }}>
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body" style={{ padding: "1rem" }}>
        <h5 className="card-title">{title && title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News is loading....."}</p>
        <p className="card-text">Published At: {new Date(publishedAt).toLocaleString()}</p>
        
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default Newsitem;
