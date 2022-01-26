import { Link } from "react-router-dom";
import './Log.css'
function LogisticsUser() {
    return (
        <div className="logi">
            <div className="wrap-logi">
                <div className="Order">
                    <div className="TextMainSection">
                        <h1>My Orders</h1>
                        <p>here are your activites realtive to your packages. You can manage
                            and track your packages from here.
                        </p>
                    </div>
                    <div className="Trackid">
                        <div className="input-tracking">
                            <input type="text" name="" id="id-inputs" placeholder='Enter Tracking ID' />
                            <div className="button-signin">
                                <a href="#" className="link-nav-button">Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { LogisticsUser };
