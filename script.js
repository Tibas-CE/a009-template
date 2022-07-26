//Strings

/*const nome = prompt("Qual é o seu nome?");
const cor = prompt("Qual é o sua cor favorita?");

// concatenação
let mensagem1 = "A cor favorita de"  +  nome  +  "é"  +  cor;
console.log(mensagem1);

// template string
let mensagem2 = `A cor favorita de ${nome} é ${cor}`;
console.log(mensagem2);

const citacao = prompt("Qual sua citação favorita");
mensagem1 = `${mensagem1}, e a citação favorita é "${citacao}"`;
console.log(mensagem1);
//mesagem1 = mensagem1 + "e a citação favorita e \"

// mensagem2 = "Nome:" + nome +  "\nCor favorita:" + cor
mensagem2 = `Nome: ${nome} 
Cor favorita: ${cor}`;
console.log(mensagem2);

// manipulando strings

console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`);
console.log(`O nome possui a letra A: ${nome.includes("a")}`);*/

//EXERCICIO DE FIXAÇÃO
const nomeDoUsuario = prompt("Qual o seu nome?");
const emailDoUsuario = prompt("Qual seu email?");
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Boas vindas ${nomeDoUsuario}!`);
console.log(`O seu nome possui ${nomeDoUsuario.length} caracteres.`);
console.log(`O e-mail e real: ${emailDoUsuario.includes("@")}`); 


const novoNome = nomeDoUsuario.replaceAll("r", "l");
const novoEmail = emailDoUsuario.replaceAll("r", "l")
console.log(novoNome, novoEmail);
