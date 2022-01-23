function HomeMain() {
    return (
        <div className="HomeMain">
            <div className="HomeMain-overlay">
            <div className="HomeMain-wrap">
                <h1 className="mainHeader">
                    The New <span className="blue-mainHeader">Definition</span>{" "}
                    <br /> of Logistics
                </h1>
                <p className="subHeader">
                    ADC is your number one online <br />
                    logistics site in Nigeria. transport <br />
                    items with the push of a button <br />
                    anytime anywhere
                </p>
                <div className="track-button">
                    <div className="input-tracking">
                        <input type="text" name="" id="id-inputs" placeholder='Enter Tracking ID'/>
                        <div className="button-signin">
                            <a href="#" className="link-nav-button">Search</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}


function Qualities() {
    return (
        <div className="Qualities">
            <div className="Qualities-wrap">
                <h1 className="mainHeader">
                    Get <span className="blue-mainHeader">Smooth</span>{" "}
                    Deliveries <br />
                    form Day One
                </h1>
                <p className="subHeader">
                    ADC is your number one online <br />
                    logistics site in Nigeria. transport <br />
                    items with the push of a button <br />
                    anytime anywhere
                </p>
            </div>
            <div className="Qualities-boxes">
                <div className="Qualities-wrap-box">
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                    <div className="Qualities-box-subs">
                        <div className="Qualities-sub-box"></div>
                        <p className="title-Qualities-box">Quick Delivery</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


function AboutUS() {
    return (
        <div className="AboutUS">
            <div className="AboutUS-wrap">
                <h1 className="mainHeader">
                    Why Should You <br />{" "}
                    <span className="blue-mainHeader">Pick Us</span>
                </h1>
            </div>
        </div>
    );
}


export  {HomeMain, Qualities, AboutUS}