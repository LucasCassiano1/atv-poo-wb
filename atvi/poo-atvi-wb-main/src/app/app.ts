import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";

export function runApplication(prompt: (question: string) => string) {

    console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
    let empresa = new Empresa()
    let execucao = true

    while (execucao) {
        console.log(`Opções:`);
        
        console.log(`1 - Cadastrar cliente`);
        console.log(`2 - Listar todos os clientes`);
        console.log(`3 - Remover cliente`);
        console.log(`4 - Atualizar cliente`);
        console.log(`5 - Consultar cliente`);
        console.log(`0 - Sair`);

        let entrada = new Entrada()
        let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

        let cadastro = new CadastroCliente(empresa.getClientes);
        let listagem = new ListagemClientes(empresa.getClientes);

        switch (opcao) {
            case 1:
                cadastro.cadastrar();
                break;
            case 2:
                listagem.listar();
                break;
            case 3:
                cadastro.remover();
                break;
            case 4:
                cadastro.atualizar();
                break;
            case 5:
                cadastro.consultar();
                break;
            case 0:
                execucao = false;
                console.log(`Até mais`);
                break;
            default:
                console.log(`Operação inválida!`);
        }
    }

}