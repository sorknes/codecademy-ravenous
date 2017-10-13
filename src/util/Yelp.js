/* path to file: ./util
*
*  description: 
*  ------------------------------------------------------------------------------------
*/

const clientId = 'T_pURbSkFqbxRO9xq99YxA';
const secret = 'UE6brfLRH2omQHwQQzkksmBaswMpqdXKnFJx4aUArufagdqIshkCfx4iiub0zO7x';

// On the next line, create a variable called accessToken
let accessToken;

// Create an empty object called Yelp.
export const Yelp = {
	getAccessToken() {
		if (accessToken) {
			return new Promise(resolve => resolve(accessToken));
		}

		// Prepend the URL path you passed to the first argument in fetch()
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
		{
			method: 'POST'}).then(response => {
			return response.json();
		}).then(jsonResponse => accessToken = jsonResponse.access_token);
	},

	search(term, location, sortBy) {
		return new Promise();

		// eslint-disable-next-line
		Yelp.getAccessToken().then(() => {
			return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			}).then(jsonResponse => accessToken = jsonResponse.access_token).then(jsonResponse => {
				if(jsonResponse.businesses) {
					return jsonResponse.businesses.map(business => ({
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.address,
						city: business.city,
						state: business.state,
						zipCode: business.zipCode,
						category: business.category,
						rating: business.rating,
						reviewCount: business.reviewCount
					}));
				}
			});
		});
	}
}