import React, { useState } from "react";

type Produto = {
  nome: string;
  consumo: number;
};

const ListaProdutosMaisConsumidos: React.FC = () => {
  const [produtos] = useState<Produto[]>([
    { nome: "Produto 1", consumo: 30 },
    { nome: "Produto 2", consumo: 25 },
    { nome: "Produto 3", consumo: 20 },
    // Adicione mais produtos fictícios...
  ]);

  return (
    <div>
      <h4>Produtos Mais Consumidos</h4>
      <ul className="collection">
        {produtos.map((produto, index) => (
          <li key={index} className="collection-item">
            {produto.nome} - {produto.consumo} itens
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutosMaisConsumidos;
