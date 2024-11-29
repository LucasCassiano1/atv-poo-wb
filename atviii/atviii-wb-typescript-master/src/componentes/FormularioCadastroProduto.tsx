import React from "react";

type Props = {
    tema: string;
};

const FormularioCadastroProduto: React.FC<Props> = ({ tema }) => {
    const estiloBotao = `btn waves-effect waves-light ${tema}`;

    return (
        <div className="row form-container">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="product_name" type="text" className="validate" />
                        <label htmlFor="product_name">Nome do Produto</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="product_price" type="number" className="validate" />
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
            </form>
        </div>
    );
};

export default FormularioCadastroProduto;
