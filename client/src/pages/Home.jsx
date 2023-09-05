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
        <h3>Tired of using multiple platform to search for stadium locations, game schedules, and weather conditions? SportsSpotter is a one-stop-shop for all your sports needs. Search for your desired stadium and get all the information you need in one place!</h3>
        <h4>Please Login or Signup to search stadiums!</h4>
      </div>
    )}
    {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
    </>
  )
}





// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>SportsSpotter</title>
//   <style>
    
//     body, h1, h2, h3, p {
//       margin: 0;
//       padding: 0;
//     }

//     body {
//       font-family: Arial, sans-serif;
//     }

//     header {
//       background-color: #f0f0f0;
//       padding: 20px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//     }

//     nav {
//       display: flex;
//       justify-content: space-between;
//       width: 100%;
//       max-width: 800px;
//       margin-bottom: 10px;
//     }

//     .nav-left, .nav-right {
//       display: flex;
//       align-items: center;
//     }

//     .nav-button {
//       background-color: #007bff;
//       color: white;
//       border: none;
//       border-radius: 5px;
//       padding: 5px 10px;
//       margin: 0 5px;
//       cursor: pointer;
//       transition: background-color 0.3s;
//     }

//     .nav-button:hover {
//       background-color: #0056b3;
//     }

//     .welcome-message {
//       text-align: center;
//       margin-bottom: 20px;
//     }

//     .description {
//       text-align: center;
//       margin: 50px auto;
//       max-width: 800px;
//       font-size: 18px;
//       color: #333;
//     }

//     .sports-gifs {
//       display: flex;
//       justify-content: space-between;
//       max-width: 800px;
//       margin: 20px auto;
//       margin-top: 50px;
//       height: 300px;
//     }

//     .gif-container {
//       flex: 1;
//       padding: 10px;
//       border: 1px solid #ddd;
//       border-radius: 5px;
//       background-color: #f9f9f9;
//       margin-top: 50px;
//       height: 300px;
//     }

//     .gif-container:first-child {
//       margin-right: 10px;
//     }

//     .gif-container:last-child {
//       margin-left: 10px;
//     }
//   </style>
// </head>
// <body>
//   <header>
//     <nav>
//       <div class="nav-left">
//         <button class="nav-button">Home</button>
//       </div>
//       <div class="nav-right">
//         <button class="nav-button">ESPN</button>
//         <button class="nav-button">Login / Signup</button>
//       </div>
//     </nav>
//     <div class="welcome-message">
//       <p>Welcome to SportsSpotter! Please Login or Signup to continue</p>
//     </div>
//   </header>
//   <div class="description">
//     <p> The Sports Spotter app is your go-to solution for seamless game-day experiences.
//         Explore stadium locations, upcoming game schedules, and real-time weather forecasts in the vicinity of each stadium. 
//         Whether you're a die-hard fan or simply looking to catch a game, Sports Spotter ensures you're always informed and prepared for the perfect sports outing.</p>
//   </div>
//   <main>
//     <div class="sports-gifs">
//       <div class="gif-container">
//       </div>
//       <div class="gif-container">
//       </div>
//     </div>
//   </main>
// </body>
// </html>
