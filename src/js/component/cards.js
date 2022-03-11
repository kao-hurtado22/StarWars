import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={rigoImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href="" className="btn btn-primary">
            {props.buttonLabel}
          </a>
          <div className="d-grid gap-2 d-flex justify-content-md-end">
            <button
              className="btn btn-outline-warning me-md-2"
              type=""
            ><AiFillHeart /></button>
          </div>
        </div>
      </div>

    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonURL: PropTypes.string,
};

export default Card;


{/* <div className="col-md-12">
  <div className="card d-flex gap-3">
    <img src={rigoImage} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <Link to="/details">
        <a href={props.buttonURL} className="btn btn-primary">
          
        </a>
      </Link>
      <div className="d-grid gap-2 d-flex justify-content-md-end">
        <button
          className="btn btn-outline-warning me-md-2"
          type=""
        ><AiFillHeart /></button>
      </div>
    </div>
  </div>
</div> */}