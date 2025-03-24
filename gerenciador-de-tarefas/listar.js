const { carregarTarefas } = require('./dados');

function listarTarefas() {
    const tarefas = carregarTarefas();
    if (tarefas.length === 0) {
        console.log("Nenhuma tarefa encontrada.");
        return;
    }
    
    console.log("Lista de Tarefas:");
    tarefas.forEach(tarefa => {
        console.log(`[${tarefa.id}] ${tarefa.descricao} - ${tarefa.concluida ? "✅ Concluída" : "❌ Pendente"}`);
    });
}

module.exports = listarTarefas;
