import { useState } from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { NewHabitsBlock, BottomRight, CancelButton } from "./style"

export default function NewHabit({closeMenu, dataStorage, setHabits, habits}) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [weekdayId, setWeekdayId] = useState([]);
    const [habit, setHabit] = useState("");
    const [loading, setLoading] = useState(false);



    function saveNewHabit(event) {
        event.preventDefault();
        setLoading(true);
        setHabits([...habits, ])
        const config = {
            headers: {
                Authorization: `Bearer ${dataStorage.token}`
            }
        };
        const LINK_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const request = axios.post(LINK_API, { name: habit, days: weekdayId }, config);
        request.then((response) => {
            const { data } = response;
            console.log("tudo ok", response)
            closeMenu();
            window.location.reload()
        });
        request.catch(err => console.log(err.response))
    }

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
                        required
                        disabled={loading ? true : false}
                        onChange={(e) => setHabit(e.target.value)} />
                    <div>
                        {weekdays.map((weekday, index) =>
                        (<button
                            className={weekdayId.includes(index) ? "selected" : ""}
                            key={index}
                            type="button"
                            required
                            disabled={loading ? true : false}
                            onClick={() => { generateArray(index) }}>{weekday}</button>))}
                    </div>
                    <BottomRight>
                        <CancelButton onClick={() => closeMenu()}>Cancelar</CancelButton>
                        <button type="submit" className="save">
                        {loading ? (
                            <ThreeDots color="#FFFFFF" height={13} align='center' />
                        ) : (
                            'Salvar'
                        )}
                        </button>
                    </BottomRight>
                </form>
            </NewHabitsBlock>
        </>
    );
}

