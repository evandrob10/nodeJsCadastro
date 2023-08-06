const express = require("express");
const App = express();
//Rotas:
const routes = require("./Routes/perfil");

//Config Express-Handlebars
    const handlebars = require('express-handlebars');
    App.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
    App.set('view engine','handlebars');
    App.set('views','./views');
//Archives static
    const path = require("path");
    App.use(express.static(path.join(__dirname,"public")));
//Routes:
    App.use("" , routes);

App.listen("8081",()=>{
    console.log(`Servidor iniciado! \nData: ${new Date()} \nurl: http://127.0.0.1:8081`);
})