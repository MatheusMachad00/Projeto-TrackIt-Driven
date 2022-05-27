import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { DayBlock, TaskBlock, MainChunk } from "./style";


import Task from "../task";
import Header from "../header";
import Footer from "../footer";

export default function TodayScreen({ dataStorage, day }) {
    const [todayTasks, setTodayTasks] = useState(false);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${dataStorage.token}`
            }
        };

        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const request = axios.get(LINK_API, config);
        request.then(response => {
            const { data } = response;
            setTodayTasks(data)
            /* console.log(todayTasks)
            console.log(data) */
        });
        request.catch(err => console.log(err.response));
    }, []);


    return (
        <MainChunk>
            <Header dataStorage={dataStorage} />
            <DayBlock>
                <div>{capitalizeFirstLetter(day)}</div>
                <p>Nenhum hábito concluído ainda</p>
            </DayBlock>
            <TaskBlock>
                {!todayTasks ? 'Carregando...' :
                    todayTasks.map(({ currentSequence, highestSequence, done, name, id }, index) =>
                    (<Task 
                        currentSequence={currentSequence}
                        highestSequence={highestSequence}
                        done={done}
                        name={name}
                        index={index}
                        id={id}
                        dataStorage={dataStorage} />))}
            </TaskBlock>
            <Footer />
        </MainChunk>
    )
}