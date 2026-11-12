import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import { ProductDetails } from "./pages/Products/ProductDetails";
import Posts from "./pages/Posts/Posts";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import "./pages/css/App.css";


export default function App() {

    const [darkMode, setDarkMode] = useState(false);


    function toggleTheme() {

        setDarkMode(!darkMode);

        document.body.classList.toggle("dark-mode");

    }


    return (
        <>

            {/* NAVBAR */}

            <nav className="navbar">


                {/* LOGO */}

                <div className="nav-logo">

                    <span>A.</span>VAGHARI

                </div>


                {/* MAIN LINKS */}

                <div className="nav-links">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/products">
                        Products
                    </Link>

                    <Link to="/about">
                        About us
                    </Link>

                    <Link to="/Posts">
                        Posts
                    </Link>

                </div>


                {/* AUTH */}

                <div className="nav-auth">

                    <Link
                        className="login-btn"
                        to="/SignIn"
                    >
                        Sign In
                    </Link>


                    <span className="auth-divider">
                        |
                    </span>


                    <Link
                        className="signin-btn"
                        to="/SignUp"
                    >
                        Sign Up
                    </Link>


                    {/* THEME BUTTON */}

                    <button
                        className="theme-btn"
                        onClick={toggleTheme}
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>

            </nav>


            <hr />


            {/* ROUTES */}

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/Posts"
                    element={<Posts />}
                />


                {/* SIGN IN */}

                <Route
                    path="/SignIn"
                    element={<SignIn />}
                />


                {/* SIGN UP */}

                <Route
                    path="/SignUp"
                    element={<SignUp />}
                />


                {/* PRODUCT DETAILS */}

                <Route
                    path="/product/:id"
                    element={<ProductDetails />}
                />
                

            </Routes>

        </>
    );
}