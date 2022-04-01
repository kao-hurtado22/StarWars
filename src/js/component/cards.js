import React from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card d-flex gap-3 animate__animated animate__zoomIn" id="tipos-card">
        <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/01/The-Mandalorian-portada-scaled.jpeg?resize=1536%2C864&quality=50&strip=all&ssl=1" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Link to="/details">
            <a href={props.buttonURL} className="btn btn-outline-primary">
              {props.buttonLabel}
            </a>
          </Link>
          <div className="d-grid gap-2 d-flex justify-content-md-end">
            <button
              className="btn btn-outline-warning me-md-2"
              id="btn-heart"
              type=""
            >
              <AiFillHeart />
            </button>
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
