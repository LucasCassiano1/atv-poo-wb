import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios";

type Produto = {
  nome: string;
  generoConsumidor: string;
  quantidadeConsumida: number;
};

type Props = {
  tema: string;
};

const ListaProdutosPorGenero: React.FC<Props> = ({ tema }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Requisição ao back-end
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:32832/produtos/por-genero");
        setProdutos(response.data);
      } catch (err) {
        setError("Erro ao carregar os produtos. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div className="red-text">{error}</div>;
  }

  // Agrupando produtos por gênero
  const produtosPorGenero = produtos.reduce((acc, produto) => {
    acc[produto.generoConsumidor] = acc[produto.generoConsumidor] || [];
    acc[produto.generoConsumidor].push(produto);
    return acc;
  }, {} as { [key: string]: Produto[] });

  return (
    <div className={`collection ${tema}`}>
      {Object.keys(produtosPorGenero).map((genero) => (
        <div key={genero}>
          <h5>{genero}</h5>
          {produtosPorGenero[genero].map((produto) => (
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
