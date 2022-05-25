import styled from 'styled-components'

export const MainChunk = styled.div`
/* background-color: #F2F2F2; */
/* background-color: yellow; */
`

export const Subtitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
padding: 22px 22px;
background-color: #F2F2F2;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;
}
button{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    color: #FFFFFF;
    background-color: #52B6FF;
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    border: none;
}
`

export const EmptyHabits = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
color: #666666;
padding: 5px 20px 5px 18px;
background-color: #F2F2F2;
`

export const TodayHabit = styled.div`
display: flex;
flex-direction: column;
width: 340px;
height: 91px;
background-color: #FFFFFF;
margin: 0 17px 10px 17px;
border-radius: 5px;
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #666666;
    padding: 13px 0 8px 15px;
    /* margin-bottom: 8px; */
}
`

export const HabitDays = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    /* background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"}; */
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
    color: #DBDBDB;
    margin: 0 -9px 15px 14px;
`

export const WeekdaysBox = styled.div`
/* background-color: yellow; */
display: flex;
`