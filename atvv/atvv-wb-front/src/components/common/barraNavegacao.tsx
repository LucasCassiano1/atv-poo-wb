import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "materialize-css";

type Props = {
    tema: string;
    children?: React.ReactNode;
};

const BarraNavegacao: React.FC<Props> = ({ tema, children }) => {
    useEffect(() => {
        const sidenavElems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(sidenavElems);

        const dropdownElems = document.querySelectorAll(".dropdown-trigger");
        M.Dropdown.init(dropdownElems, { coverTrigger: false });
    }, []);

    return (
        <>
            {/* Barra de navegação principal */}
            <nav className={`${tema} nav-extended`}>
                <div className="nav-wrapper container">
                    {/* Logotipo WB */}
                    <a href="#" className="brand-logo">WB</a>
                    
                    {/* Botão de menu para dispositivos móveis */}
                    <a
                        href="#"
                        data-target="mobile-menu"
                        className="sidenav-trigger right"
                    >
                        <i className="material-icons">menu</i>
                    </a>

                    {/* Menu principal (para telas maiores) */}
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/lista-produtos" className="white-text">
                                <i className="material-icons right">shopping_cart</i>
                                Lista de Produtos
                            </Link>
                        </li>
                        <li>
                            <Link to="/lista-clientes" className="white-text">
                                <i className="material-icons right">people</i>
                                Lista de Clientes
                            </Link>
                        </li>
                        <li>
                            <Link to="/cadastro-cliente" className="white-text">
                                <i className="material-icons right">person_add</i>
                                Cadastro de Clientes
                            </Link>
                        </li>
                        <li>
                            <Link to="/cadastro-produto" className="white-text">
                                <i className="material-icons right">add_shopping_cart</i>
                                Cadastro de Produtos
                            </Link>
                        </li>
                        <li>
                            {/* Dropdown para mais opções */}
                            <a
                                className="dropdown-trigger btn-small blue-grey darken-4 white-text"
                                href="#"
                                data-target="dropdown-mais-opcoes"
                            >
                                Mais Opções
                            </a>
                            <ul id="dropdown-mais-opcoes" className="dropdown-content">
                                {children || <li><span className="grey-text">Sem opções</span></li>}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Menu lateral para dispositivos móveis */}
            <ul className="sidenav" id="mobile-menu">
                <li>
                    <Link to="/lista-produtos" className="black-text">Lista de Produtos</Link>
                </li>
                <li>
                    <Link to="/lista-clientes" className="black-text">Lista de Clientes</Link>
                </li>
                <li>
                    <Link to="/cadastro-cliente" className="black-text">Cadastro de Clientes</Link>
                </li>
                <li>
                    <Link to="/cadastro-produto" className="black-text">Cadastro de Produtos</Link>
                </li>
                <li>
                    <Link to="/mais-opcoes" className="black-text">Mais Opções</Link>
                </li>
            </ul>
        </>
    );
};

export default BarraNavegacao;
