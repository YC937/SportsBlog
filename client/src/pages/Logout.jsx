

export default function Logout() {
    const [state, dispatch] = useLogin();
    const navigate = useNavigate();
    useEffect(() => {
        Auth.logout();
        dispatch({
            type: "logout"
        });
        navigate("/");
    }, []);

    return (
        <>
            Logout
        </>
    )
}