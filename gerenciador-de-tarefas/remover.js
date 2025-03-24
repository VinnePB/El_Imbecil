const { carregarTarefas, salvarTarefas } = require('./dados');

function removerTarefa(id) {
    let tarefas = carregarTarefas();
    const novaLista = tarefas.filter(t => t.id !== id);

    if (novaLista.length === tarefas.length) {
        console.log(`Erro: Nenhuma tarefa com ID ${id} encontrada.`);
        return;
    }

    salvarTarefas(novaLista);
    console.log(`Tarefa [${id}] removida! ❌`);
}

module.exports = removerTarefa;
