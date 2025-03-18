//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");


function adicionarAmigo(){
   listaAmigos.push(inputAmigo.value);
   ulListaAmigos.innerHTML += <li>${inputAmigo.value}</li>; 

};

function sortearAmigos() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random]
    ulResultado.innerHTML = <li>O amigo secreto é: ${amigoSecreto}</li>;
}
