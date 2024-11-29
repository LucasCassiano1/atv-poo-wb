import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

export default function MaisOpcoes() {
    return (
        <div className="container" style={{ padding: "20px", textAlign: "center" }}>
            <h2>Mais Opções</h2>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link to="/clientes-mais-consumiram" className="btn waves-effect waves-light">
                    Clientes que Mais Consumiram
                </Link>
                <Link to="/clientes-por-genero" className="btn waves-effect waves-light">
                    Clientes por Gênero
                </Link>
                <Link to="/produtos-mais-consumidos" className="btn waves-effect waves-light">
                    Produtos Mais Consumidos
                </Link>
                <Link to="/produtos-por-genero" className="btn waves-effect waves-light">
                    Produtos por Gênero
                </Link>
                <Link to="/clientes-menos-consumiram" className="btn waves-effect waves-light">
                    Clientes que Menos Consumiram
                </Link>
                <Link to="/clientes-maior-valor" className="btn waves-effect waves-light">
                    Clientes que Mais Consumiram em Valor
                </Link>
            </div>
        </div>
    );
}
