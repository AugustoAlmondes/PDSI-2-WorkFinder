import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App() {

    const [fezLogin, setFezLogin] = useState(false); //True para logado e falso para deslogado
    const [typeUser, setTypeUser] = useState(1); //0 para empresa, 1 para usuário, 2 para adm

    return (
        <>
            {/* <Login setFezLogin={setFezLogin} setTypeUser={setTypeUser} /> */}
            <Router>
                <Routes>
                    <Route path="/" element={<Home fezLogin={fezLogin} typeUser={typeUser} />} />
                    <Route path="/login" element={<Login setFezLogin={setFezLogin} setTypeUser={setTypeUser} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;