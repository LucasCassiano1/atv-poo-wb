import React, { useState, useEffect } from "react";
import axios from "axios";

type Cliente = {
    id: number;
    nome: string;
    consumo: number;
};

const ListaClientesMaisConsumiram: React.FC = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get<Cliente[]>('http://localhost:32832/clientes/top-consumo');
                setClientes(response.data);
            } catch (err) {
                setError("Erro ao carregar os clientes.");
            } finally {
                setLoading(false);
            }
        };

        fetchClientes();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="clientes-container">
            <h4 className="titulo">Top Clientes que Mais Consumiram</h4>
            <ul className="collection">
                {clientes.slice(0, 10).map((cliente, index) => (
                    <li key={cliente.id} className="collection-item">
                        <span className="cliente-nome">{cliente.nome}</span> - <span className="cliente-consumo">{cliente.consumo} itens</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaClientesMaisConsumiram;
