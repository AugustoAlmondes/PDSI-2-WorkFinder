import { ToastContainer } from 'react-toastify';
// import { PropTypes } from "prop-types"
import 'react-toastify/dist/ReactToastify.css'; // Estilos do Toast

import './login.css';


export default function Login() {

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <h2>Fazer Login</h2>
            <h3>Rápido e simples</h3>


            <form  className="form">
                <div className="textbox-login">
                    <input
                        id="email_login"
                        name="email"
                        type="text"
                        required
                    />
                    <label htmlFor="">Email</label>
                </div>

                <div className="textbox-login">
                    <input
                        id="senha_login"
                        name="senha"
                        type="password"
                        required
                    />
                    <label htmlFor="">Senha</label>
                </div>

                <div className="check-type">
                    <label
                        htmlFor=""
                    >Entrar como empresa</label>

                    <input
                        id="check-type-user"
                        name="isEnterprise"
                        // checked={isEnterprise}
                        type="checkbox"
                        style={{
                            width: '20px',
                            cursor: 'pointer',
                        }} />
                </div>

                <p>
                    Esqueceu a senha?
                    <span className="clique-aqui"> clique aqui</span>
                </p>

                <button type="submit">
                    Entrar
                </button>
                <button>
                    Nova conta
                </button>
            </form>
        </>
    );
}