import React from "react";
import "../../styles/home.css";
import CardCharacters from "../component/cardscharacters";
import Carousel from "../component/carousel";

export const Characters = () => {
  return (
    <>
      <div className="container-sm 960">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <img className="img-characters" src="https://i.blogs.es/69fdcc/star-wars-saga/1366_2000.jpg" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex">
          <CardCharacters/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
