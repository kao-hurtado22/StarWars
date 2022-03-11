const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: 'https://www.swapi.tech/api/',
			photos: null,
			name: null, 
			lastname: null,
			specie: null,
			homeworld: null,
			gender: null,
		},
		actions: {
		
			loadDataFromCharacters: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/people`)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							characters: data
						})
					})
			},
			loadDataFromPlanets: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/planets`)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							planets: data
						})
					})
			},
			loadDataFromStarships: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/starships`)
					.then((response) => response.json())
					.then((data) => {
						setStore({
							starships: data
						})
					})
			},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		}
	}
};
};

export default getState;
