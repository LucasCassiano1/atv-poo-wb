import React, { useState } from "react";
import api, { endpoints } from "../services/api";

interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

const AtualizarCliente: React.FC = () => {
  const [clienteId, setClienteId] = useState<number | null>(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleUpdate = async () => {
    if (!clienteId) {
      alert("Por favor, insira um ID válido.");
      return;
    }

    try {
      const clienteAtualizado = { id: clienteId, nome, email, telefone };
      await api.put(endpoints.atualizarCliente, clienteAtualizado);
      alert("Cliente atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
    }
  };

  return (
    <div>
      <h2>Atualizar Cliente</h2>
      <label>
        ID do Cliente:
        <input
          type="number"
          value={clienteId || ""}
          onChange={(e) => setClienteId(Number(e.target.value))}
        />
      </label>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Telefone:
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </label>
      <button onClick={handleUpdate}>Atualizar</button>
    </div>
  );
};

export default AtualizarCliente;
