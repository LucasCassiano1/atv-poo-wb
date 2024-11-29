import React, { useEffect, useState } from "react";
import axios from "axios";

interface Cliente {
  id: number;
  nome: string;
  email: string;
}

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const API_URL = "http://localhost:32832/cliente/clientes";

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get(API_URL);
        setClientes(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  if (loading) {
    return <p>Carregando clientes...</p>;
  }

  return (
    <div>
      <h1>Clientes</h1>
      {clientes.length > 0 ? (
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente.id}>
              <strong>Nome:</strong> {cliente.nome} <br />
              <strong>Email:</strong> {cliente.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum cliente encontrado.</p>
      )}
    </div>
  );
};

export default Clientes;
