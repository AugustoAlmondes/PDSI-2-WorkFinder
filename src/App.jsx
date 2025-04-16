// import { useState } from 'react';
// import Login from './pages/Login/Login';  // Comentando a importação do Login

import './App.css';  // Estilos globais

import Cadastro from './pages/Cadastro/Cadastro.jsx'; // Caminho correto

import InfoJob from './pages/InfoJob/InfoJob.jsx';

function App() {

    // const [fezLogin, setFezLogin] = useState(false); //True para logado e falso para deslogado
    // const [typeUser, setTypeUser] = useState(1); //0 para empresa, 1 para usuário, 2 para adm

    return (
        <>
            {/* <Login /> */}  
            
            {/* <Cadastro /> */}  
            <InfoJob/>  
        </>
    );
}

export default App;
