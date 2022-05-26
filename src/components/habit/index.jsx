import { useState } from "react";
import axios from "axios";
import { TodayHabit, HabitDays, WeekdaysBox, Trashcan } from "./style"

import Trash from './../../assets/Group.svg'


export default function Habit({ habits, dataStorage }) {

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

    function deleteHabit(id) {
        const config = {
            headers: {
                Authorization: `Bearer ${dataStorage.token}`
            }
        };

        if(window.confirm('Você tem certeza que quer excluir esse hábito?')){
            axios
                .delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
                .then(() => {
                    alert("Hábito deletado!");
                    window.location.reload()
                });
        }
    }

    if (habits === false) {
        return (<p>Carregando...</p>)
    } else {
        return (
            <>
                {habits.map(({ id, name, days }, index) => (
                    <TodayHabit key={id}>
                        <p>{name}</p>
                        <div>{weekdaysViewer({ days })}</div>
                        <Trashcan onClick={() => deleteHabit(id)} src={Trash} alt='trashcan' />
                    </TodayHabit>
                ))}
            </>
        )
    }
}