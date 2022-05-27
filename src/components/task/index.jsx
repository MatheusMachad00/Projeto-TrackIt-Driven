import { useState } from "react";
import { TodayTask, DivImg, TaskData, Highscore } from "./style"
import Checkmark from "./../../assets/check.svg"

export default function Task({ name, id, currentSequence, highestSequence, done }) {





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
            <DivImg>
                <img
                    src={Checkmark}
                    alt="checkmark" />
            </DivImg>
        </TodayTask>)
}