// all sign section are separated for easy management
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/Logo.png";
function SignIn() {
    return (
        <div className="SignManger">
            <div className="S-box" id="sign-in">
                <div className="s-wrap">
                    <div className="s-top">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="signlogo"
                        />
                        <Link to="/" className="back-sign">
                            <span
                                className="iconify-inline"
                                data-icon="uil:arrow-left"
                            ></span>
                        </Link>
                    </div>

                    <div className="S-title-wrap">
                        <h1 className="s-Header">Sign in</h1>
                        <p className="s-sub">
                            into your account to get started
                        </p>
                    </div>

                    <div className="inputWrap">
                        <form action="">
                            <div className="input-">
                                <input
                                    type="email"
                                    name=""
                                    id="signin-inputs"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="input-">
                                <input
                                    type="password"
                                    name=""
                                    id="signin-inputs"
                                    placeholder="Password"
                                />
                            </div>
                            <p className="s-forgot">Forgoot Password</p>
                        </form>
                    </div>

                    <div className="s-bottom">
                        <div className="button-signin-menu">
                            <Link to="/" className="link-nav-button">
                                Sign In
                            </Link>
                        </div>
                        <Link
                            to="/Accounts/SignUp-FirstStep"
                            className="else-sign"
                            style={{ color: "black" }}
                        >
                            Are you new{" "}
                            <span className="blue-mainHeader">Sign up</span> to
                            get started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SignUpFirst() {
    return (
        <div className="SignManger">
            <div className="S-box" id="sign-first">
                <div className="s-wrap">
                    <div className="s-top">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="signlogo"
                        />
                        <Link to="/" className="back-sign">
                            <span
                                className="iconify-inline"
                                data-icon="uil:arrow-left"
                            ></span>
                        </Link>
                    </div>
                    <div className="S-title-wrap">
                        <h1 className="s-Header">Sign up</h1>
                        <p className="s-sub">
                            into a new account to get started
                        </p>
                    </div>
                    <div className="inputWrap">
                        <form action="">
                            <div className="input-">
                                <input
                                    type="email"
                                    name=""
                                    id="signin-inputs"
                                    placeholder="New Email Address"
                                />
                            </div>
                            <div className="input-">
                                <input
                                    type="password"
                                    name=""
                                    id="signin-inputs"
                                    placeholder="Password"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="s-bottom">
                        <div className="button-signin-menu">
                            <Link
                                to="/Accounts/SignUp-SecondStep"
                                className="link-nav-button"
                            >
                                Next
                            </Link>
                        </div>
                        <Link
                            to="/Accounts/SignIn"
                            style={{ color: "black" }}
                            className="else-sign"
                        >
                            Already have an account{" "}
                            <span className="blue-mainHeader">Sign in</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SignUpSecond() {
    return (
        <div className="SignManger">
            <div className="S-box" id="sign-second">
                <div className="s-wrap">
                    <div className="s-top">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="signlogo"
                        />
                        <Link to="/" className="back-sign">
                            <span
                                className="iconify-inline"
                                data-icon="uil:arrow-left"
                            ></span>
                        </Link>
                    </div>

                    <div className="S-title-wrap">
                        <h1 className="s-Header">Sign up</h1>
                        <p className="s-sub">
                            into a new account to get started
                        </p>
                    </div>

                    <div className="inputWrap">
                        <form action="">
                            <div className="input-">
                                <input
                                    type="email"
                                    name=""
                                    id="signin-inputs"
                                    placeholder="FullName"
                                />
                            </div>
                            <div className="input-">
                                <input
                                    type="password"
                                    name=""
                                    id="signin-inputs"
                                    placeholder="Phone Name"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="s-bottom">
                        <div className="button-signin-menu">
                            <Link
                                to="/Accounts/Check-OTP"
                                className="link-nav-button"
                            >
                                Sign up
                            </Link>
                        </div>
                        <Link
                            to="/Accounts/SignIn"
                            style={{ color: "black" }}
                            className="else-sign"
                        >
                            Already have an account{" "}
                            <span className="blue-mainHeader">Sign in</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SignOTP() {
    return (
        <div className="SignManger">
            <div className="S-box" id="sign-otp">
                <div className="s-wrap">
                    <div className="s-top">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="signlogo"
                        />
                        <Link to="/" className="back-sign">
                            <span
                                className="iconify-inline"
                                data-icon="uil:arrow-left"
                            ></span>
                        </Link>
                    </div>

                    <div className="S-title-wrap">
                        <h1 className="s-Header">OTP check</h1>
                        <p className="s-sub">type the otp sent to your mail</p>
                    </div>

                    <div className="inputWrap">
                        <form action="">
                            <div className="OTP-wrap">
                                <div className="OTP-wrap-inner">
                                    <input
                                        type="text"
                                        name=""
                                        id="OTP-first"
                                        className="OTP-box"
                                    />
                                    <input
                                        type="text"
                                        name=""
                                        id="OTP-first"
                                        className="OTP-box"
                                    />
                                    <input
                                        type="text"
                                        name=""
                                        id="OTP-first"
                                        className="OTP-box"
                                    />
                                    <input
                                        type="text"
                                        name=""
                                        id="OTP-first"
                                        className="OTP-box"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="s-bottom">
                        <div className="button-signin-menu">
                            <a href="#" className="link-nav-button">
                                Done
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { SignIn, SignUpFirst , SignUpSecond, SignOTP};