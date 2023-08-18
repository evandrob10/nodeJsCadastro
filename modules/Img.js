const express = require("express");
const App = express();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const nodesessionstorage = require("node-sessionstorage")

let extensaoImg = mimetype => mimetype.split("/")[1];

let urlImg = null;

const storage = () => {
    return multer.diskStorage({
        destination: (req, file , callBack)=>{
            if(!fs.existsSync("./uploads/fotoPerfil")){
                fs.mkdirSync("./uploads/fotoPerfil");
            }
            callBack(null,path.resolve('uploads/fotoPerfil'))
        },
        filename: (req,file,callBack)=>{
            urlImg = new Date().getTime() +  "." + extensaoImg(file.mimetype);          
            callBack(null, urlImg);
        }
    })
}

const upload = multer({ storage:storage()});

let img = (padrao) => {
    if(urlImg) return "fotoPerfil/" + urlImg;
    if(padrao) return "avatar.png";
    return "avatar.png";  
}
module.exports = {
    img:img,
    upload: upload
}