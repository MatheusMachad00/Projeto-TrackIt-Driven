import { useState } from "react";
import { NewHabitsBlock, BottomRight, CancelButton } from "./style"
import axios from "axios";

export default function NewHabit({closeMenu, userData, setHabits, habits}) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [weekdayId, setWeekdayId] = useState([]);
    const [habit, setHabit] = useState("");
    const [newHabitData, setNewHabitData] = useState(false);



    function saveNewHabit(event) {
        event.preventDefault();
        closeMenu();
        setHabits([...habits, ])
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };
        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const request = axios.post(LINK_API, { name: habit, days: weekdayId }, config);
        request.then((response) => {
            const { data } = response;
            console.log("tudo ok", response)
            setNewHabitData(data.data)
            /* console.log(newHabitData) */
            /* setHabits([...habits, ]) */
        });
        request.catch(err => console.log(err.response))

    }

    /* console.log(weekdayId); */



    function generateArray(day) {
        if (weekdayId.includes(day)) {
            setWeekdayId([...weekdayId.filter((d) => d !== day)]);
            return;
        };
        setWeekdayId([...weekdayId, day]);
    };


    return (
        <>
            <NewHabitsBlock>
                <form onSubmit={saveNewHabit}>
                    <input
                        type="text"
                        placeholder="nome do hábito"
                        value={habit}
                        onChange={(e) => setHabit(e.target.value)} />
                    <div>
                        {weekdays.map((weekday, index) =>
                        (<button
                            className={weekdayId.includes(index) ? "selected" : ""}
                            key={index}
                            type="button"
                            onClick={() => { generateArray(index) }}>{weekday}</button>))}
                    </div>
                    <BottomRight>
                        <CancelButton onClick={() => closeMenu()}>Cancelar</CancelButton>
                        <button type="submit" className="save">Salvar</button>
                    </BottomRight>
                </form>
            </NewHabitsBlock>
        </>
    );
}

