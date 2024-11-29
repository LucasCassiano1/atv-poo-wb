import React, { useState } from 'react';
import { deleteClient } from '../services/api';

const ExcluirCliente: React.FC = () => {
  const [id, setId] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) {
      setMensagem('Por favor, insira um ID válido.');
      return;
    }
    try {
      await deleteClient(id);
      setMensagem(`Cliente com ID ${id} excluído com sucesso!`);
      setId(null);
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      setMensagem('Erro ao excluir cliente. Por favor, tente novamente.');
    }
  };

  return (
    <div className="excluir-cliente-container">
      <h2>Excluir Cliente</h2>
      {mensagem && <p className="mensagem-feedback">{mensagem}</p>}
      <form onSubmit={handleDelete} className="form-excluir-cliente">
        <div className="input-group">
          <label htmlFor="id">ID do Cliente:</label>
          <input
            type="number"
            id="id"
            value={id || ''}
            onChange={(e) => setId(parseInt(e.target.value) || null)}
            required
          />
        </div>
        <button type="submit" className="btn-delete">
          Excluir
        </button>
      </form>
    </div>
  );
};

export default ExcluirCliente;
