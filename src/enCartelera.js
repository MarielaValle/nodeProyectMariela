 const fs = require('fs'); 

let movies=JSON.parse(
	fs.readFileSync('.data/movies.json',{encoding:'utf8',
	})
	);

function cartelera(){
    const titulo = '\n-En Cartelera';
    const totalPelis= '\n\n-Total Películas = '+ movies.length;
    const listadoPelis = '\n\n-Listado de Películas: \n\n'

    const pelis = movies.map(function (movies) {
        return [movies.title,movies.overview]  
         });
    const pelisSeparadas = pelis.join ('\n\n  -');

    return titulo + totalPelis + listadoPelis + pelisSeparadas
    }
    

cartelera()
