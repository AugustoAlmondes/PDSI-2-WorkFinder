import Background from "../../components/BackgroundAnimated/BackgroundAnimated";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilos do Toast

import './Login.css'
import CadUser from "../../components/CadUser/CadUser";
import LoginUser from "../../components/LoginUser/LoginUser";
import CadBusiness from "../../components/CadBusiness/CadBusiness";
// // import background from "../components/Background";


export default function Login({ setFezLogin, setTypeUser, setEmail }) {
    const navigate = useNavigate();
    const [frameLogin, setFrameLogin] = useState(2) //0 PARA EMPRESA, 1 PARA USUARIO E 2 PARA LOGIN
    const [isEnterprise, setIsEnterprise] = useState(null)
    const [dataLogin, setDataLogin] = useState({
        email: '',
        senha: ''
        // enterprise: isEnterprise
    })
    const [dataUser, setDataUser] = useState({
        nomeCompleto: '',
        dataNascimento: '',
        telefone: '',
        cep: '',
        email: '',
        senha: '',
        confirmSenha: ''
    });

    const [dataEmpresa, setDataEmpresa] = useState(
        {
            nome_empresa: '',
            nome_fantasia: '',
            cnpj: '',
            inscricao_estadual: '',
            inscricao_municipal: '',
            telefone: '',
            cep: '',
            endereco: '',
            email: '',
            senha: '',
            confirmSenha: ''
        }
    )

    const clearInput = () => {
        frameLogin === 1 ?
            setDataUser({
                nomeCompleto: '',
                dataNascimento: '',
                telefone: '',
                cep: '',
                email: '',
                senha: '',
                confirmSenha: ''
            }) : frameLogin === 0 ?

                setDataEmpresa({
                    nome_empresa: '',
                    nome_fantasia: '',
                    cnpj: '',
                    inscricao_estadual: '',
                    inscricao_municipal: '',
                    telefone: '',
                    cep: '',
                    endereco: '',
                    email: '',
                    senha: '',
                    confirmSenha: ''
                }) :
                setDataLogin({
                    email: '',
                    senha: '',
                    isEnterprise: true
                })
    }

    const handleCheckboxChange = (e) => {
        setIsEnterprise(e.target.checked);
    };

    const handleChange = (e) => {
        if (frameLogin === 1) {
            const { name, value } = e.target;
            setDataUser(prevData => ({ ...prevData, [name]: value }))
        }
        else if (frameLogin === 0) {
            const { name, value } = e.target;
            setDataEmpresa(prevData => ({ ...prevData, [name]: value }))
        }
        else {
            const { name, value } = e.target;
            // console.log(dataLogin.enterprise);
            setDataLogin(prevData => ({ ...prevData, [name]: value }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoints = {
            0: "http://localhost:8800/empresa",
            1: "http://localhost:8800/users",
            login: "http://localhost:8800/users/login"
        };

        const postData = async (url, data, successMessage) => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });
                const result = await response.json();

                if (response.ok) {
                    console.log(result.message);
                    toast.success(successMessage, { className: 'toast-success' });
                    setFrameLogin(2);
                    clearInput();
                } else {
                    console.log("Erro: " + result.error);
                    toast.error(result.error || "Erro inesperado");
                }
            } catch (error) {
                console.log("Erro de conexão:", error);
            }
        };

        if (frameLogin === 1) {
            if (dataUser.senha !== dataUser.confirmSenha) {
                toast.error("Confirme a senha corretamente", { className: 'toast-error' });
                console.log("Senhas diferentes!");
                return;
            }
            await postData(endpoints[1], dataUser, "Cadastro realizado");
        }
        else if (frameLogin === 0) {
            await postData(endpoints[0], dataEmpresa, "Cadastro realizado");
        }
        else {
            await postData(endpoints.login, {
                email: dataLogin.email,
                senha: dataLogin.senha,
                isEnterprise: isEnterprise
            }, "Login realizado com Sucesso");

            setEmail(dataLogin.email);
            setFezLogin(true);
            setTypeUser(isEnterprise ? 0 : 1);
            navigate("/");
        }
    };


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
            <div className="container-login">
                <Background />
                <div className="signup">

                    {
                        frameLogin === 1 ? // CADASTRAR USUARIO
                            (
                                <>
                                    <CadUser dataUser={dataUser} handleChange={handleChange} handleSubmit={handleSubmit} setFrameLogin={setFrameLogin} />
                                </>


                            ) : frameLogin === 2 ? // LOGIN
                                (
                                    <>
                                        <LoginUser dataLogin={dataLogin} handleChange={handleChange} handleSubmit={handleSubmit} handleCheckboxChange={handleCheckboxChange} setFrameLogin={setFrameLogin} />
                                    </>
                                ) :
                                // CADASTRAR EMPRESA
                                (
                                    <>
                                        <CadBusiness dataEmpresa={dataEmpresa} handleChange={handleChange} handleSubmit={handleSubmit} />
                                    </>
                                )
                    }
                </div>
            </div>
        </>
    );
}

// Login.propTypes = {
//     setFezLogin: PropTypes.func.isRequired,
//     setTypeUser: PropTypes.func.isRequired,
// };