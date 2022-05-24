import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { SignScreen } from "./style"
import Logo from "./../../assets/Group 8.svg"

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function submitData(event) {
        event.preventDefault();
        setLoading(true);
        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const request = axios.post(LINK_API, {
            email,
            name,
            image,
            password
        });
        request.then(response => {
            const { data } = response;
            navigate("/");
            alert('Cadastrado com sucesso!');
        });
        request.catch(err => {
            console.log(err.response);
            setLoading(false);
            alert("E-mail ja cadastrado. Tente novamente.");
        });
    }

    return (
        <SignScreen>
            <img src={Logo} alt="Logo" />
            <form onSubmit={submitData}>
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

                <input
                    type="text"
                    disabled={loading ? true : false}
                    placeholder="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input
                    type="url"
                    disabled={loading ? true : false}
                    placeholder="foto"
                    value={image}
                    onChange={(e) => setImage(e.target.value)} />

                <button type="submit">
                    {loading ? (
                        <ThreeDots color="#FFFFFF" height={13} align='center' />
                    ) : (
                        'Cadastrar'
                    )}
                </button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça seu login!</p>
            </Link>
        </SignScreen>
    );
}