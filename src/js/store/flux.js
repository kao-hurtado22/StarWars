const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// apiUrl: 'https://www.swapi.tech/api',
			apiUrl: 'https://swapi.dev/api',
			characters: {},
			planets: {},
			starships: {},
			// charactersDetails: {},
			// planetsDetails: {},
			// starshipsDetails: {},
			favorites: []
		},
		actions: {
			loadDataFromCharacters: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/people`)
					.then((response) => response.json())
					.then((data) => {
						console.log("DATA CHARACTERS", data)
						setStore({
							characters: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromPlanets: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/planets`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA PLANETS", data)
						setStore({
							planets: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromStarships: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/starships`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA STARSHIPS", data)
						setStore({
							starships: data
						})
					})
					.catch(error => console.log("error", error));
			},
			addFavorite: newFavorite => {
                const store = getStore();
                console.log(newFavorite);
                const onlyOne = store.favorites.some(item => item === newFavorite)
                if (onlyOne === true) {
                    return
                } else { 
                setStore( store.favorites.push(newFavorite) )
                }
            },
            removeFavorite: index => {
                const { favorites } = getStore();
                favorites.splice(index,1) 
                setStore(...favorites)
            },
            
			// loadDataDetailsCharacters: (id) => {
			// 	const { apiUrl } = getStore()
			// 	fetch(`${apiUrl}/people/${id}`)
			// 		.then((response) => response.json())
			// 		.then((data) => {
			// 			// console.log("DATA DETAILS CHARACTER", data)
			// 			setStore({
			// 				charactersDetails: data
			// 			})
			// 		})
			// 		.catch(error => console.log("error", error));
			// },
			// loadDataDetailsPlanets: (id) => {
			// 	const { apiUrl } = getStore()
			// 	fetch(`${apiUrl}/planets/${id}`)
			// 		.then((response) => response.json())
			// 		.then((data) => {
			// 			// console.log("DATA DETAILS PLANET", data)
			// 			setStore({
			// 				planetsDetails: data
			// 			})
			// 		})
			// 		.catch(error => console.log("error", error));
			// },loadDataDetailsStarchips: (id) => {
			// 	const { apiUrl } = getStore()
			// 	fetch(`${apiUrl}/starships/${id}`)
			// 		.then((response) => response.json())
			// 		.then((data) => {
			// 			// console.log("DATA DETAILS STARSHIP", data)
			// 			setStore({
			// 				starshipsDetails: data
			// 			})
			// 		})
			// 		.catch(error => console.log("error", error));
			// },
		}
	};
}

export default getState;
