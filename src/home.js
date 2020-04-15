const fs = require('fs'); 

let movies=JSON.parse(
	fs.readFileSync('.data/movies.json',{encoding:'utf8',
	})
	);

 const home=
	 {
  peliculas:movies,
  ejecutarHOme:function cargarDetalleHome(){
	  
    const titulo = '\n-Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas,incluso mejor que Netflix, Cuevana y PopCorn.\n'
	
	const totalPeli = '\n\n-Total de películas en cartelera: (' + movies.length + ')';
	
	const listadoPeli='\n\n-Listado de películas :  \n\n'
	const pelis= movies.map(function (movies) {
		return movies.title;
		});
		pelis.sort();
    const pelisSeparadas=pelis.join('\n')
		
	
        const piePagina='\n\n\nRecordá que podés visitar las secciones: \n\n-En Cartelera(/en-cartelera) \n-Más votadas(/mas-votadas)\n-Sucarsales(/Sucursales)\n-Contacto(/Contacto)\n-Preguntas Frecuentes(/Preguntas-Frecuentes)'
		
		console.log(titulo +totalPeli + listadoPeli + pelisSeparadas +piePagina)

        return titulo +totalPeli + listadoPeli + pelisSeparadas +piePagina   
    }

} 
 
    modulo.exports=home;


   