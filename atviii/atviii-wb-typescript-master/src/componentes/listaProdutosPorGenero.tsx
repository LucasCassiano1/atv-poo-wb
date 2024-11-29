import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Produto = {
  nome: string;
  generoConsumidor: string;
  quantidadeConsumida: number;
};

type Props = {
  tema: string;
};

const ListaProdutosPorGenero: React.FC<Props> = ({ tema }) => {
  const [produtos] = useState<Produto[]>([
    { nome: "Produto A", generoConsumidor: "Masculino", quantidadeConsumida: 50 },
    { nome: "Produto B", generoConsumidor: "Feminino", quantidadeConsumida: 30 },
    { nome: "Produto C", generoConsumidor: "Feminino", quantidadeConsumida: 45 },
    { nome: "Produto D", generoConsumidor: "Masculino", quantidadeConsumida: 20 }
  ]);

  // Agrupando produtos por gênero
  const produtosPorGenero = produtos.reduce((acc, produto) => {
    acc[produto.generoConsumidor] = acc[produto.generoConsumidor] || [];
    acc[produto.generoConsumidor].push(produto);
    return acc;
  }, {} as { [key: string]: Produto[] });

  return (
    <div className={`collection ${tema}`}>
      {Object.keys(produtosPorGenero).map(genero => (
        <div key={genero}>
          <h5>{genero}</h5>
          {produtosPorGenero[genero].map(produto => (
            <a key={produto.nome} className="collection-item">
              {produto.nome} - Consumido {produto.quantidadeConsumida} vezes
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListaProdutosPorGenero;
