import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";



export const Dashboard = (props) => {
	return (
		<>
			<div className="container border-0">
				<div className="card mb-3 border-0">
					<div className="row g-0">
						<div className="col-md-4">
							<img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/01/The-Mandalorian-portada-scaled.jpeg?resize=1536%2C864&quality=50&strip=all&ssl=1" className="img-fluid" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{props.title}</h5>
								<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
								<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link to="/">
				<button className="btn btn-primary d-grid gap-2 col-1 mx-auto">
					Back to Home
				</button>
			</Link>
			<div className="card-footer bg-black border-danger text-white text-center">
				<a src="aquivalinks" />aquivalinks
			</div>
		</>
	);
};
