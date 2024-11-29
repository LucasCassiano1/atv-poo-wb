import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ListaClientesMaisConsumiram from "../clientes/ListaClientesMaisConsumiram";
import ListaClientesPorGenero from "../produtos/ListaClientesPorGenero";
import ListaProdutosMaisConsumidos from "../produtos/ListaProdutosMaisConsumidos";
import ListaProdutosPorGenero from "../produtos/listaProdutosPorGenero";
import ListaClientesMenosConsumiram from "../clientes/listaClientesMenosConsumiram";
import ListaClientesMaisConsumiramEmValor from "../clientes/ListaClientesMaisConsumiram";
import ListaCliente from "../clientes/Clientes";
import ListaProduto from "../produtos/ListaProduto";
import FormularioCadastroCliente from "../clientes/formularioCadastroCliente";
import FormularioCadastroProduto from "../produtos/FormularioCadastroProduto";
import AtualizarCliente from "../clientes/AtualizarCliente"; // Importação do novo componente
import ExcluirCliente from "../clientes/ExcluirCliente"; // Importação do novo componente
import BarraNavegacao from "./barraNavegacao";
import CadastroCliente from "../clientes/CadastroCliente";
import Clientes from "../clientes/Clientes";

const Roteador: React.FC = () => {
    return (
        <Router>
            <div>
                <BarraNavegacao tema="light">
                    <li><Link to="/clientes-mais-consumiram" className="black-text">Clientes que Mais Consumiram</Link></li>
                    <li><Link to="/clientes-por-genero" className="black-text">Clientes por Gênero</Link></li>
                    <li><Link to="/produtos-mais-consumidos" className="black-text">Produtos Mais Consumidos</Link></li>
                    <li><Link to="/produtos-por-genero" className="black-text">Produtos por Gênero</Link></li>
                    <li><Link to="/clientes-menos-consumiram" className="black-text">Clientes que Menos Consumiram</Link></li>
                    <li><Link to="/clientes-maior-valor" className="black-text">Clientes que Mais Consumiram em Valor</Link></li>
                    <li><Link to="/atualizar-cliente" className="black-text">Atualizar Cliente</Link> {/* Novo Link */}</li>
                    <li><Link to="/excluir-cliente" className="black-text">Excluir Cliente</Link> {/* Novo Link */}</li>
                </BarraNavegacao>

                <Routes>
                    <Route path="/clientes" element={<Clientes />} />
                    <Route path="/clientes/cadastrar" element={<CadastroCliente />} />
                    <Route path="/clientes-mais-consumiram" element={<ListaClientesMaisConsumiram />} />
                    <Route path="/clientes-por-genero" element={<ListaClientesPorGenero />} />
                    <Route path="/produtos-mais-consumidos" element={<ListaProdutosMaisConsumidos />} />
                    <Route path="/produtos-por-genero" element={<ListaProdutosPorGenero tema="light" />} />
                    <Route path="/clientes-menos-consumiram" element={<ListaClientesMenosConsumiram tema="light" />} />
                    <Route path="/clientes-maior-valor" element={<ListaClientesMaisConsumiramEmValor />} />
                    <Route path="/lista-clientes" element={<ListaCliente />} />
                    <Route path="/lista-produtos" element={<ListaProduto tema="light" />} />
                    <Route path="/cadastro-cliente" element={<FormularioCadastroCliente />} />
                    <Route path="/cadastro-produto" element={<FormularioCadastroProduto tema="light" />} />
                    <Route path="/atualizar-cliente" element={<AtualizarCliente />} /> {/* Nova Rota */}
                    <Route path="/excluir-cliente" element={<ExcluirCliente />} /> {/* Nova Rota */}
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
                                        <li className="collection-item">
                                            <Link to="/atualizar-cliente" className="btn-large waves-effect waves-light teal full-width">Atualizar Cliente</Link> {/* Novo botão */}
                                        </li>
                                        <li className="collection-item">
                                            <Link to="/excluir-cliente" className="btn-large waves-effect waves-light teal full-width">Excluir Cliente</Link> {/* Novo botão */}
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
