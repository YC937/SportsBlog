import Logincheck from "../components/Logincheck";
// import StadiumList from "../components/StadiumList";

export default function Stadiums(props) {
    return (
        <>
        <Logincheck />
        <div className='stadiums-page'>
            <h1>Stadiums</h1>
            <StadiumList />
        </div>
        </>
    )
}
