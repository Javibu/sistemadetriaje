   var Connection = require('tedious').Connection;  
    var config = {  
        userName: 'Jumjam',  
        password: 'Junior12345',  
        server: 'triajeserversql.database.windows.net',  
        // If you are on Microsoft Azure, you need this:  
        options: {encrypt: true, database: 'triajebdsql'}  
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");  
    });