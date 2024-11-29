/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string;
};

export default class ListaCliente extends Component<Props> {
    render() {
        const estiloItem = `collection-item ${this.props.tema}`;
        const clientes = [
            "Cliente 1",
            "Cliente 2",
            "Cliente 3",
            "Cliente 4",
            "Cliente 5",
            "Cliente 6",
            "Cliente 7",
            "Cliente 8",
        ];

        return (
            <div className="collection clientes-container">
                {clientes.map((cliente, index) => (
                    <a key={index} className={estiloItem}>
                        {cliente}
                    </a>
                ))}
            </div>
        );
    }
}
