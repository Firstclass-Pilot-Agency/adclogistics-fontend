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

                    <div className="orderinfo">
                        <div className="noidgiven">
                            <h1 style={{fontSize:'18px', color:'gray' } }>No Tracking Id Given <span style={{fontSize:'13px', color:'rgb(230, 230, 230'  }}><p>enter an id to track</p></span> </h1>
                        </div>
                    </div>

                    <div className="addOrder">
                        <div className="pluswrap">
                            <div className="plusbox">
                                <span className="iconify" style={{display:'inline'} } data-icon="uil:plus" data-width="25"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export { LogisticsUser };
