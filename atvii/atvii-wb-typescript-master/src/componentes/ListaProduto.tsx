import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string;
};

export default class ListaProduto extends Component<Props> {
    render() {
        const estilo = `collection-item ${this.props.tema}`;
        const produtos = ["Produto 1", "Produto 2", "Produto 3", "Produto 4", "Produto 5", "Produto 6"];

        return (
            <div className="collection">
                <h4>Lista de Produtos</h4>
                {produtos.map((produto, index) => (
                    <a key={index} className={estilo}>
                        {produto}
                    </a>
                ))}
            </div>
        );
    }
}
