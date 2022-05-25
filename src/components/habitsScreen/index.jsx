import { Link } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Subtitle, EmptyHabits, MainChunk, TodayHabit, HabitDays, WeekdaysBox } from "./style"


import Header from "./../header/index";
import NewHabit from "../newHabit";
import Footer from "../footer";

export default function HabitsScreen({ userData }) {
    const [habits, setHabits] = useState([]);
    const [newMenu, setNewMenu] = useState(false);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const request = axios.get(LINK_API, config);
        request.then(response => {
            const { data } = response;
            setHabits(data);
            console.log(data);

        });
        request.catch(err => console.log(err.response));
    }, []);

    function openNewHabit() {
        if (newMenu) setNewMenu(false);
        if (!newMenu) setNewMenu(true);
    }

    function weekdaysViewer({ days }) {
        const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
        return (
            <WeekdaysBox>
                {weekdays.map((weekday, index) =>
                    (<HabitDays key={index}>{weekday}</HabitDays>))}
            </WeekdaysBox>
        );
    }


    return (
        <>
            <Header userData={userData} />
            <Subtitle>
                <p>Meus hábitos</p>
                <button onClick={() => openNewHabit()}>+</button>
            </Subtitle>
            
            {!newMenu ? <></> :
                <NewHabit 
                userData={userData}
                setHabits={setHabits}
                habits={habits} 
                closeMenu={(newMenu) => setNewMenu(newMenu)} />}

            {habits === [] ?
                <EmptyHabits>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</EmptyHabits> :
                habits.map(({ id, name, days }) => (
                    <TodayHabit key={id}>
                        <p>{name}</p>
                        <div selected={days.includes(id)}>{weekdaysViewer({ days })}</div>
                    </TodayHabit>
                ))}
            {/* {habits.map(({ id, name, days }) => (
                        <TodayHabit key={id}>
                            <p>{name}</p>
                            <div selected={days.includes(id)}>{weekdaysViewer({ days })}</div>
                        </TodayHabit>
                ))} */}
            <Footer />
        </>
    );
}
