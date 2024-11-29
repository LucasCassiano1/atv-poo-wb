import React, { useState } from 'react';
import { createClient } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CadastroCliente: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createClient({ nome, email });
      setMensagem('Cliente cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setTimeout(() => navigate('/clientes'), 1500); // Redireciona após 1.5 segundos
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      setMensagem('Erro ao cadastrar cliente. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Cadastrar Cliente</h1>
      {mensagem && <p>{mensagem}</p>}
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
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;

