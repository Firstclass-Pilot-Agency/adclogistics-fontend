import { Link } from "react-router-dom";
import './Log.css'
function LogisticsUser() {
    return (
        <div className="LogPage">
            <div className="log-wrap">
                <div className="overview">
                    <h1 className="maintext-log">
                        Hi, User
                    </h1>
                    <p>here is an overview of the activities on your account</p>
                </div>
                <div className="orders">
                    <div className="Order-boxitem">
                        <h1 className="packagee">Title</h1>
                        <p className="packageid">#108303819289</p>
                        <p className="orderDescription">a heavy package</p>
                    </div>
                </div>
                <div className="moreinfo">
                    <div className="maplog-Map"></div>
                    <div className="boxinfo"></div>
                </div>
            </div>
        </div>

    )
}
export { LogisticsUser };
