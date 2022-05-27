import styled from 'styled-components'

export const TodayTask = styled.div`
width: 340px;
height: 94px;
display: flex;
margin: 0 17px 10px 5px;
background: #FFFFFF;
border-radius: 5px;
justify-content: center;
align-items: center;


:last-child{
    margin-bottom: 105px;
}
`

export const TaskData = styled.div`
display: flex;
flex-direction: column;
margin-right: 35px;
width: 205px;

span{
    color: ${props => props.sequence ? "#8FC549" : ""};
}
`
export const Highscore = styled.span`
    color: ${props => props.record ? "#8FC549" : ""};
`

export const DivImg = styled.div`
    width: 69px;
    height: 69px;
    background-color: #E7E7E7; 
    /* margin-left: 50px; */
    border-radius: 5px;
    background: ${props => (props.isfinished ? "#8FC549" : "#E7E7E7")};

img{
    width: 35px;
    height: 28px;
    margin: 20px 15px 21px 16px;
}
`