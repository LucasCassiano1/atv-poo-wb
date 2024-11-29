import React, { useEffect } from "react";
import { Link } from "react-router-dom";

type Props = {
    tema: string,
    children: React.ReactNode
};

const BarraNavegacao: React.FC<Props> = ({ tema, children }) => {
    useEffect(() => {
        const sidenavElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenavElems);

        const dropdownElems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdownElems, { coverTrigger: false });
    }, []);

    return (
        <>
            <nav className={`${tema} nav-extended`}>
                                  {/* Logotipo WB alinhado à esquerda */}
                <a href="#" className="brand-logo">WB</a>
                <div className="nav-wrapper container">
                    <a href="#" data-target="mobile-menu" className="sidenav-trigger right">
                        <i className="material-icons">menu</i>
                    </a>

                    {/* Menu principal, com os itens alinhados à direita para telas grandes */}
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/lista-produtos" className="white-text"><i className="material-icons right">shopping_cart</i>Lista de Produtos</Link></li>
                        <li><Link to="/lista-clientes" className="white-text"><i className="material-icons right">people</i>Lista de Clientes</Link></li>
                        <li><Link to="/cadastro-cliente" className="white-text"><i className="material-icons right">person_add</i>Cadastro de Clientes</Link></li>
                        <li><Link to="/cadastro-produto" className="white-text"><i className="material-icons right">add_shopping_cart</i>Cadastro de Produtos</Link></li>
                        <li>
                            <a className="dropdown-trigger btn-small blue-grey darken-4 white-text" href="#" data-target="dropdown-mais-opcoes">
                                Mais Opções
                            </a>
                            <ul id="dropdown-mais-opcoes" className="dropdown-content">
                                {children}
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Menu lateral (sidenav) para dispositivos móveis */}
            <ul className="sidenav" id="mobile-menu">
                <li><Link to="/lista-produtos" className="black-text">Lista de Produtos</Link></li>
                <li><Link to="/lista-clientes" className="black-text">Lista de Clientes</Link></li>
                <li><Link to="/cadastro-cliente" className="black-text">Cadastro de Clientes</Link></li>
                <li><Link to="/cadastro-produto" className="black-text">Cadastro de Produtos</Link></li>
                <li><Link to="/mais-opcoes" className="black-text">Mais Opções</Link></li>
            </ul>
        </>
    );
};

export default BarraNavegacao;
