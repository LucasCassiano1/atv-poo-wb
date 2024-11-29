import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Cliente = {
    nome: string;
    genero: string;
};

export default class ListaClientesPorGenero extends Component {
    state = {
        clientes: [
            { nome: "Cliente 1", genero: "Feminino" },
            { nome: "Cliente 2", genero: "Masculino" },
            { nome: "Cliente 3", genero: "Feminino" },
            // Adicione mais clientes fictícios...
        ]
    };

    render() {
        const clientesFemininos = this.state.clientes.filter(cliente => cliente.genero === "Feminino");
        const clientesMasculinos = this.state.clientes.filter(cliente => cliente.genero === "Masculino");

        return (
            <div className="clientes-container">
                <h4>Clientes por Gênero</h4>
                <div className="genero-section">
                    <h5 className="genero-title">Feminino</h5>
                    <ul className="collection">
                        {clientesFemininos.map((cliente, index) => (
                            <li key={index} className="collection-item">{cliente.nome}</li>
                        ))}
                    </ul>
                </div>
                <div className="genero-section">
                    <h5 className="genero-title">Masculino</h5>
                    <ul className="collection">
                        {clientesMasculinos.map((cliente, index) => (
                            <li key={index} className="collection-item">{cliente.nome}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
