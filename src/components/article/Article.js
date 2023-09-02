import React from "react";
import "./Article.css";

const Article = ({ imgarticle, date, title }) => {
  return (
    <div className="gpt__blog-container_article">
      <div className="gpt__blog-container_container-img">
        <img src={imgarticle} alt="articleImage" />
      </div>
      <div className="gpt__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
