// all sign section are separated for easy management

function SignIn() {
    return (
        <div className="S-box" id='sign-in'>
            <div className="s-wrap">
                <div className="s-top">
                    <img src="" alt="Company Logo" />
                    <img src="" alt="back" className='back-sign'/>
                </div>

                <div className="S-title-wrap">
                    <h1 className="s-Header">Sign in</h1>
                    <p className="s-sub">into your account to get started</p>
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
                        <p className='s-forgot'>Forgoot Password</p>
                    </form>
                </div>

                <div className="s-bottom">
                    <div className="button-signin-menu">
                        <a href="#" className="link-nav-button">
                            Sign In
                        </a>
                    </div>
                    <p className='else-sign'>
                        Are you new{" "}
                        <span className="blue-mainHeader">Sign up</span> to get
                        started
                    </p>
                </div>
            </div>
        </div>
    );
}

function SignUpFirst() {
    return (
        <div className="S-box" id='sign-first'>
            <div className="s-wrap">
                <div className="s-top">
                    <img src="" alt="Company Logo" />
                    <img src="" alt="back" className='back-sign'/>
                </div>

                <div className="S-title-wrap">
                    <h1 className="s-Header">Sign up</h1>
                    <p className="s-sub">into a new account to get started</p>
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
                        <a href="#" className="link-nav-button">
                            Next
                        </a>
                    </div>
                    <p className='else-sign'>
                        Already have an account {" "}
                        <span className="blue-mainHeader">Sign in</span> 
                    </p>
                </div>
            </div>
        </div>
    );
}

function SignUpSecond() {
    return (
        <div className="S-box" id='sign-second'>
            <div className="s-wrap">
                <div className="s-top">
                    <img src="" alt="Company Logo" />
                    <img src="" alt="back" className='back-sign'/>
                </div>

                <div className="S-title-wrap">
                    <h1 className="s-Header">Sign up</h1>
                    <p className="s-sub">into a new account to get started</p>
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
                        <a href="#" className="link-nav-button">
                            Sign up
                        </a>
                    </div>
                    <p className='else-sign'>
                        Already have an account {" "}
                        <span className="blue-mainHeader">Sign in</span> 
                    </p>
                </div>
            </div>
        </div>
    );
}

export { SignIn, SignUpFirst , SignUpSecond};