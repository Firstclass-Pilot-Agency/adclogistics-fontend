
function LogisticsUser(){
    return (
        <div className="LogLayout">
            <div className="buttonLinks">
                <div className="wrap-log">
                    <div className="bttn-link-log-active">
                        <span
                            className="iconify-inline"
                            data-icon="bx:bxs-dashboard"
                        ></span>
                        <p className="log-text">Dashboard</p>
                    </div>
                    <div className="bttn-link-log-inactive">
                        <span
                            className="iconify-inline"
                            data-icon="fluent:arrow-trending-16-filled"
                        ></span>
                        <p className="log-text">Transactions</p>
                    </div>
                    <div className="bttn-link-log-inactive">
                        <span
                            className="iconify-inline"
                            data-icon="akar-icons:folder"
                        ></span>
                        <p className="log-text">Order</p>
                    </div>
                    <div className="bttn-link-log-inactive">
                        <span
                            className="iconify-inline"
                            data-icon="eva:settings-fill"
                        ></span>
                        <p className="log-text">Settings</p>
                    </div>
                </div>
            </div>
            <div className="EditSection">
                <DashBoard />
            </div>
        </div>
    );
    
}



function DashBoard() {
    return (
        <div className="dashboard" id="Dashboard">
            <div className="wrap">
                <div className="Title-log">
                    <h1>Dashboard</h1>
                    <p>get an overview of all activites in your account</p>
                </div>
                <MyCard />
            </div>
        </div>
    );
}

function Wallet(){

}

function Order(){

}
function Settings{

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
    )
}
export {LogisticsUser}