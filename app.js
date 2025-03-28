//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos(); // ← Chamada da nova função
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

function sortearAmigo() {
    // 1. Validar se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }

    // 2. Gerar índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // 3. Obter nome sorteado
    const amigoSorteado = amigos[indiceSorteado];
    
    // 4. Mostrar resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>${amigoSorteado}</li>`;
}