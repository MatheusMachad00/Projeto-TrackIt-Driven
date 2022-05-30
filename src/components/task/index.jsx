import { useState } from "react";
import axios from "axios";
import { TodayTask, DivImg, TaskData, Highscore } from "./style"
import Checkmark from "./../../assets/check.svg"

export default function Task(props) {
    const { 
        name,
        id,
        currentSequence,
        highestSequence,
        done,
        index,
        dataStorage,
        setCount,
        count,
        userData } = props

    const [habitDone, setHabitDone] = useState([]);


    function habitChecked(habit, id) {
        if (habitDone.includes(habit)) {
            setHabitDone([...habitDone.filter((h) => h !== habit)]);
            setCount(count-1);
            return;
        }
        setHabitDone([...habitDone, habit]);
        completeHabit(id);
        console.log(id)
        setCount(count+1);
    }

    function completeHabit(id) {
        /* let TOKEN;
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

        const LINK_API = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const request = axios.get(LINK_API, {}, config);
        request.then((response) => {
            const { data } = response;
            console.log("tudo ok", response)
        });
        request.catch(err => console.log(err.response)) */
    }


    const cond = highestSequence === currentSequence && highestSequence > 0;

    return (
        <TodayTask key={id}>
            <TaskData
                sequence={currentSequence > 0 ? true : false}>
                <h1>{name}</h1>
                <h2>Sequência atual: <span>{currentSequence} dias</span></h2>
                <h3>Seu recorde: <Highscore
                    record={cond ? true : false}>{highestSequence} dias</Highscore></h3>
            </TaskData>
            <DivImg
                onClick={() => habitChecked(index, id)}
                isFinished={done ? true : false}
                isfinished={habitDone.includes(index) ? true : false}>
                <img src={Checkmark} alt="checkmark" />
            </DivImg>
        </TodayTask>)
}