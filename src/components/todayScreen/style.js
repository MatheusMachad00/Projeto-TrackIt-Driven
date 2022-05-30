import styled from 'styled-components'

export const MainChunk = styled.div`
background-color: #F2F2F2;

`

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

.completed{
    color: #8FC549;
}
`

export const TaskBlock = styled.div`
margin-left: 11px;
margin-top: 28px;
background-color: #F2F2F2;

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

h3{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
}
`

export const TaskCompleted = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    margin-top: 10px;
    color: #8FC549;
`

export const Loading = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 50%;
`