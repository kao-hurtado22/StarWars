import React, { useContext } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardPlanets = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="col d-grid gap-5">
        <div className="row">
          {
            store.planets.results !== undefined ?
              (store.planets.results.map((result, index) => {
                return (
                  <div className="card animate__animated animate__zoomIn" key={index}>
                    <img src="https://wallpaperaccess.com/full/640759.jpg" className="card-img-top-2" alt="..." />
                    <div className="card-body">
                      <h1 className="card-title">{result.name}</h1>
                      <p className="card-title"><strong>Terrain:</strong> {result.terrain}</p>
                      <p className="card-title"><strong>Population:</strong> {result.population}</p>
                      <p className="card-title"><strong>Climate:</strong> {result.climate}</p>
                      <Link to={`/detailsplanets/${result.name}`} className="btn btn-outline-primary" onClick={() => actions.loadDataFromCharacters(result.url)} >
                        Read More
                      </Link>
                      <div className="d-grid gap-2 d-flex justify-content-md-end">
                        <button
                          className="btn btn-outline-warning me-md-2"
                          type=""
                        ><AiFillHeart onClick={() => { actions.addFavorite(result.name) }} /></button>
                      </div>
                    </div>
                  </div>
                )
              })) : (null)
          }
        </div>
      </div>
    </>
  );
};

export default CardPlanets;
