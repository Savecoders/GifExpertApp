export const getGifs = async (category) => {
	const urlApi = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=5C317GN26D6GHDEmboOX3nv6oMyvYZpl`;
	const resp = await fetch(urlApi);
	const { data } = await resp.json();
	const gits = data.map((imgGifs) => ({
		id: imgGifs.id,
		title: imgGifs.title,
		url: imgGifs.images?.downsized_medium.url,
	}));
	/* 		console.log(gits);*/
	/* data.forEach(({ url }) => {
			console.log(url);
		}); */
	return gits;
};
