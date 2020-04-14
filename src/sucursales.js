const fs = require('fs'); 

const theaters=JSON.parse(
	fs.readFileSync('.data/theaters.json',{encoding:'utf8',
	})
	);

function sucursales(){

    const titulo = '\n Nuestras Salas'

    const totalSalas='\n\n Total Salas: ' +theaters.length +' \n \n';

    const listadoDeSalas = theaters.map(function(theaters){ 

        return [theaters.name,theaters.address,theaters.description]
      });

      listadoDeSalas.sort();
      const listadoDeSalasOrdenado=listadoDeSalas.join('\n')
    
	  console.log(listadoDeSalasOrdenado)

     return titulo + totalSalas +listadoDeSalasOrdenado
}

