let consultCep = document.querySelector("#container-consultCep");
let option = document.querySelector("#consultCep table select option");
let inputs = document.querySelectorAll("#consultCep table input");
let enderecoInputPrincipal = document.querySelector("#container-formulario #endereco");
let button = consultCep.querySelector("button");
let consultCepInput = consultCep.querySelector("div input");
let inputEndereco = document.querySelector("#endereco");
inputEndereco.addEventListener("click",()=>{
    consultCep.style.display = "";
    inputEndereco.setAttribute("readonly","");
    consultCepInput.focus();
    visible = true;
})
let inserirDadosForm = () =>{
    for(let input of inputs) if(input.value === "" && input.getAttribute("id") !== "complemento") return input.getAttribute("id");
    enderecoInputPrincipal.value = `${inputs[0].value} , N°${inputs[2].value}, ${inputs[1].value} - ${inputs[3].value} - ${option.value} - ${dados["code"]}`;
}
document.addEventListener("click", element =>{
    if(element.target.getAttribute("id") === "container-consultCep") {
        consultCep.style.display = "none";
        inserirDadosForm(true);
    };
})
let dados = {};
let apiCep = async (cep) =>{
    if(dados["code"] === cep) return dados;
    await fetch(`https://cdn.apicep.com/file/apicep/${cep}.json`)
    .then( response => response.json())
    .then(data => dados = data)
    return dados;
}
let insertData = data => {
    for(let input of inputs){
        switch(input.getAttribute("id")){
            case "rua":
                input.value = data["address"];
                break;
            case "bairro":
                input.value = data["district"];
                break;
            case "cidade":
                input.value = data["city"];
                break;
        }
    }
    option.value = data["state"];
    option.innerHTML = data["state"];
}
consultCepInput.addEventListener("keyup",(tecla)=>{
    let comTraco = false;
    for(let letras of consultCepInput.value) if(letras === "-")  comTraco = true;
    if(consultCepInput.value.length === 8 && (!comTraco)) {
       let valor = consultCepInput.value;
       let antes = valor.slice(0,5);
       let depois = valor.slice(5);
       consultCepInput.value = antes + "-" + depois
       apiCep(consultCepInput.value).then(response => insertData(response));
    }else if(comTraco && consultCepInput.value.length === 9){
        apiCep(consultCepInput.value).then(response => insertData(response));
    }
})





