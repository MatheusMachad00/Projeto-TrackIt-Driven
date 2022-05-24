import styled from 'styled-components'

export const SignScreen = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 88px;
img{
    width: 180px;
    height: 178.38px;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input{
    margin-bottom: 6px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca';
}
input::placeholder {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #DBDBDB;
}
button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    color: #FFFFFF;
    border: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    display: flex;
    justify-content: center;
    align-items: center;
}
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
}
`