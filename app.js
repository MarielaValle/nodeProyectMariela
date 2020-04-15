const http = require('http');
const fs = require('fs');





const theaters = [
	{
		name: "DH Multiplex - Brisas del Volador",
		address: "Brisas del Volador Shopping – Panamericana Km 50 – Las Magnolias 754 Pilar",
		description: "El complejo Multiplex Palmas del Pilar cuenta con un amplio y cómodo estacionamiento sin cargo, seguridad privada, venta on line, terminales autoservicio y venta en boletería. Multiplex Palmas del Pilar es el complejo más moderno de la empresa.Está dotado de proyectores, pantallas y sonido de última generación.Una propuesta de 9 salas 2 D, 3 D, 3 D Xtremo, 4 D y Sala Premium Platinum diseñadas especialmente para un público exigente y amante del buen cine.",
		total_rooms: 5
	},
	{
		name: "DH Lavalle",
		address: "Lavalle 780 C.A.B.A",
		description: "Cines Multiplex lleva adelante la operación de este complejo que es el único que permanece en la peatonal Lavalle donde supieron funcionar, en las épocas de gloria, más de 28 salas de cine.",
		total_rooms: 3
	},
	{
		name: "DH Multiplex - Canning",
		address: "Formosa 653 Canning, Ezeiza (Shopping Las Toscas)",
		description: "Este complejo de 6 salas se complementa excelentemente bien con los locales comerciales y especialmente gastronómicos del Shopping Las Toscas, dentro del cual se encuentra funcionando, brindando al espectador la posibilidad de disfrutar de una salida completa dentro del mismo ámbito.",
		total_rooms: 6
	},
	{
		name: "DH Arte Multiplex",
		address: "Av. Cabildo 2829 C.A.B.A",
		description: "En Cine Arte Multiplex pueden disfrutarse todas las películas de los Oscars, los mejores ciclos de cine Francés , Ruso, Alemán, entre otros,  las buenas películas que en cartelera de los circuitos tradicionales  a veces no encuentran espacio  tienen su lugar   en  las salas de este complejo.",
		total_rooms: 2
	}
];

// Home
let home = require('./home')
	
// enCartelera

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
	
// mas votadas
function votadas(){
	const titulo = '\n - Películas más votadas\n\n'
	
	const pelis = movies.map(function (movies) {
		if(movies.vote_average >=7)	return [movies.title,movies.vote_average]  
			 });
		 pelis.sort();
		 const pelisSeparadas = pelis.join ('\n\n');
		 
	
	return titulo + pelisSeparadas
	}

 // sucursales
 function sucursales(){

    const titulo = '\n Nuestras Salas'

    const totalSalas='\n\n Total Salas: ' +theaters.length +' \n \n';

    const listadoDeSalas = theaters.map(function(theaters){ 

      return [theaters.name,theaters.address,theaters.description]
    });
    listadoDeSalas.sort();
    const listadoDeSalasOrdenado=listadoDeSalas.join('\n\n')

     return titulo + totalSalas +listadoDeSalasOrdenado
}


// contacto

function contacto (){
    const titulo = '\nContáctanos';

    const contenido= '\n\n ¿Tenés algo para contarnos?. Nos encanta escuchar a nuestros clientes.\n\n  Si deseas contactarnos podés escribirnos al siguiente email:\n\n  - dhmovies@digitalhouse.com o en las redes sociales \n\nEnvíanos tu consulta, sugerencia  o reclamo y será respondida a la brevedad posible.\nRecordá que también podés consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.'


    return titulo + contenido
}

// preguntas frecuentes

function preguntasF (){
    const titulo = '\n Preguntas Frecuentes';

	const totalPreguntas = '\n\n-Total de preguntas: '+faqs.length +'\n\n ';
	
	//'\n\n+faqs.length+\n\n';

    const listadoPreguntas = faqs.map(function(faqs){

		return [faqs.faq_title,faqs.faq_answer]
    });

    const faqsSeparadas = listadoPreguntas.join('\n\n');

    return titulo + totalPreguntas + faqsSeparadas

}







// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home 
	case '/':
			res.end(home.cargarDetalleHome());
			break;
		// En cartelera
		case '/en-cartelera':
			res.end(cartelera());
			break;
		case '/mas-votadas':
			res.end(votadas());
			break;
		case '/sucursales':
			res.end(sucursales());
			break;
		case '/contacto':
			res.end(contacto());
			break;
		case '/preguntas-frecuentes':
			res.end(preguntasF());
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));