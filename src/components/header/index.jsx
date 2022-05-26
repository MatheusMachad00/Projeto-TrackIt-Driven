import {Head} from "./style"

export default function Header({dataStorage}){
    return(
        <Head>
            <p>TrackIt</p>
            <img src={dataStorage.image} alt="profile photo" />
        </Head>
    );
}