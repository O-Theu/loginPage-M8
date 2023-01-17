import React from 'react';
import { FormularioDeCadastro } from '../../components/FormularioDeCadastro';
import { AuthProvider } from '../../context/AuthContext';


import './style.css'

const Register = () => {
  return (
    <div>
      <AuthProvider>
       <FormularioDeCadastro />  
      </AuthProvider>
    </div>
  );
}

export default Register;
