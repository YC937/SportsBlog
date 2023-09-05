import { useLogin } from "../utils/LoginContext";
import LoginCheck from "../components/LoginCheck";
// import TopNav from "../components/TopNav";

export default function Home(props) {
  const [ state, dispatch ] = useLogin();

  const userData = state.user || {message: "not logged in"};

  return (
    <>
    <LoginCheck />
    { state.loggedIn ? (
      <>
      <div className="home-pad">
        <h1>Welcome to Sports Spotter!</h1>
        <p>Click on Stadium Search to begin finding your stadiums!</p>
      </div>
    </>
    ) : (
      <div className="home-pad">
        <h1>Welcome to Sports Spotter!</h1>
        <h3>Tired of using multiple platform to search for stadium locations, game schedules, and weather conditions? SportsSpotter is a one-stop-shop for all your sports needs. Search for your desired stadium and get all the information you need in one place!</h3>
        <h4>Please Login or Signup to search stadiums!</h4>
      </div>
    )}
    {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
    </>
  )
}


