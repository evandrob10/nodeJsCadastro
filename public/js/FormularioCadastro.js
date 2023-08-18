let inputsFormulario =  document.querySelectorAll("#container-formulario input");
let formularioCadastro = document.querySelector("#formulario-cadastro");
let botaoCriarCadastro = document.querySelector("#botao-criar-conta");
let botaoCriarConta = document.querySelector("#botao-criar-conta");
let popupError = document.querySelector("#popup-error");
for(let input of inputsFormulario){
    input.addEventListener("keyup",()=>{
        let name = input.getAttribute("name");
        let dados = input.value;
        if(name !== "senha" && name !== "confirmarSenha") sessionStorage.setItem(name,dados);
    })
}
for(let input of inputsFormulario){
    let name = input.getAttribute("name");
    for(let session in sessionStorage) if(name === session) input.value = sessionStorage[session];
}
botaoCriarCadastro.addEventListener("click",()=>{
    sessionStorage.clear();
})
let validarDados = ()=>{
    let senha;
    let confirmarSenha;
    for(let input of inputsFormulario){
        if(input.value === "" && input.getAttribute("name") !== "confirmarSenha") throw `Você esqueceu de preencher o campo ${input.getAttribute("name")}`; 
        if(input.value === "" && input.getAttribute("name") === "confirmarSenha") throw `Você precisa confirmar a senha!`;
        if(input.getAttribute("id") === "term") if(!input.checked) throw "Você precisa aceitar os Termos e condições!";
        if(input.getAttribute("name") === "confirmarSenha") confirmarSenha = input.value;
        if(input.getAttribute("name") === "senha") senha = input.value;
    } 
    if(confirmarSenha !== senha) throw 'Os campos "Senha" e "Confirma Senha", precisam ser iguais!';
}
let popup = msg =>{
    popupError.style.display = "";
    popupError.querySelector("p").innerText = msg;
    popupError.querySelector("button").addEventListener("click",() => popupError.style.display = "none");
}
botaoCriarConta.addEventListener("click",()=> {
    try{
        validarDados();
        popup("Cadastro realizado com sucesso!");
        popupError.querySelector("button").addEventListener("click",() => formularioCadastro.submit());
        
    }catch(error){
        popup(error);
    }
});

