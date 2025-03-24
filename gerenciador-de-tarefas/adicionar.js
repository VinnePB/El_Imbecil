const { carregarTarefas, salvarTarefas } = require('./dados');

function adicionarTarefa(descricao) {
    const tarefas = carregarTarefas();
    const novaTarefa = {
        id: tarefas.length ? tarefas[tarefas.length - 1].id + 1 : 1,
        descricao,
        concluida: false
    };

    tarefas.push(novaTarefa);
    salvarTarefas(tarefas);
    console.log(Tarefa `adicionada: ${descricao}`);
}

module.exports = adicionarTarefa;
