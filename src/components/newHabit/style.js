import styled from 'styled-components'

export const NewHabitsBlock = styled.div`
width: 100%;
height: 180px;
background-color: #FFFFFF;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* padding: 18px 18px; */
padding-bottom: 18px;
position: absolute;
/* background-color: rebeccapurple; */
z-index: 300;

input{
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: -500px;
    
}
input::placeholder {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #DBDBDB;
}
button{
    background-color: #FFFFFF;
    /* background-color: ${props => props.habilitado ? "#CFCFCF" : "#FFFFFF"}; */
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
}
.selected{
    background-color: #CFCFCF;
    color: #FFFFFF;
}
`

export const BottomRight = styled.div`
position: absolute;
right: 0;
bottom: 0;
margin-right: 10px;
button{
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    color: #52B6FF;
}
.save{
    background-color: #52B6FF;
    color: #FFFFFF;
}
`

export const CancelButton = styled.p`
    width: 84px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    color: #52B6FF;
    position: absolute;
    /* background-color: red; */
    padding: 4px 8px;
    right: 100px;
    bottom: 2.7px;
    justify-content: center;
    text-align: center;
`