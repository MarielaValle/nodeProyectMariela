const fs = require('fs'); 

let movies=JSON.parse(
    fs.readFileSync('./data/movies.json',{encoding:'utf8'
    })
	);
    console.log(movies)
    
