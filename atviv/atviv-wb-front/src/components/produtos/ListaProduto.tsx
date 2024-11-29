import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios"; // Biblioteca para requisições HTTP

type Produto = {
  id: number;
  nome: string;
};

type Props = {
  tema: string;
};

const ListaProduto: React.FC<Props> = ({ tema }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para carregar os produtos do back-end
  const carregarProdutos = async () => {
    try {
      const resposta = await axios.get("http://localhost:32832/produtos"); // Endpoint do back-end
      setProdutos(resposta.data); // Atualiza o estado com os dados recebidos
    } catch (erro) {
      console.error("Erro ao carregar produtos:", erro);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos(); // Carrega os produtos ao montar o componente
  }, []);

  const estilo = `collection-item ${tema}`;

  return (
    <div className="collection">
      <h4>Lista de Produtos</h4>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        produtos.map((produto) => (
          <a key={produto.id} className={estilo}>
            {produto.nome}
          </a>
        ))
      )}
    </div>
  );
};

export default ListaProduto;
