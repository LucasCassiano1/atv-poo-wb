import React, { useState } from "react";

type Props = {
    tema: string;
};

const FormularioCadastroProduto: React.FC<Props> = ({ tema }) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [mensagem, setMensagem] = useState('');

    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Dados do produto a serem enviados
        const produto = { nome, preco: parseFloat(preco) };

        try {
            const response = await fetch('http://localhost:32832/produtos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(produto),
            });

            if (response.ok) {
                setMensagem('Produto cadastrado com sucesso!');
                setNome('');
                setPreco('');
            } else {
                setMensagem('Erro ao cadastrar produto. Verifique os dados e tente novamente.');
            }
        } catch (error) {
            setMensagem('Erro ao conectar com o servidor.');
            console.error('Erro:', error);
        }
    };

    return (
        <div className="row form-container">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            id="product_name"
                            type="text"
                            className="validate"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <label htmlFor="product_name">Nome do Produto</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="product_price"
                            type="number"
                            className="validate"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
                            required
                        />
                        <label htmlFor="product_price">Preço</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <button className={estiloBotao} type="submit" name="action">
                            Cadastrar Produto
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                {mensagem && <div className="center-align">{mensagem}</div>}
            </form>
        </div>
    );
};

export default FormularioCadastroProduto;
