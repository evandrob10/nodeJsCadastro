let validar = userData =>{
    let formDados = userData;
    for(let formDado in formDados) if(formDados[formDado] === "") throw `Você esqueceu de preencher o ${formDado}`;
    if(!formDados["term"]) throw "Você precisa aceita os termos e condições!";
    if(formDados["senha"] !== formDados["confirmarSenha"]) throw 'Os campos "Senha" e "Confirma Senha", precisam ser iguais!';
}
module.exports = validar;