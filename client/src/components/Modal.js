import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";

const Modal = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  console.log(articles);

  return (
    <div className="modal">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        dynamicHeight={false}
      >
        <Link to={`/articles/${articles[0]?.id}`}>
          <div>
            <img
              src={`http://localhost:1337${articles[0]?.coverImage?.url}`}
              alt="article"
            />
            <p className="legend">{articles[0]?.articleTitle}</p>
          </div>
        </Link>

        <Link to={`/articles/${articles[1]?.id}`}>
          <div>
            <img
              src={`http://localhost:1337${articles[1]?.coverImage?.url}`}
              alt="article"
            />
            <p className="legend">{articles[1]?.articleTitle}</p>
          </div>
        </Link>
        <Link to={`/articles/${articles[2]?.id}`}>
          <div>
            <img
              src={`http://localhost:1337${articles[2]?.coverImage?.url}`}
              alt="article"
            />
            <p className="legend">{articles[2]?.articleTitle}</p>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};

export default Modal;
