import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { DayBlock, TaskBlock, MainChunk, TaskCompleted } from "./style";


import Task from "../task";
import Header from "../header";
import Footer from "../footer";

export default function TodayScreen({ dataStorage, day, userData }) {
    const [todayTasks, setTodayTasks] = useState(false);
    const [count, setCount] = useState(0);

    let tasksCompleted = ((count / todayTasks.length) * 100).toFixed(0);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        let TOKEN;
        if (dataStorage === null) {
            TOKEN = userData.token;
        } else {
            TOKEN = dataStorage.token;
        }

        const config = {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        };

        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const request = axios.get(LINK_API, config);
        request.then(response => {
            const { data } = response;
            setTodayTasks(data)
            console.log(data)
        });
        request.catch(err => {
            window.location.reload()
            console.log(err.response)
        });
    }, []);


    return (
        <MainChunk>
            <Header dataStorage={dataStorage} userData={userData} />
            <DayBlock>
                <div>{capitalizeFirstLetter(day)}</div>
                {count > 0 ? <p className="completed">{tasksCompleted}% dos hábitos concluídos</p>
                    : <p>Nenhum hábito concluído ainda</p>}
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
                        dataStorage={dataStorage}
                        setCount={setCount}
                        count={count} />))}
            </TaskBlock>
            <Footer />
        </MainChunk>
    )
}