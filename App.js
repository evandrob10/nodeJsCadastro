const express = require("express");
const App = express();
//Rotas:
const routes = require("./Routes/appRoutes");

//Config Express-Handlebars
    const handlebars = require('express-handlebars');
    App.engine('handlebars',handlebars.engine({defaultLayout: 'main'}));
    App.set('view engine','handlebars');
    App.set('views','./views');
//Archives static
    const path = require("path");
    App.use(express.static(path.join(__dirname,"public")));
//Body-Parser:
    const bodyParser = require("body-parser");
    App.use(bodyParser.urlencoded({extended: false}));
    App.use(bodyParser.json());
//Routes:
    App.use("" , routes);
//Imagem perfil
    App.use('/files', express.static('uploads'));
App.listen(process.env.SERVER_PORT,()=>{
    console.log(`Servidor iniciado! \nData: ${new Date()} \nurl: http://127.0.0.1:${process.env.SERVER_PORT}`);
})