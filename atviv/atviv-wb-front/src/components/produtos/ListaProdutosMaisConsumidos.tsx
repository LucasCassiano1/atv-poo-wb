import React, { useState, useEffect } from "react";
import axios from "axios"; // Biblioteca para requisições HTTP

type Produto = {
  id: number;
  nome: string;
  consumo: number;
};

const ListaProdutosMaisConsumidos: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para carregar os produtos mais consumidos do back-end
  const carregarProdutosMaisConsumidos = async () => {
    try {
      const resposta = await axios.get("http://localhost:32832/produtos-mais-consumidos"); // Endpoint do back-end
      setProdutos(resposta.data); // Atualiza o estado com os dados recebidos
    } catch (erro) {
      console.error("Erro ao carregar produtos mais consumidos:", erro);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutosMaisConsumidos(); // Carrega os dados ao montar o componente
  }, []);

  return (
    <div>
      <h4>Produtos Mais Consumidos</h4>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <ul className="collection">
          {produtos.map((produto) => (
            <li key={produto.id} className="collection-item">
              {produto.nome} - {produto.consumo} itens
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaProdutosMaisConsumidos;
