
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SignIn.css";

export default function SignIn() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="signin-page">

            <div className="signin-card">

                {/* HEADER */}
                <div className="signin-header">

                    <span className="signin-badge">
                        WELCOME BACK
                    </span>

                    <h1>Sign In</h1>

                    <p>
                        Sign in to continue to your account
                    </p>

                </div>

                {/* FORM */}
                <form className="signin-form">

                    {/* EMAIL */}
                    <div className="input-group">

                        <label>
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    {/* PASSWORD */}
                    <div className="input-group">

                        <label>
                            Password
                        </label>

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Enter your password"
                            required
                        />

                    </div>

                    {/* SHOW PASSWORD */}
                    <button
                        type="button"
                        className="show-all-password"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        {showPassword
                            ? "Hide Password"
                            : "Show Password"}
                    </button>

                    {/* REMEMBER */}
                    <div className="remember-row">

                        <label className="remember">

                            <input
                                type="checkbox"
                            />

                            <span>
                                Remember me
                            </span>

                        </label>

                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="signin-submit"
                    >

                        <span>
                            Sign In
                        </span>

                        <span className="arrow">
                            →
                        </span>

                    </button>

                </form>

                {/* DIVIDER */}
                <div className="signin-divider">

                    <span></span>

                    <p>OR</p>

                    <span></span>

                </div>

                {/* SIGN UP */}
                <div className="signup-text">

                    <span>
                        Don't have an account?
                    </span>

                    <Link to="/SignUp">
                        Sign Up
                    </Link>

                </div>

            </div>

        </div>
    );
}

