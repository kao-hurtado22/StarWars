import React from "react";
import "../../styles/home.css";
import "../../styles/index.css";
import Card from "../component/cards";


export const Home = () => {
	return (
		<>
			<div className="container" id="container-tipos">
				<div className="row" id="tipos">
					<div className="col-md-4 py-5">
						<Card
							title="THE MANDALORIAN"
							description="The Mandalorian, known to a few as Din Djarin, is a battle-worn bounty hunter, making his way through a dangerous galaxy in an uncertain age."
							buttonLabel="Learn More"
							buttonURL=""
						/>
					</div>
					<div className="col-md-4 py-5">
						<Card
							title="R2-D2"
							description="A reliable and versatile astromech droid, R2-D2 has served Padmé Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing great bravery in rescuing his masters and their friends from many perils. A skilled starship mechanic and fighter pilot's assistant, he has an unlikely but enduring friendship with the fussy protocol droid C-3PO."
							buttonLabel="Learn More"
							buttonURL=""
						/>
					</div>
					<div className="col-md-4 py-5">
						<Card
							title="THE MANDALORIAN"
							description="The Mandalorian, known to a few as Din Djarin, is a battle-worn bounty hunter, making his way through a dangerous galaxy in an uncertain age."
							buttonLabel="Learn More"
							buttonURL=""
						/>
					</div>
				</div>
			</div>
		</>
	);
}