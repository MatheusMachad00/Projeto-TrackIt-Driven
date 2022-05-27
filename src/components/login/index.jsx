import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { LoginScreen } from "./style"
import Logo from "./../../assets/Group 8.svg"

export default function Login({setUserData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    /* localStorage.clear() */

    function login(event) {
        event.preventDefault();
        setLoading(true);
        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
        const request = axios.post(LINK_API, {
            email,
            password
        });
        request.then(response => {
            const { data } = response;
            setUserData(data);
            console.log(data)
            /* localStorage.clear() */
            const stringifyData = JSON.stringify(data);
            localStorage.setItem("userDataStorage", stringifyData);
            navigate("/hoje");
        })
        request.catch(err => {
            console.log(err.response);
            setLoading(false);
            alert("E-mail ou senha incorretos. Tente novamente.");
        });
    }


    return (
        <>
            <LoginScreen>
                <img src={Logo} alt="Logo" />
                <form onSubmit={login}>
                    <input
                        type="email"
                        disabled={loading ? true : false}
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input
                        type="password"
                        disabled={loading ? true : false}
                        placeholder="senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                        
                    <button type="submit">
                        {loading ? (
                            <ThreeDots color="#FFFFFF" height={13} align='center' />
                        ) : (
                            'Entrar'
                        )}
                    </button>
                </form>
                <Link to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </LoginScreen>
        </>
    );
}