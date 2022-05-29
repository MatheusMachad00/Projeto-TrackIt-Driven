import { useEffect } from "react";

import Header from "../header";
import Footer from "../footer";
import { Subtitle, Record} from "./style"

export default function StoryScreen({dataStorage, userData}){


    return(
        <>
        <Header dataStorage={dataStorage} userData={userData}/>
        <Subtitle>Histórico</Subtitle>
        <Record>Em breve você poderá ver o histórico dos seus hábitos aqui!</Record>
        <Footer />
        </>
    );
}