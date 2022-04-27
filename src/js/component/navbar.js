import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaTrashAlt } from 'react-icons/fa';
import logo from '../../img/logostarwars.png'


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (

    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-black">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img  className="img-logo" src={logo} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/characters" className="nav-link text-white"><b>| Characters </b></Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link text-white"><b>| Planets </b></Link>
            </li>
            <li className="nav-item">
              <Link to="/starchips" className="nav-link text-white"><b>| Starships </b></Link>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"
              >
                {
                  store.favorites !== undefined ?
                    (
                      store.favorites.map((item, index) => {
                        return (
                          <li key={index}>
                            {item} <FaTrashAlt onClick={() => actions.removeFavorite(index)}></FaTrashAlt>
                          </li>
                        )
                      })
                    )
                    :
                    (
                      <h1>Loading</h1>
                    )
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
