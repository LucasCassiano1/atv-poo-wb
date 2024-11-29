import { Component } from "react";
import M from 'materialize-css';

type Cliente = {
    nome: string,
    consumo: number
};

export default class ListaClientesMaisConsumiram extends Component {
    state = {
        clientes: [
            { nome: "Cliente 1", consumo: 50 },
            { nome: "Cliente 2", consumo: 45 },
            { nome: "Cliente 3", consumo: 40 },
            // Adicione mais clientes fictícios...
        ]
    };

    render() {
        return (
            <div className="clientes-container">
                <h4 className="titulo">Top 10 Clientes que Mais Consumiram</h4>
                <ul className="collection">
                    {this.state.clientes.slice(0, 10).map((cliente, index) => (
                        <li key={index} className="collection-item">
                            <span className="cliente-nome">{cliente.nome}</span> - <span className="cliente-consumo">{cliente.consumo} itens</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
