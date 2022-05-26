import styled from 'styled-components'

export const TodayHabit = styled.div`
display: flex;
flex-direction: column;
width: 340px;
height: 91px;
background-color: #FFFFFF;
margin: 0 17px 10px 17px;
border-radius: 5px;
/* background-color: blue; */

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #666666;
    padding: 13px 0 8px 15px;
}
:last-child{
    margin-bottom: 105px;
}

`

export const WeekdaysBox = styled.div`
display: flex;
`

export const HabitDays = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin: 8px 4px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: ${props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    margin: 0 -9px 15px 14px;
`

export const Trashcan = styled.img`
width: 13px;
height: 15px;
position: relative;
right: -315px;
top: -75px;
`