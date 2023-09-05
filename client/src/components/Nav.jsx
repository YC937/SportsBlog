import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { useLogin } from "../utils/LoginContext";
import '../styles/Nav.css'

export default function NavTabs() {
    const [state] = useLogin();
    const currentPage = useLocation().pathname;

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='nav-name'>SportsSpotter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto mx-auto tabs'>
                            <Link
                                to='/'
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
                                    Home
                            </Link>
                            <Link
                                to='/stadium-search'
                                className={currentPage === '/stadium-search' ? 'nav-link active' : 'nav-link'}>
                                    Stadium Search
                            </Link>
                            {state.loggedIn ? (
                                <>
                                <Link 
                                    to="/search-history"
                                    className={currentPage === "/search-history" ? "nav-link active": "nav-link"}
                                >
                                    Search History
                                </Link>
                                <Link 
                                    to="/logout"
                                    className={currentPage === "/logout" ? "nav-link active": "nav-link"}
                                >
                                    Logout
                                </Link>
                                </>
                            ) : (
                                <>
                                <Link 
                                    to="/login"
                                    className={currentPage === "/login" ? "nav-link active": "nav-link"}
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/signup"
                                    className={currentPage === "/signup" ? "nav-link active": "nav-link"}
                                >
                                    Signup
                                </Link>
                                </>
                            )}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}