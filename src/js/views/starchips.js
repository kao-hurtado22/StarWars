import React from "react";
import "../../styles/home.css";
import CardStarchips from "../component/cardsstarchips";
import Carousel from "../component/carousel";

export const Starchips = () => {
  return (
    <>
      <div className="container-sm 960">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
			<img className="img-starchips" src="https://www.latercera.com/resizer/4_T3EN5BDsfe3ikVFiLAdIdGjPg=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/M7WCDZQ2FRAORITF5MA6XO3PWM.jpg" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex">
          <CardStarchips/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Starchips;
