import React, { useEffect, useState } from "react";
import { getClients } from "../services/api";

interface Cliente {
  id: number;
  nome: string;
  email: string;
}

const Clientes: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await getClients();
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
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <strong>Nome:</strong> {cliente.nome} <br />
            <strong>Email:</strong> {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;
