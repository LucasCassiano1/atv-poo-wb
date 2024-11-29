import 'materialize-css/dist/css/materialize.min.css';
import { useState, useEffect } from "react";
import axios from "axios"; // Usando axios para requisição HTTP

type Cliente = {
  nome: string;
  consumoTotal: number;
};

type Props = {
  tema: string;
};

const ListaClientesMenosConsumiram: React.FC<Props> = ({ tema }) => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para carregar os clientes do backend
  const carregarClientes = async () => {
    try {
      const resposta = await axios.get("http://localhost:32832/bottom-consumo"); // Endpoint para clientes que menos consumiram

      setClientes(resposta.data); // Atualiza o estado com os dados recebidos
    } catch (erro) {
      console.error("Erro ao carregar clientes:", erro);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarClientes(); // Carrega os clientes ao montar o componente
  }, []);

  // Ordenar clientes pela quantidade de consumo e pegar os 10 primeiros
  const clientesMenosConsumiram = clientes
    .sort((a, b) => a.consumoTotal - b.consumoTotal)
    .slice(0, 10);

  return (
    <div className={`clientes-container ${tema}`}>
      <h5 className="titulo">Clientes que menos consumiram</h5>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="collection">
          {clientesMenosConsumiram.map(cliente => (
            <a key={cliente.nome} className="collection-item">
              <span className="cliente-nome">{cliente.nome}</span> - <span className="cliente-consumo">{cliente.consumoTotal} consumos</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaClientesMenosConsumiram;
