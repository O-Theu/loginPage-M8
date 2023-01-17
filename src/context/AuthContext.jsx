import { createContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState([]);
    const [senha, setSenha] = useState([]);

    const realizarCadastro = (evento) => {
        evento.preventDefault();
        
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);

        navigate('/');
    }

    const [texto, setTexto] = useState('')
    const [tipo, setTipo] = useState('')
    const snackbarRef = useRef(null);

    const realizarLogin = (evento) => {
        const emailCerto = localStorage.getItem("email");
        const senhaCerta = localStorage.getItem("senha");
        
        evento.preventDefault();
        if(email == emailCerto && senha == senhaCerta){
            setTexto("Login realizado com sucesso");
            setTipo("success");
            snackbarRef.current.show();
        } else {
            setTexto("Senha ou email incorreto");
            setTipo("fail");
            snackbarRef.current.show();
        }
    }

    return (
        <AuthContext.Provider
            value={{
                setEmail, setSenha, realizarCadastro, realizarLogin, tipo, texto, snackbarRef 
            }}
        >
            { children }
        </AuthContext.Provider>
    )

}