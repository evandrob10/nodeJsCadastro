const express = require("express");
const router = express.Router();
let validForm = require("../modules/ValidaDados"); 
//Imports
let Img = require("../modules/Img");
//DB
let db = require("../DB/db");

let figura = "avatar.png";

router.get("/",(req,res)=>{
    res.render("usuarios",{title:"Home"})
})
router.get("/perfil",(req,res)=>{
    res.render("perfil")
})
router.get("/cadastro",(req,res)=>{
    res.render("cadastro", {title: "Cadastro usuarios",port:process.env.SERVER_PORT,avatar: figura, ano: new Date().getFullYear()});
})
router.post("/add-user", (req,res)=> {
    try{
        let dadosForm = req.body;
        validForm(dadosForm);
        dadosForm.img = figura.split("/")[1];
        db.insert(dadosForm);
        figura = "avatar.png";
        res.redirect("/");
    }catch(error){
        res.render("./components/redirect400",{error:error});
    }
})
router.post("/upload-img", Img.upload.single('img-perfil'),(req,res)=>{
    figura = Img.img();
    res.redirect("/cadastro");
})


module.exports = router;