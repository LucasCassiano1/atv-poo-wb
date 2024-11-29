import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import axios from "axios"; // Biblioteca para requisições HTTP

type Cliente = {
  nome: string;
  genero: string;
};

const ListaClientesPorGenero: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Função para carregar os clientes do back-end
  const carregarClientes = async () => {
    try {
      const resposta = await axios.get("http://localhost:32832/clientes");
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

  // Filtro para separar clientes por gênero
  const clientesFemininos = clientes.filter(cliente => cliente.genero === "Feminino");
  const clientesMasculinos = clientes.filter(cliente => cliente.genero === "Masculino");

  return (
    <div className="clientes-container">
      <h4>Clientes por Gênero</h4>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <div className="genero-section">
            <h5 className="genero-title">Feminino</h5>
            <ul className="collection">
              {clientesFemininos.map((cliente, index) => (
                <li key={index} className="collection-item">{cliente.nome}</li>
              ))}
            </ul>
          </div>
          <div className="genero-section">
            <h5 className="genero-title">Masculino</h5>
            <ul className="collection">
              {clientesMasculinos.map((cliente, index) => (
                <li key={index} className="collection-item">{cliente.nome}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ListaClientesPorGenero;
