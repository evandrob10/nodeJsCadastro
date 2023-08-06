const express = require("express");
const router = express.Router();
//Imports
let image = require("../public/js/cadastroImg"); 

console.log(image());

router.get("/",(req,res)=>{
    res.render("usuarios")
})
router.get("/perfil",(req,res)=>{
    res.render("perfil")
})
router.get("/cadastro",(req,res)=>{
    res.render("cadastro", {imagemPerfil: image(), ano: new Date().getFullYear()});
})

module.exports = router;