import React from "react";
import "../../styles/home.css";
import Card from "../component/cards";

export const Home = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-4 py-3">
						<Card
							title="Card Title"
							description=""
							buttonLabel="Learn More"
							buttonURL=""
						/>
					</div>
				</div>
			</div>
		</>
	);
}