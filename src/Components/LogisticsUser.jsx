import { Link } from "react-router-dom";
import './Log.css'
function LogisticsUser() {
    return (
        <div className="LogPage">
            <div className="log-wrap">
                <div className="overview">
                    <h1 className="maintext-log">
                        Hi, <br /> User
                    </h1>
                    <p>here is an overview of the activities on your account</p>
                </div>
                <div className="orders">
                    <TrackingBoxitems Title='Package 1' PackInfo='big' TrackingId='#207709749034' />
                </div>
                <div className="moreinfo">
                    <div className="boxinfo"></div>
                </div>
        </div>
    
    </div>
    )
}


function TrackingBoxitems(props){
    const Title = props.Title
    const TrackingId = props.TrackingId
    return(
        <button className="Order-boxitem">
            <h1 className="packagee">{Title}</h1>
            <p className="packageid">{TrackingId}</p>
            <div className="extrainfo" id="drop">
                div.progressBar
            </div>
        </button>
    )
}
export { LogisticsUser };
