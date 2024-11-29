import 'materialize-css/dist/css/materialize.min.css';
import { Component } from "react";

type Cliente = {
  nome: string;
  consumoTotal: number;
};

type Props = {
  tema: string;
};

type State = {
  clientes: Cliente[];
};

export default class ListaClientesMenosConsumiram extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      clientes: [
        { nome: "Cliente 1", consumoTotal: 5 },
        { nome: "Cliente 2", consumoTotal: 12 },
        { nome: "Cliente 3", consumoTotal: 8 },
        { nome: "Cliente 4", consumoTotal: 3 },
        { nome: "Cliente 5", consumoTotal: 6 },
        { nome: "Cliente 6", consumoTotal: 1 },
        { nome: "Cliente 7", consumoTotal: 15 },
        { nome: "Cliente 8", consumoTotal: 7 },
        { nome: "Cliente 9", consumoTotal: 2 },
        { nome: "Cliente 10", consumoTotal: 9 },
        { nome: "Cliente 11", consumoTotal: 4 },
      ],
    };
  }

  render() {
    const { clientes } = this.state;
    const { tema } = this.props;

    // Ordena os clientes pelo consumo total em ordem crescente e pega os 10 primeiros
    const clientesMenosConsumiram = clientes
      .sort((a, b) => a.consumoTotal - b.consumoTotal)
      .slice(0, 10);

    return (
      <div className={`clientes-container ${tema}`}>
        <h5 className="titulo">Clientes que menos consumiram</h5>
        <div className="collection">
          {clientesMenosConsumiram.map(cliente => (
            <a key={cliente.nome} className="collection-item">
              <span className="cliente-nome">{cliente.nome}</span> - <span className="cliente-consumo">{cliente.consumoTotal} consumos</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}
