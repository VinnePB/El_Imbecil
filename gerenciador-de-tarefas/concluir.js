const { carregarTarefas, salvarTarefas } = require('./dados');

function concluirTarefa(id) {
    const tarefas = carregarTarefas();
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        console.log(`Erro: Tarefa com ID ${id} não encontrada.`);
        return;
    }

    tarefa.concluida = true;
    salvarTarefas(tarefas);
    console.log(`Tarefa [${id}] concluída! ✅`);
}

module.exports = concluirTarefa