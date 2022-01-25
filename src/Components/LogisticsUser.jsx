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
                <div className="orders"></div>
                <div className="moreinfo"></div>
            </div>
        </div>

    )
}
export { LogisticsUser };
