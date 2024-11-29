import React, { useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type Props = {
    tema: string;
};

const FormularioCadastroCliente: React.FC<Props> = ({ tema }) => {
    useEffect(() => {
        M.updateTextFields(); // Para garantir que os campos do MaterializeCSS renderizem corretamente
    }, []);

    const estiloBotao = `btn waves-effect waves-light ${tema}`;
    
    return (
        <div className="row form-container">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" />
                        <label htmlFor="last_name">Sobrenome</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="telefone" type="text" className="validate" />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">E-mail</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center-align">
                        <button className={estiloBotao} type="submit" name="action">
                            Enviar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormularioCadastroCliente;
