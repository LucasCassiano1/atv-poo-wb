import React, { useState } from "react";

type Cliente = {
    nome: string,
    consumo: number
};

const ListaClientesMaisConsumiram: React.FC = () => {
    const [clientes] = useState<Cliente[]>([
        { nome: "Cliente 1", consumo: 50 },
        { nome: "Cliente 2", consumo: 48 },
        { nome: "Cliente 3", consumo: 46 },
        { nome: "Cliente 4", consumo: 44 },
        { nome: "Cliente 5", consumo: 42 },
        { nome: "Cliente 7", consumo: 40 },
        { nome: "Cliente 8", consumo: 38 },
        { nome: "Cliente 9", consumo: 36 },
        { nome: "Cliente 10", consumo: 35 }
    ]);

    return (
        <div className="clientes-container">
            <h4 className="titulo">Top 10 Clientes que Mais Consumiram</h4>
            <ul className="collection">
                {clientes.slice(0, 10).map((cliente, index) => (
                    <li key={index} className="collection-item">
                        <span className="cliente-nome">{cliente.nome}</span> - <span className="cliente-consumo">{cliente.consumo} itens</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaClientesMaisConsumiram;
