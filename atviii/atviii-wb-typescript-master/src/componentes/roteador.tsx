import React from "react";
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

const Roteador: React.FC = () => {
    return (
        <Router>
            <div>
                <BarraNavegacao tema="blue darken-3">
                    <li><Link to="/clientes-mais-consumiram" className="black-text">Clientes que Mais Consumiram</Link></li>
                    <li><Link to="/clientes-por-genero" className="black-text">Clientes por Gênero</Link></li>
                    <li><Link to="/produtos-mais-consumidos" className="black-text">Produtos Mais Consumidos</Link></li>
                    <li><Link to="/produtos-por-genero" className="black-text">Produtos por Gênero</Link></li>
                    <li><Link to="/clientes-menos-consumiram" className="black-text">Clientes que Menos Consumiram</Link></li>
                    <li><Link to="/clientes-maior-valor" className="black-text">Clientes que Mais Consumiram em Valor</Link></li>
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
                        <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
                            <div className="row">
                                <div className="col s12">
                                    <ul className="collection with-header">
                                        <li className="collection-item">
                                            <Link to="/clientes-mais-consumiram" className="btn-large waves-effect waves-light teal full-width">Clientes que Mais Consumiram</Link>
                                        </li>
                                        <li className="collection-item">
                                            <Link to="/clientes-por-genero" className="btn-large waves-effect waves-light teal full-width">Clientes por Gênero</Link>
                                        </li>
                                        <li className="collection-item">
                                            <Link to="/produtos-mais-consumidos" className="btn-large waves-effect waves-light teal full-width">Produtos Mais Consumidos</Link>
                                        </li>
                                        <li className="collection-item">
                                            <Link to="/produtos-por-genero" className="btn-large waves-effect waves-light teal full-width">Produtos por Gênero</Link>
                                        </li>
                                        <li className="collection-item">
                                            <Link to="/clientes-menos-consumiram" className="btn-large waves-effect waves-light teal full-width">Clientes que Menos Consumiram</Link>
                                        </li>
                                        <li className="collection-item">
                                            <Link to="/clientes-maior-valor" className="btn-large waves-effect waves-light teal full-width">Clientes que Mais Consumiram em Valor</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default Roteador;
