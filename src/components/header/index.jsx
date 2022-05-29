import { Head } from "./style"

export default function Header({ dataStorage, userData }) {
    if (dataStorage !== null) {
        return (
            <Head>
                <p>TrackIt</p>
                <img src={dataStorage.image} alt="profile photo" />
            </Head>
        );
    } else return (
        <Head>
            <p>TrackIt</p>
            <img src={userData.image} alt="profile photo" />
        </Head>
    )
}