import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { Botao } from "../Botao";
import { Campo } from "../Campo";

import './style.css'

export const FormularioDeCadastro = () => {

    const { setEmail, setSenha, realizarCadastro } = useContext(AuthContext)

    return(
        <>
            <form className="formulario" onSubmit={realizarCadastro}>
                <h2 className="formulario__titulo">Crie sua conta</h2>
                <Campo 
                    type="email"
                    label="Email" 
                    placeholder="Digite seu endereço de email"
                    obrigatorio={true}
                    aoAlterado={valor => setEmail(valor)}
                />
                <Campo 
                    type="password"
                    label="Senha" 
                    placeholder="Digite sua senha" 
                    obrigatorio={true}
                    aoAlterado={valor => setSenha(valor)}
                />
                <Botao texto="Cadastrar-se"/>
                <p className="texto__cadastro">Já possui uma conta?<Link to="/" className="link__cadastro">Login</Link></p>
            </form>
        </>
        
    )
}