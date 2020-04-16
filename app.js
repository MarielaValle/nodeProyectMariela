const http = require('http');
const fs = require('fs');


// Home
let home = require('./src/home')
	
// enCartelera

let enCartelera = require('./src/enCartelera')
	
// mas votadas
let masVotadas= require('./src/masVotadas')

 // sucursales
 let sucursales = require('./src/sucursales')


// contacto

let contacto=require('./src/contacto')

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
			res.end(enCartelera.cartelera());
			break;
		case '/mas-votadas':
			res.end(masVotadas.votadas());
			break;
		case '/sucursales':
			res.end(sucursales.sucursales());
			break;
		case '/contacto':
			res.end(contacto.contacto());
			break;
		case '/preguntas-frecuentes':
			res.end(preguntasF());
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));