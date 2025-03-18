//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação
    if (!nome) {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Adiciona à lista
    amigos.push(nome);
    
    // Atualiza a lista visível
    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);

    // Limpa o campo
    input.value = '';
}