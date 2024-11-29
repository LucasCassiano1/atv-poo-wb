import React, { useState } from "react";
import api, { endpoints } from "../services/api";

const FormularioCadastroCliente: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const novoCliente = { nome, email, telefone };
      await api.post(endpoints.cadastrarCliente, novoCliente);
      alert("Cliente cadastrado com sucesso!");
      setNome("");
      setEmail("");
      setTelefone("");
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Telefone:
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </label>
      <button type="submit">Cadastrar Cliente</button>
    </form>
  );
};

export default FormularioCadastroCliente;
