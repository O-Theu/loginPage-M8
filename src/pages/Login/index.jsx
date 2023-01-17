import React from 'react';
import { Formulario } from '../../components/Formulario';
import { AuthProvider } from '../../context/AuthContext';

import './style.css'

const Login = () => {
  

  return (
      <div>
        <AuthProvider>
          <Formulario />
        </AuthProvider>
      </div>
  );
}

export default Login;
