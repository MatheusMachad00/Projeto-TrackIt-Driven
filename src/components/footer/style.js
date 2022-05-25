import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 0 30px;
    background-color: #fff;
    /* z-index: 1; */
    
    p {
        font-family: 'Lexend Deca';
        font-size: 18px;
        color: #52b6ff;
    }
    .circularProgressbar {
        position: absolute;
        bottom: 10px;
        right: 0;
        left: 0;
        margin: auto;
        width: 90px;
    }
`