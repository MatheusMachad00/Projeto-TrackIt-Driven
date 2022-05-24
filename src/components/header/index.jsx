import {Head} from "./style"

export default function Header({userData}){
    return(
        <Head>
            <p>TrackIt</p>
            <img src={userData.image} alt="profile photo" />
        </Head>
    );
}