const movies = [{
		original_title: "Joker",
		title: "Joker",
		vote_average: 8.6,
		overview: "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.",
		"release_date": "2019-10-04"
	},
	{
		original_title: "Terminator: Dark Fate",
		title: "ATerminator: Destino Oscuro",
		vote_average: 6.8,
		overview: "Sarah Connor une todas sus fuerzas con una mujer cyborg para proteger a una joven de un extremadamente poderoso y nuevo Terminator.",
		"release_date": "2019-11-01"
	},]
	


console.log(movies.length)


	const titulo = '\n - Películas más votadas\n'
	
	const masVotadas = movies.filter(function(movie){
	 return movie.vote_average >= 7
	
	});
	 masVotadas.map(function (movies) {
		return [movies.title,movies.vote_average]  
		 });
	
	
	
	console.log(masVotadas)
	


	let promedioPelis = 0;
    movies.forEach(elemento => {
    promedioPelis += elemento.vote_average});
    let promedio = Math.round(promedioPelis/movies.length);
    let masValoradas = movies.filter(movie => movie.vote_average >= 7);
    let totalPelisRating = masValoradas.length + '\n\n';
    let masValuadas = ' \n';
    for (let pelis of masValoradas) {
    masValuadas += `${pelis.title}\n${pelis.vote_average}\n${pelis.overview}\n\n`;
    }
    res.end(`${tituloMasVotadas}\n\n\n ${totalPeli}\n\n\n${totalPelisRating}\nRating promedio: ${promedio}\n${masValuadas}`);
    break;
	
 
  
