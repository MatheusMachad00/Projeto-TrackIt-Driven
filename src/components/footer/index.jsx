import { useNavigate, Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { FooterContainer } from "./style"

export default function Footer(){
    const navigate = useNavigate();

    return(
        <>
        <FooterContainer>
        <p onClick={() => navigate('/habitos')}>Hábitos</p>
        <Link to={"/hoje"}>
            <CircularProgressbar
                    onClick={() => navigate('/hoje')}
                    className="circularProgressbar"
                    text={'Hoje'}
                    background={true}
                    backgroundPadding={6}
                    styles={{
                        size:{
                            width: `91px`,
                            height: `91px`
                        },
                        path: {
                            stroke: `#fff`,
                            strokeLinecap: 'round',
                        },
                        trail: {
                            stroke: '#52b6ff',
                            strokeLinecap: 'round',
                        },
                        text: {
                            fill: '#fff',
                            fontSize: '18px',
                            fontFamily: 'Lexend Deca',
                        },
                        background: {
                            fill: '#52b6ff',
                        },
                    }}
                />
                </Link>
            <p onClick={() => navigate('/historico')}>Histórico</p>
        </FooterContainer>
        </>
    );
}