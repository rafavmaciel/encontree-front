import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../redux/UserReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (state.user.isAuthenticated === true) {
            axios.get(process.env.REACT_APP_BASE_URL_LOCAL + "user/?email=" + state.user.email).then((response) => {
                if (response.data == null) {
                    setAuth(false);
                } else {
                    setAuth(true);
                }
            });
        } else {
            setAuth(false);
        }
    }, [state.user.isAuthenticated]);
    function handleLogout() {
        dispatch({
            type: "LOGOUT",
        });
        navigate("/home");
    }
    return (
        <nav className="bg-white px-2 sm:px-4 py-1 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 hover:border-b-4 hover:border-blue-700 transition duration-500 dark:border-gray-600">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/home" className="link-nostyle flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Encontree
                    </span>
                </Link>
                <div className="flex md:order-2">
                    {auth ? (
                        <a
                            type="button"
                            onClick={() => {
                                handleLogout();
                            }}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 link-nostyle"
                        >
                            Sair
                        </a>
                    ) : (
                        <div
                            type="button"
                            href="/login"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 link-nostyle"
                        >
                            <Link to="/login" className="link-nostyle text-white">
                                Entrar
                            </Link>
                        </div>
                    )}
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col bg-violet-100 p-2 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link
                                to="/home"
                                className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 link-nostyle"
                            >
                                Home
                            </Link>
                        </li>
                        {auth ? (
                            <>
                                <li>
                                    <Link
                                        to="/minha-conta"
                                        className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 link-nostyle"
                                    >
                                        Minha conta
                                    </Link>
                                </li>
                            </>
                        ) : null}
                        <li>
                            <a
                                href="#"
                                className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 link-nostyle"
                            >
                                Sobre
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
