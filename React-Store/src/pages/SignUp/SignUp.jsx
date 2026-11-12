
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SignUp.css";

export default function SignUp() {

    const [showPasswords, setShowPasswords] = useState(false);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Account created successfully!");
    }

    return (
        <div className="signup-page">

            <div className="signup-card">

                {/* HEADER */}
                <div className="signup-header">

                    <span className="signup-badge">
                        CREATE ACCOUNT
                    </span>

                    <h1>Sign Up</h1>

                    <p>
                        Create your account to get started
                    </p>

                </div>

                {/* FORM */}
                <form
                    className="signup-form"
                    onSubmit={handleSubmit}
                >

                    {/* FULL NAME */}
                    <div className="input-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            required
                        />

                    </div>

                    {/* EMAIL */}
                    <div className="input-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    {/* PASSWORD */}
                    <div className="input-group">

                        <label>Password</label>

                        <input
                            type={showPasswords ? "text" : "password"}
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>

                    {/* CONFIRM PASSWORD */}
                    <div className="input-group">

                        <label>Confirm Password</label>

                        <input
                            type={
                                showPasswords
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            required
                        />

                    </div>

                    {/* SHOW PASSWORD BUTTON */}
                    <button
                        type="button"
                        className="show-all-passwords"
                        onClick={() =>
                            setShowPasswords(!showPasswords)
                        }
                    >
                        {showPasswords
                            ? "Hide Passwords"
                            : "Show Passwords"}
                    </button>

                    {/* TERMS */}
                    <div className="terms-row">

                        <label className="terms">

                            <input
                                type="checkbox"
                                required
                            />

                            <span>
                                I agree to the Terms & Conditions
                            </span>

                        </label>

                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        className="signup-submit"
                    >
                        <span>Create Account</span>

                        <span className="arrow">
                            →
                        </span>
                    </button>

                </form>

                {/* DIVIDER */}
                <div className="signup-divider">

                    <span></span>

                    <p>OR</p>

                    <span></span>

                </div>

                {/* SIGN IN */}
                <div className="signin-text">

                    <span>
                        Already have an account?
                    </span>

                    <Link to="/SignIn">
                        Sign In
                    </Link>

                </div>

            </div>

        </div>
    );
}
