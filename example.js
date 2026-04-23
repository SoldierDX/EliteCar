/*
function saudacao(nome, idade, cpf){
    console.log(`ola, ${nome} voce tem ${idade} anos e seu cpf é ${cpf}`)
}




const nome = prompt('digite seu nome: ')
const idade = prompt('digite sua idade: ')
const cpf = prompt('digite seu cpf: ')

if(idade == null){
    console.log("Digite sua idade")
}

saudacao(nome, idade, cpf)

const idade = prompt('digite sua idade: ')
if(idade == null || idade == '' || idade == ' '){
    console.log("Digite sua idade")
}else{
    console.log(`voce tem ${idade} anos`)
}
*/


const saudacao = (idade, nome, cpf) => {
    console.log(`você se chama ${nome}, e tem ${idade} anos`)
}

const idade = prompt("digite sua idade: ")
const nome = prompt("digite seu nome: ")
const cpf = prompt("digite seu cpf: ")

saudacao(idade, nome, cpf)

/*
const saudacao = (idade, nome, cpf) => {
    console.log(`você se chama ${nome}, e tem ${idade} anos`)
}

é a mesma coisa que escrever 



function saudacao(nome, idade, cpf){
    bloco de código
}


const novafuncao = () =>{
    console.log("hello world")
}

novafuncao()
*/

