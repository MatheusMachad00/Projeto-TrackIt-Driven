import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { DayBlock, TaskBlock, Task, DivImg } from "./style"
import Checkmark from "./../../assets/check.svg"
import dayjs from "dayjs";

import Header from "../header"

export default function TodayScreen({ userData, day }) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const request = axios.get(LINK_API, config);
        request.then(response => {
            const { data } = response;

            console.log(data);
        });
        request.catch(err => console.log(err.response));
    }, []);


    return (
        <>
            <Header userData={userData} />
            <DayBlock>
                <div>{capitalizeFirstLetter(day)}</div>
                <p>Nenhum hábito concluído ainda</p>
            </DayBlock>

        </>
    )
}