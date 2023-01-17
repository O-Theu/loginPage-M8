import React, { useContext, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { Botao } from "../Botao";
import { Campo } from "../Campo";
import Snackbar from "../SnackBar";

import './style.css'

export const Formulario = () => {
    
    const { realizarLogin, texto, tipo, snackbarRef, setSenha, setEmail} = useContext(AuthContext);

    return(
        <>
            <form className="formulario" onSubmit={realizarLogin}>
                <h2 className="formulario__titulo">Acesse sua conta</h2>
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
                <Botao texto="Login"/>
                <p className="texto__cadastro">Não possui uma conta?<Link to="/registrar" className="link__cadastro">Cadastre-se</Link></p>
            </form>

            <Snackbar
                ref={snackbarRef}
                texto={texto}
                type={tipo}
            />
        </>
        
    )
}