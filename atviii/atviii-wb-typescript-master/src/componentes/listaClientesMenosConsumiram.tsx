import 'materialize-css/dist/css/materialize.min.css';
import { useState } from "react";

type Cliente = {
  nome: string;
  consumoTotal: number;
};

type Props = {
  tema: string;
};

const ListaClientesMenosConsumiram: React.FC<Props> = ({ tema }) => {
  const [clientes] = useState<Cliente[]>([
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
  ]);

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
};

export default ListaClientesMenosConsumiram;
