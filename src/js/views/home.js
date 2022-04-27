import React from "react";
import "../../styles/home.css";
import Carousel from "../component/carousel";

export const Home = () => {
  return (
    <>
      <div className="container-sm 960">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Carousel />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://images.hdqwalls.com/wallpapers/star-wars-a-new-hope-ai.jpg" className="card-home1" alt="..." />
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex">

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
