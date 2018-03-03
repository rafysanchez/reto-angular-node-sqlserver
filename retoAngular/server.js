//Inicializando modulos node
var express = require('express');
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();


app.use(bodyParser.urlencoded({ extended: true }))

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});



app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});



//Initiallising connection string
var dbConfig = {
    user:  "sa",
    password: "Retoangular18",
    server: "localhost",
    database: "angular"
   };

//Function to connect to database and execute query
var  executeQuery = function(respond,query){
     sql.connect(dbConfig, function (err) {
         if (err) {
                     console.log("Error while connecting database :- " + err);
                     res.send(err);
                  }
                  else{
                    // create Request object
                    var request = new sql.Request();
                    // query to the database
                    request.query(query, function (err, res) {
                      if (err) {
                                 console.log("Error while querying database :- " + err);
                                 respond.send(err);
                                }
                                else {
                                  console.log(res);
                                  respond.send(res);
                                 }
                          });

                  }
      });
}





app.get('/cliente', function (req, res) {
  console.log("realizando peticion get");
        var query = "select * from [Cliente]";
                 executeQuery (res, query);
});


//POST API
 app.post("/cliente/create", function(req , res){
                console.log("peticion post!!");

                console.log(req.body);

                var query = "INSERT INTO [Cliente] (Nombre,Apellido,Cedula,fecha_Nacimiento,Usuario) VALUES ('" + req.body.Nombre + "','" + req.body.Apellido + "','" + req.body.Cedula + "','" + req.body.fecha_Nacimiento  +  "','" + req.body.Usuario + "')";
                executeQuery (res, query);

});

app.get('/solicitud', function (req, res) {
  console.log("realizando peticion get");
        var query = "select * from [Solicitud]";
                 executeQuery (res, query);
});

app.post("/solicitud/create", function(req , res){
               console.log("peticion post!!");

               console.log(req.body);

               var query = "INSERT INTO [Solicitud] (id_Usuario,Empresa,nit_Empresa,fecha_ingreso,Salario) VALUES ('" + req.body.id_Usuario + "','" + req.body.Empresa + "','" + req.body.nit_Empresa + "','" + req.body.fecha_ingreso  +  "','" + req.body.Salario + "')";
               executeQuery (res, query);

});
