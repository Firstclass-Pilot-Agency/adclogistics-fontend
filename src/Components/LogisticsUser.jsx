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
                    <div className="wrap-o">
                        <div className="track-button" style={{background: 'black',margin:'auto', marginTop:'0', marginBottom:"20px", width: 'fit-content'}}>
                            <div className="input-tracking" style={{background: 'black',}}>
                                <input type="text" name="" id="id-inputs" placeholder='Enter Tracking ID'/>
                                <div className="button-signin">
                                    <a href="#" className="link-nav-button">Search</a>
                                </div>
                            </div>
                        </div>
                        <TrackingBoxitems Title='Package 1' PackInfo='big' TrackingId='#207709749034' Status='motion' describePack='12 set of exotic wine'/>
                        <TrackingBoxitems Title='Package 1' PackInfo='big' TrackingId='#207709749034' Status='motion' describePack='12 set of exotic wine'/>
                        <TrackingBoxitems Title='Package 2' PackInfo='big' TrackingId='#207709749034' Status='done' describePack='10 set of exotic nike shoes '/>
                    </div>
                    
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
    const Status = props.Status
    const describePack = props.describePack
    return(
        <button className="Order-boxitem">
            <div className="tpsec-pack">
                <div className="left-pack">
                    <h1 className="packagee">{Title}</h1>
                    <p className="packageid">{TrackingId}</p>
                </div>
                <div className="left-pack">
                <span class="iconify" data-icon="uil:arrow-right" style={{color:" white", float:'right'}} data-width="26"></span>
                </div>
            </div>
            
            <div className="extrainfo">
                <div className="progressBar">
                    <div className="bar"></div>
                </div>
                <div className="quickinfo">
                    <span className="iconify" data-icon="ph:package-bold"
                                        style={{color:" white"}} id="i-eeone"></span>

                    <p>{describePack}</p>
                </div>
                <StatusIndicator Status={Status}/>
            </div>
        </button>
    )
}


// add status to database
function StatusIndicator(props){
    const Stats = props.Status;
    if(Stats === 'motion'){
        return (
            <div className="status">
                <div className="stats" style={{background:'#FBC12E'}}>
                    <p>In Motion</p>
                </div>
            </div>
        )
    }
    if(Stats === 'pending'){
        return (
            <div className="status">
                <div className="stats" style={{background:'gray'}}>
                    <p>Pending</p>
                </div>
            </div>
        )
    }
    if(Stats === 'done'){
        return (
            <div className="status">
                <div className="stats" style={{background:'#2BFFBF'}}>
                    <p>Done</p>
                </div>
            </div>
        )
    }
}
export { LogisticsUser };
