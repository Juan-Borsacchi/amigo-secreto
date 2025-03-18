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

function atualizarListaAmigos() {
    // 1. Obter elemento da lista pelo ID
    const listaAmigos = document.getElementById('listaAmigos');
    
    // 2. Limpar conteúdo anterior
    listaAmigos.innerHTML = "";
    
    // 3. Percorrer array com loop for
    for(let i = 0; i < amigos.length; i++) {
        // 4. Criar novo elemento <li>
        const itemLista = document.createElement('li');
        
        // Adicionar texto com nome do amigo
        itemLista.textContent = amigos[i];
        
        // Adicionar à lista
        listaAmigos.appendChild(itemLista);
    }
}