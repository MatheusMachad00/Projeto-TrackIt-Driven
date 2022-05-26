import { useState} from "react";
import { TodayHabit, HabitDays, WeekdaysBox, Trashcan } from "./style"

import Trash from './../../assets/Group.svg'


export default function Habit({ habits }) {

    function weekdaysViewer({ days }) {
        const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
        return (
            <WeekdaysBox>
                {weekdays.map((weekday, index) =>
                    (<HabitDays 
                    key={index} 
                    selected={days.includes(index)}>{weekday}</HabitDays>))}
            </WeekdaysBox>
        );
    }

    

    /* function deleteHabit(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }
    } */

if (habits === false) {
    return (<p>Carregando...</p>)
} else {
    return (
            <>
                {habits.map(({ id, name, days }, index) => (
                    <TodayHabit key={id}>
                        <p>{name}</p>
                        <div>{weekdaysViewer({ days })}</div>
                        <Trashcan src={Trash} alt='trashcan' />
                    </TodayHabit>
                ))}
            </>
        )
    }
}