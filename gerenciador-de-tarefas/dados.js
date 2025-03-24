const fs = require('fs');

const arquivo = 'tarefas.json';

// Garante que o arquivo existe
if (!fs.existsSync(arquivo)) {
    fs.writeFileSync(arquivo, '[]', 'utf-8');
}

function carregarTarefas() {
    const dados = fs.readFileSync(arquivo, 'utf-8');
    return JSON.parse(dados);
}

function salvarTarefas(tarefas) {
    fs.writeFileSync(arquivo, JSON.stringify(tarefas, null, 2), 'utf-8');
}

module.exports = { carregarTarefas, salvarTarefas };
