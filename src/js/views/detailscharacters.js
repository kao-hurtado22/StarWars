import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from '../../img/logostarwars.png'

export const DetailsCharacters = props => {
	const { store } = useContext(Context);
	return (
		<>
			{
				store.characters !== null &&
				store.characters.results.length > 1 &&
				store.characters.results.map((result, index) => {
					return (
						<div className="container border-0">
							<div className="card mb-3 border-0">
								<div className="row g-0">
									<div className="col-md-4">
										<img src={logo} className="img-fluid" alt="..." />
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{store.characters.name}</h5>
											<ul>
												<li className="card-text col-md-8">Height: {store.characters.height}</li>
												<li className="card-text col-md-8">Mass: {store.characters.mass}</li>
												<li className="card-text col-md-8">Hair_color: {store.characters.hair_color}</li>
												<li className="card-text col-md-8">Skin_color: {store.characters.skin_color}</li>
												<li className="card-text col-md-8">Eye_color: {store.characters.eye_color}</li>
												<li className="card-text col-md-8">Birth_year: {store.characters.birth_year}</li>
												<li className="card-text col-md-8">Gender: {store.characters.gender}</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
			<Link to="/">
				<button className="btn btn-primary d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
		</>
	);
};
