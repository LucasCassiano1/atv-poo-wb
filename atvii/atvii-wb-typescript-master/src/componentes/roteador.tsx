// Roteador.tsx
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListaClientesMaisConsumiram from "./ListaClientesMaisConsumiram";
import ListaClientesPorGenero from "./ListaClientesPorGenero";
import ListaProdutosMaisConsumidos from "./ListaProdutosMaisConsumidos";
import ListaProdutosPorGenero from "./listaProdutosPorGenero";
import ListaClientesMenosConsumiram from "./listaClientesMenosConsumiram";
import ListaClientesMaisConsumiramEmValor from "./ListaClientesMaisConsumiram";
import ListaCliente from "./listaCliente";
import ListaProduto from "./ListaProduto";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./FormularioCadastroProduto";
import BarraNavegacao from "./barraNavegacao";
import '../App.css';

export default class Roteador extends Component {
    render() {
        return (
            <Router>
                <div>
                    <BarraNavegacao tema="blue darken-3">
                        <li><Link to="/lista-produtos">Lista de Produtos</Link></li>
                        <li><Link to="/lista-clientes">Lista de Clientes</Link></li>
                        <li><Link to="/cadastro-cliente">Cadastro de Clientes</Link></li>
                        <li><Link to="/cadastro-produto">Cadastro de Produtos</Link></li>
                        <li><Link to="/mais-opcoes" className="nav-button">Mais Opções</Link></li>
                    </BarraNavegacao>
                    
                    <Routes>
                        <Route path="/clientes-mais-consumiram" element={<ListaClientesMaisConsumiram />} />
                        <Route path="/clientes-por-genero" element={<ListaClientesPorGenero />} />
                        <Route path="/produtos-mais-consumidos" element={<ListaProdutosMaisConsumidos />} />
                        <Route path="/produtos-por-genero" element={<ListaProdutosPorGenero tema="light" />} />
                        <Route path="/clientes-menos-consumiram" element={<ListaClientesMenosConsumiram tema="light" />} />
                        <Route path="/clientes-maior-valor" element={<ListaClientesMaisConsumiramEmValor />} />
                        <Route path="/lista-clientes" element={<ListaCliente tema="light" />} />
                        <Route path="/lista-produtos" element={<ListaProduto tema="light" />} />
                        <Route path="/cadastro-cliente" element={<FormularioCadastroCliente tema="light" />} />
                        <Route path="/cadastro-produto" element={<FormularioCadastroProduto tema="light" />} />
                        <Route path="/mais-opcoes" element={
                            <div className="container" style={{ padding: '20px' }}>
                                <h2>Mais Opções</h2>
                                <ul className="collection">
                                    <li className="collection-item"><Link to="/clientes-mais-consumiram">Clientes que Mais Consumiram</Link></li>
                                    <li className="collection-item"><Link to="/clientes-por-genero">Clientes por Gênero</Link></li>
                                    <li className="collection-item"><Link to="/produtos-mais-consumidos">Produtos Mais Consumidos</Link></li>
                                    <li className="collection-item"><Link to="/produtos-por-genero">Produtos por Gênero</Link></li>
                                    <li className="collection-item"><Link to="/clientes-menos-consumiram">Clientes que Menos Consumiram</Link></li>
                                    <li className="collection-item"><Link to="/clientes-maior-valor">Clientes que Mais Consumiram em Valor</Link></li>
                                </ul>
                            </div>
                        } />
                    </Routes>
                </div>
            </Router>
        );
    }
}
