import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import dayjs from "dayjs";

import Login from "./components/login";
import SignUp from "./components/signup";
import TodayScreen from "./components/todayScreen";
import HabitsScreen from "./components/habitsScreen";
import StoryScreen from "./components/historyScreen";

import UserContext from './context/UserContext';

function App() {
    const [userData, setUserData] = useState({});

    const dataLocalStorage = localStorage.getItem("userDataStorage")
    const dataStorage = JSON.parse(dataLocalStorage)

    const dayjs = require('dayjs');
    require('dayjs/locale/pt-br');
    let now = dayjs().locale('pt-br').format("dddd, DD/MM");

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login setUserData={setUserData}/>} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/hoje" element={<TodayScreen 
                    day={now} 
                    dataStorage={dataStorage}
                    userData={userData}/>} />
                    <Route path="/habitos" element={<HabitsScreen dataStorage={dataStorage}/>} />
                    <Route path="/historico" element={<StoryScreen dataStorage={dataStorage}/>} /> 
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));