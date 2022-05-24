import styled from 'styled-components'


export const DayBlock = styled.div`
margin: 28px 0 0 17px;
div{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    color: #126BA5;
}
p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    color: #BABABA;
    margin-top: 5px;
}
`

export const TaskBlock = styled.div`
margin-left: 11px;
margin-top: 28px;
h1{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #666666;
}
h2{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
}
`

export const Task = styled.div`
width: 340px;
height: 94px;
display: flex;
margin: 0 17px 10px 5px;
background: #FFFFFF;
border-radius: 5px;
justify-content: center;
align-items: center;
`

export const DivImg = styled.div`
    width: 69px;
    height: 69px;
    background-color: #E7E7E7; 
    margin-left: 35px;
    border-radius: 5px;
    background: ${(props) => (props.selected ? "#8FC549" : "#E7E7E7")};
img{
    width: 35px;
    height: 28px;
    margin: 20px 15px 21px 16px;
}
`