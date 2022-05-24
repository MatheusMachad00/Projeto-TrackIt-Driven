import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Login from "./components/login";
import SignUp from "./components/signup";

function App() {



    /* const dayjs = require('dayjs');
    require('dayjs/locale/pt-br');
    let now = dayjs().locale('pt-br').format("dddd, DD/MM"); */

    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                    {/* <Route path="/" element={<StartScreen 
                    saveToken={(token) => setToken(token)}
                    saveImage={(userImg) => setUserImg(userImg)} />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/habitos" element={<Habits token={token} userImg={userImg}/>} />
                    <Route path="/hoje" element={<Today day={now}/>} />
                    <Route path="/historico" element={<RecordPage />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));