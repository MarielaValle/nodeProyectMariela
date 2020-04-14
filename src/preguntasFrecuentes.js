const fs = require('fs'); 

let faqs=JSON.parse(
	fs.readFileSync('.data/faqs.json',{encoding:'utf8',
	})
	);

function preguntasF (){
    const titulo = '\n Preguntas Frecuentes';

    const totalPreguntas = '\n\n-Total de preguntas: '+faqs.length+'\n\n' ;
    
    const listadoPreguntas = faqs.map(function(faqs){

     return [faqs.faq_title,faqs.faq_answer]
    });

    const faqsSeparadas = listadoPreguntas.join('\n\n');
   
	console.log(titulo + totalPreguntas + faqsSeparadas)
    return titulo + totalPreguntas + faqsSeparadas

}