const pool = require('./index'); 

pool.connect()
    .then(() => {
        console.log("connection successful");
        pool.end(); 
    })
    .catch(err => {
        console.error(" Connection fail:", err.message);
    });
