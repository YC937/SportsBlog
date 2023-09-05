import LoginCheck from '../components/LoginCheck';
import Stadiums from './Stadiums';

export default function StadiumSearch(props) {
    return (
        <>
        <LoginCheck />
        <div className='stadium-search-page'>
            <h1>Stadium Search</h1>
            <Stadiums />
        </div>
        </>
    )
}