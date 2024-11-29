import React from "react";
import 'materialize-css/dist/css/materialize.min.css';

type Props = {
    tema: string;
};

const ListaCliente: React.FC<Props> = ({ tema }) => {
    const estiloItem = `collection-item ${tema}`;
    const clientes = [
        "Cliente 1",
        "Cliente 2",
        "Cliente 3",
        "Cliente 4",
        "Cliente 5",
        "Cliente 6",
        "Cliente 7",
        "Cliente 8",
    ];

    return (
        <div className="collection clientes-container">
            {clientes.map((cliente, index) => (
                <a key={index} className={estiloItem}>
                    {cliente}
                </a>
            ))}
        </div>
    );
};

export default ListaCliente;
