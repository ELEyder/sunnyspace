import React, { useState } from 'react';
import './index.css';

const Login: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
        setIsActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
        setIsActive(true);
    };

    const handleToggleClick = () => {
        setIsActive(!isActive);
    };

    const handleCloseClick = () => {
        setIsActive(false);
    };

    return (
        <>
            <button className="toggle-login" onClick={handleToggleClick}>Login</button>
            <div className={`wrapper ${isActive ? 'show-bg' : ''}`}>
                <div className={`from-wrapper sign-in ${isSignUp ? '' : 'show-sign'}`}>
                    <a href="#" className="close" onClick={handleCloseClick}><i className="fa-solid fa-xmark"></i></a>
                    <form method="POST">
                        <h2>SENATINET</h2>
                        <div className="input-group">
                            <input type="email" name="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" name="password" required />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="remember">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="sign-link">
                            <p>Don't have an account? <a href="#" className="signUp-link" onClick={handleSignUpClick}>Sign Up</a></p>
                        </div>
                    </form>
                    <div className="google">
                        <button className="btn-google" id="btn-google">G</button>
                    </div>
                </div>

                <div className={`from-wrapper sign-up ${isSignUp ? 'show-sign' : ''}`}>
                    <form action="{% url 'signup' %}" method="POST">
                        <h2>Sign Up</h2>
                        <div className="input-group">
                            <input type="text" name="username" pattern="[a-z0-9_-]+" required />
                            <label htmlFor="username">Username*</label>
                        </div>
                        <div className="input-group-names">
                            <div className="input-group medium">
                                <input type="text" name="firstname" required />
                                <label htmlFor="firstname">First Name*</label>
                            </div>
                            <div className="input-group medium">
                                <input type="text" name="lastname" required />
                                <label htmlFor="lastname">Last Name*</label>
                            </div>
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" required />
                            <label htmlFor="email">Email*</label>
                        </div>
                        <div className="input-group">
                            <input type="password" name="password1" required />
                            <label htmlFor="password1">Password*</label>
                        </div>
                        <div className="input-group">
                            <input type="password" name="password2" required />
                            <label htmlFor="password2">Password*</label>
                        </div>
                        <div className="remember">
                            <label><input type="checkbox" required /> I agree to the terms & conditions</label>
                        </div>
                        <button type="submit" className="btn">Sign Up</button>
                        <div className="sign-link">
                            <p>Already have an account? <a href="#" className="signIn-link" onClick={handleSignInClick}>Sign In</a></p>
                        </div>
                    </form>
                </div>

                <div className="bg"></div>
                {Array.from({ length: 10 }, (_, i) => (
                    <span key={i} style={{ '--i': 10 - i } as React.CSSProperties}></span>
                ))}
            </div>
        </>
    );
};

export default Login;