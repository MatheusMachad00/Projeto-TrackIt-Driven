import Header from "../header";
import Footer from "../footer";
import { Subtitle, Record} from "./style"

export default function StoryScreen({userData}){
    return(
        <>
        <Header userData={userData} />
        <Subtitle>Histórico</Subtitle>
        <Record>Em breve você poderá ver o histórico dos seus hábitos aqui!</Record>
        <Footer />
        </>
    );
}