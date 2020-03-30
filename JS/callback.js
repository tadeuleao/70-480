
var bruto = 3000;

//Função que recebe dois parametros salario e retorno (CALLBACK) 
function salario(bruto , callback){
    var salarioLiquido =  bruto  - 200;
    return callback(salarioLiquido)
}

//Capturando o retorno da função salario e exibindo atraves de callback
salario(bruto , resultado =>{
    console.log(`Seu salario liquido é ${resultado}`);
});