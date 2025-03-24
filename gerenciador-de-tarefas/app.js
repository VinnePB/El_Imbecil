const adicionarTarefa = require('./adicionar');
const listarTarefas = require('./listar');
const concluirTarefa = require('./concluir');
const removerTarefa = require('./remover');

const comando = process.argv[2];
const argumento = process.argv[3];

switch (comando) {
    case 'adicionar':
        if (!argumento) {
            console.log("Erro: Descrição da tarefa é obrigatória.");
        } else {
            adicionarTarefa(argumento);
        }
        break;

    case 'listar':
        listarTarefas();
        break;

    case 'concluir':
        if (!argumento || isNaN(argumento)) {
            console.log("Erro: ID inválido.");
        } else {
            concluirTarefa(Number(argumento));
        }
        break;

    case 'remover':
        if (!argumento || isNaN(argumento)) {
            console.log("Erro: ID inválido.");
        } else {
            removerTarefa(Number(argumento));
        }
        break;

    default:
        console.log("Comandos disponíveis: adicionar, listar, concluir, remover.");
}
