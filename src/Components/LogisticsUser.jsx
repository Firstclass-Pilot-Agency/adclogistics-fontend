import {  Link } from "react-router-dom";
import './Log.css'
function LogisticsUser() {
    return (
<<<<<<< HEAD
        <div className="LogPage">
            <div className="log-wrap">
                <div className="overview"></div>
                <div className="orders"></div>
                <div className="moreinfo"></div>
=======
        <div className="LogLayout">
            <div className="buttonLinks">
                <div className="wrap-log" id="wrap-logs">
                    <button className="bttn-link-log active" id="dash">
                        <span
                            className="iconify-inline"
                            data-icon="bx:bxs-dashboard"
                        ></span>
                        <p className="log-text">Dashboard</p>
                    </button>
                    <button className="bttn-link-log" id="wallet">
                        <span
                            className="iconify-inline"
                            data-icon="fluent:arrow-trending-16-filled"
                        ></span>
                        <p className="log-text">Transactions</p>
                    </button>
                    <button className="bttn-link-log" id="order">
                        <span
                            className="iconify-inline"
                            data-icon="akar-icons:folder"
                        ></span>
                        <p className="log-text">Order</p>
                    </button>
                    <button className="bttn-link-log" id="setting">
                        <span
                            className="iconify-inline"
                            data-icon="eva:settings-fill"
                        ></span>
                        <p className="log-text">Settings</p>
                    </button>
                </div>
            </div>
            <div className="EditSection">
                
            </div>
        </div>
    );
}

function DashBoard() {
    return (
        <div className="dashboard" id="Dashboardn">
            <div className="wrap">
                <div className="Title-log">
                    <h1>Dashboard</h1>
                    <p>get an overview of all activites in your account</p>
                </div>
                <MyCard />
>>>>>>> 0f7e2064540db9f51a8627c21379759935d6a297
            </div>
        </div>
    );
}

<<<<<<< HEAD

=======
function Wallet() {
    return (
        <div className="Wallet" id="Walletn">
            <div className="wrap">
                <div className="Title-log">
                    <h1>My Wallet</h1>
                    <p>get an overview of all activites in your account</p>
                </div>
                <MyCard id='w-Card'/>
                <div className="w-box" id='w-bal'>
                    <div className="b-wrap">
                        <div className="top-b">
                            <h2 className="b-text-header">Balance</h2>
                        </div>
                        <div className="butt-b">
                            <h1 className="cash">$00.0</h1>
                            <p className="lastdate">2hr ago</p>
                        </div>
                    </div>
                </div>
                <div className="w-box" id='w-fund'>
                    <div className="wrap-Fundwallet">
                        <div className="top-b">
                            <h2 className="b-text-header">Fund Your Wallet</h2>
                            <p className="b-text-sub">
                                You are about to fund your wallet with
                            </p>
                        </div>
                        <form action="">
                            <div className="input-">
                                <input
                                    type="email"
                                    name=""
                                    id="signin-inputs"
                                    placeholder="Fund Amount"
                                />
                            </div>

                            <div className="paylinks">
                                <div className="button-signin">
                                    <Link
                                        to="google.com"
                                        className="link-nav-button"
                                    >
                                        PayPal
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-box" id='w-trans'>
                    <div className="wrap-Fundwallet">
                        <div className="top-b">
                            <h2 className="b-text-header">Transactions</h2>
                            <p className="b-text-sub">
                                Here are a list of transactions made by you
                            </p>
                        </div>
                        <div className="trans-section">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function Order() {
    return (
        <div className="Order" id="Ordern">
            Order
        </div>
    );
}
function Settings() {
    return (
        <div className="Setting" id="Settingn">
            Settings
        </div>
    );
}
function MyCard() {
    return (
        <div className="CardWrap">
            <div className="stylBoxes">
                <div className="box1"></div>
                <div className="box2"></div>
            </div>
            <div className="content">
                <p className="cardidnumber">3546 5464 6453 6356</p>
                <h1 className="amountinCard">$00.0</h1>
            </div>
        </div>
    );
}
>>>>>>> 0f7e2064540db9f51a8627c21379759935d6a297
export { LogisticsUser };
