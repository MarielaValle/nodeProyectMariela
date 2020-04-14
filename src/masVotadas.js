const fs = require('fs'); 

let movies=JSON.parse(
	fs.readFileSync('.data/movies.json',{encoding:'utf8',
	})
	);

function votadas(){
	const titulo = '\n - Películas más votadas\n\n'
	
	const pelis = movies.map(function (movies) {
		if(movies.vote_average >=7)	return [movies.title,movies.vote_average]  
			 });
		 pelis.sort();
		 const pelisSeparadas = pelis.join ('\n\n');
		 
	
	return titulo + pelisSeparadas
	}
	   
	
	