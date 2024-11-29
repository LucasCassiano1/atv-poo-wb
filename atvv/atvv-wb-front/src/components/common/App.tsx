import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaClientes from '../clientes/Clientes';
import CadastroCliente from '../clientes/CadastroCliente';
import AtualizarCliente from '../clientes/AtualizarCliente';
import ExcluirCliente from '../clientes/ExcluirCliente';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Lista de Clientes</a></li>
            <li><a href="/cadastrar">Cadastrar Cliente</a></li>
            <li><a href="/atualizar">Atualizar Cliente</a></li>
            <li><a href="/excluir">Excluir Cliente</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ListaClientes />} />
          <Route path="/cadastrar" element={<CadastroCliente />} />
          <Route path="/atualizar" element={<AtualizarCliente />} />
          <Route path="/excluir" element={<ExcluirCliente />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
